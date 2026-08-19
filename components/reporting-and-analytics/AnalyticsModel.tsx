"use client";

import Image from "next/image";

const components = [
  {
    number: "01",
    title: "Metric definition",
    description:
      "Formula, grain, unit, inclusions, exclusions, owner and version.",
  },
  {
    number: "02",
    title: "Dimensions and filters",
    description:
      "Entity, customer, currency, status, date basis, timezone and source.",
  },
  {
    number: "03",
    title: "Dataset snapshot",
    description:
      "Source versions, as-of time, freshness, completeness and quality state.",
  },
  {
    number: "04",
    title: "Presentation",
    description:
      "Table, chart, comparison, labels, units, denominators and accessible summary.",
  },
  {
    number: "05",
    title: "Drill-through",
    description:
      "Source records, exceptions and the underlying Product destination.",
  },
  {
    number: "06",
    title: "Export and evidence",
    description:
      "Requester, permission, filter state, file version, delivery and audit.",
  },
];

export default function AnalyticsModel() {
  return (
    <section className="w-full bg-white px-5 py-16 transition-colors dark:bg-slate-950 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-10 lg:gap-11">
        {/* Header */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">
          {/* Left */}
          <div className="flex w-full flex-1 flex-col items-start gap-5">
            <div className="flex items-center gap-2.5">
              <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500" />

              <span className="font-mono text-xs font-medium uppercase leading-4 tracking-wider text-sky-600 dark:text-sky-400">
                Analytics model
              </span>
            </div>

            <h2 className="text-3xl font-medium leading-[1.15] tracking-tight text-sky-950 dark:text-white sm:text-4xl lg:text-5xl">
              Start with the definition,
              <br className="hidden sm:block" />
              scope and snapshot
              <br className="hidden sm:block" />
              behind every result.
            </h2>
          </div>

          {/* Right Description */}
          <div className="w-full max-w-[528px] flex-1">
            <p className="text-base font-normal leading-8 text-slate-600 dark:text-slate-300">
              Six components make a report reviewable. A chart is never the
              source of truth — it is one presentation of a defined measure
              over a stated snapshot.
            </p>
          </div>
        </div>

        {/* Six Components */}
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {components.map((item) => (
            <div
              key={item.number}
              className="flex min-h-[190px] flex-col items-start rounded-2xl border border-slate-200 bg-white p-6 transition-colors dark:border-slate-700 dark:bg-slate-900"
            >
              {/* Number */}
              <div className="flex w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-sky-600 py-1.5">
                <span className="font-mono text-[10px] font-semibold leading-4 text-white">
                  {item.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="pt-3 pb-1 text-base font-semibold leading-5 text-sky-950 dark:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm font-normal leading-5 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Model Image */}
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
          <Image
            src="/images/reporting-and-analytics/model.png"
            alt="Analytics model showing governed reporting components"
            width={1116}
            height={510}
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Model Boundary */}
        <div className="w-full rounded-r-2xl border-l-[3px] border-sky-600 bg-slate-50 px-5 py-6 dark:bg-slate-900 sm:px-7 sm:py-7">
          <div className="mb-2">
            <span className="font-mono text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
              Model boundary
            </span>
          </div>

          <p className="max-w-[761px] text-sm font-normal leading-7 text-sky-950 dark:text-slate-200 sm:text-base">
            Sensitive schemas and proprietary formulas are not published here.
            What is published is the governance that makes a number checkable.
          </p>
        </div>
      </div>
    </section>
  );
}