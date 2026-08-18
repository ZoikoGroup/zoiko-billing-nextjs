"use client";

import React from "react";
import Image from "next/image";

const checks = [
  {
    title: (
      <>
        Recipient and
        <br />
        preference
      </>
    ),
    description:
      "The current recipient, their contact preference and their language.",
  },
  {
    title: (
      <>
        Document and
        <br />
        balance context
      </>
    ),
    description:
      "The document, remaining balance and what was previously delivered.",
  },
  {
    title: "Template version",
    description: "The reminder or statement template version being used.",
  },
  {
    title: "Timing rules",
    description:
      "Channel, timing, local time, frequency and quiet-period rules where supported.",
  },
  {
    title: (
      <>
        Review before
        <br />
        sending
      </>
    ),
    description:
      "Configured sensitive or external communication waits for a decision.",
  },
  {
    title: (
      <>
        Consent and
        <br />
        restrictions
      </>
    ),
    description:
      "Opt-out, consent, restriction and vulnerable-customer handling where applicable.",
  },
];

const statements = [
  {
    number: "01",
    title: "Scope",
    description:
      "Document-level or customer-level, with the scope stated on the statement itself.",
  },
  {
    number: "02",
    title: "Movement",
    description:
      "Opening position, new activity, credits, payments and closing position.",
  },
  {
    number: "03",
    title: "Currency and entity",
    description:
      "Presented per entity and currency, or separated where totals cannot be combined.",
  },
  {
    number: "04",
    title: "Generation context",
    description:
      "Generation time, delivery time, and the template and data version used.",
  },
  {
    number: "05",
    title: "Recipient and access",
    description:
      "Recipient, channel and the access control applied to the statement.",
  },
  {
    number: "06",
    title: "Regeneration history",
    description:
      "Corrections and regenerations are recorded rather than replacing quietly.",
  },
];

export default function Communication() {
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
              <div className="flex h-4 items-center">
                <div className="h-0.5 w-5 rounded-sm bg-gradient-to-r from-cyan-500 to-sky-600" />

                <span className="ml-[10px] text-xs font-medium uppercase leading-4 tracking-wider text-sky-600 dark:text-sky-400">
                  Communication
                </span>
              </div>

              <h2 className="max-w-[638px] text-3xl font-medium leading-[1.12] text-sky-950 sm:text-4xl lg:text-5xl dark:text-white">
                Prepare follow-up with
                <br className="hidden sm:block" />
                current customer and
                <br className="hidden sm:block" />
                delivery context.
              </h2>
            </div>

            {/* Right */}
            <div className="w-full max-w-[529px]">
              <p className="text-sm font-normal leading-7 text-slate-600 sm:text-base dark:text-slate-300">
                A reminder is a considered, permissioned message. Nothing here
                is designed to pressure, deceive or work around a customer&apos;s
                stated restrictions.
              </p>
            </div>
          </div>

          {/* =====================================================
              CHECKS + IMAGE
          ====================================================== */}
          <div className="flex w-full flex-col gap-10 pt-2 pb-8 lg:gap-16 lg:pt-6 xl:flex-row">

            {/* LEFT */}
            <div className="flex w-full flex-col gap-1.5 xl:w-1/2">

              <h3 className="text-lg font-semibold leading-6 text-sky-950 dark:text-white">
                What is checked before anything is sent
              </h3>

              <div className="flex w-full flex-col pb-9">

                {checks.map((item, index) => (
                  <div
                    key={index}
                    className="flex w-full flex-col gap-3 border-b border-gray-200 py-3.5 sm:flex-row sm:items-end sm:gap-4 dark:border-slate-700"
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

              {/* Communication Boundary */}
              <div className="w-full rounded-r-2xl border-l-[3px] border-sky-500 bg-gray-100 px-5 py-6 sm:px-7 sm:py-7 dark:bg-slate-800">

                <span className="text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
                  Communication boundary
                </span>

                <p className="mt-2 text-sm font-normal leading-7 text-sky-950 sm:text-base dark:text-slate-100">
                  Delivery and response are never guaranteed. Zoiko Billing
                  does not support or recommend harassment, deception, public
                  disclosure, or any route that bypasses a customer&apos;s
                  communication restrictions.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex w-full xl:w-1/2">
              <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0px_4px_14px_0px_rgba(14,33,27,0.04)] dark:border-slate-700 dark:bg-slate-900">
                <Image
                  src="/accounts-receivable/communication.png"
                  alt="Communication and customer delivery context"
                  width={526}
                  height={526}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* =====================================================
              STATEMENTS HEADER
          ====================================================== */}
          <div className="flex w-full flex-col gap-3.5 border-t border-zinc-200 pt-12 dark:border-slate-700">

            <h3 className="text-2xl font-medium leading-8 text-sky-950 sm:text-3xl dark:text-white">
              Statements and summaries
            </h3>

            <p className="max-w-[555px] text-sm font-normal leading-7 text-slate-600 sm:text-base dark:text-slate-300">
              A statement summarises current records for a customer or a
              document set. It is not independent legal proof of anything.
            </p>
          </div>

          {/* =====================================================
              STATEMENT CARDS
          ====================================================== */}
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {statements.map((item) => (
              <div
                key={item.number}
                className="flex min-h-[190px] flex-col items-start rounded-2xl border border-zinc-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
              >
                {/* Number */}
                <div className="flex w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-sky-600 py-1.5">
                  <span className="text-[10px] font-semibold leading-4 text-white">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <div className="w-full pt-2 pb-1">
                  <h4 className="text-base font-semibold leading-5 text-sky-950 dark:text-white">
                    {item.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-sm font-normal leading-5 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* =====================================================
              STATEMENT BOUNDARY
          ====================================================== */}
          <div className="w-full rounded-r-2xl border-l-[3px] border-sky-500 bg-gray-100 px-5 py-7 sm:px-7 sm:py-9 dark:bg-slate-800">

            <span className="text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
              Statement boundary
            </span>

            <p className="mt-2 max-w-[800px] text-sm font-normal leading-7 text-sky-950 sm:text-base dark:text-slate-100">
              A statement is a summary of current records, not independent
              legal proof. Multi-currency totals require an explicit
              conversion method or separated presentation.
            </p>
          </div>

          {/* =====================================================
              CTA
          ====================================================== */}
          <div className="flex w-full justify-center">
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-sky-950 bg-sky-950 px-5 py-2.5 text-center text-sm font-normal leading-6 text-white transition hover:bg-sky-900 dark:border-sky-400 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
            >
              Explore Documents &amp; Delivery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}