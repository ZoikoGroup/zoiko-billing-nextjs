"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Send,
  X,
  User,
  Loader2,
  Sparkles,
  Plus,
  History,
  Sun,
  Moon,
  ArrowRight,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileText,
  LifeBuoy,
  Maximize2,
  Minimize2,
  ExternalLink,
} from "lucide-react";

/**
 * components/assistant/PublicAssistantWidget.tsx
 * ----------------------------------------------
 * Floating chat widget for the zoikobilling.com marketing site (backend:
 * ZB-AI-PUB-001 /app/api/assistant/public/*). Mirrors the authenticated
 * Zoiko Billing platform assistant (frontend/src/modules/ai-assistant/
 * AssistantPanel.jsx): same theme (light/dark), same header controls
 * (New conversation, Recent conversations, Back to Main Menu, theme toggle),
 * same markdown rendering, welcome menu, suggested prompts and message
 * bubbles.
 *
 *  - auth-free + rate-limited (server-side), sessions stored per browser
 *  - history list comes from GET /api/assistant/public/sessions (per-IP)
 *  - sends the current page slug for retrieval page-context boosting
 */

const API_BASE = (
  process.env.NEXT_PUBLIC_ZOIKO_BILLING_API_BASE || "/api/assistant/public"
).replace(/\/$/, "");

const SESSION_KEY = "zb-public-assistant-session";
const THEME_KEY = "billingAssistantTheme";

type WidgetMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  created_at?: string;
  mode?: string;
  risk_class?: string;
  source?: string;
  navActions?: NavAction[];
};

type NavAction = {
  label: string;
  href: string;
};

type SessionSummary = {
  session_uid: string;
  title: string;
  status: string;
  message_count: number;
  created_at?: string;
  updated_at?: string;
};

// ── Theme definitions (port of AssistantPanel THEMES) ────────────────────────

const THEMES: Record<"light" | "dark", Record<string, string>> = {
  light: {
    "--ab-bg": "#ffffff",
    "--ab-surface": "#f8fafc",
    "--ab-surface-raised": "#f1f5f9",
    "--ab-border": "#e2e8f0",
    "--ab-border-subtle": "#f1f5f9",
    "--ab-text": "#0f172a",
    "--ab-text-secondary": "#475569",
    "--ab-text-muted": "#94a3b8",
    "--ab-text-dim": "#cbd5e1",
    "--ab-accent": "#F5841F",
    "--ab-accent-hover": "#e0750f",
    "--ab-accent-10": "rgba(245,132,31,0.10)",
    "--ab-accent-15": "rgba(245,132,31,0.15)",
    "--ab-accent-text": "#F5841F",
    "--ab-icon-btn-bg": "rgba(123,58,237,0.10)",
    "--ab-icon-btn-text": "#4C2CC5",
    "--ab-icon-btn-hover-bg": "rgba(245,132,31,0.15)",
    "--ab-icon-btn-hover-text": "#F5841F",
    "--ab-user-bubble": "#F5841F",
    "--ab-assistant-bubble": "#f1f5f9",
    "--ab-assistant-bubble-text": "#0f172a",
    "--ab-system-bubble": "#fff7ed",
    "--ab-system-bubble-text": "#9a3412",
    "--ab-system-bubble-border": "#fed7aa",
    "--ab-input-bg": "#ffffff",
    "--ab-input-border": "#e2e8f0",
    "--ab-input-text": "#0f172a",
    "--ab-input-placeholder": "#94a3b8",
    "--ab-focus-ring": "rgba(245,132,31,0.3)",
  },
  dark: {
    "--ab-bg": "#0F1729",
    "--ab-surface": "#162032",
    "--ab-surface-raised": "#1e293b",
    "--ab-border": "#1e293b",
    "--ab-border-subtle": "#1e293b",
    "--ab-text": "#f1f5f9",
    "--ab-text-secondary": "#94a3b8",
    "--ab-text-muted": "#64748b",
    "--ab-text-dim": "#475569",
    "--ab-accent": "#F5841F",
    "--ab-accent-hover": "#ff9a4d",
    "--ab-accent-10": "rgba(245,132,31,0.12)",
    "--ab-accent-15": "rgba(245,132,31,0.18)",
    "--ab-accent-text": "#F5841F",
    "--ab-icon-btn-bg": "rgba(123,58,237,0.22)",
    "--ab-icon-btn-text": "#C4A5FF",
    "--ab-icon-btn-hover-bg": "rgba(245,132,31,0.20)",
    "--ab-icon-btn-hover-text": "#F5841F",
    "--ab-user-bubble": "#F5841F",
    "--ab-assistant-bubble": "#1e293b",
    "--ab-assistant-bubble-text": "#e2e8f0",
    "--ab-system-bubble": "rgba(154,52,18,0.15)",
    "--ab-system-bubble-text": "#fdba74",
    "--ab-system-bubble-border": "rgba(251,146,60,0.25)",
    "--ab-input-bg": "#1e293b",
    "--ab-input-border": "#334155",
    "--ab-input-text": "#f1f5f9",
    "--ab-input-placeholder": "#64748b",
    "--ab-focus-ring": "rgba(245,132,31,0.35)",
  },
};

function useAssistantTheme() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      const stored = window.localStorage.getItem(THEME_KEY);
      if (stored !== null) return stored === "dark";
    } catch {
      /* ignore */
    }
    return false;
  });

  const toggle = () => setIsDark((p) => !p);

  useEffect(() => {
    try {
      window.localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }, [isDark]);

  return { isDark, toggle, themeVars: THEMES[isDark ? "dark" : "light"] };
}

// ── Mode / risk badges (port of AssistantPanel MODE_CONFIG / RISK_COLORS) ────

const MODE_CONFIG: Record<
  string,
  { label: string; icon: typeof Sparkles; color: string; bg: string; border: string }
> = {
  M0_EXPLAIN: { label: "Explain", icon: Sparkles, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" },
  M1_INSPECT: { label: "Inspect", icon: FileText, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
  M2_PREPARE: { label: "Prepare", icon: Clock, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" },
  M3_PREVIEW: { label: "Preview", icon: CheckCircle2, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200" },
  M4_EXECUTE: { label: "Execute", icon: Shield, color: "text-red-600", bg: "bg-red-50", border: "border-red-200" },
  M5_ESCALATE: { label: "Escalate", icon: AlertTriangle, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200" },
};

const RISK_COLORS: Record<string, string> = {
  R0: "bg-[var(--ab-surface-raised)] text-[var(--ab-text-secondary)]",
  R1: "bg-emerald-100 text-emerald-700",
  R2: "bg-amber-100 text-amber-700",
  R3: "bg-orange-100 text-orange-700",
  R4: "bg-red-100 text-red-700",
  RX: "bg-red-200 text-red-800",
};

// ── Welcome message (port of platform WELCOME_MESSAGE) ───────────────────────

const WELCOME_MESSAGE =
  "Hi, I'm your Billing Assistant 👋 Ask me about invoices, payments, customers, or billing workflows — I'll answer here or point you to the right screen.";

type Category = {
  num: number;
  label: string;
  question: string | null;
  action?: "chat" | "escalate";
};

// ── FAQ category menu (port of platform FAQ_CATEGORIES, incl. escalation) ────
// 1:1 with the platform quick-action grid. "chat" = prefill + send the
// question to the AI; "escalate" = route the visitor to human support.

const FAQ_CATEGORIES: Category[] = [
  { num: 1, label: "Getting started", question: "How do I get started with Zoiko Billing?", action: "chat" },
  { num: 2, label: "Invoices", question: "How do I check an invoice's status?", action: "chat" },
  { num: 3, label: "Payments", question: "How do I record a payment?", action: "chat" },
  { num: 4, label: "Reconciliation", question: "How does payment reconciliation work?", action: "chat" },
  { num: 5, label: "Credits & refunds", question: "What's the difference between a credit and a refund?", action: "chat" },
  { num: 6, label: "Entities & currencies", question: "How do multi-entity and multi-currency work?", action: "chat" },
  { num: 7, label: "Permissions", question: "How do user roles and permissions work?", action: "chat" },
  { num: 8, label: "What this assistant can do", question: "What can you help me with?", action: "chat" },
  { num: 9, label: "Speak to a human", question: null, action: "escalate" },
];

// ── Screen navigation (functional "Open [screen]" actions on zoikobilling.com) ─

const TOPIC_KEYWORDS: Record<string, string[]> = {
  invoices: [
    "invoice", "invoices", "draft", "cancelled", "correct", "sent",
    "delivery", "overdue", "line item", "partially_paid", "refunded",
    "written_off", "status", "dunning",
  ],
  payments: [
    "payment", "payments", "record", "allocation", "allocated", "unapplied",
    "failed payment", "paid",
  ],
  refunds: [
    "refund", "refunds", "credit", "credit note", "returned", "adjustment",
  ],
  balances: [
    "balance", "outstanding", "aging", "aging report", "collections",
    "dispute", "amount due",
  ],
  account: [
    "customer", "customers", "contact", "role", "roles", "permission",
    "permissions", "user", "users", "account", "access",
  ],
  started: [
    "get started", "getting started", "started", "new to", "beginner",
    "onboarding", "first time",
  ],
  currencies: [
    "currency", "currencies", "exchange", "multi-currency", "multi-entity",
    "entity", "entities", "subsidiary",
  ],
  reconciliation: [
    "reconcile", "reconciliation", "matching", "match payments",
    "bank statement", "bank feed",
  ],
  general: [
    "zoiko", "zoiko billing", "who is", "what is", "about",
    "pricing", "price", "cost", "demo", "trial", "contact",
    "support", "can you", "features", "capabilit",
  ],
};

// ── Screen navigation (functional "Open [screen]" actions on zoikobilling.com) ─

const TOPIC_SCREENS: Record<string, NavAction[]> = {
  started: [{ label: "Open Platform overview", href: "/platform-overview" }],
  invoices: [
    { label: "Open Invoices", href: "/invoices" },
    { label: "Open Outstanding balances", href: "/outstanding-balances" },
  ],
  payments: [{ label: "Open Payments", href: "/payments-and-reconcilliation" }],
  reconciliation: [{ label: "Open Reconciliation", href: "/payments-and-reconcilliation" }],
  refunds: [{ label: "Open Credits & refunds", href: "/charges-and-adjustments" }],
  balances: [{ label: "Open Outstanding balances", href: "/outstanding-balances" }],
  account: [{ label: "Open Account access", href: "/account-access" }],
  currencies: [
    { label: "Open Multi-entity billing", href: "/multi-entity-billing" },
    { label: "Open Multi-currency", href: "/multi-currency" },
  ],
  general: [
    { label: "Open Product overview", href: "/product" },
    { label: "Open Help center", href: "/help-center" },
  ],
};

const CATEGORY_TOPIC: Record<number, string> = {
  1: "started",
  2: "invoices",
  3: "payments",
  4: "reconciliation",
  5: "refunds",
  6: "currencies",
  7: "account",
  8: "general",
};

function detectTopic(messages: WidgetMessage[]): string | null {
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const text = (lastUser ? lastUser.text || "" : "").toLowerCase();

  let bestTopic: string | null = null;
  let bestScore = 0;
  for (const [topic, keywords] of Object.entries(TOPIC_KEYWORDS)) {
    let score = 0;
    for (const kw of keywords) {
      if (text.includes(kw)) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      bestTopic = topic;
    }
  }
  return bestScore >= 1 ? bestTopic : null;
}

// Picks the topic for a turn: category-based for quick actions, keyword-based
// otherwise. Resolves to the same topic keys used by screens.
function topicForMessages(messages: WidgetMessage[]): string | null {
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  if (lastUser) {
    for (const cat of FAQ_CATEGORIES) {
      if (cat.question && lastUser.text.includes(cat.question)) {
        return CATEGORY_TOPIC[cat.num] || null;
      }
    }
  }
  return detectTopic(messages);
}

function navActionsFor(topic: string | null): NavAction[] {
  if (!topic) return [];
  return TOPIC_SCREENS[topic] || [];
}

// ── Markdown rendering (port of AssistantPanel MD_COMPONENTS) ────────────────

const CURRENCY_SYMBOLS = ["$", "€", "£", "¥", "₹", "₩", "₺", "₽", "₴", "₱", "₫", "฿", "₦"];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isFinancialEmphasis(children: any): boolean {
  const text = (Array.isArray(children) ? children.join("") : String(children ?? "")).trim();
  if (!text) return false;
  return CURRENCY_SYMBOLS.some((sym) => text.startsWith(sym));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MD_COMPONENTS: any = {
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="my-2 first:mt-0 last:mb-0 leading-relaxed" style={{ color: "inherit" }}>
      {children}
    </p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc pl-5 my-2 space-y-1.5 first:mt-0 last:mb-0">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal pl-5 my-2 space-y-1.5 first:mt-0 last:mb-0">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className={isFinancialEmphasis(children) ? "ab-financial" : "font-semibold"}>{children}</strong>
  ),
  em: ({ children }: { children: React.ReactNode }) => <em className="italic">{children}</em>,
  a: ({ children, href }: { children: React.ReactNode; href?: string }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2"
      style={{ color: "var(--ab-accent)" }}
    >
      {children}
    </a>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code
      className="px-1 py-0.5 rounded text-[0.85em] font-mono"
      style={{ background: "var(--ab-surface-raised)" }}
    >
      {children}
    </code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre
      className="overflow-x-auto rounded-lg p-3 my-2 text-xs font-mono"
      style={{ background: "var(--ab-surface-raised)" }}
    >
      {children}
    </pre>
  ),
  h1: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-base font-semibold leading-snug my-2.5 first:mt-0">{children}</h3>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-sm font-semibold leading-snug my-2.5 first:mt-0">{children}</h3>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-sm font-semibold leading-snug my-2.5 first:mt-0">{children}</h4>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-sm font-semibold leading-snug my-2.5 first:mt-0">{children}</h4>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote
      className="border-l-2 pl-3 my-2 italic opacity-80"
      style={{ borderColor: "var(--ab-border)" }}
    >
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-3 border-t" style={{ borderColor: "var(--ab-border)" }} />,
};

function normalizeAnswerText(text: string): string {
  let t = (text || "").replace(/<\s*br\s*\/?>/gi, "\n");
  t = t.replace(/\(\s*Sources?:\s*\[[^\]]*\](?:\s*,\s*\[[^\]]*\])*\s*\)/gi, "");
  t = t.replace(/(?<!\n)[ \t]{2,}/g, " ");
  t = t.replace(/[ \t]+\n/g, "\n");
  t = t.replace(/ +([.,!?;:])/g, "$1");
  t = t.replace(/[\s\n]*[*_]*\s*Sources?:?\s*[*_]*[\s\n]*(?:-?\s*\[[\d,\s\]]+\s*[\n\r]*)+$/i, "");
  return t.trim();
}

function MarkdownContent({ text }: { text: string }) {
  return (
    <div className="text-sm leading-relaxed">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={MD_COMPONENTS}>
        {normalizeAnswerText(text)}
      </ReactMarkdown>
    </div>
  );
}

// ── Progressive typewriter reveal (port of useTypewriter / splitStablePrefix) ─

const FENCE_RE = /^\s*```/;
const SENTENCE_END = /[.!?…][)"']?$/;

function splitStablePrefix(text: string) {
  if (!text) return { prefix: "", tail: "", inCode: false };
  const lines = text.split("\n");
  let inFence = false;
  let lastOpenLineStart = -1;
  let lineStart = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
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
    return {
      prefix: text.slice(0, lastOpenLineStart),
      tail: text.slice(lastOpenLineStart),
      inCode: true,
    };
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
  const text = normalizeAnswerText(fullText || "");
  const LONG_TEXT_CHARS = 600;
  const cps = text.length >= LONG_TEXT_CHARS ? 52 : 46;

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
    // Reset of typewriter progress when the source text changes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCount(0);

    if (!text) {
      setDisplayed("");
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
      const delay = typewriterDelay(chunk, cps, 15, 90);
      timerRef.current = setTimeout(step, delay);
    };

    timerRef.current = setTimeout(step, 160);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      doneListenersRef.current = [];
    };
  }, [segments, cps, text]);

  const done = !text || count >= segments.length;

  return {
    displayed: displayed,
    isTyping: !done,
    done,
    onDone(cb: () => void) {
      const arr = doneListenersRef.current;
      if (typeof cb === "function" && !arr.includes(cb)) arr.push(cb);
    },
  };
}

function MarkdownTypewriter({ text, onDone }: { text: string; onDone?: () => void }) {
  const { displayed, isTyping, done } = useTypewriter(text);
  const firedRef = useRef(false);

  useEffect(() => {
    if (done && !firedRef.current) {
      firedRef.current = true;
      onDone?.();
    }
  }, [done, onDone]);

  const { prefix, tail, inCode } = splitStablePrefix(displayed);

  return (
    <div className="text-sm leading-relaxed">
      {isTyping && !displayed && text && (
        <span
          className="inline-flex items-center gap-1 uppercase tracking-wider text-[10px]"
          style={{ color: "var(--ab-text-muted)" }}
          role="status"
        >
          <span className="ab-typing-dot ab-typing-dot--1" />
          <span className="ab-typing-dot ab-typing-dot--2" />
          <span className="ab-typing-dot ab-typing-dot--3" />
        </span>
      )}
      {!isTyping && text && (
        <MarkdownContent text={text} />
      )}
      {isTyping && displayed && (
        <>
          {prefix && <MarkdownContent text={prefix} />}
          {tail && (
            <span
              className={`whitespace-pre-wrap block${inCode ? ` font-mono text-[0.85em] rounded-lg p-2 mt-2` : ""}`}
              style={inCode ? { background: "var(--ab-surface-raised)", color: "var(--ab-assistant-bubble-text)" } : undefined}
            >
              {tail}
            </span>
          )}
          <span className="ab-typing-caret ml-0.5" aria-hidden="true" />
        </>
      )}
    </div>
  );
}

// ── Launcher mark (official asset, matches platform toggle) ─────────────────

function zoikoMark(size: number, rounded: string, showAccentDot = false) {
  return (
    <span
      className={`relative inline-flex flex-shrink-0 items-center justify-center overflow-hidden ${rounded}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Image
        src="/zoiko-icon.png"
        alt=""
        width={size}
        height={size}
        draggable={false}
        unoptimized
        style={{
          width: size,
          height: size,
          display: "block",
          pointerEvents: "none",
        }}
      />
      {showAccentDot && (
        <span
          className="absolute border-2 border-white"
          style={{
            width: Math.max(8, Math.round(size * 0.22)),
            height: Math.max(8, Math.round(size * 0.22)),
            right: -1,
            top: -1,
            borderRadius: "9999px",
            backgroundColor: "#ff7a00",
          }}
        />
      )}
    </span>
  );
}

// ── Sub-components ───────────────────────────────────────────────────────────

function MessageTimeStamp({ message }: { message: WidgetMessage }) {
  if (!message.created_at) return null;
  const d = new Date(message.created_at);
  if (Number.isNaN(d.getTime())) return null;
  const time = d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  const isUser = message.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mt-1`}>
      <span className="text-[10px] leading-none" style={{ color: "var(--ab-text-muted)" }} title={d.toLocaleString()}>
        {time}
      </span>
    </div>
  );
}

function MessageBubble({
  message,
  animating,
  onDone,
  onNavigate,
}: {
  message: WidgetMessage;
  animating: boolean;
  onDone?: () => void;
  onNavigate: (href: string) => void;
}) {
  const isUser = message.role === "user";
  const mode = message.mode ? MODE_CONFIG[message.mode] : null;
  const riskClass = message.risk_class || "R0";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} gap-2`}>
      {!isUser && zoikoMark(28, "rounded-lg")}

      <div className={`max-w-[85%] min-w-0 ${isUser ? "order-1" : ""}`}>
        {mode && (
          <div className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full mb-1 ${mode.bg} ${mode.color} ${mode.border} border`}>
            <mode.icon size={10} />
            {mode.label}
            <span className={`ml-1 px-1 rounded text-[9px] ${RISK_COLORS[riskClass] || RISK_COLORS.R0}`}>{riskClass}</span>
          </div>
        )}

        <div
          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
            isUser ? "rounded-br-sm" : "rounded-bl-sm"
          }`}
          style={
            isUser
              ? { backgroundColor: "var(--ab-user-bubble)", color: "#ffffff" }
              : { backgroundColor: "var(--ab-assistant-bubble)", color: "var(--ab-assistant-bubble-text)" }
          }
        >
          {isUser ? (
            <div className="whitespace-pre-wrap leading-relaxed">{message.text}</div>
          ) : animating ? (
            <MarkdownTypewriter text={message.text} onDone={onDone} />
          ) : (
            <MarkdownContent text={message.text} />
          )}
        </div>

        {message.source && (
          <p className="mt-1 text-[11px] leading-4 px-1" style={{ color: "var(--ab-text-muted)" }}>
            Source: {message.source}
          </p>
        )}

        {!isUser && !animating && message.navActions && message.navActions.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {message.navActions.map((a) => (
              <button
                key={a.href}
                type="button"
                onClick={() => onNavigate(a.href)}
                className="inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors hover:brightness-95"
                style={{
                  color: "var(--ab-accent-text)",
                  borderColor: "var(--ab-accent-15)",
                  background: "var(--ab-accent-10)",
                }}
              >
                <ExternalLink size={12} strokeWidth={2.25} />
                {a.label}
              </button>
            ))}
          </div>
        )}

        <MessageTimeStamp message={message} />
      </div>

      {isUser && (
        <div
          className="h-7 w-7 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: "var(--ab-surface-raised)" }}
        >
          <User size={14} style={{ color: "var(--ab-text-secondary)" }} />
        </div>
      )}
    </div>
  );
}

function MenuSection({ onSelect }: { onSelect: (cat: Category) => void }) {
  return (
    <div className="space-y-2">
      <div className="flex items-start gap-2">
        {zoikoMark(28, "rounded-lg")}
        <div
          className="rounded-2xl rounded-bl-sm px-4 py-3 text-sm leading-relaxed max-w-[85%]"
          style={{ backgroundColor: "var(--ab-assistant-bubble)", color: "var(--ab-assistant-bubble-text)" }}
        >
          <div className="whitespace-pre-wrap">{WELCOME_MESSAGE}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-2">
        {FAQ_CATEGORIES.map((cat) => {
          const isEscalate = cat.action === "escalate";
          return (
            <button
              key={cat.num}
              onClick={() => onSelect(cat)}
              className={`group flex items-center gap-2.5 text-left transition-colors rounded-xl px-3 py-2.5 ${
                isEscalate ? "border border-dashed" : "border"
              }`}
              style={{
                borderColor: "var(--ab-border)",
                background: "var(--ab-surface)",
              }}
            >
              <span
                className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-[11px] font-bold"
                style={{ background: "var(--ab-accent-15)", color: "var(--ab-accent-text)" }}
              >
                {isEscalate ? <LifeBuoy size={12} strokeWidth={2.5} /> : cat.num}
              </span>
              <span className="text-[13px] font-medium leading-tight flex-1" style={{ color: "var(--ab-text)" }}>
                {cat.label}
              </span>
              <ArrowRight
                size={12}
                className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "var(--ab-accent-text)" }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Main widget ──────────────────────────────────────────────────────────────

async function fetchAssistant(
  url: string,
  init: RequestInit = {},
  timeoutMs = 10000
): Promise<Response> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: ctrl.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function fetchSessionsList(): Promise<SessionSummary[]> {
  try {
    const res = await fetchAssistant(`${API_BASE}/sessions`, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function resumeSession(sessionUid: string, page?: string) {
  const res = await fetchAssistant(
    `${API_BASE}/sessions`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session_uid: sessionUid, page }),
    },
    15000
  );
  if (!res.ok) {
    throw new Error(`resume failed: ${res.status}`);
  }
  return res.json();
}

export default function PublicAssistantWidget() {
  const router = useRouter();
  const { isDark, toggle, themeVars } = useAssistantTheme();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [sessions, setSessions] = useState<SessionSummary[]>([]);
  const [activeUid, setActiveUid] = useState<string | null>(null);
  const [messages, setMessages] = useState<WidgetMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [starting, setStarting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recentOpen, setRecentOpen] = useState(false);
  const [recentLoading, setRecentLoading] = useState(false);
  const [animatingUid, setAnimatingUid] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const recentRef = useRef<HTMLDivElement | null>(null);
  const resumeLoadedRef = useRef(false);

  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    const el = listRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior });
  };

  const currentPage = () =>
    typeof window !== "undefined" ? window.location.pathname : "/";

  // ── helpers ────────────────────────────────────────────────────────────

  function storeActiveUid(uid: string) {
    try {
      window.localStorage.setItem(SESSION_KEY, uid);
    } catch {
      /* ignore storage failures */
    }
    setActiveUid(uid);
  }

  function clearActiveUid() {
    try {
      window.localStorage.removeItem(SESSION_KEY);
    } catch {
      /* ignore */
    }
    setActiveUid(null);
  }

  // ── open / resume ──────────────────────────────────────────────────────

  useEffect(() => {
    if (!open || resumeLoadedRef.current) return;
    resumeLoadedRef.current = true;
    let cancelled = false;

    (async () => {
      try {
        const history = await fetchSessionsList();
        if (cancelled) return;
        setSessions(history);

        let stored: string | null = null;
        try {
          stored = window.localStorage.getItem(SESSION_KEY);
        } catch {
          stored = null;
        }

        // Only resume a session the visitor explicitly kept active. Fresh
        // visitors always see the welcome screen instantly instead of waiting
        // on history loading.
        const resumeUid =
          stored && history.some((s) => s.session_uid === stored)
            ? stored
            : null;

        if (!resumeUid) {
          if (!cancelled) {
            setMessages([]);
          }
          return;
        }

        setStarting(true);
        const data = await resumeSession(resumeUid, currentPage());
        if (cancelled) return;
        storeActiveUid(resumeUid);
        const msgs: WidgetMessage[] = (data.messages || []).map(
          (m: { message_uid: string; sender_type: string; message_text: string; mode?: string; risk_class?: string; created_at?: string }) => ({
            id: m.message_uid,
            role: m.sender_type === "user" ? "user" : "assistant",
            text: m.message_text,
            mode: m.mode,
            risk_class: m.risk_class,
            created_at: m.created_at,
          })
        );
        setMessages(msgs);
      } catch {
        // Never get stuck on the loading state: reset the guard so the next
        // open retries, and fall back to the welcome screen + error note.
        resumeLoadedRef.current = false;
        if (!cancelled) {
          setError("Could not reach the assistant. Please try again in a moment.");
        }
      } finally {
        if (!cancelled) setStarting(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [open]);

  useEffect(() => {
    if (!recentOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (recentRef.current && !recentRef.current.contains(e.target as Node)) {
        setRecentOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [recentOpen]);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, busy, open]);

  // ── actions ────────────────────────────────────────────────────────────

  async function send(overrideText?: string) {
    const text = (overrideText ?? draft).trim();
    if (!text || busy || starting) return;

    setDraft("");
    setError(null);

    const page = currentPage();
    const userMsg: WidgetMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text,
      created_at: new Date().toISOString(),
    };

    let uid = activeUid;
    setBusy(true);
    scrollToBottom("auto");
    try {
      if (!uid) {
        uid = crypto.randomUUID();
        await resumeSession(uid, page);
        storeActiveUid(uid);
        setMessages([userMsg]);
      } else {
        setMessages((prev) => [...prev, userMsg]);
      }

      const res = await fetch(`${API_BASE}/sessions/${uid}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, page }),
      });
      if (!res.ok) {
        if (res.status === 429) {
          setError("You're sending messages a bit fast — please wait a moment and try again.");
        } else if (res.status === 503) {
          setError("The assistant hit a temporary issue. Please try again.");
        } else {
          setError(`Something went wrong (${res.status}). Please try again.`);
        }
        return;
      }
      const data = await res.json();
      const respId = data.message_uid || crypto.randomUUID();
      const combined = [...messages, userMsg];
      const topic = topicForMessages(combined) ?? "general";
      const msg: WidgetMessage = {
        id: respId,
        role: "assistant",
        text: data.answer || "…",
        mode: data.mode || "M0_EXPLAIN",
        risk_class: data.risk_class || "R0",
        source: data.evidence?.[0]?.source,
        created_at: new Date().toISOString(),
        navActions: navActionsFor(topic),
      };
      setMessages((prev) => [...prev, msg]);
      setAnimatingUid(respId);
      void fetchSessionsList().then((h) => setSessions(h));
    } catch {
      setError("Could not reach the assistant. Please check your connection and try again.");
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  }

  function handleNewConversation() {
    setRecentOpen(false);
    clearActiveUid();
    setMessages([]);
    setError(null);
    setAnimatingUid(null);
    scrollToBottom("auto");
    inputRef.current?.focus();
  }

  async function selectSession(sessionUid: string) {
    setRecentOpen(false);
    setError(null);
    setBusy(true);
    try {
      const data = await resumeSession(sessionUid, currentPage());
      storeActiveUid(sessionUid);
      const msgs: WidgetMessage[] = (data.messages || []).map(
        (m: { message_uid: string; sender_type: string; message_text: string; mode?: string; risk_class?: string; created_at?: string }) => ({
          id: m.message_uid,
          role: m.sender_type === "user" ? "user" : "assistant",
          text: m.message_text,
          mode: m.mode,
          risk_class: m.risk_class,
          created_at: m.created_at,
        })
      );
      setMessages(msgs);
      setAnimatingUid(null);
      scrollToBottom("auto");
    } catch {
      setError("Could not load that conversation. Please try again.");
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  }

  function handleMenuSelect(cat: Category) {
    if (cat.action === "escalate") {
      router.push("/contact");
      return;
    }
    if (cat.question) void send(cat.question);
  }

  const navigate = (href: string) => router.push(href);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void send();
    }
  };

  return (
    <div className="ab-widget fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          role="complementary"
          aria-label="AI Billing Assistant"
          className="flex h-[min(672px,calc(100dvh-7rem))] flex-col overflow-hidden rounded-2xl border shadow-[0_24px_60px_-20px_rgba(15,23,42,0.35)]"
          style={{
            ...themeVars,
            width: `min(${expanded ? 680 : 440}px, calc(100vw - 2rem))`,
            borderColor: "var(--ab-border)",
            background: "var(--ab-bg)",
            fontFamily:
              'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          }}
        >
          {/* Header */}
          <header
            className="flex items-center justify-between px-4 py-3"
            style={{ borderBottom: "1px solid var(--ab-border)" }}
          >
            <div className="flex items-center gap-2">
              {zoikoMark(32, "rounded-lg")}
              <div>
                <h2
                  className="text-sm font-semibold"
                  style={{ color: "var(--ab-text)", letterSpacing: "normal", lineHeight: 1.25 }}
                >
                  Billing Assistant
                </h2>
                <p
                  className="text-xs flex items-center gap-1.5"
                  style={{ color: "var(--ab-text-secondary)", lineHeight: 1.25 }}
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                  Online · Zoiko Billing AI
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleNewConversation}
                disabled={busy || starting}
                className="ab-icon-btn h-8 w-8 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="New conversation"
                title="New conversation"
              >
                <Plus size={16} strokeWidth={2} />
              </button>

              <div className="relative" ref={recentRef}>
                <button
                  type="button"
                  onClick={() => {
                    if (!recentOpen && !recentLoading) {
                      setRecentLoading(true);
                      void fetchSessionsList()
                        .then((h) => setSessions(h))
                        .finally(() => setRecentLoading(false));
                    }
                    setRecentOpen((p) => !p);
                  }}
                  className={`ab-icon-btn h-8 w-8 rounded-full flex items-center justify-center transition-colors${recentOpen ? " ab-icon-btn--active" : ""}`}
                  aria-label="Recent conversations"
                  aria-expanded={recentOpen}
                  aria-haspopup="listbox"
                  aria-controls="assistant-recent-list"
                  title="Recent conversations"
                >
                  <History size={16} strokeWidth={2} />
                </button>

                {recentOpen && (
                  <div
                    id="assistant-recent-list"
                    className="absolute right-0 top-full mt-2 w-[min(20rem,calc(100vw-2.5rem))] max-h-72 overflow-y-auto rounded-xl shadow-lg z-[60]"
                    role="listbox"
                    aria-label="Recent conversations"
                    style={{ background: "var(--ab-bg)", border: "1px solid var(--ab-border)" }}
                  >
                    {recentLoading ? (
                      <div className="px-4 py-6 text-center">
                        <p className="text-xs" style={{ color: "var(--ab-text-muted)" }}>
                          Loading conversations…
                        </p>
                      </div>
                    ) : sessions.length === 0 ? (
                      <div className="px-4 py-6 text-center">
                        <p className="text-xs" style={{ color: "var(--ab-text-muted)" }}>
                          No conversations yet
                        </p>
                      </div>
                    ) : (
                      sessions.map((s) => {
                        const isActive = s.session_uid === activeUid;
                        const ts = s.updated_at || s.created_at;
                        const dateLabel = ts
                          ? new Date(ts).toLocaleDateString(undefined, { month: "short", day: "numeric" })
                          : "";
                        return (
                          <button
                            key={s.session_uid}
                            role="option"
                            aria-selected={isActive}
                            onClick={() => void selectSession(s.session_uid)}
                            className="w-full text-left px-4 py-3 transition-colors"
                            style={{
                              borderBottom: "1px solid var(--ab-border-subtle)",
                              background: isActive ? "var(--ab-accent-10)" : "transparent",
                            }}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <p
                                className="text-sm truncate"
                                style={{ color: isActive ? "var(--ab-accent-text)" : "var(--ab-text)" }}
                              >
                                {s.title || "Untitled"}
                              </p>
                              {dateLabel && (
                                <span className="text-[10px] whitespace-nowrap mt-0.5" style={{ color: "var(--ab-text-muted)" }}>
                                  {dateLabel}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] mt-0.5" style={{ color: "var(--ab-text-muted)" }}>
                              {s.message_count || 0} messages · {s.status}
                            </p>
                          </button>
                        );
                      })
                    )}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={toggle}
                className="ab-icon-btn h-8 w-8 rounded-full flex items-center justify-center transition-colors"
                aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
                title={isDark ? "Light mode" : "Dark mode"}
              >
                {isDark ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
              </button>

              <button
                type="button"
                onClick={() => setExpanded((p) => !p)}
                className="ab-icon-btn h-8 w-8 rounded-full flex items-center justify-center transition-colors"
                aria-label={expanded ? "Collapse assistant panel" : "Expand assistant panel"}
                aria-pressed={expanded}
                title={expanded ? "Collapse panel" : "Expand panel"}
              >
                {expanded ? <Minimize2 size={16} strokeWidth={2} /> : <Maximize2 size={16} strokeWidth={2} />}
              </button>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="ab-icon-btn h-8 w-8 rounded-full flex items-center justify-center transition-colors"
                aria-label="Close assistant panel"
                title="Close"
              >
                <X size={16} strokeWidth={2} />
              </button>
            </div>
          </header>

          {/* Messages viewport */}
          <div
            className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-4 space-y-4"
            role="log"
            aria-label="Conversation messages"
            style={{ backgroundColor: "var(--ab-bg)" }}
          >
            {messages.map((m) => (
              <MessageBubble
                key={m.id}
                message={m}
                animating={m.role === "assistant" && m.id === animatingUid}
                onNavigate={navigate}
                onDone={() => {
                  if (m.id === animatingUid) {
                    setAnimatingUid(null);
                    scrollToBottom("smooth");
                  }
                }}
              />
            ))}

            {messages.length === 0 && (
              <div className="mt-2">
                <MenuSection onSelect={handleMenuSelect} />
              </div>
            )}

            {busy && animatingUid === null && (
              <div className="flex items-start gap-2">
                {zoikoMark(28, "rounded-lg")}
                <div
                  className="rounded-2xl rounded-bl-sm px-4 py-3"
                  style={{ backgroundColor: "var(--ab-assistant-bubble)", color: "var(--ab-assistant-bubble-text)" }}
                >
                  <div className="flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin" style={{ color: "var(--ab-accent-text)" }} />
                    <span className="text-xs" style={{ color: "var(--ab-text-secondary)" }}>
                      Checking records…
                    </span>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <p
                className="rounded-lg border px-3 py-2 text-xs leading-5"
                style={{
                  borderColor: "var(--ab-system-bubble-border)",
                  background: "var(--ab-system-bubble)",
                  color: "var(--ab-system-bubble-text)",
                }}
              >
                {error}
              </p>
            )}
          </div>

          {/* Composer */}
          <footer
            className="px-4 py-3"
            style={{ borderTop: "1px solid var(--ab-border)", background: "var(--ab-bg)" }}
          >
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about billing..."
                rows={1}
                disabled={busy || starting}
                aria-label="Type your billing question"
                className="flex-1 resize-none rounded-xl px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 disabled:opacity-60"
                style={{
                  background: "var(--ab-input-bg)",
                  border: "1px solid var(--ab-input-border)",
                  color: "var(--ab-input-text)",
                  "--tw-ring-color": "var(--ab-focus-ring)",
                } as React.CSSProperties}
              />
              <button
                type="button"
                onClick={() => void send()}
                disabled={!draft.trim() || busy || starting}
                aria-label="Send message"
                className="p-2.5 rounded-full text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: "var(--ab-accent)" }}
              >
                <Send size={16} />
              </button>
            </div>
            <p className="mt-2 text-[10px] text-center" style={{ color: "var(--ab-text-muted)", lineHeight: 1.4 }}>
              AI-assisted answers about Zoiko Billing. Verify financial data in billing records.
            </p>
          </footer>
        </div>
      )}

      {/* Launcher */}
      <button
        type="button"
        onClick={() => {
          setOpen((v) => {
            if (!v) {
              setError(null);
              setRecentOpen(false);
            }
            return !v;
          });
          requestAnimationFrame(() => inputRef.current?.focus());
        }}
        aria-label={open ? "Close the Zoiko Billing assistant" : "Open AI Billing Assistant"}
        title="AI Billing Assistant"
        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5841F] rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl"
      >
        {zoikoMark(56, "rounded-lg", true)}
      </button>
    </div>
  );
}