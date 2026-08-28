'use client';

import { useState } from "react";
import Link from "next/link";

const feedStates = [
  { id: "current-feed", label: "Current feed" },
  { id: "no-results", label: "No results" },
  { id: "superseded", label: "Superseded" },
  { id: "withdrawn", label: "Withdrawn" },
  { id: "error", label: "Error" },
];

export default function ProductUpdatesHeroSection() {
  const [activeState, setActiveState] = useState<string>("current-feed");
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
                PRODUCT UPDATES
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.14] tracking-tight text-slate-900">
              See what changed in <br />
              Zoiko Billing — <span className="text-[#1D70F5]">and what it means for your work.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-500 max-w-[540px]">
              Browse approved shipped changes across billing operations, administration, reporting,
              integrations, accessibility, and platform experience, with clear dates, applicability,
              action requirements, and links to current documentation.
            </p>

            {/* CTAs */}
            <div className="flex w-full flex-wrap items-center gap-3 pt-1 sm:w-auto">
              <Link
                href="#availability-contract"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1D70F5] px-6 text-center text-xs sm:text-sm font-semibold !text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-600"
              >
                <span className="text-white font-semibold">Browse product updates</span>
              </Link>

              <Link
                href="/developers-api-documentation"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-center text-xs sm:text-sm font-semibold !text-slate-900 transition hover:bg-slate-50"
              >
                <span className="text-slate-900 font-semibold">View Documentation</span>
              </Link>
            </div>

            {/* Notice Callout Box */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-xs text-slate-500 max-w-[540px] mt-2">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
              <p className="pl-2 font-normal leading-relaxed">
                Product Updates describes shipped or effective changes only. Roadmap, incidents,
                security advisories, pricing, and legal notices remain in their authoritative sources.
              </p>
            </div>

          </div>

          {/* Right Column: Hero Graphic Image pu1.png */}
          <div className="relative flex w-1/2 justify-end">
            <div className="relative w-full max-w-[580px]">
              <img
                src="/images/product-updates/pu1.png"
                alt="See what changed in Zoiko Billing"
                className="w-full h-auto object-cover rounded-2xl block shadow-sm border border-slate-100"
              />
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787835210676.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden text-left w-full max-w-[640px] mx-auto">
          
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 font-normal mb-3 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-slate-900 transition">Home</Link>
            <span>/</span>
            <Link href="/resource-center" className="hover:text-slate-900 transition">Resources</Link>
            <span>/</span>
            <span className="font-bold text-slate-900">Product Updates</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-4 bg-slate-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
              PRODUCT UPDATES
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            See what changed in Zoiko Billing —{" "}
            <span className="text-[#1D70F5]">and what it means for your work.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600 mb-5">
            Browse approved shipped changes across billing operations, administration, reporting, integrations, accessibility, and platform experience, with clear dates, applicability, action requirements, and links to current documentation.
          </p>

          {/* CTAs Row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <Link
              href="#availability-contract"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#1D70F5] px-4 py-2 text-center text-xs font-semibold !text-white shadow-md shadow-blue-500/25"
            >
              <span className="text-white font-semibold">Browse product updates</span>
            </Link>

            <Link
              href="/developers-api-documentation"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-center text-xs font-semibold !text-slate-900"
            >
              <span className="text-slate-900 font-semibold">View Documentation</span>
            </Link>
          </div>

          {/* Status Link */}
          <div className="mb-4">
            <Link
              href="/trust"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D70F5] hover:underline"
            >
              Need service status? View System Status →
            </Link>
          </div>

          {/* Notice Callout Box */}
          <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-[11px] text-slate-500 mb-5">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
            <p className="pl-2 font-normal leading-relaxed">
              Product Updates describes shipped or effective changes only. Roadmap, incidents, security advisories, pricing, and legal notices remain in their authoritative sources.
            </p>
          </div>

          {/* Interactive Search and Feed State Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm text-left mb-4">
            
            <h2 className="text-xs font-bold text-slate-900 mb-1.5">
              Search product updates
            </h2>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by product area, user impact, admin impact, integration context, or accessibility..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <p className="text-[10px] text-slate-400 font-normal leading-relaxed mt-1.5 mb-4">
              Do not enter private account data. Search covers the published update registry only.
            </p>

            {/* FEED STATE Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 my-3 pb-3 border-b border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                FEED STATE
              </span>
              {feedStates.map((st) => {
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

            <p className="text-[10px] text-slate-400 font-normal leading-relaxed mb-4">
              Structure only — every title, date and scope below is a marked placeholder. <span className="font-bold text-slate-900">No product change is asserted.</span>
            </p>

            {/* 4 Sample Update Cards */}
            <div className="space-y-4">
              
              {/* Card 1: Red Deprecation & Action Required */}
              <div className="rounded-xl border border-slate-200/90 border-l-4 border-l-red-500 bg-white p-3.5 space-y-2 text-xs">
                <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
                  <span className="bg-amber-50 text-amber-800 font-semibold px-2 py-0.5 rounded border border-amber-200/80">o Deprecation</span>
                  <span className="bg-amber-50 text-amber-800 font-semibold px-2 py-0.5 rounded border border-amber-200/80">o Deprecated</span>
                  <span className="bg-red-50 text-red-700 font-bold px-2 py-0.5 rounded border border-red-200/80">● Action required</span>
                </div>
                <div className="font-mono text-purple-700 font-semibold text-xs">[specific_change_description]</div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  What changed and why it matters, in plain language, without unsupported savings or efficiency claims.
                </p>
                <div className="bg-red-50/80 border border-red-200/80 p-2.5 rounded-lg text-[10px] text-red-950 font-normal leading-relaxed">
                  <span className="font-bold text-red-900">Action required by <span className="font-mono text-purple-700 font-semibold">[approved_deadline]</span></span> : affects <span className="font-mono text-purple-700 font-semibold">[approved_scope]</span> . Steps, replacement path and support route are published in full — this notice would not ship without them.
                </div>
                <div className="text-[10px] text-slate-400 flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100">
                  <span>Effective <span className="font-mono text-purple-700 font-semibold">[date]</span> · Area <span className="font-mono text-purple-700 font-semibold">[approved_area]</span> · Impact: Admin · Integration</span>
                  <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Read update →</span>
                </div>
              </div>

              {/* Card 2: Rolling Out & No Action Required */}
              <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 space-y-2 text-xs">
                <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
                  <span className="bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded border border-blue-200/80">o New capability</span>
                  <span className="bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded border border-blue-200/80">o Rolling out</span>
                </div>
                <div className="font-mono text-purple-700 font-semibold text-xs">[specific_change_description]</div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Being enabled progressively. This is not yet universal, and the card says so rather than implying general availability.
                </p>
                <div className="bg-amber-50/70 border border-amber-200/80 p-2.5 rounded-lg text-[10px] text-amber-950 font-normal leading-relaxed">
                  <span className="font-bold text-slate-900">No action required.</span> Rolling out to <span className="font-mono text-purple-700 font-semibold">[scope]</span> from <span className="font-mono text-purple-700 font-semibold">[date]</span> . <span className="font-bold text-slate-900">No completion date is shown</span>, because none has been approved by the release authority.
                </div>
                <div className="text-[10px] text-slate-400 flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100">
                  <span>Effective <span className="font-mono text-purple-700 font-semibold">[date]</span> · Area <span className="font-mono text-purple-700 font-semibold">[approved_area]</span> · Impact: User</span>
                  <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Read update →</span>
                </div>
              </div>

              {/* Card 3: Accessibility & Shipped */}
              <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 space-y-2 text-xs">
                <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
                  <span className="bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded border border-blue-200/80">o Accessibility</span>
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200/80">o Shipped</span>
                </div>
                <div className="font-mono text-purple-700 font-semibold text-xs">[specific_change_description]</div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  An accessibility improvement, published as its own update type rather than folded into a general release note.
                </p>
                <div className="bg-slate-100/70 border border-slate-200 p-2.5 rounded-lg text-[10px] text-slate-800 font-normal leading-relaxed">
                  <span className="font-bold text-slate-900">No action required.</span> Effective for the stated scope — stated neutrally, with no manufactured urgency.
                </div>
                <div className="text-[10px] text-slate-400 flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100">
                  <span>Effective <span className="font-mono text-purple-700 font-semibold">[date]</span> · Area <span className="font-mono text-purple-700 font-semibold">[approved_area]</span> · Impact: Accessibility</span>
                  <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Read update →</span>
                </div>
              </div>

              {/* Card 4: Behavior Change & Scope-Limited */}
              <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 space-y-2 text-xs">
                <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
                  <span className="bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded border border-blue-200/80">o Behavior change</span>
                  <span className="bg-amber-50 text-amber-800 font-semibold px-2 py-0.5 rounded border border-amber-200/80">o Scope-limited</span>
                </div>
                <div className="font-mono text-purple-700 font-semibold text-xs">[specific_change_description]</div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Available only within an approved region, plan or environment, with eligibility remaining with Pricing and Documentation.
                </p>
                <div className="bg-amber-50/70 border border-amber-200/80 p-2.5 rounded-lg text-[10px] text-amber-950 font-normal leading-relaxed">
                  <span className="font-bold text-slate-900">Recommended:</span> review the changed behavior if you operate in <span className="font-mono text-purple-700 font-semibold">[scope]</span> . <span className="font-bold text-slate-900">No deadline is attached</span>, because a recommendation without an authoritative deadline does not get one.
                </div>
                <div className="text-[10px] text-slate-400 flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100">
                  <span>Effective <span className="font-mono text-purple-700 font-semibold">[date]</span> · Area <span className="font-mono text-purple-700 font-semibold">[approved_area]</span> · Impact: User · Reporting</span>
                  <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Read update →</span>
                </div>
              </div>

            </div>

            {/* Amber Four Treatments Callout Box inside Card */}
            <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-xs text-amber-950 font-normal leading-relaxed mt-4">
              <span className="font-bold text-amber-900">Four updates, four different action treatments.</span> Required carries a red rule and a deadline; recommended carries rationale without one; none is stated neutrally. The visual weight follows the obligation, so a reader scanning the feed can find what actually demands their attention.
            </div>

          </div>

          {/* Red Boundary Rule Warning Box */}
          <div className="rounded-2xl border border-red-200/80 bg-red-50/70 p-4 text-xs text-red-950 font-normal leading-relaxed mb-6">
            <span className="font-bold text-red-900">Boundary rule.</span> An update may summarize the user impact of a shipped change, but material technical, commercial, security, legal, availability and operational details remain authoritative in their source systems. Product Updates links to them; <span className="font-bold text-red-900">it does not become a second source of truth.</span> Roadmap and coming-soon promises, outages, vulnerability advisories, pricing truth, API protocol detail and legal policy changes all belong elsewhere.
          </div>

        </div>

      </div>
    </section>
  );
}
