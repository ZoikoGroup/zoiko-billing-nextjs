"use client";

import React from "react";

type LimitTone =
  | "plan"
  | "public"
  | "usage"
  | "optional"
  | "contract";

type LimitRow = {
  dimension: string;
  value: string;
  tone: LimitTone;
  scope: string;
  behavior: string;
  detail?: string;
  source: string;
};

const limits: LimitRow[] = [
  {
    dimension: "Legal entities",
    value: "Plan-dependent",
    tone: "plan",
    scope: "Count, per account",
    behavior: "Hard limit",
    source: "Limit Registry",
  },
  {
    dimension: "Users & admin roles",
    value: "Plan-dependent",
    tone: "plan",
    scope: "Count, per account",
    behavior: "Hard limit",
    source: "Limit Registry",
  },
  {
    dimension: "Customers & accounts",
    value: "Not public",
    tone: "public",
    scope: "Count, per entity",
    behavior: "Contact sales",
    source: "Needs review",
  },
  {
    dimension: "Invoices & billing documents",
    value: "Usage-dependent",
    tone: "usage",
    scope: "Documents per billing period",
    behavior: "Soft limit, then review",
    detail: "Overage treatment not yet approved",
    source: "Usage Meter Registry",
  },
  {
    dimension: "Transactions",
    value: "Usage-dependent",
    tone: "usage",
    scope: "Transactions per billing period",
    behavior: "Soft limit, then review",
    source: "Usage Meter Registry",
  },
  {
    dimension: "Scheduled & repeat billing objects",
    value: "Plan-dependent",
    tone: "plan",
    scope: "Active schedules per entity",
    behavior: "Hard limit",
    source: "Limit Registry",
  },
  {
    dimension: "Integrations",
    value: "Plan-dependent",
    tone: "plan",
    scope: "Active connections per account",
    behavior: "Blocked beyond limit",
    source: "Integration Registry",
  },
  {
    dimension: "API access",
    value: "Plan-dependent",
    tone: "plan",
    scope: "Requests per period",
    behavior: "Throttled",
    detail: "Rate values not yet public",
    source: "Needs review",
  },
  {
    dimension: "Webhooks",
    value: "Optional",
    tone: "optional",
    scope: "Endpoints per account",
    behavior: "Hard limit",
    source: "Limit Registry",
  },
  {
    dimension: "Data retention & export",
    value: "Contract-dependent",
    tone: "contract",
    scope: "Period, per account",
    behavior: "Governed by agreement",
    source: "Legal",
  },
  {
    dimension: "Environments & sandboxes",
    value: "Plan-dependent",
    tone: "plan",
    scope: "Count, per account",
    behavior: "Hard limit",
    source: "Limit Registry",
  },
  {
    dimension: "Support & implementation entitlement",
    value: "Contract-dependent",
    tone: "contract",
    scope: "Scope, per agreement",
    behavior: "Governed by agreement",
    source: "Support Registry",
  },
];

const toneClasses: Record<LimitTone, string> = {
  plan: "border-gray-200 bg-gray-100 text-blue-600",
  public: "border-gray-200 bg-gray-100 text-slate-500",
  usage: "border-orange-200 bg-orange-50 text-orange-700",
  optional: "border-gray-200 bg-gray-100 text-slate-600",
  contract: "border-gray-200 bg-gray-100 text-slate-600",
};

function StatusBadge({
  value,
  tone,
}: {
  value: string;
  tone: LimitTone;
}) {
  return (
    <span
      className={`inline-flex max-w-full rounded-md border px-2.5 py-px text-xs font-semibold leading-5 ${toneClasses[tone]}`}
    >
      {value}
    </span>
  );
}

export default function Limits() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
          {/* Section label */}
          <div className="flex h-6 items-center gap-2 sm:gap-3">
            <div className="rounded-[5px] border border-blue-100 bg-gray-100 px-1.5 py-0.5">
              <div className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                06
              </div>
            </div>

            <div className="text-xs font-bold uppercase leading-4 tracking-[0.2em] text-slate-500">
              Limits &amp; entitlements
            </div>

            <div className="hidden h-px w-6 bg-slate-500 opacity-50 sm:block" />
          </div>

          {/* Heading */}
          <div className="w-full pb-0.5">
            <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
              Constraints stated in the open, not in footnotes.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[666px]">
            <p className="text-sm font-normal leading-5 text-slate-600 sm:text-base sm:leading-6">
              Where a limit is not public, the page says so. It never
              substitutes the word &quot;unlimited&quot; for an unknown value.
            </p>
          </div>

          {/* Table card */}
          <div className="mt-1 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
            {/* Intro */}
            <div className="border-b border-gray-200 bg-gray-50 px-4 py-4 sm:px-5">
              <p className="text-sm font-normal leading-5 text-slate-600">
                Every limit carries a unit, a scope, and a behavior at the
                boundary. Values resolve from the Limit Registry.
              </p>
            </div>

            {/* Mobile scroll hint */}
            <div className="border-b border-gray-200 bg-white px-4 py-2 text-xs text-slate-500 sm:hidden">
              Swipe horizontally to view all limit details.
            </div>

            {/* Responsive table */}
            <div className="w-full overflow-x-auto">
              <div className="min-w-[1000px]">
                {/* Header */}
                <div className="grid grid-cols-[1.35fr_0.85fr_1.1fr_1.15fr_0.85fr] border-b border-gray-200 bg-gray-50">
                  <div className="px-4 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                    Dimension
                  </div>

                  <div className="px-4 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                    Value or state
                  </div>

                  <div className="px-4 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                    Unit &amp; scope
                  </div>

                  <div className="px-4 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                    Behavior at limit
                  </div>

                  <div className="px-4 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                    Source
                  </div>
                </div>

                {/* Rows */}
                {limits.map((limit, index) => (
                  <div
                    key={limit.dimension}
                    className={`grid grid-cols-[1.35fr_0.85fr_1.1fr_1.15fr_0.85fr] ${
                      index !== limits.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    <div className="px-4 py-3.5">
                      <div className="text-sm font-semibold leading-6 text-slate-900">
                        {limit.dimension}
                      </div>
                    </div>

                    <div className="px-4 py-3.5">
                      <StatusBadge
                        value={limit.value}
                        tone={limit.tone}
                      />
                    </div>

                    <div className="px-4 py-3.5">
                      <p className="text-sm font-normal leading-5 text-slate-600">
                        {limit.scope}
                      </p>
                    </div>

                    <div className="px-4 py-3.5">
                      <p className="text-sm font-normal leading-5 text-slate-600">
                        {limit.behavior}
                      </p>

                      {limit.detail && (
                        <p className="mt-1 text-xs font-normal leading-5 text-slate-500">
                          {limit.detail}
                        </p>
                      )}
                    </div>

                    <div className="px-4 py-3.5">
                      <p className="text-sm font-normal leading-5 text-slate-600">
                        {limit.source}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}