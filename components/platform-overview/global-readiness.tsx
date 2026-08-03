import React from 'react';

const integrationTags = [
  'Payment Providers',
  'Accounting & ERP',
  'CRM Platforms',
  'Banking & Reconciliation',
  'Zoiko Ecosystem',
];

const globalReadinessTags = [
  'Multi-Currency Billing',
  'Localised Documents',
  'Multi-Entity Control',
  'Tax Configuration',
  'Jurisdiction Availability',
];

export default function IntegrationsAndGlobalReadiness() {
  return (
    <section className="w-full bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          {/* Left Column: Eyebrow + Title */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <div className="inline-flex items-center gap-3">
              <span className="w-5 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xs shrink-0" />
              <span className="text-cyan-400 text-xs font-mono font-medium uppercase tracking-wider">
                Integrations and global readiness
              </span>
            </div>

            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-medium font-sans leading-tight max-w-[640px]">
              Configure global billing with market-specific control.
            </h2>
          </div>

          {/* Right Column: Subtitle / Description */}
          <div className="lg:col-span-5 max-w-[530px]">
            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
              Connect the systems you already run, and configure billing per market — within verified availability.
            </p>
          </div>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 pt-4">
          
          {/* Column 1: Integrations */}
          <div className="flex flex-col justify-between items-start space-y-6 p-8 bg-slate-900/60 border border-slate-800 rounded-2xl">
            <div className="space-y-3 w-full">
              <h3 className="text-white text-xl font-semibold font-sans">
                Integrations
              </h3>
              <p className="text-slate-400 text-sm font-normal leading-relaxed">
                Connector listings come from the governed integration registry. Only verified connectors are published.
              </p>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2.5 pt-4">
                {integrationTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs font-mono font-normal leading-4"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4 w-full">
              <a
                href="#explore-integrations"
                className="px-5 py-2.5 bg-white text-slate-950 hover:bg-slate-200 text-base font-medium rounded-lg transition-colors"
              >
                Explore integrations
              </a>
              <a
                href="#api-overview"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-base font-medium transition-colors"
              >
                <span>API overview</span>
                <span className="font-mono font-bold">→</span>
              </a>
            </div>
          </div>

          {/* Column 2: Global Readiness */}
          <div className="flex flex-col justify-between items-start space-y-6 p-8 bg-slate-900/60 border border-slate-800 rounded-2xl">
            <div className="space-y-3 w-full">
              <h3 className="text-white text-xl font-semibold font-sans">
                Global readiness
              </h3>
              <p className="text-slate-400 text-sm font-normal leading-relaxed">
                Multi-currency records, localised documents, multi-entity control and published jurisdiction availability.
              </p>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2.5 pt-4">
                {globalReadinessTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs font-mono font-normal leading-4"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-4 w-full">
              <a
                href="#explore-global-billing"
                className="inline-block px-5 py-2.5 border border-white/30 hover:border-white text-white text-base font-medium rounded-lg transition-colors"
              >
                Explore global billing
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}