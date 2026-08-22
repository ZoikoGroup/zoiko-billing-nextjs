"use client";

import React from "react";
import Image from "next/image";

const concepts = [
  {
    number: "01",
    title: "Open item",
    description:
      "An issued document or balance component with its currency, due date and remaining amount.",
  },
  {
    number: "02",
    title: "Owner",
    description:
      "The named person, team or queue responsible for the next action.",
  },
  {
    number: "03",
    title: "Next action",
    description:
      "Review, wait, contact, escalate, hold, reconcile or close.",
  },
  {
    number: "04",
    title: "Customer state",
    description:
      "Contact preference, restriction, dispute, promise, recent communication and payment context.",
  },
  {
    number: "05",
    title: "Exception",
    description:
      "Missing source, mismatch, failed delivery, returned payment, unknown allocation or policy conflict.",
  },
  {
    number: "06",
    title: "Evidence",
    description:
      "Source, assignment, message, decision, promise, payment and status-change history.",
  },
];

export default function Model() {
  return (
    <section className="w-full bg-white dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-8 px-4 py-12 sm:px-6 md:px-8 lg:gap-11 lg:px-12 lg:py-24">

        {/* Header */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">

          {/* Left Content */}
          <div className="flex w-full flex-1 flex-col items-start gap-5 lg:pt-2.5 lg:pb-5">
            
            {/* Section Label */}
            <div className="flex h-4 items-center">
              <div className="h-0.5 w-5 rounded-sm bg-gradient-to-r from-cyan-500 to-sky-600" />

              <span className="ml-2 text-xs font-medium uppercase leading-4 tracking-wider text-sky-600 dark:text-sky-400">
                Control model
              </span>
            </div>

            {/* Heading */}
            <div className="w-full max-w-[638px]">
              <h2 className="text-3xl font-medium leading-tight text-sky-950 sm:text-4xl lg:text-5xl lg:leading-[1.12] dark:text-white">
                Six concepts behind
                <br className="hidden sm:block" />
                every receivables action.
              </h2>
            </div>
          </div>

          {/* Right Description */}
          <div className="w-full max-w-[529px]">
            <p className="text-sm font-normal leading-7 text-slate-600 sm:text-base dark:text-slate-300">
              No single score stands in for the receivables truth, and
              customer-level totals always keep their document, entity and
              currency detail.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {concepts.map((concept) => (
            <div
              key={concept.number}
              className="flex min-h-[190px] flex-col items-start rounded-2xl border border-zinc-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
            >
              {/* Number */}
              <div className="flex w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-sky-600 py-1.5">
                <span className="text-[10px] font-semibold leading-4 text-white">
                  {concept.number}
                </span>
              </div>

              {/* Title */}
              <div className="w-full pt-2 pb-1">
                <h3 className="text-base font-semibold leading-5 text-sky-950 dark:text-white">
                  {concept.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm font-normal leading-5 text-slate-600 dark:text-slate-300">
                {concept.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 dark:border-slate-700">
          <Image
            src="/accounts-receivable/control-model.png"
            alt="Receivables control model"
            width={1116}
            height={587}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}