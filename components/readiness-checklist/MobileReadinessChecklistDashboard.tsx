"use client";

import { useState } from "react";

type ItemStatus =
  | "not_assessed"
  | "verified"
  | "needs_review"
  | "blocked"
  | "not_applicable";

interface ChecklistItem {
  id: string;
  title: string;
  source: string;
  evidence: string;
  boundary?: string;
  status: ItemStatus;
}

const initialDomain1Items: ChecklistItem[] = [
  {
    id: "d1_1",
    title:
      "Evaluation scope is clearly defined by market, entity, product, offer or process.",
    source: "Global Billing Guide / product scope",
    evidence: "Scope reference and owner",
    status: "not_assessed",
  },
  {
    id: "d1_2",
    title: "Decision-owner and specialist reviewers are identified.",
    source: "Internal governance",
    evidence: "Role or team reply in public mode",
    status: "not_assessed",
  },
  {
    id: "d1_3",
    title: "Required legal entity relationships are known or flagged for review.",
    source: "Inter-Entity Billing / Multi-Entity Guide",
    evidence: "Relationship source",
    status: "not_assessed",
  },
  {
    id: "d1_4",
    title: "Assumptions are recorded separately from verified facts.",
    source: "Checklist governance",
    evidence: "Assumption log reference",
    boundary:
      "Boundary: An assumption circulating with facts becomes a fact in thirty-three seconds.",
    status: "not_assessed",
  },
  {
    id: "d1_5",
    title: "Target timeline or effective period is documented where relevant.",
    source: "Specialist season",
    evidence: "Date entry if approval or renewal",
    status: "not_assessed",
  },
];

const domainTabs = [
  { id: "d1", label: "D1 Scope & operating context" },
  { id: "d2", label: "D2 Availability & market readiness" },
  { id: "d3", label: "D3 Currency, FX & pricing" },
  { id: "d4", label: "D4 Payments" },
  { id: "d5", label: "D5 Tax & compliance" },
  { id: "d6", label: "D6 Multi-entity & system readiness" },
  { id: "d7", label: "D7 Evidence, risks & approvals" },
  { id: "d8", label: "D8 Readiness summary" },
];

export default function MobileReadinessChecklistDashboard() {
  const [items, setItems] = useState<ChecklistItem[]>(initialDomain1Items);
  const [activeTab, setActiveTab] = useState("d1");

  const totalAssessedInD1 = items.filter(
    (item) => item.status !== "not_assessed"
  ).length;

  // Total prompts across all 8 domains is 32 (Domain 1 has 5, other domains have 27).
  const verifiedCount = items.filter((i) => i.status === "verified").length;
  const needsReviewCount = items.filter(
    (i) => i.status === "needs_review"
  ).length;
  const blockedCount = items.filter((i) => i.status === "blocked").length;
  const naCount = items.filter((i) => i.status === "not_applicable").length;
  const notAssessedCount = 32 - (verifiedCount + needsReviewCount + blockedCount + naCount);

  const setItemStatus = (id: string, status: ItemStatus) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  return (
    <div className="block w-full max-w-[1240px] font-[family-name:var(--font-inter)] lg:hidden">
      {/* 5-COUNTS METRIC CARD */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_4px_25px_rgba(15,23,42,0.05)] sm:p-6">
        {/* CARD HEADER */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="!font-[family-name:var(--font-jakarta)] text-xs font-bold text-[#091127] sm:text-sm">
              Readiness status
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-2.5 py-0.5 text-[10px] font-semibold text-purple-700">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
              Working document
            </span>
          </div>

          <span className="text-[10px] text-slate-400 sm:text-[11px]">
            Generated on <span className="font-mono text-slate-600">[export_date]</span> &middot; template v1.0
          </span>
        </div>

        {/* METRICS GRID */}
        <div className="grid grid-cols-3 gap-y-5 gap-x-2 pt-5 pb-4 text-center">
          {/* VERIFIED */}
          <div className="flex flex-col items-center">
            <span className="!font-[family-name:var(--font-jakarta)] text-2xl font-extrabold text-[#16a34a] sm:text-3xl">
              {verifiedCount}
            </span>
            <span className="mt-1 text-[10px] font-medium leading-tight text-slate-500 sm:text-[11px]">
              Verified <br /> against source
            </span>
          </div>

          {/* NEEDS REVIEW */}
          <div className="flex flex-col items-center">
            <span className="!font-[family-name:var(--font-jakarta)] text-2xl font-extrabold text-[#d97706] sm:text-3xl">
              {needsReviewCount}
            </span>
            <span className="mt-1 text-[10px] font-medium leading-tight text-slate-500 sm:text-[11px]">
              Needs <br /> review
            </span>
          </div>

          {/* BLOCKED */}
          <div className="flex flex-col items-center">
            <span className="!font-[family-name:var(--font-jakarta)] text-2xl font-extrabold text-[#e11d48] sm:text-3xl">
              {blockedCount}
            </span>
            <span className="mt-1 text-[10px] font-medium leading-tight text-slate-500 sm:text-[11px]">
              Blocked
            </span>
          </div>

          {/* NOT APPLICABLE */}
          <div className="flex flex-col items-center">
            <span className="!font-[family-name:var(--font-jakarta)] text-2xl font-extrabold text-slate-700 sm:text-3xl">
              {naCount}
            </span>
            <span className="mt-1 text-[10px] font-medium leading-tight text-slate-500 sm:text-[11px]">
              Not <br /> applicable
            </span>
          </div>

          {/* NOT ASSESSED */}
          <div className="flex flex-col items-center">
            <span className="!font-[family-name:var(--font-jakarta)] text-2xl font-extrabold text-slate-700 sm:text-3xl">
              {notAssessedCount}
            </span>
            <span className="mt-1 text-[10px] font-medium leading-tight text-slate-500 sm:text-[11px]">
              Not <br /> assessed
            </span>
          </div>
        </div>

        {/* REVIEW SUMMARY BAR */}
        <div className="mt-3 border-t border-slate-100 pt-3 text-[10px] text-slate-500 sm:text-[11px]">
          <strong className="font-semibold text-slate-700">
            {totalAssessedInD1} of 32 items reviewed:
          </strong>{" "}
          Verified {verifiedCount} &middot; Needs review {needsReviewCount} &middot; Blocked {blockedCount} &middot; Not applicable {naCount} &middot; Not assessed {notAssessedCount}.
        </div>
      </div>

      {/* AMBER PROGRESS WARNING BANNER */}
      <div className="mt-3.5 rounded-xl border border-amber-200/80 bg-[#fffbeb] p-3.5 text-left text-[11px] leading-relaxed text-[#92400e] shadow-sm">
        <strong className="font-bold text-[#78350f]">
          This is a progress indicator, not a readiness score.
        </strong>{" "}
        It shows how many items have been given any status &mdash; it does not weight them, rank them or imply that reviewed means ready.
      </div>

      {/* DOMAIN HORIZONTAL TABS */}
      <div className="no-scrollbar mt-6 flex w-full gap-2 overflow-x-auto pb-2">
        {domainTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                isActive
                  ? "border border-[#1D70F5] bg-blue-50 text-[#1D70F5] shadow-sm"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* DOMAIN 1 CHECKLIST CARD */}
      <div className="mt-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_4px_25px_rgba(15,23,42,0.04)] sm:p-6 text-left">
        {/* DOMAIN 1 HEADER */}
        <div className="border-b border-slate-100 pb-4">
          <h3 className="!font-[family-name:var(--font-jakarta)] !m-0 text-sm font-extrabold text-[#091127] sm:text-base">
            Domain 1 &middot; Scope &amp; operating context
          </h3>
          <p className="!m-0 mt-1 text-xs text-slate-500">
            Establish what is being evaluated before measuring it.
          </p>
        </div>

        {/* DOMAIN 1 PROMPT ITEMS */}
        <div className="divide-y divide-slate-100">
          {items.map((item) => (
            <div key={item.id} className="py-4 first:pt-4 last:pb-1">
              <h4 className="!font-[family-name:var(--font-jakarta)] !m-0 text-xs font-bold leading-snug text-[#091127] sm:text-[13px]">
                {item.title}
              </h4>

              <div className="mt-1.5 flex flex-wrap items-center gap-x-2 text-[10px] text-slate-500 sm:text-[11px]">
                <span>
                  Source / handoff: <strong className="font-semibold text-slate-700">{item.source}</strong>
                </span>
                <span>&middot;</span>
                <span>
                  Evidence: <span className="text-slate-600">{item.evidence}</span>
                </span>
              </div>

              {/* BOUNDARY WARNING (ITEM 4) */}
              {item.boundary && (
                <div className="mt-2.5 rounded-lg border border-rose-200/80 bg-[#fff1f2] px-3 py-2 text-[10px] leading-relaxed text-[#9f1239] sm:text-[11px]">
                  <strong className="font-bold text-[#881337]">Boundary:</strong>{" "}
                  An assumption circulating with facts becomes a fact in thirty-three seconds.
                </div>
              )}

              {/* STATUS TOGGLE BUTTONS */}
              <div className="mt-3 flex flex-wrap items-center gap-1.5 sm:gap-2">
                {(
                  [
                    { key: "not_assessed", label: "Not assessed" },
                    { key: "verified", label: "Verified" },
                    { key: "needs_review", label: "Needs review" },
                    { key: "blocked", label: "Blocked" },
                    { key: "not_applicable", label: "Not applicable" },
                  ] as const
                ).map((btn) => {
                  const isSelected = item.status === btn.key;
                  return (
                    <button
                      key={btn.key}
                      type="button"
                      onClick={() => setItemStatus(item.id, btn.key)}
                      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold transition sm:text-xs ${
                        isSelected
                          ? "border border-slate-900 bg-slate-900 text-white shadow-sm"
                          : "border border-slate-200 bg-slate-50/70 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {btn.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
