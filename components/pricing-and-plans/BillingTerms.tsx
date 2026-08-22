"use client";

import React from "react";

type Term = {
  number: string;
  title: string;
  description: string;
  status: string;
  statusTone: "gray" | "contract";
};

const terms: Term[] = [
  {
    number: "1",
    title: "Billing frequency",
    description:
      "Rendered only from actual plan records. No cadence is displayed for a plan that has none.",
    status: "Not published",
    statusTone: "gray",
  },
  {
    number: "2",
    title: "Contract currency",
    description:
      "Only approved market currencies appear. Your locale does not set your contract currency, and no FX conversion is performed for display.",
    status: "Not published",
    statusTone: "gray",
  },
  {
    number: "3",
    title: "Tax basis",
    description:
      "Whether amounts include or exclude tax comes from the Finance and Tax authority. This page gives no tax advice.",
    status: "Not published",
    statusTone: "gray",
  },
  {
    number: "4",
    title: "Commitment & renewal",
    description:
      "Minimum term, renewal, cancellation, proration, payment timing, and prepaid or committed usage appear only when approved.",
    status: "Contract-dependent",
    statusTone: "contract",
  },
];

const exclusions = [
  {
    title: "No default annual selection",
    description:
      "A billing cycle is never preselected to steer the decision.",
  },
  {
    title: "No monthly-equivalent framing",
    description:
      "An annual amount is not restated as a smaller monthly figure.",
  },
  {
    title: "No hidden annual total",
    description:
      "If a term commitment applies, the full committed amount appears with it.",
  },
  {
    title: "No unsupported conversion",
    description:
      "A currency is never converted for display without an approved rate basis.",
  },
];

function StatusBadge({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "gray" | "contract";
}) {
  return (
    <span
      className={`inline-flex rounded-md border px-2.5 py-px text-xs font-semibold leading-5 ${
        tone === "contract"
          ? "border-gray-200 bg-gray-100 text-slate-600"
          : "border-gray-200 bg-gray-50 text-slate-500"
      }`}
    >
      {children}
    </span>
  );
}

export default function BillingTerms() {
  return (
    <section className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
          {/* Section label */}
          <div className="flex h-6 items-center gap-2 sm:gap-3">
            <div className="rounded-[5px] border border-blue-100 bg-gray-100 px-1.5 py-0.5">
              <div className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                07
              </div>
            </div>

            <div className="text-xs font-bold uppercase leading-4 tracking-[0.2em] text-slate-500">
              Billing terms
            </div>

            <div className="hidden h-px w-6 bg-slate-500 opacity-50 sm:block" />
          </div>

          {/* Heading */}
          <div className="w-full pb-0.5">
            <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
              Cadence, currency, tax and commitment — stated only once
              approved.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[666px] pb-1">
            <p className="text-sm font-normal leading-5 text-slate-600 sm:text-base sm:leading-6">
              There is no monthly/annual toggle on this page, because more
              than one approved cadence does not yet exist. A control that
              changes nothing would misrepresent the offer.
            </p>
          </div>

          {/* Main content */}
          <div className="grid w-full grid-cols-1 gap-5 pt-3 lg:grid-cols-2">
            {/* Commercial terms summary */}
            <div className="flex w-full flex-col rounded-2xl border border-gray-200 bg-white px-5 pt-6 pb-8 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] sm:px-6">
              <div>
                <h3 className="text-base font-bold leading-7 text-slate-900">
                  Commercial terms summary
                </h3>
              </div>

              <div className="mt-3 divide-y divide-gray-200">
                {terms.map((term) => (
                  <div
                    key={term.number}
                    className="flex items-start gap-3.5 py-3.5 first:pt-0"
                  >
                    {/* Number */}
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white">
                      <span className="text-xs font-bold leading-5 text-slate-700">
                        {term.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-semibold leading-6 text-slate-900">
                        {term.title}
                      </h4>

                      <div className="mt-1.5">
                        <p className="text-xs font-normal leading-5 text-slate-600">
                          {term.description}
                        </p>

                        <div className="mt-1">
                          <StatusBadge tone={term.statusTone}>
                            {term.status}
                          </StatusBadge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Authoritative terms */}
              <div className="mt-2 flex flex-wrap items-center gap-1 text-xs leading-5 text-slate-500">
                <span>Effective date: not published ·</span>

                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-blue-600 hover:underline"
                >
                  View authoritative terms
                </button>
              </div>
            </div>

            {/* What this page will not do */}
            <div className="flex w-full flex-col rounded-2xl border border-gray-200 bg-gray-50 px-5 pt-6 pb-10 sm:px-6 lg:pb-16">
              <div>
                <h3 className="text-base font-bold leading-7 text-slate-900">
                  What this page will not do
                </h3>
              </div>

              <div className="pt-3">
                <p className="text-sm font-normal leading-5 text-slate-600">
                  These patterns are excluded by policy, not by oversight.
                </p>
              </div>

              <div className="mt-3 divide-y divide-gray-200">
                {exclusions.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3.5 py-3.5 first:pt-3"
                  >
                    {/* X marker */}
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white">
                      <span className="text-xs font-bold leading-5 text-slate-700">
                        ✕
                      </span>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-semibold leading-6 text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-0.5 text-xs font-normal leading-5 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}