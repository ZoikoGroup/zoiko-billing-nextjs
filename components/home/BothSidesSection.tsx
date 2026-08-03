"use client"
import React, { useState } from 'react';

interface MetricItem {
  label: string;
  value: string;
}

interface PerspectiveData {
  title: string;
  description: string;
  metrics: MetricItem[];
  buttonText: string;
  imageSrc: string;
}

const perspectives: Record<'team' | 'customer', PerspectiveData> = {
  team: {
    title: 'Know what has been billed, collected, and left outstanding.',
    description:
      'An action queue on top of the same record that produced the invoices, so reporting and collections never disagree.',
    metrics: [
      { label: 'Total billed', value: '£1,284,910' },
      { label: 'Total collected', value: '£1,046,220' },
      { label: 'Collection rate', value: '81.4%' },
      { label: 'Outstanding', value: '£238,690' },
      { label: 'Avg time to payment', value: '27.6 days' },
    ],
    buttonText: 'See Reporting',
    imageSrc: '/images/home/div6.png',
  },
  customer: {
    title: 'Self-serve access to current statements and payment history.',
    description:
      'Empower customers to view active invoices, download audit-ready PDFs, and manage settlement options directly.',
    metrics: [
      { label: 'Active Invoices', value: '3 Pending' },
      { label: 'Latest Payment', value: '£14,200 (Cleared)' },
      { label: 'Next Due Date', value: '14 Days' },
      { label: 'Payment Method', value: 'Direct Debit (EUR)' },
      { label: 'Portal Status', value: 'Verified' },
    ],
    buttonText: 'See Customer Portal',
    imageSrc: '/images/home/div6.png',
  },
};

export default function RecordVisibilitySection() {
  const [activeTab, setActiveTab] = useState<'team' | 'customer'>('team');
  const currentData = perspectives[activeTab];

  return (
    <section className="w-full bg-stone-100 py-16 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center space-y-5 max-w-4xl mx-auto">
          {/* Subtitle / Category Badge */}
          <div className="flex items-center gap-3">
            <span className="w-4 h-0.5 bg-blue-600 rounded-full" />
            <span className="text-blue-600 text-xs font-mono font-medium uppercase tracking-wider">
              Both sides of the record
            </span>
          </div>

          {/* Title */}
          <h2 className="text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
            One billing record. Clear visibility on both sides.
          </h2>

          {/* Toggle Switch Pill */}
          <div className="p-1 bg-white rounded-full border border-zinc-200 inline-flex items-center gap-1 shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveTab('team')}
              className={`px-5 py-2 rounded-full text-sm font-normal transition-colors focus:outline-hidden ${
                activeTab === 'team'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-gray-600 hover:text-zinc-900'
              }`}
            >
              What your team sees
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('customer')}
              className={`px-5 py-2 rounded-full text-sm font-normal transition-colors focus:outline-hidden ${
                activeTab === 'customer'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-gray-600 hover:text-zinc-900'
              }`}
            >
              What your customer sees
            </button>
          </div>
        </div>

        {/* Dynamic Perspective Content Card */}
        <div className="p-6 sm:p-10 lg:p-14 bg-blue-100 rounded-3xl shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <h3 className="text-zinc-900 text-xl sm:text-2xl font-semibold leading-snug">
                  {currentData.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {currentData.description}
                </p>
              </div>

              {/* Metrics Stack */}
              <div className="space-y-2">
                {currentData.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="px-5 py-3.5 bg-white rounded-lg flex flex-col justify-center border border-white/50 shadow-2xs"
                  >
                    <span className="text-gray-500 text-[10px] font-mono uppercase tracking-wide">
                      {metric.label}
                    </span>
                    <span className="text-zinc-900 text-base font-semibold font-mono mt-0.5">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  className="px-5 py-2.5 bg-sky-950 text-white font-normal text-base rounded-md hover:bg-sky-900 transition-colors shadow-xs"
                >
                  {currentData.buttonText}
                </button>
              </div>
            </div>

            {/* Right Graphic/Image Column */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <img
                src={currentData.imageSrc}
                alt={currentData.title}
                className="w-full h-auto max-h-[490px] rounded-2xl border border-zinc-200 shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}