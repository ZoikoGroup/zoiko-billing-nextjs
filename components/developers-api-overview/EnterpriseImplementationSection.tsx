import Link from "next/link";
import Image from "next/image";

export default function EnterpriseImplementationSection() {
  return (
    <section className="w-full bg-slate-50/50 py-12 lg:py-24 border-t border-slate-100" id="enterprise">
      
      {/* ========================================================================= */}
      {/* DESKTOP VERSION (UNTOUCHED - hidden lg:flex)                             */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex mx-auto max-w-[1320px] flex-col items-center gap-10 px-6 sm:px-8 lg:flex-row lg:items-center lg:gap-14 lg:px-12">
        
        {/* Left Column: Text Content & CTAs */}
        <div className="flex w-full flex-col items-start gap-5 lg:w-1/2 lg:max-w-[580px]">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="h-px w-5 bg-slate-400" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              ENTERPRISE IMPLEMENTATION
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Need to fit Zoiko Billing into a larger finance architecture?
          </h2>

          {/* Description */}
          <p className="text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
            For multi-system billing, complex identity models, regulated data flows, migration
            programs or enterprise rollout planning, a technical implementation conversation is
            available — without gating documentation behind it.
          </p>

          {/* Action CTAs */}
          <div className="flex w-full flex-wrap items-center gap-3 pt-2 sm:w-auto">
            <Link
              href="#build-integration"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-6 text-center text-xs sm:text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-700"
            >
              Build an Integration
            </Link>

            <Link
              href="#talk-to-sales"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-center text-xs sm:text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              Talk to Sales
            </Link>
          </div>

        </div>

        {/* Right Column: Image Container */}
        <div className="relative flex w-full justify-center lg:w-1/2 lg:justify-end">
          <div className="relative w-full max-w-[540px] overflow-hidden rounded-3xl shadow-xl flex items-center justify-center">
            <Image
              src="/images/developers/dao6.png"
              alt="Need to fit Zoiko Billing into a larger finance architecture?"
              width={540}
              height={420}
              unoptimized
              priority
              className="h-auto w-full rounded-3xl object-cover"
            />
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE VERSION (MATCHING REFERENCE media_1787568469903.png - block lg:hidden) */}
      {/* ========================================================================= */}
      <div className="block lg:hidden mx-auto max-w-[640px] px-4 sm:px-6">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-px w-5 bg-slate-400" />
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
            ENTERPRISE IMPLEMENTATION
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-xl sm:text-2xl font-extrabold leading-tight text-slate-900 tracking-tight mb-3">
          Need to fit Zoiko Billing into a larger finance architecture?
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600 mb-4">
          For multi-system billing, complex identity models, regulated data flows, migration
          programs or enterprise rollout planning, a technical implementation conversation is
          available — without gating documentation behind it.
        </p>

        {/* CTAs Row */}
        <div className="flex flex-wrap items-center gap-2.5 mb-3">
          <Link
            href="#build-integration"
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-blue-600 px-5 text-center text-xs font-semibold text-white shadow-sm"
          >
            Build an Integration
          </Link>
          <Link
            href="#talk-to-sales"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-center text-xs font-semibold text-slate-800"
          >
            Talk to Sales
          </Link>
        </div>

        {/* Quick Reference Links Row */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-semibold text-blue-600 mb-6">
          <Link href="#api-docs" className="hover:underline">API Documentation</Link>
          <Link href="#authentication" className="hover:underline">Authentication</Link>
          <Link href="#webhooks" className="hover:underline">Webhooks</Link>
          <Link href="#sandbox" className="hover:underline">Developer Sandbox</Link>
        </div>

        {/* Mint / Emerald Callout Card */}
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5 text-left">
          <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-2">
            What the conversation covers
          </h3>
          <p className="text-xs font-normal leading-relaxed text-slate-600 mb-3">
            Architecture fit, object and permission modeling, environment and rollout sequencing, and operational ownership.
          </p>
          <p className="text-xs font-normal leading-relaxed text-slate-600 mb-3">
            <span className="font-bold text-slate-800">What it does not do:</span> promise custom features, delivery timelines or capability that the canonical documentation does not already support.
          </p>
          <p className="text-xs font-normal leading-relaxed text-slate-600">
            No long lead form appears on this page. Where a form exists in the global system, it requests only the minimum needed to route a technical conversation.
          </p>
        </div>

      </div>

    </section>
  );
}
