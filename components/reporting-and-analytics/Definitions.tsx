"use client";

import Image from "next/image";

const comparisons = [
  {
    title: "Current versus prior period",
    description: "Like-for-like periods on a consistent interval and timezone.",
  },
  {
    title: "Actual versus target",
    description:
      "Against an approved target or budget source, where one is supported.",
  },
  {
    title: "Absolute and percentage variance",
    description:
      "With explicit denominator rules, so a percentage always means something.",
  },
  {
    title: "Time-series trend",
    description: "Consistent interval and timezone across the whole series.",
  },
  {
    title: "Segment comparison",
    description: "Only across comparable scope and units.",
  },
  {
    title: "Data-quality indicators",
    description:
      "Missing data, late-arriving data and restatements flagged on the comparison.",
  },
];

const filters = [
  {
    number: "01",
    title: "Date range and comparison",
    description:
      "The reporting window and the comparison period it is measured against.",
  },
  {
    number: "02",
    title: "Entity and segmentation",
    description:
      "Entity, customer, document, product or approved segmentation.",
  },
  {
    number: "03",
    title: "Currency and rate context",
    description:
      "Original or converted display, with the rate source shown when converted.",
  },
  {
    number: "04",
    title: "Status and exception filters",
    description:
      "Status, owner, channel, provider and exception filters.",
  },
  {
    number: "05",
    title: "Timezone and business date",
    description:
      "Timezone, locale and the business-date basis being applied.",
  },
  {
    number: "06",
    title: "Saved view identity",
    description:
      "Name, owner, visibility and the definition version it was saved against.",
  },
];

const definitionItems = [
  {
    title: "Canonical name and ID",
    description:
      "A stable identifier so the metric can be referenced unambiguously.",
  },
  {
    title: "Business definition",
    description:
      "What it means and what it is intended to be used for.",
  },
  {
    title: "Formula and denominator",
    description:
      "The derivation, with numerator and denominator where applicable.",
  },
  {
    title: "Grain, unit, currency, date basis",
    description:
      "The atomic level and the axes the number is measured on.",
  },
  {
    title: "Inclusions and exclusions",
    description:
      "What is counted, what is not, and how nulls and thresholds behave.",
  },
  {
    title: "Owner and version",
    description:
      "Accountable owner, reviewer, version, effective dates and deprecation status.",
  },
];

export default function Definitions() {
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
            gap-10

            sm:gap-12

            md:gap-14
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-4

              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:gap-16
            "
          >
            {/* LEFT */}
            <div
              className="
                flex
                w-full
                max-w-[662px]
                flex-col
                items-start
                gap-3
              "
            >
              {/* EYEBROW */}
              <div className="flex items-center gap-3">
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
                  Definitions
                </span>
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
                Compare periods and
                <br className="hidden sm:block" />
                segments without hiding
                <br className="hidden sm:block" />
                the baseline.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div
              className="
                w-full
                max-w-[528px]
                lg:pb-1
              "
            >
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
                A metric catalog exists so two people reading the same number
                mean the same thing by it.
              </p>
            </div>
          </div>

          {/* DEFINITION CONTENT */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              items-start
              gap-8

              lg:grid-cols-2
              lg:gap-16
            "
          >
            {/* IMAGE */}
            <div className="w-full">
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                <Image
                  src="/images/reporting-and-analytics/definitions.png"
                  alt="Reporting metric definitions and analytics model"
                  width={526}
                  height={505}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            {/* DEFINITION DETAILS */}
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
                What a definition must carry
              </h3>

              <div className="mt-2 divide-y divide-[#dfe5ee]">
                {definitionItems.map((item) => (
                  <div
                    key={item.title}
                    className="
                      grid
                      grid-cols-1
                      gap-2
                      py-4

                      sm:grid-cols-[145px_1fr]
                      sm:gap-4
                    "
                  >
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
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CATALOG BOUNDARY */}
              <div
                className="
                  mt-4
                  rounded-r-2xl
                  border-l-[3px]
                  border-[#7890b2]
                  bg-white
                  px-5
                  py-6

                  sm:px-7
                  sm:py-7
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.16em]
                    text-[#7890b2]
                  "
                >
                  Catalog boundary
                </span>

                <p
                  className="
                    !m-0
                    mt-2
                    text-sm
                    font-normal
                    leading-7
                    text-[#091127]

                    sm:text-base
                  "
                >
                  No metric is published without an accountable owner and a
                  validated source, and terminology must match the source
                  Product definitions rather than inventing a reporting
                  dialect.
                </p>
              </div>
            </div>
          </div>

          {/* COMPARISONS */}
          <div className="pt-1">
            <div className="mb-7 flex items-center gap-3">
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
                Comparisons and variance
              </span>
            </div>

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
              "
            >
              {comparisons.map((item) => (
                <div
                  key={item.title}
                  className="
                    flex
                    min-h-[150px]
                    flex-col
                    items-start
                    gap-2
                    bg-white
                    px-5
                    py-5

                    sm:px-6
                    sm:py-6
                  "
                >
                  <h3
                    className="
                      !m-0
                      text-base
                      font-semibold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      !m-0
                      text-sm
                      font-normal
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ANALYSIS BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              px-5
              py-6

              sm:px-7
              sm:py-7
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#7890b2]
              "
            >
              Analysis boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[761px]
                text-sm
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              A trend describes movement. It does not prove causation, and
              targets or budgets require approved sources and versions before
              they appear as a baseline.
            </p>
          </div>

          {/* FILTERS HEADER */}
          <div
            className="
              border-t
              border-[#dfe5ee]
              pt-10

              sm:pt-12
            "
          >
            <h2
              className="
                !m-0
                text-2xl
                font-extrabold
                leading-8
                tracking-[-0.025em]
                text-[#091127]

                sm:text-3xl
              "
            >
              Filters, scope and saved views
            </h2>

            <p
              className="
                !m-0
                mt-3
                max-w-[555px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Shaping a report should never quietly change what the number
              means.
            </p>
          </div>

          {/* FILTERS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {filters.map((item) => (
              <div
                key={item.number}
                className="
                  flex
                  min-h-[190px]
                  flex-col
                  items-start
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
                  shadow-[0_2px_8px_rgba(15,23,42,0.025)]

                  sm:p-6
                "
              >
                {/* NUMBER */}
                <span
                  className="
                    text-[11px]
                    font-bold
                    leading-4
                    tracking-[0.12em]
                    text-[#7890b2]
                  "
                >
                  {item.number}
                </span>

                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    pt-3
                    pb-1
                    text-base
                    font-semibold
                    leading-5
                    text-[#091127]
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* SAVED VIEW BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              px-5
              py-6

              sm:px-7
              sm:py-7
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#7890b2]
              "
            >
              Saved-view boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[761px]
                text-sm
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              A saved filter does not freeze source data unless a snapshot is
              explicitly retained, and restricted dimensions stay
              permission-controlled inside a saved view.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}