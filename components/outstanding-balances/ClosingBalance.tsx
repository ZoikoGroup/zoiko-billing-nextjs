"use client";

import React from "react";

const reconciliationRows = [
  {
    label: "Opening balance",
    value: "£2,731,900",
  },
  {
    label: "Invoiced",
    value: "£826,890",
  },
  {
    label: "Payments applied",
    value: "−£1,072,480",
  },
  {
    label: "Credit notes",
    value: "−£0",
  },
  {
    label: "Closing balance",
    value: "£2,486,310",
  },
];

export default function ClosingBalance() {
  return (
    <section
      className="
        w-full
        bg-white
        px-4
        py-8
        transition-colors
        sm:px-6
        lg:px-8
        dark:bg-[#0B1728]
      "
    >
      <div className="relative mx-auto w-full max-w-[1184px] overflow-hidden rounded-3xl bg-[#142f4a] p-6 sm:p-8 md:p-10 lg:p-14">

        {/* Background glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-64
            w-64
            rounded-full
            bg-[radial-gradient(circle,rgba(72,177,255,0.5)_0%,rgba(72,177,255,0)_70%)]
            sm:-right-16
            sm:-top-16
            sm:h-72
            sm:w-72
            lg:-right-14
            lg:-top-20
            lg:h-80
            lg:w-80
          "
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-6">

          {/* Heading + description + buttons */}
          <div className="flex flex-col items-start gap-3.5">

            <h2
              className="
                max-w-full
                text-2xl
                font-bold
                leading-tight
                text-white
                sm:text-3xl
                sm:leading-10
                lg:text-4xl
                lg:leading-10
              "
            >
              Close the month with nothing
              <br className="hidden sm:block" />
              left to reconcile.
            </h2>

            <p
              className="
                max-w-full
                text-sm
                font-normal
                leading-6
                text-white/70
                sm:max-w-[520px]
                sm:text-base
              "
            >
              Balances, payments and credit notes sit on one record, so the
              number you report is the number in the ledger.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">

              <button
                type="button"
                className="
                  h-10
                  rounded-full
                  bg-white
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  leading-6
                  text-[#142f4a]
                  outline
                  outline-1
                  outline-offset-[-1px]
                  outline-white
                  transition
                  hover:bg-slate-100
                "
              >
                Create account
              </button>

              <button
                type="button"
                className="
                  h-10
                  rounded-full
                  border
                  border-white/35
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  leading-6
                  text-white
                  transition
                  hover:bg-white/10
                "
              >
                Talk to sales
              </button>

            </div>
          </div>

          {/* Reconciliation card */}
          <div
            className="
              w-full
              rounded-2xl
              border
              border-white/15
              bg-white/[0.06]
              p-4
              sm:p-5
            "
          >
            {reconciliationRows.map((row, index) => (
              <div
                key={row.label}
                className={`
                  flex
                  items-center
                  justify-between
                  gap-4
                  py-2.5
                  ${index !== 0 ? "border-t border-white/10" : ""}
                `}
              >
                <span className="text-sm font-normal leading-5 text-white/60">
                  {row.label}
                </span>

                <span
                  className="
                    shrink-0
                    text-right
                    text-sm
                    font-semibold
                    leading-5
                    text-white
                    sm:text-base
                  "
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}