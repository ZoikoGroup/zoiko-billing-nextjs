"use client";

import Image from "next/image";
import Link from "next/link";

const exportItems = [
  {
    title: "Report definition",
    description:
      "The saved report or approved definition, at a specific version.",
  },
  {
    title: "Schedule and recipients",
    description:
      "Run schedule, timezone, recipients and delivery channel where supported.",
  },
  {
    title: "Format",
    description:
      "CSV, spreadsheet, PDF or API, only where that format is verified.",
  },
  {
    title: "Field selection and scope",
    description:
      "Selected fields, filters, as-of time and definition version.",
  },
  {
    title: "Protection",
    description:
      "Encryption, expiry, access control and secure delivery.",
  },
  {
    title: "Outcome evidence",
    description:
      "Success, failure, retry, revocation and the audit record.",
  },
];

export default function ReportsExports() {
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
                Reports and exports
              </span>
            </div>

            <h2 className="text-3xl font-medium leading-[1.15] tracking-tight text-sky-950 dark:text-white sm:text-4xl lg:text-5xl">
              Share reporting data
              <br className="hidden sm:block" />
              through controlled,
              <br className="hidden sm:block" />
              auditable delivery.
            </h2>
          </div>

          {/* Right */}
          <div className="w-full max-w-[528px] flex-1">
            <p className="text-base font-normal leading-8 text-slate-600 dark:text-slate-300">
              An export is a data release. It carries a requester, a purpose,
              a permission check and an expiry — not just a file name.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid w-full grid-cols-1 items-start gap-10 pt-2 lg:grid-cols-2 lg:gap-16">
          {/* Export Details */}
          <div className="flex w-full flex-col">
            <h3 className="text-lg font-semibold leading-6 text-sky-950 dark:text-white">
              What a controlled export records
            </h3>

            <div className="mt-2 divide-y divide-slate-200 dark:divide-slate-700">
              {exportItems.map((item) => (
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

            {/* Export Boundary */}
            <div className="mt-4 rounded-r-2xl border-l-[3px] border-sky-600 bg-slate-100 px-5 py-6 dark:bg-slate-900 sm:px-7 sm:py-7">
              <span className="font-mono text-[10px] font-normal uppercase leading-4 tracking-wide text-sky-600 dark:text-sky-400">
                Export boundary
              </span>

              <p className="mt-2 text-sm font-normal leading-7 text-sky-950 dark:text-slate-200 sm:text-base">
                Restricted data is never sent to unapproved recipients or
                channels. A scheduled report is not guaranteed to complete
                when source data or dependencies are unavailable — it reports
                the failure instead.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
              <Image
                src="/images/reporting-and-analytics/exports.png"
                alt="Controlled reporting exports and delivery"
                width={526}
                height={701}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative z-10 flex w-full justify-center pt-2">
          <Link
            href="#"
            className="inline-flex min-h-11 items-center justify-center rounded-lg !bg-sky-950 px-5 py-2.5 text-base font-normal leading-6 !text-white !outline !outline-1 !outline-offset-[-1px] !outline-sky-950 transition hover:!bg-sky-900 hover:!text-white dark:!bg-sky-600 dark:!outline-sky-600 dark:hover:!bg-sky-500"
          >
            Explore Automation &amp; Workflows
          </Link>
        </div>
      </div>
    </section>
  );
}