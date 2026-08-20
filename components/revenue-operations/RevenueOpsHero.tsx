"use client";

import Link from "next/link";
import Image from "next/image";

export default function RevenueOpsHero() {
  return (
    <section className="w-full bg-white">
      <div className="relative mx-auto min-h-[600px] w-full max-w-[1440px] overflow-hidden bg-gradient-to-b from-white to-gray-50 px-6 pb-16 pt-24 sm:px-8 sm:pt-28 lg:px-14 lg:pb-20 lg:pt-32">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 lg:relative lg:min-h-[470px]">
          {/* Left Content */}
          <div className="relative z-10 flex w-full max-w-[713px] flex-col items-start gap-3.5 lg:pt-4">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-blue-600 opacity-70" />

              <span className="whitespace-nowrap text-xs font-bold uppercase leading-4 tracking-widest text-slate-500">
                Solution for Revenue Operations
              </span>
            </div>

            {/* Heading */}
            <h1 className="m-0 w-full text-3xl font-extrabold leading-tight tracking-[-0.02em] text-slate-900 sm:text-4xl lg:text-[48px] lg:leading-[54.5px]">
              Keep billing operations moving across teams —{" "}
              <span className="text-blue-600">
                without losing control of the record.
              </span>
            </h1>

            {/* Description */}
            <p className="m-0 w-full max-w-[686px] text-sm font-normal leading-6 text-slate-600 sm:text-base">
              Coordinate approved customer and commercial context, billing
              readiness, schedules, documents, changes, payment and AR
              handoffs, exceptions and reporting in one governed operating
              model — while keeping each system and team accountable for its
              own authority.
            </p>

            {/* Buttons */}
            <div className="flex w-full flex-wrap items-start gap-2.5 pt-3">
              <Link
                href="#"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-5 text-sm font-semibold leading-6 text-white shadow-[0px_6px_16px_0px_rgba(31,111,235,0.24)] transition-opacity hover:opacity-90"
              >
                View Pricing &amp; Plans
              </Link>

              <Link
                href="#"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-gray-200 bg-white px-5 text-sm font-semibold leading-6 text-slate-900 transition-colors hover:bg-gray-50"
              >
                Create account
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-8 w-full lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:w-[528px]">
            <Image
              src="/images/revenue-operations/revenue-operations.png"
              alt="Revenue Operations"
              width={528}
              height={490}
              priority
              className="h-auto w-full rounded-2xl object-cover lg:h-[490px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}