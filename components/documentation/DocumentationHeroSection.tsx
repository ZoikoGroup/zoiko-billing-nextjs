'use client';

import { useState } from "react";
import Link from "next/link";

const trySuggestions = [
  { id: "allocate-payment", label: "allocate a payment" },
  { id: "invoice-states", label: "invoice states" },
  { id: "payment-reconcile", label: "payment won't reconcile" },
  { id: "webhook-schema", label: "webhook payload schema" },
  { id: "export-retention", label: "export retention limit" },
];

export default function DocumentationHeroSection() {
  const [activeSuggestion, setActiveSuggestion] = useState<string>("allocate-payment");
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
                DOCUMENTATION
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.14] tracking-tight text-slate-900">
              How Zoiko Billing works, <br />
              <span className="text-[#1D70F5]">as it works today.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-500 max-w-[540px]">
              Current product-usage documentation for billing operations — concepts, procedures, states,
              fields, roles and permissions, each with what it applies to and when it was last reviewed.
            </p>

            {/* CTAs */}
            <div className="flex w-full flex-wrap items-center gap-3 pt-1 sm:w-auto">
              <Link
                href="#doc-destinations"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1D70F5] px-6 text-center text-xs sm:text-sm font-semibold !text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-600"
              >
                <span className="text-white font-semibold">Search documentation</span>
              </Link>

              <Link
                href="#browse-product-areas"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-center text-xs sm:text-sm font-semibold !text-slate-900 transition hover:bg-slate-50"
              >
                <span className="text-slate-900 font-semibold">Browse by product area</span>
              </Link>
            </div>

            {/* Notice Callout Box */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-xs text-slate-500 max-w-[540px] mt-2">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
              <p className="pl-2 font-normal leading-relaxed">
                Documentation is the current product-usage authority. API and protocol details remain in
                Developers, pricing in Pricing, security in Trust, and current service state in System
                Status.
              </p>
            </div>

          </div>

          {/* Right Column: Hero Graphic Image d1.png */}
          <div className="relative flex w-1/2 justify-end">
            <div className="relative w-full max-w-[580px]">
              <img
                src="/images/documentation/d1.png"
                alt="How Zoiko Billing works, as it works today"
                className="w-full h-auto object-cover rounded-2xl block shadow-sm border border-slate-100"
              />
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787836245887.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden text-left w-full max-w-[640px] mx-auto">
          
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 font-normal mb-3 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-slate-900 transition">Home</Link>
            <span>/</span>
            <Link href="/resource-center" className="hover:text-slate-900 transition">Customer Support</Link>
            <span>/</span>
            <span className="font-bold text-slate-900">Documentation</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-4 bg-slate-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
              DOCUMENTATION
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            How Zoiko Billing works,{" "}
            <span className="text-[#1D70F5]">as it works today.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600 mb-5">
            Current product-usage documentation for billing operations — concepts, procedures, states, fields, roles and permissions, each with what it applies to and when it was last reviewed.
          </p>

          {/* CTAs Row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <Link
              href="#doc-destinations"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#1D70F5] px-4 py-2 text-center text-xs font-semibold !text-white shadow-md shadow-blue-500/25"
            >
              <span className="text-white font-semibold">Search documentation</span>
            </Link>

            <Link
              href="#browse-product-areas"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-center text-xs font-semibold !text-slate-900"
            >
              <span className="text-slate-900 font-semibold">Browse by product area</span>
            </Link>
          </div>

          {/* Help Center Link */}
          <div className="mb-4">
            <Link
              href="#faq"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D70F5] hover:underline"
            >
              Need to fix a problem? Visit Help Center →
            </Link>
          </div>

          {/* Notice Callout Box */}
          <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-[11px] text-slate-500 mb-5">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
            <p className="pl-2 font-normal leading-relaxed">
              Documentation is the current product-usage authority. API and protocol details remain in Developers, pricing in Pricing, security in Trust, and current service state in System Status.
            </p>
          </div>

          {/* Interactive Search and Article Type Registry Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm text-left mb-4">
            
            <h2 className="text-xs font-bold text-slate-900 mb-1.5">
              Search Zoiko Billing Documentation
            </h2>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by task, product area, state, field, role, or concept..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <p className="text-[10px] text-slate-400 font-normal leading-relaxed mt-1.5 mb-4">
              Index covers published product documentation only — no Help articles, API reference, drafts or private data appear in local results.
            </p>

            {/* TRY Suggestion Pills */}
            <div className="flex flex-wrap items-center gap-1.5 my-3 pb-3 border-b border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                TRY
              </span>
              {trySuggestions.map((sug) => {
                const isActive = activeSuggestion === sug.id;
                return (
                  <button
                    key={sug.id}
                    type="button"
                    onClick={() => setActiveSuggestion(sug.id)}
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border transition ${
                      isActive
                        ? "bg-blue-50 text-blue-700 border-blue-200/80"
                        : "bg-white text-slate-600 border-slate-200/80 hover:bg-slate-50"
                    }`}
                  >
                    {sug.label}
                  </button>
                );
              })}
            </div>

            {/* 3 Sample Article Cards */}
            <div className="space-y-4">
              
              {/* Card 1: Procedure */}
              <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 space-y-2 text-xs">
                <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
                  <span className="bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded border border-blue-200/80">o Procedure</span>
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200/80">● Current</span>
                </div>
                <div className="font-mono text-purple-700 font-semibold text-xs">[allocate_a_payment_title]</div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  What the reader will complete, with the permission and state gate stated before the steps begin.
                </p>
                <div className="text-[10px] text-slate-400 flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100">
                  <span>Payments &amp; reconciliation · Applies to <span className="font-mono text-purple-700 font-semibold">[role]</span> · Last reviewed <span className="font-mono text-purple-700 font-semibold">[date]</span></span>
                  <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Read documentation →</span>
                </div>
              </div>

              {/* Card 2: Reference */}
              <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 space-y-2 text-xs">
                <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
                  <span className="bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded border border-blue-200/80">o Reference</span>
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200/80">● Current</span>
                </div>
                <div className="font-mono text-purple-700 font-semibold text-xs">[allocation_field_reference]</div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Field names, meanings, availability and editability — canonical source only.
                </p>
                <div className="text-[10px] text-slate-400 flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100">
                  <span>Payments &amp; reconciliation · Applies to <span className="font-mono text-purple-700 font-semibold">[role_and_state]</span> · Last reviewed <span className="font-mono text-purple-700 font-semibold">[date]</span></span>
                  <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Read documentation →</span>
                </div>
              </div>

              {/* Card 3: Concept */}
              <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 space-y-2 text-xs">
                <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
                  <span className="bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded border border-blue-200/80">o Concept</span>
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200/80">● Current</span>
                </div>
                <div className="font-mono text-purple-700 font-semibold text-xs">[payment_vs_allocation_concept]</div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  How the product separates receiving money from deciding what it settles.
                </p>
                <div className="text-[10px] text-slate-400 flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100">
                  <span>Core concepts · Applies to All roles · Last reviewed <span className="font-mono text-purple-700 font-semibold">[date]</span></span>
                  <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Read documentation →</span>
                </div>
              </div>

            </div>

            {/* Amber Three Article Types Callout Box inside Card */}
            <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-xs text-amber-950 font-normal leading-relaxed mt-4">
              <span className="font-bold text-amber-900">A clean product-usage query returns three article types, not three copies of one.</span> Procedure to do it, reference to look values up, concept to understand why the model works that way — a reader who only got the procedure would follow steps they could not reason about.
            </div>

          </div>

          {/* Red No-invention Rule Warning Box */}
          <div className="rounded-2xl border border-red-200/80 bg-red-50/70 p-4 text-xs text-red-950 font-normal leading-relaxed mb-6">
            <span className="font-bold text-red-900">No-invention rule.</span> If the product source does not currently support a field, state, permission, limit, plan, region, API property, workflow or screenshot, it stays out of Documentation. Numeric caps, rates, retention periods, sizes, timings and quotas are <span className="font-bold text-red-900">never published unless source-authoritative.</span> Documentation also never asserts current operational state — that belongs to System Status.
          </div>

        </div>

      </div>
    </section>
  );
}
