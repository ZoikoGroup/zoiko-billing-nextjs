"use client";

import Image from "next/image";
import Link from "next/link";

export default function PayHero() {
  return (
    <section className="w-full bg-white transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1220px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          
          {/* LEFT CONTENT */}
          <div className="flex w-full flex-col items-start gap-4">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

              <span className="text-xs font-medium uppercase tracking-wider text-blue-500 dark:text-blue-400">
                Payments &amp; Reconciliation
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[560px] text-[42px] font-medium leading-[1.08] tracking-tight text-slate-900 sm:text-[50px] lg:text-[56px] lg:leading-[1.08] dark:text-white">
              Connect every
              <br />
              payment to the
              <br />
              right billing record
              <br />
              <span className="text-blue-500 dark:text-blue-400">
                — with exceptions
                <br />
                visible.
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-[540px] text-base font-normal leading-7 text-slate-600 sm:text-[17px] sm:leading-8 dark:text-slate-300">
              Zoiko Billing captures payment evidence, normalizes provider
              states, matches and allocates funds, manages exceptions and
              reversals, and updates receivable positions with explicit
              source, currency, timing and audit context.
            </p>

            {/* Buttons */}
            <div className="flex w-full flex-col gap-3 pt-4 sm:w-auto sm:flex-row">
              <Link
                href="/create-account"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-500 px-5 py-2.5 text-base font-normal text-white transition hover:bg-blue-600"
              >
                Create Account
              </Link>

              <Link
                href="/book-a-demo"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-base font-normal text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                Book a Demo
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex w-full items-center justify-center lg:justify-end">
            
            {/* Glow */}
            <div className="pointer-events-none absolute -right-10 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl dark:bg-blue-500/10" />

            <div className="relative z-10 w-full max-w-[680px]">
              <Image
                src="/images/payments-and-reconcilliation/image.png"
                alt="Payments and reconciliation"
                width={1200}
                height={800}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}