'use client';

import React from 'react';

interface DirectionCardProps {
  category: string;
  categoryColor: string;
  title: string;
  textColor?: string;
  footerText: string;
  footerColor?: string;
  bgColor: string;
  borderColor?: string;
}

const directionCards: DirectionCardProps[] = [
  {
    category: 'Mission',
    categoryColor: 'text-blue-600 dark:text-blue-400',
    title:
      'To give businesses a clearer, more controlled way to turn commercial activity into accurate invoices, recorded payments, resolved balances and dependable financial records.',
    footerText: 'What Zoiko Billing works to do now',
    bgColor: 'bg-slate-100 dark:bg-slate-900',
  },
  {
    category: 'Vision',
    categoryColor: 'text-indigo-600 dark:text-indigo-400',
    title:
      'A world in which every business - regardless of size, location, currency or operating model - can run billing with the clarity, integrity and control expected of the most sophisticated enterprises.',
    footerText: 'The future Zoiko Billing seeks to enable',
    bgColor: 'bg-indigo-50/60 dark:bg-slate-900/80',
  },
  {
    category: 'Purpose',
    categoryColor: 'text-teal-600 dark:text-teal-400',
    title:
      'To make the financial relationship between a business and its customers easier to understand, manage and trust.',
    footerText: 'Why the platform matters',
    bgColor: 'bg-cyan-50 dark:bg-slate-900/60',
  },
  {
    category: 'Product promise',
    categoryColor: 'text-cyan-400',
    title:
      'Every charge has a basis. Every invoice has a history. Every payment has a record. Every balance has a status.',
    textColor: 'text-white',
    footerText: 'The operating standard customers should experience',
    footerColor: 'text-slate-300',
    bgColor: 'bg-sky-950',
    borderColor: 'border-sky-900/50',
  },
];

export default function DirectionSection() {
  return (
    <section className="w-full bg-[#f7f8f9] px-4 py-16 font-['Segoe_UI',sans-serif] transition-colors duration-200 dark:bg-slate-950 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col items-start justify-start gap-12">
        <div className="grid w-full grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start gap-4 lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-600" />
              <span className="font-['IBM_Plex_Mono',monospace] text-xs font-medium uppercase leading-4 tracking-wider text-blue-600 dark:text-blue-400">
                Direction
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-medium leading-[1.12] tracking-tight text-sky-950 dark:text-white sm:text-4xl lg:text-5xl">
              What we work toward, <br />
              and what you should <br className="hidden sm:inline" />
              expect.
            </h2>
          </div>

          <div className="flex flex-col items-start justify-start lg:col-span-5">
            <p className="text-base font-normal leading-8 text-slate-600 dark:text-slate-300">
              Four statements, each with a distinct job: what we do now, the
              future we want, why it matters, and the standard you should hold
              us to.
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {directionCards.map((card, index) => (
            <div
              key={index}
              className={`flex min-h-[260px] flex-col justify-between rounded-3xl border border-zinc-200/60 p-8 shadow-xs transition-shadow duration-200 hover:shadow-md dark:border-slate-800 sm:p-10 ${card.bgColor} ${
                card.borderColor || ''
              }`}
            >
              <div className="flex flex-col gap-3">
                <span
                  className={`font-['IBM_Plex_Mono',monospace] text-[10px] font-normal uppercase leading-4 tracking-wider ${card.categoryColor}`}
                >
                  {card.category}
                </span>

                <h3
                  className={`font-['Plus_Jakarta_Sans',sans-serif] text-lg font-medium leading-7 sm:text-xl ${
                    card.textColor || 'text-sky-950 dark:text-slate-100'
                  }`}
                >
                  {card.title}
                </h3>
              </div>

              <div
                className={`mt-6 border-t pt-3 ${
                  card.textColor
                    ? 'border-white/20'
                    : 'border-zinc-200/80 dark:border-slate-800'
                }`}
              >
                <span
                  className={`font-['IBM_Plex_Mono',monospace] text-[10px] font-normal leading-4 tracking-wide ${
                    card.footerColor || 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {card.footerText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
