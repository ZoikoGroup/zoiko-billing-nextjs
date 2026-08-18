"use client";

import React from "react";

const steps = [
  {
    number: "01",
    title: "Open item",
    description: "Derived from current sources",
  },
  {
    number: "02",
    title: "Owner",
    description: "Named, with a next action",
  },
  {
    number: "03",
    title: "Revalidate",
    description: "Payments, credits, restrictions",
  },
  {
    number: "04",
    title: "Communicate",
    description: "Reviewed, permissioned",
  },
  {
    number: "05",
    title: "Dispute or promise",
    description: "Pauses the ordinary path",
  },
  {
    number: "06",
    title: "Resolve",
    description: "With the reason retained",
  },
];

export default function NextStep() {
  return (
    <section
      className="
        w-full
        bg-gray-100
        px-4
        py-12
        sm:px-6
        sm:py-16
        md:px-8
        lg:px-12
        xl:px-16
        2xl:px-28
        dark:bg-slate-950
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1220px]
          rounded-2xl
          bg-[#082E4A]
          px-6
          py-10
          sm:px-8
          sm:py-12
          md:px-10
          md:py-14
          lg:px-12
          lg:py-16
        "
      >
        <div
          className="
            flex
            w-full
            flex-col
            items-start
            justify-center
            gap-10
            lg:flex-row
            lg:items-center
            lg:gap-12
            xl:gap-16
          "
        >
          {/* ================= LEFT SIDE ================= */}
          <div
            className="
              flex
              w-full
              flex-1
              flex-col
              items-start
              gap-4
              lg:max-w-[590px]
            "
          >
            {/* NEXT STEP */}
            <div className="flex h-4 items-center gap-2">
              <div
                className="
                  h-0.5
                  w-5
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                "
              />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-cyan-400
                  sm:text-xs
                "
              >
                Next step
              </span>
            </div>

            {/* HEADING */}
            <div className="w-full pt-1.5">
              <h2
                className="
                  w-full
                  max-w-[660px]
                  text-3xl
                  font-medium
                  leading-[1.15]
                  tracking-[-0.02em]
                  text-white
                  sm:text-4xl
                  md:text-[44px]
                  md:leading-[1.14]
                  lg:text-5xl
                  lg:leading-[50.16px]
                "
              >
                Start with the
                <br />
                receivables work
                <br />
                your team needs to
                <br />
                control.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="w-full max-w-[528px]">
              <p
                className="
                  text-sm
                  font-normal
                  leading-6
                  text-slate-300
                  sm:text-base
                  sm:leading-8
                "
              >
                Decide who owns each open item, what pauses ordinary
                follow-up, and what has to be true before anyone contacts a
                customer.
              </p>
            </div>

            {/* BUTTONS */}
            <div
              className="
                flex
                w-full
                flex-wrap
                items-center
                gap-3
                pt-3
                sm:pt-4
              "
            >
              {/* CREATE ACCOUNT */}
              <button
                type="button"
                className="
                  min-h-11
                  rounded-lg
                  bg-blue-500
                  px-5
                  py-2.5
                  text-sm
                  font-normal
                  leading-6
                  text-white
                  transition
                  hover:bg-blue-600
                  sm:text-base
                "
              >
                Create Account
              </button>

              {/* BOOK A DEMO */}
              <button
                type="button"
                className="
                  min-h-11
                  rounded-lg
                  border
                  border-white/30
                  px-5
                  py-2.5
                  text-sm
                  font-normal
                  leading-6
                  text-white
                  transition
                  hover:border-white/50
                  hover:bg-white/5
                  sm:text-base
                "
              >
                Book a Demo
              </button>

              {/* GLOBAL BILLING */}
              <button
                type="button"
                className="
                  flex
                  min-h-11
                  items-center
                  gap-2
                  px-1
                  py-2.5
                  text-sm
                  font-normal
                  leading-6
                  text-cyan-400
                  transition
                  hover:text-cyan-300
                  sm:text-base
                "
              >
                <span>Global billing</span>

                <span className="font-mono text-base font-bold">
                  →
                </span>
              </button>
            </div>

            {/* NOTE */}
            <div className="w-full">
              <p
                className="
                  max-w-[540px]
                  text-sm
                  font-normal
                  leading-6
                  text-slate-300
                  sm:text-base
                  sm:leading-7
                "
              >
                Aging bands guide work. They are not judgments about
                people.
                <br className="hidden sm:block" />
                Availability varies by plan, provider, entity, market and
                policy.
              </p>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div
            className="
              flex
              w-full
              flex-1
              flex-col
              items-start
              gap-4
              lg:max-w-[526px]
            "
          >
            {/* WORKFLOW CARD */}
            <div
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/[0.045]
                px-5
                py-5
                sm:px-6
                sm:py-6
                lg:h-[551px]
                lg:px-7
              "
            >
              <div className="flex h-full flex-col">
                {/* STEPS */}
                <div className="flex-1">
                  {steps.map((step, index) => (
                    <div
                      key={step.number}
                      className={`
                        flex
                        min-h-[72px]
                        items-center
                        gap-3
                        py-2.5
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
                          h-6
                          w-6
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-gradient-to-br
                          from-cyan-400
                          to-blue-500
                        "
                      >
                        <span
                          className="
                            font-mono
                            text-[9px]
                            font-normal
                            leading-4
                            text-white
                          "
                        >
                          {step.number}
                        </span>
                      </div>

                      {/* STEP CONTENT */}
                      <div className="min-w-0 flex-1">
                        <p
                          className="
                            text-sm
                            font-normal
                            leading-6
                            text-slate-200
                          "
                        >
                          {step.title}
                        </p>

                        <p
                          className="
                            font-mono
                            text-[9px]
                            font-normal
                            leading-4
                            text-slate-500
                            sm:text-[9.5px]
                          "
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CARD FOOTER */}
                <div className="border-t border-white/10 pt-3.5">
                  <p
                    className="
                      pl-2.5
                      text-sm
                      font-semibold
                      leading-6
                      text-white
                    "
                  >
                    Billing clarity from invoice to payment.
                  </p>
                </div>
              </div>
            </div>

            {/* EXPLORE BUTTON */}
            <div className="flex w-full items-center">
              <button
                type="button"
                className="
                  min-h-11
                  rounded-lg
                  border
                  border-white/30
                  px-5
                  py-2.5
                  text-sm
                  font-normal
                  leading-6
                  text-white
                  transition
                  hover:border-white/50
                  hover:bg-white/5
                  sm:text-base
                "
              >
                Explore Payments &amp; Reconciliation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
