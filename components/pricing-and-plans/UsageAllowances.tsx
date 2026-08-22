"use client";

import React from "react";

const meterContract = [
  "What is counted",
  "When it is counted",
  "Scope of counting",
  "Period and timezone",
  "Retries and failures",
  "Rounding",
  "Aggregation",
  "Exclusions",
  "Reporting delay",
  "Source of truth",
  "Dispute route",
];

const allowance = [
  "Quantity",
  "Period",
  "Reset behavior",
  "Eligibility",
  "Treatment after allowance",
];

const overage = [
  "Rate",
  "Block, throttle or review",
  "Alerts",
  "Caps",
  "Tax treatment",
];

const documentMeter = [
  {
    event: "Invoice issued",
    counted: "Counted once",
    reason: "Counting occurs at issue, not at draft",
  },
  {
    event: "Invoice re-sent to the customer",
    counted: "Not counted",
    reason: "Delivery is not a billing event",
  },
  {
    event: "Invoice voided and reissued",
    counted: "Counted once",
    reason: "The reissued document is the countable one",
  },
  {
    event: "Credit note issued",
    counted: "Counted separately",
    reason: "Distinct document type in the meter scope",
  },
  {
    event: "Failed delivery, then retried",
    counted: "Not counted again",
    reason: "Retries are excluded by the counting rule",
  },
];

function StatusBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex shrink-0 items-center rounded-md border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-semibold leading-6 text-slate-500">
      {children}
    </span>
  );
}

function SectionLabel() {
  return (
    <div className="flex h-6 items-center gap-2 sm:gap-3">
      <div className="rounded-[5px] border border-blue-100 bg-gray-100 px-1.5 py-0.5">
        <div className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
          08
        </div>
      </div>

      <div className="text-xs font-bold uppercase leading-4 tracking-[0.2em] text-slate-500">
        Usage, allowances &amp; overage
      </div>

      <div className="hidden h-px w-6 bg-slate-500 opacity-50 sm:block" />
    </div>
  );
}

function MeterList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-6 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
      <div className="mb-3.5">
        <div className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
          {title}
        </div>
      </div>

      <div className="flex flex-col pl-4">
        {items.map((item) => (
          <div
            key={item}
            className="flex min-h-6 items-center justify-between gap-3 py-0.5"
          >
            <span className="text-sm font-normal leading-6 text-slate-600">
              {item}
            </span>

            {title !== "Meter contract" && (
              <StatusBadge>Not published</StatusBadge>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function UsageAllowances() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
        <div className="flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
          {/* Section label */}
          <SectionLabel />

          {/* Heading */}
          <div className="w-full pb-0.5">
            <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
              What gets counted, and exactly when.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[666px]">
            <p className="text-sm font-normal leading-5 text-slate-600 sm:text-base sm:leading-6">
              A usage rate cannot be published before its counting rule is.
              Below is the meter contract each metered dimension must satisfy
              first.
            </p>
          </div>

          {/* Meter contract / allowance / overage */}
          <div className="flex w-full flex-col gap-5 pt-3.5 lg:flex-row">
            <MeterList title="Meter contract" items={meterContract} />

            <MeterList title="Allowance" items={allowance} />

            <MeterList title="Overage" items={overage} />
          </div>

          {/* Example */}
          <div className="mt-1 w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] sm:p-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-bold leading-7 text-slate-900">
                Example: how a document meter reads
              </h3>

              <p className="text-sm font-normal leading-5 text-slate-600">
                Illustrative quantities only. These are not prices and carry no
                commercial meaning.
              </p>

              {/* Responsive table */}
              <div className="mt-0.5 w-full overflow-x-auto">
                <div className="min-w-[850px] overflow-hidden rounded-lg border border-gray-200">
                  {/* Header */}
                  <div className="grid grid-cols-[1.1fr_0.7fr_1.5fr] bg-gray-50">
                    <div className="border-b border-gray-200 px-4 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                      Event
                    </div>

                    <div className="border-b border-gray-200 px-4 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                      Counted?
                    </div>

                    <div className="border-b border-gray-200 px-4 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                      Reason
                    </div>
                  </div>

                  {/* Rows */}
                  {documentMeter.map((row, index) => (
                    <div
                      key={row.event}
                      className={`grid grid-cols-[1.1fr_0.7fr_1.5fr] ${
                        index !== documentMeter.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <div className="px-4 py-3.5">
                        <span className="text-sm font-semibold leading-6 text-slate-900">
                          {row.event}
                        </span>
                      </div>

                      <div className="px-4 py-3.5">
                        <span className="text-sm font-normal leading-5 text-slate-600">
                          {row.counted}
                        </span>
                      </div>

                      <div className="px-4 py-3.5">
                        <span className="text-sm font-normal leading-5 text-slate-600">
                          {row.reason}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}