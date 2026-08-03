'use client';

import Image from 'next/image';
import React from 'react';

interface AboutSectionProps {
  onExplorePlatform?: () => void;
  onBookDemo?: () => void;
  onViewGlobalCapabilities?: () => void;
}

export default function AboutSection({
  onExplorePlatform,
  onBookDemo,
  onViewGlobalCapabilities,
}: AboutSectionProps) {
  const illustrationSrc = encodeURI('/images/about/Illustrative Zoiko.png');

  return (
    <section id="overview" className="w-full overflow-hidden bg-white px-4 py-16 font-['Segoe_UI',sans-serif] transition-colors duration-200 dark:bg-slate-950 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1220px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex max-w-[530px] flex-col items-start justify-start gap-5 lg:col-span-6">
          <div className="flex items-center gap-3.5">
            <div className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-400 to-blue-600" />
            <span className="font-['IBM_Plex_Mono',monospace] text-xs font-medium uppercase leading-4 tracking-wider text-blue-600 dark:text-blue-400">
              About Zoiko Billing
            </span>
          </div>

          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl font-medium leading-[1.1] tracking-tight text-sky-950 dark:text-white sm:text-5xl lg:text-6xl">
            Billing should <br />
            create certainty <br className="hidden sm:inline" />
            <span className="text-blue-600 dark:text-blue-400">
              not more administration.
            </span>
          </h2>

          <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
            Zoiko Billing is a global billing and invoicing platform that helps
            businesses turn commercial activity into accurate invoices, recorded
            payments, resolved balances, and clear financial records. Use it
            independently or connect it with Zoiko One as your organization
            grows.
          </p>

          <div className="flex w-full flex-col flex-wrap gap-4 pt-2 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={onExplorePlatform}
              className="min-h-11 cursor-pointer rounded-lg border border-blue-600 bg-blue-600 px-5 py-2.5 text-center text-base font-normal leading-6 text-white shadow-xs transition-colors hover:bg-blue-500"
            >
              Explore the Platform
            </button>

            <button
              type="button"
              onClick={onBookDemo}
              className="min-h-11 cursor-pointer rounded-lg border border-zinc-200 px-5 py-2.5 text-center text-base font-normal leading-6 text-sky-950 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Book a Demo
            </button>
          </div>

          <button
            type="button"
            onClick={onViewGlobalCapabilities}
            className="group flex cursor-pointer items-center gap-2 pt-2 text-base font-normal leading-6 text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <span>View Global Capabilities</span>
            <span className="font-['IBM_Plex_Mono',monospace] text-base font-bold transition-transform group-hover:translate-x-1">
              -&gt;
            </span>
          </button>
        </div>

        <div className="flex justify-center lg:col-span-6 lg:justify-end">
          <div className="relative w-full max-w-[560px] overflow-hidden rounded-3xl border border-sky-900/50 bg-sky-950 p-6 shadow-2xl sm:p-7">
            <div className="pointer-events-none absolute inset-0 bg-radial-[at_60%_20%] from-black to-transparent" />

            <div className="relative z-10 overflow-hidden rounded-2xl ">
              <Image
                src={illustrationSrc}
                alt="Illustrative Zoiko platform artwork"
                width={560}
                height={441}
                className="h-80 w-full object-cover sm:h-96"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
