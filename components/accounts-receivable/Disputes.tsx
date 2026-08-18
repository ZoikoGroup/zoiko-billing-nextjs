"use client";

import React from "react";
import Image from "next/image";

const disputeItems = [
  {
    title: "Reason and scope",
    description:
      "Why it was raised, and which documents or amounts it affects.",
  },
  {
    title: "Owner and reviewer",
    description:
      "Who holds the dispute, and who will decide it.",
  },
  {
    title: "Evidence",
    description:
      "Evidence requested from the customer, and evidence provided.",
  },
  {
    title: "Hold type and dates",
    description:
      "The hold applied, its scope and its effective dates.",
  },
  {
    title: (
      <>
        Communication
        <br />
        status
      </>
    ),
    description:
      "What the customer has been told, and when.",
  },
  {
    title: "Resolution",
    description:
      "Resolved, partially resolved, rejected or escalated, with the reason.",
  },
];

export default function Disputes() {
  return (
    <section className="w-full bg-white dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 py-12 sm:px-6 md:px-8 lg:px-12 lg:py-24 xl:px-28">
        <div className="flex w-full max-w-[1220px] flex-col gap-9 lg:px-12">

          {/* =====================================================
              HEADER
          ====================================================== */}
          <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">

            {/* Left */}
            <div className="flex w-full flex-1 flex-col items-start gap-5 lg:pb-5">

              {/* Label */}
              <div className="flex h-4 items-center">
                <div className="h-0.5 w-5 rounded-sm bg-gradient-to-r from-cyan-500 to-sky-600" />

                <span className="ml-[10px] text-xs font-medium uppercase leading-4 tracking-wider text-sky-600 dark:text-sky-400">
                  Disputes and holds
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-[638px] text-3xl font-medium leading-[1.12] text-sky-950 sm:text-4xl lg:text-5xl dark:text-white">
                Pause ordinary action
                <br className="hidden sm:block" />
                when the balance or
                <br className="hidden sm:block" />
                process is under review.
              </h2>
            </div>

            {/* Right Description */}
            <div className="w-full max-w-[529px]">
              <p className="text-sm font-normal leading-7 text-slate-600 sm:text-base dark:text-slate-300">
                A dispute is a neutral review state. It is not an admission,
                and it is not proof of error on either side.
              </p>
            </div>
          </div>

          {/* =====================================================
              MAIN CONTENT
          ====================================================== */}
          <div className="flex w-full flex-col gap-10 pt-2 lg:gap-16 lg:pt-6 xl:flex-row">

            {/* ===================================================
                LEFT — DISPUTE RECORD
            ==================================================== */}
            <div className="flex w-full flex-col gap-1.5 xl:w-1/2">

              <h3 className="text-lg font-semibold leading-6 text-sky-950 dark:text-white">
                What a dispute records
              </h3>

              {/* Rows */}
              <div className="flex w-full flex-col">

                {disputeItems.map((item, index) => (
                  <div
                    key={index}
                    className={`
                      flex
                      w-full
                      flex-col
                      gap-3
                      border-b
                      border-gray-200
                      py-3.5
                      sm:flex-row
                      sm:items-end
                      sm:gap-4
                      dark:border-slate-700
                      ${index === 0 ? "pt-3" : ""}
                      ${index === disputeItems.length - 1 ? "border-b-0" : ""}
                    `}
                  >
                    {/* Title */}
                    <div className="w-full shrink-0 sm:w-36">
                      <h4 className="text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                        {item.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <div className="flex-1">
                      <p className="text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===================================================
                RIGHT — IMAGE + BOUNDARY
            ==================================================== */}
            <div className="flex w-full flex-col gap-8 xl:w-1/2">

              {/* Image */}
              <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0px_4px_14px_0px_rgba(14,33,27,0.04)] dark:border-slate-700 dark:bg-slate-900">
                <Image
                  src="/accounts-receivable/disputes-holds.png"
                  alt="Disputes and holds workflow"
                  width={526}
                  height={498}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Dispute Boundary */}
              <div className="w-full rounded-r-2xl border-l-[3px] border-sky-500 bg-gray-100 px-5 py-6 sm:px-7 sm:py-7 dark:bg-slate-800">

                <span className="text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
                  Dispute boundary
                </span>

                <p className="mt-2 text-sm font-normal leading-7 text-sky-950 sm:text-base dark:text-slate-100">
                  A dispute is not an admission or proof of error. Legal and
                  formal complaint processes require approved routes and human
                  review — they are never handled as ordinary follow-up.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}