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
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-20 lg:py-24 xl:px-28">
        <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* =========================================================
              LEFT CONTENT
          ========================================================= */}
          <div className="flex min-w-0 flex-1 flex-col items-start">

            {/* Eyebrow */}
            <div className="mb-5 flex h-4 items-center">
              <span className="mr-2.5 h-0.5 w-5 shrink-0 rounded-sm bg-gradient-to-r from-[#25D8E8] to-[#3678FF]" />

              <span className="whitespace-nowrap text-xs font-medium uppercase leading-4 tracking-wider text-[#25D8E8]">
                Next step
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-[660px]
                !text-white
                text-[36px]
                font-medium
                leading-[1.12]
                tracking-[-0.02em]
                sm:text-[42px]
                md:text-[46px]
                lg:text-5xl
                lg:leading-[50.16px]
              "
            >
              Start with the
              <br className="hidden sm:block" />
              charges and controls
              <br className="hidden sm:block" />
              your operation
              <br className="hidden sm:block" />
              needs.
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-[529px]
                !text-[#A8C4D4]
                text-base
                font-normal
                leading-7
                sm:leading-8
              "
            >
              Decide which amounts need review before they reach a customer,
              and what evidence you want behind every figure — then let the
              record explain itself.
            </p>

            {/* CTA ROW */}
            <div className="mt-6 flex w-full flex-wrap items-center gap-3">

              {/* Create Account */}
              <Link
                href="/signup"
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
                  !text-white
                  text-base
                  font-normal
                  leading-6
                  transition-opacity
                  hover:opacity-90
                "
              >
                <span className="!text-white">
                  Create Account
                </span>
              </Link>

              {/* Book a Demo */}
              <Link
                href="/book-a-demo"
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
                  !text-white
                  text-base
                  font-normal
                  leading-6
                  transition-colors
                  hover:bg-white/10
                "
              >
                <span className="!text-white">
                  Book a Demo
                </span>
              </Link>

              {/* View Pricing */}
              <Link
                href="/pricing"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  gap-2
                  px-2
                  py-2
                  !text-[#25D8E8]
                  text-base
                  font-normal
                  leading-6
                  transition-opacity
                  hover:opacity-80
                "
              >
                <span className="!text-[#25D8E8]">
                  View Pricing
                </span>

                <span className="!text-[#25D8E8] text-base font-bold">
                  →
                </span>
              </Link>
            </div>

            {/* Supporting text */}
            <p
              className="
                mt-6
                max-w-[560px]
                !text-[#A8C4D4]
                text-sm
                font-normal
                leading-6
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
          <div className="flex w-full min-w-0 flex-1 flex-col gap-5">

            {/* Process card */}
            <div
              className="
                w-full
                rounded-2xl
                border
                border-white/15
                bg-white/[0.05]
                p-5
                sm:p-6
                lg:p-7
              "
            >
              {/* Steps */}
              <div className="flex flex-col">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`
                      flex
                      items-start
                      gap-4
                      py-4
                      sm:gap-5
                      ${
                        index !== steps.length - 1
                          ? "border-b border-white/10"
                          : ""
                      }
                    `}
                  >
                    {/* Number */}
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
                      <span className="!text-white text-[9px] font-normal leading-4">
                        {step.number}
                      </span>
                    </div>

                    {/* Step content */}
                    <div className="min-w-0 flex-1">
                      <div className="!text-[#E8F0F4] text-sm font-normal leading-6">
                        {step.title}
                      </div>

                      <div className="mt-1 !text-[#8BAABD] text-[10px] font-normal leading-4 sm:text-xs">
                        {step.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card footer */}
              <div className="mt-4 border-t border-white/10 pt-5">
                <p className="!text-white text-sm font-semibold leading-6 sm:text-base">
                  Billing clarity from invoice to payment.
                </p>
              </div>
            </div>

            {/* Explore Billing Schedules */}
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
                  !text-white
                  text-base
                  font-normal
                  leading-6
                  transition-colors
                  hover:bg-white/10
                "
              >
                <span className="!text-white">
                  Explore Billing Schedules
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}