"use client";

import React from "react";

const sourceItems = [
  {
    title: "Verified categories only",
    description:
      "ERP, accounting, banking, payment, CRM, support, commerce and custom integrations where verified.",
  },
  {
    title: "Inbound updates",
    description:
      "Documents, payments, disputes or customer-contact updates from an approved source.",
  },
  {
    title: "Outbound events",
    description:
      "Tasks, reminders, statements, holds and exception events emitted onward.",
  },
  {
    title: "Ordering and duplicates",
    description:
      "Event ordering, duplicate handling and retry behaviour defined per connector.",
  },
  {
    title: "Source ownership",
    description:
      "Which system owns a field, and what happens when two sources conflict.",
  },
  {
    title: "Zoiko One participation",
    description:
      "Identity, approved customer context or cross-product handoffs where enabled.",
  },
];

export default function Sources() {
  return (
    <section className="w-full bg-gray-100 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 md:px-8 lg:px-12 lg:py-24 xl:px-28">
        <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-9 lg:px-12">
          {/* Header */}
          <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">
            {/* Left */}
            <div className="flex w-full flex-1 flex-col items-start gap-5 pb-6">
              {/* Label */}
              <div className="flex h-4 items-center">
                <div className="h-0.5 w-5 rounded-sm bg-gradient-to-r from-cyan-500 to-sky-600" />

                <span className="ml-[10px] text-xs font-medium uppercase leading-4 tracking-wider text-sky-600 dark:text-sky-400">
                  Sources and handoffs
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-[638px] text-3xl font-medium leading-[1.12] text-sky-950 sm:text-4xl lg:text-5xl dark:text-white">
                What updates
                <br className="hidden sm:block" />
                receivables, and what
                <br className="hidden sm:block" />
                receivables emit.
              </h2>
            </div>

            {/* Description */}
            <div className="w-full max-w-[529px]">
              <p className="text-sm font-normal leading-7 text-slate-600 sm:text-base dark:text-slate-300">
                Documents, payments, disputes and contact updates can arrive
                inbound. Tasks, reminders, statements, holds and exceptions
                can go back out.
              </p>
            </div>
          </div>

          {/* Source cards */}
          <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 pt-2.5 sm:grid-cols-2 lg:grid-cols-3 dark:border-slate-700 dark:bg-slate-700">
            {sourceItems.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[180px] flex-col items-start bg-white px-6 py-6 dark:bg-slate-900"
              >
                <h3 className="pb-1 text-base font-semibold leading-6 text-sky-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Connector boundary */}
          <div className="w-full rounded-r-2xl border-l-[3px] border-sky-500 bg-gray-100 px-5 py-7 sm:px-7 sm:py-9 dark:bg-slate-900">
            <span className="text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
              Connector boundary
            </span>

            <p className="mt-2 max-w-[900px] text-sm font-normal leading-7 text-sky-950 sm:text-base dark:text-slate-100">
              Not every connector updates receivables or reconciles payments,
              and not in real time. Behaviour is stated per connector in the
              governed integration registry. Zoiko Billing remains
              independently deployable.
            </p>
          </div>

          {/* Actions */}
          <div className="flex w-full flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {/* Browse integrations */}
            <button
              type="button"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-sky-950 bg-sky-950 px-5 py-2.5 text-sm font-normal leading-6 text-white transition hover:bg-sky-900 sm:w-auto sm:text-base dark:border-sky-400 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
            >
              Browse integrations
            </button>

            {/* Compare deployment */}
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-2 px-1 py-2.5 text-sm font-normal leading-6 text-sky-600 transition hover:text-sky-800 sm:text-base dark:text-sky-400 dark:hover:text-sky-300"
            >
              <span>Compare deployment options</span>
              <span className="text-base font-bold">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}