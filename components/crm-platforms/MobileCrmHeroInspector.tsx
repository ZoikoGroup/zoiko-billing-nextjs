"use client";

import React, { useState } from "react";

interface SharedField {
  name: string;
  authority: "CRM authoritative" | "Billing authoritative";
  detail: string;
  subdetail: string;
}

interface ConnectionInfo {
  readability: string;
  syncStatus: string;
  syncDirection: string;
  lastSyncTimestamp: string;
  lastSyncSub: string;
  fieldProtections: string;
  fieldProtectionsSub: string;
  tokenSummary: string;
  auth: string;
  authSub: string;
  lifecycle: string;
  lastConflict: string;
}

interface FixtureData {
  id: string;
  name: string;
  subtitle: string;
  sharedFields: SharedField[];
  connection: ConnectionInfo;
  alertYellow: string;
}

const fixtures: FixtureData[] = [
  {
    id: "crm-a",
    name: "Example CRM A",
    subtitle: "Available · Bi-direction...",
    sharedFields: [
      {
        name: "Account / company name",
        authority: "CRM authoritative",
        detail: "CRM is source",
        subdetail: "Transform: Canonical company profile",
      },
      {
        name: "Billing address",
        authority: "Billing authoritative",
        detail: "Reference-only inbound",
        subdetail: "CRM edits rejected; revert to billing truth",
      },
      {
        name: "Billing contact emails",
        authority: "Billing authoritative",
        detail: "Receipts",
        subdetail: "Purpose-specific; never co-mingled",
      },
      {
        name: "Payment terms",
        authority: "Billing authoritative",
        detail: "No sync",
        subdetail: "CRM can view progress or sync last state",
      },
      {
        name: "Tax identity",
        authority: "Billing authoritative",
        detail: "Only with authorization",
        subdetail: "Addresses register rule failure by summary",
      },
      {
        name: "Customer lifecycle state",
        authority: "Billing authoritative",
        detail: "Reference-only inbound",
        subdetail: "CRM close does not close billing",
      },
      {
        name: "Opportunity reference",
        authority: "CRM authoritative",
        detail: "Pipeline tracking",
        subdetail: "Unconnected deals receive help",
      },
      {
        name: "Invoice status summary",
        authority: "Billing authoritative",
        detail: "Billing to CRM",
        subdetail: "Summary status only; adjustments",
      },
    ],
    connection: {
      readability: "Available",
      syncStatus: "Passive",
      syncDirection: "↕",
      lastSyncTimestamp: "12 Aug 2026, 09:12",
      lastSyncSub: "Historic check request",
      fieldProtections: "Checked",
      fieldProtectionsSub: "Protected data won't overwrite",
      tokenSummary: "Valid",
      auth: "OAuth - named service principal",
      authSub: "Token refreshed weekly",
      lifecycle: "Active",
      lastConflict: "10 Aug 2026",
    },
    alertYellow:
      "Two fields are CRM-owned; six are Billing-owned. Boundless customer records split authority must be fixed. Note that billing address shows round-trip mapping via reference-only.",
  },
  {
    id: "crm-b",
    name: "Example CRM B",
    subtitle: "Available · 2-surface iden...",
    sharedFields: [
      {
        name: "Account / company name",
        authority: "CRM authoritative",
        detail: "CRM is source",
        subdetail: "Canonical company identification",
      },
      {
        name: "Billing address",
        authority: "Billing authoritative",
        detail: "Reference-only inbound",
        subdetail: "Validated against legal entity registry",
      },
      {
        name: "Billing contact emails",
        authority: "Billing authoritative",
        detail: "Finance contacts",
        subdetail: "Segregated delivery destination",
      },
      {
        name: "Payment terms",
        authority: "Billing authoritative",
        detail: "Controlled outbound",
        subdetail: "Contractual terms strictly enforced",
      },
      {
        name: "Tax identity",
        authority: "Billing authoritative",
        detail: "VIES / EIN verified",
        subdetail: "Immutable from external sales console",
      },
      {
        name: "Customer lifecycle state",
        authority: "Billing authoritative",
        detail: "Synchronized state",
        subdetail: "Pipeline exit signals billing review",
      },
      {
        name: "Opportunity reference",
        authority: "CRM authoritative",
        detail: "Deal ID link",
        subdetail: "Deep link for commercial team audit",
      },
      {
        name: "Invoice status summary",
        authority: "Billing authoritative",
        detail: "Aggregated state",
        subdetail: "High-level aging indicators",
      },
    ],
    connection: {
      readability: "Available",
      syncStatus: "Active",
      syncDirection: "↕",
      lastSyncTimestamp: "14 Aug 2026, 14:30",
      lastSyncSub: "Scheduled delta run",
      fieldProtections: "Enforced",
      fieldProtectionsSub: "Server-side authority gate",
      tokenSummary: "Valid",
      auth: "mTLS + Scoped API Key",
      authSub: "Rotated every 30 days",
      lifecycle: "Active",
      lastConflict: "08 Aug 2026",
    },
    alertYellow:
      "CRM B enforces strict boundary validation. Two-surface identity verified without overriding debtor ledger entries.",
  },
  {
    id: "crm-c",
    name: "Example CRM C",
    subtitle: "Limited · Sync table...",
    sharedFields: [
      {
        name: "Account / company name",
        authority: "CRM authoritative",
        detail: "Manual match",
        subdetail: "Requires human review prior to link",
      },
      {
        name: "Billing address",
        authority: "Billing authoritative",
        detail: "Billing owned",
        subdetail: "External updates rejected",
      },
      {
        name: "Billing contact emails",
        authority: "Billing authoritative",
        detail: "Restricted",
        subdetail: "Internal finance routing only",
      },
      {
        name: "Payment terms",
        authority: "Billing authoritative",
        detail: "Read only",
        subdetail: "Mirror copy for sales reference",
      },
      {
        name: "Tax identity",
        authority: "Billing authoritative",
        detail: "No sync",
        subdetail: "Regulatory perimeter preserved",
      },
      {
        name: "Customer lifecycle state",
        authority: "Billing authoritative",
        detail: "Decoupled",
        subdetail: "CRM archive retains billing evidence",
      },
      {
        name: "Opportunity reference",
        authority: "CRM authoritative",
        detail: "Reference ID",
        subdetail: "Static metadata snapshot",
      },
      {
        name: "Invoice status summary",
        authority: "Billing authoritative",
        detail: "Minimal status",
        subdetail: "Paid / unpaid toggle only",
      },
    ],
    connection: {
      readability: "Limited",
      syncStatus: "Restricted",
      syncDirection: "→",
      lastSyncTimestamp: "09 Aug 2026, 11:00",
      lastSyncSub: "Batch sync triggered",
      fieldProtections: "Strict",
      fieldProtectionsSub: "Inbound mutation blocked",
      tokenSummary: "Expiring soon",
      auth: "OAuth 2.0 Webflow",
      authSub: "Manual re-auth in 3 days",
      lifecycle: "Review required",
      lastConflict: "01 Aug 2026",
    },
    alertYellow:
      "Limited integration mode active. Inbound writes disabled until token renewal and authority handshake complete.",
  },
  {
    id: "crm-d",
    name: "Example CRM D",
    subtitle: "Available · Pipeline-to-in...",
    sharedFields: [
      {
        name: "Account / company name",
        authority: "CRM authoritative",
        detail: "CRM is source",
        subdetail: "Canonical company identification",
      },
      {
        name: "Billing address",
        authority: "Billing authoritative",
        detail: "Reference-only inbound",
        subdetail: "Dispute triggers review state",
      },
      {
        name: "Billing contact emails",
        authority: "Billing authoritative",
        detail: "Finance channel",
        subdetail: "Dedicated invoice distribution",
      },
      {
        name: "Payment terms",
        authority: "Billing authoritative",
        detail: "Profile inherited",
        subdetail: "Net terms managed in billing rules",
      },
      {
        name: "Tax identity",
        authority: "Billing authoritative",
        detail: "Locked",
        subdetail: "Exemption certificates stored in Billing",
      },
      {
        name: "Customer lifecycle state",
        authority: "Billing authoritative",
        detail: "Bi-directional alert",
        subdetail: "Overdue status visible in pipeline view",
      },
      {
        name: "Opportunity reference",
        authority: "CRM authoritative",
        detail: "Deal closed-won context",
        subdetail: "Triggers order draft creation",
      },
      {
        name: "Invoice status summary",
        authority: "Billing authoritative",
        detail: "Outbound sync",
        subdetail: "Full schedule status synced hourly",
      },
    ],
    connection: {
      readability: "Available",
      syncStatus: "Active",
      syncDirection: "↕",
      lastSyncTimestamp: "15 Aug 2026, 17:45",
      lastSyncSub: "Real-time webhook active",
      fieldProtections: "Active",
      fieldProtectionsSub: "All shared fields monitored",
      tokenSummary: "Valid",
      auth: "Service Principal Key Vault",
      authSub: "Managed cloud identity",
      lifecycle: "Active",
      lastConflict: "None detected",
    },
    alertYellow:
      "Pipeline-to-invoice workflow verified. Commercial deal context feeds billing draft without bypassing credit approvals.",
  },
];

export default function MobileCrmHeroInspector() {
  const [activeTab, setActiveTab] = useState<string>("crm-a");
  const fixture = fixtures.find((f) => f.id === activeTab) || fixtures[0];

  return (
    <div className="w-full rounded-2xl border border-[#dfe5ee] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:p-5">
      {/* HEADER */}
      <div>
        <h3 className="!m-0 text-sm font-bold leading-5 text-[#091127]">
          Field authority inspector · synthetic registry fixtures
        </h3>
        <p className="!m-0 mt-1 text-xs leading-5 text-[#5d7192]">
          Four client fixtures simulate real 2026-style CRM connections to debug source/field authority issues before live sync touches billing records.
        </p>
      </div>

      {/* TABS */}
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {fixtures.map((f) => {
          const isActive = f.id === activeTab;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveTab(f.id)}
              className={`flex flex-col items-start rounded-xl border p-2.5 text-left transition ${
                isActive
                  ? "border-blue-500 bg-blue-50/40 shadow-sm"
                  : "border-[#dfe5ee] bg-white hover:bg-slate-50"
              }`}
            >
              <span className="text-xs font-bold text-[#091127]">{f.name}</span>
              <span className="mt-0.5 text-[10px] text-[#5d7192] line-clamp-1">
                {f.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* SHARED FIELDS & RESOLUTION IN REGISTRY */}
      <div className="mt-5 border-t border-[#edf0f4] pt-4">
        <p className="!m-0 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7890b2]">
          SHARED FIELDS &amp; RESOLUTION IN REGISTRY
        </p>

        <div className="mt-2 divide-y divide-[#edf0f4]">
          {fixture.sharedFields.map((field) => (
            <div key={field.name} className="py-3 first:pt-2 last:pb-2">
              <div className="flex flex-wrap items-center justify-between gap-1.5">
                <span className="text-xs font-semibold text-[#091127]">
                  {field.name}
                </span>

                <span
                  className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                    field.authority === "CRM authoritative"
                      ? "border border-purple-200 bg-purple-50 text-purple-700"
                      : "border border-blue-200 bg-blue-50 text-blue-700"
                  }`}
                >
                  {field.authority}
                </span>
              </div>

              <p className="!m-0 mt-1 text-xs font-medium text-blue-600">
                {field.detail}
              </p>

              <p className="!m-0 mt-0.5 text-[11px] text-[#5d7192]">
                {field.subdetail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CONNECTION & SYNCHRONIZATION */}
      <div className="mt-5 border-t border-[#edf0f4] pt-4">
        <p className="!m-0 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7890b2]">
          CONNECTION &amp; SYNCHRONIZATION
        </p>

        <div className="mt-2 divide-y divide-[#edf0f4] text-xs">
          {/* Readability */}
          <div className="flex items-center justify-between py-2">
            <span className="text-[#5d7192]">Readability</span>
            <span className="rounded border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
              ● {fixture.connection.readability}
            </span>
          </div>

          {/* Sync status */}
          <div className="flex items-center justify-between py-2">
            <span className="text-[#5d7192]">Sync status</span>
            <span className="rounded border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
              ● {fixture.connection.syncStatus}
            </span>
          </div>

          {/* Sync direction */}
          <div className="flex items-center justify-between py-2">
            <span className="text-[#5d7192]">Sync direction</span>
            <span className="rounded border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
              {fixture.connection.syncDirection}
            </span>
          </div>

          {/* Last sync timestamp */}
          <div className="flex items-start justify-between py-2">
            <span className="text-[#5d7192]">Last sync timestamp</span>
            <div className="text-right">
              <span className="font-semibold text-[#091127]">
                {fixture.connection.lastSyncTimestamp}
              </span>
              <p className="!m-0 text-[10px] text-[#7890b2]">
                {fixture.connection.lastSyncSub}
              </p>
            </div>
          </div>

          {/* Field protections */}
          <div className="flex items-start justify-between py-2">
            <span className="text-[#5d7192]">Field protections</span>
            <div className="text-right">
              <span className="rounded border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                ● {fixture.connection.fieldProtections}
              </span>
              <p className="!m-0 mt-0.5 text-[10px] text-[#7890b2]">
                {fixture.connection.fieldProtectionsSub}
              </p>
            </div>
          </div>

          {/* Token summary */}
          <div className="flex items-center justify-between py-2">
            <span className="text-[#5d7192]">Token summary</span>
            <span className="rounded border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
              ● {fixture.connection.tokenSummary}
            </span>
          </div>

          {/* Auth */}
          <div className="flex items-start justify-between py-2">
            <span className="text-[#5d7192]">Auth</span>
            <div className="text-right">
              <span className="font-semibold text-[#091127]">
                {fixture.connection.auth}
              </span>
              <p className="!m-0 text-[10px] text-[#7890b2]">
                {fixture.connection.authSub}
              </p>
            </div>
          </div>

          {/* Lifecycle */}
          <div className="flex items-center justify-between py-2">
            <span className="text-[#5d7192]">Lifecycle</span>
            <span className="rounded border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
              ● {fixture.connection.lifecycle}
            </span>
          </div>

          {/* Last conflict */}
          <div className="flex items-center justify-between py-2">
            <span className="text-[#5d7192]">Last conflict</span>
            <span className="font-semibold text-[#091127]">
              {fixture.connection.lastConflict}
            </span>
          </div>
        </div>
      </div>

      {/* ALERT YELLOW */}
      <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/70 p-3 text-[11px] leading-5 text-amber-950">
        {fixture.alertYellow}
      </div>

      {/* DISCLAIMER RED */}
      <div className="mt-3 rounded-xl border border-rose-200 bg-rose-50/70 p-3 text-[11px] leading-5 text-rose-950">
        <strong>What this page does not claim:</strong> Zoiko Billing is not a CRM,
        and a CRM must not become the billing system of record. Reconciling 2026-style
        Customer data, selected two-way sync, prioritized access to verify field authority,
        boundary marketing and relationship scopes is obligations to prevent billing
        inaccuracies or service defeat communication. payment-propensity, churn,
        renewal, fraud, sentiment, or willingness-to-pay scores, and grouping data
        policy must require marketing consent.
      </div>
    </div>
  );
}
