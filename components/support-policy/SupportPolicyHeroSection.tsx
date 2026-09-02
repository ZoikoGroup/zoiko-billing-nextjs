'use client';

import Link from "next/link";

export default function SupportPolicyHeroSection() {
  return (
    <section className="w-full bg-white py-10 lg:py-20" id="hero">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12">
        
        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:flex)                              */}
        {/* ========================================================================= */}
        <div className="hidden lg:flex flex-row items-center gap-14 justify-between">
          
          {/* Left Column: Text & Actions */}
          <div className="flex w-1/2 flex-col items-start gap-5 max-w-[600px] text-left">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="h-px w-5 bg-slate-400" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                SUPPORT POLICY
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.14] tracking-tight text-slate-900">
              What support covers, <br />
              <span className="text-[#1D70F5]">and what it commits to.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-500 max-w-[540px]">
              Coverage, eligibility, approved channels, availability, priority definitions,
              commitments, exclusions and responsibilities — stated once, from an authoritative
              source, with a version and an effective date.
            </p>

            {/* CTAs */}
            <div className="flex w-full flex-wrap items-center gap-3 pt-1 sm:w-auto">
              <Link
                href="#policy-summary"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1D70F5] px-6 text-center text-xs sm:text-sm font-semibold !text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-600"
              >
                <span className="text-white font-semibold">Review support coverage</span>
              </Link>

              <Link
                href="#contact-support"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-center text-xs sm:text-sm font-semibold !text-slate-900 transition hover:bg-slate-50"
              >
                <span className="text-slate-900 font-semibold">Contact Support</span>
              </Link>
            </div>

            {/* Notice Callout Box */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-xs text-slate-500 max-w-[540px] mt-2">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
              <p className="pl-2 font-normal leading-relaxed">
                Where your signed contract or order form states something different, that document
                governs. This policy states the precedence exactly as Legal approves it.
              </p>
            </div>

          </div>

          {/* Right Column: Hero Graphic Image sp1.png */}
          <div className="relative flex w-1/2 justify-end">
            <div className="relative w-full max-w-[580px]">
              <img
                src="/images/support-policy/sp1.png"
                alt="What support covers, and what it commits to"
                className="w-full h-auto object-cover rounded-2xl block shadow-sm border border-slate-100"
              />
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1788177791115.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden text-left w-full max-w-[640px] mx-auto">
          
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 font-normal mb-3 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-slate-900 transition">Home</Link>
            <span>/</span>
            <Link href="/resource-center" className="hover:text-slate-900 transition">Customer Support</Link>
            <span>/</span>
            <span className="font-bold text-slate-900">Support Policy</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-4 bg-slate-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
              SUPPORT POLICY
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            What support covers,{" "}
            <span className="text-[#1D70F5]">and what it commits to.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600 mb-5">
            Coverage, eligibility, approved channels, availability, priority definitions, commitments, exclusions and responsibilities — stated once, from an authoritative source, with a version and an effective date.
          </p>

          {/* CTAs Row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <Link
              href="#policy-summary"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#1D70F5] px-4 py-2 text-center text-xs font-semibold !text-white shadow-md shadow-blue-500/25"
            >
              <span className="text-white font-semibold">Review support coverage</span>
            </Link>

            <Link
              href="#contact-support"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-center text-xs font-semibold !text-slate-900"
            >
              <span className="text-slate-900 font-semibold">Contact Support</span>
            </Link>
          </div>

          {/* Current Version Link */}
          <div className="mb-4">
            <Link
              href="#policy-summary"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D70F5] hover:underline"
            >
              Current version and effective date →
            </Link>
          </div>

          {/* Notice Callout Box */}
          <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-[11px] text-slate-500 mb-5">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
            <p className="pl-2 font-normal leading-relaxed">
              Where your signed contract or order form states something different, that document governs. This policy states the precedence exactly as Legal approves it.
            </p>
          </div>

          {/* Mobile Policy Version & Metadata Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm text-left mb-4">
            
            {/* Metadata Grid (4 items) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
              <div>
                <div className="text-slate-400 font-medium uppercase">POLICY VERSION</div>
                <div className="font-mono text-purple-700 font-semibold">[registry_version]</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium uppercase">EFFECTIVE DATE</div>
                <div className="font-mono text-purple-700 font-semibold">[approved_date]</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium uppercase">STATUS</div>
                <span className="bg-emerald-50 text-emerald-700 text-[10px] px-2 py-0.5 rounded font-bold border border-emerald-200/80 inline-block mt-0.5">
                  ● Published — current
                </span>
              </div>
              <div>
                <div className="text-slate-400 font-medium uppercase">SUPERSEDES</div>
                <div className="font-mono text-purple-700 font-semibold">[prior_version]</div>
              </div>
            </div>

            {/* PRECEDENCE */}
            <div className="mt-3 pt-3 border-t border-slate-100 text-[10px]">
              <div className="text-slate-400 font-medium uppercase mb-1">PRECEDENCE</div>
              <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
                [legal_approved_statement]
              </span>
            </div>

            {/* Footnote inside Card */}
            <p className="text-[10px] text-slate-400 font-normal leading-relaxed mt-3 pt-3 border-t border-slate-100">
              Why the version bar sits above the policy text. A support policy is quoted in procurement reviews and disputes, often months after it was read. Someone needs to know which version they are looking at before they read a single commitment — not after.
            </p>

          </div>

          {/* Red Policy Truth Boundary Warning Box */}
          <div className="rounded-2xl border border-red-200/80 bg-red-50/70 p-4 text-xs text-red-950 font-normal leading-relaxed mb-6">
            <span className="font-bold text-red-900">Policy truth boundary.</span> This page does not summarize commitments from memory. Every mutable value resolves from the Support Policy Registry or an approved contractual source. <span className="font-bold text-red-900">Where a value is not approved, the page omits it or uses a legally approved generic statement</span> — it never fills the gap with a plausible figure.
          </div>

        </div>

      </div>
    </section>
  );
}
