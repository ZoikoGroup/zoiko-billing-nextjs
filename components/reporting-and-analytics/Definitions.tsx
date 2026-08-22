"use client";

import Image from "next/image";

const comparisons = [
  {
    title: "Current versus prior period",
    description: "Like-for-like periods on a consistent interval and timezone.",
  },
  {
    title: "Actual versus target",
    description:
      "Against an approved target or budget source, where one is supported.",
  },
  {
    title: "Absolute and percentage variance",
    description:
      "With explicit denominator rules, so a percentage always means something.",
  },
  {
    title: "Time-series trend",
    description: "Consistent interval and timezone across the whole series.",
  },
  {
    title: "Segment comparison",
    description: "Only across comparable scope and units.",
  },
  {
    title: "Data-quality indicators",
    description:
      "Missing data, late-arriving data and restatements flagged on the comparison.",
  },
];

const filters = [
  {
    number: "01",
    title: "Date range and comparison",
    description:
      "The reporting window and the comparison period it is measured against.",
  },
  {
    number: "02",
    title: "Entity and segmentation",
    description:
      "Entity, customer, document, product or approved segmentation.",
  },
  {
    number: "03",
    title: "Currency and rate context",
    description:
      "Original or converted display, with the rate source shown when converted.",
  },
  {
    number: "04",
    title: "Status and exception filters",
    description:
      "Status, owner, channel, provider and exception filters.",
  },
  {
    number: "05",
    title: "Timezone and business date",
    description:
      "Timezone, locale and the business-date basis being applied.",
  },
  {
    number: "06",
    title: "Saved view identity",
    description:
      "Name, owner, visibility and the definition version it was saved against.",
  },
];

const definitionItems = [
  {
    title: "Canonical name and ID",
    description:
      "A stable identifier so the metric can be referenced unambiguously.",
  },
  {
    title: "Business definition",
    description:
      "What it means and what it is intended to be used for.",
  },
  {
    title: "Formula and denominator",
    description:
      "The derivation, with numerator and denominator where applicable.",
  },
  {
    title: "Grain, unit, currency, date basis",
    description:
      "The atomic level and the axes the number is measured on.",
  },
  {
    title: "Inclusions and exclusions",
    description:
      "What is counted, what is not, and how nulls and thresholds behave.",
  },
  {
    title: "Owner and version",
    description:
      "Accountable owner, reviewer, version, effective dates and deprecation status.",
  },
];

export default function Definitions() {
  return (
    <section className="w-full bg-slate-50 px-5 py-16 transition-colors dark:bg-slate-950 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-12">
        {/* Header */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">
          <div className="flex w-full flex-1 flex-col items-start gap-5">
            <div className="flex items-center gap-2.5">
              <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500" />

              <span className="font-mono text-xs font-medium uppercase leading-4 tracking-wider text-sky-600 dark:text-sky-400">
                Definitions
              </span>
            </div>

            <h2 className="text-3xl font-medium leading-[1.15] tracking-tight text-sky-950 dark:text-white sm:text-4xl lg:text-5xl">
              Compare periods and
              <br className="hidden sm:block" />
              segments without hiding
              <br className="hidden sm:block" />
              the baseline.
            </h2>
          </div>

          <div className="w-full max-w-[528px] flex-1">
            <p className="text-base font-normal leading-8 text-slate-600 dark:text-slate-300">
              A metric catalog exists so two people reading the same number
              mean the same thing by it.
            </p>
          </div>
        </div>

        {/* Definition Content */}
        <div className="grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="w-full">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_4px_14px_0px_rgba(14,33,27,0.04),0px_1px_2px_0px_rgba(14,33,27,0.05)] dark:border-slate-700 dark:bg-slate-900">
              <Image
                src="/images/reporting-and-analytics/definitions.png"
                alt="Reporting metric definitions and analytics model"
                width={526}
                height={505}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Definition Details */}
          <div className="flex w-full flex-col">
            <h3 className="text-lg font-semibold leading-6 text-sky-950 dark:text-white">
              What a definition must carry
            </h3>

            <div className="mt-2 divide-y divide-slate-200 dark:divide-slate-700">
              {definitionItems.map((item) => (
                <div
                  key={item.title}
                  className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-[145px_1fr] sm:gap-4"
                >
                  <h4 className="text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                    {item.title}
                  </h4>

                  <p className="text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Catalog Boundary */}
            <div className="mt-4 rounded-r-2xl border-l-[3px] border-sky-600 bg-slate-100 px-5 py-6 dark:bg-slate-900 sm:px-7 sm:py-7">
              <span className="font-mono text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
                Catalog boundary
              </span>

              <p className="mt-2 text-sm font-normal leading-7 text-sky-950 dark:text-slate-200 sm:text-base">
                No metric is published without an accountable owner and a
                validated source, and terminology must match the source
                Product definitions rather than inventing a reporting dialect.
              </p>
            </div>
          </div>
        </div>

        {/* Comparisons */}
        <div className="pt-4">
          <div className="mb-7 flex items-center gap-2.5">
            <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500" />

            <span className="font-mono text-xs font-medium uppercase leading-4 tracking-wider text-sky-600 dark:text-sky-400">
              Comparisons and variance
            </span>
          </div>

          <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-slate-700 dark:bg-slate-700 sm:grid-cols-2 lg:grid-cols-3">
            {comparisons.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[150px] flex-col items-start gap-2 bg-white px-6 py-6 dark:bg-slate-900"
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
        </div>

        {/* Analysis Boundary */}
        <div className="w-full rounded-r-2xl border-l-[3px] border-sky-600 bg-slate-100 px-5 py-7 dark:bg-slate-900 sm:px-7 sm:py-8">
          <span className="font-mono text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
            Analysis boundary
          </span>

          <p className="mt-2 max-w-[761px] text-sm font-normal leading-7 text-sky-950 dark:text-slate-200 sm:text-base">
            A trend describes movement. It does not prove causation, and
            targets or budgets require approved sources and versions before
            they appear as a baseline.
          </p>
        </div>

        {/* Filters Header */}
        <div className="border-t border-slate-200 pt-10 dark:border-slate-700 sm:pt-12">
          <h2 className="text-2xl font-medium leading-8 text-sky-950 dark:text-white sm:text-3xl">
            Filters, scope and saved views
          </h2>

          <p className="mt-3 max-w-[555px] text-base font-normal leading-7 text-slate-600 dark:text-slate-300">
            Shaping a report should never quietly change what the number means.
          </p>
        </div>

        {/* Filters */}
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filters.map((item) => (
            <div
              key={item.number}
              className="flex min-h-[190px] flex-col items-start rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-sky-600 py-1.5">
                <span className="font-mono text-[10px] font-semibold leading-4 text-white">
                  {item.number}
                </span>
              </div>

              <h3 className="pt-3 pb-1 text-base font-semibold leading-5 text-sky-950 dark:text-white">
                {item.title}
              </h3>

              <p className="text-sm font-normal leading-5 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Saved View Boundary */}
        <div className="w-full rounded-r-2xl border-l-[3px] border-sky-600 bg-slate-100 px-5 py-6 dark:bg-slate-900 sm:px-7 sm:py-7">
          <span className="font-mono text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
            Saved-view boundary
          </span>

          <p className="mt-2 max-w-[761px] text-sm font-normal leading-7 text-sky-950 dark:text-slate-200 sm:text-base">
            A saved filter does not freeze source data unless a snapshot is
            explicitly retained, and restricted dimensions stay
            permission-controlled inside a saved view.
          </p>
        </div>
      </div>
    </section>
  );
}