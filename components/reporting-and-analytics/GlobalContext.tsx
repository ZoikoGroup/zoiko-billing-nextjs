"use client";

import Link from "next/link";

const globalItems = [
  {
    title: "Entity and source scope",
    description:
      "Which legal entities and source systems the report actually covers.",
  },
  {
    title: "Original currency",
    description: "Values in the currency they were recorded in, always retained.",
  },
  {
    title: "Converted view",
    description:
      "A supported converted presentation, shown as a view rather than a restatement.",
  },
  {
    title: "Rate source and method",
    description:
      "Exchange-rate source, date, method and restatement behaviour.",
  },
  {
    title: "Timezone and business date",
    description:
      "Timezone, business date, locale and calendar context.",
  },
  {
    title: "Regional availability",
    description:
      "Region, provider and integration availability published per market.",
  },
  {
    title: "Separated vs consolidated",
    description:
      "Presentation follows approved policy, not convenience.",
  },
  {
    title: "Restatement indicators",
    description:
      "Late-arriving corrections flagged where they change a prior result.",
  },
];

export default function GlobalContext() {
  return (
    <section className="w-full bg-sky-950 px-5 py-16 transition-colors dark:bg-slate-950 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-8 sm:gap-9">
        {/* Header */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">
          {/* Left */}
          <div className="flex w-full flex-1 flex-col items-start gap-5">
            <div className="flex items-center gap-2.5">
              <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

              <span className="font-mono text-xs font-medium uppercase leading-4 tracking-wider text-cyan-300">
                Global context
              </span>
            </div>

            <h2 className="text-3xl font-medium leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Cross-market
              <br className="hidden sm:block" />
              reporting, with
              <br className="hidden sm:block" />
              comparability limits
              <br className="hidden sm:block" />
              visible.
            </h2>
          </div>

          {/* Right */}
          <div className="w-full max-w-[528px] flex-1">
            <p className="text-base font-normal leading-8 text-slate-300">
              Combining entities and currencies is a method decision, not a
              default. Where a total cannot be validly combined, it is
              presented separately.
            </p>
          </div>
        </div>

        {/* Global Context Cards */}
        <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {globalItems.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[175px] flex-col items-start gap-2 bg-sky-950 px-5 py-5 transition-colors dark:bg-slate-900"
            >
              <h3 className="pb-1 text-sm font-semibold leading-5 text-white">
                {item.title}
              </h3>

              <p className="text-sm font-normal leading-5 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Consolidation Boundary */}
        <div className="w-full rounded-r-2xl border-l-[3px] border-cyan-400 bg-white/5 px-5 py-7 dark:bg-white/[0.04] sm:px-7 sm:py-8">
          <span className="font-mono text-[10px] font-normal uppercase leading-4 tracking-wide text-cyan-300">
            Consolidation boundary
          </span>

          <p className="mt-2 max-w-[761px] text-sm font-normal leading-7 text-slate-200 sm:text-base">
            Currencies and entities are never combined without an explicit
            method, and locale does not define accounting policy or a legal
            reporting basis. A converted view is not a consolidated financial
            statement.
          </p>
        </div>

        {/* CTAs */}
        <div className="relative z-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-lg !bg-white px-5 py-2.5 text-base font-normal leading-6 !text-sky-950 !outline !outline-1 !outline-offset-[-1px] !outline-white transition hover:!bg-slate-100 hover:!text-sky-950 sm:w-auto"
          >
            Explore global billing
          </Link>

          <Link
            href="#"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-lg px-5 py-2.5 text-base font-normal leading-6 !text-white !outline !outline-1 !outline-offset-[-1px] !outline-white/30 transition hover:!bg-white/10 hover:!text-white sm:w-auto"
          >
            Check availability
          </Link>
        </div>
      </div>
    </section>
  );
}