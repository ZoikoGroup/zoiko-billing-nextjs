"use client";

import Image from "next/image";

const components = [
  {
    number: "01",
    title: "Metric definition",
    description:
      "Formula, grain, unit, inclusions, exclusions, owner and version.",
  },
  {
    number: "02",
    title: "Dimensions and filters",
    description:
      "Entity, customer, currency, status, date basis, timezone and source.",
  },
  {
    number: "03",
    title: "Dataset snapshot",
    description:
      "Source versions, as-of time, freshness, completeness and quality state.",
  },
  {
    number: "04",
    title: "Presentation",
    description:
      "Table, chart, comparison, labels, units, denominators and accessible summary.",
  },
  {
    number: "05",
    title: "Drill-through",
    description:
      "Source records, exceptions and the underlying Product destination.",
  },
  {
    number: "06",
    title: "Export and evidence",
    description:
      "Requester, permission, filter state, file version, delivery and audit.",
  },
];

export default function AnalyticsModel() {
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
                  Analytics model
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
                Start with the definition,
                <br className="hidden sm:block" />
                scope and snapshot
                <br className="hidden sm:block" />
                behind every result.
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
                Six components make a report reviewable. A chart is never the
                source of truth — it is one presentation of a defined measure
                over a stated snapshot.
              </p>
            </div>
          </div>

          {/* SIX COMPONENTS */}
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
            {components.map((item) => (
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

          {/* MODEL IMAGE */}
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
              src="/images/reporting-and-analytics/model.png"
              alt="Analytics model showing governed reporting components"
              width={1116}
              height={510}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* MODEL BOUNDARY */}
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
            {/* LABEL */}
            <div className="mb-2">
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
                Model boundary
              </span>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                max-w-[761px]
                text-sm
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              Sensitive schemas and proprietary formulas are not published
              here. What is published is the governance that makes a number
              checkable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}