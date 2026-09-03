"use client";

import Image from "next/image";
import Link from "next/link";

export default function BillingCta() {
  return (
    <section className="w-full bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="relative overflow-hidden rounded-3xl bg-[#17243a] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          {/* Background glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.5)_0%,rgba(59,130,246,0)_70%)] sm:-right-16 sm:-top-20 sm:h-80 sm:w-80 lg:-right-24 lg:-top-24 lg:h-96 lg:w-96" />

          <div className="relative z-10 grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-10">
            {/* Content */}
            <div className="flex w-full max-w-[560px] flex-col items-start gap-3.5">
              <h2 className="text-2xl font-bold leading-9 text-white sm:text-3xl sm:leading-10">
                Keep billing clear as
                <br className="hidden sm:block" />
                the business grows.
              </h2>

              <p className="w-full max-w-[511px] text-sm font-normal leading-6 text-white/70 sm:text-base">
                Start with the essentials, keep every record traceable, and
                add schedules, approvals, integrations and global controls
                only when you need them.
              </p>

              {/* CTAs */}
              <div className="flex w-full flex-wrap gap-3 pt-2.5">
                {/* Create account */}
                <Link
                  href="/create-account"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-center text-sm font-semibold leading-6 transition hover:bg-gray-100"
                  style={{ color: "#17243a" }}
                >
                  Create account
                </Link>

                {/* Book a demo */}
                <Link
                  href="/book-demo"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/35 bg-transparent px-5 text-center text-sm font-semibold leading-6 transition hover:bg-white/10"
                  style={{ color: "#ffffff" }}
                >
                  Book a demo
                </Link>

                {/* View pricing */}
                <Link
                  href="/pricing-and-plans"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/35 bg-transparent px-5 text-center text-sm font-semibold leading-6 transition hover:bg-white/10"
                  style={{ color: "#ffffff" }}
                >
                  View pricing
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="w-full overflow-hidden rounded-2xl border border-white/15">
              <Image
                src="/images/small-businesses/billing-cta.png"
                alt="Zoiko Billing"
                width={520}
                height={384}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}