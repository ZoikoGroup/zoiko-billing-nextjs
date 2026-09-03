"use client";

import Link from "next/link";

const contextItems = [
  {
    title: "Provider and bank account",
    description: "Which provider and which account received the funds.",
  },
  {
    title: "Legal entity",
    description:
      "The entity the payment and the target document both belong to.",
  },
  {
    title: "Payment currency",
    description: "The currency the payer actually paid in.",
  },
  {
    title: "Document currency",
    description:
      "The currency the invoice was issued in, which may differ.",
  },
  {
    title: "Settlement currency",
    description:
      "The currency the funds settled in at the provider or bank.",
  },
  {
    title: "Exchange-rate source",
    description:
      "Rate source and date, recorded wherever conversion is supported.",
  },
  {
    title: "Value date and business day",
    description:
      "Value date, timezone and business-day context for the event.",
  },
  {
    title: "Local reference formats",
    description:
      "Local payment reference and identifier formats where they apply.",
  },
];

export default function GlobalCurrency() {
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
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[780px]
              flex-col
              items-center
              gap-4
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
                Global and currency context
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[700px]
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
              Three currencies can be involved in one payment.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[720px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Payment currency, document currency and settlement currency are
              separate facts, and so are the provider, bank account and legal
              entity behind them.
            </p>
          </div>

          {/* CONTEXT CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {contextItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[180px]
                  flex-col
                  items-start
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_4px_16px_rgba(15,23,42,0.03)]

                  sm:px-6
                  sm:py-6
                "
              >
                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    pb-2
                    text-sm
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

          {/* SETTLEMENT BOUNDARY */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-2
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              px-5
              py-6

              sm:px-6
              sm:py-7
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
              Settlement boundary
            </span>

            <p
              className="
                !m-0
                w-full
                max-w-[900px]
                text-[15px]
                font-normal
                leading-7
                text-[#091127]
              "
            >
              Locale does not determine banking or legal entity, and instant
              or same-day settlement is never claimed without provider- and
              market-specific evidence. Regional availability, partner
              support and restrictions are published per market.
            </p>
          </div>

          {/* BUTTONS */}
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-3
              pt-1

              sm:flex-row
            "
          >
            {/* PRIMARY BUTTON */}
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
                text-sm
                font-normal
                leading-6
                !text-white
                transition-colors
                hover:bg-[#17213a]

                sm:min-h-12
                sm:w-auto
                sm:px-6
                sm:py-3
                sm:text-base
              "
            >
              Explore global billing
            </Link>

            {/* SECONDARY BUTTON */}
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
                border-[#c7d0dd]
                bg-white
                px-5
                py-2.5
                text-sm
                font-normal
                leading-6
                !text-[#091127]
                transition-colors
                hover:bg-[#f7f8fa]

                sm:min-h-12
                sm:w-auto
                sm:px-6
                sm:py-3
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