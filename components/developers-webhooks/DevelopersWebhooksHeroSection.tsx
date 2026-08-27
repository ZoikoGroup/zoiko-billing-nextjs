'use client';

import Link from "next/link";

interface WebhookStepCard {
  num: number;
  title: string;
  detail: string;
}

const webhookStepCards: WebhookStepCard[] = [
  {
    num: 1,
    title: "Event occurs",
    detail: "An approved billing state change is recorded.",
  },
  {
    num: 2,
    title: "Subscription matches",
    detail: "Configured event selection determines endpoint eligibility.",
  },
  {
    num: 3,
    title: "Delivery is created",
    detail: "An outbound delivery is prepared per the canonical contract.",
  },
  {
    num: 4,
    title: "Receiver responds",
    detail: "Your system receives, verifies, processes and responds.",
  },
  {
    num: 5,
    title: "Evidence recorded",
    detail: "Attempt evidence is available per permission and retention.",
  },
];

export default function DevelopersWebhooksHeroSection() {
  return (
    <section className="w-full bg-white py-6 lg:py-24" id="hero">
      
      {/* ========================================================================= */}
      {/* DESKTOP VERSION (UNTOUCHED & PRESERVED - hidden lg:flex)                 */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex mx-auto max-w-[1320px] flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-14 px-6 sm:px-8 lg:px-12">
        
        {/* Left Column: Text & Actions */}
        <div className="flex w-full flex-col items-start gap-6 lg:w-1/2 lg:max-w-[640px]">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="h-px w-5 bg-slate-400" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              DEVELOPERS · WEBHOOKS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.12] tracking-tight text-slate-900">
            React to billing events{" "}
            <span className="text-[#1D70F5]">as they happen.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg max-w-[580px]">
            Connect approved Zoiko Billing events to your systems with a delivery model that
            makes verification, delivery status, failures and operational evidence understandable.
          </p>

          {/* CTAs */}
          <div className="flex w-full flex-wrap items-center gap-3.5 pt-1 sm:w-auto">
            <Link
              href="#delivery-model"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1D70F5] px-7 text-center text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-600"
            >
              View delivery model
            </Link>

            <Link
              href="/developers-api-documentation"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200/90 bg-white px-7 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              API Documentation
            </Link>
          </div>

          {/* Notice Callout Box */}
          <div className="relative mt-2 w-full overflow-hidden rounded-xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-5 max-w-[540px]">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
            <p className="pl-2 text-xs font-normal leading-relaxed text-slate-600 sm:text-sm">
              Built for source-governed event definitions, security-reviewed verification and failure-aware integration operations.
            </p>
          </div>

        </div>

        {/* Right Column: Hero Graphic Image dw1.png */}
        <div className="relative flex w-full justify-center lg:w-1/2 lg:justify-end">
          <div className="relative w-full max-w-[580px]">
            <img
              src="/images/devolpers-webhooks/dw1.png"
              alt="React to billing events as they happen"
              className="w-full h-auto object-cover rounded-2xl block shadow-sm border border-slate-100"
            />
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE VERSION (MATCHING REFERENCE media_1787665418924.png - block lg:hidden) */}
      {/* ========================================================================= */}
      <div className="block lg:hidden mx-auto max-w-[640px] px-4 sm:px-6">
        
        {/* Top Breadcrumb */}
        <div className="flex items-center gap-1.5 py-2.5 border-b border-slate-100 text-[11px] sm:text-xs text-slate-600 mb-4">
          <span>Home</span>
          <span className="text-slate-300">/</span>
          <span>Developers</span>
          <span className="text-slate-300">/</span>
          <span className="font-bold text-slate-900">Webhooks</span>
        </div>

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-2.5">
          <span className="h-px w-5 bg-slate-400" />
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
            DEVELOPERS · WEBHOOKS
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl font-extrabold leading-[1.16] text-slate-900 tracking-tight mb-3">
          React to billing events{" "}
          <span className="text-[#1D70F5]">as they happen.</span>
        </h1>

        {/* Description */}
        <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600 mb-4">
          Connect approved Zoiko Billing events to your systems with a delivery model that makes
          verification, delivery status, failures and operational evidence understandable.
        </p>

        {/* CTAs Row */}
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <Link
            href="#delivery-model"
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#1D70F5] px-5 text-center text-xs font-semibold text-white shadow-md shadow-blue-500/25"
          >
            View delivery model
          </Link>
          <Link
            href="/developers-api-documentation"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-center text-xs font-semibold text-slate-900"
          >
            API Documentation
          </Link>
          <Link
            href="/developers-authentication"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D70F5] hover:underline pl-1"
          >
            Authentication <span>→</span>
          </Link>
        </div>

        {/* Notice Callout Box */}
        <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-slate-50/70 p-3.5 mb-6 text-left">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
          <p className="pl-2 text-xs font-normal leading-relaxed text-slate-600">
            Built for source-governed event definitions, security-reviewed verification and failure-aware integration operations.
          </p>
        </div>

        {/* 5 Webhook Mental Model Cards (2-Column Mobile Grid) */}
        <div className="grid grid-cols-2 gap-3.5 mb-6 text-left">
          {webhookStepCards.map((card) => (
            <div
              key={card.num}
              className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1D70F5] font-bold text-xs flex items-center justify-center mb-2">
                  {card.num}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                  {card.title}
                </h3>
                <div className="text-[11px] text-slate-600 font-normal leading-relaxed">
                  {card.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Red Disclaimer Callout Box */}
        <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-4 text-xs font-normal leading-relaxed text-red-950 text-left mb-8">
          <span className="font-bold text-red-900">What this page does not claim.</span> Delivery is not described as exactly-once, at-least-once, best-effort, ordered or eventually delivered unless that guarantee is explicitly approved. No latency, uptime, success-rate percentage, throughput figure or &quot;real-time&quot; promise appears without an approved measurement and definition. No signing algorithm, header name, secret format, replay window, retry schedule or IP control is invented — and IP allowlisting is never presented as sufficient proof of authenticity.
        </div>

      </div>

    </section>
  );
}
