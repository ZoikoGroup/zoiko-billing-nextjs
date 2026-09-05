'use client';

import React from 'react';
import Link from 'next/link';

export default function BringClaritySection() {
  const steps = [
    { number: '01', title: 'Customer', subtitle: 'Profile and terms' },
    { number: '02', title: 'Charge', subtitle: 'Approved basis' },
    { number: '03', title: 'Invoice', subtitle: 'Issued and delivered' },
    { number: '04', title: 'Payment', subtitle: 'Recorded and reconciled' },
    { number: '05', title: 'Balance', subtitle: 'Status and ageing' },
    { number: '06', title: 'Reporting', subtitle: 'Source, period, entity' },
  ];

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
          "
        >
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-3xl
              bg-[#091127]
              px-6
              py-8
              shadow-[0_12px_32px_rgba(15,23,42,0.08)]
              sm:px-8
              sm:py-10
              md:px-10
              md:py-12
              lg:px-14
              lg:py-14
              xl:px-16
            "
          >
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-10

                lg:flex-row
                lg:justify-between
                lg:gap-14
              "
            >
              {/* LEFT COLUMN */}
              <div
                className="
                  flex
                  w-full
                  flex-1
                  flex-col
                  items-start
                  gap-4
                "
              >
                {/* EYEBROW */}
                <div className="flex items-center gap-3">
                  <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-60" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.16em]
                      text-[#8da5c8]

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
                    max-w-[660px]
                    !text-[30px]
                    !font-extrabold
                    !leading-[1.2]
                    !tracking-[-0.035em]
                    !text-white

                    sm:!text-[34px]

                    md:!text-[38px]

                    lg:!text-[42px]
                  "
                >
                  Choose the Zoiko Billing path that matches your operating
                  model.
                </h2>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    w-full
                    max-w-[560px]
                    text-[15px]
                    font-normal
                    leading-7
                    text-[#b6c2d5]

                    sm:text-base
                  "
                >
                  Start on your own, or talk to us about entities,
                  integrations and jurisdiction requirements.
                </p>

                {/* ACTIONS */}
                <div
                  className="
                    flex
                    w-full
                    flex-col
                    items-start
                    gap-3
                    pt-2

                    sm:flex-row
                    sm:flex-wrap
                    sm:items-center
                    sm:gap-4
                  "
                >
                  <Link
                    href="/create-account"
                    className="
                      inline-flex
                      min-h-11
                      w-full
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#2563eb]
                      px-5
                      py-2
                      text-sm
                      font-semibold
                      leading-5
                      text-white
                      transition-colors
                      duration-150
                      hover:bg-[#1d4ed8]
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#7890b2]
                      focus:ring-offset-2
                      focus:ring-offset-[#091127]

                      sm:w-auto
                    "
                  >
                    Create Account
                  </Link>

                  <Link
                    href="/book-demo"
                    className="
                      inline-flex
                      min-h-11
                      w-full
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/20
                      bg-white/[0.03]
                      px-5
                      py-2
                      text-sm
                      font-semibold
                      leading-5
                      !text-white
                      transition-colors
                      duration-150
                      hover:bg-white/[0.08]
                      hover:border-white/30
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#7890b2]
                      focus:ring-offset-2
                      focus:ring-offset-[#091127]

                      sm:w-auto
                    "
                  >
                    Book a Demo
                  </Link>

                  <Link
                    href="/pricing-and-plans"
                    className="
                      group
                      inline-flex
                      min-h-11
                      items-center
                      gap-2
                      py-2
                      text-sm
                      font-medium
                      leading-5
                      !text-[#8da5c8]
                      transition-colors
                      duration-150
                      hover:text-white
                      focus:outline-none
                    "
                  >
                    <span>View Pricing</span>

                    <span
                      className="
                        transition-transform
                        duration-150
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div
                className="
                  flex
                  w-full
                  flex-1
                  flex-col
                  items-start

                  lg:max-w-[520px]
                "
              >
                {/* WORKFLOW CARD */}
                <div
                  className="
                    flex
                    min-h-[420px]
                    w-full
                    flex-col
                    justify-between
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-5
                    shadow-[0_8px_24px_rgba(0,0,0,0.12)]

                    sm:p-6

                    md:p-7
                  "
                >
                  {/* STEPS */}
                  <div className="flex w-full flex-col">
                    {steps.map((step, index) => (
                      <div
                        key={step.number}
                        className={`
                          flex
                          items-start
                          gap-4
                          py-3.5
                          ${
                            index !== steps.length - 1
                              ? 'border-b border-white/10'
                              : ''
                          }
                        `}
                      >
                        <div
                          className="
                            flex
                            h-7
                            w-7
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-white/10
                            bg-white/[0.06]
                            text-[10px]
                            font-bold
                            leading-4
                            text-[#8da5c8]
                          "
                        >
                          {step.number}
                        </div>

                        <div className="flex flex-col items-start gap-0.5">
                          <span
                            className="
                              text-sm
                              font-semibold
                              leading-6
                              text-[#e4e9f1]
                            "
                          >
                            {step.title}
                          </span>

                          <span
                            className="
                              text-[11px]
                              font-normal
                              leading-5
                              text-[#8da5c8]
                            "
                          >
                            {step.subtitle}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CARD FOOTER */}
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-6
                        text-white
                      "
                    >
                      Billing clarity from invoice to payment.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}