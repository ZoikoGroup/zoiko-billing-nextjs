"use client";

import Image from "next/image";

export default function RetainerBilling() {
  return (
    <section className="w-full border-t border-gray-200 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-4 px-0 sm:px-4 lg:px-7">
        {/* Section Label */}
        <div className="flex items-center gap-3">
          <span className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Retainers, deposits &amp; pre-billed amounts
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
          Retainer means different things. This page only describes the billing
          record.
        </h2>

        {/* Description */}
        <p className="max-w-[686px] text-sm font-normal leading-6 text-slate-600 sm:text-base">
          Where a retainer or pre-billed model is configured and supported,
          Zoiko Billing tracks the record, its application to invoices, and
          the history of both.
        </p>

        {/* Image */}
        <div className="mt-5 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
          <Image
            src="/images/professional-services/retainer-billing.png"
            alt="Retainers, deposits and pre-billed amounts"
            width={1264}
            height={632}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}