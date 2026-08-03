'use client';

import React from 'react';

const standaloneFeatures = [
  'Independent account creation and subscription',
  'Dedicated onboarding, documentation and support',
  'Direct integrations with approved external systems',
  'Focused billing and receivables environment',
  'No Zoiko One subscription required',
];

const connectedFeatures = [
  'Connected access through the approved Zoiko One environment',
  'Coordinated identity and permissions where approved',
  'Cross-product workflows and broader operational visibility',
  'Potential bundled commercial advantages',
  'Zoiko Billing remains a distinct product within the wider suite',
];

export default function CommercialModelSection() {
  return (
    <section id="commercial-model" className="w-full bg-[#f7f8f9] px-4 py-16 font-['Segoe_UI',sans-serif] transition-colors duration-200 dark:bg-slate-950 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col items-start justify-start gap-11">
        <div className="grid w-full grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start justify-start gap-5 lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-600" />
              <span className="font-['IBM_Plex_Mono',monospace] text-xs font-medium uppercase leading-4 tracking-wider text-blue-600 dark:text-blue-400">
                Commercial model
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-medium leading-[1.12] tracking-tight text-sky-950 dark:text-white sm:text-4xl lg:text-5xl">
              Independent when you <br />
              need focus. Connected <br className="hidden sm:inline" />
              when you need more.
            </h2>
          </div>

          <div className="flex flex-col items-start justify-start lg:col-span-5">
            <p className="text-base font-normal leading-8 text-slate-600 dark:text-slate-300">
              Zoiko Billing stays commercially independent without becoming a
              disconnected platform. A Zoiko One subscription is not required.
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 pt-2 sm:gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-xs transition-shadow duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:p-10">
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-lg font-semibold leading-8 text-sky-950 dark:text-white">
              Standalone Zoiko Billing
            </h3>

            <div className="flex flex-col gap-3">
              {standaloneFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="shrink-0 font-['IBM_Plex_Mono',monospace] text-xs font-normal leading-6 text-blue-600 dark:text-blue-400">
                    ✓
                  </span>
                  <span className="text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl border border-sky-900/50 bg-sky-950 p-8 shadow-md transition-shadow duration-200 hover:shadow-xl sm:p-10">
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-lg font-semibold leading-8 text-white">
              Zoiko Billing with Zoiko One
            </h3>

            <div className="flex flex-col gap-3">
              {connectedFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="shrink-0 font-['IBM_Plex_Mono',monospace] text-xs font-normal leading-6 text-cyan-400">
                    ✓
                  </span>
                  <span className="text-sm font-normal leading-6 text-slate-200">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
