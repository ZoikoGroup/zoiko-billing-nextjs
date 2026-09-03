"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function FinanceArCta() {
  return (
    <section className="w-full px-5 py-12 sm:px-8 lg:px-14 lg:py-16">
      <div className="relative mx-auto flex w-full max-w-[1320px] flex-col overflow-hidden rounded-3xl bg-slate-900 p-7 sm:p-10 lg:min-h-[384px] lg:p-14">
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-20 -top-24 z-0 size-80 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.5)_0%,rgba(59,130,246,0)_70%)] sm:size-96 lg:right-[-4px]" />

        {/* Content */}
        <div className="relative z-20 flex w-full max-w-[600px] flex-col items-start gap-3.5">
          {/* Heading */}
          <div className="w-full">
            <h2 className="m-0 text-2xl font-bold leading-8 text-white sm:text-3xl sm:leading-10">
              Bring Finance and AR work
            
              back to the billing record.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[511px]">
            <p className="m-0 text-sm font-normal leading-6 text-white/70 sm:text-base">
              See what is owed, understand why it needs attention, reconcile
              payments, preserve approvals and evidence, and route exceptions
              to the right owner.
            </p>
          </div>

          {/* CTAs */}
          <div className="relative z-30 flex w-full flex-wrap items-center gap-3 pt-2.5">
            {/* Create account */}
            <Link
              href="create-account"
              className="!inline-flex !min-h-11 !items-center !justify-center !rounded-full !bg-white !px-5 !text-sm !font-semibold !leading-6 !text-slate-900 shadow-sm transition hover:!bg-gray-100"
            >
              Create account
            </Link>

            {/* Book a demo */}
            <Link
              href="book-demo"
              className="!inline-flex !min-h-11 !items-center !justify-center !rounded-full !border !border-white/35 !bg-transparent !px-5 !text-sm !font-semibold !leading-6 !text-white transition hover:!bg-white/10"
              style={{ color: "#ffffff" }}
            >
              Book a demo
            </Link>

            {/* View pricing */}
            <Link
              href="pricing-and-plans"
              className="!inline-flex !min-h-11 !items-center !justify-center !rounded-full !border !border-white/35 !bg-transparent !px-5 !text-sm !font-semibold !leading-6 !text-white transition hover:!bg-white/10"
              style={{ color: "#ffffff" }}
            >
              View pricing
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative z-10 mt-8 w-full overflow-hidden rounded-2xl border border-white/15 lg:absolute lg:right-14 lg:top-14 lg:mt-0 lg:h-[320px] lg:w-[520px]">
          <Image
            src="/images/finance-and-account-receivable/finance-ar-cta.png"
            alt="Finance and accounts receivable"
            width={520}
            height={339}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}