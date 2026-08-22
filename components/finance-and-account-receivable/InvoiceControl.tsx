"use client";

import React from "react";

const rows = [
  {
    object: "Invoice draft",
    control:
      "Draft state with an owner and a source. Approval required where configured.",
    evidence: "Actor, source, approval route",
  },
  {
    object: "Issue",
    control:
      "Authoritative issued state with timestamp, following the product's history contract.",
    evidence: "Issue time, approver, version",
  },
  {
    object: "Credit note",
    control:
      "A separate corrective document. Reason required; approval where policy demands it.",
    evidence: "Reason, approver, linked invoice",
  },
  {
    object: "Adjustment",
    control: "Controlled line, charge or balance change.",
    evidence: "Reason, actor, before and after state",
  },
  {
    object: "Correction",
    control:
      "Versioned or corrected per the approved product model — never a silent overwrite.",
    evidence: "Full version history",
  },
  {
    object: "Delivery",
    control:
      "Delivery state is distinct from issue state.",
    evidence: "Route, attempts, failure reason",
    delivery: true,
  },
  {
    object: "Customer dispute",
    control:
      "A dispute changes follow-up behavior. It does not erase invoice evidence.",
    evidence: "Dispute reason, status, resolution",
  },
  {
    object: "Export",
    control: "Permission-controlled and privacy-safe.",
    evidence: "Requester, purpose, as-of state",
  },
];

export default function InvoiceControl() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50 px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-7">
        {/* Eyebrow */}
        <div className="relative flex h-6 w-full max-w-[400px] items-center">
          <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Invoice, credit &amp; adjustment control
          </span>

          <span className="ml-4 h-px w-6 shrink-0 bg-blue-600 opacity-50" />
        </div>

        {/* Heading */}
        <div className="w-full pb-[0.61px]">
          <h2 className="m-0 text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
            Issued records are corrected, never quietly rewritten.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[686.38px] pb-[0.59px]">
          <p className="m-0 text-base font-normal leading-6 text-slate-600">
            Each object below has a controlling authority, a reason
            requirement, and an evidence trail.
          </p>
        </div>

        {/* Table Container */}
        <div className="mt-6 w-full overflow-hidden rounded-2xl bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200">
          {/* Intro */}
          <div className="border-b border-gray-200 bg-gray-50 px-5 py-4 sm:px-6">
            <p className="m-0 text-sm font-normal leading-5 text-slate-600">
              Document control model. Delivery state is tracked separately
              from issue state throughout.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block">
            {/* Header */}
            <div className="grid grid-cols-[208px_minmax(0,1fr)_320px] border-b border-gray-200 bg-gray-50">
              <div className="px-4 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                  Object or action
                </span>
              </div>

              <div className="px-4 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                  Control
                </span>
              </div>

              <div className="px-4 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                  Evidence retained
                </span>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, index) => (
              <div
                key={row.object}
                className={`grid grid-cols-[208px_minmax(0,1fr)_320px] ${
                  index !== rows.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                {/* Object */}
                <div className="px-4 py-3.5">
                  <span className="text-sm font-semibold leading-5 text-slate-900">
                    {row.object}
                  </span>
                </div>

                {/* Control */}
                <div className="flex flex-wrap items-center gap-1 px-4 py-3.5">
                  <span className="text-sm font-normal leading-5 text-slate-600">
                    {row.control}
                  </span>

                  {row.delivery && (
                    <>
                      <span className="inline-flex min-h-6 items-center gap-2 rounded-md bg-orange-50 px-2.5 py-1 outline outline-1 outline-offset-[-1px] outline-orange-200">
                        <span className="size-1.5 shrink-0 rounded-sm bg-orange-600 opacity-75" />

                        <span className="text-xs font-semibold leading-4 text-orange-600">
                          Delivery failed
                        </span>
                      </span>

                      <span className="text-sm font-normal leading-5 text-slate-600">
                        is its own outcome.
                      </span>
                    </>
                  )}
                </div>

                {/* Evidence */}
                <div className="px-4 py-3.5">
                  <span className="text-sm font-normal leading-5 text-slate-600">
                    {row.evidence}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Table */}
          <div className="md:hidden">
            {rows.map((row, index) => (
              <div
                key={row.object}
                className={`flex flex-col gap-4 px-5 py-5 ${
                  index !== rows.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                {/* Object */}
                <div>
                  <p className="m-0 text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                    Object or action
                  </p>

                  <p className="m-0 mt-1 text-sm font-semibold leading-5 text-slate-900">
                    {row.object}
                  </p>
                </div>

                {/* Control */}
                <div>
                  <p className="m-0 text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                    Control
                  </p>

                  <div className="mt-1 flex flex-wrap items-center gap-1">
                    <span className="text-sm font-normal leading-5 text-slate-600">
                      {row.control}
                    </span>

                    {row.delivery && (
                      <>
                        <span className="inline-flex min-h-6 items-center gap-2 rounded-md bg-orange-50 px-2.5 py-1 outline outline-1 outline-offset-[-1px] outline-orange-200">
                          <span className="size-1.5 shrink-0 rounded-sm bg-orange-600 opacity-75" />

                          <span className="text-xs font-semibold leading-4 text-orange-600">
                            Delivery failed
                          </span>
                        </span>

                        <span className="text-sm font-normal leading-5 text-slate-600">
                          is its own outcome.
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Evidence */}
                <div>
                  <p className="m-0 text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                    Evidence retained
                  </p>

                  <p className="m-0 mt-1 text-sm font-normal leading-5 text-slate-600">
                    {row.evidence}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}