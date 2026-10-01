import type { NextRequest } from "next/server";

/**
 * app/api/assistant/public/[...path]/route.ts
 * ------------------------------------------
 * Same-origin proxy in front of the Zoiko Billing backend's public assistant
 * (ZB-AI-PUB-001). The widget posts to /api/assistant/public/* on this origin,
 * this handler forwards to the FastAPI backend on the server.
 *
 * Why a proxy instead of calling the backend straight from the browser:
 *   - The backend origin must NOT be a NEXT_PUBLIC_ var. Anything prefixed
 *     NEXT_PUBLIC_ is inlined into the client bundle, so a dev-only value like
 *     http://127.0.0.1:8001 makes every visitor's browser call their own
 *     localhost (connection refused -> "Could not reach the assistant").
 *   - Same-origin removes CORS from the equation entirely for the widget.
 *   - The client IP is forwarded so the backend's per-IP rate limiter still
 *     sees real visitors instead of this Next.js server's address.
 *
 * The backend mounts these routes at /api/assistant/public/*, so the catch-all
 * tail is appended verbatim.
 */

/** Backend origin, server-side only. Never exposed to the browser bundle. */
const BACKEND_ORIGIN = (
  process.env.ZOIKO_BILLING_API_BASE ?? "http://127.0.0.1:8001"
).replace(/\/$/, "");

const BACKEND_PREFIX = "/api/assistant/public";

/**
 * Upstream budget. The backend's own LLM call is capped by
 * AI_MODEL_TIMEOUT_SECONDS (30s) with one bounded retry, so 45s leaves
 * headroom while still guaranteeing the browser gets a response.
 */
const UPSTREAM_TIMEOUT_MS = 45_000;

/** Never buffer more than this from the upstream (answers are small JSON). */
const MAX_UPSTREAM_BYTES = 1_000_000;

/** Headers worth forwarding upstream. No cookie/auth: this API is anonymous. */
const FORWARD_REQUEST_HEADERS = ["content-type", "accept"];

/** Response headers worth returning to the browser. */
const FORWARD_RESPONSE_HEADERS = ["content-type", "cache-control", "x-request-id"];

function logError(stage: string, detail: string, extra?: Record<string, unknown>) {
  console.error(`[assistant-proxy] ${stage}: ${detail}`, {
    backend: BACKEND_ORIGIN,
    ...extra,
  });
}

/** Client IP as seen by this server, so the backend can rate-limit per visitor. */
function forwardedFor(request: NextRequest): string | null {
  const chain = request.headers.get("x-forwarded-for")?.trim();
  if (chain) return chain;
  const realIp = request.headers.get("x-real-ip")?.trim();
  return realIp || null;
}

/**
 * Read an upstream body as text exactly ONCE, never throwing.
 *
 * A Response body is a one-shot stream: calling .text() twice yields "" the
 * second time. Reading it twice used to make every real upstream error surface
 * as a bogus "invalid_upstream_json" 502, because the second read returned an
 * empty string that failed JSON.parse - so a backend 429/503/500 was reported
 * to the browser as an unreadable proxy response. Always read once and reuse.
 */
async function readBody(res: Response): Promise<string> {
  try {
    return await res.text();
  } catch (err) {
    logError("upstream body could not be read", err instanceof Error ? err.message : String(err));
    return "";
  }
}

/** Clamp a body for logging only. Never applied to what we return. */
function forLog(text: string): string {
  return text.length > 2000 ? `${text.slice(0, 2000)}…` : text;
}

async function proxy(request: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  const { path } = await ctx.params;
  const tail = path.map(encodeURIComponent).join("/");
  const target = `${BACKEND_ORIGIN}${BACKEND_PREFIX}/${tail}${request.nextUrl.search}`;

  const headers = new Headers();
  for (const name of FORWARD_REQUEST_HEADERS) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }
  const clientIp = forwardedFor(request);
  if (clientIp) headers.set("x-forwarded-for", clientIp);
  // Server-to-server call: no browser Origin/Referer, so the backend's CORS
  // middleware is not involved at all.

  const method = request.method.toUpperCase();
  const hasBody = method !== "GET" && method !== "HEAD";
  const body = hasBody ? await request.arrayBuffer() : undefined;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);

  let upstream: Response;
  try {
    upstream = await fetch(target, {
      method,
      headers,
      body,
      signal: controller.signal,
      cache: "no-store",
    });
  } catch (err) {
    const aborted = controller.signal.aborted;
    const detail = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
    logError(
      aborted ? "upstream timeout" : "upstream unreachable",
      detail,
      { method, path: tail }
    );
    // 504 distinguishes "took too long" from 502 "could not connect"; both are
    // distinct from the backend's own 429/503 so the widget can say something
    // accurate instead of guessing.
    return Response.json(
      {
        detail: aborted
          ? "The assistant took too long to respond. Please try again."
          : "The assistant service could not be reached from the website.",
        proxy_error: aborted ? "upstream_timeout" : "upstream_unreachable",
      },
      { status: aborted ? 504 : 502 }
    );
  } finally {
    clearTimeout(timer);
  }

  const responseHeaders = new Headers();
  for (const name of FORWARD_RESPONSE_HEADERS) {
    const value = upstream.headers.get(name);
    if (value) responseHeaders.set(name, value);
  }
  if (!responseHeaders.has("content-type")) {
    responseHeaders.set("content-type", "application/json");
  }

  // Read the body exactly once (see readBody) and reuse it below.
  const text = await readBody(upstream);

  if (text.length > MAX_UPSTREAM_BYTES) {
    logError("upstream body exceeded the size cap", `${text.length} bytes`, {
      method,
      path: tail,
    });
  }

  let parsed: unknown = null;
  let isJson = false;
  try {
    parsed = JSON.parse(text);
    isJson = true;
  } catch {
    isJson = false;
  }

  if (!upstream.ok) {
    // Pass the backend's real status and body straight through. The backend
    // already returns actionable copy (a 429 explains the rate limit, a 503
    // explains the outage), and describeFailure() in the widget keys off both
    // the status and `detail` - so overwriting any of it here would destroy the
    // only information the visitor has.
    logError("upstream returned an error", `${upstream.status} ${forLog(text)}`, {
      method,
      path: tail,
    });
    return new Response(text, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: responseHeaders,
    });
  }

  if (!isJson) {
    // 2xx with an unparseable body means something between here and the
    // backend answered instead of it (an ingress error page, a proxy's HTML).
    logError("upstream 2xx body was not valid JSON", forLog(text), { method, path: tail });
    return Response.json(
      {
        detail: "The assistant returned an unreadable response. Please try again.",
        proxy_error: "invalid_upstream_json",
      },
      { status: 502 }
    );
  }

  void parsed;
  return new Response(text, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers: responseHeaders,
  });
}

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  return proxy(request, ctx);
}

export async function POST(request: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  return proxy(request, ctx);
}