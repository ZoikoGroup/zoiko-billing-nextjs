"use client";

import React from "react";

const columns = [
  { label: "Decision", width: "w-[288px]" },
  { label: "AR Analyst", width: "w-[144px]" },
  { label: "AR Manager", width: "w-[160px]" },
  { label: "Finance Approver", width: "w-[288px]" },
  { label: "Billing Admin", width: "w-[160px]" },
  { label: "Auditor", width: "w-[224px]" },
];

const rows = [
  {
    decision: "View assigned balances",
    values: ["Yes", "Yes", "Yes", "Yes", "Read only"],
  },
  {
    decision: "Send an approved reminder",
    values: ["Policy-based", "Yes", "Optional", "Configures policy", "No"],
  },
  {
    decision: "Set or clear a hold",
    values: ["Limited or none", "Yes", "Yes", "Policy admin", "No"],
  },
  {
    decision: "Approve a credit note or adjustment",
    values: ["No", "Optional", "Yes", "Configures roles", "No"],
  },
  {
    decision: "Allocate or reconcile a payment",
    values: ["Role-based", "Role-based", "Review", "Configures roles", "No"],
  },
  {
    decision: "Change aging or workflow policy",
    values: [
      "No",
      "Recommend only",
      "Approve where the model requires",
      "Yes — versioned",
      "No",
    ],
  },
  {
    decision: "Change customer billing details",
    values: [
      "No",
      "Restricted",
      "Restricted",
      "Yes — with history",
      "No",
    ],
  },
  {
    decision: "Export governed AR data",
    values: [
      "Limited",
      "Yes",
      "Yes",
      "Yes",
      "Read or export if authorized",
    ],
  },
];

export default function RolesMatrix() {
  return (
    <section className="w-full border-t border-gray-200 bg-white px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-7">
        {/* Eyebrow */}
        <div className="relative flex h-6 w-full max-w-[420px] items-center">
          <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Roles, approvals &amp; segregation of duties
          </span>

          <span className="ml-4 h-px w-6 shrink-0 bg-blue-600 opacity-50" />
        </div>

        {/* Heading */}
        <div className="w-full pb-[0.61px]">
          <h2 className="m-0 text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
            Creating a document and approving it are different jobs.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[686.38px]">
          <p className="m-0 text-base font-normal leading-6 text-slate-600">
            The matrix below is illustrative role architecture — not a claim
            that every plan ships these exact role names.
          </p>
        </div>

        {/* Table */}
        <div className="mt-6 w-full overflow-hidden rounded-2xl bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200">
          <div className="w-full overflow-x-auto">
            <div className="min-w-[1264px]">
              {/* Header */}
              <div className="flex">
                {columns.map((column) => (
                  <div
                    key={column.label}
                    className={`${column.width} shrink-0 border-b border-gray-200 bg-gray-50 px-4 py-3`}
                  >
                    <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                      {column.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Rows */}
              <div>
                {rows.map((row, rowIndex) => (
                  <div
                    key={row.decision}
                    className={`flex ${
                      rowIndex !== rows.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    {/* Decision */}
                    <div className="w-[288px] shrink-0 px-4 py-3.5">
                      <span className="text-sm font-semibold leading-5 text-slate-900">
                        {row.decision}
                      </span>
                    </div>

                    {/* AR Analyst */}
                    <div className="w-[144px] shrink-0 px-4 py-3.5">
                      <span className="text-sm font-normal leading-5 text-slate-600">
                        {row.values[0]}
                      </span>
                    </div>

                    {/* AR Manager */}
                    <div className="w-[160px] shrink-0 px-4 py-3.5">
                      <span className="text-sm font-normal leading-5 text-slate-600">
                        {row.values[1]}
                      </span>
                    </div>

                    {/* Finance Approver */}
                    <div className="w-[288px] shrink-0 px-4 py-3.5">
                      <span className="text-sm font-normal leading-5 text-slate-600">
                        {row.values[2]}
                      </span>
                    </div>

                    {/* Billing Admin */}
                    <div className="w-[160px] shrink-0 px-4 py-3.5">
                      <span className="text-sm font-normal leading-5 text-slate-600">
                        {row.values[3]}
                      </span>
                    </div>

                    {/* Auditor */}
                    <div className="w-[224px] shrink-0 px-4 py-3.5">
                      <span className="text-sm font-normal leading-5 text-slate-600">
                        {row.values[4]}
                      </span>
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