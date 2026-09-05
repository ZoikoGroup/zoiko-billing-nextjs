"use client";

import Link from "next/link";

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
    <section className="w-full !bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1240px]
          px-4
          py-8
          sm:px-6
          sm:py-10
          lg:px-7
          lg:py-12
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            !bg-slate-900
            px-6
            py-8
            sm:rounded-3xl
            sm:px-8
            sm:py-10
            lg:min-h-[504px]
            lg:px-14
            lg:py-14
          "
        >
          {/* Background glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-28
              h-72
              w-72
              rounded-full
              bg-blue-500/20
              blur-3xl
              sm:h-80
              sm:w-80
              lg:h-96
              lg:w-96
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              -left-32
              h-72
              w-72
              rounded-full
              bg-blue-500/10
              blur-3xl
              sm:h-80
              sm:w-80
            "
          />

          {/* Main content */}
          <div
            className="
              relative
              z-10
              flex
              w-full
              flex-col
              gap-8
              lg:flex-row
              lg:items-center
              lg:gap-12
            "
          >
            {/* LEFT SIDE */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-3.5
                lg:max-w-[500px]
              "
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-4 shrink-0 bg-white/40" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.16em]
                    !text-white/60
                    sm:text-xs
                    sm:tracking-[0.18em]
                  "
                >
                  Next step
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
                  !m-0
                  w-full
                  max-w-[500px]
                  text-[24px]
                  font-extrabold
                  leading-[1.25]
                  tracking-[-0.01em]
                  !text-white
                  sm:text-[26px]
                  lg:text-[28px]
                "
              >
                Start with the receivables work your team needs to control.
              </h2>

              {/* Description */}
              <p
                className="
                  !m-0
                  w-full
                  max-w-[450px]
                  text-sm
                  font-normal
                  leading-6
                  !text-white/70
                  sm:text-base
                "
              >
                Decide who owns each open item, what pauses ordinary
                follow-up, and what has to be true before anyone contacts a
                customer.
              </p>

              {/* Buttons */}
              <div
                className="
                  flex
                  w-full
                  flex-wrap
                  items-center
                  gap-3
                  pt-2
                  sm:pt-3
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
                    rounded-full
                    !border-0
                    !bg-white
                    px-5
                    text-sm
                    font-semibold
                    leading-6
                    !text-slate-900
                    opacity-100
                    transition
                    hover:!bg-gray-100
                    hover:!text-slate-900
                    sm:px-6
                  "
                >
                  Create account
                </Link>

                {/* BOOK A DEMO */}
                <Link
                  href="/book-demo"
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    rounded-full
                    !border
                    !border-white/30
                    !bg-transparent
                    px-5
                    text-sm
                    font-semibold
                    leading-6
                    !text-white
                    opacity-100
                    transition
                    hover:!bg-white/10
                    hover:!text-white
                    sm:px-6
                  "
                >
                  Book a demo
                </Link>

                {/* GLOBAL BILLING */}
                <Link
                  href="/global-billing"
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    rounded-full
                    !border
                    !border-white/30
                    !bg-transparent
                    px-5
                    text-sm
                    font-semibold
                    leading-6
                    !text-white
                    opacity-100
                    transition
                    hover:!bg-white/10
                    hover:!text-white
                    sm:px-6
                  "
                >
                  Global billing
                </Link>
              </div>

              {/* Note */}
              <p
                className="
                  !m-0
                  w-full
                  max-w-[470px]
                  pt-1
                  text-xs
                  font-normal
                  leading-5
                  !text-white/50
                  sm:text-sm
                  sm:leading-6
                "
              >
                Aging bands guide work. They are not judgments about people.
                <br className="hidden sm:block" />
                Availability varies by plan, provider, entity, market and
                policy.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div
              className="
                relative
                z-10
                w-full
                lg:ml-auto
                lg:max-w-[478px]
              "
            >
              {/* Workflow Card */}
              <div
                className="
                  relative
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white
                  p-5
                  sm:p-6
                  lg:min-h-[430px]
                  lg:p-7
                "
              >
                <div className="flex h-full flex-col">
                  {/* Card heading */}
                  <div className="mb-2">
                    <p
                      className="
                        !m-0
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-slate-400
                      "
                    >
                      Receivables workflow
                    </p>
                  </div>

                  {/* Steps */}
                  <div className="flex-1">
                    {steps.map((step, index) => (
                      <div
                        key={step.number}
                        className={`
                          flex
                          min-h-[58px]
                          items-center
                          gap-3
                          py-2.5
                          ${
                            index !== steps.length - 1
                              ? "border-b border-slate-200"
                              : ""
                          }
                        `}
                      >
                        {/* Number */}
                        <div
                          className="
                            flex
                            h-7
                            min-w-7
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-slate-900
                            px-1.5
                          "
                        >
                          <span
                            className="
                              text-[10px]
                              font-semibold
                              leading-4
                              text-white
                            "
                          >
                            {step.number}
                          </span>
                        </div>

                        {/* Step Content */}
                        <div className="min-w-0 flex-1">
                          <p
                            className="
                              !m-0
                              text-sm
                              font-semibold
                              leading-5
                              text-slate-900
                            "
                          >
                            {step.title}
                          </p>

                          <p
                            className="
                              !m-0
                              text-xs
                              font-normal
                              leading-5
                              text-slate-500
                            "
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Card Footer */}
                  <div className="mt-3.5 border-t border-slate-200 pt-3.5">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-semibold
                        leading-6
                        text-slate-900
                      "
                    >
                      Billing clarity from invoice to payment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Explore Button */}
              <div className="mt-3 flex w-full">
                <Link
                  href="/payments-and-reconcilliation"
                  className="
                    inline-flex
                    min-h-11
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    !border
                    !border-white/30
                    !bg-transparent
                    px-5
                    text-sm
                    font-semibold
                    leading-6
                    !text-white
                    opacity-100
                    transition
                    hover:!bg-white/10
                    hover:!text-white
                    sm:w-auto
                    sm:px-6
                  "
                >
                  Explore Payments &amp; Reconciliation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}