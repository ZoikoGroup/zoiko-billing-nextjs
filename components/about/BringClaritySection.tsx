'use client';

import Link from 'next/link';
import React from 'react';

export default function BringClaritySection() {
  const steps = [
    { number: '01', title: 'Charge', subtitle: 'Basis recorded' },
    { number: '02', title: 'Invoice', subtitle: 'History attached' },
    { number: '03', title: 'Payment', subtitle: 'Outcome recorded' },
    { number: '04', title: 'Balance', subtitle: 'Status known' },
    { number: '05', title: 'Record', subtitle: 'Preserved' },
  ];

  return (
    <section className="w-full bg-[#f7f8f9] px-4 py-16 font-['Segoe_UI',sans-serif] transition-colors duration-200 dark:bg-slate-950 sm:px-8 lg:px-12 lg:py-20">
      <div className="relative mx-auto flex w-full max-w-[1220px] flex-col justify-between gap-12 overflow-hidden rounded-3xl border border-slate-800 bg-[#031528] p-8 text-white shadow-2xl sm:p-12 lg:flex-row lg:gap-16 lg:p-16">

        {/* Left Column */}
        <div className="flex w-full flex-1 flex-col items-start justify-start gap-4">

          {/* Category Label */}
          <div className="flex h-4 items-center gap-2.5">
            <div className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-600" />

            <span className="font-['IBM_Plex_Mono',monospace] text-xs font-medium uppercase leading-4 tracking-wider text-cyan-400">
              Next step
            </span>
          </div>

          {/* Headline */}
          <div className="w-full max-w-[660px] pt-1">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl font-medium leading-[50px] tracking-tight text-white sm:text-5xl">
              Bring clarity and
              <br />
              control to every
              <br />
              stage of billing.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[528px]">
            <p className="text-base font-normal leading-8 text-slate-300">
              Manage charges, invoices, payment status, outstanding
              <br className="hidden sm:inline" />
              balances, adjustments and financial records through one
              <br className="hidden sm:inline" />
              platform designed for global business.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex w-full flex-col items-start justify-start gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-4">

              <Link
                href="/platform-overview"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-blue-600 bg-blue-600 px-5 py-2 text-base font-normal text-white transition-colors hover:bg-blue-500"
              >
                Explore Zoiko Billing
              </Link>

              <Link
                href="/book-demo"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/35 bg-transparent px-5 py-2 text-base font-normal text-white transition-colors hover:bg-white/10"
              >
                Book a Demo
              </Link>

            </div>

            {/* Pricing Link */}
            <Link
              href="/pricing"
              className="group inline-flex min-h-11 cursor-pointer items-center gap-2 py-2 text-cyan-400 transition-colors hover:text-cyan-300"
            >
              <span className="text-base font-normal">
                View Pricing
              </span>

              <span className="font-['IBM_Plex_Mono',monospace] text-base font-bold leading-6 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Footer Statement */}
          <div className="w-full pt-2.5">
            <p className="font-['IBM_Plex_Mono',monospace] text-xs font-normal leading-5 tracking-wide text-cyan-400">
              Every charge has a basis. Every invoice has a history.
              <br />
              Every payment has a record. Every balance has a status.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex w-full max-w-[540px] flex-1 flex-col items-start justify-start gap-5">

          {/* Workflow Card */}
          <div className="flex min-h-[478px] w-full flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-7 shadow-xl">

            {/* Steps */}
            <div className="flex w-full flex-col">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-start gap-4 border-b border-white/10 py-3"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 font-['IBM_Plex_Mono',monospace] text-[9.3px] font-normal text-white">
                    {step.number}
                  </div>

                  <div className="flex flex-col items-start justify-start gap-1">
                    <span className="text-sm font-normal leading-6 text-slate-200">
                      {step.title}
                    </span>

                    <span className="font-['IBM_Plex_Mono',monospace] text-[9.8px] font-normal leading-4 text-cyan-300">
                      {step.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Card Footer */}
            <div className="mt-4 border-t border-white/15 pt-3.5">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-sm font-semibold leading-6 text-white">
                Billing clarity from invoice to payment.
              </span>
            </div>
          </div>

          {/* Trust Center */}
          <div className="flex w-full items-center justify-start">
            <Link
              href="/trust-center"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/35 bg-transparent px-5 py-2 text-base font-normal text-white transition-colors hover:bg-white/10"
            >
              Review the Trust Center
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}