"use client";

import Image from "next/image";
import Link from "next/link";

const allocationItems = [
  {
    title: "Single document",
    description:
      "Allocation to one invoice or supported debit document.",
  },
  {
    title: "Partial allocation",
    description:
      "Part of the payment applied, with remaining payment and document amounts both visible.",
  },
  {
    title: "Multiple documents",
    description:
      "One payment spread across several documents, where that is supported.",
  },
  {
    title: (
      <>
        Customer-level
        <br />
        unapplied
      </>
    ),
    description:
      "Value held against a customer or account, where an on-account balance is supported.",
  },
  {
    title: (
      <>
        Entity and currency
        <br />
        compatibility
      </>
    ),
    description:
      "Allocation requires compatible entity and currency context.",
  },
  {
    title: (
      <>
        Effective date and
        <br />
        actor
      </>
    ),
    description:
      "Every allocation records when it applies and who or what applied it.",
  },
];

export default function Allocation() {
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
                Allocation
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[640px] text-[40px] font-medium leading-[1.1] tracking-tight text-slate-900 sm:text-[48px] sm:leading-[1.12] dark:text-white">
              Apply funds without
              <br className="hidden sm:block" />
              rewriting the billing
              <br className="hidden sm:block" />
              record.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="w-full max-w-[530px] flex-1">
            <p className="text-base font-normal leading-7 text-slate-600 sm:leading-8 dark:text-slate-300">
              An allocation is a relationship between a payment and a
              document. The invoice itself is never edited by it.
            </p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid w-full gap-10 pt-3.5 lg:grid-cols-2 lg:gap-16">

          {/* LEFT IMAGE */}
          <div className="w-full">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-slate-700 dark:bg-slate-900">
              <Image
                src="/images/payments-and-reconcilliation/allocation.png"
                alt="Payment allocation workflow"
                width={526}
                height={356}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex w-full flex-col items-start gap-1.5">

            {/* Title */}
            <h3 className="text-lg font-semibold leading-6 text-slate-900 dark:text-white">
              What allocation supports
            </h3>

            {/* Items */}
            <div className="w-full pb-4">
              {allocationItems.map((item, index) => (
                <div
                  key={index}
                  className={`grid gap-4 py-3.5 sm:grid-cols-[145px_1fr] ${
                    index !== allocationItems.length - 1
                      ? "border-b border-zinc-200 dark:border-slate-700"
                      : ""
                  }`}
                >
                  {/* Item title */}
                  <div className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                    {item.title}
                  </div>

                  {/* Item description */}
                  <div className="text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>

            {/* ALLOCATION BOUNDARY */}
            <div className="flex w-full flex-col items-start gap-2 rounded-r-2xl border-l-[3px] border-blue-500 bg-[#f7f7f7] px-6 py-7 sm:px-7 dark:bg-slate-900">

              <span className="text-[10px] font-normal uppercase leading-4 tracking-wider text-blue-500 dark:text-blue-400">
                Allocation boundary
              </span>

              <p className="text-base font-normal leading-7 text-slate-900 dark:text-slate-200">
                Allocation does not rewrite the invoice and does not prove an
                accounting posting. Cross-currency allocation requires approved
                conversion evidence — it never happens implicitly.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-5">
              <Link
                href="/accounts-receivable"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-950 px-5 py-2.5 text-base font-normal leading-6 text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              >
                Explore Accounts Receivable
              </Link>
            </div>
          </div>
        </div>

        {/* FULL-WIDTH IMAGE */}
        <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-slate-700 dark:bg-slate-900">
          <Image
            src="/images/payments-and-reconcilliation/allocation.png"
            alt="Allocation overview"
            width={1116}
            height={552}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}