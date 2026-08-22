"use client";

import React from "react";
import Link from "next/link";

const rows = [
  {
    context: "Multiple entities",
    statement:
      "Teams may evaluate entity-separated billing with shared visibility where approved.",
    boundary: (
      <>
        No universal consolidated accounting claim.{" "}
        <Link
          href="/global-billing"
          className="font-semibold text-blue-600 hover:underline"
        >
          Global Billing
        </Link>
      </>
    ),
  },
  {
    context: "Multiple currencies",
    statement:
      "Currency presentation and operations depend on approved availability.",
    boundary: "No real-time FX or universal settlement claim.",
  },
  {
    context: "Accounting & ERP",
    statement: "Approved integrations can support governed handoffs.",
    boundary: (
      <>
        No generic two-way sync claim.{" "}
        <Link
          href="/integrations"
          className="font-semibold text-blue-600 hover:underline"
        >
          Integrations
        </Link>
      </>
    ),
  },
  {
    context: "CRM",
    statement:
      "Customer and sales context may connect where approved.",
    boundary: "CRM does not become a financial authority by default.",
  },
  {
    context: "Banking & reconciliation",
    statement: "Approved integration routes only.",
    boundary: "No universal bank connectivity.",
  },
  {
    context: "Zoiko One",
    statement:
      "Standalone and integrated deployment are evaluated separately.",
    boundary: (
      <>
        No automatic inclusion or data merge.{" "}
        <Link
          href="/zoiko-billing"
          className="font-semibold text-blue-600 hover:underline"
        >
          Zoiko Billing + Zoiko One
        </Link>
      </>
    ),
  },
];

export default function EntityCurrency() {
  return (
    <section className="w-full border-t border-gray-200 bg-white px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-7">
        {/* Eyebrow */}
        <div className="relative flex h-6 w-full max-w-[384px] items-center">
          <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Multi-entity, currency &amp; integrations
          </span>

          <span className="ml-4 h-px w-6 shrink-0 bg-blue-600 opacity-50" />
        </div>

        {/* Heading */}
        <div className="w-full pb-[0.61px]">
          <h2 className="m-0 text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
            Scoped complexity, with the boundary named each time.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[686.38px]">
          <p className="m-0 text-base font-normal leading-6 text-slate-600">
            Availability depends on plan, provider, jurisdiction and
            configuration. This page qualifies rather than generalizes.
          </p>
        </div>

        {/* Table */}
        <div className="mt-6 w-full overflow-hidden rounded-2xl bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200">
          <div className="w-full overflow-x-auto">
            <div className="min-w-[900px]">
              {/* Header */}
              <div className="grid grid-cols-[208px_minmax(0,588.72px)_minmax(0,1fr)] border-b border-gray-200 bg-gray-50">
                <div className="px-4 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                    Context
                  </span>
                </div>

                <div className="px-4 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                    What this page says
                  </span>
                </div>

                <div className="px-4 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                    Boundary
                  </span>
                </div>
              </div>

              {/* Rows */}
              {rows.map((row, index) => (
                <div
                  key={row.context}
                  className={`grid grid-cols-[208px_minmax(0,588.72px)_minmax(0,1fr)] ${
                    index !== rows.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  {/* Context */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-slate-900">
                      {row.context}
                    </span>
                  </div>

                  {/* What this page says */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-slate-600">
                      {row.statement}
                    </span>
                  </div>

                  {/* Boundary */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-slate-600">
                      {row.boundary}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}