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
    control: "Delivery state is distinct from issue state.",
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
              Invoice, credit &amp; adjustment control
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
              Issued records are corrected, never quietly rewritten.
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
              Each object below has a controlling authority, a reason
              requirement, and an evidence trail.
            </p>
          </div>

          {/* TABLE CONTAINER */}
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
            {/* INTRO */}
            <div
              className="
                border-b
                border-[#dfe5ee]
                bg-[#fafbfc]
                px-5
                py-4

                sm:px-6
              "
            >
              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                Document control model. Delivery state is tracked separately
                from issue state throughout.
              </p>
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div className="grid grid-cols-[208px_minmax(0,1fr)_320px] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
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
                    Object or action
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
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
                    Control
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
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
                    Evidence retained
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.object}
                  className={`
                    grid
                    grid-cols-[208px_minmax(0,1fr)_320px]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* OBJECT */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.object}
                    </span>
                  </div>

                  {/* CONTROL */}
                  <div className="flex flex-wrap items-center gap-1 px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.control}
                    </span>

                    {row.delivery && (
                      <>
                        <span
                          className="
                            inline-flex
                            min-h-6
                            items-center
                            gap-2
                            rounded-md
                            border
                            border-orange-200
                            bg-orange-50
                            px-2.5
                            py-1
                          "
                        >
                          <span className="size-1.5 shrink-0 rounded-sm bg-orange-600 opacity-75" />

                          <span
                            className="
                              text-xs
                              font-semibold
                              leading-4
                              text-orange-600
                            "
                          >
                            Delivery failed
                          </span>
                        </span>

                        <span
                          className="
                            text-sm
                            font-normal
                            leading-5
                            text-[#5d7192]
                          "
                        >
                          is its own outcome.
                        </span>
                      </>
                    )}
                  </div>

                  {/* EVIDENCE */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.evidence}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE TABLE */}
            <div className="md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.object}
                  className={`
                    flex
                    flex-col
                    gap-4
                    px-5
                    py-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* OBJECT */}
                  <div>
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Object or action
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.object}
                    </p>
                  </div>

                  {/* CONTROL */}
                  <div>
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Control
                    </p>

                    <div className="mt-1.5 flex flex-wrap items-center gap-1">
                      <span
                        className="
                          text-sm
                          font-normal
                          leading-6
                          text-[#5d7192]
                        "
                      >
                        {row.control}
                      </span>

                      {row.delivery && (
                        <>
                          <span
                            className="
                              inline-flex
                              min-h-6
                              items-center
                              gap-2
                              rounded-md
                              border
                              border-orange-200
                              bg-orange-50
                              px-2.5
                              py-1
                            "
                          >
                            <span className="size-1.5 shrink-0 rounded-sm bg-orange-600 opacity-75" />

                            <span
                              className="
                                text-xs
                                font-semibold
                                leading-4
                                text-orange-600
                              "
                            >
                              Delivery failed
                            </span>
                          </span>

                          <span
                            className="
                              text-sm
                              font-normal
                              leading-6
                              text-[#5d7192]
                            "
                          >
                            is its own outcome.
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* EVIDENCE */}
                  <div>
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Evidence retained
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.evidence}
                    </p>
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