"use client";

import Image from "next/image";
import Link from "next/link";

const exceptionRows = [
  {
    title: "Unmatched payment",
    description:
      "No eligible target accepted. The payment stays visible with its candidate reasons.",
  },
  {
    title: (
      <>
        Duplicate or replayed
        <br />
        event
      </>
    ),
    description:
      "The same source event may have arrived twice. Deduplication applies rather than double-counting.",
  },
  {
    title: "Overpayment",
    description:
      "More received than the document requires, leaving a surplus that needs a policy decision.",
  },
  {
    title: "Short payment",
    description:
      "Less received than required, leaving a remaining document balance.",
  },
  {
    title: "Amount mismatch",
    description:
      "The amount does not correspond to any eligible target within tolerance.",
  },
  {
    title: (
      <>
        Wrong currency,
        <br />
        entity or customer
      </>
    ),
    description:
      "The payment cannot be applied without crossing a boundary that requires approval.",
  },
  {
    title: (
      <>
        Missing or invalid
        <br />
        reference
      </>
    ),
    description:
      "No usable reference, so matching relies on weaker supporting evidence.",
  },
  {
    title: (
      <>
        Payment before the
        <br />
        document
      </>
    ),
    description:
      "Funds arrived before the invoice existed, so there is nothing yet to allocate to.",
  },
];

export default function Exceptions() {
  return (
    <section className="w-full bg-white transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-9 px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24">

        {/* HEADER */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">

          {/* LEFT */}
          <div className="flex flex-1 flex-col items-start gap-5 pt-2.5 pb-5">

            {/* Label */}
            <div className="flex items-center gap-2.5">
              <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

              <span className="text-xs font-medium uppercase leading-4 tracking-wider text-blue-500 dark:text-blue-400">
                Exceptions
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[640px] text-[40px] font-medium leading-[1.1] tracking-tight text-slate-900 sm:text-[48px] sm:leading-[1.12] dark:text-white">
              Keep unmatched,
              <br className="hidden sm:block" />
              duplicate and overpaid
              <br className="hidden sm:block" />
              amounts visible.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="w-full max-w-[530px] flex-1">
            <p className="text-base font-normal leading-7 text-slate-600 sm:leading-8 dark:text-slate-300">
              Money that cannot be confidently allocated does not disappear
              into a total. It stays on screen with an owner and a next action.
            </p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid w-full gap-10 pt-6 lg:grid-cols-2 lg:gap-16">

          {/* LEFT - EXCEPTION LIST */}
          <div className="flex w-full flex-col items-start">

            {exceptionRows.map((item, index) => (
              <div
                key={index}
                className={`grid w-full gap-4 py-3.5 sm:grid-cols-[145px_1fr] ${
                  index !== exceptionRows.length - 1
                    ? "border-b border-zinc-200 dark:border-slate-700"
                    : ""
                }`}
              >
                {/* Title */}
                <div className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                  {item.title}
                </div>

                {/* Description */}
                <div className="text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                  {item.description}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex w-full flex-col items-start gap-10">

            {/* Exception Image */}
            <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0px_4px_14px_rgba(14,33,27,0.04)] dark:border-slate-700 dark:bg-slate-900">
              <Image
                src="/images/payments-and-reconcilliation/exceptions.png"
                alt="Payment exceptions and unapplied funds"
                width={526}
                height={681}
                priority
                className="h-auto w-full object-contain"
              />
            </div>

            {/* UNAPPLIED FUNDS BOUNDARY */}
            <div className="flex w-full flex-col items-start gap-2 rounded-r-2xl border-l-[3px] border-blue-500 bg-[#f7f7f7] px-6 py-7 sm:px-7 dark:bg-slate-900">

              <span className="text-[10px] font-normal uppercase leading-4 tracking-wider text-blue-500 dark:text-blue-400">
                Unapplied-funds boundary
              </span>

              <p className="text-base font-normal leading-7 text-slate-900 dark:text-slate-200">
                Unapplied funds never disappear from operational views, and an
                overpayment is not treated as revenue or free credit without an
                explicit policy decision.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex w-full justify-center">
          <Link
            href="/outstanding-balances"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-950 px-5 py-2.5 text-base font-normal leading-6 text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Explore Outstanding Balances
          </Link>
        </div>
      </div>
    </section>
  );
}