'use client';

import React, { useState } from 'react';

interface StageItem {
  id: string;
  number: string;
  title: string;
  heading: string;
  description: string;
  imageSrc: string;
}

const STAGES: StageItem[] = [
  {
    id: '01',
    number: '01',
    title: 'Commercial basis',
    heading: 'Record the basis of the charge',
    description:
      'The customer, product or service, quantity, rate, discount, tax treatment, billing date, terms and supporting commercial information.',
    imageSrc: '/images/about/div (1).png',
  },
  {
    id: '02',
    number: '02',
    title: 'Charge creation',
    heading: 'Automate charge generation',
    description:
      'Generate charges from usage, subscriptions, milestones, or one-time events with precision calculations.',
    imageSrc: '/images/about/div (1).png',
  },
  {
    id: '03',
    number: '03',
    title: 'Review and approval',
    heading: 'Verify before invoice delivery',
    description:
      'Ensure accuracy with multi-tier approval workflows, error detection, and explicit sign-offs.',
    imageSrc: '/images/about/div (1).png',
  },
  {
    id: '04',
    number: '04',
    title: 'Invoice generation',
    heading: 'Create compliant invoices',
    description:
      'Generate tax-compliant, multi-currency invoices with audit trails and automated numbering.',
    imageSrc: '/images/about/div (1).png',
  },
  {
    id: '05',
    number: '05',
    title: 'Delivery and monitoring',
    heading: 'Track delivery in real time',
    description:
      'Send invoices via email, portals, or EDI and track open rates, bouncebacks, and customer views.',
    imageSrc: '/images/about/div (1).png',
  },
  {
    id: '06',
    number: '06',
    title: 'Payment outcomes',
    heading: 'Process payments effortlessly',
    description:
      'Capture credit card, ACH, bank transfer, and gateway payments with automatic status updates.',
    imageSrc: '/images/about/div (1).png',
  },
  {
    id: '07',
    number: '07',
    title: 'Outstanding balances',
    heading: 'Manage AR and collections',
    description:
      'Automate aging schedules, dunning communications, payment plans, and credit control.',
    imageSrc: '/images/about/div (1).png',
  },
  {
    id: '08',
    number: '08',
    title: 'Reconciliation',
    heading: 'Match transactions automatically',
    description:
      'Reconcile bank statements, gateway receipts, and ledger items seamlessly.',
    imageSrc: '/images/about/div (1).png',
  },
  {
    id: '09',
    number: '09',
    title: 'Reporting and analysis',
    heading: 'Gain financial intelligence',
    description:
      'Analyze churn, MRR, deferred revenue, collection velocity, and real-time ledger metrics.',
    imageSrc: '/images/about/div (1).png',
  },
  {
    id: '10',
    number: '10',
    title: 'Financial history',
    heading: 'Immutable audit trail',
    description:
      'Maintain continuous financial records, line-item adjustments, and complete historical integrity.',
    imageSrc: '/images/about/div (1).png',
  },
];

const MODEL_CATEGORIES = [
  {
    title: 'Core models',
    items: ['One-time billing', 'Recurring billing', 'Subscription billing', 'Fixed-fee billing'],
  },
  {
    title: 'Service and contract models',
    items: ['Milestone billing', 'Project billing', 'Retainer billing', 'Usage-based billing'],
  },
  {
    title: 'Scale and global models',
    items: [
      'Tiered or volume billing',
      'Contract-specific billing',
      'Multi-entity billing',
      'Multi-currency billing',
    ],
  },
];

export default function BillingModelSection() {
  const [activeStageId, setActiveStageId] = useState<string>('01');

  const activeStage = STAGES.find((stage) => stage.id === activeStageId) || STAGES[0];

  return (
    <section className="w-full bg-[#f7f8f9] dark:bg-slate-950 font-['Segoe_UI',sans-serif] py-16 lg:py-24 px-4 sm:px-8 lg:px-12 transition-colors duration-200">
      <div className="w-full max-w-[1220px] mx-auto flex flex-col justify-start items-start gap-12">
        
        {/* Header Grid Row */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          
          {/* Header Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-start items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xs shrink-0" />
              <span className="text-blue-600 dark:text-blue-400 text-xs font-medium font-['IBM_Plex_Mono',monospace] uppercase leading-4 tracking-wider">
                The complete billing model
              </span>
            </div>

            <h2 className="text-sky-950 dark:text-white text-3xl sm:text-4xl lg:text-5xl font-medium font-['Plus_Jakarta_Sans',sans-serif] leading-[1.12] tracking-tight">
              Ten stages, one record.
            </h2>
          </div>

          {/* Header Right Column */}
          <div className="lg:col-span-5 flex flex-col justify-start items-start">
            <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-8">
              The end-to-end operating model, from the commercial basis of a charge to the financial history it leaves behind. Select a stage to see the product state that holds it.
            </p>
          </div>

        </div>

        {/* Interactive 10-Stage Showcase */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stage Selector List */}
          <div className="lg:col-span-4 border-l border-zinc-200 dark:border-slate-800 flex flex-col gap-1 pr-2">
            {STAGES.map((stage) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`w-full px-4 py-3.5 rounded-r-xl transition-all flex items-center gap-3 text-left relative cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-slate-900 shadow-md border-l-2 border-blue-600'
                      : 'hover:bg-slate-200/50 dark:hover:bg-slate-900/40 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-xl text-[10px] font-semibold font-['IBM_Plex_Mono',monospace] flex items-center justify-center shrink-0 ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {stage.number}
                  </span>

                  <span
                    className={`text-base font-semibold font-['Plus_Jakarta_Sans',sans-serif] leading-6 ${
                      isActive ? 'text-sky-950 dark:text-white' : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Stage Content Preview */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-sky-950 dark:text-white text-2xl sm:text-3xl font-medium font-['Plus_Jakarta_Sans',sans-serif] leading-9">
                {activeStage.heading}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-7 max-w-[520px]">
                {activeStage.description}
              </p>
            </div>

            <div className="w-full overflow-hidden rounded-2xl ">
              <img
                src={activeStage.imageSrc}
                alt={activeStage.heading}
                className="w-full h-auto object-cover max-h-[420px]"
              />
            </div>
          </div>

        </div>

        {/* Bottom Feature Capability Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          {MODEL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-zinc-200 dark:border-slate-800 flex flex-col gap-4 shadow-xs"
            >
              <span className="text-[10px] font-medium font-['IBM_Plex_Mono',monospace] uppercase tracking-wide text-slate-400 dark:text-slate-500">
                {cat.title}
              </span>

              <div className="flex flex-col gap-2.5">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-xs shrink-0" />
                    <span className="text-sky-950 dark:text-slate-200 text-sm font-normal leading-6">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
