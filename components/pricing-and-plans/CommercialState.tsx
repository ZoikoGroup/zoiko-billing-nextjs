"use client";

import React from "react";

export default function CommercialState() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
        <div className="flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
          {/* Section label */}
          <div className="flex h-6 items-center gap-2 sm:gap-3">
            <div className="rounded-[5px] border border-blue-100 bg-gray-100 px-1.5 py-0.5">
              <div className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                02
              </div>
            </div>

            <div className="text-xs font-bold uppercase leading-4 tracking-[0.2em] text-slate-500">
              Region, currency & availability
            </div>

            <div className="hidden h-px w-6 bg-slate-500 opacity-50 sm:block" />
          </div>

          {/* Heading */}
          <div className="w-full pb-0.5">
            <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
              Resolve your commercial state before comparing plans.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[666px]">
            <p className="text-sm font-normal leading-5 text-slate-600 sm:text-base sm:leading-6">
              Region, language, and currency are separate choices. Selecting a
              language never changes your jurisdiction, and a display currency
              is not a contract currency.
            </p>
          </div>

          {/* Main card */}
          <div className="mt-6 flex w-full flex-col items-start gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-6 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] sm:px-6 sm:pt-10 sm:pb-6">
            {/* Preferences */}
            <div className="flex w-full flex-col items-stretch gap-4 lg:flex-row lg:items-end">
              {/* Region */}
              <div className="flex w-full flex-col items-start gap-1.5 lg:flex-1">
                <label className="w-full text-xs font-bold uppercase leading-5 tracking-wide text-slate-500">
                  Region
                </label>

                <div className="flex h-11 w-full items-center rounded-[10px] border border-gray-200 bg-white px-3.5">
                  <span className="flex-1 text-sm font-normal leading-6 text-slate-900">
                    United Kingdom
                  </span>

                  <span className="ml-3 text-slate-500">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 4.5L6 8L10 4.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Language */}
              <div className="flex w-full flex-col items-start gap-1.5 lg:flex-1">
                <label className="w-full text-xs font-bold uppercase leading-5 tracking-wide text-slate-500">
                  Language
                </label>

                <div className="flex h-11 w-full items-center rounded-[10px] border border-gray-200 bg-white px-3.5">
                  <span className="flex-1 text-sm font-normal leading-6 text-slate-900">
                    English (US)
                  </span>

                  <span className="ml-3 text-slate-500">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 4.5L6 8L10 4.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Currency */}
              <div className="flex w-full flex-col items-start gap-1.5 lg:flex-1">
                <label className="w-full text-xs font-bold uppercase leading-5 tracking-wide text-slate-500">
                  Display currency
                </label>

                <div className="flex h-11 w-full items-center rounded-[10px] border border-gray-200 bg-white px-3.5">
                  <span className="flex-1 text-sm font-normal leading-6 text-slate-900">
                    GBP — pending approval
                  </span>

                  <span className="ml-3 text-slate-500">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 4.5L6 8L10 4.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Apply button */}
              <div className="w-full lg:w-auto">
                <button
                  type="button"
                  className="h-11 w-full rounded-full border border-gray-200 bg-white px-5 text-sm font-semibold leading-6 text-slate-900 transition hover:bg-gray-50 lg:w-auto"
                >
                  Apply preferences
                </button>
              </div>
            </div>

            {/* General availability */}
            <div className="flex w-full items-start gap-3.5 rounded-[10px] border border-gray-200 bg-gray-100 px-4 py-4 sm:px-5 sm:pt-5 sm:pb-4">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white">
                <span className="text-xs font-extrabold leading-5 text-blue-600">
                  GA
                </span>
              </div>

              <div className="flex min-w-0 flex-1 flex-col items-start gap-px">
                <h3 className="text-base font-bold leading-6 text-slate-900">
                  General availability
                </h3>

                <p className="text-sm font-normal leading-5 text-slate-600">
                  Self-service account creation is live for this market. Plan,
                  limit, and price facts render only from active authoritative
                  records.
                </p>
              </div>
            </div>

            {/* Fail-closed behavior */}
            <div className="w-full rounded-[10px] border border-gray-200 bg-gray-50 px-4 py-3.5 sm:px-5 sm:pb-4">
              <p className="text-sm leading-5 text-slate-600">
                <span className="font-bold text-slate-900">
                  Fail-closed behavior.
                </span>{" "}
                If regional configuration is unknown, stale, or contradictory,
                sign-up and price display are suppressed and the page falls
                back to Check availability or Book a demo. A previous number
                is never retained because the layout looks incomplete without
                it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}