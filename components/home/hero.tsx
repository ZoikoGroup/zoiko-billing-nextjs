'use client';

import React from 'react';

interface HeroSectionProps {
  onBookDemo?: () => void;
  onSeeItInAction?: () => void;
}

const keyFeatures = [
  'Multi-currency',
  'Entity-aware',
  'Role-based',
  'Complete audit history',
];

export default function HeroSection({
  onBookDemo,
  onSeeItInAction,
}: HeroSectionProps) {
  return (
    <section className="w-full bg-white text-zinc-900 font-['Segoe_UI',sans-serif] overflow-hidden py-12 lg:py-20 px-4 sm:px-8 lg:px-12">
      <div className="w-full max-w-[1220px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text & Content */}
        <div className="lg:col-span-6 flex flex-col justify-start items-start gap-4 sm:gap-6">
          
          {/* Tagline Badge */}
          <div className="flex items-center gap-3">
            <div className="w-4 h-0.5 bg-blue-700 rounded-xs shrink-0" />
            <span className="text-blue-600 text-xs font-medium font-['IBM_Plex_Mono',monospace] uppercase leading-4 tracking-wider">
              Global billing and invoicing platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-zinc-900 text-4xl sm:text-5xl lg:text-6xl font-medium font-['Plus_Jakarta_Sans',sans-serif] leading-[1.1] tracking-tight">
            Billing clarity from <br className="hidden sm:inline" />
            <span className="text-blue-600">invoice to payment.</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="max-w-[528px] text-slate-600 text-base font-normal leading-8">
            Zoiko Billing brings charges, invoices, payments, outstanding balances,
            and financial records into one controlled platform—across every customer,
            currency, entity, and market you operate.
          </p>

          {/* Action Call-to-Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onBookDemo}
              className="min-h-11 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-['Segoe_UI',sans-serif] text-base font-normal leading-6 flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
            >
              <span>Book a Demo</span>
              <span className="font-['IBM_Plex_Mono',monospace] font-bold text-base">→</span>
            </button>

            <button
              onClick={onSeeItInAction}
              className="min-h-11 px-5 py-2.5 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 font-['Segoe_UI',sans-serif] text-base font-normal leading-6 flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>See It in Action</span>
              <span className="font-['IBM_Plex_Mono',monospace] font-bold text-base">→</span>
            </button>
          </div>

          {/* Feature Badges Grid */}
          <div className="pt-4 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-6 gap-y-3">
            {keyFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-blue-700 rounded-xs shrink-0" />
                <span className="text-slate-600 text-xs font-normal font-['IBM_Plex_Mono',monospace] leading-5 tracking-tight">
                  {feature}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Hero Visual Showcase */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
          
          {/* Main Visual Frame Container */}
          <div className="w-full max-w-[560px] p-4 sm:p-7 bg-sky-950 rounded-3xl relative overflow-hidden shadow-2xl border border-sky-900/50">
            
            {/* Background Glow Overlays */}
            <div className="absolute inset-0 bg-radial-[at_60%_20%] from-black to-transparent pointer-events-none" />
            <div className="absolute inset-0 opacity-30 bg-radial from-emerald-400/20 to-transparent pointer-events-none" />

            {/* Dashboard / Product Preview Image */}
            <img
              className="w-full h-auto min-h-[280px] sm:min-h-[360px] object-cover rounded-2xl relative z-10"
              src="/images/home/hero-billing-hero-team.png"
              alt="Zoiko Billing Platform Preview"
            />
          </div>

          {/* Guided Tour Floating Pill Badge */}
          <div className="mt-4 sm:-mt-6 relative z-20 bg-white rounded-full p-1.5 pl-4 sm:pl-5 border border-zinc-200 shadow-lg flex items-center gap-3.5 max-w-[90%] sm:max-w-auto">
            <span className="text-zinc-900 text-xs font-normal font-['Segoe_UI',sans-serif] leading-5 whitespace-nowrap">
              60–90 second guided tour
            </span>
            <button
              onClick={onSeeItInAction}
              className="px-3.5 py-1.5 bg-blue-700 hover:bg-blue-600 text-white text-xs sm:text-sm font-normal rounded-full transition-colors cursor-pointer shrink-0"
            >
              See It in Action
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}