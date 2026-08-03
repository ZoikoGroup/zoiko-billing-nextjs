'use client';

import React from 'react';

export default function BringClaritySection() {
  const steps = [
    { number: '01', title: 'Charge', subtitle: 'Basis recorded' },
    { number: '02', title: 'Invoice', subtitle: 'History attached' },
    { number: '03', title: 'Payment', subtitle: 'Outcome recorded' },
    { number: '04', title: 'Balance', subtitle: 'Status known' },
    { number: '05', title: 'Record', subtitle: 'Preserved' },
  ];

  return (
    <section className="w-full bg-[#f7f8f9] dark:bg-slate-950 font-['Segoe_UI',sans-serif] py-16 lg:py-20 px-4 sm:px-8 lg:px-12 transition-colors duration-200">
      <div className="w-full max-w-[1220px] mx-auto bg-[#031528] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-slate-800 flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
        
        
        {/* Left Column: Headline, Actions & Manifesto */}
        <div className="flex-1 flex flex-col justify-start items-start gap-4 w-full">
          
          {/* Subtitle / Category Label */}
          <div className="flex items-center gap-2.5 h-4">
            <div className="w-5 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xs shrink-0" />
            <span className="text-cyan-400 text-xs font-medium font-['IBM_Plex_Mono',monospace] uppercase leading-4 tracking-wider">
              Next step
            </span>
          </div>

          {/* Main Headline */}
          <div className="w-full max-w-[660px] pt-1">
            <h2 className="text-white text-4xl sm:text-5xl font-medium font-['Plus_Jakarta_Sans',sans-serif] leading-[50px] tracking-tight">
              Bring clarity and<br />
              control to every<br />
              stage of billing.
            </h2>
          </div>

          {/* Body Paragraph */}
          <div className="w-full max-w-[528px]">
            <p className="text-slate-300 text-base font-normal leading-8">
              Manage charges, invoices, payment status, outstanding<br className="hidden sm:inline" />
              balances, adjustments and financial records through one<br className="hidden sm:inline" />
              platform designed for global business.
            </p>
          </div>

          {/* Action Buttons & Link */}
          <div className="w-full flex flex-col justify-start items-start gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="min-h-11 px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-base font-normal rounded-lg border border-blue-600 transition-colors cursor-pointer"
              >
                Explore Zoiko Billing
              </button>

              <button
                type="button"
                className="min-h-11 px-5 py-2 bg-transparent hover:bg-white/10 text-white text-base font-normal rounded-lg border border-white/35 transition-colors cursor-pointer"
              >
                Book a Demo
              </button>
            </div>

            {/* View Pricing Link */}
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 min-h-11 py-2 text-cyan-400 hover:text-cyan-300 transition-colors group cursor-pointer"
            >
              <span className="text-base font-normal">View Pricing</span>
              <span className="text-base font-bold font-['IBM_Plex_Mono',monospace] leading-6 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>

          {/* Footer Statement */}
          <div className="w-full pt-2.5">
            <p className="text-cyan-400 text-xs font-normal font-['IBM_Plex_Mono',monospace] leading-5 tracking-wide">
              Every charge has a basis. Every invoice has a history.<br />
              Every payment has a record. Every balance has a status.
            </p>
          </div>

        </div>

        {/* Right Column: Workflow Card & Trust Center */}
        <div className="flex-1 flex flex-col justify-start items-start gap-5 w-full max-w-[540px]">
          
          {/* Card Container */}
          <div className="w-full min-h-[478px] bg-white/5 rounded-2xl border border-white/15 p-7 flex flex-col justify-between shadow-xl">
            
            {/* Steps Workflow List */}
            <div className="flex flex-col w-full">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="py-3 border-b border-white/10 flex items-start gap-4"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center text-white text-[9.3px] font-normal font-['IBM_Plex_Mono',monospace] shrink-0">
                    {step.number}
                  </div>
                  <div className="flex flex-col justify-start items-start gap-1">
                    <span className="text-slate-200 text-sm font-normal leading-6">
                      {step.title}
                    </span>
                    <span className="text-cyan-300 text-[9.8px] font-normal font-['IBM_Plex_Mono',monospace] leading-4">
                      {step.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Card Footer */}
            <div className="pt-3.5 border-t border-white/15 mt-4">
              <span className="text-white text-sm font-semibold font-['Plus_Jakarta_Sans',sans-serif] leading-6">
                Billing clarity from invoice to payment.
              </span>
            </div>

          </div>

          {/* Secondary Action */}
          <div className="w-full flex justify-start items-center">
            <button
              type="button"
              className="min-h-11 px-5 py-2 bg-transparent hover:bg-white/10 text-white text-base font-normal rounded-lg border border-white/35 transition-colors cursor-pointer"
            >
              Review the Trust Center
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}