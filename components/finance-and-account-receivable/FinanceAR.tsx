"use client";

import Image from "next/image";
import Link from "next/link";

export default function FinanceAR() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto flex min-h-[608px] w-full max-w-[1440px] items-center px-5 py-12 sm:px-8 lg:px-[60px]">
        <div className="relative flex w-full flex-col overflow-hidden rounded-3xl lg:min-h-[498px] lg:flex-row">
          
          {/* Content */}
          <div className="relative z-10 flex w-full max-w-[680px] flex-col items-start gap-4 py-8 sm:py-12 lg:ml-7 lg:mt-8 lg:py-4">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase leading-4 tracking-[0.2em] text-blue-600">
                Solution for Finance &amp; Accounts Receivable
              </span>

              <span className="hidden h-px w-6 bg-blue-600/50 sm:block" />
            </div>

            {/* Heading */}
            <h1 className="m-0 max-w-[650px] text-[34px] font-extrabold leading-[1.14] tracking-[-0.02em] text-slate-900 sm:text-[42px] lg:text-[48px]">
              Know what is owed, what was paid, and{" "}
              <span className="text-blue-600">
                what needs review.
              </span>
            </h1>

            {/* Description */}
            <p className="m-0 max-w-[686px] text-base font-normal leading-6 text-slate-600">
              Bring invoices, credit notes, adjustments, payments, outstanding
              balances, approvals and reporting into one governed operating
              view — while keeping the underlying billing record traceable.
            </p>

            {/* CTAs */}
            <div className="flex w-full flex-wrap items-start gap-2.5 pt-2.5">
              <Link
                href="#"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-5 text-center text-sm font-semibold leading-6 text-white shadow-[0px_6px_16px_0px_rgba(31,111,235,0.24)] transition hover:bg-blue-700"
              >
                View Pricing &amp; Plans
              </Link>

              <Link
                href="#"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-gray-200 bg-white px-5 text-center text-sm font-semibold leading-6 text-slate-900 transition hover:bg-gray-50"
              >
                Create account
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-8 flex w-full justify-center lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:w-[52%] lg:items-center lg:justify-end">
            <div className="relative h-[280px] w-full max-w-[420px] sm:h-[360px] sm:max-w-[500px] lg:h-[473px] lg:w-[523px] lg:max-w-none">
              <Image
                src="/images/finance-and-account-receivable/image.png"
                alt="Finance and accounts receivable"
                fill
                priority
                className="rounded-2xl object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 500px, 523px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}