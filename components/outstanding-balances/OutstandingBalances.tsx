"use client";

import React from "react";
import Image from "next/image";

export default function OutstandingBalances() {
  return (
    <section
      className="
        w-full
        border-b
        border-zinc-200
        bg-gradient-to-b
        from-white
        to-[#F8FAFD]

        dark:border-zinc-800
        dark:from-[#0B1220]
        dark:to-[#111827]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-6
          pt-6
          pb-14

          sm:px-8
          md:px-12
          lg:px-20
          xl:px-32
        "
      >
        <div
          className="
            flex
            min-h-[320px]
            w-full
            flex-col
            justify-between
            gap-10

            lg:flex-row
            lg:items-center
            lg:gap-12
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start

              lg:w-[52%]
              lg:max-w-[620px]
            "
          >
            {/* LABEL */}
            <div className="relative flex h-4 items-center">
              <div
                className="
                  h-px
                  w-5
                  bg-slate-400
                  opacity-60

                  dark:bg-slate-500
                "
              />

              <span
                className="
                  ml-3
                  whitespace-nowrap
                  text-[10px]
                  font-semibold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#7C8DA5]

                  dark:text-[#8FA3BD]
                "
              >
                Receivables · Detailed view
              </span>
            </div>

            {/* HEADING */}
            <div className="mt-4 w-full max-w-[620px]">
              <h1
                className="
                  text-[34px]
                  font-extrabold
                  leading-[1.08]
                  tracking-[-0.7px]
                  text-[#111A2E]

                  sm:text-[36px]
                  md:text-[38px]
                  lg:text-[40px]

                  dark:text-white
                "
              >
                <span className="block">
                  Every outstanding
                </span>

                <span className="block">
                  balance, traced to{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    its
                  </span>
                </span>

                <span className="block text-blue-600 dark:text-blue-400">
                  invoice.
                </span>
              </h1>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-4 w-full max-w-[606px]">
              <p
                className="
                  text-[14px]
                  font-normal
                  leading-6
                  text-[#667085]

                  sm:text-[15px]
                  md:text-base

                  dark:text-[#AAB7C8]
                "
              >
                One record per account, aged to the day. Open a balance to see
                the invoices behind it, the payments applied, and every
                reminder that has already gone out.
              </p>
            </div>

            {/* BUTTON */}
            <div className="mt-3">
              <button
                type="button"
                className="
                  h-10
                  rounded-full
                  bg-blue-600
                  px-5
                  text-sm
                  font-semibold
                  leading-6
                  text-white
                  shadow-[0px_6px_16px_rgba(31,111,235,0.24)]
                  transition
                  hover:bg-blue-700

                  dark:bg-blue-500
                  dark:hover:bg-blue-600
                "
              >
                Get Demo
              </button>
            </div>
          </div>

          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}
          <div
            className="
              flex
              w-full
              items-center
              justify-center

              lg:w-[408px]
              lg:flex-none
              lg:justify-end
            "
          >
            <Image
              src="/images/outstanding-balances/image.png"
              alt="Outstanding balances detailed receivables view"
              width={408}
              height={400}
              priority
              className="
                h-auto
                w-[280px]
                rounded-2xl
                object-contain

                sm:w-[320px]
                md:w-[360px]
                lg:w-[408px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}