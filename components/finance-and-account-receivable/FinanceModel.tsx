"use client";

import Image from "next/image";

export default function FinanceModel() {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-5 pt-px sm:px-7">
        {/* Eyebrow */}
        <div className="relative flex h-6 w-full max-w-[320px] items-center">
          <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Finance &amp; AR operating model
          </span>

          <span className="ml-4 h-px w-6 shrink-0 bg-blue-600 opacity-50" />
        </div>

        {/* Heading */}
        <div className="w-full pb-[0.61px]">
          <h2 className="m-0 text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
            Ten stages, and none of them collapses into &quot;paid or
            unpaid.&quot;
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[686.38px]">
          <p className="m-0 text-base font-normal leading-6 text-slate-600">
            Issue, delivery, due status, payment, allocation, reconciliation
            and settlement are separate facts. Each stage names the evidence
            that answers it.
          </p>
        </div>

        {/* Image */}
        <div className="relative mt-0 w-full overflow-hidden rounded-2xl border border-gray-200 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <Image
            src="/images/finance-and-account-receivable/finance-model.png"
            alt="Finance and accounts receivable operating model"
            width={1264}
            height={630}
            priority
            className="h-auto w-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1320px) 100vw, 1264px"
          />
        </div>
      </div>
    </section>
  );
}