'use client';

import React from 'react';

interface GlanceCardProps {
  label: string;
  title: string;
  description: string;
  footerTag: string;
}

const cardsData: GlanceCardProps[] = [
  {
    label: 'What it is',
    title: 'A global billing and invoicing platform',
    description:
      'For charges, invoices, payment status, outstanding balances, adjustments and financial records.',
    footerTag: 'Connected billing record',
  },
  {
    label: 'Who operates it',
    title: 'Zoiko Tech Inc, a Zoiko Group company',
    description:
      'Zoiko Billing is owned and operated by Zoiko Tech Inc, which is responsible for developing and delivering it.',
    footerTag: 'Operating-company relationship',
  },
  {
    label: 'How it is available',
    title: 'Independent SaaS, or part of Zoiko One',
    description:
      'Use Zoiko Billing as an independent SaaS product or as an integrated component of Zoiko One.',
    footerTag: 'Standalone and connected states',
  },
  {
    label: 'Who it serves',
    title: 'Finance, receivables and revenue teams',
    description:
      'Businesses, finance and AR teams, revenue operations, SaaS providers, agencies, multi-entity companies and enterprises.',
    footerTag: 'Customer profile matrix',
  },
  {
    label: 'Where it is designed to operate',
    title: 'Across currencies, entities and jurisdictions',
    description:
      'Across customers, currencies, entities and jurisdictions, subject to verified availability.',
    footerTag: 'Market and entity controls',
  },
  {
    label: 'What it is designed to improve',
    title: 'Accuracy, control and continuity',
    description:
      'Billing accuracy, operational control, payment visibility, outstanding-balance management and continuity of records.',
    footerTag: 'Outcome dashboard',
  },
];

export default function AtAGlanceSection() {
  return (
    <section className="w-full bg-[#f7f8f9] px-4 py-16 transition-colors duration-200 dark:bg-slate-900 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-12">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start gap-3 lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-600" />
              <span className="font-['IBM_Plex_Mono',monospace] text-xs font-medium uppercase leading-4 tracking-wider text-blue-600 dark:text-blue-400">
                Zoiko Billing at a glance
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-medium leading-[1.15] text-sky-950 dark:text-white sm:text-4xl lg:text-5xl">
              Six answers before you <br className="hidden sm:inline" />
              read any further.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base font-normal leading-8 text-slate-600 dark:text-slate-300">
              The essentials for anyone evaluating the platform, the company
              behind it, or how the two relate.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex min-h-[240px] flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-7 shadow-xs transition-shadow duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="flex flex-col gap-2.5">
                <span className="font-['IBM_Plex_Mono',monospace] text-[10px] font-normal uppercase tracking-wide text-blue-600 dark:text-blue-400">
                  {card.label}
                </span>

                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-base font-semibold leading-5 text-sky-950 dark:text-slate-100">
                  {card.title}
                </h3>

                <p className="mt-1 text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                  {card.description}
                </p>
              </div>

              <div className="mt-4 border-t border-zinc-100 pt-3 dark:border-slate-800">
                <span className="font-['IBM_Plex_Mono',monospace] text-[10px] font-normal tracking-wide text-slate-400 dark:text-slate-500">
                  {card.footerTag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full items-center justify-center rounded-3xl border border-sky-900/50 bg-sky-950 p-8 text-center text-white shadow-lg sm:p-12">
          <h3 className="max-w-2xl font-['Plus_Jakarta_Sans',sans-serif] text-xl font-medium leading-snug sm:text-2xl lg:text-3xl sm:leading-relaxed">
            One platform. One connected billing record. <br className="hidden sm:inline" />
            Clear status from charge to resolution.
          </h3>
        </div>
      </div>
    </section>
  );
}
