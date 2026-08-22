"use client";

import React from "react";

const paymentItems = [
  {
    title: "Payment states",
    description:
      "Initiated, received, settled, failed, reversed and unknown are each treated differently.",
  },
  {
    title: "Allocation",
    description:
      "Which documents a payment has been applied to, and for how much.",
  },
  {
    title: "Unmatched or partial",
    description:
      "Payment evidence that exists but is not fully settled or allocated yet.",
  },
  {
    title: "Currency and value date",
    description:
      "The currency paid in and the value date that applies to it.",
  },
  {
    title: "Provider and bank references",
    description:
      "The source references that make the payment traceable.",
  },
  {
    title: "Reconciliation exceptions",
    description:
      "Open exceptions with an owner, surfaced before contact is made.",
  },
];

export default function Payments() {
  return (
    <section className="w-full bg-gray-100 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 py-12 sm:px-6 md:px-8 lg:px-12 lg:py-24 xl:px-28">
        <div className="flex w-full max-w-[1220px] flex-col gap-9 lg:px-12">

          {/* =====================================================
              HEADER
          ====================================================== */}
          <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">

            {/* Left */}
            <div className="flex w-full flex-1 flex-col items-start gap-5 lg:pb-6">

              {/* Label */}
              <div className="flex h-4 items-center">
                <div className="h-0.5 w-5 rounded-sm bg-gradient-to-r from-cyan-500 to-sky-600" />

                <span className="ml-[10px] text-xs font-medium uppercase leading-4 tracking-wider text-sky-600 dark:text-sky-400">
                  Payment context
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-[638px] text-3xl font-medium leading-[1.12] text-sky-950 sm:text-4xl lg:text-5xl dark:text-white">
                Revalidate payments
                <br className="hidden sm:block" />
                and allocations before
                <br className="hidden sm:block" />
                the next contact.
              </h2>
            </div>

            {/* Right */}
            <div className="w-full max-w-[529px]">
              <p className="text-sm font-normal leading-7 text-slate-600 sm:text-base dark:text-slate-300">
                The most avoidable receivables mistake is chasing money that
                already arrived. Payment state is rechecked before any
                follow-up proceeds.
              </p>
            </div>
          </div>

          {/* =====================================================
              PAYMENT CARDS
          ====================================================== */}
          <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 pt-2.5 sm:grid-cols-2 lg:grid-cols-3 dark:border-slate-700 dark:bg-slate-700">

            {paymentItems.map((item, index) => (
              <div
                key={item.title}
                className={`
                  flex
                  min-h-[175px]
                  flex-col
                  items-start
                  bg-white
                  px-6
                  py-6
                  dark:bg-slate-900
                  ${
                    index === 0
                      ? "lg:pt-6"
                      : ""
                  }
                `}
              >
                <h3 className="text-base font-semibold leading-6 text-sky-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* =====================================================
              PAYMENT BOUNDARY
          ====================================================== */}
          <div className="w-full rounded-r-2xl border-l-[3px] border-sky-500 bg-gray-100 px-5 py-7 sm:px-7 sm:py-9 dark:bg-slate-800">

            <span className="text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
              Payment boundary
            </span>

            <p className="mt-2 max-w-[850px] text-sm font-normal leading-7 text-sky-950 sm:text-base dark:text-slate-100">
              An item is never marked paid from an unverified or unallocated
              event. Zoiko Billing makes no claim of universal payment
              processing or automatic reconciliation, and a remaining amount
              always reflects current approved relationships only.
            </p>
          </div>

          {/* =====================================================
              CTA
          ====================================================== */}
          <div className="flex w-full justify-center">
            <button
              type="button"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                border
                border-sky-950
                bg-sky-950
                px-5
                py-2.5
                text-center
                text-sm
                font-normal
                leading-6
                text-white
                transition
                hover:bg-sky-900
                dark:border-sky-400
                dark:bg-sky-400
                dark:text-slate-950
                dark:hover:bg-sky-300
              "
            >
              Explore Payments &amp; Reconciliation
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}