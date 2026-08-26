'use client';

import Link from "next/link";

interface AccessLayerCard {
  num: number;
  title: string;
  question: string;
  detail: React.ReactNode;
}

const accessLayerCards: AccessLayerCard[] = [
  {
    num: 1,
    title: "Identity",
    question: "What actor is requesting access?",
    detail: "System, workload, user or approved actor, with owner and workspace context where supported.",
  },
  {
    num: 2,
    title: "Authentication",
    question: "How is that identity proven?",
    detail: (
      <>
        Method sourced from the capability registry —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-1.5 py-0.5 rounded border border-purple-200/60 font-semibold inline-block mt-1">
          {`{canonical_method}`}
        </span>
      </>
    ),
  },
  {
    num: 3,
    title: "Authorization",
    question: "What may that identity do?",
    detail: "Permission summary with object and action boundaries, resolved separately.",
  },
  {
    num: 4,
    title: "Resource context",
    question: "Which object and state is in scope?",
    detail: "Operation-level permission display plus workflow-state prerequisites.",
  },
  {
    num: 5,
    title: "Evidence",
    question: "What can be reviewed later?",
    detail: "Audit record of access-related change, where the product supports it.",
  },
];

export default function DevelopersAuthHeroSection() {
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
              DEVELOPERS · AUTHENTICATION
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.12] tracking-tight text-slate-900">
            Authenticate integrations{" "}
            <span className="text-[#1D70F5]">without losing control of access.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg max-w-[580px]">
            Set up verified access, keep credentials protected, separate authentication from
            permissions, and understand how access changes are reviewed across the Zoiko Billing
            developer experience.
          </p>

          {/* CTAs */}
          <div className="flex w-full flex-wrap items-center gap-3.5 pt-1 sm:w-auto">
            <Link
              href="#access-requirements"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1D70F5] px-7 text-center text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-600"
            >
              View access requirements
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
              <span className="font-bold text-slate-900">Never paste production secrets into examples, search, feedback or support forms.</span> Supported methods and credential behavior shown on this page must come from canonical product and security sources.
            </p>
          </div>

        </div>

        {/* Right Column: Hero Graphic Image da1.png */}
        <div className="relative flex w-full justify-center lg:w-1/2 lg:justify-end">
          <div className="relative w-full max-w-[580px]">
            <img
              src="/images/devolpers-authentication/da1.png"
              alt="Authenticate integrations without losing control of access"
              className="w-full h-auto object-cover rounded-2xl block shadow-sm border border-slate-100"
            />
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE VERSION (MATCHING REFERENCE media_1787663220153.png - block lg:hidden) */}
      {/* ========================================================================= */}
      <div className="block lg:hidden mx-auto max-w-[640px] px-4 sm:px-6">
        
        {/* Top Breadcrumb */}
        <div className="flex items-center gap-1.5 py-2.5 border-b border-slate-100 text-[11px] sm:text-xs text-slate-600 mb-4">
          <span>Home</span>
          <span className="text-slate-300">/</span>
          <span>Developers</span>
          <span className="text-slate-300">/</span>
          <span className="font-bold text-slate-900">Authentication</span>
        </div>

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-2.5">
          <span className="h-px w-5 bg-slate-400" />
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
            DEVELOPERS · AUTHENTICATION
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl font-extrabold leading-[1.16] text-slate-900 tracking-tight mb-3">
          Authenticate integrations{" "}
          <span className="text-[#1D70F5]">without <br />losing control of access.</span>
        </h1>

        {/* Description */}
        <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600 mb-4">
          Set up verified access, keep credentials protected, separate authentication from permissions,
          and understand how access changes are reviewed across the Zoiko Billing developer experience.
        </p>

        {/* CTAs Row */}
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <Link
            href="#access-requirements"
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#1D70F5] px-5 text-center text-xs font-semibold text-white shadow-md shadow-blue-500/25"
          >
            View access requirements
          </Link>
          <Link
            href="/developers-api-documentation"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-center text-xs font-semibold text-slate-900"
          >
            API Documentation
          </Link>
          <Link
            href="#sandbox"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D70F5] hover:underline pl-1"
          >
            Developer Sandbox <span>→</span>
          </Link>
        </div>

        {/* Security Notice Box */}
        <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-slate-50/70 p-3.5 mb-6 text-left">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
          <p className="pl-2 text-xs font-normal leading-relaxed text-slate-600">
            <span className="font-bold text-slate-900">Never paste production secrets into examples, search, feedback or support forms.</span> Supported methods and credential behavior shown on this page must come from canonical product and security sources.
          </p>
        </div>

        {/* 5 Access Model Cards (2-Column Mobile Grid) */}
        <div className="grid grid-cols-2 gap-3.5 mb-6 text-left">
          {accessLayerCards.map((card) => (
            <div
              key={card.num}
              className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1D70F5] font-bold text-xs flex items-center justify-center mb-2">
                  {card.num}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                  {card.title}
                </h3>
                <div className="text-[11px] text-slate-400 italic font-normal mb-1.5 leading-snug">
                  {card.question}
                </div>
                <div className="text-[11px] text-slate-600 font-normal leading-relaxed">
                  {card.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Red Disclaimer Callout Box */}
        <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-4 text-xs font-normal leading-relaxed text-red-950 text-left mb-8">
          <span className="font-bold text-red-900">What this page does not claim.</span> No authentication mechanism is named as supported. No credential format, prefix, length, expiry, rotation interval, one-time visibility, recovery behavior or revocation latency is asserted. No permission or scope identifier, role mapping, inheritance or policy precedence is invented. No sandbox or production base URL, environment count, cross-environment credential behavior or data-isolation guarantee is stated. Where a fact is unverified it reads{" "}
          <span className="bg-purple-100/70 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200/60 font-mono text-[10px] font-semibold">{`Requires verification`}</span>{" "}
          ·{" "}
          <span className="bg-purple-100/70 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200/60 font-mono text-[10px] font-semibold">{`Not published`}</span>{" "}
          or{" "}
          <span className="bg-purple-100/70 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200/60 font-mono text-[10px] font-semibold">{`Conditional`}</span>{" "}
          rather than being guessed.
        </div>

      </div>

    </section>
  );
}
