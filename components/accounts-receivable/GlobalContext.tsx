"use client";

import React from "react";
import Link from "next/link";

const contextItems = [
  {
    title: "Legal entity",
    description:
      "The entity that holds the receivable and the customer relationship behind it.",
  },
  {
    title: "Currency and rate source",
    description:
      "Currency per position, with an exchange-rate source wherever totals are aggregated.",
  },
  {
    title: "Locale and language",
    description:
      "The document and communication language used with that customer.",
  },
  {
    title: "Due date and grace",
    description:
      "Local due-date and grace-period rules, where those have been verified.",
  },
  {
    title: "Communication rules",
    description:
      "Local communication rules and restrictions where they are verified.",
  },
  {
    title: "Timezone and hours",
    description:
      "Timezone and business hours that govern when contact is appropriate.",
  },
  {
    title: "Provider availability",
    description:
      "Provider and jurisdiction availability, published per market.",
  },
  {
    title: "Restricted models",
    description:
      "Restricted or partner-supported operating models where they apply.",
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
            items-center
            gap-10

            sm:gap-12

            md:gap-14
          "
        >
          {/* HEADER */}
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              gap-3
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
                Global context
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
              Receivables work differs by entity, currency and market.
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
              Due-date conventions, communication rules and business hours
              are all local. None of them are assumed from a locale setting.
            </p>
          </div>

          {/* CONTEXT CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {contextItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[190px]
                  flex-col
                  items-start
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-6
                  shadow-[0_4px_14px_rgba(15,23,42,0.025)]
                "
              >
                {/* TITLE */}
                <div className="w-full pb-2">
                  <h3
                    className="
                      !m-0
                      text-sm
                      font-semibold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {item.title}
                  </h3>
                </div>

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

          {/* JURISDICTION BOUNDARY */}
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
              sm:py-8
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
              Jurisdiction boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[850px]
                text-sm
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              Locale does not determine legal collection rights, and
              country-specific collection compliance is never claimed without
              current evidence.
            </p>
          </div>

          {/* ACTIONS */}
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
            {/* PRIMARY */}
            <Link
              href="/global-billing"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-lg
                border
                border-[#091127]
                bg-[#091127]
                px-5
                py-2.5
                text-sm
                font-normal
                leading-6
                !text-white
                transition
                hover:bg-[#17213a]

                sm:w-auto
                sm:text-base
              "
            >
              Explore global billing
            </Link>

            {/* SECONDARY */}
            <Link
              href="/integration-availability"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-lg
                border
                border-[#d0d8e5]
                bg-white
                px-5
                py-2.5
                text-sm
                font-normal
                leading-6
                text-[#091127]
                transition
                hover:bg-[#f7f8fa]

                sm:w-auto
                sm:text-base
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