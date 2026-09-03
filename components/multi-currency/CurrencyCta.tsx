"use client";

import Link from "next/link";

export default function CurrencyCta() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-12">
      <div className="relative mx-auto flex min-h-[384px] w-full max-w-[1184px] items-center overflow-hidden rounded-3xl bg-[#0B1B3C] px-7 py-8 sm:px-10 lg:px-14 lg:py-10">
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(31,95,191,0.65)_0%,rgba(31,95,191,0.25)_40%,rgba(31,95,191,0)_70%)]" />

        {/* Content + Image */}
        <div className="relative z-10 grid w-full items-center gap-8 lg:grid-cols-[1fr_510px] lg:gap-10">
          {/* Left Content */}
          <div className="flex flex-col items-start">
            {/* Heading */}
            <div
              className="!m-0 !p-0 text-[36px] font-extrabold leading-[42px] tracking-[-1px] !text-white sm:text-[40px] sm:leading-[46px]"
            >
              Verify the currency context
              <br />
              before you commit to it.
            </div>

            {/* Description */}
            <p
              className="mt-4 max-w-[510px] !p-0 !text-[15px] !font-normal !leading-[22px] !text-white/70"
            >
              Confirm which operations are supported for your currency, entity
              and market — then keep the original amount, the rate evidence and
              the settlement context all separately explainable.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold !text-[#0B1B3C] no-underline transition-opacity hover:opacity-90"
              >
                Check availability
              </Link>

              <Link
                href="/pricing-and-plans"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/35 bg-transparent px-6 text-sm font-semibold !text-white no-underline transition-colors hover:bg-white/10"
              >
                View pricing
              </Link>

              <Link
                href="/book-demo"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/35 bg-transparent px-6 text-sm font-semibold !text-white no-underline transition-colors hover:bg-white/10"
              >
                Book a demo
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex w-full items-center justify-end">
            <div className="w-full max-w-[510px] overflow-hidden rounded-2xl">
              <img
                src="/images/multi-currency/currency-verify.png"
                alt="Currency verification context"
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}