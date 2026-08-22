"use client";

import Link from "next/link";

const views = [
  {
    title: "Customer and entity activity",
    description:
      "Activity by customer and issuing entity, keeping both dimensions intact.",
  },
  {
    title: "Document activity",
    description:
      "Draft, issued, credited and corrected documents, each counted by its own state.",
  },
  {
    title: "Charge activity",
    description:
      "Charges, fees, discounts and adjustments with their direction preserved.",
  },
  {
    title: "Billing schedule work",
    description:
      "Scheduled, due, run, missed and blocked occurrences as separate counts.",
  },
  {
    title: "Delivery evidence",
    description:
      "Rendered, queued, sent, published and verified-delivery states kept apart.",
  },
  {
    title: "Workflow and workload",
    description:
      "Workflow, approval, exception and ownership workload by owner and queue.",
  },
];

export default function OperationalViews() {
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
                Operational views
              </span>
            </div>

            <h2 className="text-3xl font-medium leading-[1.15] tracking-tight text-sky-950 dark:text-white sm:text-4xl lg:text-5xl">
              Report across the
              <br className="hidden sm:block" />
              platform without
              <br className="hidden sm:block" />
              collapsing distinct
              <br className="hidden sm:block" />
              states.
            </h2>
          </div>

          {/* Right Description */}
          <div className="w-full max-w-[528px] flex-1">
            <p className="text-base font-normal leading-8 text-slate-600 dark:text-slate-300">
              Counts use exact source-state definitions. A queued document and
              a delivered one are never added together to make a tidier number.
            </p>
          </div>
        </div>

        {/* Operational Views */}
        <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-slate-700 dark:bg-slate-700 sm:grid-cols-2 lg:grid-cols-3">
          {views.map((view) => (
            <div
              key={view.title}
              className="flex min-h-[155px] flex-col items-start gap-2 bg-white px-6 py-6 transition-colors dark:bg-slate-900"
            >
              <h3 className="text-base font-semibold leading-6 text-sky-950 dark:text-white">
                {view.title}
              </h3>

              <p className="text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                {view.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Boundary */}
        <div className="w-full rounded-r-2xl border-l-[3px] border-sky-600 bg-slate-50 px-5 py-7 dark:bg-slate-900 sm:px-7 sm:py-8">
          <div className="mb-2">
            <span className="font-mono text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
              Comparison boundary
            </span>
          </div>

          <p className="max-w-[761px] text-sm font-normal leading-7 text-sky-950 dark:text-slate-200 sm:text-base">
            Incompatible periods or units are never compared without an
            explanation. Where a comparison is not valid, the report says so
            rather than presenting a number anyway.
          </p>
        </div>

        {/* CTA */}
        <div className="flex w-full justify-center">
          <Link
            href="#"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-sky-950 px-5 py-2.5 !text-white outline outline-1 outline-offset-[-1px] outline-sky-950 transition hover:bg-sky-900 hover:!text-white dark:bg-sky-600 dark:outline-sky-600 dark:hover:bg-sky-500"
          >
            Explore the platform
          </Link>
        </div>
      </div>
    </section>
  );
}