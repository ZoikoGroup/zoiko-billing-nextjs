'use client';

import { useState } from "react";
import Link from "next/link";

const conformanceTerms = [
  { id: "conforms", label: "Conforms" },
  { id: "supports", label: "Supports" },
  { id: "partially-supports", label: "Partially supports" },
  { id: "does-not-support", label: "Does not support" },
  { id: "not-applicable", label: "Not applicable" },
  { id: "not-established", label: "Not established" },
];

export default function AccessibilityHeroSection() {
  const [activeTerm, setActiveTerm] = useState<string>("conforms");

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
                ACCESSIBILITY
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.14] tracking-tight text-slate-900">
              Our accessibility approach, <br />
              <span className="text-[#1D70F5]">stated precisely.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-500 max-w-[540px]">
              How we approach accessibility across Zoiko Billing, what evidence currently exists and for
              which scope, the limitations we know about, and how to report a barrier so it reaches the
              people who can fix it.
            </p>

            {/* CTAs */}
            <div className="flex w-full flex-wrap items-center gap-3 pt-1 sm:w-auto">
              <Link
                href="#approach"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1D70F5] px-6 text-center text-xs sm:text-sm font-semibold !text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-600"
              >
                <span className="text-white font-semibold">Explore accessibility approach</span>
              </Link>

              <Link
                href="#report-barrier"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-center text-xs sm:text-sm font-semibold !text-slate-900 transition hover:bg-slate-50"
              >
                <span className="text-slate-900 font-semibold">Report an accessibility barrier</span>
              </Link>
            </div>

            {/* Notice Callout Box */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-xs text-slate-500 max-w-[540px] mt-2">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
              <p className="pl-2 font-normal leading-relaxed">
                Where this page does not establish a status, that means no approved evidence exists for
                it — not that the surface fails, and not that it passes.
              </p>
            </div>

          </div>

          {/* Right Column: Hero Graphic Image a1.png */}
          <div className="relative flex w-1/2 justify-end">
            <div className="relative w-full max-w-[580px]">
              <img
                src="/images/accessibility/a1.png"
                alt="Our accessibility approach, stated precisely"
                className="w-full h-auto object-cover rounded-2xl block shadow-sm border border-slate-100"
              />
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1788178777581.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden text-left w-full max-w-[640px] mx-auto">
          
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 font-normal mb-3 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-slate-900 transition">Home</Link>
            <span>/</span>
            <Link href="/trust" className="hover:text-slate-900 transition">Trust &amp; Security</Link>
            <span>/</span>
            <span className="font-bold text-slate-900">Accessibility</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-4 bg-slate-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
              ACCESSIBILITY
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            Our accessibility approach,{" "}
            <span className="text-[#1D70F5]">stated precisely.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600 mb-5">
            How we approach accessibility across Zoiko Billing, what evidence currently exists and for which scope, the limitations we know about, and how to report a barrier so it reaches the people who can fix it.
          </p>

          {/* CTAs Row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <Link
              href="#approach"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#1D70F5] px-4 py-2 text-center text-xs font-semibold !text-white shadow-md shadow-blue-500/25"
            >
              <span className="text-white font-semibold">Explore accessibility approach</span>
            </Link>

            <Link
              href="#report-barrier"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-center text-xs font-semibold !text-slate-900"
            >
              <span className="text-slate-900 font-semibold">Report an accessibility barrier</span>
            </Link>
          </div>

          {/* View Evidence Link */}
          <div className="mb-4">
            <Link
              href="#evidence"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D70F5] hover:underline"
            >
              View accessibility evidence →
            </Link>
          </div>

          {/* Notice Callout Box */}
          <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-[11px] text-slate-500 mb-5">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
            <p className="pl-2 font-normal leading-relaxed">
              Where this page does not establish a status, that means no approved evidence exists for it — not that the surface fails, and not that it passes.
            </p>
          </div>

          {/* Red Scope Boundary Warning Box */}
          <div className="rounded-2xl border border-red-200/80 bg-red-50/70 p-4 text-xs text-red-950 font-normal leading-relaxed mb-5">
            <span className="font-bold text-red-900">Scope boundary.</span> This page does not claim that Zoiko Billing currently conforms to any named accessibility standard across the entire product, that a VPAT or ACR exists, or that every assistive technology, browser and device combination is supported. Those facts render only from approved evidence, scoped to what was actually evaluated.
          </div>

          {/* Interactive Conformance Terms Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm text-left mb-6">
            
            <h2 className="text-xs font-bold text-slate-900 mb-1">
              What our conformance words mean
            </h2>
            <p className="text-[10px] text-slate-400 font-normal leading-relaxed mb-3">
              Six terms. Each has a precise meaning and — more importantly — something it must not be read as implying.
            </p>

            {/* TERM Selection Pills */}
            <div className="flex flex-wrap items-center gap-1.5 mb-4 pb-3 border-b border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                TERM
              </span>
              {conformanceTerms.map((t) => {
                const isActive = activeTerm === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveTerm(t.id)}
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border transition ${
                      isActive
                        ? "bg-blue-50 text-blue-700 border-blue-200/80 font-bold"
                        : "bg-white text-slate-600 border-slate-200/80 hover:bg-slate-50"
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            {/* Active Term Meaning Block */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-900">Conforms</div>

              {/* Green Box: WHAT IT MEANS */}
              <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/70 p-3 text-[11px] text-emerald-950 font-normal leading-relaxed">
                <div className="text-[9px] font-bold text-emerald-800 uppercase tracking-wider mb-1">
                  WHAT IT MEANS
                </div>
                <p>
                  Current approved evidence establishes the stated standard for the stated scope. Both parts are required — a standard without a scope is not a conformance statement.
                </p>
              </div>

              {/* Red Box: WHAT IT MUST NOT IMPLY */}
              <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-3 text-[11px] text-red-950 font-normal leading-relaxed">
                <div className="text-[9px] font-bold text-red-800 uppercase tracking-wider mb-1">
                  WHAT IT MUST NOT IMPLY
                </div>
                <p>
                  <span className="font-bold text-slate-900">Legal compliance beyond that evidence.</span> Conformance to a technical standard for an evaluated scope is not a legal position on any jurisdiction&apos;s accessibility obligations.
                </p>
              </div>

            </div>

            {/* Amber Footnote Box inside Card */}
            <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-3 text-xs text-amber-950 font-normal leading-relaxed mt-4">
              <span className="font-bold text-amber-900">This is the strongest word available, and it is still bounded.</span> A conformance statement travels into procurement documents where the scope gets dropped and the standard name survives — so the scope is stated inline, not in a footnote.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
