'use client';

import { useState } from "react";
import Link from "next/link";

type ConsoleState = "Ready" | "Loading" | "Success" | "Validation error" | "Permission error" | "Unknown outcome";

export default function DevelopersHeroSection() {
  const [activeState, setActiveState] = useState<ConsoleState>("Ready");
  const [copiedPane, setCopiedPane] = useState<string | null>(null);

  const handleCopy = (pane: string) => {
    setCopiedPane(pane);
    setTimeout(() => setCopiedPane(null), 1800);
  };

  return (
    <section className="w-full bg-white py-6 lg:py-16">
      
      {/* ========================================================================= */}
      {/* DESKTOP VERSION (UNTOUCHED & PRESERVED - hidden lg:flex)                 */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex mx-auto max-w-[1320px] flex-col items-center gap-10 px-6 sm:px-8 lg:flex-row lg:items-center lg:gap-14 lg:px-12">
        
        {/* Left Content Column */}
        <div className="flex w-full flex-col items-start gap-5 lg:max-w-[640px]">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="h-px w-5 bg-slate-400" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              DEVELOPERS - API OVERVIEW
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[44px]">
            Build billing workflows{" "}
            <br className="hidden sm:inline" />
            <span className="text-blue-600">on governed records.</span>
          </h1>

          {/* Description */}
          <p className="max-w-[600px] text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
            Use Zoiko Billing APIs to connect billing operations with the systems that
            create, review, issue, collect, reconcile and report on financial records —
            while preserving the controls that determine who can change what and when.
          </p>

          {/* CTAs */}
          <div className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="#api-docs"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-6 text-center text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-700"
            >
              API Documentation
            </Link>

            <Link
              href="#developer-sandbox"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-center text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              Developer Sandbox
            </Link>
          </div>

          {/* Notice Box / Callout */}
          <div className="relative mt-2 w-full overflow-hidden rounded-xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-5">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600" />
            <p className="pl-2 text-xs font-normal leading-relaxed text-slate-600 sm:text-sm">
              Technical details shown on this page are overview-level. Canonical endpoints,
              schemas, authentication methods, event definitions and limits belong in the
              corresponding developer documentation.
            </p>
          </div>
        </div>

        {/* Right Side Image Container */}
        <div className="relative flex w-full justify-center lg:w-1/2 lg:justify-end">
          <div className="relative w-full max-w-[560px]">
            <img
              src="/images/developers/dao1.png"
              alt="Build billing workflows on governed records"
              className="w-full h-auto object-cover rounded-2xl block shadow-sm border border-slate-100"
            />
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE VERSION (MATCHING REFERENCE media_1787567880485.png - block lg:hidden) */}
      {/* ========================================================================= */}
      <div className="block lg:hidden mx-auto max-w-[640px] px-4 sm:px-6">
        
        {/* Top Breadcrumb & Quick Link Bar */}
        <div className="flex items-center justify-between py-3 border-b border-slate-100 text-xs text-slate-500 mb-5">
          <div className="flex items-center gap-1.5 text-slate-600">
            <span>Home</span>
            <span className="text-slate-300">/</span>
            <span>Developers</span>
            <span className="text-slate-300">/</span>
            <span className="font-bold text-slate-900">API Overview</span>
          </div>
          <div className="flex items-center gap-3 font-semibold text-blue-600">
            <Link href="#api-docs" className="hover:underline">API Documentation</Link>
            <Link href="#sandbox" className="hover:underline">Developer Sandbox</Link>
          </div>
        </div>

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-px w-5 bg-slate-400" />
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
            DEVELOPERS - API OVERVIEW
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl font-extrabold leading-[1.16] text-slate-900 tracking-tight mb-3">
          Build billing workflows{" "}
          <span className="text-blue-600">on governed <br />records.</span>
        </h1>

        {/* Description */}
        <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600 mb-5">
          Use Zoiko Billing APIs to connect billing operations with the systems that
          create, review, issue, collect, reconcile and report on financial records —
          while preserving the controls that determine who can change what and when.
        </p>

        {/* CTAs Row */}
        <div className="flex flex-wrap items-center gap-2.5 mb-5">
          <Link
            href="#api-docs"
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-blue-600 px-5 text-center text-xs font-semibold text-white shadow-md shadow-blue-500/20"
          >
            API Documentation
          </Link>
          <Link
            href="#sandbox"
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-center text-xs font-semibold text-slate-800"
          >
            Developer Sandbox
          </Link>
          <Link
            href="#authentication"
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 pl-1"
          >
            Authentication <span>→</span>
          </Link>
        </div>

        {/* Overview Notice Box */}
        <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-slate-50/70 p-4 mb-5">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600" />
          <p className="pl-2 text-xs font-normal leading-relaxed text-slate-600">
            Technical details shown on this page are overview-level. Canonical endpoints,
            schemas, authentication methods, event definitions and limits belong in the
            corresponding developer documentation.
          </p>
        </div>

        {/* 3 Pill Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6 text-[11px] font-medium text-blue-700">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 px-3 py-1">
            <span className="w-2 h-2 rounded-full border border-blue-600 bg-white" />
            Billing-domain coverage
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 px-3 py-1">
            <span className="w-2 h-2 rounded-full border border-blue-600 bg-white" />
            Governed access
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 px-3 py-1">
            <span className="w-2 h-2 rounded-full border border-blue-600 bg-white" />
            Event-driven integration
          </span>
        </div>

        {/* Interactive API Console Card */}
        <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden mb-6">
          
          {/* Top Parameters Bar */}
          <div className="p-4 bg-slate-50/50 border-b border-slate-100 flex flex-col gap-2.5 text-xs text-slate-600">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div>
                <span className="font-semibold text-slate-800">Resource:</span>{" "}
                <span className="rounded bg-purple-100/70 px-2 py-0.5 font-mono text-[11px] text-purple-700 border border-purple-200/60">
                  {`{confirmed_resource}`}
                </span>
              </div>
              <div>
                <span className="font-semibold text-slate-800">Operation:</span>{" "}
                <span className="rounded bg-purple-100/70 px-2 py-0.5 font-mono text-[11px] text-purple-700 border border-purple-200/60">
                  {`{confirmed_operation}`}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 pt-0.5">
              <div>
                <span className="font-semibold text-slate-800">Environment:</span>{" "}
                <span className="rounded bg-purple-100/70 px-2 py-0.5 font-mono text-[11px] text-purple-700 border border-purple-200/60">
                  {`{verified_environment}`}
                </span>
              </div>
              <Link href="#reference" className="text-xs font-semibold text-blue-600 inline-flex items-center gap-1 hover:underline">
                Open exact reference <span>→</span>
              </Link>
            </div>
          </div>

          {/* Scrollable State Tabs */}
          <div className="p-3 border-b border-slate-100 overflow-x-auto flex items-center gap-2 no-scrollbar">
            {(["Ready", "Loading", "Success", "Validation error", "Permission error", "Unknown outcome"] as ConsoleState[]).map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setActiveState(st)}
                className={`whitespace-nowrap rounded-full px-3.5 py-1 text-xs font-medium border transition ${
                  activeState === st
                    ? "bg-blue-50 border-blue-500 text-blue-600 font-semibold"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Request Pane */}
          <div className="p-4 border-b border-slate-100 bg-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">REQUEST</span>
              <button
                type="button"
                onClick={() => handleCopy("request")}
                className="text-[11px] font-medium text-slate-500 border border-slate-200 rounded px-2.5 py-0.5 hover:bg-slate-50"
              >
                {copiedPane === "request" ? "Copied" : "Copy"}
              </button>
            </div>
            
            <div className="font-mono text-[11px] leading-relaxed text-slate-600 bg-slate-50/70 p-3.5 rounded-lg border border-slate-100 overflow-x-auto">
              <div className="text-slate-400 italic mb-2">
                // Structure only. Canonical headers, fields and syntax<br />
                // are supplied by API Documentation before publication.
              </div>
              <div><span className="font-semibold text-slate-800">METHOD</span> <span className="bg-purple-100/70 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200/60">{`{confirmed_operation}`}</span></div>
              <div><span className="font-semibold text-slate-800">PATH</span>   <span className="bg-purple-100/70 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200/60">{`{confirmed_resource_path}`}</span></div>
              
              <div className="mt-2 font-semibold text-slate-800">HEADERS</div>
              <div className="pl-2">
                <span className="bg-purple-100/70 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200/60">{`{auth_header_per_authentication_docs}`}</span><br />
                <span className="bg-purple-100/70 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200/60">{`{content_type}`}</span><br />
                <span className="bg-purple-100/70 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200/60">{`{idempotency_header_if_supported}`}</span>
              </div>

              <div className="mt-2 font-semibold text-slate-800">BODY</div>
              <div className="pl-2">
                <span className="bg-purple-100/70 text-purple-700 px-1 py-0.5 rounded border border-purple-200/60">{`{field_from_canonical_schema}`}</span> : <span className="bg-purple-100/70 text-purple-700 px-1 py-0.5 rounded border border-purple-200/60">{`{value_shape}`}</span><br />
                <span className="bg-purple-100/70 text-purple-700 px-1 py-0.5 rounded border border-purple-200/60">{`{field_from_canonical_schema}`}</span> : <span className="bg-purple-100/70 text-purple-700 px-1 py-0.5 rounded border border-purple-200/60">{`{value_shape}`}</span><br />
                <span className="bg-purple-100/70 text-purple-700 px-1 py-0.5 rounded border border-purple-200/60">{`{reference_to_billing_object}`}</span> : <span className="bg-purple-100/70 text-purple-700 px-1 py-0.5 rounded border border-purple-200/60">{`{identifier_shape}`}</span>
              </div>
            </div>
          </div>

          {/* Response Pane */}
          <div className="p-4 bg-white border-b border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">RESPONSE</span>
                <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-600 uppercase">
                  {activeState}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy("response")}
                className="text-[11px] font-medium text-slate-500 border border-slate-200 rounded px-2.5 py-0.5 hover:bg-slate-50"
              >
                {copiedPane === "response" ? "Copied" : "Copy"}
              </button>
            </div>

            <div className="font-mono text-[11px] leading-relaxed text-slate-600 bg-slate-50/70 p-3.5 rounded-lg border border-slate-100 min-h-[90px]">
              <div className="text-slate-400 italic mb-2">// No request sent yet.</div>
              <p className="font-sans text-xs text-slate-600">
                Select an operation and send to populate this pane. Response shape is defined by
                canonical documentation, not by this overview page.
              </p>
            </div>
          </div>

          {/* Metadata Rail Footer */}
          <div className="p-4 bg-slate-50/40 text-[11px] font-normal text-slate-600 flex flex-col gap-2 border-b border-slate-100">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="font-semibold text-slate-800">Version:</span>{" "}
                <span className="bg-purple-100/70 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200/60 font-mono text-[10px]">{`{version_policy}`}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-800">Scope required:</span>{" "}
                <span className="bg-purple-100/70 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200/60 font-mono text-[10px]">{`{scope_from_auth_docs}`}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <div>
                <span className="font-semibold text-slate-800">Idempotency:</span>{" "}
                <span className="bg-purple-100/70 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200/60 font-mono text-[10px]">{`{only_if_operation_supports}`}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-800">Request identifier:</span>{" "}
                <span className="bg-purple-100/70 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200/60 font-mono text-[10px]">{`{if_product_supports}`}</span>
              </div>
            </div>
          </div>

          {/* Yellow Syntax Warning Notice Box */}
          <div className="m-3 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs leading-relaxed text-amber-900">
            <span className="font-bold">Nothing here is production syntax.</span> Every bracketed token is a marked
            placeholder awaiting canonical documentation. Cycle the states above to see the response
            classes an integration must handle.
          </div>

        </div>

        {/* Red Disclaimer Callout Box */}
        <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-4 text-xs font-normal leading-relaxed text-red-950 mb-8">
          <span className="font-bold text-red-900">What this page does not claim.</span> No specific endpoint, method,
          status code, error payload, header, event name, delivery guarantee, rate limit,
          requests-per-second figure, token type, OAuth flow, rotation interval, scope name,
          session duration, SDK language or version scheme is asserted here. Secret-looking strings in
          this mockup are obviously synthetic and nonfunctional. A timeout is never assumed to mean
          failure, and exactly-once delivery is not implied.
        </div>

      </div>

    </section>
  );
}
