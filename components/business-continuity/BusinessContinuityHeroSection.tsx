'use client';

import { useState } from "react";
import Link from "next/link";

const rtoTerms = [
  { id: "rto", label: "RTO" },
  { id: "rpo", label: "RPO" },
  { id: "restoration-priority", label: "Restoration priority" },
  { id: "mtd", label: "Maximum tolerable disruption" },
  { id: "not-public", label: "Not public" },
];

export default function BusinessContinuityHeroSection() {
  const [activeTerm, setActiveTerm] = useState<string>("rto");

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
                BUSINESS CONTINUITY
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.14] tracking-tight text-slate-900">
              How continuity is governed, <br />
              <span className="text-[#1D70F5]">and what our terms actually mean.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-500 max-w-[540px]">
              Billing operations depend on the platform being recoverable, so a reviewer needs to know how
              preparedness is governed, which services are treated as critical, what a recovery objective
              is and is not, and where the boundary of our responsibility sits against yours.
            </p>

            {/* CTAs */}
            <div className="flex w-full flex-wrap items-center gap-3 pt-1 sm:w-auto">
              <Link
                href="#model"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1D70F5] px-6 text-center text-xs sm:text-sm font-semibold !text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-600"
              >
                <span className="text-white font-semibold">Understand continuity governance</span>
              </Link>

              <Link
                href="#evidence"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-center text-xs sm:text-sm font-semibold !text-slate-900 transition hover:bg-slate-50"
              >
                <span className="text-slate-900 font-semibold">View applicable evidence</span>
              </Link>
            </div>

            {/* Notice Callout Box */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-xs text-slate-500 max-w-[540px] mt-2">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
              <p className="pl-2 font-normal leading-relaxed">
                This page explains governance. It does not state current availability, and public language
                here cannot override your binding contractual terms.
              </p>
            </div>

          </div>

          {/* Right Column: Hero Graphic Image bc1.png */}
          <div className="relative flex w-1/2 justify-end">
            <div className="relative w-full max-w-[580px]">
              <img
                src="/images/business-continuity/bc1.png"
                alt="How continuity is governed, and what our terms actually mean"
                className="w-full h-auto object-cover rounded-2xl block shadow-sm border border-slate-100"
              />
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1788179636662.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden text-left w-full max-w-[640px] mx-auto">
          
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 font-normal mb-3 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-slate-900 transition">Home</Link>
            <span>/</span>
            <Link href="/trust" className="hover:text-slate-900 transition">Trust &amp; Security</Link>
            <span>/</span>
            <span className="font-bold text-slate-900">Business Continuity</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-4 bg-slate-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
              BUSINESS CONTINUITY
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            How continuity is governed,{" "}
            <span className="text-[#1D70F5]">and what our terms actually mean.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600 mb-5">
            Billing operations depend on the platform being recoverable, so a reviewer needs to know how preparedness is governed, which services are treated as critical, what a recovery objective is and is not, and where the boundary of our responsibility sits against yours.
          </p>

          {/* CTAs Row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <Link
              href="#model"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#1D70F5] px-4 py-2 text-center text-xs font-semibold !text-white shadow-md shadow-blue-500/25"
            >
              <span className="text-white font-semibold">Understand continuity governance</span>
            </Link>

            <Link
              href="#evidence"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-center text-xs font-semibold !text-slate-900"
            >
              <span className="text-slate-900 font-semibold">View applicable evidence</span>
            </Link>
          </div>

          {/* View Status Link */}
          <div className="mb-4">
            <Link
              href="/trust"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D70F5] hover:underline"
            >
              View current service status →
            </Link>
          </div>

          {/* Notice Callout Box */}
          <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-[11px] text-slate-500 mb-5">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
            <p className="pl-2 font-normal leading-relaxed">
              This page explains governance. It does not state current availability, and public language here cannot override your binding contractual terms.
            </p>
          </div>

          {/* Red Scope Boundary Warning Box */}
          <div className="rounded-2xl border border-red-200/80 bg-red-50/70 p-4 text-xs text-red-950 font-normal leading-relaxed mb-5">
            <span className="font-bold text-red-900">Scope boundary.</span> This page deliberately does not assert the existence of specific recovery sites, regions, data replication patterns, backup schedules, failover mechanisms, RTO or RPO values, exercise frequencies, recovery certifications, crisis teams, emergency contacts, insurance coverage or historical continuity events. Where a value exists and is approved for publication, it renders from the continuity registry with its exact scope, owner and limitations attached.
          </div>

          {/* Interactive Recovery Objectives Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm text-left mb-6">
            
            <h2 className="text-xs font-bold text-slate-900 mb-1">
              What a recovery objective is — and is not
            </h2>
            <p className="text-[10px] text-slate-400 font-normal leading-relaxed mb-3">
              Five terms. Each is routinely misread as a stronger promise than it means, so the &quot;is not&quot; column carries the weight.
            </p>

            {/* TERM Selection Pills */}
            <div className="flex flex-wrap items-center gap-1.5 mb-4 pb-3 border-b border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                TERM
              </span>
              {rtoTerms.map((t) => {
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
              <div className="text-xs font-bold text-slate-900">Recovery Time Objective (RTO)</div>

              {/* Blue Box: WHAT IT MEANS */}
              <div className="rounded-xl border border-blue-200/80 bg-blue-50/70 p-3 text-[11px] text-blue-950 font-normal leading-relaxed">
                <div className="text-[9px] font-bold text-blue-800 uppercase tracking-wider mb-1">
                  WHAT IT MEANS
                </div>
                <p>
                  A <span className="font-bold text-slate-900">target</span> duration for restoring a defined service or process after a qualifying disruption — where an authoritative scope defines it. The scope is part of the objective, not context around it.
                </p>
              </div>

              {/* Red Box: WHAT IT IS NOT */}
              <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-3 text-[11px] text-red-950 font-normal leading-relaxed space-y-1.5">
                <div className="text-[9px] font-bold text-red-800 uppercase tracking-wider mb-1">
                  WHAT IT IS NOT
                </div>
                <p>
                  ● <span className="font-bold text-slate-900">Not a guaranteed restoration time.</span> An objective is a planning target, not a commitment that a specific incident will be resolved within it.
                </p>
                <p>
                  ● <span className="font-bold text-slate-900">Not measured uptime.</span> Availability history is operational data that belongs to System Status.
                </p>
                <p>
                  ● <span className="font-bold text-slate-900">Not incident response time.</span> How quickly support begins responding is a different measure entirely.
                </p>
              </div>

              {/* Current published value Sub-card */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 text-[11px] text-slate-600 font-normal leading-relaxed">
                <span className="font-bold text-slate-900">Current published value:</span>{" "}
                <span className="font-mono text-purple-700 font-semibold">[no_public_value_established]</span>{" "}
                — This wireframe has no continuity registry behind it, so every objective renders as not established rather than as a placeholder number.
              </div>

            </div>

            {/* Amber Footnote Box inside Card */}
            <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-3 text-xs text-amber-950 font-normal leading-relaxed mt-4">
              <span className="font-bold text-amber-900">RTO is the value most often read as a promise.</span> A procurement reviewer who sees a four-hour RTO will describe it internally as a four-hour restoration guarantee — which is why the objective is never published without its scope, owner and limitations attached.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
