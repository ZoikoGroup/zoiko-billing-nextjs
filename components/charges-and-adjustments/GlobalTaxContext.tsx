"use client";

import Link from "next/link";

const contextItems = [
  {
    title: "Entity and market",
    description:
      "The issuing entity and market context the amount belongs to.",
  },
  {
    title: "Currency and precision",
    description:
      "The charge currency and the decimal precision supported for it.",
  },
  {
    title: "Exchange-rate source",
    description:
      "The rate source and effective date, recorded wherever conversion is used.",
  },
  {
    title: "Rounding rules",
    description:
      "Rounding mode and output precision, plus presentation currency where relevant.",
  },
  {
    title: "Tax rates and evidence",
    description:
      "Configured rates, exemptions, evidence state and the source they came from.",
  },
  {
    title: "Jurisdiction availability",
    description:
      "Published per market from the approved availability registry.",
  },
  {
    title: "Provider and mandate",
    description:
      "Provider, jurisdiction and mandate support stated only with current evidence.",
  },
  {
    title: "Restricted access",
    description:
      "Tax and contract context carries its own access controls.",
  },
];

export default function GlobalTaxContext() {
  return (
    <section className="w-full bg-[#062f49]">
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
          {/* =========================================================
              SECTION INTRO
          ========================================================= */}
          <div
            className="
              flex
              w-full
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
                  bg-gradient-to-r
                  from-[#35d9e5]
                  to-[#4b91ff]
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#48dce8]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Global and tax context
              </span>

              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-gradient-to-r
                  from-[#35d9e5]
                  to-[#4b91ff]
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
                !text-white

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              Amounts are market-specific
              <br className="hidden sm:block" />
              by configuration.
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
                !text-[#b8cad5]

                sm:text-base
              "
            >
              Entity, currency, precision, conversion and tax source are all
              configurable — within verified availability for that market.
            </p>
          </div>

          {/* =========================================================
              CONTEXT TABLE
          ========================================================= */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-white/15
              bg-[#062f49]
              shadow-[0_8px_24px_rgba(0,0,0,0.12)]
            "
          >
            {/* DESKTOP */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[300px_minmax(0,1fr)]
                  bg-white/[0.06]
                "
              >
                <div className="border-b border-white/10 px-5 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#8db6cc]
                    "
                  >
                    Context
                  </span>
                </div>

                <div className="border-b border-white/10 px-5 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#8db6cc]
                    "
                  >
                    Description
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {contextItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    grid
                    grid-cols-[300px_minmax(0,1fr)]
                    ${
                      index !== contextItems.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }
                  `}
                >
                  {/* TITLE */}
                  <div className="px-5 py-4">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        !text-white
                      "
                    >
                      {item.title}
                    </span>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="px-5 py-4">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-6
                        !text-[#8db6cc]
                      "
                    >
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {contextItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    p-5
                    ${
                      index !== contextItems.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }
                  `}
                >
                  {/* CONTEXT */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        !text-[#8db6cc]
                      "
                    >
                      Context
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-semibold
                        leading-5
                        !text-white
                      "
                    >
                      {item.title}
                    </p>
                  </div>

                  {/* DESCRIPTION */}
                  <div>
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        !text-[#8db6cc]
                      "
                    >
                      Description
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        !text-[#8db6cc]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================
              JURISDICTION BOUNDARY
          ========================================================= */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#35d9e5]
              bg-white/[0.06]
              px-5
              py-7

              sm:px-6
              sm:py-8
            "
          >
            {/* LABEL */}
            <span
              className="
                text-[10px]
                font-medium
                uppercase
                leading-4
                tracking-[0.16em]
                !text-[#48dce8]
              "
            >
              Jurisdiction boundary
            </span>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                mt-2
                w-full
                max-w-[850px]
                text-[15px]
                font-normal
                leading-7
                !text-[#d7e3e9]

                sm:text-base
              "
            >
              Language and currency do not determine the legal entity or the
              tax treatment. Tax calculation and price support for a specific
              market are claimed only where current evidence exists in the
              availability registry.
            </p>
          </div>

          {/* =========================================================
              CTA
          ========================================================= */}
          <div
            className="
              flex
              w-full
              items-center
              justify-center
              gap-3

              max-sm:flex-col
            "
          >
            {/* PRIMARY CTA */}
            <Link
              href="/global-billing"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                border
                border-white
                bg-white
                px-5
                py-2
                text-base
                font-normal
                leading-6
                !text-[#062f49]
                no-underline
                transition-opacity
                hover:opacity-90

                max-sm:w-full
              "
            >
              Explore global billing
            </Link>

            {/* SECONDARY CTA */}
            <Link
              href="/jurisdiction-availability"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                border
                border-white/35
                bg-transparent
                px-5
                py-2
                text-base
                font-normal
                leading-6
                !text-white
                no-underline
                transition-colors
                hover:bg-white/10

                max-sm:w-full
              "
            >
              Check jurisdiction availability
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}