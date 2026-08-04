'use client';

import Link from 'next/link';

interface StepItem {
  number: string;
  title: string;
  subtitle: string;
}

const STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Role',
    subtitle: 'Named responsibility',
  },
  {
    number: '02',
    title: 'Scope',
    subtitle: 'Entity, amount, action, time',
  },
  {
    number: '03',
    title: 'Permission',
    subtitle: 'Explicit ability to act',
  },
  {
    number: '04',
    title: 'Policy',
    subtitle: 'Allow, deny, require approval',
  },
  {
    number: '05',
    title: 'Decision',
    subtitle: 'Recorded with a reason',
  },
  {
    number: '06',
    title: 'Evidence',
    subtitle: 'Requester, approver, result',
  },
];

export default function NextStepSection() {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[28px] bg-slate-950 px-6 py-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.22)] sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-0.5 w-5 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-500" />
                <span className="font-['IBM_Plex_Mono'] text-xs font-medium uppercase tracking-wider text-cyan-300">
                  Next step
                </span>
              </div>

              <h2 className="max-w-xl font-['Plus_Jakarta_Sans'] text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
                Start with the controls your billing operation requires.
              </h2>

              <p className="max-w-xl font-['Segoe_UI'] text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
                Decide which actions deserve a second pair of eyes, who holds
                that authority, and how far it reaches - then let the evidence
                do the rest.
              </p>

              <div className="flex flex-col gap-4 pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/signup"
                    className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-blue-500 px-6 py-2.5 font-['Segoe_UI'] text-base font-medium text-white transition-colors hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                  >
                    Create Account
                  </Link>

                  <Link
                    href="/demo"
                    className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-2.5 font-['Segoe_UI'] text-base font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/25"
                  >
                    Book a Demo
                  </Link>
                </div>

                <div>
                  <Link
                    href="/security"
                    className="inline-flex items-center gap-1.5 font-['Segoe_UI'] text-base font-normal text-cyan-300 transition-colors hover:text-cyan-200 focus:outline-none"
                  >
                    Security overview
                    <span className="font-['IBM_Plex_Mono'] font-bold">&rarr;</span>
                  </Link>
                </div>
              </div>

              <div className="pt-4 text-xs font-normal leading-relaxed text-slate-400 font-['Segoe_UI'] sm:text-sm">
                Scoped access and meaningful review, not a compliance guarantee.
                <br />
                Availability varies by plan, action, integration and
                jurisdiction.
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8">
                <div className="flex flex-col divide-y divide-white/10">
                  {STEPS.map((step) => (
                    <div
                      key={step.number}
                      className="flex items-center gap-4 py-4 first:pt-0 last:pb-4"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 font-['IBM_Plex_Mono'] text-xs font-medium text-white">
                        {step.number}
                      </div>

                      <div className="flex flex-col gap-0.5">
                        <span className="font-['Segoe_UI'] text-sm font-semibold text-white">
                          {step.title}
                        </span>
                        <span className="font-['IBM_Plex_Mono'] text-xs text-slate-400">
                          {step.subtitle}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 border-t border-white/10 pt-5">
                  <p className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-white sm:text-base">
                    Billing clarity from invoice to payment.
                  </p>
                </div>
              </div>

              <div>
                <Link
                  href="/invoices"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/15 bg-white px-5 py-2.5 font-['Segoe_UI'] text-base font-normal text-slate-900 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  Explore Invoices &amp; Credit Notes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
