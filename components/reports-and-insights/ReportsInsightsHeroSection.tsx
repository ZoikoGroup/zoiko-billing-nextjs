'use client';

import { useState } from "react";
import Link from "next/link";

const finderStates = [
  { id: "no-inventory", label: "No inventory" },
  { id: "published", label: "Published items" },
  { id: "no-results", label: "No results" },
  { id: "error", label: "Error" },
  { id: "review-due", label: "Review due" },
];

export default function ReportsInsightsHeroSection() {
  const [activeState, setActiveState] = useState<string>("no-inventory");
  const [searchQuery, setSearchQuery] = useState<string>("");

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
                REPORTS &amp; INSIGHTS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.14] tracking-tight text-slate-900">
              Evidence for <br />
              <span className="text-[#1D70F5]">better billing decisions.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-500 max-w-[540px]">
              Explore current, methodology-backed Zoiko Billing reports and insights on invoicing,
              accounts receivable, payment and reconciliation operations, outstanding balances,
              reporting practices, integrations, implementation, and billing-management patterns.
            </p>

            {/* CTAs */}
            <div className="flex w-full flex-wrap items-center gap-3 pt-1 sm:w-auto">
              <Link
                href="#book-demo"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1D70F5] px-6 text-center text-xs sm:text-sm font-semibold !text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-600"
              >
                <span className="text-white font-semibold">Book Demo</span>
              </Link>

              <Link
                href="#create-account"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-center text-xs sm:text-sm font-semibold !text-slate-900 transition hover:bg-slate-50"
              >
                <span className="text-slate-900 font-semibold">Create Account</span>
              </Link>
            </div>

            {/* Notice Callout Box */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-xs text-slate-500 max-w-[540px] mt-2">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
              <p className="pl-2 font-normal leading-relaxed">
                Published analyses disclose evidence type, time period, sample or scope, methodology,
                limitations, review status, and correction history where applicable.
              </p>
            </div>

          </div>

          {/* Right Column: Hero Graphic Image rai1.png */}
          <div className="relative flex w-1/2 justify-end">
            <div className="relative w-full max-w-[580px]">
              <img
                src="/images/reports-and-insights/rai1.png"
                alt="Evidence for better billing decisions"
                className="w-full h-auto object-cover rounded-2xl block shadow-sm border border-slate-100"
              />
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787832419618.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden text-left w-full max-w-[640px] mx-auto">
          
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 font-normal mb-3 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-slate-900 transition">Home</Link>
            <span>/</span>
            <Link href="/resource-center" className="hover:text-slate-900 transition">Resources</Link>
            <span>/</span>
            <span className="font-bold text-slate-900">Reports &amp; Insights</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-4 bg-slate-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
              REPORTS &amp; INSIGHTS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            Evidence for{" "}
            <span className="text-[#1D70F5]">better billing decisions.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600 mb-5">
            Explore current, methodology-backed Zoiko Billing reports and insights on invoicing, accounts receivable, payment and reconciliation operations, outstanding balances, reporting practices, integrations, implementation, and billing-management patterns.
          </p>

          {/* CTAs Row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <Link
              href="#featured-insight"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#1D70F5] px-4 py-2 text-center text-xs font-semibold !text-white shadow-md shadow-blue-500/25"
            >
              <span className="text-white font-semibold">Explore current insights</span>
            </Link>

            <Link
              href="#billing-topics"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-center text-xs font-semibold !text-slate-900"
            >
              <span className="text-slate-900 font-semibold">Browse billing topics</span>
            </Link>
          </div>

          {/* Explore Link */}
          <div className="mb-4">
            <Link
              href="/reporting-and-analytics"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D70F5] hover:underline"
            >
              Looking for Zoiko Billing reporting capabilities? →
            </Link>
          </div>

          {/* Notice Callout Box */}
          <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-[11px] text-slate-500 mb-5">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
            <p className="pl-2 font-normal leading-relaxed">
              Published analyses disclose evidence type, time period, sample or scope, methodology, limitations, review status, and correction history where applicable.
            </p>
          </div>

          {/* Interactive Search and Finder Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm text-left mb-4">
            
            <h2 className="text-xs font-bold text-slate-900 mb-1.5">
              Search reports and insights
            </h2>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by billing question, topic, metric concept, or research theme..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <p className="text-[10px] text-slate-400 font-normal leading-relaxed mt-1.5 mb-4">
              Do not enter account numbers, customer personal data, payment data, credentials, or confidential information. Search covers the published public insight registry only.
            </p>

            {/* FINDER STATE Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 my-3 pb-3 border-b border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                FINDER STATE
              </span>
              {finderStates.map((st) => {
                const isActive = activeState === st.id;
                return (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setActiveState(st.id)}
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border transition ${
                      isActive
                        ? "bg-blue-50 text-blue-700 border-blue-200/80"
                        : "bg-white text-slate-600 border-slate-200/80 hover:bg-slate-50"
                    }`}
                  >
                    {st.label}
                  </button>
                );
              })}
            </div>

            {/* Empty State Content */}
            <div className="pt-1">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                No current reports or insights are published.
              </h3>
              <p className="text-[11px] text-slate-500 font-normal leading-relaxed mb-4">
                Approved evidence does not yet exist for publication. Rather than fill this space with a placeholder report, a generic upward trend, or a number without a denominator, the finder shows nothing and routes you to material that is governed and current.
              </p>

              {/* 4 Handoff Action Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Link
                  href="/resource-center"
                  className="inline-flex items-center justify-center rounded-full bg-[#1D70F5] px-3.5 py-1.5 text-center text-xs font-semibold !text-white shadow-sm"
                >
                  <span className="text-white font-semibold">Billing Guides</span>
                </Link>

                <Link
                  href="/resource-center"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-center text-xs font-semibold !text-slate-900"
                >
                  <span className="text-slate-900 font-semibold">Billing Glossary</span>
                </Link>

                <Link
                  href="/resource-center"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-center text-xs font-semibold !text-slate-900"
                >
                  <span className="text-slate-900 font-semibold">Resource Center</span>
                </Link>

                <Link
                  href="/reporting-and-analytics"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-center text-xs font-semibold !text-slate-900"
                >
                  <span className="text-slate-900 font-semibold">Reporting &amp; Analytics</span>
                </Link>
              </div>

              <p className="text-[10px] text-slate-400 font-normal leading-relaxed">
                When evidence is approved, items appear here with their evidence type, data period, population and methodology link visible on the card itself — before you decide whether to trust the finding.
              </p>
            </div>

            {/* Amber Default State Callout Box inside Card */}
            <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-xs text-amber-950 font-normal leading-relaxed mt-4">
              <span className="font-bold text-amber-900">This is the default state of this wireframe, and it is deliberate.</span> The evidence doctrine forbids manufacturing a benchmark to demonstrate a benchmark interface. An empty registry renders as an empty finder with useful routes out, not as a plausible-looking report nobody can source.
            </div>

          </div>

          {/* Red Core Boundary Warning Box */}
          <div className="rounded-2xl border border-red-200/80 bg-red-50/70 p-4 text-xs text-red-950 font-normal leading-relaxed mb-6">
            <span className="font-bold text-red-900">Core boundary.</span> Reports &amp; Insights is an editorial and evidence layer — not the in-product Reporting &amp; Analytics feature, and not a license to manufacture benchmarks. If approved evidence does not exist, the public page shows no fabricated report, number, trend, chart, logo or conclusion. No statistic, benchmark, correlation, customer outcome, market claim, savings claim or product-performance claim publishes without evidence, scope, date, methodology, denominator and approved wording.
          </div>

        </div>

      </div>
    </section>
  );
}
