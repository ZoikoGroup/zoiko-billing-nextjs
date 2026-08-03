'use client';

import Image from 'next/image';
import React from 'react';

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
}

const features: FeatureCardProps[] = [
  {
    number: '01',
    title: 'Complete commercial continuity',
    description:
      'Links commercial terms, charges, invoices, delivery, payments, balances, corrections and supporting history.',
  },
  {
    number: '02',
    title: 'Processor-neutral billing',
    description:
      'Works with approved payment providers without making one provider the authoritative billing record.',
  },
  {
    number: '03',
    title: 'More than subscription billing',
    description:
      'Supports one-time, recurring, usage, project, contract and multi-entity workflows where available.',
  },
  {
    number: '04',
    title: 'Global configuration',
    description:
      'Currencies, entities, languages, formats, tax configurations, terms and market requirements through controlled configuration.',
  },
  {
    number: '05',
    title: 'Preserved financial history',
    description:
      'Corrections and reversals retain the original event and the reason for change.',
  },
  {
    number: '06',
    title: 'Independent and connected',
    description:
      'Operates as standalone SaaS and may connect with approved Zoiko One workflows.',
  },
  {
    number: '07',
    title: 'Control before automation',
    description:
      'Reduces repetitive work without concealing material financial actions.',
  },
  {
    number: '08',
    title: 'Enterprise discipline, usable scale',
    description:
      'Strong billing controls that suit growing businesses and sophisticated finance teams alike.',
  },
];

interface ArchitecturalDifferencesProps {
  imageSrc?: string;
  imageAlt?: string;
}

export default function ArchitecturalDifferencesSection({
  imageSrc = '/images/about/div (1).png',
  imageAlt = 'Zoiko Billing architectural features interface overview',
}: ArchitecturalDifferencesProps) {
  return (
    <section className="w-full bg-[#f7f8f9] px-4 py-16 font-['Segoe_UI',sans-serif] transition-colors duration-200 dark:bg-slate-950 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col items-start justify-start gap-12">
        <div className="grid w-full grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start justify-start gap-5 lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-600" />
              <span className="font-['IBM_Plex_Mono',monospace] text-xs font-medium uppercase leading-4 tracking-wider text-blue-600 dark:text-blue-400">
                What makes it different
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-medium leading-[1.12] tracking-tight text-sky-950 dark:text-white sm:text-4xl lg:text-5xl">
              Differences in <br />
              architecture, not <br className="hidden sm:inline" />
              adjectives.
            </h2>
          </div>

          <div className="flex flex-col items-start justify-start lg:col-span-5">
            <p className="text-base font-normal leading-8 text-slate-600 dark:text-slate-300">
              Zoiko Billing manages the connected billing record - not only
              invoice generation, and not as an extension of one payment
              provider.
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="flex items-start justify-start gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-shadow duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
                <span className="font-['IBM_Plex_Mono',monospace] text-[10px] font-semibold text-blue-600 dark:text-blue-400">
                  {feature.number}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-1.5">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-base font-semibold leading-5 text-sky-950 dark:text-slate-100">
                  {feature.title}
                </h3>
                <p className="text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative w-full overflow-hidden rounded-2xl aspect-[1116/558]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1220px"
          />
        </div>
      </div>
    </section>
  );
}
