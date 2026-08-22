"use client";

import Link from "next/link";

const revenueViews = [
  {
    title: "Issued and credit activity",
    description:
      "Issued amounts and credit notes reported separately, not netted silently.",
  },
  {
    title: "Aging positions",
    description:
      "Current, due and qualified-aging positions using approved operational bands.",
  },
  {
    title: "Dispute and promise workload",
    description:
      "Disputes, holds, promises and communication workload as operational counts.",
  },
  {
    title: "Payment states",
    description:
      "Observed, settled, matched, allocated and reversed reported as distinct states.",
  },
  {
    title: "Exceptions",
    description:
      "Unmatched, overpaid, short-paid and unresolved items surfaced, not absorbed.",
  },
  {
    title: "Outstanding balance",
    description:
      "By customer, document, entity and currency, with drill-down retained.",
  },
];

export default function RevenueControl() {
  return (
    <section className="w-full bg-white px-5 pt-16 pb-16 transition-colors dark:bg-slate-950 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-8 sm:gap-9">
        {/* Header */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">
          {/* Left */}
          <div className="flex w-full flex-1 flex-col items-start gap-5">
            <div className="flex items-center gap-2.5">
              <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500" />

              <span className="font-mono text-xs font-medium uppercase leading-4 tracking-wider text-sky-600 dark:text-sky-400">
                Revenue control
              </span>
            </div>

            <h2 className="text-3xl font-medium leading-[1.15] tracking-tight text-sky-950 dark:text-white sm:text-4xl lg:text-5xl">
              Receivables and
              <br className="hidden sm:block" />
              payments, with current
              <br className="hidden sm:block" />
              relationships applied.
            </h2>
          </div>

          {/* Right Description */}
          <div className="w-full max-w-[528px] flex-1">
            <p className="text-base font-normal leading-8 text-slate-600 dark:text-slate-300">
              Reporting on money owed and money received is where careless
              framing does the most damage, so each figure states exactly what
              it is.
            </p>
          </div>
        </div>

        {/* Revenue Views */}
        <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-slate-700 dark:bg-slate-700 sm:grid-cols-2 lg:grid-cols-3">
          {revenueViews.map((view) => (
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

        {/* Interpretation Boundary */}
        <div className="w-full rounded-r-2xl border-l-[3px] border-sky-600 bg-slate-50 px-5 py-7 dark:bg-slate-900 sm:px-7 sm:py-8">
          <div className="mb-2">
            <span className="font-mono text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
              Interpretation boundary
            </span>
          </div>

          <p className="max-w-[761px] text-sm font-normal leading-7 text-sky-950 dark:text-slate-200 sm:text-base">
            Aging is not credit risk and not a collectibility judgment. A
            payment observation is not cash settlement and not an accounting
            close.
          </p>
        </div>

        {/* CTA Navigation */}
        <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-sky-950 px-5 py-2.5 text-base font-normal leading-6 text-white outline outline-1 outline-offset-[-1px] outline-sky-950 transition hover:bg-sky-900 dark:bg-sky-600 dark:outline-sky-600 dark:hover:bg-sky-500"
          >
            Accounts Receivable
          </Link>

          <Link
            href="#"
            className="inline-flex min-h-11 items-center justify-center gap-2 px-2 py-2.5 text-base font-normal leading-6 text-sky-600 transition hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300"
          >
            <span>Payments &amp; Reconciliation</span>
            <span className="font-mono text-base font-bold leading-6">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}