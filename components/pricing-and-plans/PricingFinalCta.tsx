"use client";

import React from "react";
import Link from "next/link";

export default function PricingFinalCta() {
  return (
    <section className="w-full px-5 py-12 sm:px-8 lg:px-14 lg:py-20">
      <div className="relative mx-auto flex w-full max-w-[1320px] flex-col overflow-hidden rounded-3xl bg-slate-900 p-7 sm:p-10 lg:h-96 lg:p-14">
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-[100px] -top-[100px] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.5)_0%,rgba(37,99,235,0)_70%)]" />

        {/* Content */}
        <div className="relative z-20 flex w-full flex-col items-start gap-3.5 pb-6 lg:max-w-[700px]">
          <div className="w-full">
            <h2 className="text-2xl font-bold leading-8 text-white sm:text-3xl sm:leading-10">
              Ready to choose the right
              <br className="hidden sm:block" />
              Zoiko Billing path?
            </h2>
          </div>

          <div className="w-full max-w-[492px]">
            <p className="text-sm font-normal leading-5 text-white/70 sm:text-base sm:leading-6">
              Three routes, matched to the current commercial state of your
              market. No fourth action, no newsletter, no countdown.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="relative z-30 flex w-full flex-wrap items-start gap-3 pt-3">
            <Link
              href="/create-account"
              className="!inline-flex !h-11 !items-center !justify-center !rounded-full !bg-white !px-5 !text-sm !font-semibold !leading-6 !text-slate-900 !no-underline transition hover:!bg-gray-100"
            >
              Create account
            </Link>

            <Link
              href="/book-a-demo"
              className="!inline-flex !h-11 !items-center !justify-center !rounded-full !border !border-white/40 !bg-transparent !px-5 !text-sm !font-semibold !leading-6 !text-white !no-underline transition hover:!bg-white/10"
            >
              Book a demo
            </Link>

            <Link
              href="#compare-plans"
              className="!inline-flex !h-11 !items-center !justify-center !rounded-full !border !border-white/40 !bg-transparent !px-5 !text-sm !font-semibold !leading-6 !text-white !no-underline transition hover:!bg-white/10"
            >
              Compare deployment options
            </Link>
          </div>

          <div className="w-full max-w-96 pt-2">
            <p className="text-xs font-normal leading-5 text-white/60">
              Available as standalone SaaS or as an integrated component of
              Zoiko One.
            </p>
          </div>
        </div>

        {/* CTA Image */}
        <div className="relative z-10 mt-6 w-full lg:absolute lg:right-14 lg:top-14 lg:mt-0 lg:w-[506px]">
          <img
            src="/images/pricing-and-plans/pricing-final-cta.png"
            alt="Zoiko Billing"
            className="h-auto w-full rounded-2xl border border-white/15 object-cover"
          />
        </div>
      </div>
    </section>
  );
}