"use client";

import React, { useState } from "react";
import Image from "next/image";

type OperationalMode = "standalone" | "connected";

interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  isPopular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    id: "essentials",
    name: "Essentials",
    description: "Solo operators and small teams getting invoicing under control",
    price: "From $29/mo",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Growing teams with recurring and usage-based billing",
    price: "From $89/mo",
    isPopular: true,
  },
  {
    id: "business",
    name: "Business",
    description: "Multi-entity operators needing approvals and reporting",
    price: "From $249/mo",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Global finance teams with jurisdiction and integration needs",
    price: "Contact sales",
  },
];

interface CommercialModelSectionProps {
  onTierSelect?: (tierId: string, mode: OperationalMode) => void;
  onViewFullPricing?: () => void;
}

export function CommercialModelSection({
  onTierSelect,
  onViewFullPricing,
}: CommercialModelSectionProps) {
  const [activeMode, setActiveMode] = useState<OperationalMode>("standalone");

  return (
    <section className="mx-auto w-full max-w-[1440px] overflow-hidden bg-white px-4 py-16 font-['Segoe_UI',sans-serif] text-zinc-900 transition-colors duration-200 dark:bg-slate-950 dark:text-white sm:px-8 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-6">
        <div className="mx-auto flex max-w-[640px] flex-col items-center gap-3.5 text-center">
          <span className="font-['JetBrains_Mono',monospace] text-xs font-normal uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Commercial Model
          </span>
          <h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            Independent when you need focus.
            <br />
            Connected when you need more.
          </h2>
        </div>

        <div className="flex justify-center pt-4">
          <div className="flex items-center rounded-3xl border border-zinc-200 bg-white p-1 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <button
              type="button"
              onClick={() => setActiveMode("standalone")}
              className={`cursor-pointer rounded-[20px] px-5 py-2 text-sm font-semibold transition-colors ${
                activeMode === "standalone"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-stone-500 hover:text-zinc-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              Standalone
            </button>
            <button
              type="button"
              onClick={() => setActiveMode("connected")}
              className={`cursor-pointer rounded-[20px] px-5 py-2 text-sm font-semibold transition-colors ${
                activeMode === "connected"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-stone-500 hover:text-zinc-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              Connected to Zoiko One
            </button>
          </div>
        </div>

        <div className="relative flex h-[320px] w-full flex-col items-center justify-between overflow-hidden rounded-2xl border border-zinc-200 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:h-[420px] sm:p-10 lg:h-[520px] lg:p-10">
          <div
            className={`w-full max-w-[1150px] rounded-[20px] border border-blue-600 bg-blue-50/80 p-4 text-center transition-opacity duration-300 dark:bg-blue-950/40 sm:p-5 ${
              activeMode === "connected" ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <span className="font-['Inter',sans-serif] text-xs font-normal text-blue-600 dark:text-blue-400 sm:text-sm">
              Zoiko One shared services - identity, permissions, audit, reporting
            </span>
          </div>

          <div className="relative my-auto h-[200px] w-full max-w-[900px] overflow-hidden rounded-xl border border-zinc-200 shadow-md dark:border-slate-800 sm:h-[280px] lg:h-[340px]">
            <Image
              src="/images/home/div-arch-diagram.png"
              alt="Zoiko Billing Commercial Model Architecture Preview"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>
        </div>

        <div className="pt-8 text-center">
          <h3 className="font-['Space_Grotesk',sans-serif] text-2xl font-bold text-slate-900 dark:text-white">
            Choose the level of billing control your business needs.
          </h3>
        </div>

        <div className="grid w-full grid-cols-1 gap-3.5 pt-1 sm:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              onClick={() => onTierSelect?.(tier.id, activeMode)}
              className={`flex cursor-pointer flex-col items-center justify-between gap-3 rounded-[10px] p-5 text-center transition-colors ${
                tier.isPopular
                  ? "border-2 border-blue-600 bg-white shadow-md dark:bg-slate-800"
                  : "border border-zinc-200 bg-white hover:border-zinc-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
              }`}
            >
              <div className="flex w-full flex-col items-center gap-1.5">
                <span className="font-['Inter',sans-serif] text-base font-bold text-slate-900 dark:text-white">
                  {tier.name}
                </span>
                <p className="flex min-h-[40px] items-center justify-center text-xs font-normal leading-5 text-stone-500 dark:text-slate-400">
                  {tier.description}
                </p>
              </div>

              <div className="w-full border-t border-zinc-100 pt-2 dark:border-slate-800">
                <span className="font-['JetBrains_Mono',monospace] text-lg font-bold text-slate-900 dark:text-white">
                  {tier.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <button
            type="button"
            onClick={onViewFullPricing}
            className="inline-flex cursor-pointer items-center gap-1.5 font-['Inter',sans-serif] text-base font-semibold text-blue-600 hover:underline dark:text-blue-400"
          >
            <span>View Full Pricing</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
