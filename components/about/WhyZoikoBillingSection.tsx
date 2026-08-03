'use client';

import Image from 'next/image';
import React from 'react';

interface WhyZoikoBillingProps {
  imageSrc?: string;
  imageAlt?: string;
}

export default function WhyZoikoBillingSection({
  imageSrc = '/images/about/div.flowbox.png',
  imageAlt = 'Illustration showing fragmented vs unified billing processes',
}: WhyZoikoBillingProps) {
  return (
    <section id="why" className="w-full bg-white px-4 py-16 font-['Segoe_UI',sans-serif] transition-colors duration-200 dark:bg-slate-950 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col items-start justify-start gap-10 lg:gap-12">
        <div className="grid w-full grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start justify-start gap-5 lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-600" />
              <span className="font-['IBM_Plex_Mono',monospace] text-xs font-medium uppercase leading-4 tracking-wider text-blue-600 dark:text-blue-400">
                Why Zoiko Billing exists
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-medium leading-[1.12] tracking-tight text-sky-950 dark:text-white sm:text-4xl lg:text-5xl">
              Most businesses do not <br />
              have one dependable <br className="hidden sm:inline" />
              billing process.
            </h2>
          </div>

          <div className="flex flex-col items-start justify-start lg:col-span-5">
            <p className="text-base font-normal leading-8 text-slate-600 dark:text-slate-300">
              Terms sit in contracts. Charges are calculated in spreadsheets.
              Invoices come from accounting. Payment information stays with a
              gateway. Reminders depend on individuals. Adjustments happen
              without a record of what changed, or why.
            </p>
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-3xl  sm:p-8 lg:p-11">
          <div className="relative aspect-[1116/494] w-full overflow-hidden rounded-2xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1220px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
