'use client';

import Link from 'next/link';

interface StepItem {
  number: string;
  title: string;
  subtitle: string;
}

const STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Role',
    subtitle: 'Named responsibility',
  },
  {
    number: '02',
    title: 'Scope',
    subtitle: 'Entity, amount, action, time',
  },
  {
    number: '03',
    title: 'Permission',
    subtitle: 'Explicit ability to act',
  },
  {
    number: '04',
    title: 'Policy',
    subtitle: 'Allow, deny, require approval',
  },
  {
    number: '05',
    title: 'Decision',
    subtitle: 'Recorded with a reason',
  },
  {
    number: '06',
    title: 'Evidence',
    subtitle: 'Requester, approver, result',
  },
];

export default function NextStepSection() {
  return (
    <section className="w-full !bg-white px-4 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 xl:px-20">
      <div className="mx-auto w-full max-w-[1440px]">
        <div
          className="
            mx-auto
            w-full
            max-w-[1240px]
            overflow-hidden
            rounded-[28px]
            !bg-slate-950
            px-5
            py-8
            !text-white
            shadow-[0_24px_80px_rgba(15,23,42,0.22)]

            sm:px-8
            sm:py-10

            lg:px-10
            lg:py-10
          "
        >
          <div
            className="
              grid
              gap-8

              sm:gap-10

              md:gap-11

              lg:grid-cols-[1.05fr_0.95fr]
              lg:items-center
              lg:gap-12
            "
          >
            {/* LEFT CONTENT */}
            <div className="flex h-full flex-col justify-center gap-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5">
                <span className="h-px w-4 bg-cyan-400 opacity-60" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.16em]
                    !text-cyan-300

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
                  max-w-[760px]
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
                Start with the controls your billing operation requires.
              </h2>

              {/* Description */}
              <p
                className="
                  !m-0
                  w-full
                  max-w-[687px]
                  text-[15px]
                  font-normal
                  leading-7
                  !text-slate-300

                  sm:text-base
                "
              >
                Decide which actions deserve a second pair of eyes, who holds
                that authority, and how far it reaches - then let the evidence
                do the rest.
              </p>

              {/* CTA AREA */}
              <div className="flex flex-col gap-4 pt-1">
                {/* Primary + Secondary CTA */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* CREATE ACCOUNT */}
                  <Link
                    href="/create-account"
                    className="
                      inline-flex
                      min-h-[44px]
                      items-center
                      justify-center
                      rounded-lg
                      !border-0
                      !bg-blue-500
                      px-6
                      py-2.5
                      text-sm
                      font-semibold
                      !text-white
                      opacity-100
                      transition-colors
                      hover:!bg-blue-400
                      hover:!text-white
                      focus:outline-none
                      focus:ring-2
                      focus:ring-blue-300
                      focus:ring-offset-2
                      focus:ring-offset-slate-950
                    "
                  >
                    Create Account
                  </Link>

                  {/* BOOK A DEMO */}
                  <Link
                    href="/book-demo"
                    className="
                      inline-flex
                      min-h-[44px]
                      items-center
                      justify-center
                      rounded-lg
                      !border
                      !border-white/15
                      !bg-white/5
                      px-6
                      py-2.5
                      text-sm
                      font-semibold
                      !text-white
                      opacity-100
                      transition-colors
                      hover:!bg-white/10
                      hover:!text-white
                      focus:outline-none
                      focus:ring-2
                      focus:ring-white/25
                    "
                  >
                    Book a Demo
                  </Link>
                </div>

                {/* SECURITY OVERVIEW */}
                <div>
                  <Link
                    href="/security-overview"
                    className="
                      inline-flex
                      min-h-[44px]
                      items-center
                      justify-center
                      text-sm
                      font-semibold
                      !text-cyan-300
                      transition-colors
                      hover:!text-cyan-200
                      focus:outline-none
                    "
                  >
                    Security overview
                  </Link>
                </div>
              </div>

              {/* Note */}
              <div
                className="
                  pt-2
                  text-xs
                  font-normal
                  leading-6
                  !text-slate-400

                  sm:text-sm
                "
              >
                Scoped access and meaningful review, not a compliance
                guarantee.
                <br />
                Availability varies by plan, action, integration and
                jurisdiction.
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-col gap-4">
              {/* STEPS CARD */}
              <div
                className="
                  flex
                  flex-col
                  rounded-2xl
                  !border
                  !border-white/10
                  !bg-slate-900/80
                  p-5
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]

                  sm:p-6

                  md:p-8
                "
              >
                <div className="flex flex-col divide-y divide-white/10">
                  {STEPS.map((step) => (
                    <div
                      key={step.number}
                      className="
                        flex
                        items-center
                        gap-4
                        py-4
                        first:pt-0
                        last:pb-4
                      "
                    >
                      {/* NUMBER */}
                      <div
                        className="
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-gradient-to-br
                          from-cyan-500
                          to-blue-600
                          text-[10px]
                          font-bold
                          !text-white
                        "
                      >
                        {step.number}
                      </div>

                      {/* STEP TEXT */}
                      <div className="flex flex-col gap-0.5">
                        <span
                          className="
                            text-sm
                            font-semibold
                            leading-5
                            !text-white
                          "
                        >
                          {step.title}
                        </span>

                        <span
                          className="
                            text-xs
                            leading-5
                            !text-slate-400
                          "
                        >
                          {step.subtitle}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom statement */}
                <div className="mt-4 border-t border-white/10 pt-5">
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

              {/* EXPLORE INVOICES CTA */}
              <div>
                <Link
                  href="/invoices"
                  className="
                    inline-flex
                    min-h-[44px]
                    items-center
                    justify-center
                    rounded-lg
                    !border
                    !border-white/15
                    !bg-white
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    !text-slate-900
                    opacity-100
                    transition-colors
                    hover:!bg-slate-100
                    hover:!text-slate-900
                    focus:outline-none
                    focus:ring-2
                    focus:ring-white/40
                  "
                >
                  Explore Invoices &amp; Credit Notes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}