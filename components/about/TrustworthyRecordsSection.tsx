'use client';

import Image from 'next/image';
import React from 'react';

interface IntegrityFeature {
  title: string;
  description: string;
}

const integrityFeatures: IntegrityFeature[] = [
  {
    title: 'Traceable action',
    description:
      'Every commercial action, charge modification, and status change is logged with full contextual detail.',
  },
  {
    title: 'Traceable action',
    description:
      'Clear ownership and attribution for every administrative or system-generated billing event.',
  },
  {
    title: 'Preserved conditions',
    description:
      'Original terms and rate structures remain immutable even when contractual conditions evolve.',
  },
  {
    title: 'Controlled access',
    description:
      'Role-based permissions ensure only authorized personnel can approve, modify, or issue financial records.',
  },
  {
    title: 'Traceable identity',
    description:
      'Comprehensive identity tracking ensures full accountability across multi-user environments.',
  },
  {
    title: 'Incident-based changes',
    description:
      'Adjustments and credit notes require documented reasons and secondary approvals.',
  },
];

interface TrustworthyRecordsSectionProps {
  imageSrc?: string;
  imageAlt?: string;
}

export default function TrustworthyRecordsSection({
  imageSrc = '/images/about/div (2).png',
  imageAlt = 'Financial integrity and trustworthy records interface',
}: TrustworthyRecordsSectionProps) {
  return (
    <section className="w-full bg-[#f7f8f9] px-4 py-16 font-['Segoe_UI',sans-serif] transition-colors duration-200 dark:bg-slate-950 sm:px-8 lg:px-12 lg:py-28">
      <div className="relative mx-auto flex w-full max-w-[1220px] flex-col gap-12 overflow-hidden rounded-3xl bg-sky-950 p-8 text-white shadow-2xl sm:p-12 lg:p-16">
        <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start gap-4 lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-500" />
              <span className="font-['IBM_Plex_Mono',monospace] text-xs font-medium uppercase leading-4 tracking-wider text-cyan-400">
                Data &amp; Financial Integrity
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-medium leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Billing records must <br />
              be trustworthy.
            </h2>
          </div>

          <div className="flex flex-col items-start justify-start lg:col-span-5 lg:pt-8">
            <p className="text-base font-normal leading-8 text-slate-300">
              Authoritative, accurate and traceable record-keeping ensures audit
              confidence, compliance verification and complete transparency
              across all financial actions recorded in the Trust Center.
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 border-t border-sky-900/60 pt-4 md:grid-cols-2 lg:gap-12">
          {integrityFeatures.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-lg font-semibold leading-6 text-white">
                {item.title}
              </h3>
              <p className="text-sm font-normal leading-6 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1116}
            height={440}
            className="h-auto w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 1220px"
          />
        </div>
      </div>
    </section>
  );
}
