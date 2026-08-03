"use client";

import React from "react";

interface WorkflowStep {
  number: string;
  title: string;
  subtitle: string;
  status: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    number: "01",
    title: "Customer",
    subtitle: "Account and terms",
    status: "Set",
  },
  {
    number: "02",
    title: "Charge",
    subtitle: "Released price and version",
    status: "Applied",
  },
  {
    number: "03",
    title: "Invoice",
    subtitle: "Approved and issued",
    status: "Issued",
  },
  {
    number: "04",
    title: "Delivery",
    subtitle: "Sent, delivered, viewed",
    status: "Confirmed",
  },
  {
    number: "05",
    title: "Payment",
    subtitle: "Outcome and reference",
    status: "Tracked",
  },
  {
    number: "06",
    title: "Reconciliation",
    subtitle: "Matched, exceptions raised",
    status: "Reviewed",
  },
  {
    number: "07",
    title: "Record",
    subtitle: "Preserved for audit",
    status: "Retained",
  },
];

interface GetStartedCtaSectionProps {
  onCreateAccount?: () => void;
  onBookDemo?: () => void;
}

export function GetStartedCtaSection({
  onCreateAccount,
  onBookDemo,
}: GetStartedCtaSectionProps) {
  return (
    <section className="mx-auto w-full max-w-[1440px] overflow-hidden bg-white px-4 py-16 font-['Segoe_UI',sans-serif] text-white transition-colors duration-200 dark:bg-slate-950 sm:px-8 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1116px] overflow-hidden rounded-3xl border border-slate-800 bg-sky-950 p-6 shadow-2xl dark:bg-slate-900 sm:p-10 lg:p-16">
        <div className="mx-auto grid w-full max-w-[944px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start gap-5 lg:col-span-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-4 shrink-0 rounded-xs bg-blue-500" />
              <span className="font-['IBM_Plex_Mono',monospace] text-xs font-medium uppercase tracking-wider text-blue-400">
                Get started
              </span>
            </div>

            <h2 className="text-3xl font-medium leading-[1.12] tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif] sm:text-4xl lg:text-5xl">
              Bring every invoice, payment, and outstanding balance into focus.
            </h2>

            <p className="max-w-[530px] text-base font-normal leading-8 text-slate-400">
              Run billing through one controlled platform built for clear financial records, global
              operations, and growing commercial complexity.
            </p>

            <div className="flex w-full flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={onCreateAccount}
                className="cursor-pointer rounded-md border border-blue-600 bg-blue-600 px-5 py-2.5 text-base font-normal text-white shadow-md transition-colors hover:bg-blue-500"
              >
                Create Your Account
              </button>
              <button
                type="button"
                onClick={onBookDemo}
                className="cursor-pointer rounded-md border border-white/35 px-5 py-2.5 text-base font-normal text-white transition-colors hover:bg-white/10"
              >
                Book a Demo
              </button>
            </div>
          </div>

          <div className="w-full rounded-2xl border border-white/15 bg-white/5 p-6 shadow-inner lg:col-span-6">
            <div className="flex flex-col divide-y divide-white/10">
              {workflowSteps.map((step) => (
                <div key={step.number} className="flex items-center justify-between gap-3 py-2.5 text-left">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-600">
                    <span className="font-['IBM_Plex_Mono',monospace] text-[9px] font-normal text-white">
                      {step.number}
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate font-['Segoe_UI'] text-sm font-normal text-slate-100">
                      {step.title}
                    </span>
                    <span className="truncate font-['IBM_Plex_Mono',monospace] text-[10px] font-normal text-emerald-400">
                      {step.subtitle}
                    </span>
                  </div>

                  <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-zinc-700/80 bg-zinc-800/80 px-2.5 py-1">
                    <span className="font-['IBM_Plex_Mono',monospace] text-xs font-medium text-stone-400">
                      -
                    </span>
                    <span className="font-['IBM_Plex_Mono',monospace] text-[10px] font-medium uppercase tracking-wide text-stone-300">
                      {step.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3.5 flex items-center gap-3 border-t border-white/15 pt-3.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white shadow-xs">
                <div className="flex w-3 flex-col gap-0.5">
                  <div className="h-[2px] w-full rounded-xs bg-blue-600" />
                  <div className="h-[2px] w-full rounded-xs bg-blue-600" />
                  <div className="h-[2px] w-full rounded-xs bg-blue-600" />
                </div>
              </div>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-sm font-semibold leading-6 text-white">
                Billing clarity from invoice to payment.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
