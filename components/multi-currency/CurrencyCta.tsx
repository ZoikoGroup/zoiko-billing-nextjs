"use client";

import Link from "next/link";

export default function CurrencyCta() {
  return (
    <section className="w-full px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="relative mx-auto w-full max-w-[1184px] overflow-hidden rounded-3xl bg-slate-900 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.55)_0%,rgba(56,189,248,0)_70%)]" />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-12">
          {/* Content */}
          <div className="flex flex-col items-start gap-3.5">
            {/* Heading */}
            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight !text-white sm:text-4xl sm:leading-10">
              <span className="block">
                Verify the currency context
              </span>

              <span className="block">
                before you commit to it.
              </span>
            </h2>

            {/* Description */}
            <p className="max-w-[511px] text-sm leading-6 !text-white/70 sm:text-base">
              Confirm which operations are supported for your currency, entity
              and market — then keep the original amount, the rate evidence and
              the settlement context all separately explainable.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-3">
              {/* Primary */}
              <Link
                href="#availability"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold !text-slate-900 transition hover:bg-gray-100"
              >
                Check availability
              </Link>

              {/* Secondary */}
              <Link
                href="#pricing"
                className="inline-flex min-h-11 items-center justify-center rounded-full !border !border-white/35 bg-transparent px-6 text-sm font-semibold !text-white transition hover:!bg-white/10"
              >
                View pricing
              </Link>

              {/* Secondary */}
              <Link
                href="#demo"
                className="inline-flex min-h-11 items-center justify-center rounded-full !border !border-white/35 bg-transparent px-6 text-sm font-semibold !text-white transition hover:!bg-white/10"
              >
                Book a demo
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="w-full overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-4">
            <img
              src="/images/multi-currency/currency-verify.png"
              alt="Currency verification context"
              className="block h-auto w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}