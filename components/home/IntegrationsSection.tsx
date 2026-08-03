"use client";

import React from "react";
import Image from "next/image";

interface IntegrationsSectionProps {
  onExploreIntegrations?: () => void;
  onReadApiDocs?: () => void;
}

export function IntegrationsSection({
  onExploreIntegrations,
  onReadApiDocs,
}: IntegrationsSectionProps) {
  return (
    <section className="mx-auto w-full max-w-[1440px] overflow-hidden bg-white px-4 py-16 font-['Segoe_UI',sans-serif] text-white transition-colors duration-200 dark:bg-slate-950 sm:px-8 lg:px-20 lg:py-24">
      <div className="relative mx-auto flex w-full max-w-[1116px] flex-col items-center overflow-hidden rounded-3xl border border-sky-900 bg-sky-950 p-6 shadow-2xl sm:p-12 lg:p-16">
        <div className="flex w-full max-w-[954px] flex-col items-start gap-5">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-4 shrink-0 rounded-full bg-blue-500" />
            <span className="font-['IBM_Plex_Mono',monospace] text-xs font-medium uppercase tracking-wider text-blue-400">
              Integrations and developers
            </span>
          </div>

          <h2 className="w-full text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl font-['Plus_Jakarta_Sans',sans-serif] leading-[1.12]">
            Connect billing to the systems your business already uses.
          </h2>

          <p className="w-full max-w-[530px] text-base font-normal leading-8 text-emerald-400/90">
            Approved connectors, APIs, and webhooks for customer, payment, accounting, tax,
            commerce, and usage systems.
          </p>

          <div className="flex w-full justify-center pt-8 lg:pt-12">
            <div className="relative h-[280px] w-full max-w-[954px] overflow-hidden rounded-[20px] border border-sky-800/60 shadow-2xl sm:h-[380px] lg:h-[477px]">
              <Image
                src="/images/home/frame-3.png"
                alt="Integrations ecosystem and API diagram"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 954px"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-3 pt-8 lg:flex-row lg:pt-10">
          <button
            type="button"
            onClick={onExploreIntegrations}
            className="min-h-11 w-full cursor-pointer rounded-md bg-white px-6 py-2.5 text-base font-normal text-cyan-950 transition-colors hover:bg-slate-100 sm:w-auto"
          >
            Explore Integrations
          </button>
          <button
            type="button"
            onClick={onReadApiDocs}
            className="min-h-11 w-full cursor-pointer rounded-md border border-white/35 bg-transparent px-6 py-2.5 text-base font-normal text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            Read API Documentation
          </button>
        </div>
      </div>
    </section>
  );
}
