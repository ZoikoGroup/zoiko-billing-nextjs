"use client";

import Image from "next/image";
import Link from "next/link";

const chartRules = [
  {
    label: "Primary",
    title: "Table",
    description:
      "The evidence surface for exact values. Used whenever precision matters more than shape.",
  },
  {
    label: "Where compatible",
    title: "Line or area",
    description:
      "Ordered trends over a consistent interval and timezone.",
  },
  {
    label: "Where compatible",
    title: "Grouped or stacked bars",
    description:
      "Categorical comparison with labeled totals.",
  },
  {
    label: "Restricted",
    title: "Donut or composition",
    description:
      "Only for a small, complete whole. Not for open-ended category sets.",
  },
  {
    label: "Where meaningful",
    title: "Waterfall",
    description:
      "Only where a defined bridge between two positions genuinely exists.",
  },
  {
    label: "Always",
    title: "Textual labels",
    description:
      "Status, aging and workflow visuals carry text labels, never colour alone.",
  },
];

const drillItems = [
  {
    title: "Context is preserved",
    description:
      "Metric, filters, snapshot, currency and time context all carry into the detail.",
  },
  {
    title: "The selection is shown",
    description:
      "The selected segment or data point is identified explicitly.",
  },
  {
    title: "Supporting records listed",
    description:
      "Each with its source state and current status.",
  },
  {
    title: "Exclusions identified",
    description:
      "Excluded, unknown, stale or exceptional records are named, not dropped.",
  },
  {
    title: "Authorized destination",
    description:
      "Links through to the underlying Product destination the user may access.",
  },
  {
    title: "Access recorded",
    description:
      "Access or export is recorded where policy requires it.",
  },
];

export default function Evidence() {
  return (
    <section className="w-full bg-white px-5 py-16 transition-colors dark:bg-slate-950 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-8">
        {/* Header */}
        <div className="flex w-full flex-col items-start gap-8 pb-4 lg:flex-row lg:items-end lg:gap-16">
          <div className="flex w-full flex-1 flex-col items-start gap-5">
            <div className="flex items-center gap-2.5">
              <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500" />

              <span className="font-mono text-xs font-medium uppercase leading-4 tracking-wider text-sky-600 dark:text-sky-400">
                Evidence
              </span>
            </div>

            <h2 className="text-3xl font-medium leading-[1.15] tracking-tight text-sky-950 dark:text-white sm:text-4xl lg:text-5xl">
              Use charts to explain
              <br className="hidden sm:block" />
              defined data — not
              <br className="hidden sm:block" />
              decorate it.
            </h2>
          </div>

          <div className="w-full max-w-[528px] flex-1">
            <p className="text-base font-normal leading-8 text-slate-600 dark:text-slate-300">
              The table is the evidence surface. A chart sits alongside it to
              make a shape legible, and every visual keeps its exact values
              reachable.
            </p>
          </div>
        </div>

        {/* Main Evidence Image */}
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_4px_14px_0px_rgba(14,33,27,0.04),0px_1px_2px_0px_rgba(14,33,27,0.05)] dark:border-slate-700 dark:bg-slate-900">
          <Image
            src="/images/reporting-and-analytics/evidence.png"
            alt="Reporting and analytics evidence visualization"
            width={1116}
            height={558}
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Chart Rules */}
        <div className="grid w-full grid-cols-1 gap-3 py-4 sm:grid-cols-2 lg:grid-cols-3">
          {chartRules.map((item) => (
            <div
              key={item.title}
              className="min-h-[145px] rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
            >
              <span className="font-mono text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
                {item.label}
              </span>

              <h3 className="mt-2 text-base font-semibold leading-5 text-sky-950 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm font-normal leading-5 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Presentation Boundary */}
        <div className="w-full rounded-r-2xl border-l-[3px] border-sky-600 bg-slate-50 px-5 py-6 dark:bg-slate-900 sm:px-7 sm:py-7">
          <span className="font-mono text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
            Presentation boundary
          </span>

          <p className="mt-2 max-w-[761px] text-sm font-normal leading-7 text-sky-950 dark:text-slate-200 sm:text-base">
            Misleading axes, truncated scales, excessive categories and
            unlabeled totals are all excluded. Where a table communicates the
            result more clearly, a chart is not used at all.
          </p>
        </div>

        {/* Drill-through Label */}
        <div className="flex items-center gap-2.5 pt-4">
          <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500" />

          <span className="font-mono text-xs font-medium uppercase leading-4 tracking-wider text-sky-600 dark:text-sky-400">
            Drill-through
          </span>
        </div>

        {/* Drill-through */}
        <div className="grid w-full grid-cols-1 items-start gap-10 pt-4 lg:grid-cols-2 lg:gap-16">
          {/* Details */}
          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {drillItems.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-[145px_1fr] sm:gap-4"
              >
                <h3 className="text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Boundary + CTA */}
          <div className="flex w-full flex-col gap-8">
            <div className="rounded-r-2xl border-l-[3px] border-sky-600 bg-slate-50 px-5 py-6 dark:bg-slate-900 sm:px-7 sm:py-7">
              <span className="font-mono text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
                Drill boundary
              </span>

              <p className="mt-2 text-sm font-normal leading-7 text-sky-950 dark:text-slate-200 sm:text-base">
                Drill-through is permission-aware, so it may legitimately show
                fewer records than the aggregate above it. That difference is
                expected behaviour, not a defect. Restricted customer and
                payment fields are never exposed through URLs.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-sky-950 px-5 py-2.5 !text-white outline outline-1 outline-offset-[-1px] outline-sky-950 transition hover:bg-sky-900 hover:!text-white dark:bg-sky-600 dark:outline-sky-600 dark:hover:bg-sky-500"
              >
                Invoices &amp; Credit Notes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}