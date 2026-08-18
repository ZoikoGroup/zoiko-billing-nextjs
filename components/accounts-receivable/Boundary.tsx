"use client";

import React from "react";

const principles = [
  {
    number: "01",
    title: (
      <>
        Balances stay
        <br />
        connected
      </>
    ),
    description: (
      <>
        Every figure traces back
        <br />
        to its source documents,
        <br />
        credits and payments.
      </>
    ),
  },
  {
    number: "02",
    title: (
      <>
        Every item has an
        <br />
        owner
      </>
    ),
    description: (
      <>
        Actionable work carries
        <br />
        a named owner and an
        <br />
        explicit next action.
      </>
    ),
  },
  {
    number: "03",
    title: (
      <>
        State is revalidated
        <br />
        first
      </>
    ),
    description: (
      <>
        Customer and payment
        <br />
        context is rechecked
        <br />
        before any
        <br />
        communication.
      </>
    ),
  },
  {
    number: "04",
    title: (
      <>
        Holds change the
        <br />
        path
      </>
    ),
    description: (
      <>
        Disputes, holds and
        <br />
        promises interrupt the
        <br />
        ordinary follow-up
        <br />
        sequence.
      </>
    ),
  },
  {
    number: "05",
    title: (
      <>
        Decisions are
        <br />
        attributable
      </>
    ),
    description: (
      <>
        Communication and
        <br />
        decisions record who
        <br />
        acted and on what
        <br />
        basis.
      </>
    ),
  },
  {
    number: "06",
    title: <>Availability varies</>,
    description: (
      <>
        Plan, provider, entity,
        <br />
        market and policy all
        <br />
        affect what is available.
      </>
    ),
  },
];

export default function Boundary() {
  return (
    <section className="w-full bg-gray-100 px-4 py-12 sm:px-6 md:px-8 lg:px-12 lg:py-20 xl:px-28 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-8 lg:gap-11">
        {/* Principles */}
        <div className="grid w-full grid-cols-1 overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 dark:border-slate-700 dark:bg-slate-700">
          {principles.map((item, index) => (
            <div
              key={item.number}
              className={`
                flex min-h-[220px] flex-col items-start
                bg-white px-5 py-5
                transition-colors
                dark:bg-slate-900
                ${
                  index < principles.length - 1
                    ? "border-b border-gray-200 sm:border-r lg:border-b-0 xl:border-r dark:border-slate-700"
                    : ""
                }
              `}
            >
              {/* Number */}
              <div className="w-full">
                <span className="text-[10px] font-normal leading-4 tracking-wide text-sky-600 dark:text-sky-400">
                  {item.number}
                </span>
              </div>

              {/* Title */}
              <div className="w-full pt-2">
                <h3 className="text-base font-semibold leading-5 text-sky-950 dark:text-white">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="mt-2">
                <p className="text-sm font-normal leading-5 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Operating Boundary */}
        <div className="w-full rounded-r-2xl border-l-[3px] border-sky-500 bg-gray-100 px-5 py-6 sm:px-7 sm:py-7 dark:bg-slate-900">
          <div className="flex flex-col items-start gap-2">
            {/* Label */}
            <div className="w-full">
              <span className="text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
                Operating boundary
              </span>
            </div>

            {/* Content */}
            <div className="w-full max-w-[761px]">
              <p className="text-sm font-normal leading-6 text-sky-950 sm:text-base sm:leading-7 dark:text-slate-100">
                This is controlled receivables operations, not an autonomous
                debt-collection service. Zoiko Billing makes no claim of
                guaranteed payment, credit scoring or legal enforcement, and an
                overdue item is not evidence that a balance is valid,
                undisputed or collectible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}