"use client";

import Link from "next/link";

const evidenceItems = [
  {
    number: "01",
    title: "Source",
    description:
      "Manual entry, product, contract, order, usage, schedule, import, API or approved integration.",
  },
  {
    number: "02",
    title: "Inputs",
    description:
      "Quantity, unit, rate, percentage, taxable basis, dates, entity, currency and eligible attributes.",
  },
  {
    number: "03",
    title: "Rule version",
    description:
      "The exact approved rule or definition used for the calculation.",
  },
  {
    number: "04",
    title: "Effective context",
    description:
      "Start and end date, event time, service period or transaction context.",
  },
  {
    number: "05",
    title: "Precision and rounding",
    description:
      "Calculation precision, rounding mode and output precision where applicable.",
  },
  {
    number: "06",
    title: "Override",
    description:
      "Any authorized manual value, with its reason, actor and approval.",
  },
  {
    number: "07",
    title: "Result",
    description:
      "Base, discount, fee, tax, net and total components as supported.",
  },
  {
    number: "08",
    title: "Relationship",
    description:
      "The draft line, issued line, credit, payment or balance context it belongs to.",
  },
];

const calculationSteps = [
  {
    number: "1",
    title: "Source",
    value:
      "Approved integration · usage record UR-4471 · event 02 Aug 06:04 UTC",
    mono: false,
  },
  {
    number: "2",
    title: "Inputs",
    value: "quantity 32 hours · rate £120.00 · entity Zoiko Ltd · GBP",
    mono: true,
  },
  {
    number: "3",
    title: "Rule version",
    value: "PR-IMP-01 · v2 · effective 01 Jan 2026",
    mono: true,
  },
  {
    number: "4",
    title: "Effective context",
    value: "Service period 01–31 Jul 2026",
    mono: false,
  },
  {
    number: "5",
    title: "Precision and rounding",
    value: "calculate 6 dp · round half up · output 2 dp",
    mono: true,
  },
  {
    number: "6",
    title: "Override",
    value: "None applied",
    mono: false,
  },
];

export default function Calculation() {
  return (
    <section id="calculation" className="w-full bg-[#f7f8fa]">
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
                Calculation
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[760px]
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
              Make calculations reviewable without exposing sensitive
              formulas.
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
              Enough evidence to reproduce and challenge a number — without
              publishing proprietary pricing logic or contract terms.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-10
              pt-2

              lg:grid-cols-2
              lg:gap-16
              lg:pt-4
            "
          >
            {/* LEFT — ILLUSTRATIVE CALCULATION */}
            <div className="flex w-full flex-col gap-3">
              {/* BADGE */}
              <div className="flex items-center">
                <div
                  className="
                    inline-flex
                    h-7
                    items-center
                    rounded-full
                    border
                    border-[#dfe5ee]
                    bg-white
                    px-3
                  "
                >
                  <span className="mr-2 size-[5px] rounded-sm bg-[#7890b2]" />

                  <span
                    className="
                      text-[10px]
                      font-normal
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#55718f]
                    "
                  >
                    Illustrative product view
                  </span>
                </div>
              </div>

              {/* CALCULATION CARD */}
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
                {/* CARD HEADER */}
                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-2.5
                    border-b
                    border-[#dfe5ee]
                    bg-[#fafbfc]
                    px-4
                    py-3.5
                  "
                >
                  <span className="size-2 shrink-0 rounded-sm bg-[#7890b2]" />

                  <span
                    className="
                      text-xs
                      font-normal
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#5d7192]
                    "
                  >
                    Calculation event CE-9920
                  </span>

                  <div className="ml-auto">
                    <div
                      className="
                        inline-flex
                        h-7
                        items-center
                        rounded-full
                        border
                        border-[#dfe5ee]
                        bg-[#f7f8fa]
                        px-2.5
                      "
                    >
                      <span className="mr-1.5 text-xs font-medium text-[#456b9c]">
                        ✓
                      </span>

                      <span
                        className="
                          text-[10px]
                          font-medium
                          uppercase
                          leading-4
                          tracking-wide
                          text-[#456b9c]
                        "
                      >
                        Final
                      </span>
                    </div>
                  </div>
                </div>

                {/* EVIDENCE STEPS */}
                {calculationSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`
                      flex
                      items-start
                      gap-3.5
                      px-4
                      py-3.5
                      ${
                        index !== calculationSteps.length - 1
                          ? "border-b border-[#edf0f4]"
                          : "border-b border-[#edf0f4]"
                      }
                    `}
                  >
                    <div
                      className="
                        flex
                        size-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        border
                        border-[#d8e0e9]
                        bg-[#f5f7f9]
                      "
                    >
                      <span className="text-[9px] font-semibold leading-4 text-[#456b9c]">
                        {step.number}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className="
                          !m-0
                          text-[9px]
                          font-normal
                          uppercase
                          leading-4
                          tracking-wide
                          text-[#7890b2]
                        "
                      >
                        {step.title}
                      </p>

                      <p
                        className={`
                          !m-0
                          mt-1.5
                          break-words
                          text-sm
                          leading-6
                          text-[#091127]
                          ${step.mono ? "font-mono" : "font-normal"}
                        `}
                      >
                        {step.value}
                      </p>
                    </div>
                  </div>
                ))}

                {/* TOTALS */}
                <div className="border-t border-[#dfe5ee] bg-[#fafbfc] px-4 py-4">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-sm leading-6 text-[#091127]">
                      Base
                    </span>

                    <span className="font-mono text-sm leading-6 text-[#091127]">
                      £3,840.00
                    </span>
                  </div>

                  <div className="mt-1.5 flex items-start justify-between gap-4">
                    <span className="text-sm leading-6 text-[#091127]">
                      Discount · contract −5%
                    </span>

                    <span className="font-mono text-sm leading-6 text-[#091127]">
                      −£192.00
                    </span>
                  </div>

                  <div className="mt-1.5 flex items-start justify-between gap-4">
                    <span className="text-sm leading-6 text-[#091127]">
                      Tax component · VAT 20%
                    </span>

                    <span className="font-mono text-sm leading-6 text-[#091127]">
                      £729.60
                    </span>
                  </div>

                  <div className="mt-2 flex items-start justify-between gap-4 border-t-2 border-[#091127] pt-2">
                    <span className="text-base leading-6 text-[#091127]">
                      Net component total
                    </span>

                    <span className="font-mono text-base font-semibold leading-6 text-[#091127]">
                      £4,377.60
                    </span>
                  </div>
                </div>

                {/* STATUS TAGS */}
                <div className="flex flex-wrap gap-2 border-t border-[#dfe5ee] px-4 py-3.5 sm:px-6">
                  <span
                    className="
                      rounded-full
                      border
                      border-[#dfe5ee]
                      bg-[#f7f8fa]
                      px-2.5
                      py-1.5
                      font-mono
                      text-[10px]
                      leading-4
                      text-[#5d7192]
                    "
                  >
                    Draft line: ZB-UK-2026-0419
                  </span>

                  <span
                    className="
                      rounded-full
                      border
                      border-[#dfe5ee]
                      bg-[#f7f8fa]
                      px-2.5
                      py-1.5
                      font-mono
                      text-[10px]
                      leading-4
                      text-[#5d7192]
                    "
                  >
                    Not yet issued
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT — EVIDENCE REQUIREMENTS */}
            <div className="flex w-full flex-col">
              <h3
                className="
                  !m-0
                  text-lg
                  font-semibold
                  leading-6
                  text-[#091127]
                "
              >
                What the evidence has to contain
              </h3>

              <p
                className="
                  !m-0
                  mt-1.5
                  max-w-[480px]
                  text-sm
                  font-normal
                  leading-7
                  text-[#5d7192]
                "
              >
                Eight elements make an amount reproducible. Anything missing
                is shown as unknown, estimated or provisional rather than
                presented as final.
              </p>

              {/* EVIDENCE LIST */}
              <div className="mt-3.5">
                {evidenceItems.map((item, index) => (
                  <div
                    key={item.number}
                    className={`
                      flex
                      items-start
                      gap-4
                      py-3
                      ${
                        index !== evidenceItems.length - 1
                          ? "border-b border-[#dfe5ee]"
                          : ""
                      }
                    `}
                  >
                    <span
                      className="
                        w-4
                        shrink-0
                        pt-0.5
                        font-mono
                        text-[10px]
                        font-semibold
                        leading-4
                        text-[#456b9c]
                      "
                    >
                      {item.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h4
                        className="
                          !m-0
                          text-sm
                          font-semibold
                          leading-6
                          text-[#091127]
                        "
                      >
                        {item.title}
                      </h4>

                      <p
                        className="
                          !m-0
                          mt-1
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CALCULATION BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-[#f7f8fa]
              px-5
              py-5

              sm:px-7
              sm:py-6
            "
          >
            <span
              className="
                block
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-[#7890b2]
              "
            >
              Calculation boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[900px]
                text-sm
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              Proprietary formulas and sensitive contract data are never
              published here. Recalculation never silently changes an issued
              document — a new calculation applies to a draft, or produces a
              governed correction.
            </p>
          </div>

          {/* CTA */}
          <div className="flex w-full items-center">
            {/*<Link
              href="/amount-sources"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                bg-[#091127]
                px-5
                py-2.5
                text-center
                text-base
                font-normal
                leading-6
                !text-white
                transition-opacity
                hover:opacity-90
              "
            >
              See approved amount sources
            </Link>*/}
          </div>
        </div>
      </div>
    </section>
  );
}