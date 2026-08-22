"use client";

import React from "react";
import Image from "next/image";

const ownershipItems = [
  {
    title: (
      <>
        Named owner and
        <br />
        queue
      </>
    ),
    description:
      "Every actionable item sits with a person, team or operational queue.",
  },
  {
    title: (
      <>
        Assignment source
        <br />
        and reason
      </>
    ),
    description: "Why it was assigned, by what, and from when.",
  },
  {
    title: (
      <>
        Service or review
        <br />
        target
      </>
    ),
    description:
      "The review target for that item, where service levels are supported.",
  },
  {
    title: (
      <>
        Manual or rule-based
        <br />
        priority
      </>
    ),
    description:
      "Prioritisation from approved operational context such as amount, age or entity.",
  },
  {
    title: (
      <>
        Reassignment and
        <br />
        cover
      </>
    ),
    description:
      "Reassignment, escalation and absence cover so nothing stalls silently.",
  },
  {
    title: <>Workload visibility</>,
    description:
      "Open workload and unresolved exceptions visible per owner and queue.",
  },
];

export default function Ownership() {
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
                  Ownership
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-[750px] text-3xl font-medium leading-[1.12] text-sky-950 sm:text-4xl lg:text-5xl dark:text-white">
                Make ownership, priority and review time explicit.
              </h2>
            </div>

            {/* Right */}
            <div className="w-full max-w-[529px]">
              <p className="text-sm font-normal leading-7 text-slate-600 sm:text-base dark:text-slate-300">
                Work is distributed by rules you can read, using approved
                operational context — not by a hidden score nobody can explain.
              </p>
            </div>
          </div>

          {/* =====================================================
              MAIN CONTENT
          ====================================================== */}
          <div className="flex w-full flex-col gap-10 pt-2 lg:gap-16 lg:pt-6 xl:flex-row">

            {/* ===================================================
                LEFT CONTENT
            ==================================================== */}
            <div className="flex w-full flex-col gap-8 xl:w-1/2">

              {/* Ownership Rules */}
              <div className="flex w-full flex-col">

                {ownershipItems.map((item, index) => (
                  <div
                    key={index}
                    className={`
                      flex
                      w-full
                      flex-col
                      gap-3
                      border-b
                      border-gray-200
                      py-4
                      sm:flex-row
                      sm:items-start
                      sm:gap-4
                      dark:border-slate-700
                      ${
                        index === 0
                          ? "pt-3.5"
                          : index === ownershipItems.length - 1
                          ? "pb-3.5"
                          : ""
                      }
                    `}
                  >
                    {/* Title */}
                    <div className="w-full shrink-0 sm:w-36">
                      <h3 className="text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                        {item.title}
                      </h3>
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

              {/* Prioritisation Boundary */}
              <div className="w-full rounded-r-2xl border-l-[3px] border-sky-500 bg-gray-100 px-5 py-6 sm:px-7 sm:py-7 dark:bg-slate-800">

                <span className="text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
                  Prioritisation boundary
                </span>

                <p className="mt-2 text-sm font-normal leading-7 text-sky-950 sm:text-base dark:text-slate-100">
                  Operational priority is not a risk score or a
                  payment-propensity prediction. Priority never overrides a
                  dispute, a consent restriction, a legal constraint or a
                  communication rule.
                </p>
              </div>
            </div>

            {/* ===================================================
                RIGHT PRODUCT IMAGE
            ==================================================== */}
            <div className="flex w-full flex-col gap-3 xl:w-1/2">

              <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-slate-700 dark:bg-slate-900">
                <Image
                  src="/accounts-receivable/ownership-workflow.png"
                  alt="Ownership and workflow view"
                  width={526}
                  height={481}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* =====================================================
              FULL WIDTH IMAGE
          ====================================================== */}
          <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 dark:border-slate-700">
            <Image
              src="/accounts-receivable/ownership-automation.png"
              alt="Automation and workflow ownership"
              width={1116}
              height={558}
              className="h-auto w-full object-cover"
            />
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
              Explore Automation &amp; Workflows
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}