'use client';

import { useState } from "react";
import Link from "next/link";

interface FieldAuthorityFixture {
  fieldName: string;
  authorityBadge: string;
  badgeType: "billing" | "crm";
  syncDirection: string;
  note: string;
}

const fixtureFieldList: FieldAuthorityFixture[] = [
  {
    fieldName: "Account / company name",
    authorityBadge: "● CRM authoritative",
    badgeType: "crm",
    syncDirection: "CRM to Billing",
    note: "Transform: v2 normalize legal suffix",
  },
  {
    fieldName: "Billing address",
    authorityBadge: "● Billing authoritative",
    badgeType: "billing",
    syncDirection: "Reference-only inbound",
    note: "CRM value displayed, never applied",
  },
  {
    fieldName: "Billing contact role",
    authorityBadge: "● Billing authoritative",
    badgeType: "billing",
    syncDirection: "No sync",
    note: "Purpose-specific roles not collapsed",
  },
  {
    fieldName: "Payment terms",
    authorityBadge: "● Billing authoritative",
    badgeType: "billing",
    syncDirection: "No sync",
    note: "CRM cannot propose or overwrite terms",
  },
  {
    fieldName: "Currency",
    authorityBadge: "● Billing authoritative",
    badgeType: "billing",
    syncDirection: "Proposed context only",
    note: "Validated against Multi-Currency rules",
  },
  {
    fieldName: "Customer lifecycle state",
    authorityBadge: "● Billing authoritative",
    badgeType: "billing",
    syncDirection: "Reference-only inbound",
    note: "CRM close state cannot close billing",
  },
  {
    fieldName: "Opportunity reference",
    authorityBadge: "● CRM authoritative",
    badgeType: "crm",
    syncDirection: "CRM to Billing",
    note: "Reference and context only",
  },
  {
    fieldName: "Invoice status summary",
    authorityBadge: "● Billing authoritative",
    badgeType: "billing",
    syncDirection: "Billing to CRM",
    note: "Summary state only, allowlisted",
  },
];

const crmFixtures = [
  { id: "a", name: "Example CRM A", status: "Available · 0 conflicts" },
  { id: "b", name: "Example CRM B", status: "Available · 2 conflicts open" },
  { id: "c", name: "Example CRM C", status: "Limited · sync stale" },
  { id: "d", name: "Example CRM D", status: "Available · Inbound only" },
];

export default function CrmPlatformsHeroSection() {
  const [activeCrm, setActiveCrm] = useState<string>("a");

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
                CRM PLATFORMS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.14] tracking-tight text-slate-900">
              Connect customer and <br />
              sales systems to billing <br />
              <span className="text-[#1D70F5]">without losing source authority.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-500 max-w-[540px]">
              Evaluate approved CRM integrations by supported objects, actions, direction, field
              authority, authentication, customer matching, lifecycle handling, availability,
              currentness, documentation and verification. Keep sales context useful without
              turning CRM data into financial truth — or billing data into hidden sales scoring.
            </p>

            {/* CTAs */}
            <div className="flex w-full flex-wrap items-center gap-3 pt-1 sm:w-auto">
              <Link
                href="#crm-catalog"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1D70F5] px-6 text-center text-xs sm:text-sm font-semibold !text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-600"
              >
                <span className="text-white font-semibold">Browse CRM integrations</span>
              </Link>

              <Link
                href="#availability"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-center text-xs sm:text-sm font-semibold !text-slate-900 transition hover:bg-slate-50"
              >
                <span className="text-slate-900 font-semibold">Check Integration Availability</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Hero Graphic Image crm1.png */}
          <div className="relative flex w-1/2 justify-end">
            <div className="relative w-full max-w-[580px]">
              <img
                src="/images/crm-platforms/crm1.png"
                alt="Connect customer and sales systems to billing without losing source authority"
                className="w-full h-auto object-cover rounded-2xl block shadow-sm border border-slate-100"
              />
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787711104268.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden text-left w-full max-w-[640px] mx-auto">
          
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 font-normal mb-3 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-slate-900 transition">Home</Link>
            <span>/</span>
            <Link href="/integrations-directory" className="hover:text-slate-900 transition">Integrations</Link>
            <span>/</span>
            <span className="font-bold text-slate-900">CRM Platforms</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-4 bg-slate-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
              CRM PLATFORMS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight text-slate-900 mb-3">
            Connect customer and sales systems to billing{" "}
            <span className="text-[#1D70F5]">without losing source authority.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600 mb-5">
            Evaluate approved CRM integrations by supported objects, actions, direction, field authority, authentication, customer matching, lifecycle handling, availability, currentness, documentation and verification. Keep sales context useful without turning CRM data into financial truth — or billing data into hidden sales scoring.
          </p>

          {/* CTAs Row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <Link
              href="#crm-catalog"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#1D70F5] px-4 py-2 text-center text-xs font-semibold !text-white shadow-md shadow-blue-500/25"
            >
              <span className="text-white font-semibold">Browse CRM integrations</span>
            </Link>

            <Link
              href="#availability"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-center text-xs font-semibold !text-slate-900"
            >
              <span className="text-slate-900 font-semibold">Check Integration Availability</span>
            </Link>
          </div>

          {/* Explore Link */}
          <div className="mb-4">
            <Link
              href="#operating-model"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D70F5] hover:underline"
            >
              Explore Customer Records →
            </Link>
          </div>

          {/* Notice Callout Box */}
          <div className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-[11px] text-slate-500 mb-5">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1D70F5]" />
            <p className="pl-2 font-normal leading-relaxed">
              A CRM record can supply approved customer or commercial context; Billing terms, invoices, balances, payments and permissions remain governed by their own authoritative domains.
            </p>
          </div>

          {/* Field authority inspector Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm text-left mb-4">
            
            <h2 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
              Field authority inspector - synthetic registry fixtures
            </h2>
            <p className="text-[11px] text-slate-500 font-normal leading-relaxed mb-4">
              The same customer can have CRM-owned fields and Billing-owned fields at once. Authority is per field — never &quot;CRM wins&quot; or &quot;Billing wins&quot; globally.
            </p>

            {/* 4 CRM Tabs Grid */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              {crmFixtures.map((crm) => {
                const isActive = activeCrm === crm.id;
                return (
                  <button
                    key={crm.id}
                    type="button"
                    onClick={() => setActiveCrm(crm.id)}
                    className={`rounded-xl border p-2.5 text-left transition ${
                      isActive
                        ? "border-blue-500 bg-blue-50/70 shadow-sm"
                        : "border-slate-200/80 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900">{crm.name}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{crm.status}</div>
                  </button>
                );
              })}
            </div>

            {/* FIELD-LEVEL SOURCE AUTHORITY */}
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              FIELD-LEVEL SOURCE AUTHORITY
            </div>

            <div className="divide-y divide-slate-100 text-xs mb-4">
              {fixtureFieldList.map((item, idx) => (
                <div key={idx} className="py-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-0.5">
                    <span className="font-bold text-slate-900">{item.fieldName}</span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                        item.badgeType === "crm"
                          ? "bg-purple-50 text-purple-700 border-purple-200/80"
                          : "bg-blue-50 text-blue-700 border-blue-200/80"
                      }`}
                    >
                      {item.authorityBadge}
                    </span>
                  </div>
                  <div className="text-[11px] font-medium text-slate-700">{item.syncDirection}</div>
                  <div className="text-[10px] text-slate-400">{item.note}</div>
                </div>
              ))}
            </div>

            {/* CONNECTION & CURRENTNESS */}
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-5 mb-2">
              CONNECTION &amp; CURRENTNESS
            </div>

            <div className="divide-y divide-slate-100 text-xs">
              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-500 text-[11px]">Availability</span>
                <span className="bg-emerald-50 text-emerald-700 font-semibold text-[10px] px-2 py-0.5 rounded border border-emerald-200/60">
                  ● Available
                </span>
              </div>

              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-500 text-[11px]">Operational</span>
                <span className="bg-emerald-50 text-emerald-700 font-semibold text-[10px] px-2 py-0.5 rounded border border-emerald-200/60">
                  ● Normal
                </span>
              </div>

              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-500 text-[11px]">Open conflicts</span>
                <span className="bg-emerald-50 text-emerald-700 font-semibold text-[10px] px-2 py-0.5 rounded border border-emerald-200/60">
                  ● 0
                </span>
              </div>

              <div className="py-2">
                <div className="text-slate-500 text-[11px]">Last successful sync</div>
                <div className="font-bold text-slate-900 text-[11px]">18 Aug 2026, 09:12</div>
                <div className="text-[10px] text-slate-400">Within stale threshold</div>
              </div>

              <div className="py-2">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-slate-500 text-[11px]">Field currentness</span>
                  <span className="bg-emerald-50 text-emerald-700 font-semibold text-[10px] px-2 py-0.5 rounded border border-emerald-200/60">
                    ● Current
                  </span>
                </div>
                <div className="text-[10px] text-slate-400">All mapped fields inside threshold</div>
              </div>

              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-500 text-[11px]">Event backlog</span>
                <span className="bg-emerald-50 text-emerald-700 font-semibold text-[10px] px-2 py-0.5 rounded border border-emerald-200/60">
                  ● None
                </span>
              </div>

              <div className="py-2">
                <div className="text-slate-500 text-[11px]">Auth</div>
                <div className="font-bold text-slate-900 text-[11px]">OAuth - named service principal</div>
                <div className="text-[10px] text-slate-400">Least necessary scopes</div>
              </div>

              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-500 text-[11px]">Lifecycle</span>
                <span className="bg-emerald-50 text-emerald-700 font-semibold text-[10px] px-2 py-0.5 rounded border border-emerald-200/60">
                  ● Current
                </span>
              </div>

              <div className="py-2 flex items-center justify-between">
                <span className="text-slate-500 text-[11px]">Last verified</span>
                <span className="font-bold text-slate-900 text-[11px]">18 Aug 2026</span>
              </div>
            </div>

            {/* Amber Summary Box inside Card */}
            <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-xs text-amber-950 font-normal leading-relaxed mt-4">
              <span className="font-bold text-amber-900">Two fields are CRM-owned; six are Billing-owned.</span> The same customer record splits authority field by field. Note that billing address arrives from CRM as reference-only — visible to license, never applied automatically.
            </div>

          </div>

          {/* Red Disclaimer Warning Box */}
          <div className="rounded-2xl border border-red-200/80 bg-red-50/70 p-4 text-xs text-red-950 font-normal leading-relaxed mb-6">
            <span className="font-bold text-red-900">What this page does not claim.</span> Zoiko Billing is not a CRM, and a CRM does not become the billing system of record. No real-time 360-degree customer sync, universal two-way sync, automated quote-to-cash, lead scoring, forecasting, marketing automation or revenue intelligence is claimed. Billing behavior is never used to derive customer value, payment propensity, churn, renewal, fraud, sentiment or willingness-to-pay scores, and a billing relationship never creates marketing consent.
          </div>

        </div>

      </div>
    </section>
  );
}
