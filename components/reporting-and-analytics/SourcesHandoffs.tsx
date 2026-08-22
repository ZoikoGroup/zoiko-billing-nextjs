"use client";

import Link from "next/link";

const sourceItems = [
  {
    title: "Verified categories only",
    description:
      "Billing, accounting, ERP, payment, banking, CRM, warehouse and custom integrations where verified.",
  },
  {
    title: "Inbound context",
    description:
      "Source records, dimensions, targets or budgets from an approved system.",
  },
  {
    title: "Outbound events",
    description:
      "Report, export, alert and audit events emitted onward.",
  },
  {
    title: "Schema and version",
    description:
      "Source ownership, schema version, ordering and latency behaviour.",
  },
  {
    title: "Replay and correction",
    description:
      "Replay and correction behaviour, including how restatements propagate.",
  },
  {
    title: "Zoiko One participation",
    description:
      "Identity, approved records or cross-product handoffs where enabled.",
  },
];

export default function SourcesHandoffs() {
  return (
    <section className="w-full bg-slate-50 px-5 py-16 transition-colors dark:bg-slate-950 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-8 sm:gap-9">
        {/* Header */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">
          {/* Left */}
          <div className="flex w-full flex-1 flex-col items-start gap-5">
            <div className="flex items-center gap-2.5">
              <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500" />

              <span className="font-mono text-xs font-medium uppercase leading-4 tracking-wider text-sky-600 dark:text-sky-400">
                Sources and handoffs
              </span>
            </div>

            <h2 className="text-3xl font-medium leading-[1.15] tracking-tight text-sky-950 dark:text-white sm:text-4xl lg:text-5xl">
              What feeds reporting,
              <br className="hidden sm:block" />
              and what reporting
              <br className="hidden sm:block" />
              emits.
            </h2>
          </div>

          {/* Right */}
          <div className="w-full max-w-[528px] flex-1">
            <p className="text-base font-normal leading-8 text-slate-600 dark:text-slate-300">
              Source records, dimensions and targets can arrive inbound.
              Report, export, alert and audit events can go back out.
            </p>
          </div>
        </div>

        {/* Source / Handoff Cards */}
        <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-slate-700 dark:bg-slate-700 sm:grid-cols-2 lg:grid-cols-3">
          {sourceItems.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[165px] flex-col items-start gap-2 bg-white px-6 py-6 transition-colors dark:bg-slate-900"
            >
              <h3 className="text-base font-semibold leading-6 text-sky-950 dark:text-white">
                {item.title}
              </h3>

              <p className="text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connector Boundary */}
        <div className="w-full rounded-r-2xl border-l-[3px] border-sky-600 bg-slate-50 px-5 py-7 dark:bg-slate-900 sm:px-7 sm:py-8">
          <span className="font-mono text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
            Connector boundary
          </span>

          <p className="mt-2 max-w-[761px] text-sm font-normal leading-7 text-sky-950 dark:text-slate-200 sm:text-base">
            Not every connector provides real-time, complete or
            accounting-ready data. Behaviour is stated per connector in the
            governed integration registry. Zoiko Billing remains independently
            deployable.
          </p>
        </div>

        {/* CTAs */}
        <div className="relative z-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-lg !bg-sky-950 px-5 py-2.5 text-base font-normal leading-6 !text-white !outline !outline-1 !outline-offset-[-1px] !outline-sky-950 transition hover:!bg-sky-900 hover:!text-white dark:!bg-sky-600 dark:!outline-sky-600 dark:hover:!bg-sky-500 sm:w-auto"
          >
            Browse integrations
          </Link>

          <Link
            href="#"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg px-2 py-2.5 text-base font-normal leading-6 !text-sky-600 transition hover:!text-sky-800 dark:!text-sky-400 dark:hover:!text-sky-300 sm:w-auto"
          >
            <span>Compare deployment options</span>
            <span className="font-mono text-base font-bold leading-6">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}