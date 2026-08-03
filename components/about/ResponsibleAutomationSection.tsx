'use client';

import React from 'react';

interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}

const principles: PrincipleItem[] = [
  {
    number: '01',
    title: 'Explainable operation',
    description:
      'Users can understand why an automated action or recommendation occurred.',
  },
  {
    number: '02',
    title: 'Reviewable recommendations',
    description:
      'AI-generated suggestions are identified as suggestions where human review is required.',
  },
  {
    number: '03',
    title: 'Human authority',
    description:
      'Material outcomes remain subject to approved permissions, policies and workflows.',
  },
  {
    number: '04',
    title: 'Preserved source data',
    description: 'Automation does not conceal or overwrite source information.',
  },
  {
    number: '05',
    title: 'Controlled confidence',
    description: 'Low-confidence matches and anomalies are routed for review.',
  },
  {
    number: '06',
    title: 'No silent financial changes',
    description:
      'Material prices, balances, payment records, tax treatments or obligations are never silently changed.',
  },
  {
    number: '07',
    title: 'Auditability',
    description:
      'Automated actions are attributable to the relevant rule, service, model or workflow version.',
  },
  {
    number: '08',
    title: 'Data governance',
    description:
      'Customer data is used only under the applicable contract, permissions, privacy notice, security controls and law.',
  },
];

export default function ResponsibleAutomationSection() {
  return (
    <section className="w-full bg-[#f7f8f9] px-4 py-16 font-['Segoe_UI',sans-serif] transition-colors duration-200 dark:bg-slate-950 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col items-start justify-start gap-11">
        <div className="grid w-full grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start justify-start gap-5 lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-600" />
              <span className="font-['IBM_Plex_Mono',monospace] text-xs font-medium uppercase leading-4 tracking-wider text-blue-600 dark:text-blue-400">
                Responsible automation
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-medium leading-[1.12] tracking-tight text-sky-950 dark:text-white sm:text-4xl lg:text-5xl">
              Automation should <br />
              increase control - not <br className="hidden sm:inline" />
              remove accountability.
            </h2>
          </div>

          <div className="flex flex-col items-start justify-start lg:col-span-5">
            <p className="text-base font-normal leading-8 text-slate-600 dark:text-slate-300">
              Rules, analysis and AI-assisted capabilities reduce repetitive
              administration. Where they are offered, they meet the same
              financial-control standards as any other material action.
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
