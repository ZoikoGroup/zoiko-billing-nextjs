"use client"
import React, { useState } from 'react';

interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  isPopular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    id: 'tier-essentials',
    name: 'Essentials',
    description:
      'Solo operators and small teams getting invoicing under control',
    price: 'From $29/mo',
  },
  {
    id: 'tier-professional',
    name: 'Professional',
    description: 'Growing teams with recurring and usage-based billing',
    price: 'From $89/mo',
    isPopular: true,
  },
  {
    id: 'tier-business',
    name: 'Business',
    description:
      'Multi-entity operators needing approvals and reporting',
    price: 'From $249/mo',
  },
  {
    id: 'tier-enterprise',
    name: 'Enterprise',
    description:
      'Global finance teams with jurisdiction and integration needs',
    price: 'Contact sales',
  },
];

export default function CommercialModelSection() {
  const [deploymentMode, setDeploymentMode] = useState<
    'standalone' | 'connected'
  >('standalone');
  const [selectedTier, setSelectedTier] = useState<string>('tier-professional');

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center space-y-3 max-w-2xl mx-auto">
          {/* Category Tag */}
          <span className="text-blue-600 text-xs font-mono uppercase tracking-widest font-normal">
            Commercial Model
          </span>

          {/* Section Title */}
          <h2 className="text-slate-900 text-3xl sm:text-3xl lg:text-3xl font-bold leading-tight">
            Independent when you need focus.
             Connected when you need more.
          </h2>
        </div>

        {/* Mode Toggle Switch */}
        <div className="flex justify-center">
          <div className="p-1 bg-white rounded-full border border-gray-200 inline-flex items-center shadow-xs">
            <button
              type="button"
              onClick={() => setDeploymentMode('standalone')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors focus:outline-hidden ${
                deploymentMode === 'standalone'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-gray-500 hover:text-slate-900'
              }`}
            >
              Standalone
            </button>
            <button
              type="button"
              onClick={() => setDeploymentMode('connected')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors focus:outline-hidden ${
                deploymentMode === 'connected'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-gray-500 hover:text-slate-900'
              }`}
            >
              Connected to Zoiko One
            </button>
          </div>
        </div>

        {/* Visualizer Container */}
        <div className="w-full min-h-[320px] sm:min-h-[420px] rounded-2xl border border-gray-200 p-6 sm:p-10 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-50 to-white shadow-2xs">
          {/* Shared Services Banner */}
          <div
            className={`w-full max-w-4xl py-3 px-6 rounded-2xl border border-blue-600 text-center transition-all duration-300 ${
              deploymentMode === 'connected'
                ? 'opacity-100 bg-blue-50/60 shadow-xs'
                : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <span className="text-blue-600 text-xs font-medium">
              Zoiko One shared services — identity · permissions · audit · reporting
            </span>
          </div>

          {/* Architecture Image Placeholder */}
          <div className="mt-6 w-full flex justify-center">
            <img
              src="/images/home/div-arch-diagram.png"
              alt="Commercial Architecture Diagram"
              className="w-full max-w-4xl h-auto rounded-xl border border-gray-200 object-cover shadow-xs"
            />
          </div>
        </div>

        {/* Pricing Subheading */}
        <div className="text-center pt-4">
          <h3 className="text-slate-900 text-2xl font-bold">
            Choose the level of billing control your business needs.
          </h3>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {pricingTiers.map((tier) => {
            const isSelected = selectedTier === tier.id;
            return (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`p-5 bg-white rounded-xl border cursor-pointer transition-all flex flex-col justify-between text-center space-y-4 ${
                  isSelected || tier.isPopular
                    ? 'border-blue-600 shadow-sm ring-1 ring-blue-600'
                    : 'border-gray-200 hover:border-gray-300 shadow-2xs'
                }`}
              >
                <div className="space-y-2">
                  <h4 className="text-slate-900 text-base font-bold">
                    {tier.name}
                  </h4>
                  <p className="text-gray-500 text-xs font-normal leading-relaxed">
                    {tier.description}
                  </p>
                </div>
                <div className="pt-2">
                  <span className="text-slate-900 text-lg font-bold font-mono">
                    {tier.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Link */}
        <div className="text-center pt-2">
          <a
            href="#pricing"
            className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-base font-semibold transition-colors group"
          >
            <span>View Full Pricing</span>
            <span className="font-mono transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}