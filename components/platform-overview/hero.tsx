'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="flex w-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8 md:py-20">
      <div className="grid w-full max-w-[1220px] grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7 flex flex-col items-start justify-start gap-4 sm:gap-6">
          <div className="inline-flex items-center gap-2.5">
            <span className="shrink-0 rounded-xs h-0.5 w-5 bg-gradient-to-r from-cyan-500 to-sky-500" />
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-sky-600">
              Zoiko Billing Platform
            </span>
          </div>

          <h1 className="font-sans text-4xl font-medium leading-[1.1] tracking-tight text-sky-950 sm:text-5xl lg:text-6xl">
            Billing clarity from <br />
            <span className="text-sky-600">invoice to payment.</span>
          </h1>

          <p className="max-w-[528px] text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
            Zoiko Billing manages the connected billing record across customers,
            charges, invoices, delivery, payments, balances and reporting. Use
            it independently or as part of Zoiko One.
          </p>

          <div className="flex w-full flex-wrap items-center gap-4 pt-2 sm:w-auto">
            <button
              type="button"
              className="min-h-11 rounded-lg bg-sky-600 px-6 py-2.5 text-base font-normal text-white shadow-sm transition-colors duration-150 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Create Account
            </button>
            <button
              type="button"
              className="min-h-11 rounded-lg border border-slate-200 bg-white px-6 py-2.5 text-base font-normal text-slate-950 transition-colors duration-150 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Book a Demo
            </button>
          </div>
        </div>

        <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 via-sky-100/50 to-slate-100 p-4 sm:p-7 lg:col-span-5">
          <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-200 shadow-[0_22px_50px_-20px_rgba(14,33,27,0.24),0_2px_6px_0_rgba(14,33,27,0.06)]">
            <Image
              src="/images/platform-overview/Illustrative Zoiko Billing record showing eight connected stages.png"
              alt="Illustrative Zoiko Billing record showing eight connected stages"
              width={500}
              height={440}
              className="block h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
