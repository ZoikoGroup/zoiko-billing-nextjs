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
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-start
            gap-3.5
          "
        >
          {/* EYEBROW */}
          <div className="flex items-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#7890b2]

                sm:text-xs
                sm:tracking-[0.18em]
              "
            >
              Roles, approvals &amp; segregation of duties
            </span>
          </div>

          {/* HEADING */}
          <div className="w-full">
            <h2
              className="
                !m-0
                w-full
                max-w-[900px]
                !text-[30px]
                !font-bold
                !leading-[1.2]
                !tracking-[-0.025em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              Creating a document and approving it are different jobs.
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="w-full max-w-[686px]">
            <p
              className="
                !m-0
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              The matrix below is illustrative role architecture — not a claim
              that every plan ships these exact role names.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              mt-6
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            <div className="w-full overflow-x-auto">
              <div className="min-w-[1264px]">
                {/* HEADER */}
                <div className="flex bg-[#fafbfc]">
                  {columns.map((column) => (
                    <div
                      key={column.label}
                      className={`
                        ${column.width}
                        shrink-0
                        border-b
                        border-[#dfe5ee]
                        px-4
                        py-3.5
                      `}
                    >
                      <span
                        className="
                          text-xs
                          font-bold
                          uppercase
                          leading-4
                          tracking-wide
                          text-[#7890b2]
                        "
                      >
                        {column.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* ROWS */}
                <div>
                  {rows.map((row, rowIndex) => (
                    <div
                      key={row.decision}
                      className={`
                        flex
                        ${
                          rowIndex !== rows.length - 1
                            ? "border-b border-[#edf0f4]"
                            : ""
                        }
                      `}
                    >
                      {/* DECISION */}
                      <div className="w-[288px] shrink-0 px-4 py-3.5">
                        <span
                          className="
                            text-sm
                            font-semibold
                            leading-5
                            text-[#091127]
                          "
                        >
                          {row.decision}
                        </span>
                      </div>

                      {/* AR ANALYST */}
                      <div className="w-[144px] shrink-0 px-4 py-3.5">
                        <span
                          className="
                            text-sm
                            font-normal
                            leading-5
                            text-[#5d7192]
                          "
                        >
                          {row.values[0]}
                        </span>
                      </div>

                      {/* AR MANAGER */}
                      <div className="w-[160px] shrink-0 px-4 py-3.5">
                        <span
                          className="
                            text-sm
                            font-normal
                            leading-5
                            text-[#5d7192]
                          "
                        >
                          {row.values[1]}
                        </span>
                      </div>

                      {/* FINANCE APPROVER */}
                      <div className="w-[288px] shrink-0 px-4 py-3.5">
                        <span
                          className="
                            text-sm
                            font-normal
                            leading-5
                            text-[#5d7192]
                          "
                        >
                          {row.values[2]}
                        </span>
                      </div>

                      {/* BILLING ADMIN */}
                      <div className="w-[160px] shrink-0 px-4 py-3.5">
                        <span
                          className="
                            text-sm
                            font-normal
                            leading-5
                            text-[#5d7192]
                          "
                        >
                          {row.values[3]}
                        </span>
                      </div>

                      {/* AUDITOR */}
                      <div className="w-[224px] shrink-0 px-4 py-3.5">
                        <span
                          className="
                            text-sm
                            font-normal
                            leading-5
                            text-[#5d7192]
                          "
                        >
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
      </div>
    </section>
  );
}