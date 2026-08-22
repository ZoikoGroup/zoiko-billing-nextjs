"use client";

import Image from "next/image";
import Link from "next/link";

export default function BalanceContext() {
  return (
    <section className="w-full border-t border-gray-200 bg-white px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-7">
        {/* Eyebrow */}
        <div className="relative flex h-6 w-full max-w-[384px] items-center">
          <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Customer balance &amp; record context
          </span>

          <span className="ml-4 h-px w-6 shrink-0 bg-blue-600 opacity-50" />
        </div>

        {/* Heading */}
        <div className="w-full pb-[0.61px]">
          <h2 className="m-0 text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
            Every outstanding total decomposes into the documents behind it.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[686.38px]">
          <p className="m-0 text-base font-normal leading-6 text-slate-600">
            Each line below is a real data relationship, not a decorative
            edge. The same lineage is available as a table for screen readers
            and export.
          </p>
        </div>

        {/* Main Image */}
        <div className="mt-6 w-full overflow-hidden rounded-2xl border border-gray-200 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <Image
            src="/images/finance-and-account-receivable/balance-context.png"
            alt="Customer balance and record context"
            width={1264}
            height={632}
            priority
            className="h-auto w-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1320px) 100vw, 1264px"
          />
        </div>

        {/* Bottom Cards */}
        <div className="flex w-full flex-col items-stretch gap-5 pt-5 lg:flex-row">
          {/* History Card */}
          <div className="flex-1 rounded-2xl bg-white px-5 py-6 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200 sm:px-6">
            <h3 className="m-0 text-base font-bold leading-7 text-slate-900">
              History travels with the record
            </h3>

            {/* Item 1 */}
            <div className="flex min-h-16 items-start gap-3.5 py-3.5">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-white outline outline-1 outline-offset-[-1px] outline-gray-200">
                <span className="text-xs font-bold leading-5 text-slate-900">
                  1
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <h4 className="m-0 text-sm font-semibold leading-6 text-slate-900">
                  Who changed what, and when
                </h4>

                <p className="m-0 text-xs font-normal leading-5 text-slate-600">
                  Actor, role, source object, state change and timestamp for
                  every material action.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex min-h-20 items-start gap-3.5 border-t border-slate-900/10 py-3.5">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-white outline outline-1 outline-offset-[-1px] outline-gray-200">
                <span className="text-xs font-bold leading-5 text-slate-900">
                  2
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <h4 className="m-0 text-sm font-semibold leading-6 text-slate-900">
                  From which authorized workflow
                </h4>

                <p className="m-0 text-xs font-normal leading-5 text-slate-600">
                  A change records the workflow and permission that allowed
                  it, not just the outcome.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex min-h-20 items-start gap-3.5 border-t border-slate-900/10 py-3.5">
              <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-white outline outline-1 outline-offset-[-1px] outline-gray-200">
                <span className="text-xs font-bold leading-5 text-slate-900">
                  3
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <h4 className="m-0 text-sm font-semibold leading-6 text-slate-900">
                  Corrections never overwrite
                </h4>

                <p className="m-0 text-xs font-normal leading-5 text-slate-600">
                  Credit notes and adjustments are separate documents. Issued
                  history stays intact.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy Card */}
          <div className="flex-1 rounded-2xl bg-gray-100 px-5 py-6 outline outline-1 outline-offset-[-1px] outline-gray-200 sm:px-6 lg:pb-24">
            <h3 className="m-0 text-base font-bold leading-7 text-slate-900">
              Privacy boundary
            </h3>

            <p className="m-0 mt-3 text-sm font-normal leading-5 text-slate-600">
              Only authorized customer and billing fields appear in this
              context. There is no unrelated personal profiling, no behavioral
              scoring, and no inference about a customer&apos;s financial
              health.
            </p>

            <p className="m-0 mt-5 text-sm font-normal leading-5 text-slate-600">
              Detailed profile management stays in{" "}
              <Link
                href="/customer-records"
                className="font-semibold leading-6 text-blue-600 hover:underline"
              >
                Customer Records
              </Link>
              . This view shows the cross-record relationship — it is not a
              second customer database.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}