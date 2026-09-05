"use client";

import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Source",
    description: "Where the amount came from",
  },
  {
    number: "02",
    title: "Calculate",
    description: "Inputs, rule version, rounding",
  },
  {
    number: "03",
    title: "Approve",
    description: "Where the threshold requires it",
  },
  {
    number: "04",
    title: "Apply",
    description: "To a draft document line",
  },
  {
    number: "05",
    title: "Issue context",
    description: "Evidence preserved",
  },
  {
    number: "06",
    title: "Correct",
    description: "By relationship, not overwrite",
  },
];

export default function ChargesAdjustmentsNextStep() {
  return (
    <section className="w-full bg-[#073B57]">
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

            lg:flex-row
            lg:items-center
            lg:gap-12
          "
        >
          {/* =========================================================
              LEFT CONTENT
          ========================================================= */}
          <div
            className="
              flex
              min-w-0
              w-full
              flex-1
              flex-col
              items-start
            "
          >
            {/* EYEBROW */}
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-gradient-to-r
                  from-[#25D8E8]
                  to-[#3678FF]
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#25D8E8]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Next step
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[620px]
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
              Start with the
              <br className="hidden sm:block" />
              charges and controls
              <br className="hidden sm:block" />
              your operation needs.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                !mt-8
                w-full
                max-w-[620px]
                text-[15px]
                font-normal
                leading-7
                !text-[#A8C4D4]

                sm:mt-5
                sm:text-base
              "
            >
              Decide which amounts need review before they reach a customer,
              and what evidence you want behind every figure — then let the
              record explain itself.
            </p>

            {/* CTA ROW */}
            <div
              className="
                mt-5
                flex
                w-full
                flex-wrap
                items-center
                gap-3

                sm:mt-6

                max-sm:flex-col
                max-sm:items-stretch
              "
            >
              {/* CREATE ACCOUNT */}
              <Link
                href="/create-account"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-[#2F78FF]
                  bg-[#2F78FF]
                  px-5
                  py-2
                  text-base
                  font-normal
                  leading-6
                  !text-white
                  no-underline
                  transition-opacity
                  hover:opacity-90

                  max-sm:w-full
                "
              >
                Create Account
              </Link>

              {/* BOOK A DEMO */}
              <Link
                href="/book-demo"
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
                Book a Demo
              </Link>

              {/* VIEW PRICING */}
              <Link
                href="/pricing-and-plans"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  gap-2
                  px-2
                  py-2
                  text-base
                  font-normal
                  leading-6
                  !text-[#25D8E8]
                  no-underline
                  transition-opacity
                  hover:opacity-80

                  max-sm:w-full
                "
              >
                <span>View Pricing</span>

                <span className="font-mono text-base font-bold leading-6 !text-[#25D8E8]">
                  →
                </span>
              </Link>
            </div>

            {/* SUPPORTING TEXT */}
            <p
              className="
                !m-0
                !mt-5
                w-full
                max-w-[620px]
                text-sm
                font-normal
                leading-6
                !text-[#A8C4D4]

                sm:mt-6
                sm:text-base
                sm:leading-7
              "
            >
              Every amount carries its source, rule version and evidence.
              Availability varies by plan, integration, entity, currency and
              jurisdiction.
            </p>
          </div>

          {/* =========================================================
              RIGHT CONTENT
          ========================================================= */}
          <div
            className="
              flex
              w-full
              min-w-0
              flex-1
              flex-col
              gap-4

              sm:gap-5
            "
          >
            {/* PROCESS CARD */}
            <div
              className="
                w-full
                rounded-2xl
                border
                border-white/15
                bg-white/[0.05]
                p-5

                sm:p-6

                md:p-7
              "
            >
              {/* STEPS */}
              <div className="flex flex-col">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`
                      flex
                      items-start
                      gap-4
                      py-3.5

                      sm:gap-5
                      sm:py-4

                      ${
                        index !== steps.length - 1
                          ? "border-b border-white/10"
                          : ""
                      }
                    `}
                  >
                    {/* NUMBER */}
                    <div
                      className="
                        flex
                        size-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-gradient-to-br
                        from-[#25D8E8]
                        to-[#3678FF]
                      "
                    >
                      <span
                        className="
                          text-[9px]
                          font-normal
                          leading-4
                          !text-white
                        "
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* STEP CONTENT */}
                    <div className="min-w-0 flex-1">
                      <div
                        className="
                          text-sm
                          font-semibold
                          leading-6
                          !text-[#E8F0F4]

                          sm:text-base
                        "
                      >
                        {step.title}
                      </div>

                      <div
                        className="
                          mt-0.5
                          text-[11px]
                          font-normal
                          leading-5
                          !text-[#8BAABD]

                          sm:mt-1
                          sm:text-xs
                          sm:leading-5
                        "
                      >
                        {step.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CARD FOOTER */}
              <div
                className="
                  mt-4
                  border-t
                  border-white/10
                  pt-4

                  sm:mt-5
                  sm:pt-5
                "
              >
                <p
                  className="
                    !m-0
                    text-sm
                    font-semibold
                    leading-6
                    !text-white

                    sm:text-base
                  "
                >
                  Billing clarity from invoice to payment.
                </p>
              </div>
            </div>

            {/* EXPLORE BILLING SCHEDULES */}
            <div className="flex w-full">
              <Link
                href="/billing-schedules"
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
                Explore Billing Schedules
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}