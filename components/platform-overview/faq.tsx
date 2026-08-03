'use client';

import { useState } from 'react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 'what-is-zoiko-billing',
    question: 'What is Zoiko Billing?',
    answer:
      'Zoiko Billing is a global billing and invoicing platform that manages the connected billing record across customers, charges, invoices, delivery, payments, outstanding balances and reporting. It can be used independently or as part of the integrated Zoiko One suite.',
  },
  {
    id: 'use-without-zoiko-one',
    question: 'Can I use Zoiko Billing without Zoiko One?',
    answer:
      'Yes, Zoiko Billing operates completely independently with its own configuration, onboarding, and direct integrations. A Zoiko One subscription is not required.',
  },
  {
    id: 'managed-records',
    question: 'What records can it manage?',
    answer:
      'It manages customer billing profiles, recurring and one-off charges, credit notes, invoice generation and delivery outcomes, payment allocations, and receivables ageing.',
  },
  {
    id: 'process-payments',
    question: 'Does it process payments?',
    answer:
      'Zoiko Billing integrates with supported payment gateways and banking processors to capture and allocate payment outcomes directly against outstanding balances.',
  },
  {
    id: 'entities-currencies',
    question: 'Can it support multiple entities and currencies?',
    answer:
      'Yes, it supports multi-entity structures and multi-currency billing and reporting with FX tracking per market.',
  },
  {
    id: 'country-availability',
    question: 'Is it available in my country?',
    answer:
      'Platform capabilities and market readiness vary by region. Please check our availability matrix for localized compliance details.',
  },
  {
    id: 'supported-integrations',
    question: 'Which integrations are supported?',
    answer:
      'We offer direct connectors for major CRM, ERP, and accounting platforms, alongside secure REST APIs for custom workflows.',
  },
  {
    id: 'pricing-cost',
    question: 'How much does it cost?',
    answer:
      'Pricing depends on your deployment mode (independent or suite integrated) and required processing volume. Contact sales for detailed tier breakdown.',
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('what-is-zoiko-billing');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-slate-100/70 px-4 py-16 text-slate-800 sm:px-6 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12 lg:space-y-16">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-4 lg:col-span-7">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-500 to-sky-500" />
              <span className="text-xs font-medium uppercase tracking-wider text-sky-600 font-mono">
                Questions
              </span>
            </div>
            <h2 className="text-3xl font-medium leading-tight text-sky-950 font-sans sm:text-4xl lg:text-5xl">
              Direct answers about the platform.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
              Every answer is rendered on the page and works without JavaScript.
            </p>
          </div>
        </div>

        <div className="max-w-4xl divide-y divide-zinc-200 border-y border-zinc-200">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-2">
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between rounded-lg px-1 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  <span className="text-base font-semibold text-sky-950 transition-colors group-hover:text-sky-600 font-sans sm:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-semibold font-mono transition-colors ${
                      isOpen
                        ? 'bg-sky-600 text-white'
                        : 'border border-zinc-300 text-slate-500 group-hover:border-sky-600 group-hover:text-sky-600'
                    }`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-5 pl-1 pr-12">
                    <p className="text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
