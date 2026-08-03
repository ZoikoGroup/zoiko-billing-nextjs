import React from 'react';

interface FeatureListItem {
  id: string;
  title: string;
}

const features: FeatureListItem[] = [
  { id: '1', title: 'Multi-currency operations' },
  { id: '2', title: 'Entity-aware billing' },
  { id: '3', title: 'Jurisdiction configuration' },
  { id: '4', title: 'Localized documents' },
  { id: '5', title: 'Tax and e-invoicing readiness' },
  { id: '6', title: 'Regional data controls' },
];

export default function GlobalBillingSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-20">
        {/* Left Column: Text & Features List */}
        <div className="flex-1 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Category Tag */}
            <div className="flex items-center gap-3">
              <span className="w-4 h-0.5 bg-blue-600 rounded-full" />
              <span className="text-blue-600 text-xs font-mono font-medium uppercase tracking-wider">
                Global and multi-entity
              </span>
            </div>

            {/* Title & Description */}
            <h2 className="text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
              Built for business across markets.
            </h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-xl">
              Configure billing around the currencies, entities, invoice
              requirements, payment terms, languages, and operating rules
              relevant to each market.
            </p>
          </div>

          {/* Features Stack */}
          <div className="space-y-2 py-2">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="px-4 py-3.5 bg-white rounded-lg border border-zinc-200 shadow-2xs hover:border-zinc-300 transition-colors"
              >
                <p className="text-zinc-900 text-sm font-semibold leading-normal">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>

          {/* Call-to-action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              className="px-5 py-2.5 bg-blue-600 text-white font-normal text-base rounded-md hover:bg-blue-700 transition-colors shadow-xs"
            >
              Explore Global Billing
            </button>
            <button
              type="button"
              className="px-5 py-2.5 bg-white text-zinc-900 font-normal text-base rounded-md border border-zinc-200 hover:bg-zinc-50 transition-colors"
            >
              Contact Global Sales
            </button>
          </div>
        </div>

        {/* Right Column: Hero Graphic/Image */}
        <div className="flex-1 w-full flex items-center justify-center">
          <img
            src="/images/home/div5.png"
            alt="Global and Multi-entity Billing Visualization"
            className="w-full h-auto max-h-[620px] rounded-2xl border border-zinc-200 object-cover shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}