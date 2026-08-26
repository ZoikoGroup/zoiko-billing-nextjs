'use client';

import { useState } from "react";
import Link from "next/link";

type ResourceTab = "Customers" | "Invoices & credit notes" | "Payments & reconciliation" | "Outstanding balances";

export default function DevelopersApiDocHeroSection() {
  const [activeResource, setActiveResource] = useState<ResourceTab>("Customers");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="w-full bg-white py-6 lg:py-24" id="hero">
      
      {/* ========================================================================= */}
      {/* DESKTOP VERSION (hidden lg:flex)                                          */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex mx-auto max-w-[1320px] flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-14 px-6 sm:px-8 lg:px-12">
        
        {/* Left Column: Text & Actions */}
        <div className="flex w-full flex-col items-start gap-6 lg:w-1/2 lg:max-w-[640px]">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="h-px w-5 bg-slate-400" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              DEVELOPERS · API DOCUMENTATION
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.12] tracking-tight text-slate-900">
            Build against a billing model{" "}
            <span className="text-[#1D70F5]">you can inspect.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg max-w-[580px]">
            Find source-governed API reference, resource contracts, field semantics, errors,
            lifecycle rules and implementation guidance for Zoiko Billing.
          </p>

          {/* CTAs - Vibrant Electric Blue #1D70F5 matching media_1787661292646.png */}
          <div className="flex w-full flex-wrap items-center gap-3.5 pt-1 sm:w-auto">
            <Link
              href="#search-documentation"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1D70F5] px-7 text-center text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-600"
            >
              Search documentation
            </Link>

            <Link
              href="#browse-resources"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200/90 bg-white px-7 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Browse API resources
            </Link>
          </div>

          {/* Notice Callout Box */}
          <div className="relative mt-2 w-full overflow-hidden rounded-xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-5 max-w-[540px]">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
            <p className="pl-2 text-xs font-normal leading-relaxed text-slate-600 sm:text-sm">
              Documentation reflects approved API exposure. Product capability and API
              availability are governed separately.
            </p>
          </div>

        </div>

        {/* Right Column: Hero Graphic Image */}
        <div className="relative flex w-full justify-center lg:w-1/2 lg:justify-end">
          <div className="relative w-full max-w-[580px]">
            <img
              src="/images/devoloper-api-documentation/dad1.png"
              alt="Build against a billing model you can inspect"
              className="w-full h-auto object-cover rounded-2xl block shadow-sm border border-slate-100"
            />
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE VERSION (MATCHING REFERENCE media_1787661292646.png - block lg:hidden) */}
      {/* ========================================================================= */}
      <div className="block lg:hidden mx-auto max-w-[640px] px-4 sm:px-6">
        
        {/* Top Breadcrumb & Version Bar */}
        <div className="flex items-center justify-between py-2.5 border-b border-slate-100 text-xs text-slate-500 mb-4">
          <div className="flex items-center gap-1.5 text-slate-600 text-[11px] sm:text-xs">
            <span>Home</span>
            <span className="text-slate-300">/</span>
            <span>Developers</span>
            <span className="text-slate-300">/</span>
            <span className="font-bold text-slate-900">API Documentation</span>
          </div>
          <div>
            <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] px-2 py-0.5 rounded border border-purple-200/60 font-semibold">
              Version: {`{if_source_verified}`}
            </span>
          </div>
        </div>

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-2.5">
          <span className="h-px w-5 bg-slate-400" />
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
            DEVELOPERS · API DOCUMENTATION
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl font-extrabold leading-[1.16] text-slate-900 tracking-tight mb-3">
          Build against a billing model{" "}
          <span className="text-[#1D70F5]">you can <br />inspect.</span>
        </h1>

        {/* Description */}
        <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600 mb-4">
          Find source-governed API reference, resource contracts, field semantics, errors,
          lifecycle rules and implementation guidance for Zoiko Billing.
        </p>

        {/* CTAs Row - Electric Blue #1D70F5 matching media_1787661292646.png */}
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <Link
            href="#search-documentation"
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#1D70F5] px-5 text-center text-xs font-semibold text-white shadow-md shadow-blue-500/25"
          >
            Search documentation
          </Link>
          <Link
            href="#browse-resources"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-center text-xs font-semibold text-slate-900"
          >
            Browse API resources
          </Link>
          <Link
            href="#overview"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D70F5] hover:underline pl-1"
          >
            API Overview <span>→</span>
          </Link>
        </div>

        {/* Overview Notice Box */}
        <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-slate-50/70 p-3.5 mb-6">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
          <p className="pl-2 text-xs font-normal leading-relaxed text-slate-600">
            Documentation reflects approved API exposure. Product capability and API
            availability are governed separately.
          </p>
        </div>

        {/* Interactive Documentation Shell Card */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm text-left mb-6">
          
          {/* Search & Tags Bar */}
          <div className="mb-4 flex flex-col gap-2">
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 placeholder:text-slate-400 focus:border-[#1D70F5] focus:outline-none"
            />
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono">
              <span className="bg-purple-100/70 text-purple-700 px-2 py-0.5 rounded border border-purple-200/60 font-semibold">
                Version: {`{verified_only}`}
              </span>
              <span className="bg-purple-100/70 text-purple-700 px-2 py-0.5 rounded border border-purple-200/60 font-semibold">
                Status: {`{verified_only}`}
              </span>
            </div>
          </div>

          {/* Navigation Category Tabs */}
          <div className="mb-5 flex flex-col gap-3">
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                CONCEPTS
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
                  Money, time &amp; identifiers
                </span>
                <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
                  States &amp; lifecycle
                </span>
              </div>
            </div>

            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                RESOURCES
              </div>
              <div className="flex flex-wrap gap-1.5">
                {(["Customers", "Invoices & credit notes", "Payments & reconciliation", "Outstanding balances"] as ResourceTab[]).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveResource(tab)}
                    className={`rounded-lg px-3 py-1 text-xs font-medium border transition ${
                      activeResource === tab
                        ? "bg-blue-50 border-[#1D70F5] text-[#1D70F5] font-semibold"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                REFERENCE
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
                  Errors
                </span>
              </div>
            </div>
          </div>

          {/* Active Resource Details: Customers */}
          <div className="border-t border-slate-100 pt-4 mb-4">
            <h3 className="text-lg font-extrabold text-slate-900 mb-1">
              Customers
            </h3>
            <p className="text-xs text-slate-500 font-normal leading-relaxed mb-4">
              Identity, account linkage, history and allowed mutable fields for billing accounts. This resource does not perform identity resolution or merge decisions.
            </p>

            {/* Product Domain & API Exposure Boxes */}
            <div className="flex flex-col gap-2.5 mb-5">
              <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/70 p-3 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Product domain: Live
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-1.5 mb-1 font-semibold text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-slate-400" />
                  API exposure: pending canonical source
                </div>
                <div className="text-[11px] text-slate-500 font-normal pl-3.5">
                  Product domain existence is not evidence of API exposure.
                </div>
              </div>
            </div>

            {/* Request Contract Pane */}
            <div className="mb-5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                REQUEST CONTRACT
              </div>
              <div className="font-mono text-[11px] leading-relaxed text-slate-600 bg-slate-50/70 p-3.5 rounded-xl border border-slate-100 overflow-x-auto">
                <div className="text-slate-400 italic mb-2">
                  // Illustrative structure. Non-contractual.<br />
                  // Method, path and body come from the canonical API catalog.
                </div>
                <div className="mb-1">
                  <span className="bg-purple-100/70 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200/60">{`{verified_method}`}</span>{" "}
                  <span className="bg-purple-100/70 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200/60">{`{verified_path}`}</span>
                </div>
                <div className="mb-1">
                  <span className="bg-purple-100/70 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200/60">{`{content_type}`}</span>
                </div>
                <div>
                  <span className="bg-purple-100/70 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200/60">{`{idempotency_header_if_operation_supports_it}`}</span>
                </div>
              </div>
            </div>

            {/* Schema & Field Semantics Table */}
            <div className="mb-5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                SCHEMA &amp; FIELD SEMANTICS
              </div>
              <div className="overflow-x-auto border border-slate-100 rounded-xl">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-slate-50/80 border-b border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      <th scope="col" className="py-2.5 px-3">FIELD</th>
                      <th scope="col" className="py-2.5 px-3">TYPE</th>
                      <th scope="col" className="py-2.5 px-3">REQUIRED</th>
                      <th scope="col" className="py-2.5 px-3">SEMANTICS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    <tr>
                      <td className="py-2.5 px-3 font-mono text-[11px] font-bold text-slate-900">{`{record_id}`}</td>
                      <td className="py-2.5 px-3 text-slate-600">Identifier</td>
                      <td className="py-2.5 px-3 text-slate-600 font-semibold">Required</td>
                      <td className="py-2.5 px-3 text-slate-500 text-[11px]">Stable internal reference; uniqueness domain and case sensitivity per canonical schema</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-mono text-[11px] font-bold text-slate-900">{`{external_id}`}</td>
                      <td className="py-2.5 px-3 text-slate-600">Identifier</td>
                      <td className="py-2.5 px-3 text-slate-600">Optional</td>
                      <td className="py-2.5 px-3 text-slate-500 text-[11px]">External-ID semantics and reuse rules are source-defined</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-mono text-[11px] font-bold text-slate-900">{`{lifecycle_state}`}</td>
                      <td className="py-2.5 px-3 text-slate-600">enum</td>
                      <td className="py-2.5 px-3 text-slate-600">Read-only</td>
                      <td className="py-2.5 px-3 text-slate-500 text-[11px]">Allowed values and exact meaning listed with the enum, never a color chip alone</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-mono text-[11px] font-bold text-slate-900">{`{contact_role}`}</td>
                      <td className="py-2.5 px-3 text-slate-600">object</td>
                      <td className="py-2.5 px-3 text-slate-600">Optional</td>
                      <td className="py-2.5 px-3 text-slate-500 text-[11px]">Purpose-specific roles are not collapsed into one contact</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Governance Note */}
            <div className="mb-5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                GOVERNANCE NOTE
              </div>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                <span className="font-bold text-slate-900">No auto-merge and no hidden identity scoring.</span> Duplicate candidates are surfaced for governed review; nothing is merged as a side effect of a write.
              </p>
            </div>

            {/* On This Page Links */}
            <div className="mb-4 border-t border-slate-100 pt-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                ON THIS PAGE
              </div>
              <div className="grid grid-cols-2 gap-1 text-xs font-normal text-slate-500">
                <span className="hover:text-[#1D70F5] cursor-pointer">Overview</span>
                <span className="hover:text-[#1D70F5] cursor-pointer">Permissions</span>
                <span className="hover:text-[#1D70F5] cursor-pointer">Parameters</span>
                <span className="hover:text-[#1D70F5] cursor-pointer">Request</span>
                <span className="hover:text-[#1D70F5] cursor-pointer">Response</span>
                <span className="hover:text-[#1D70F5] cursor-pointer">Errors</span>
                <span className="hover:text-[#1D70F5] cursor-pointer">Examples</span>
                <span className="hover:text-[#1D70F5] cursor-pointer">Related events</span>
                <span className="hover:text-[#1D70F5] cursor-pointer">Related resources</span>
              </div>
            </div>

            {/* Yellow Status Warning Box */}
            <div className="rounded-xl border border-amber-200/90 bg-amber-50 p-3.5 text-xs leading-relaxed text-amber-900 font-normal">
              <span className="font-bold">Customers is a product domain with API exposure still unverified.</span> The dual-state header keeps those two facts apart, so a reader never infers a callable operation from a live product capability.
            </div>

          </div>

        </div>

        {/* Red Disclaimer Callout Box */}
        <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-4 text-xs font-normal leading-relaxed text-red-950 mb-8">
          <span className="font-bold text-red-900">What this page does not publish.</span> No endpoint, base URL, request
          body, response field, event type, error code, permission name, rate limit, page-size limit,
          version scheme or SDK language is asserted here. Every technical token is illustrative and
          non-contractual until the canonical API catalog supplies it. A billing capability existing in
          the product never implies it is callable.
        </div>

      </div>

    </section>
  );
}
