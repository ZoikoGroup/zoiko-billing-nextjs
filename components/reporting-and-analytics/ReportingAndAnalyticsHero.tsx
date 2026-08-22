"use client";

import Image from "next/image";
import Link from "next/link";

export default function ReportingAndAnalyticsHero() {
  return (
    <section className="w-full bg-white py-12 transition-colors dark:bg-slate-950 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8 lg:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="flex w-full flex-col items-start">
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-2.5">
              <div className="h-0.5 w-5 shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500" />

              <span className="text-xs font-medium uppercase leading-4 tracking-wider text-sky-600 dark:text-sky-400">
                Reporting &amp; Analytics
              </span>
            </div>

            {/* Heading */}
           <h1 className="text-3xl font-medium leading-[1.08] tracking-tight text-sky-950 dark:text-white sm:text-4xl lg:text-5xl lg:leading-[1.08]">
  Turn billing activity
  <br className="hidden sm:block" /> into{" "}
  <span className="text-sky-600 dark:text-sky-400">
    reviewable
    operational
    evidence.
  </span>
</h1>

            {/* Description */}
            <p className="mt-6 max-w-[560px] text-base font-normal leading-8 text-slate-600 dark:text-slate-300">
              Zoiko Billing uses governed metrics, filters, comparisons,
              trends, drill-through and exports to understand customers,
              documents, charges, schedules, delivery, receivables and
              payments — with definitions, scope and freshness visible.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/create-account"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-base font-normal leading-6 text-white outline outline-1 outline-offset-[-1px] outline-sky-600 transition hover:bg-sky-700 sm:w-auto"
              >
                Create Account
              </Link>

              <Link
                href="/book-a-demo"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-lg px-5 py-2.5 text-base font-normal leading-6 text-sky-950 outline outline-1 outline-offset-[-1px] outline-slate-200 transition hover:bg-slate-50 dark:text-white dark:outline-slate-700 dark:hover:bg-slate-900 sm:w-auto"
              >
                Book a Demo
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-100 via-sky-50 to-slate-100 p-4 sm:p-6 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
              {/* Background Effects */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-20 -top-20 h-[420px] w-[520px] rounded-full bg-slate-950/10 blur-3xl dark:bg-black/40" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(0,0,0,0.10),transparent_70%)] dark:bg-[radial-gradient(circle_at_60%_20%,rgba(0,0,0,0.40),transparent_70%)]" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(74,222,128,0.12),transparent_65%)]" />
              </div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_22px_50px_-20px_rgba(14,33,27,0.24),0px_2px_6px_0px_rgba(14,33,27,0.06)] dark:border-slate-700 dark:bg-slate-900">
                <Image
                  src="/images/reporting-and-analytics/image.png"
                  alt="Zoiko Billing reporting and analytics dashboard"
                  width={1200}
                  height={850}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}