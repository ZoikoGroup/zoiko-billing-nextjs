'use client';

import React from 'react';

interface OperatingPrinciple {
  number: string;
  title: string;
  description: string;
}

const principles: OperatingPrinciple[] = [
  {
    number: '01',
    title: 'Clarity',
    description:
      'Billing information should be understandable to the business issuing it and the customer receiving it.',
  },
  {
    number: '02',
    title: 'Integrity',
    description:
      'A financial record should reflect what occurred, who authorized it, what changed and why.',
  },
  {
    number: '03',
    title: 'Control',
    description:
      'Automation, integrations and scale must not remove appropriate authority or oversight.',
  },
  {
    number: '04',
    title: 'Continuity',
    description:
      'Commercial terms, charges, invoices, payments, balances and adjustments remain connected.',
  },
  {
    number: '05',
    title: 'Global utility',
    description:
      'The platform supports different operating models and markets without treating one jurisdiction as the world.',
  },
  {
    number: '06',
    title: 'Responsible innovation',
    description:
      'New technology solves a defined problem and remains explainable, governable, secure and reviewable.',
  },
  {
    number: '07',
    title: 'Commercial independence',
    description:
      'Customers may choose Zoiko Billing without being required to purchase Zoiko One.',
  },
  {
    number: '08',
    title: 'Technical interoperability',
    description:
      'Approved systems connect without creating an uncontrolled or fragmented record.',
  },
  {
    number: '09',
    title: 'Evidence before claims',
    description:
      'Product, security, market, integration and result claims are supported before publication.',
  },
  {
    number: '10',
    title: 'Continuous improvement',
    description:
      'Product, security, documentation, service operation and support keep improving after launch.',
  },
];

export default function OperatingPrinciplesSection() {
  return (
    <section className="w-full bg-[#f7f8f9] px-4 py-16 font-['Segoe_UI',sans-serif] transition-colors duration-200 dark:bg-slate-950 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col items-start justify-start gap-12">
        <div className="grid w-full grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start justify-start gap-5 lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-600" />
              <span className="font-['IBM_Plex_Mono',monospace] text-xs font-medium uppercase leading-4 tracking-wider text-blue-600 dark:text-blue-400">
                Operating principles
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-medium leading-[1.12] tracking-tight text-sky-950 dark:text-white sm:text-4xl lg:text-5xl">
              The standards we hold <br />
              the product to.
            </h2>
          </div>

          <div className="flex flex-col items-start justify-start lg:col-span-5">
            <p className="text-base font-normal leading-8 text-slate-600 dark:text-slate-300">
              Ten principles that decide how the platform is built and operated -
              each one specific enough to be tested against.
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {principles.map((item) => (
            <div
              key={item.number}
              className="flex items-start justify-start gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-shadow duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
                <span className="font-['IBM_Plex_Mono',monospace] text-[10px] font-semibold text-blue-600 dark:text-blue-400">
                  {item.number}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-1.5">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-base font-semibold leading-6 text-sky-950 dark:text-slate-100">
                  {item.title}
                </h3>
                <p className="text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
