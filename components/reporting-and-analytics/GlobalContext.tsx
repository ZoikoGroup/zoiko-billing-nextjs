"use client";

import Link from "next/link";

const globalItems = [
  {
    title: "Entity and source scope",
    description:
      "Which legal entities and source systems the report actually covers.",
  },
  {
    title: "Original currency",
    description: "Values in the currency they were recorded in, always retained.",
  },
  {
    title: "Converted view",
    description:
      "A supported converted presentation, shown as a view rather than a restatement.",
  },
  {
    title: "Rate source and method",
    description:
      "Exchange-rate source, date, method and restatement behaviour.",
  },
  {
    title: "Timezone and business date",
    description:
      "Timezone, business date, locale and calendar context.",
  },
  {
    title: "Regional availability",
    description:
      "Region, provider and integration availability published per market.",
  },
  {
    title: "Separated vs consolidated",
    description:
      "Presentation follows approved policy, not convenience.",
  },
  {
    title: "Restatement indicators",
    description:
      "Late-arriving corrections flagged where they change a prior result.",
  },
];

export default function GlobalContext() {
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
                  Global context
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
                Cross-market
                <br className="hidden sm:block" />
                reporting, with
                <br className="hidden sm:block" />
                comparability limits
                <br className="hidden sm:block" />
                visible.
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
                Combining entities and currencies is a method decision, not a
                default. Where a total cannot be validly combined, it is
                presented separately.
              </p>
            </div>
          </div>

          {/* GLOBAL CONTEXT CARDS */}
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

              lg:grid-cols-4
            "
          >
            {globalItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[175px]
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
                    pb-1
                    text-sm
                    font-semibold
                    leading-5
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

          {/* CONSOLIDATION BOUNDARY */}
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
              Consolidation boundary
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
              Currencies and entities are never combined without an explicit
              method, and locale does not define accounting policy or a legal
              reporting basis. A converted view is not a consolidated
              financial statement.
            </p>
          </div>

          {/* CTAs */}
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-3

              sm:flex-row
            "
          >
            <Link
              href="/global-billing"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-lg
                bg-[#091127]
                px-5
                py-2.5
                text-base
                font-normal
                leading-6
                !text-white
                outline
                outline-1
                outline-offset-[-1px]
                outline-[#091127]
                transition
                hover:bg-[#17233d]
                hover:!text-white

                sm:w-auto
              "
            >
              Explore global billing
            </Link>

            <Link
              href="integration-availability"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-lg
                border
                border-[#091127]
                bg-white
                px-5
                py-2.5
                text-base
                font-normal
                leading-6
                !text-[#091127]
                transition
                hover:bg-[#f1f3f6]
                hover:!text-[#091127]

                sm:w-auto
              "
            >
              Check availability
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}