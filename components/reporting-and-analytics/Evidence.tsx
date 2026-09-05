"use client";

import Image from "next/image";
import Link from "next/link";

const chartRules = [
  {
    label: "Primary",
    title: "Table",
    description:
      "The evidence surface for exact values. Used whenever precision matters more than shape.",
  },
  {
    label: "Where compatible",
    title: "Line or area",
    description:
      "Ordered trends over a consistent interval and timezone.",
  },
  {
    label: "Where compatible",
    title: "Grouped or stacked bars",
    description:
      "Categorical comparison with labeled totals.",
  },
  {
    label: "Restricted",
    title: "Donut or composition",
    description:
      "Only for a small, complete whole. Not for open-ended category sets.",
  },
  {
    label: "Where meaningful",
    title: "Waterfall",
    description:
      "Only where a defined bridge between two positions genuinely exists.",
  },
  {
    label: "Always",
    title: "Textual labels",
    description:
      "Status, aging and workflow visuals carry text labels, never colour alone.",
  },
];

const drillItems = [
  {
    title: "Context is preserved",
    description:
      "Metric, filters, snapshot, currency and time context all carry into the detail.",
  },
  {
    title: "The selection is shown",
    description:
      "The selected segment or data point is identified explicitly.",
  },
  {
    title: "Supporting records listed",
    description:
      "Each with its source state and current status.",
  },
  {
    title: "Exclusions identified",
    description:
      "Excluded, unknown, stale or exceptional records are named, not dropped.",
  },
  {
    title: "Authorized destination",
    description:
      "Links through to the underlying Product destination the user may access.",
  },
  {
    title: "Access recorded",
    description:
      "Access or export is recorded where policy requires it.",
  },
];

export default function Evidence() {
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
              flex-col
              items-start
              gap-4
              pb-1

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
                  Evidence
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
                Use charts to explain
                <br className="hidden sm:block" />
                defined data — not
                <br className="hidden sm:block" />
                decorate it.
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
                The table is the evidence surface. A chart sits alongside it
                to make a shape legible, and every visual keeps its exact
                values reachable.
              </p>
            </div>
          </div>

          {/* MAIN EVIDENCE IMAGE */}
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
            <Image
              src="/images/reporting-and-analytics/evidence.png"
              alt="Reporting and analytics evidence visualization"
              width={1116}
              height={558}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* CHART RULES */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3
              py-1

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {chartRules.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[145px]
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
                {/* LABEL */}
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
                  {item.label}
                </span>

                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    mt-2
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
                    mt-2
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

          {/* PRESENTATION BOUNDARY */}
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
              Presentation boundary
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
              Misleading axes, truncated scales, excessive categories and
              unlabeled totals are all excluded. Where a table communicates
              the result more clearly, a chart is not used at all.
            </p>
          </div>

          {/* DRILL-THROUGH LABEL */}
          <div className="flex items-center gap-3 pt-1">
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
              Drill-through
            </span>
          </div>

          {/* DRILL-THROUGH */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              items-start
              gap-8
              pt-1

              lg:grid-cols-2
              lg:gap-16
            "
          >
            {/* DETAILS */}
            <div className="divide-y divide-[#dfe5ee]">
              {drillItems.map((item) => (
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
                  <h3
                    className="
                      !m-0
                      text-sm
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

            {/* BOUNDARY + CTA */}
            <div className="flex w-full flex-col gap-8">
              {/* DRILL BOUNDARY */}
              <div
                className="
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
                  Drill boundary
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
                  Drill-through is permission-aware, so it may legitimately
                  show fewer records than the aggregate above it. That
                  difference is expected behaviour, not a defect. Restricted
                  customer and payment fields are never exposed through URLs.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="invoices"
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#091127]
                    px-5
                    py-2.5
                    !text-white
                    outline
                    outline-1
                    outline-offset-[-1px]
                    outline-[#091127]
                    transition
                    hover:bg-[#17233d]
                    hover:!text-white
                  "
                >
                  Invoices &amp; Credit Notes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}