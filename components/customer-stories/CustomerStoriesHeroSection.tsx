'use client';

import { useState } from "react";
import Link from "next/link";

const libraryStates = [
  { id: "no-approved", label: "No approved stories" },
  { id: "approved-inventory", label: "Approved inventory" },
  { id: "no-results", label: "No filter results" },
  { id: "withdrawn", label: "Consent withdrawn" },
  { id: "review-due", label: "Review due" },
];

interface CoreValueCard {
  title: string;
  desc: string;
}

const coreValueCards: CoreValueCard[] = [
  {
    title: "Permission first",
    desc: "Customer identity, quote, logo, screenshot, video, metric and spokesman content appears only within active consent scope.",
  },
  {
    title: "Evidence labeled",
    desc: "Customer-reported, product-observed, jointly verified, independently verified, modeled and qualitative evidence remain distinguishable.",
  },
  {
    title: "Context preserved",
    desc: "Outcomes show the measurement period, relevant implementation context, and limitations.",
  },
  {
    title: "Current or clearly historical",
    desc: "Stories expose publication and verification status. Replaced, archived or withdrawn content is not presented as current proof.",
  },
];

export default function CustomerStoriesHeroSection() {
  const [activeState, setActiveState] = useState<string>("no-approved");
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
                CUSTOMER STORIES
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.14] tracking-tight text-slate-900">
              See how better billing <br />
              operations <span className="text-[#1D70F5]">take shape in practice.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-500 max-w-[540px]">
              Explore approved Zoiko Billing customer stories with documented context,
              implementation choices, evidence, outcomes, and lessons — not unsupported claims.
            </p>

            {/* CTAs */}
            <div className="flex w-full flex-wrap items-center gap-3 pt-1 sm:w-auto">
              <Link
                href="#stories-catalog"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1D70F5] px-6 text-center text-xs sm:text-sm font-semibold !text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-600"
              >
                <span className="text-white font-semibold">Explore customer stories</span>
              </Link>

              <Link
                href="#book-demo"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-center text-xs sm:text-sm font-semibold !text-slate-900 transition hover:bg-slate-50"
              >
                <span className="text-slate-900 font-semibold">Book a demo</span>
              </Link>
            </div>

            {/* Notice Callout Box */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-xs text-slate-500 max-w-[540px] mt-2">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
              <p className="pl-2 font-normal leading-relaxed">
                Every published story is consented, source-reviewed, date-stamped, and limited to what
                the evidence supports.
              </p>
            </div>

          </div>

          {/* Right Column: Hero Graphic Image */}
          <div className="relative flex w-1/2 justify-end">
            <div className="relative w-full max-w-[580px]">
              <img
                src="/images/customer-stories/cs1.png"
                alt="See how better billing operations take shape in practice"
                className="w-full h-auto object-cover rounded-2xl block shadow-sm border border-slate-100"
              />
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787833554324.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden text-left w-full max-w-[640px] mx-auto">
          
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 font-normal mb-3 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-slate-900 transition">Home</Link>
            <span>/</span>
            <Link href="/resource-center" className="hover:text-slate-900 transition">Resources</Link>
            <span>/</span>
            <span className="font-bold text-slate-900">Customer Stories</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-4 bg-slate-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
              CUSTOMER STORIES
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            See how better billing operations{" "}
            <span className="text-[#1D70F5]">take shape in practice.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600 mb-5">
            Explore approved Zoiko Billing customer stories with documented context, implementation choices, evidence, outcomes, and lessons — not unsupported claims.
          </p>

          {/* CTAs Row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <Link
              href="#featured-story"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#1D70F5] px-4 py-2 text-center text-xs font-semibold !text-white shadow-md shadow-blue-500/25"
            >
              <span className="text-white font-semibold">Explore customer stories</span>
            </Link>

            <Link
              href="#book-demo"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-center text-xs font-semibold !text-slate-900"
            >
              <span className="text-slate-900 font-semibold">Book a demo</span>
            </Link>
          </div>

          {/* Review Link */}
          <div className="mb-4">
            <Link
              href="#evidence-methodology"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D70F5] hover:underline"
            >
              How we review customer evidence →
            </Link>
          </div>

          {/* Notice Callout Box */}
          <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-[11px] text-slate-500 mb-5">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
            <p className="pl-2 font-normal leading-relaxed">
              Every published story is consented, source-reviewed, date-stamped, and limited to what the evidence supports.
            </p>
          </div>

          {/* 4 Core Value Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {coreValueCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/90 bg-white p-4 text-left shadow-sm"
              >
                <h3 className="text-xs font-bold text-slate-900 mb-1">
                  {card.title}
                </h3>
                <p className="text-[11px] font-normal leading-relaxed text-slate-600">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Search and Library Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm text-left mb-4">
            
            <h2 className="text-xs font-bold text-slate-900 mb-1.5">
              Search customer stories
            </h2>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search approved story titles, billing contexts, outcome areas, and product areas..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <p className="text-[10px] text-slate-400 font-normal leading-relaxed mt-1.5 mb-4">
              Do not enter account, customer or payment data. Search covers approved published stories only.
            </p>

            {/* LIBRARY STATE Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 my-3 pb-3 border-b border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                LIBRARY STATE
              </span>
              {libraryStates.map((st) => {
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
                No approved customer stories are published yet.
              </h3>
              <p className="text-[11px] text-slate-500 font-normal leading-relaxed mb-4">
                Verified customer evidence appears here only after permission, attribution and claims verification are complete. Rather than fill the library with an unnamed logo, a generic testimonial or an outcome nobody can source, the finder shows nothing and routes you to material that is governed and current.
              </p>

              {/* 5 Handoff Action Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Link
                  href="#book-demo"
                  className="inline-flex items-center justify-center rounded-full bg-[#1D70F5] px-3.5 py-1.5 text-center text-xs font-semibold !text-white shadow-sm"
                >
                  <span className="text-white font-semibold">Book a demo</span>
                </Link>

                <Link
                  href="/reports-and-insights"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-center text-xs font-semibold !text-slate-900"
                >
                  <span className="text-slate-900 font-semibold">Reports &amp; Insights</span>
                </Link>

                <Link
                  href="/resource-center"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-center text-xs font-semibold !text-slate-900"
                >
                  <span className="text-slate-900 font-semibold">Billing Guides</span>
                </Link>

                <Link
                  href="/product"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-center text-xs font-semibold !text-slate-900"
                >
                  <span className="text-slate-900 font-semibold">Explore Product</span>
                </Link>

                <Link
                  href="/trust"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-center text-xs font-semibold !text-slate-900"
                >
                  <span className="text-slate-900 font-semibold">Trust Center</span>
                </Link>
              </div>

              <p className="text-[10px] text-slate-400 font-normal leading-relaxed">
                When a story qualifies, its card shows the customer identity or approved anonymous descriptor, evidence type, measurement period, last verified date and any material limitation — all before you open it.
              </p>
            </div>

            {/* Amber Default State Callout Box inside Card */}
            <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-xs text-amber-950 font-normal leading-relaxed mt-4">
              <span className="font-bold text-amber-900">This is the default state of this wireframe, and it is deliberate.</span> A customer-proof page is exactly where fabricated evidence does the most damage, so an empty library with honest routes out is the correct rendering of an unpopulated registry.
            </div>

          </div>

          {/* Red Claims Doctrine Warning Box */}
          <div className="rounded-2xl border border-red-200/80 bg-red-50/70 p-4 text-xs text-red-950 font-normal leading-relaxed mb-6">
            <span className="font-bold text-red-900">Claims doctrine.</span> No customer proof publishes without permission, provenance, metric definition where quantitative, scope, timeframe, limitations, approval, and review or expiry controls. This page fabricates no story inventory, customer name, logo, quote, metric, outcome, integration, industry, location, screenshot or commercial commitment — and a testimonial never substitutes for security, compliance or availability evidence.
          </div>

        </div>

      </div>
    </section>
  );
}
