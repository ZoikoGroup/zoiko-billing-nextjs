"use client";

import React from "react";

const rows = [
  {
    question: "How much was billed?",
    proof: "A defined issued or billed source, with the period stated",
  },
  {
    question: "How much was collected?",
    proof:
      "A defined payment and reconciliation source, with the period stated",
  },
  {
    question: "What is outstanding?",
    proof: "The current open-balance definition with an as-of timestamp",
  },
  {
    question: "What is overdue?",
    proof: "The aging and due rule in force, with an as-of timestamp",
  },
  {
    question: "What is disputed or on hold?",
    proof: "An explicit status definition, not an inferred one",
  },
  {
    question: "What changed?",
    proof:
      "Event and history evidence for invoices, credits, adjustments, allocations and policies",
  },
  {
    question: "Who approved it?",
    proof: "Approval and role evidence where applicable",
  },
  {
    question: "Can I export it?",
    proof:
      "Permission, requester, purpose, as-of state and currentness",
  },
];

export default function ReportingAudit() {
  return (
    <section className="w-full border-t border-gray-200 bg-white px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-7">
        {/* Eyebrow */}
        <div className="relative flex h-6 w-full max-w-[384px] items-center">
          <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Reporting, evidence &amp; auditability
          </span>

          <span className="ml-4 h-px w-6 shrink-0 bg-blue-600 opacity-50" />
        </div>

        {/* Heading */}
        <div className="w-full pb-[0.61px]">
          <h2 className="m-0 text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
            A number you cannot open is a number you cannot defend.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[686.38px]">
          <p className="m-0 text-base font-normal leading-6 text-slate-600">
            Every metric names its source, definition, time basis and
            exclusions — the same disclosure attached to the executive
            summary at the top of this page.
          </p>
        </div>

        {/* Table */}
        <div className="mt-6 w-full overflow-hidden rounded-2xl bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200">
          <div className="w-full overflow-x-auto">
            <div className="min-w-[900px]">
              {/* Header */}
              <div className="grid grid-cols-[320px_minmax(0,1fr)] border-b border-gray-200 bg-gray-50">
                <div className="px-4 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                    Question
                  </span>
                </div>

                <div className="px-4 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                    Required proof
                  </span>
                </div>
              </div>

              {/* Rows */}
              {rows.map((row, index) => (
                <div
                  key={row.question}
                  className={`grid grid-cols-[320px_minmax(0,1fr)] ${
                    index !== rows.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-slate-900">
                      {row.question}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-slate-600">
                      {row.proof}
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