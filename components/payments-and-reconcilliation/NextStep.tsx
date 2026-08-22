"use client";

import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Evidence",
    description: "Source event, kept verbatim",
  },
  {
    number: "02",
    title: "Normalize",
    description: "Mapped state, original retained",
  },
  {
    number: "03",
    title: "Match",
    description: "Candidates with confidence",
  },
  {
    number: "04",
    title: "Allocate",
    description: "Reversible relationship",
  },
  {
    number: "05",
    title: "Exceptions",
    description: "Visible and owned",
  },
  {
    number: "06",
    title: "Handoff",
    description: "Accounting stays separate",
  },
];

export default function NextStep() {
  return (
    <section
      className="
        w-full
        bg-white
        px-5
        py-16
        transition-colors
        duration-300
        sm:px-8
        md:px-10
        lg:px-14
        xl:px-28
        xl:py-24
        dark:bg-slate-950
      "
    >
      {/* MAIN DARK CONTAINER */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1220px]
          rounded-[24px]
          bg-[#092A49]
          px-6
          py-8
          sm:px-8
          sm:py-10
          md:px-10
          md:py-12
          lg:px-12
          lg:py-14
          xl:px-12
        "
      >
        <div
          className="
            flex
            w-full
            flex-col
            items-stretch
            gap-10
            lg:flex-row
            lg:items-center
            lg:gap-16
          "
        >
          {/* ===================================================== */}
          {/* LEFT SIDE */}
          {/* ===================================================== */}

          <div
            className="
              flex
              min-w-0
              flex-1
              flex-col
              items-start
              pt-2.5
              lg:pb-4
            "
          >
            {/* NEXT STEP LABEL */}
            <div className="mb-4 flex h-4 items-center">
              <div
                className="
                  mr-2.5
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
                  !text-cyan-300
                  font-mono
                  text-xs
                  font-medium
                  uppercase
                  leading-4
                  tracking-wider
                "
              >
                Next step
              </span>
            </div>

            {/* HEADING */}
            <div className="w-full max-w-[660px] pt-1">
              <h2
                className="
                  !text-white
                  text-[38px]
                  font-medium
                  leading-[1.05]
                  tracking-tight
                  sm:text-[42px]
                  md:text-[46px]
                  lg:text-5xl
                  lg:leading-[50.16px]
                "
              >
                Start with the
                <br />
                payment evidence
                <br />
                your operation
                <br />
                needs to connect.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-5 w-full max-w-[529px]">
              <p
                className="
                  !text-slate-300
                  text-sm
                  font-normal
                  leading-7
                  sm:text-base
                  sm:leading-8
                "
              >
                Decide which sources you trust, where automatic matching
                should stop, and who owns the money that does not fit
                anywhere yet.
              </p>
            </div>

            {/* LEFT CTAS */}
            <div className="mt-5 flex w-full flex-wrap items-center gap-3">
              {/* CREATE ACCOUNT */}
              <Link
                href="/create-account"
                className="
                  !text-white
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-blue-500
                  bg-[#2477FF]
                  px-5
                  py-2
                  text-base
                  font-normal
                  leading-6
                  no-underline
                  transition
                  duration-200
                  hover:bg-blue-600
                  hover:!text-white
                "
              >
                Create Account
              </Link>

              {/* BOOK A DEMO */}
              <Link
                href="/book-a-demo"
                className="
                  !text-white
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/30
                  px-5
                  py-2
                  text-base
                  font-normal
                  leading-6
                  no-underline
                  transition
                  duration-200
                  hover:border-white/50
                  hover:bg-white/5
                  hover:!text-white
                "
              >
                Book a Demo
              </Link>

              {/* INTEGRATIONS */}
              <Link
                href="/integrations"
                className="
                  !text-cyan-400
                  inline-flex
                  min-h-11
                  items-center
                  gap-2
                  px-0
                  py-2
                  text-base
                  font-normal
                  leading-6
                  no-underline
                  transition
                  duration-200
                  hover:!text-cyan-300
                "
              >
                <span className="!text-cyan-400">
                  Integrations
                </span>

                <span className="!text-cyan-400 font-mono text-base font-bold">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* ===================================================== */}
          {/* RIGHT SIDE */}
          {/* ===================================================== */}

          <div
            className="
              flex
              min-w-0
              flex-1
              flex-col
              items-start
              gap-5
            "
          >
            {/* EVIDENCE CARD */}
            <div
              className="
                relative
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/[0.05]
                shadow-[0px_4px_14px_rgba(0,0,0,0.08)]
                backdrop-blur-sm
                px-5
                py-5
                sm:px-6
                lg:h-[551.33px]
                lg:px-7
                lg:py-7
              "
            >
              <div className="flex w-full flex-col">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="
                      flex
                      min-h-[73px]
                      w-full
                      items-center
                      gap-3
                      border-b
                      border-white/[0.12]
                      py-2.5
                    "
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
                        border
                        border-white/10
                        bg-gradient-to-br
                        from-cyan-400
                        to-blue-500
                      "
                    >
                      <span
                        className="
                          !text-white
                          font-mono
                          text-[9px]
                          font-normal
                          leading-4
                        "
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* STEP CONTENT */}
                    <div className="min-w-0 flex-1">
                      <p
                        className="
                          !text-slate-200
                          text-sm
                          font-normal
                          leading-6
                        "
                      >
                        {step.title}
                      </p>

                      <p
                        className="
                          !text-slate-500
                          mt-0.5
                          font-mono
                          text-[9.8px]
                          font-normal
                          leading-4
                        "
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* BOTTOM CARD TEXT */}
                <div
                  className="
                    mt-3
                    border-t
                    border-white/[0.16]
                    px-2.5
                    pt-3.5
                  "
                >
                  <p
                    className="
                      !text-white
                      text-sm
                      font-semibold
                      leading-6
                    "
                  >
                    Billing clarity from invoice to payment.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT CTA */}
            <div className="flex w-full items-center justify-start">
              <Link
                href="/outstanding-balances"
                className="
                  !text-white
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/30
                  px-5
                  py-2
                  text-base
                  font-normal
                  leading-6
                  no-underline
                  transition
                  duration-200
                  hover:border-white/50
                  hover:bg-white/5
                  hover:!text-white
                "
              >
                Explore Outstanding Balances
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}