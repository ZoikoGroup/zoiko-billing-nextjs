"use client";

import React from "react";

const positionItems = [
  {
    icon: "+",
    title: "Issued amount",
    detail: "2 issued invoices · no drafts included",
    amount: "£26,688.00",
    type: "plus",
  },
  {
    icon: "−",
    title: "Credit amount",
    detail: "CN-UK-2026-0061 · issued credit note",
    amount: "£4,120.00",
    type: "minus",
  },
  {
    icon: "−",
    title: "Allocated payments",
    detail: "PMT-88A41C · settled, allocated",
    amount: "£12,496.00",
    type: "minus",
  },
  {
    icon: "!",
    title: "Not deducted",
    detail: "1 unmatched receipt £1,100.00 · not allocated",
    amount: "£0.00",
    type: "warning",
  },
];

const calculationRows = [
  {
    element: "Issued amount",
    treatment: "Current issued documents and supported debit relationships.",
    boundary: "No draft amounts.",
  },
  {
    element: "Credit amount",
    treatment: "Issued credit notes and approved correction relationships.",
    boundary: "A credit is not automatically a cash refund.",
  },
  {
    element: "Payment amount",
    treatment: "Verified payment records with status and currency.",
    boundary: "Initiated or failed payment is not settled.",
  },
  {
    element: "Allocated amount",
    treatment: "Current allocations and reversals, by document.",
    boundary: "An unmatched payment does not close an invoice.",
  },
  {
    element: "Remaining amount",
    treatment: "Derived from current approved relationships, as of a timestamp.",
    boundary: "Currencies are not combined without an explicit method.",
  },
  {
    element: "Aging",
    treatment: "Derived from the due date and approved operational bands.",
    boundary: "Not a credit score or a legal conclusion.",
  },
  {
    element: "Customer total",
    treatment: "Aggregate by entity and currency, keeping document drill-down.",
    boundary: "Disputes, holds and stale data are never hidden.",
  },
];

const agingBands = [
  {
    title: "Current",
    amount: "£128,410",
    description: "Not yet due under current terms.",
  },
  {
    title: "1–30 days",
    amount: "£38,875",
    description: "Past due date within the first band.",
  },
  {
    title: "31–60 days",
    amount: "£41,205",
    description: "Second operational band.",
  },
  {
    title: "61–90 days",
    amount: "£18,780",
    description: "Third operational band.",
  },
  {
    title: "Disputed / held",
    amount: "£11,420",
    description: "Shown separately, not aged into the bands.",
  },
];

export default function Position() {
  return (
    <section className="w-full bg-[#f5f7f6] dark:bg-slate-950">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-4
          py-12
          sm:px-6
          md:px-8
          lg:px-12
          lg:py-24
          xl:px-28
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[1220px]
            flex-col
            gap-9
            lg:px-12
          "
        >
          {/* =====================================================
              HEADER
          ====================================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-8
              lg:flex-row
              lg:items-end
              lg:gap-16
            "
          >
            {/* LEFT HEADER */}
            <div
              className="
                flex
                w-full
                flex-1
                flex-col
                items-start
                gap-5
                lg:pb-6
              "
            >
              {/* Label */}
              <div className="flex h-4 items-center">
                <div className="h-0.5 w-5 rounded-sm bg-gradient-to-r from-cyan-500 to-sky-600" />

                <span className="ml-[10px] text-xs font-medium uppercase leading-4 tracking-wider text-sky-600 dark:text-sky-400">
                  Current position
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
                  max-w-[638px]
                  text-3xl
                  font-medium
                  leading-[1.12]
                  text-sky-950
                  sm:text-4xl
                  lg:text-5xl
                  dark:text-white
                "
              >
                See the current
                <br />
                receivable position
                <br />
                behind every next
                <br />
                action.
              </h2>
            </div>

            {/* RIGHT HEADER */}
            <div className="w-full max-w-[529px]">
              <p className="text-sm font-normal leading-7 text-slate-600 sm:text-base dark:text-slate-300">
                A remaining amount is a derivation, not a stored number. Every
                element of it can be opened and checked.
              </p>
            </div>
          </div>

          {/* =====================================================
              MAIN TWO COLUMN AREA
          ====================================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-10
              pt-2
              lg:gap-16
              lg:pt-6
              xl:flex-row
              xl:items-start
            "
          >
            {/* ===================================================
                LEFT — PRODUCT VIEW
            ==================================================== */}
            <div className="flex w-full flex-col gap-3 xl:w-1/2">
              {/* Product View Label */}
              <div className="flex items-center">
                <div
                  className="
                    flex
                    h-7
                    items-center
                    rounded-full
                    border
                    border-emerald-200
                    bg-white/70
                    px-3
                    dark:border-emerald-800
                    dark:bg-slate-900/70
                  "
                >
                  <span className="mr-2 h-[5px] w-[5px] rounded-sm bg-sky-600 dark:bg-sky-400" />

                  <span className="text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
                    Illustrative product view
                  </span>
                </div>
              </div>

              {/* Product Card */}
              <div
                className="
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-zinc-200
                  bg-white
                  shadow-[0px_4px_14px_0px_rgba(14,33,27,0.04)]
                  dark:border-slate-700
                  dark:bg-slate-900
                "
              >
                {/* Product Top Bar */}
                <div
                  className="
                    flex
                    min-h-[57px]
                    flex-col
                    gap-3
                    border-b
                    border-zinc-200
                    bg-[#f5f7f6]
                    px-4
                    py-3.5
                    sm:flex-row
                    sm:flex-wrap
                    sm:items-center
                    dark:border-slate-700
                    dark:bg-slate-800
                  "
                >
                  <div className="h-2 w-2 shrink-0 rounded-sm bg-sky-600 dark:bg-sky-400" />

                  <span className="text-[11px] font-normal uppercase leading-4 tracking-wide text-slate-600 dark:text-slate-300">
                    Position · Northlane Consulting · GBP
                  </span>

                  <div className="sm:ml-auto">
                    <div
                      className="
                        flex
                        h-7
                        items-center
                        rounded-full
                        border
                        border-orange-200
                        bg-orange-50
                        px-3
                        dark:border-orange-800
                        dark:bg-orange-950/30
                      "
                    >
                      <span className="mr-2 text-xs text-orange-600 dark:text-orange-400">
                        •
                      </span>

                      <span className="text-[10px] font-medium uppercase leading-4 tracking-wide text-orange-600 dark:text-orange-400">
                        Partially paid
                      </span>
                    </div>
                  </div>
                </div>

                {/* Position Items */}
                {positionItems.map((item) => (
                  <div
                    key={item.title}
                    className="
                      flex
                      min-h-[68px]
                      items-center
                      gap-3
                      border-b
                      border-gray-200
                      px-4
                      py-3
                      dark:border-slate-700
                    "
                  >
                    {/* Icon */}
                    <div
                      className={`
                        flex
                        h-6
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        border
                        ${
                          item.type === "minus"
                            ? "border-cyan-200 bg-cyan-50 dark:border-cyan-800 dark:bg-cyan-950/30"
                            : "border-slate-300 bg-[#f5f7f6] dark:border-slate-600 dark:bg-slate-800"
                        }
                      `}
                    >
                      <span
                        className={`
                          text-xs
                          font-semibold
                          ${
                            item.type === "minus"
                              ? "text-cyan-600 dark:text-cyan-400"
                              : "text-sky-600 dark:text-sky-400"
                          }
                        `}
                      >
                        {item.icon}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-normal leading-6 text-sky-950 dark:text-white">
                        {item.title}
                      </p>

                      <p className="truncate text-[10px] font-normal leading-4 text-sky-600 dark:text-sky-400">
                        {item.detail}
                      </p>
                    </div>

                    {/* Amount */}
                    <span className="shrink-0 text-xs font-normal leading-6 text-sky-950 sm:text-sm dark:text-white">
                      {item.amount}
                    </span>
                  </div>
                ))}

                {/* Remaining Amount */}
                <div
                  className="
                    flex
                    min-h-[80px]
                    items-center
                    gap-3
                    border-t-2
                    border-sky-950
                    bg-[#f9faf9]
                    px-4
                    py-3
                    dark:border-sky-400
                    dark:bg-slate-800
                  "
                >
                  <div className="flex h-6 w-5 shrink-0 items-center justify-center rounded-md border border-slate-300 bg-[#f5f7f6] dark:border-slate-600 dark:bg-slate-700">
                    <span className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                      =
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-normal leading-6 text-sky-950 dark:text-white">
                      Remaining amount
                    </p>

                    <p className="text-[10px] font-normal leading-4 text-sky-600 dark:text-sky-400">
                      Zoiko Ltd (UK) · GBP only
                    </p>
                  </div>

                  <span className="shrink-0 text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                    £10,072.00
                  </span>
                </div>

                {/* Footer */}
                <div className="border-t border-zinc-200 bg-[#f5f7f6] px-4 py-3.5 dark:border-slate-700 dark:bg-slate-800">
                  <p className="text-[9px] font-normal leading-4 text-slate-600 dark:text-slate-300">
                    As of 02 Aug 2026 11:40 UTC · sources current · 1
                    reconciliation exception open
                  </p>
                </div>
              </div>

              {/* Product Note */}
              <p className="text-[9px] font-normal uppercase leading-5 tracking-wide text-sky-600 dark:text-sky-400">
                An unmatched payment never closes an invoice, and an initiated
                or failed payment is never treated as settled.
              </p>
            </div>

            {/* ===================================================
                RIGHT — CALCULATION
            ==================================================== */}
            <div className="flex w-full flex-col gap-1.5 xl:w-1/2">
              <h3 className="text-lg font-semibold leading-6 text-sky-950 dark:text-white">
                What goes into the calculation
              </h3>

              <p className="max-w-[480px] text-sm font-normal leading-7 text-slate-600 dark:text-slate-300">
                Seven elements, each with a boundary on what it may and may not
                do.
              </p>

              {/* Table */}
              <div
                className="
                  mt-3.5
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-zinc-200
                  bg-white
                  dark:border-slate-700
                  dark:bg-slate-900
                "
              >
                {/* Table Header */}
                <div className="hidden grid-cols-[112px_minmax(0,1fr)_192px] border-b border-zinc-200 bg-[#fafbfa] md:grid dark:border-slate-700 dark:bg-slate-800">
                  <div className="px-3.5 py-2">
                    <span className="text-[9px] font-medium uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
                      Element
                    </span>
                  </div>

                  <div className="px-3.5 py-2">
                    <span className="text-[9px] font-medium uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
                      Required treatment
                    </span>
                  </div>

                  <div className="px-3.5 py-2">
                    <span className="text-[9px] font-medium uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
                      Boundary
                    </span>
                  </div>
                </div>

                {/* Table Rows */}
                {calculationRows.map((row, index) => (
                  <div
                    key={row.element}
                    className={`
                      grid
                      grid-cols-1
                      md:grid-cols-[112px_minmax(0,1fr)_192px]
                      ${
                        index !== calculationRows.length - 1
                          ? "border-b border-gray-200 dark:border-slate-700"
                          : ""
                      }
                    `}
                  >
                    {/* Mobile Label */}
                    <div className="bg-[#fafbfa] px-3.5 pb-1 pt-3 md:hidden dark:bg-slate-800">
                      <span className="text-[9px] font-medium uppercase tracking-wide text-sky-600 dark:text-sky-400">
                        Element
                      </span>
                    </div>

                    {/* Element */}
                    <div className="px-3.5 py-2.5 md:py-4">
                      <span className="text-sm font-normal leading-5 text-sky-950 dark:text-white">
                        {row.element}
                      </span>
                    </div>

                    {/* Mobile Label */}
                    <div className="bg-[#fafbfa] px-3.5 pb-1 pt-2 md:hidden dark:bg-slate-800">
                      <span className="text-[9px] font-medium uppercase tracking-wide text-sky-600 dark:text-sky-400">
                        Required treatment
                      </span>
                    </div>

                    {/* Treatment */}
                    <div className="px-3.5 py-2.5 md:py-4">
                      <span className="text-sm font-normal leading-5 text-sky-950 dark:text-white">
                        {row.treatment}
                      </span>
                    </div>

                    {/* Mobile Label */}
                    <div className="bg-[#fafbfa] px-3.5 pb-1 pt-2 md:hidden dark:bg-slate-800">
                      <span className="text-[9px] font-medium uppercase tracking-wide text-sky-600 dark:text-sky-400">
                        Boundary
                      </span>
                    </div>

                    {/* Boundary */}
                    <div className="bg-[#f8f9f8] px-3.5 py-2.5 md:py-4 dark:bg-slate-800">
                      <span className="text-sm font-normal leading-5 text-orange-600 dark:text-orange-400">
                        {row.boundary}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =====================================================
              AGING LABEL
          ====================================================== */}
          <div className="flex h-9 items-center">
            <div className="h-0.5 w-5 rounded-sm bg-gradient-to-r from-cyan-500 to-sky-600" />

            <span className="ml-[10px] text-xs font-medium uppercase leading-4 tracking-wider text-sky-600 dark:text-sky-400">
              Aging bands · GBP · Zoiko Ltd (UK)
            </span>
          </div>

          {/* =====================================================
              AGING BANDS
          ====================================================== */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-px
              overflow-hidden
              rounded-2xl
              border
              border-zinc-200
              bg-zinc-200
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-5
              dark:border-slate-700
              dark:bg-slate-700
            "
          >
            {agingBands.map((band) => (
              <div
                key={band.title}
                className="
                  flex
                  min-h-[154px]
                  flex-col
                  items-start
                  bg-white
                  px-5
                  py-5
                  dark:bg-slate-900
                "
              >
                <span className="text-[9px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
                  {band.title}
                </span>

                <span className="mt-1 text-base font-semibold leading-7 text-sky-950 dark:text-white">
                  {band.amount}
                </span>

                <p className="mt-1.5 text-xs font-normal leading-5 text-slate-600 dark:text-slate-300">
                  {band.description}
                </p>
              </div>
            ))}
          </div>

          {/* =====================================================
              AGING BOUNDARY
          ====================================================== */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-sky-500
              bg-[#eef1ef]
              px-5
              py-7
              sm:px-7
              sm:py-9
              dark:bg-slate-800
            "
          >
            <span className="text-[9px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
              Aging boundary
            </span>

            <p className="mt-2 max-w-[800px] text-sm font-normal leading-7 text-sky-950 sm:text-base dark:text-slate-100">
              Aging bands support workflow prioritisation. They do not
              determine legal status, collectibility or customer intent, and
              currencies are never aggregated without explicit conversion
              context.
            </p>
          </div>

          {/* =====================================================
              CTA
          ====================================================== */}
          <div className="flex w-full justify-center">
            <button
              type="button"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                border
                border-sky-950
                bg-sky-950
                px-5
                py-2.5
                text-center
                text-sm
                font-normal
                leading-6
                text-white
                transition
                hover:bg-sky-900
                dark:border-sky-400
                dark:bg-sky-400
                dark:text-slate-950
                dark:hover:bg-sky-300
              "
            >
              Explore Outstanding Balances
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}