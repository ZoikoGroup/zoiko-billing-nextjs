"use client";

import React from "react";
import Link from "next/link";

export default function ComparePlans() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
        <div className="flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
          {/* Section label */}
          <div className="flex h-6 items-center gap-2 sm:gap-3">
            <div className="rounded-[5px] border border-blue-100 bg-gray-100 px-1.5 py-0.5">
              <div className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                12
              </div>
            </div>

            <div className="text-xs font-bold uppercase leading-4 tracking-[0.2em] text-slate-500">
              Compare plans
            </div>

            <div className="hidden h-px w-6 bg-slate-500 opacity-50 sm:block" />
          </div>

          {/* Heading */}
          <div className="w-full pb-0.5">
            <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
              Compare decision dimensions, not feature counts.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[666px]">
            <p className="text-sm font-normal leading-5 text-slate-600 sm:text-base sm:leading-6">
              Plans can differ by operating model rather than by quantity, so
              every cell states its condition in words.
            </p>
          </div>

          {/* Comparison image */}
          <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
            <img
              src="/images/pricing-and-plans/compare-plans.png"
              alt="Compare plans"
              className="h-auto min-h-[300px] w-full object-cover object-top"
            />
          </div>

          {/* Bottom cards */}
          <div className="flex w-full flex-col gap-5 pt-2 lg:flex-row">
            {/* Commercial review */}
            <div className="flex flex-1 flex-col items-start gap-3 rounded-2xl border border-gray-200 bg-gray-100 px-5 py-6 sm:px-6 sm:pb-16">
              <div className="w-full">
                <h3 className="text-base font-bold leading-7 text-slate-900">
                  When commercial review is required
                </h3>
              </div>

              <div className="w-full">
                <p className="text-sm font-normal leading-5 text-slate-600">
                  Multiple entities, high transaction volume, non-standard
                  integrations, migration from an existing system, contractual
                  support terms, or suite deployment.
                </p>
              </div>
            </div>

            {/* Enterprise evaluation */}
            <div className="flex flex-1 flex-col items-start justify-center rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] sm:px-6">
              <div className="w-full">
                <h3 className="text-base font-bold leading-7 text-slate-900">
                  Enterprise evaluation
                </h3>
              </div>

              <div className="w-full py-3.5">
                <p className="text-sm font-normal leading-5 text-slate-600">
                  A short commercial conversation, not a long pricing form.
                </p>
              </div>

              <div className="w-full pt-2">
                <div className="flex flex-wrap items-start gap-2.5">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-full bg-blue-600 px-4 text-sm font-semibold leading-5 text-white shadow-[0px_6px_16px_0px_rgba(31,111,235,0.24)] transition hover:bg-blue-700"
                  >
                    Book a demo
                  </Link>

                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold leading-5 text-slate-900 transition hover:bg-gray-50"
                  >
                    Contact sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}