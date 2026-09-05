"use client";

import React from "react";
import Link from "next/link";

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
    treatment:
      "Current issued documents and supported debit relationships.",
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
    treatment:
      "Derived from current approved relationships, as of a timestamp.",
    boundary: "Currencies are not combined without an explicit method.",
  },
  {
    element: "Aging",
    treatment: "Derived from the due date and approved operational bands.",
    boundary: "Not a credit score or a legal conclusion.",
  },
  {
    element: "Customer total",
    treatment:
      "Aggregate by entity and currency, keeping document drill-down.",
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
            items-center
            gap-8

            sm:gap-10

            md:gap-11
          "
        >
          {/* =====================================================
              SECTION INTRO
          ====================================================== */}
          <div
            className="
              flex
              w-full
              max-w-[760px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Current position
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[720px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              See the current receivable position behind every next action.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              A remaining amount is a derivation, not a stored number. Every
              element of it can be opened and checked.
            </p>
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

              lg:gap-14
              lg:pt-2

              xl:flex-row
              xl:items-start
            "
          >
            {/* ===================================================
                LEFT — PRODUCT VIEW
            ==================================================== */}
            <div className="flex w-full flex-col gap-3 xl:w-1/2">
              {/* PRODUCT VIEW LABEL */}
              <div className="flex items-center">
                <div
                  className="
                    flex
                    h-7
                    items-center
                    rounded-full
                    border
                    border-[#dfe5ee]
                    bg-white
                    px-3
                  "
                >
                  <span className="mr-2 h-[5px] w-[5px] rounded-sm bg-[#7890b2]" />

                  <span
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Illustrative product view
                  </span>
                </div>
              </div>

              {/* PRODUCT CARD */}
              <div
                className="
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* TOP BAR */}
                <div
                  className="
                    flex
                    min-h-[57px]
                    flex-col
                    gap-3
                    border-b
                    border-[#dfe5ee]
                    bg-[#fafbfc]
                    px-4
                    py-3.5

                    sm:flex-row
                    sm:flex-wrap
                    sm:items-center
                  "
                >
                  <div className="h-2 w-2 shrink-0 rounded-sm bg-[#7890b2]" />

                  <span
                    className="
                      text-[11px]
                      font-normal
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#5d7192]
                    "
                  >
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
                        border-[#e6d7bd]
                        bg-[#fbf7ef]
                        px-3
                      "
                    >
                      <span className="mr-2 text-xs text-[#a17a3e]">•</span>

                      <span
                        className="
                          text-[10px]
                          font-medium
                          uppercase
                          leading-4
                          tracking-wide
                          text-[#a17a3e]
                        "
                      >
                        Partially paid
                      </span>
                    </div>
                  </div>
                </div>

                {/* POSITION ITEMS */}
                {positionItems.map((item) => (
                  <div
                    key={item.title}
                    className="
                      flex
                      min-h-[68px]
                      items-center
                      gap-3
                      border-b
                      border-[#edf0f4]
                      px-4
                      py-3
                    "
                  >
                    {/* ICON */}
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
                            ? "border-[#d5e6eb] bg-[#f3fafb]"
                            : item.type === "warning"
                              ? "border-[#e6d7bd] bg-[#fbf7ef]"
                              : "border-[#dfe5ee] bg-[#f7f8fa]"
                        }
                      `}
                    >
                      <span
                        className={`
                          text-xs
                          font-semibold

                          ${
                            item.type === "minus"
                              ? "text-[#5f96a5]"
                              : item.type === "warning"
                                ? "text-[#a17a3e]"
                                : "text-[#7890b2]"
                          }
                        `}
                      >
                        {item.icon}
                      </span>
                    </div>

                    {/* TEXT */}
                    <div className="min-w-0 flex-1">
                      <p
                        className="
                          !m-0
                          text-sm
                          font-normal
                          leading-6
                          text-[#091127]
                        "
                      >
                        {item.title}
                      </p>

                      <p
                        className="
                          !m-0
                          truncate
                          text-[10px]
                          font-normal
                          leading-4
                          text-[#7890b2]
                        "
                      >
                        {item.detail}
                      </p>
                    </div>

                    {/* AMOUNT */}
                    <span
                      className="
                        shrink-0
                        text-xs
                        font-normal
                        leading-6
                        text-[#091127]

                        sm:text-sm
                      "
                    >
                      {item.amount}
                    </span>
                  </div>
                ))}

                {/* REMAINING AMOUNT */}
                <div
                  className="
                    flex
                    min-h-[80px]
                    items-center
                    gap-3
                    border-t-2
                    border-[#091127]
                    bg-[#fafbfc]
                    px-4
                    py-3
                  "
                >
                  <div
                    className="
                      flex
                      h-6
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-md
                      border
                      border-[#dfe5ee]
                      bg-[#f7f8fa]
                    "
                  >
                    <span className="text-xs font-semibold text-[#7890b2]">
                      =
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-6
                        text-[#091127]
                      "
                    >
                      Remaining amount
                    </p>

                    <p
                      className="
                        !m-0
                        text-[10px]
                        font-normal
                        leading-4
                        text-[#7890b2]
                      "
                    >
                      Zoiko Ltd (UK) · GBP only
                    </p>
                  </div>

                  <span
                    className="
                      shrink-0
                      text-sm
                      font-semibold
                      leading-6
                      text-[#091127]
                    "
                  >
                    £10,072.00
                  </span>
                </div>

                {/* FOOTER */}
                <div
                  className="
                    border-t
                    border-[#dfe5ee]
                    bg-[#fafbfc]
                    px-4
                    py-3.5
                  "
                >
                  <p
                    className="
                      !m-0
                      text-[9px]
                      font-normal
                      leading-4
                      text-[#5d7192]
                    "
                  >
                    As of 02 Aug 2026 11:40 UTC · sources current · 1
                    reconciliation exception open
                  </p>
                </div>
              </div>

              {/* PRODUCT NOTE */}
              <p
                className="
                  !m-0
                  text-[9px]
                  font-normal
                  uppercase
                  leading-5
                  tracking-wide
                  text-[#7890b2]
                "
              >
                An unmatched payment never closes an invoice, and an initiated
                or failed payment is never treated as settled.
              </p>
            </div>

            {/* ===================================================
                RIGHT — CALCULATION
            ==================================================== */}
            <div className="flex w-full flex-col gap-1.5 xl:w-1/2">
              <h3
                className="
                  !m-0
                  text-lg
                  font-semibold
                  leading-6
                  text-[#091127]
                "
              >
                What goes into the calculation
              </h3>

              <p
                className="
                  !m-0
                  max-w-[480px]
                  text-sm
                  font-normal
                  leading-7
                  text-[#5d7192]
                "
              >
                Seven elements, each with a boundary on what it may and may
                not do.
              </p>

              {/* CALCULATION TABLE */}
              <div
                className="
                  mt-3.5
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* TABLE HEADER */}
                <div
                  className="
                    hidden
                    grid-cols-[112px_minmax(0,1fr)_192px]
                    border-b
                    border-[#dfe5ee]
                    bg-[#fafbfc]

                    md:grid
                  "
                >
                  <div className="px-3.5 py-2.5">
                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-wide
                        text-[#7890b2]
                      "
                    >
                      Element
                    </span>
                  </div>

                  <div className="px-3.5 py-2.5">
                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-wide
                        text-[#7890b2]
                      "
                    >
                      Required treatment
                    </span>
                  </div>

                  <div className="px-3.5 py-2.5">
                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-wide
                        text-[#7890b2]
                      "
                    >
                      Boundary
                    </span>
                  </div>
                </div>

                {/* TABLE ROWS */}
                {calculationRows.map((row, index) => (
                  <div
                    key={row.element}
                    className={`
                      grid
                      grid-cols-1

                      md:grid-cols-[112px_minmax(0,1fr)_192px]

                      ${
                        index !== calculationRows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* MOBILE ELEMENT LABEL */}
                    <div
                      className="
                        bg-[#fafbfc]
                        px-3.5
                        pb-1
                        pt-3

                        md:hidden
                      "
                    >
                      <span
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-wide
                          text-[#7890b2]
                        "
                      >
                        Element
                      </span>
                    </div>

                    {/* ELEMENT */}
                    <div className="px-3.5 py-2.5 md:py-4">
                      <span
                        className="
                          text-sm
                          font-normal
                          leading-5
                          text-[#091127]
                        "
                      >
                        {row.element}
                      </span>
                    </div>

                    {/* MOBILE TREATMENT LABEL */}
                    <div
                      className="
                        bg-[#fafbfc]
                        px-3.5
                        pb-1
                        pt-2

                        md:hidden
                      "
                    >
                      <span
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-wide
                          text-[#7890b2]
                        "
                      >
                        Required treatment
                      </span>
                    </div>

                    {/* TREATMENT */}
                    <div className="px-3.5 py-2.5 md:py-4">
                      <span
                        className="
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {row.treatment}
                      </span>
                    </div>

                    {/* MOBILE BOUNDARY LABEL */}
                    <div
                      className="
                        bg-[#fafbfc]
                        px-3.5
                        pb-1
                        pt-2

                        md:hidden
                      "
                    >
                      <span
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-wide
                          text-[#7890b2]
                        "
                      >
                        Boundary
                      </span>
                    </div>

                    {/* BOUNDARY */}
                    <div
                      className="
                        bg-[#f7f8fa]
                        px-3.5
                        py-2.5

                        md:py-4
                      "
                    >
                      <span
                        className="
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
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
          <div className="flex items-center gap-3 self-start">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#7890b2]

                sm:text-xs
                sm:tracking-[0.18em]
              "
            >
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
              border-[#dfe5ee]
              bg-[#dfe5ee]
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              sm:grid-cols-2

              lg:grid-cols-3

              xl:grid-cols-5
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
                "
              >
                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-wide
                    text-[#7890b2]
                  "
                >
                  {band.title}
                </span>

                <span
                  className="
                    mt-1
                    text-base
                    font-semibold
                    leading-7
                    text-[#091127]
                  "
                >
                  {band.amount}
                </span>

                <p
                  className="
                    !m-0
                    mt-1.5
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
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
              border-[#7890b2]
              bg-white
              px-5
              py-7

              sm:px-7
              sm:py-9
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.14em]
                text-[#7890b2]
              "
            >
              Aging boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[800px]
                text-sm
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
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
            <Link
              href="/outstanding-balances"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                border
                border-[#091127]
                bg-[#091127]
                px-5
                py-2.5
                text-center
                text-sm
                font-normal
                leading-6
                !text-white
                transition
                hover:bg-[#17213a]

                sm:text-base
              "
            >
              Explore Outstanding Balances
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}