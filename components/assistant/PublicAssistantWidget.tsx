"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Send,
  X,
  Minus,
  Ellipsis,
  ArrowRight,
  Loader2,
  ExternalLink,
  Check,
  AlertTriangle,
  Mail,
  LogIn,
  ShieldCheck,
  Rocket,
  FileText,
  CreditCard,
  BarChart3,
  RotateCcw,
  Database,
  Users,
  HelpCircle,
  Headset,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

// Category icon names are carried in the managed config (string keys); this map
// resolves them to Lucide line icons so the config stays serializable.
const TOPIC_ICONS: Record<string, LucideIcon> = {
  rocket: Rocket,
  "file-text": FileText,
  "credit-card": CreditCard,
  "bar-chart-3": BarChart3,
  "rotate-ccw": RotateCcw,
  database: Database,
  users: Users,
  "help-circle": HelpCircle,
};

/**
 * components/assistant/PublicAssistantWidget.tsx
 * ----------------------------------------------
 * Floating public chat widget for the zoikobilling.com marketing site
 * (backend: ZB-AI-PUB-001 /api/assistant/public/*).
 *
 * Implements the approved ZB-PUBCHAT-WF-001 public wireframe:
 *   - branded launcher (56×56, bottom-right 24px inset)
 *   - fixed header (wordmark, Billing Assistant, Online/Unavailable, overflow,
 *     minimize, close) and fixed composer; only the body scrolls
 *   - exact greeting copy and the eight approved topic tiles in locked order
 *   - full-width "Speak to a human" support action with a support modal
 *   - consent-gated support request form; no fabricated availability/tickets
 *   - sign-in-required + uncertainty + degraded service states
 *   - responsive panel / mobile full-screen sheet with safe-area support
 *
 * SECURITY: public, unauthenticated. The widget never sends tenant context,
 * renders untrusted markdown as text (no raw HTML), and only turns allowlisted
 * URLs into links. No account-level action is ever offered here.
 */

// ── Networking ──────────────────────────────────────────────────────────────
// Everything is same-origin: app/api/assistant/public/[...path]/route.ts
// forwards to the backend on the server. A NEXT_PUBLIC_ absolute backend URL
// would inline the origin into the bundle and break every visitor's browser.
const API_BASE = "/api/assistant/public";

const SESSION_KEY = "zb-public-assistant-session";

/** Answers can take a while: the backend does retrieval + one LLM call. */
const REQUEST_TIMEOUT_MS = 15_000;
const MESSAGE_TIMEOUT_MS = 45_000;
const MAX_INPUT_CHARS = 2000;
const TWO_COLUMN_MIN_INNER_PX = 376;

const LOG_PREFIX = "[billing-assistant]";

function logWarn(message: string, extra?: unknown) {
  console.warn(`${LOG_PREFIX} ${message}`, extra ?? "");
}

function logError(message: string, extra?: unknown) {
  console.error(`${LOG_PREFIX} ${message}`, extra ?? "");
}

// ── Instrumentation (spec §12.3) ────────────────────────────────────────────
// Privacy-minimized product events. Only an allowlisted event name plus the
// §12.3 safe metadata (anonymous session id, topic id, locale, config version,
// timing bucket) is ever sent — NEVER the visitor's question text. Delivery is
// fire-and-forget and can never break or delay the chat.
type PublicEventName =
  | "widget_opened"
  | "widget_minimized"
  | "topic_selected"
  | "message_submitted"
  | "answer_rendered"
  | "answer_source_clicked"
  | "auth_cta_clicked"
  | "support_requested"
  | "ticket_confirmed"
  | "assistant_error";

type PublicEventMeta = {
  session_uid?: string | null;
  topic_id?: string | null;
  timing_bucket?: string | null;
};

// Set once the config loads (or the bundled fallback is used) so events carry
// the serving config version. Null until then.
let trackedConfigVersion: string | null = null;

function timingBucket(startedAt: number): string {
  const elapsed = Date.now() - startedAt;
  if (elapsed < 2000) return "0-2s";
  if (elapsed < 5000) return "2-5s";
  if (elapsed < 10000) return "5-10s";
  return "10s+";
}

function track(event: PublicEventName, meta: PublicEventMeta = {}) {
  if (typeof window === "undefined") return;
  const payload = JSON.stringify({
    event,
    session_uid: meta.session_uid ?? null,
    topic_id: meta.topic_id ?? null,
    locale: typeof navigator !== "undefined" ? navigator.language : null,
    config_version: trackedConfigVersion,
    timing_bucket: meta.timing_bucket ?? null,
  });
  try {
    if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      const blob = new Blob([payload], { type: "application/json" });
      if (navigator.sendBeacon(`${API_BASE}/events`, blob)) return;
    }
  } catch {
    /* fall through to fetch */
  }
  try {
    void fetch(`${API_BASE}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* instrumentation must never break the widget */
  }
}

// crypto.randomUUID() is only defined in secure contexts (HTTPS or localhost).
// Fall back to a non-cryptographic id so the widget still works on plain-HTTP
// staging hosts instead of throwing mid-send.
function uuid(): string {
  const c = typeof crypto !== "undefined" ? crypto : undefined;
  if (c && typeof c.randomUUID === "function") {
    try {
      return c.randomUUID();
    } catch {
      /* fall through */
    }
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (ch) => {
    const r = (Math.random() * 16) | 0;
    const v = ch === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

type TopicTile = {
  id: string;
  label: string;
  description?: string;
  icon?: string;
  accent?: string;
  tint?: string;
  starter_question: string;
};

type PublicConfig = {
  config_version: string;
  assistant_title: string;
  greeting_title: string;
  greeting_body: string;
  composer_placeholder: string;
  disclosure: string;
  human_support_label: string;
  human_support_description: string;
  uncertainty_message: string;
  privacy_url: string;
  privacy_label: string;
  help_center_url: string;
  contact_support_url: string;
  sign_in_url: string;
  sign_in_label: string;
  tiles: TopicTile[];
  support: {
    mode: string;
    live_chat_enabled: boolean;
    request_form_enabled: boolean;
    issue_types: string[];
    response_time_claim: string | null;
  };
  link_allowlist: { relative_prefixes: string[]; external_domains: string[] };
};

// Local fallback mirroring the backend config so the widget still renders the
// approved copy if GET /config is temporarily unreachable. It is NEVER used to
// fabricate support availability or sources.
const DEFAULT_CONFIG: PublicConfig = {
  config_version: "fallback",
  assistant_title: "Billing Assistant",
  greeting_title: "Hi, I’m your Zoiko Billing Assistant 👋",
  greeting_body:
    "Ask me about invoices, payments, customers, or billing workflows. " +
    "I can explain features and guide you to the right place. " +
    "Sign in for account-specific information.",
  composer_placeholder: "Ask about billing...",
  disclosure:
    "AI-assisted guidance about Zoiko Billing. Verify financial information " +
    "in your billing records.",
  human_support_label: "Speak to a human",
  human_support_description: "Get help from our support team",
  uncertainty_message: "I can’t verify that from published Zoiko Billing guidance.",
  privacy_url: "/privacy-and-data-governance",
  privacy_label: "Privacy and AI assistance",
  help_center_url: "/help-center",
  contact_support_url: "/contact-support",
  sign_in_url: "/sign-in",
  sign_in_label: "Sign in to view your billing account",
  tiles: [
    { id: "getting_started", label: "Getting started", description: "Set up your account, connect payments", icon: "rocket", accent: "#0868F7", tint: "#E8F1FE", starter_question: "How do I get started with Zoiko Billing?" },
    { id: "invoices", label: "Invoices", description: "Create, send, track and manage invoices", icon: "file-text", accent: "#10B981", tint: "#E6F7F0", starter_question: "How do I create and send an invoice?" },
    { id: "payments", label: "Payments", description: "Accept, track and reconcile payments", icon: "credit-card", accent: "#7C3AED", tint: "#F1EBFE", starter_question: "How do payments work in Zoiko Billing?" },
    { id: "reconciliation", label: "Reconciliation", description: "Match payments, resolve differences", icon: "bar-chart-3", accent: "#F97316", tint: "#FEF0E7", starter_question: "How does payment reconciliation work?" },
    { id: "credits_refunds", label: "Credits & refunds", description: "Issue credits, refunds and adjustments", icon: "rotate-ccw", accent: "#E11D48", tint: "#FDE9EE", starter_question: "How can I issue a credit or refund?" },
    { id: "entities_currencies", label: "Entities & currencies", description: "Manage entities, taxes and currencies", icon: "database", accent: "#0D9488", tint: "#E3F6F3", starter_question: "Can Zoiko Billing support multiple entities or currencies?" },
    { id: "permissions", label: "Permissions", description: "Users, roles and access control", icon: "users", accent: "#7C3AED", tint: "#F1EBFE", starter_question: "How do user roles and permissions work?" },
    { id: "what_assistant_can_do", label: "What this assistant can do", description: "Capabilities, limits and data privacy", icon: "help-circle", accent: "#D97706", tint: "#FEF3E1", starter_question: "What can you help me with?" },
  ],
  support: {
    mode: "request_only",
    live_chat_enabled: false,
    request_form_enabled: true,
    issue_types: ["account_and_signin", "invoices_and_billing", "payments_and_refunds", "technical_problem", "other"],
    response_time_claim: null,
  },
  link_allowlist: {
    relative_prefixes: ["/"],
    external_domains: ["zoikobilling.com", "www.zoikobilling.com"],
  },
};

const ISSUE_TYPE_LABELS: Record<string, string> = {
  account_and_signin: "Account & sign-in",
  invoices_and_billing: "Invoices & billing",
  payments_and_refunds: "Payments & refunds",
  technical_problem: "Technical problem",
  other: "Something else",
};

// A retrieved knowledge source rendered under an answer. `url` is only ever
// present when the backend supplied one; the widget turns it into a link only
// if it passes the same allowlist used for markdown links (fail-closed).
type SourceRef = { title: string; url?: string };

type WidgetMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  created_at?: string;
  mode?: string;
  risk_class?: string;
  sources?: SourceRef[];
  navActions?: NavAction[];
  requiresAuth?: boolean;
  safetyState?: string;
  feedback?: "helpful" | "not_helpful";
};

type NavAction = { label: string; href: string };

// ── Branding theme tokens (spec §3.2) ────────────────────────────────────────
// Single approved light theme. No dark-mode toggle is part of this version
// (spec §5.2). Values are exposed as CSS variables so the `.ab-*` classes and
// the markdown layer share one source of truth.
const THEME: Record<string, string> = {
  "--ab-bg": "#FFFFFF",
  "--ab-surface": "#F6F9FC",
  "--ab-surface-raised": "#EEF4FA",
  "--ab-border": "#D6E4F2",
  "--ab-border-subtle": "#E6EEF7",
  "--ab-border-strong": "#7590A8",
  "--ab-text": "#082644",
  "--ab-text-secondary": "#53677F",
  "--ab-text-muted": "#5B6E82",
  "--ab-primary": "#082644",
  "--ab-action": "#0868F7",
  "--ab-action-hover": "#0657CE",
  "--ab-cyan": "#04ADD1",
  "--ab-cyan-ink": "#0B7A8C",
  "--ab-online": "#008E5A",
  "--ab-online-ink": "#00734A",
  "--ab-badge-ink": "#086779",
  "--ab-danger": "#B42318",
  "--ab-danger-bg": "#FEF3F2",
  "--ab-danger-border": "#FECDCA",
  "--ab-focus-ring": "#0868F7",
  "--ab-focus-glow": "rgba(8,104,247,0.28)",
  "--ab-icon-btn-bg": "#EEF4FA",
  "--ab-icon-btn-text": "#082644",
  "--ab-icon-btn-hover-bg": "#DFEAF7",
  "--ab-icon-btn-hover-text": "#0868F7",
  "--ab-user-bubble": "#0868F7",
  "--ab-assistant-bubble": "#F6F9FC",
  "--ab-assistant-bubble-text": "#082644",
  "--ab-input-bg": "#FFFFFF",
  "--ab-input-border": "#7590A8",
};

// ── Mode badge (public answers are always EXPLAIN) ───────────────────────────

const MODE_BADGE: Record<string, { label: string }> = {
  M0_EXPLAIN: { label: "Explanation" },
  M1_INSPECT: { label: "Guidance" },
};

// ── Screen navigation (functional "Open [screen]" actions) ───────────────────
// Every href is a relative, same-site, allowlisted marketing path.

const TOPIC_SCREENS: Record<string, NavAction[]> = {
  getting_started: [{ label: "Open Platform overview", href: "/platform-overview" }],
  invoices: [
    { label: "Open Invoices", href: "/invoices" },
    { label: "Open Outstanding balances", href: "/outstanding-balances" },
  ],
  payments: [{ label: "Open Payments & reconciliation", href: "/payments-and-reconcilliation" }],
  reconciliation: [{ label: "Open Payments & reconciliation", href: "/payments-and-reconcilliation" }],
  credits_refunds: [{ label: "Open Charges & adjustments", href: "/charges-and-adjustments" }],
  entities_currencies: [
    { label: "Open Multi-entity billing", href: "/multi-entity-billing" },
    { label: "Open Multi-currency", href: "/multi-currency" },
  ],
  permissions: [{ label: "Open Roles & approvals", href: "/roles-and-approvals" }],
  what_assistant_can_do: [{ label: "Open Help center", href: "/help-center" }],
};

const TOPIC_KEYWORDS: Record<string, string[]> = {
  invoices: ["invoice", "invoices", "draft", "overdue", "line item", "status", "dunning", "template"],
  payments: ["payment", "payments", "pay", "allocation", "checkout", "card", "bank transfer"],
  reconciliation: ["reconcile", "reconciliation", "matching", "bank statement", "bank feed"],
  credits_refunds: ["refund", "refunds", "credit", "credit note", "adjustment"],
  entities_currencies: ["currency", "currencies", "exchange", "multi-currency", "multi-entity", "entity", "entities", "subsidiary"],
  permissions: ["role", "roles", "permission", "permissions", "user access", "admin", "member"],
  getting_started: ["get started", "getting started", "started", "onboarding", "first time", "set up"],
  what_assistant_can_do: ["what can you", "help me", "capabilit", "features"],
};

function detectTopicFromText(text: string): string | null {
  const t = (text || "").toLowerCase();
  let best: string | null = null;
  let bestScore = 0;
  for (const [topic, keywords] of Object.entries(TOPIC_KEYWORDS)) {
    let score = 0;
    for (const kw of keywords) if (t.includes(kw)) score += 1;
    if (score > bestScore) {
      bestScore = score;
      best = topic;
    }
  }
  return bestScore >= 1 ? best : null;
}

function topicForTurn(messages: WidgetMessage[], tiles: TopicTile[], lastText: string): string | null {
  const starter = tiles.find((tile) => tile.starter_question === lastText);
  if (starter) return starter.id;
  const byKeyword = detectTopicFromText(lastText);
  if (byKeyword) return byKeyword;
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  return lastUser ? detectTopicFromText(lastUser.text) : null;
}

function navActionsFor(topic: string | null): NavAction[] {
  if (!topic) return [];
  return TOPIC_SCREENS[topic] || [];
}

// ── URL allowlist (defence against injected unsafe links) ────────────────────

function isAllowedUrl(href: string | undefined, config: PublicConfig): boolean {
  if (!href) return false;
  const value = href.trim();
  if (value.startsWith("#") || value.startsWith("mailto:")) return false;
  // Relative same-site path.
  if (value.startsWith("/") && !value.startsWith("//")) {
    return config.link_allowlist.relative_prefixes.some((p) => value.startsWith(p));
  }
  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") return false;
    return config.link_allowlist.external_domains.includes(url.hostname.toLowerCase());
  } catch {
    return false;
  }
}

// ── Markdown rendering (untrusted content: no raw HTML, allowlisted links) ───

const CURRENCY_SYMBOLS = ["$", "€", "£", "¥", "₹", "₩", "₺", "₽", "₴", "₱", "₫", "฿", "₦"];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isFinancialEmphasis(children: any): boolean {
  const text = (Array.isArray(children) ? children.join("") : String(children ?? "")).trim();
  if (!text) return false;
  return CURRENCY_SYMBOLS.some((sym) => text.startsWith(sym));
}

function buildMarkdownComponents(config: PublicConfig) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const components: any = {
    p: ({ children }: { children: React.ReactNode }) => (
      <p className="ab-md-p">{children}</p>
    ),
    ul: ({ children }: { children: React.ReactNode }) => <ul className="ab-md-ul">{children}</ul>,
    ol: ({ children }: { children: React.ReactNode }) => <ol className="ab-md-ol">{children}</ol>,
    li: ({ children }: { children: React.ReactNode }) => <li className="ab-md-li">{children}</li>,
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className={isFinancialEmphasis(children) ? "ab-financial" : "ab-md-strong"}>{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => <em className="ab-md-em">{children}</em>,
    a: ({ children, href }: { children: React.ReactNode; href?: string }) => {
      if (!isAllowedUrl(href, config)) {
        // Unsafe / unverifiable link -> render the label as plain text.
        return <span>{children}</span>;
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="ab-md-link">
          {children}
        </a>
      );
    },
    code: ({ children }: { children: React.ReactNode }) => <code className="ab-md-code">{children}</code>,
    pre: ({ children }: { children: React.ReactNode }) => <pre className="ab-md-pre">{children}</pre>,
    h1: ({ children }: { children: React.ReactNode }) => <h3 className="ab-md-h">{children}</h3>,
    h2: ({ children }: { children: React.ReactNode }) => <h3 className="ab-md-h">{children}</h3>,
    h3: ({ children }: { children: React.ReactNode }) => <h4 className="ab-md-h">{children}</h4>,
    h4: ({ children }: { children: React.ReactNode }) => <h4 className="ab-md-h">{children}</h4>,
    blockquote: ({ children }: { children: React.ReactNode }) => <blockquote className="ab-md-quote">{children}</blockquote>,
    hr: () => <hr className="ab-md-hr" />,
  };
  return components;
}

function normalizeAnswerText(text: string): string {
  let t = (text || "").replace(/<\s*br\s*\/?>/gi, "\n");
  t = t.replace(/\(\s*Sources?:\s*\[[^\]]*\](?:\s*,\s*\[[^\]]*\])*\s*\)/gi, "");
  t = t.replace(/(?<!\n)[ \t]{2,}/g, " ");
  t = t.replace(/[ \t]+\n/g, "\n");
  t = t.replace(/ +([.,!?;:])/g, "$1");
  t = t.replace(/[\s\n]*[*_]*\s*Sources?:?\s*[*_]*[\s\n]*(?:-?\s*\[[\d,\s\]]+\s*[\n\r]*)+$/i, "");
  return t.trim();
}

function MarkdownContent({ text, config }: { text: string; config: PublicConfig }) {
  const components = useMemo(() => buildMarkdownComponents(config), [config]);
  return (
    <div className="ab-md">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {normalizeAnswerText(text)}
      </ReactMarkdown>
    </div>
  );
}

// ── Progressive typewriter reveal ────────────────────────────────────────────

const FENCE_RE = /^\s*```/;
const SENTENCE_END = /[.!?…][)"']?$/;

function splitStablePrefix(text: string) {
  if (!text) return { prefix: "", tail: "", inCode: false };
  const lines = text.split("\n");
  let inFence = false;
  let lastOpenLineStart = -1;
  let lineStart = 0;
  for (const line of lines) {
    if (FENCE_RE.test(line)) {
      if (!inFence) {
        inFence = true;
        lastOpenLineStart = lineStart;
      } else {
        inFence = false;
        lastOpenLineStart = -1;
      }
    }
    lineStart += line.length + 1;
  }
  if (inFence && lastOpenLineStart >= 0) {
    return { prefix: text.slice(0, lastOpenLineStart), tail: text.slice(lastOpenLineStart), inCode: true };
  }
  return { prefix: text, tail: "", inCode: false };
}

function buildSegments(text: string, targetChars = 4, maxLookahead = 4): string[] {
  const str = text || "";
  const segments: string[] = [];
  let i = 0;
  const n = str.length;
  if (n === 0) return [""];
  while (i < n) {
    let size = Math.max(1, targetChars);
    const hardEnd = Math.min(i + size, n);
    if (hardEnd < n) {
      const searchEnd = Math.min(hardEnd + maxLookahead, n);
      for (let k = hardEnd; k < searchEnd; k++) {
        if (/\s/.test(str[k])) {
          size = Math.min(k - i + 1, n - i);
          break;
        }
      }
    }
    size = Math.min(size, n - i);
    segments.push(str.slice(i, i + size));
    i += size;
  }
  return segments.length ? segments : [""];
}

function typewriterDelay(segment: string, cps: number, minDelay: number, maxDelay: number) {
  const chars = segment.length || 1;
  const base = Math.round((chars / cps) * 1000);
  let pause = 1;
  const trimmed = segment.trimEnd();
  if (SENTENCE_END.test(trimmed)) pause = 1.4;
  else if (segment.endsWith("\n") && segment.trim().length > 0) pause = 1.15;
  return Math.max(minDelay, Math.min(maxDelay, Math.round(base * pause)));
}

function useTypewriter(fullText: string) {
  const text = useMemo(() => normalizeAnswerText(fullText || ""), [fullText]);
  const reduced = usePrefersReducedMotion();
  const cps = text.length >= 600 ? 52 : 46;

  const segments = useMemo(() => buildSegments(text), [text]);
  const [displayed, setDisplayed] = useState("");
  const [count, setCount] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const doneListenersRef = useRef<Array<() => void>>([]);
  const accRef = useRef("");

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    doneListenersRef.current = [];
    accRef.current = "";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCount(0);

    if (!text) {
      setDisplayed("");
      return;
    }

    // Respect reduced-motion: reveal the whole answer immediately.
    if (reduced) {
      setDisplayed(text);
      setCount(segments.length);
      return;
    }

    setDisplayed("");
    const n = segments.length;
    let i = 0;
    const step = () => {
      const chunk = segments[i];
      accRef.current += chunk;
      setDisplayed(accRef.current);
      const next = i + 1;
      setCount(next);
      if (next >= n) {
        const listeners = doneListenersRef.current;
        doneListenersRef.current = [];
        for (const cb of listeners) {
          try {
            cb();
          } catch {
            /* ignore */
          }
        }
        return;
      }
      i = next;
      timerRef.current = setTimeout(step, typewriterDelay(chunk, cps, 15, 90));
    };

    timerRef.current = setTimeout(step, 160);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      doneListenersRef.current = [];
    };
  }, [segments, cps, text, reduced]);

  const done = !text || count >= segments.length;
  return { displayed, isTyping: !done, done };
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

function MarkdownTypewriter({ text, config, onDone }: { text: string; config: PublicConfig; onDone?: () => void }) {
  const { displayed, isTyping, done } = useTypewriter(text);
  const firedRef = useRef(false);

  useEffect(() => {
    if (done && !firedRef.current) {
      firedRef.current = true;
      onDone?.();
    }
  }, [done, onDone]);

  if (!isTyping) return <MarkdownContent text={text} config={config} />;

  const { prefix, tail, inCode } = splitStablePrefix(displayed);
  return (
    <div className="ab-md">
      {!displayed && text && (
        <span className="ab-typing-dots" role="status" aria-label="Generating an answer">
          <span className="ab-typing-dot ab-typing-dot--1" />
          <span className="ab-typing-dot ab-typing-dot--2" />
          <span className="ab-typing-dot ab-typing-dot--3" />
        </span>
      )}
      {displayed && (
        <>
          {prefix && <MarkdownContent text={prefix} config={config} />}
          {tail && (
            <span className={"ab-typing-tail" + (inCode ? " ab-typing-tail--code" : "")}>{tail}</span>
          )}
          <span className="ab-typing-caret" aria-hidden="true" />
        </>
      )}
    </div>
  );
}

// ── Brand mark ───────────────────────────────────────────────────────────────

function zoikoMark(size: number, rounded: string, showAccentDot = false) {
  return (
    <span className={`ab-mark ${rounded}`} style={{ width: size, height: size }} aria-hidden="true">
      <Image
        src="/zoiko-icon.png"
        alt=""
        width={size}
        height={size}
        draggable={false}
        unoptimized
        style={{ width: size, height: size, display: "block", pointerEvents: "none" }}
      />
      {showAccentDot && <span className="ab-mark-dot" />}
    </span>
  );
}

// ── Networking helpers ───────────────────────────────────────────────────────

/** Carries a visitor-facing message plus a machine-readable cause for logs. */
class AssistantError extends Error {
  readonly cause_code: string;
  constructor(message: string, causeCode: string) {
    super(message);
    this.name = "AssistantError";
    this.cause_code = causeCode;
  }
}

async function fetchAssistant(url: string, init: RequestInit = {}, timeoutMs = REQUEST_TIMEOUT_MS): Promise<Response> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    return await fetch(url, { cache: "no-store", ...init, signal: ctrl.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function describeFailure(res: Response): Promise<string> {
  let detail = "";
  let proxyError = "";
  try {
    const text = await res.text();
    if (text) {
      try {
        const parsed = JSON.parse(text) as { detail?: unknown; proxy_error?: unknown };
        if (typeof parsed.detail === "string") detail = parsed.detail;
        if (typeof parsed.proxy_error === "string") proxyError = parsed.proxy_error;
      } catch {
        logWarn("non-JSON error body (HTML error page?)", text.slice(0, 300));
      }
    }
  } catch {
    /* body already consumed or unreadable */
  }

  logError(`request failed with HTTP ${res.status}`, {
    url: res.url,
    proxyError: proxyError || undefined,
    detail: detail || undefined,
  });

  if (res.status === 404 || res.status === 405) {
    return "The assistant is not available on this site right now. Please try again later.";
  }
  if (res.status === 429) {
    return "You’re sending messages a bit fast — please wait a moment and try again.";
  }
  if (res.status === 502 || proxyError === "upstream_unreachable") {
    return "The assistant service is unreachable right now. Please try again in a moment.";
  }
  if (res.status === 504 || proxyError === "upstream_timeout") {
    return "The assistant took too long to respond. Please try again.";
  }
  if (res.status === 503) {
    return detail || "The assistant is temporarily unavailable.";
  }
  return detail || `Something went wrong (HTTP ${res.status}). Please try again.`;
}

async function fetchConfig(): Promise<PublicConfig> {
  try {
    const res = await fetchAssistant(`${API_BASE}/config`);
    if (!res.ok) {
      logWarn("config unavailable; using bundled fallback", res.status);
      return DEFAULT_CONFIG;
    }
    const data = (await res.json()) as Partial<PublicConfig>;
    if (!data || !Array.isArray(data.tiles) || data.tiles.length === 0) {
      logWarn("config shape unexpected; using bundled fallback");
      return DEFAULT_CONFIG;
    }
    return { ...DEFAULT_CONFIG, ...data } as PublicConfig;
  } catch (err) {
    logWarn("config request failed; using bundled fallback", err);
    return DEFAULT_CONFIG;
  }
}

async function fetchHealth(): Promise<boolean> {
  try {
    const res = await fetchAssistant(`${API_BASE}/health`);
    if (!res.ok) return false;
    const data = (await res.json()) as { available?: boolean };
    return data.available !== false;
  } catch {
    return false;
  }
}

type SessionResponse = { session_uid: string; status: string; messages?: WireMessage[]; created_at?: string };
type WireMessage = {
  message_uid: string;
  sender_type: string;
  message_text: string;
  mode?: string;
  risk_class?: string;
  created_at?: string;
};

async function resumeSession(sessionUid: string, page?: string): Promise<SessionResponse> {
  const res = await fetchAssistant(
    `${API_BASE}/sessions`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session_uid: sessionUid, page }),
    },
    REQUEST_TIMEOUT_MS
  );
  if (!res.ok) throw new AssistantError(await describeFailure(res), `session_create_${res.status}`);
  try {
    return (await res.json()) as SessionResponse;
  } catch (err) {
    logError("session response was not valid JSON", err);
    throw new AssistantError("The assistant sent back an unreadable response. Please try again.", "session_bad_json");
  }
}

function toWireMessages(msgs: WireMessage[] | undefined): WidgetMessage[] {
  if (!Array.isArray(msgs)) return [];
  return msgs.map((m) => ({
    id: m.message_uid,
    role: m.sender_type === "user" ? "user" : "assistant",
    text: m.message_text,
    mode: m.mode,
    risk_class: m.risk_class,
    created_at: m.created_at,
  }));
}

function explainThrown(err: unknown, context: string): string {
  if (err instanceof AssistantError) {
    logWarn(`${context} failed`, { cause: err.cause_code, message: err.message });
    return err.message;
  }
  if (err instanceof DOMException && err.name === "AbortError") {
    return "The assistant took too long to respond. Please try again.";
  }
  logError(`${context} could not reach the API`, err);
  return "Could not reach the assistant. Please check your connection and try again.";
}

// ── Small presentational pieces ──────────────────────────────────────────────

function MessageTimeStamp({ message }: { message: WidgetMessage }) {
  if (!message.created_at) return null;
  const d = new Date(message.created_at);
  if (Number.isNaN(d.getTime())) return null;
  const time = d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  return (
    <div className={`ab-ts ${message.role === "user" ? "ab-ts--user" : ""}`}>
      <span title={d.toLocaleString()}>{time}</span>
    </div>
  );
}

function Feedback({ message, onFeedback }: { message: WidgetMessage; onFeedback: (helpful: boolean) => void }) {
  if (message.feedback) {
    return (
      <p className="ab-feedback ab-feedback--done">
        <Check size={12} strokeWidth={2.5} /> Thanks for the feedback.
      </p>
    );
  }
  return (
    <div className="ab-feedback">
      <span>Was this helpful?</span>
      <button type="button" onClick={() => onFeedback(true)}>Helpful</button>
      <button type="button" onClick={() => onFeedback(false)}>Not helpful</button>
    </div>
  );
}

function MessageBubble({
  message,
  config,
  animating,
  sessionUid,
  onDone,
  onNavigate,
  onFeedback,
}: {
  message: WidgetMessage;
  config: PublicConfig;
  animating: boolean;
  sessionUid: string | null;
  onDone?: () => void;
  onNavigate: (href: string) => void;
  onFeedback: (helpful: boolean) => void;
}) {
  const isUser = message.role === "user";
  const badge = message.mode ? MODE_BADGE[message.mode] : null;

  return (
    <div className={`ab-row ${isUser ? "ab-row--user" : ""}`}>
      {!isUser && zoikoMark(28, "ab-mark--lg")}
      <div className={`ab-col ${isUser ? "ab-col--user" : ""}`}>
        {badge && !isUser && <span className="ab-badge">{badge.label}</span>}

        <div className={`ab-bubble ${isUser ? "ab-bubble--user" : "ab-bubble--assistant"}`}>
          {isUser ? (
            <div className="ab-user-text">{message.text}</div>
          ) : (
            <MarkdownTypewriter text={message.text} config={config} onDone={onDone} />
          )}
        </div>

        {!isUser && message.sources && message.sources.length > 0 && (
          <div className="ab-sources">
            <span className="ab-sources__label">Source{message.sources.length > 1 ? "s" : ""}</span>
            {message.sources.map((s, i) => {
              const href = isAllowedUrl(s.url, config) ? s.url : undefined;
              if (!href) {
                return (
                  <span className="ab-source" key={`${s.title}-${i}`}>
                    {s.title}
                  </span>
                );
              }
              let domain = "";
              try {
                domain = new URL(href, "https://www.zoikobilling.com").hostname.replace(/^www\./, "");
              } catch {
                domain = "";
              }
              return (
                <a
                  className="ab-source ab-source--link"
                  key={`${s.title}-${i}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("answer_source_clicked", { session_uid: sessionUid })}
                >
                  {s.title}
                  {domain && <span className="ab-source__domain">· {domain}</span>}
                  <ExternalLink size={10} strokeWidth={2.25} />
                </a>
              );
            })}
          </div>
        )}

        {!isUser && message.requiresAuth && (
          <div className="ab-cta">
            <button
              type="button"
              className="ab-cta__btn"
              onClick={() => {
                track("auth_cta_clicked");
                onNavigate(config.sign_in_url);
              }}
            >
              <LogIn size={14} strokeWidth={2.25} />
              {config.sign_in_label}
            </button>
          </div>
        )}

        {!isUser && !animating && message.navActions && message.navActions.length > 0 && (
          <div className="ab-nav-actions">
            {message.navActions.map((a) => (
              <button key={a.href} type="button" className="ab-nav-btn" onClick={() => onNavigate(a.href)}>
                <ExternalLink size={12} strokeWidth={2.25} />
                {a.label}
              </button>
            ))}
          </div>
        )}

        {!isUser && !animating && <Feedback message={message} onFeedback={onFeedback} />}

        <MessageTimeStamp message={message} />
      </div>
    </div>
  );
}

// ── Support modal ────────────────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function SupportModal({
  config,
  sessionUid,
  hasConversation,
  onClose,
  onContactSupport,
}: {
  config: PublicConfig;
  sessionUid: string | null;
  hasConversation: boolean;
  onClose: () => void;
  onContactSupport: () => void;
}) {
  const [issueType, setIssueType] = useState(config.support.issue_types[0] ?? "other");
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [touched, setTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ reference: string; transcript_shared: boolean } | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstFieldRef = useRef<HTMLSelectElement | null>(null);
  // One client-minted idempotency key per form instance. A retry after a lost
  // response (server recorded the request but the answer never returned) reuses
  // the key, so the backend deduplicates to the original reference instead of
  // creating a second support request. Edits within the same form keep the key;
  // closing the dialog (remount) mints a new one.
  const requestIdRef = useRef<string | null>(null);

  useEffect(() => {
    firstFieldRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const root = dialogRef.current;
      if (!root) return;
      const focusable = Array.from(
        root.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null || el === document.activeElement);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const emailValid = EMAIL_RE.test(email.trim());
  const summaryValid = summary.trim().length >= 3;
  const canSubmit = issueType && emailValid && summaryValid && !submitting;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!canSubmit) return;
    setSubmitting(true);
    setError(null);
    if (!requestIdRef.current) requestIdRef.current = uuid();
    try {
      const res = await fetchAssistant(`${API_BASE}/support/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          issue_type: issueType,
          email: email.trim(),
          summary: summary.trim(),
          message: message.trim() || null,
          transcript_consent: consent,
          session_uid: sessionUid,
          client_request_id: requestIdRef.current,
        }),
      });
      if (!res.ok) {
        setError(await describeFailure(res));
        return;
      }
      const data = (await res.json()) as { reference?: string; transcript_shared?: boolean };
      if (!data.reference) {
        setError("We couldn’t confirm your request. Please try again.");
        return;
      }
      track("ticket_confirmed", { session_uid: sessionUid });
      setResult({ reference: data.reference, transcript_shared: Boolean(data.transcript_shared) });
    } catch (err) {
      setError(explainThrown(err, "support_request"));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="ab-modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div
        className="ab-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ab-support-title"
        ref={dialogRef}
        style={THEME as React.CSSProperties}
      >
        <div className="ab-modal__head">
          <h2 id="ab-support-title">Speak to Zoiko Billing support</h2>
          <button type="button" className="ab-icon-btn ab-icon-btn--round" onClick={onClose} aria-label="Close support dialog">
            <X size={16} strokeWidth={2} />
          </button>
        </div>

        {result ? (
          <div className="ab-modal__success" role="status">
            <Check size={18} strokeWidth={2.5} />
            <div>
              <p><strong>Your support request has been received.</strong></p>
              <p>
                Reference: <code>{result.reference}</code>
              </p>
              <p className="ab-muted">
                {result.transcript_shared
                  ? "You consented to share a short excerpt of this conversation."
                  : "No conversation transcript was shared."}
              </p>
            </div>
          </div>
        ) : (
          <form className="ab-modal__body" onSubmit={submit} noValidate>
            <p className="ab-muted">
              {config.support.live_chat_enabled
                ? "Live chat with the support team is available, or send a request and we’ll follow up by email."
                : "Live chat isn’t available right now. Send a support request and the team will follow up by email."}
            </p>

            <label className="ab-field">
              <span>Issue type</span>
              <select
                ref={firstFieldRef}
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
                required
              >
                {config.support.issue_types.map((t) => (
                  <option key={t} value={t}>
                    {ISSUE_TYPE_LABELS[t] ?? t}
                  </option>
                ))}
              </select>
            </label>

            <label className="ab-field">
              <span>Email address</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched(true)}
                aria-invalid={touched && !emailValid}
                aria-describedby={touched && !emailValid ? "ab-email-error" : undefined}
                autoComplete="email"
                required
              />
              {touched && !emailValid && (
                <span id="ab-email-error" className="ab-field__error" role="alert">
                  Enter a valid email address.
                </span>
              )}
            </label>

            <label className="ab-field">
              <span>Summary</span>
              <input
                type="text"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                onBlur={() => setTouched(true)}
                aria-invalid={touched && !summaryValid}
                aria-describedby={touched && !summaryValid ? "ab-summary-error" : undefined}
                maxLength={500}
                required
              />
              {touched && !summaryValid && (
                <span id="ab-summary-error" className="ab-field__error" role="alert">
                  Add a short summary (at least 3 characters).
                </span>
              )}
            </label>

            <label className="ab-field">
              <span>Details <span className="ab-muted">(optional)</span></span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                maxLength={4000}
              />
            </label>

            {hasConversation && (
              <label className="ab-consent">
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                <span>
                  I consent to sharing a short excerpt of this conversation with the support team.
                  It is not shared unless you tick this box.
                </span>
              </label>
            )}

            {error && (
              <p className="ab-form-error" role="alert">
                {error}
              </p>
            )}

            <div className="ab-modal__actions">
              <button type="button" className="ab-btn ab-btn--ghost" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="ab-btn ab-btn--primary" disabled={!canSubmit}>
                {submitting ? <Loader2 size={14} className="ab-spin" /> : <Mail size={14} strokeWidth={2.25} />}
                {submitting ? "Sending…" : "Send support request"}
              </button>
            </div>
          </form>
        )}

        <div className="ab-modal__foot">
          <button type="button" className="ab-link-btn" onClick={onContactSupport}>
            <ExternalLink size={12} strokeWidth={2.25} /> Open contact page
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main widget ──────────────────────────────────────────────────────────────

export default function PublicAssistantWidget() {
  const router = useRouter();
  const [config, setConfig] = useState<PublicConfig>(DEFAULT_CONFIG);
  const [available, setAvailable] = useState(true);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [activeUid, setActiveUid] = useState<string | null>(null);
  const [messages, setMessages] = useState<WidgetMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [starting, setStarting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [animatingId, setAnimatingId] = useState<string | null>(null);
  const [liveMessage, setLiveMessage] = useState("");
  const [twoCol, setTwoCol] = useState(false);

  const launcherRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const savedScrollRef = useRef(0);
  const inFlightRef = useRef(false);
  const turnStartRef = useRef(0);
  // The last user turn, kept so "Retry" can resend it with the SAME client
  // message id (idempotency key) instead of sending the now-empty composer.
  const turnRef = useRef<{ text: string; intentId: string | null; clientId: string } | null>(null);
  // Stick-to-bottom: only auto-scroll while the reader is already at the
  // bottom, so streaming answers never yank them away from earlier messages.
  const stickToBottomRef = useRef(true);

  const scrollToBottom = useCallback((force = false) => {
    const el = bodyRef.current;
    if (el && (force || stickToBottomRef.current)) el.scrollTop = el.scrollHeight;
  }, []);

  // Load config + health once on mount.
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const [cfg, ok] = await Promise.all([fetchConfig(), fetchHealth()]);
      if (cancelled) return;
      trackedConfigVersion = cfg.config_version ?? trackedConfigVersion;
      setConfig(cfg);
      setAvailable(ok);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // One-column vs two-column topic grid: measure the actual inner width.
  useEffect(() => {
    if (!open) return;
    const el = listRef.current;
    if (!el || typeof ResizeObserver === "undefined") {
      setTwoCol(typeof window !== "undefined" ? window.innerWidth >= 440 : true);
      return;
    }
    const measure = () => {
      const inner = el.clientWidth - 32; // minus horizontal content padding
      setTwoCol(inner >= TWO_COLUMN_MIN_INNER_PX);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [open]);

  // Focus management: enter on open, restore on close/minimize.
  useEffect(() => {
    if (open) {
      const t = requestAnimationFrame(() => {
        headingRef.current?.focus();
        const el = bodyRef.current;
        if (el) el.scrollTop = savedScrollRef.current || el.scrollHeight;
      });
      return () => cancelAnimationFrame(t);
    }
    launcherRef.current?.focus();
  }, [open]);

  // Escape closes the panel when focus is inside the chat context.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (supportOpen) return;
      const panel = panelRef.current;
      if (panel && !panel.contains(document.activeElement)) return;
      if (menuOpen) {
        setMenuOpen(false);
        return;
      }
      savedScrollRef.current = bodyRef.current?.scrollTop ?? 0;
      setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, menuOpen, supportOpen]);

  // Close the overflow menu on an outside click.
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Keep the view pinned to the newest message — but only while the reader is
  // already at the bottom. If they have scrolled up to read earlier messages,
  // new content must not force them back down.
  useEffect(() => {
    if (open) scrollToBottom();
  }, [messages, busy, open, scrollToBottom]);

  const currentPage = () => (typeof window !== "undefined" ? window.location.pathname : "/");

  const storeActiveUid = useCallback((uid: string) => {
    try {
      window.localStorage.setItem(SESSION_KEY, uid);
    } catch {
      /* ignore */
    }
    setActiveUid(uid);
  }, []);

  const clearActiveUid = useCallback(() => {
    try {
      window.localStorage.removeItem(SESSION_KEY);
    } catch {
      /* ignore */
    }
    setActiveUid(null);
  }, []);

  // Restore an active session when the panel opens for the first time.
  useEffect(() => {
    if (!open) return;
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(SESSION_KEY);
    } catch {
      stored = null;
    }
    if (!stored) return;
    let cancelled = false;
    void (async () => {
      setStarting(true);
      try {
        const data = await resumeSession(stored, currentPage());
        if (cancelled) return;
        setActiveUid(stored);
        setMessages(toWireMessages(data.messages));
      } catch (err) {
        if (cancelled) return;
        // 404/409 = the stored session no longer exists as this visitor's own
        // (expired, closed, or bound to a different network). Drop it so the
        // next message starts fresh instead of retrying a dead session forever.
        const cause = err instanceof AssistantError ? err.cause_code : "";
        if (cause === "session_create_404" || cause === "session_create_409") {
          clearActiveUid();
          setError("Your previous conversation is no longer available. Send a message to start a new one.");
        } else {
          setError(explainThrown(err, "resume_session"));
        }
      } finally {
        if (!cancelled) setStarting(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [open, clearActiveUid]);

  // ── Turn runner ────────────────────────────────────────────────────────
  // Shared by fresh sends (composer/tile) and by "Retry". Retry resends the
  // last turn using the SAME client message id, so a request that actually
  // reached the backend is deduplicated by the idempotency key rather than
  // posted twice.
  const runTurn = useCallback(
    async (opts: { text?: string; intentId?: string | null; retry?: boolean } = {}) => {
      if (busy || starting || inFlightRef.current) return;

      let text: string;
      let intentId: string | null;
      let clientId: string;
      let appendUser: boolean;

      if (opts.retry) {
        const last = turnRef.current;
        if (!last) return;
        text = last.text;
        intentId = last.intentId;
        clientId = last.clientId;
        appendUser = false;
      } else {
        text = (opts.text ?? draft).trim();
        if (!text || text.length > MAX_INPUT_CHARS) return;
        intentId = opts.intentId ?? null;
        clientId = uuid();
        appendUser = true;
        turnRef.current = { text, intentId, clientId };
        setDraft("");
      }

      const page = currentPage();
      const userMsg: WidgetMessage = {
        id: clientId,
        role: "user",
        text,
        created_at: new Date().toISOString(),
      };

      setError(null);
      inFlightRef.current = true;
      setBusy(true);
      setLiveMessage("Waiting for a response.");
      stickToBottomRef.current = true;
      scrollToBottom(true);

      let uid = activeUid;
      try {
        if (!uid) {
          uid = uuid();
          await resumeSession(uid, page);
          storeActiveUid(uid);
          setMessages((prev) => (appendUser ? [userMsg] : prev.length ? prev : [userMsg]));
        } else if (appendUser) {
          setMessages((prev) => [...prev, userMsg]);
        }

        const combined = appendUser ? [...messages, userMsg] : messages;
        track("message_submitted", { session_uid: uid, topic_id: intentId });
        turnStartRef.current = Date.now();
        const res = await fetchAssistant(
          `${API_BASE}/sessions/${encodeURIComponent(uid)}/messages`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: text, page, message_id: clientId, intent_id: intentId }),
          },
          MESSAGE_TIMEOUT_MS
        );

        if (!res.ok) {
          track("assistant_error", { session_uid: uid });
          if (res.status === 404) {
            // The session is gone — expired, closed, or bound to another
            // network. Nothing was persisted for this turn on the server. Drop
            // the dead key (the next send starts a fresh anonymous session) but
            // KEEP the visitor's bubble so they can see what failed and resend.
            clearActiveUid();
            setError("This conversation session has ended. Your message wasn't delivered — send it again to start a new conversation.");
            setLiveMessage("Session ended.");
            return;
          }
          setError(await describeFailure(res));
          if (res.status >= 500) setAvailable(false);
          setLiveMessage("The assistant could not answer.");
          return;
        }

        let data: {
          message_uid?: string;
          answer?: string;
          mode?: string;
          risk_class?: string;
          requires_auth?: boolean;
          safety_state?: string;
          evidence?: { source?: string; url?: string }[];
        };
        try {
          data = await res.json();
        } catch (err) {
          logError("message response was not valid JSON", err);
          track("assistant_error", { session_uid: uid });
          setError("The assistant sent back an unreadable response. Please try again.");
          return;
        }

        const answer = typeof data.answer === "string" ? data.answer.trim() : "";
        if (!answer) {
          track("assistant_error", { session_uid: uid });
          setError("The assistant returned an empty answer. Please rephrase your question and try again.");
          return;
        }

        const respId = data.message_uid || uuid();
        const sources: SourceRef[] = [];
        const seen = new Set<string>();
        for (const e of data.evidence ?? []) {
          const title = (e.source ?? "").trim();
          if (!title || seen.has(title)) continue;
          seen.add(title);
          sources.push(e.url ? { title, url: e.url } : { title });
        }
        const topic = topicForTurn(combined, config.tiles, text);
        const msg: WidgetMessage = {
          id: respId,
          role: "assistant",
          text: answer,
          mode: data.mode || "M0_EXPLAIN",
          risk_class: data.risk_class || "R0",
          sources,
          created_at: new Date().toISOString(),
          navActions: data.requires_auth ? [] : navActionsFor(topic),
          requiresAuth: Boolean(data.requires_auth),
          safetyState: data.safety_state,
        };
        setMessages((prev) => [...prev, msg]);
        setAnimatingId(respId);
        setLiveMessage(
          data.requires_auth
            ? "Sign-in required for account-specific information."
            : data.safety_state === "uncertain"
              ? "The assistant could not verify an answer."
              : "Answer ready."
        );
        // Turn delivered — nothing left to retry.
        turnRef.current = null;
      } catch (err) {
        track("assistant_error", { session_uid: uid });
        setError(explainThrown(err, "send_message"));
        setLiveMessage("The assistant could not answer.");
      } finally {
        inFlightRef.current = false;
        setBusy(false);
        inputRef.current?.focus();
      }
    },
    [draft, busy, starting, activeUid, messages, config.tiles, storeActiveUid, clearActiveUid, scrollToBottom]
  );

  const send = useCallback(
    (overrideText?: string, intentId?: string) => {
      void runTurn({ text: overrideText, intentId });
    },
    [runTurn]
  );

  const retryLastTurn = useCallback(() => {
    setError(null);
    void runTurn({ retry: true });
  }, [runTurn]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const handleTile = (tile: TopicTile) => {
    if (busy || starting || inFlightRef.current) return;
    track("topic_selected", { session_uid: activeUid, topic_id: tile.id });
    send(tile.starter_question, tile.id);
  };

  const handleNewConversation = () => {
    setMenuOpen(false);
    clearActiveUid();
    setMessages([]);
    setError(null);
    setAnimatingId(null);
    setLiveMessage("New conversation started.");
    inputRef.current?.focus();
  };

  const handleFeedback = async (message: WidgetMessage, helpful: boolean) => {
    setMessages((prev) => prev.map((m) => (m.id === message.id ? { ...m, feedback: helpful ? "helpful" : "not_helpful" } : m)));
    try {
      await fetchAssistant(`${API_BASE}/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_uid: activeUid, message_uid: message.id, helpful }),
      });
    } catch (err) {
      logWarn("feedback could not be recorded", err);
    }
  };

  const navigate = (href: string) => {
    if (isAllowedUrl(href, config)) router.push(href);
  };

  const openSupport = () => {
    track("support_requested", { session_uid: activeUid });
    setMenuOpen(false);
    setSupportOpen(true);
  };

  const statusLabel = available ? "Online" : "Unavailable";
  const sendDisabled = !draft.trim() || draft.length > MAX_INPUT_CHARS || busy || starting || !available;

  return (
    <div className="ab-widget">
      <div aria-live="polite" className="ab-sr-only" role="status">
        {liveMessage}
      </div>

      {open && (
        <div
          className="ab-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="ab-panel-title"
          ref={panelRef}
          style={THEME as React.CSSProperties}
        >
          {/* Header — brand lockup (supplied wordmark image, symbol + text) plus
              the compact assistant label/status. The separate assistant
              favicon/icon remains on the launcher and message avatars, so the
              header never shows a duplicate mark or duplicate brand text. */}
          <header className="ab-panel__header">
            <div className="ab-brand">
              <Image
                src="/zoiko-billing-log.png"
                alt="Zoiko Billing"
                width={3263}
                height={1163}
                priority
                draggable={false}
                className="ab-logo"
              />
              <div className="ab-brand__text">
                <h2 id="ab-panel-title" className="ab-title" tabIndex={-1} ref={headingRef}>
                  Billing Assistant
                </h2>
                <p className="ab-status">
                  <span className={`ab-status__dot ${available ? "ab-status__dot--online" : "ab-status__dot--offline"}`} aria-hidden="true" />
                  {statusLabel}
                </p>
              </div>
            </div>

            <div className="ab-header-controls">
              <div className="ab-menu" ref={menuRef}>
                <button
                  type="button"
                  className="ab-icon-btn ab-icon-btn--round"
                  aria-label="More options"
                  aria-haspopup="menu"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((p) => !p)}
                >
                  <Ellipsis size={18} strokeWidth={2} />
                </button>
                {menuOpen && (
                  <div className="ab-menu__list" role="menu">
                    <button type="button" role="menuitem" onClick={handleNewConversation}>
                      New conversation
                    </button>
                    <a
                      role="menuitem"
                      href={config.privacy_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                    >
                      {config.privacy_label}
                    </a>
                    <button type="button" role="menuitem" onClick={openSupport}>
                      Contact support
                    </button>
                  </div>
                )}
              </div>
              <button
                type="button"
                className="ab-icon-btn ab-icon-btn--round"
                aria-label="Minimize assistant"
                onClick={() => {
                  track("widget_minimized", { session_uid: activeUid });
                  savedScrollRef.current = bodyRef.current?.scrollTop ?? 0;
                  setOpen(false);
                }}
              >
                <Minus size={18} strokeWidth={2} />
              </button>
              <button
                type="button"
                className="ab-icon-btn ab-icon-btn--round"
                aria-label="Close assistant"
                onClick={() => setOpen(false)}
              >
                <X size={18} strokeWidth={2} />
              </button>
            </div>
          </header>

          {/* Scrollable body */}
          <div
            className="ab-panel__body"
            ref={bodyRef}
            onScroll={(e) => {
              const el = e.currentTarget;
              stickToBottomRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < 48;
            }}
          >
            <div className="ab-panel__inner" ref={listRef} role="log" aria-label="Conversation">
              {messages.length === 0 ? (
                <div className="ab-greeting">
                  <div className="ab-greeting__row">
                    {zoikoMark(36, "ab-mark--lg")}
                    <div className="ab-greeting__bubble">
                      <p className="ab-greeting__title">{config.greeting_title}</p>
                      <p className="ab-greeting__body">{config.greeting_body}</p>
                    </div>
                  </div>

                  <div className={`ab-tiles ${twoCol ? "ab-tiles--two" : "ab-tiles--one"}`} role="list">
                    {config.tiles.map((tile) => {
                      const Icon = (tile.icon && TOPIC_ICONS[tile.icon]) || HelpCircle;
                      return (
                        <button
                          key={tile.id}
                          type="button"
                          role="listitem"
                          className="ab-tile"
                          onClick={() => handleTile(tile)}
                          disabled={busy || starting || !available}
                        >
                          <span
                            className="ab-tile__icon"
                            style={{ background: tile.tint || "#EEF4FA", color: tile.accent || "#0868F7" }}
                            aria-hidden="true"
                          >
                            <Icon size={20} strokeWidth={2} />
                          </span>
                          <span className="ab-tile__body">
                            <span className="ab-tile__label">{tile.label}</span>
                            {tile.description ? <span className="ab-tile__desc">{tile.description}</span> : null}
                          </span>
                          <span className="ab-tile__chevron" aria-hidden="true">
                            <ChevronRight size={16} strokeWidth={2} />
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <button type="button" className="ab-human-btn" onClick={openSupport}>
                    <span className="ab-human-btn__icon" aria-hidden="true">
                      <Headset size={20} strokeWidth={2} />
                    </span>
                    <span className="ab-human-btn__text">
                      <span className="ab-human-btn__label">{config.human_support_label}</span>
                      <span className="ab-human-btn__desc">{config.human_support_description}</span>
                    </span>
                    <ArrowRight className="ab-human-btn__arrow" size={16} strokeWidth={2.25} aria-hidden="true" />
                  </button>
                </div>
              ) : (
                <div className="ab-messages">
                  {messages.map((m) => (
                    <MessageBubble
                      key={m.id}
                      message={m}
                      config={config}
                      animating={m.role === "assistant" && m.id === animatingId}
                      sessionUid={activeUid}
                      onNavigate={navigate}
                      onDone={() => {
                        if (m.id === animatingId) {
                          track("answer_rendered", {
                            session_uid: activeUid,
                            timing_bucket: turnStartRef.current ? timingBucket(turnStartRef.current) : null,
                          });
                          setAnimatingId(null);
                          scrollToBottom();
                        }
                      }}
                      onFeedback={(helpful) => void handleFeedback(m, helpful)}
                    />
                  ))}

                  <button type="button" className="ab-human-btn ab-human-btn--inline" onClick={openSupport}>
                    <Headset size={16} strokeWidth={2.25} aria-hidden="true" />
                    {config.human_support_label}
                    <ArrowRight className="ab-human-btn__arrow" size={15} strokeWidth={2.25} aria-hidden="true" />
                  </button>
                </div>
              )}

              {busy && animatingId === null && (
                <div className="ab-row">
                  {zoikoMark(28, "ab-mark--lg")}
                  <div className="ab-bubble ab-bubble--assistant">
                    <span className="ab-typing-dots" role="status" aria-label="Waiting for a response">
                      <span className="ab-typing-dot ab-typing-dot--1" />
                      <span className="ab-typing-dot ab-typing-dot--2" />
                      <span className="ab-typing-dot ab-typing-dot--3" />
                    </span>
                  </div>
                </div>
              )}

              {!available && (
                <div className="ab-degraded" role="alert">
                  <AlertTriangle size={15} strokeWidth={2.25} />
                  <div>
                    <p>The assistant is temporarily unavailable.</p>
                    <div className="ab-degraded__actions">
                      <button type="button" onClick={() => void fetchHealth().then(setAvailable)}>Retry</button>
                      <button type="button" onClick={openSupport}>Contact support</button>
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="ab-form-error ab-form-error--panel" role="alert">
                  <span>{error}</span>
                  <span className="ab-form-error__actions">
                    <button type="button" onClick={retryLastTurn} disabled={busy || !available}>
                      Retry
                    </button>
                    <button type="button" onClick={openSupport}>
                      Contact support
                    </button>
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Composer */}
          <footer className="ab-panel__composer">
            <div className="ab-composer">
              <label htmlFor="ab-input" className="ab-sr-only">
                Ask a billing question
              </label>
              <textarea
                id="ab-input"
                ref={inputRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value.slice(0, MAX_INPUT_CHARS))}
                onKeyDown={handleKeyDown}
                placeholder={config.composer_placeholder}
                rows={1}
                maxLength={MAX_INPUT_CHARS}
                disabled={busy || starting || !available}
                aria-describedby="ab-input-help"
                aria-invalid={draft.length >= MAX_INPUT_CHARS}
                className="ab-input"
              />
              <button
                type="button"
                className="ab-send"
                onClick={() => void send()}
                disabled={sendDisabled}
                aria-label="Send message"
              >
                {busy || starting ? <Loader2 size={16} className="ab-spin" /> : <Send size={16} />}
              </button>
            </div>
            <div className="ab-composer__meta">
              <span id="ab-input-help" className="ab-sr-only">
                Press Enter to send, Shift and Enter for a new line. Maximum {MAX_INPUT_CHARS} characters.
              </span>
              {draft.length > MAX_INPUT_CHARS - 200 && (
                <span className="ab-count" aria-hidden="true">
                  {draft.length}/{MAX_INPUT_CHARS}
                </span>
              )}
            </div>
            <p className="ab-disclosure">
              <ShieldCheck size={12} strokeWidth={2.25} aria-hidden="true" />
              <span>{config.disclosure}</span>
            </p>
            <p className="ab-privacy">
              <a href={config.privacy_url} target="_blank" rel="noopener noreferrer">
                <ShieldCheck size={12} strokeWidth={2.25} /> {config.privacy_label}
              </a>
            </p>
          </footer>
        </div>
      )}

      {/* Launcher (kept available whenever the panel is closed) */}
      {!open && (
        <button
          type="button"
          ref={launcherRef}
          className="ab-launcher"
          aria-label="Open the Zoiko Billing assistant"
          onClick={() => {
            track("widget_opened", { session_uid: activeUid });
            setError(null);
            setMenuOpen(false);
            setOpen(true);
          }}
        >
          {zoikoMark(56, "ab-mark--launcher", true)}
          <span className="ab-sr-only">Billing Assistant</span>
        </button>
      )}

      {supportOpen && (
        <SupportModal
          config={config}
          sessionUid={activeUid}
          hasConversation={messages.length > 0}
          onClose={() => {
            setSupportOpen(false);
            panelRef.current?.querySelector<HTMLElement>(".ab-human-btn")?.focus();
          }}
          onContactSupport={() => {
            setSupportOpen(false);
            navigate(config.contact_support_url);
          }}
        />
      )}
    </div>
  );
}
