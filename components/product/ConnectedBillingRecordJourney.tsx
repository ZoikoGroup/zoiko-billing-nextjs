"use client";

import Link from "next/link";

export default function ConnectedBillingRecordJourney() {
  const stages = [
    {
      number: "1",
      stage: "Customer context",
      description:
        "Identity, contact and terms context required for billing.",
      authority: "Customer Records",
      href: "/customer-records",
    },
    {
      number: "2",
      stage: "Charge / adjustment",
      description:
        "The billable amount source and its controlled changes.",
      authority: "Charges & Adjustments",
      href: "/charges-and-adjustments",
    },
    {
      number: "3",
      stage: "Invoice / credit note",
      description: (
        <>
          The issued financial document, plus{" "}
          <strong>correction evidence</strong>.
        </>
      ),
      authority: "Invoices & Credit Notes",
      href: "/invoices",
    },
    {
      number: "4",
      stage: "Schedule / delivery",
      description: (
        <>
          <strong>
            Timing and delivery are separate state machines.
          </strong>{" "}
          When something was due to go and whether it arrived are different
          facts.
        </>
      ),
      authority: "Billing Schedules + Documents & Delivery",
      authorities: [
        {
          label: "Billing Schedules",
          href: "/billing-schedules",
        },
        {
          label: "Documents & Delivery",
          href: "/documents-and-delivery",
        },
      ],
    },
    {
      number: "5",
      stage: "Accounts receivable",
      description:
        "Outstanding obligation, ownership, reminder and dispute context.",
      authority: "Accounts Receivable",
      href: "/accounts-receivable",
    },
    {
      number: "6",
      stage: "Payment record",
      description:
        "Receipt and settlement evidence where supported.",
      authority: "Payments & Reconciliation",
      href: "/payments-and-reconcilliation",
    },
    {
      number: "7",
      stage: "Allocation / reconciliation",
      description:
        "Matches records without rewriting the issued invoice.",
      authority: "Payments & Reconciliation",
      href: "/payments-and-reconcilliation",
    },
    {
      number: "8",
      stage: "Outstanding balance",
      description:
        "Current remaining obligation and aging context.",
      authority: "Outstanding Balances",
      href: "/outstanding-balances",
    },
    {
      number: "9",
      stage: "Reporting",
      description:
        "Summarizes defined operational records without replacing them.",
      authority: "Reporting & Analytics",
      href: "/reporting-and-analytics",
    },
  ];

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
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[662px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-[#7890b2]
                  opacity-40
                "
              />

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
                Connected billing-record journey
              </span>

              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-[#7890b2]
                  opacity-40
                "
              />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
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
              Nine stages, and each stays a separate object.
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
              Why each remains distinct matters more than the sequence —
              merging two of these is how a financial history gets lost.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div
            className="
              hidden
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              md:block
            "
          >
            {/* HEADER */}
            <div
              className="
                grid
                grid-cols-[56px_minmax(170px,0.9fr)_minmax(300px,1.8fr)_minmax(190px,1fr)]
                bg-[#15233d]
              "
            >
              <div className="border-r border-white/15 px-3.5 py-2.5">
                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    leading-4
                    tracking-wide
                    text-white
                  "
                >
                  #
                </span>
              </div>

              <div className="border-r border-white/15 px-3.5 py-2.5">
                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    leading-4
                    tracking-wide
                    text-white
                  "
                >
                  Object / stage
                </span>
              </div>

              <div className="border-r border-white/15 px-3.5 py-2.5">
                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    leading-4
                    tracking-wide
                    text-white
                  "
                >
                  Why it remains distinct
                </span>
              </div>

              <div className="px-3.5 py-2.5">
                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    leading-4
                    tracking-wide
                    text-white
                  "
                >
                  Authority
                </span>
              </div>
            </div>

            {/* ROWS */}
            {stages.map((row, index) => (
              <div
                key={row.number}
                className={`
                  grid
                  grid-cols-[56px_minmax(170px,0.9fr)_minmax(300px,1.8fr)_minmax(190px,1fr)]
                  ${
                    index !== stages.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* NUMBER */}
                <div
                  className="
                    flex
                    min-h-[64px]
                    items-center
                    justify-center
                    border-r
                    border-[#edf0f4]
                    bg-[#fafbfc]
                    px-3.5
                    py-3
                  "
                >
                  <span
                    className="
                      text-sm
                      font-extrabold
                      leading-6
                      text-blue-600
                    "
                  >
                    {row.number}
                  </span>
                </div>

                {/* STAGE */}
                <div
                  className="
                    flex
                    min-h-[64px]
                    items-start
                    border-r
                    border-[#edf0f4]
                    px-3.5
                    py-3
                  "
                >
                  <span
                    className="
                      text-xs
                      font-semibold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {row.stage}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <div
                  className="
                    flex
                    min-h-[64px]
                    items-start
                    border-r
                    border-[#edf0f4]
                    px-3.5
                    py-3
                  "
                >
                  <span
                    className="
                      text-xs
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {row.description}
                  </span>
                </div>

                {/* AUTHORITY */}
                <div
                  className="
                    flex
                    min-h-[64px]
                    items-start
                    bg-[#fcfdff]
                    px-3.5
                    py-3
                  "
                >
                  {row.authorities ? (
                    <div className="flex flex-col gap-1">
                      {row.authorities.map((authority) => (
                        <Link
                          key={authority.label}
                          href={authority.href}
                          className="
                            !text-blue-600
                            text-sm
                            font-semibold
                            leading-6
                            transition-colors
                            hover:!text-blue-700
                            hover:underline
                          "
                        >
                          {authority.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={row.href}
                      className="
                        !text-blue-600
                        text-sm
                        font-semibold
                        leading-6
                        transition-colors
                        hover:!text-blue-700
                        hover:underline
                      "
                    >
                      {row.authority}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
          <div
            className="
              flex
              w-full
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              md:hidden
            "
          >
            {stages.map((row, index) => (
              <div
                key={row.number}
                className={`
                  flex
                  flex-col
                  p-5

                  ${
                    index !== stages.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* TOP */}
                <div className="mb-4 flex items-start gap-3">
                  {/* NUMBER */}
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#f2f6fb]
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-extrabold
                        leading-5
                        text-blue-600
                      "
                    >
                      {row.number}
                    </span>
                  </div>

                  {/* STAGE */}
                  <div className="flex min-w-0 flex-col">
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Object / stage
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
                      {row.stage}
                    </p>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="mb-4">
                  <p
                    className="
                      !m-0
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    Why it remains distinct
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
                    {row.description}
                  </p>
                </div>

                {/* AUTHORITY */}
                <div>
                  <p
                    className="
                      !m-0
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    Authority
                  </p>

                  {row.authorities ? (
                    <div className="mt-1.5 flex flex-col gap-1">
                      {row.authorities.map((authority) => (
                        <Link
                          key={authority.label}
                          href={authority.href}
                          className="
                            !text-blue-600
                            text-sm
                            font-semibold
                            leading-6
                            transition-colors
                            hover:!text-blue-700
                            hover:underline
                          "
                        >
                          {authority.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={row.href}
                      className="
                        !text-blue-600
                        mt-1.5
                        block
                        text-sm
                        font-semibold
                        leading-6
                        transition-colors
                        hover:!text-blue-700
                        hover:underline
                      "
                    >
                      {row.authority}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}