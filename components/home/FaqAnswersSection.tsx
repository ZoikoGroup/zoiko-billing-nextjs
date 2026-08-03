"use client"
import React, { useState } from 'react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is Zoiko Billing?',
    answer:
      'Zoiko Billing is a global billing and invoicing platform that helps businesses create invoices, manage charges, track payments, monitor outstanding balances, and maintain clear financial records.',
  },
  {
    id: 'faq-2',
    question: 'Who is Zoiko Billing for?',
    answer:
      'Zoiko Billing is built for solo operators, growing companies, multi-entity enterprises, and global finance teams looking for complete billing workflow control.',
  },
  {
    id: 'faq-3',
    question: 'Can Zoiko Billing be used without Zoiko One?',
    answer:
      'Yes. Zoiko Billing operates as a fully independent standalone billing engine, or it can seamlessly connect to Zoiko One for shared identity, permissions, and audit logs.',
  },
  {
    id: 'faq-4',
    question: 'Does Zoiko Billing process payments?',
    answer:
      'Zoiko Billing integrates with major payment gateways and processors using webhooks and approved connectors to track payment status and automate receivables.',
  },
  {
    id: 'faq-5',
    question: 'Is Zoiko Billing available globally?',
    answer:
      'Yes, it supports multi-entity operators, regional jurisdiction configurations, and multi-currency billing requirements.',
  },
  {
    id: 'faq-6',
    question: 'How do I get started?',
    answer:
      'You can sign up for a plan directly or reach out to our sales team for custom enterprise onboarding and migration support.',
  },
];

export default function QuestionsSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 max-w-2xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="w-4 h-0.5 bg-blue-600 rounded-full" />
            <span className="text-blue-600 text-xs font-mono font-medium uppercase tracking-wider">
              Answers
            </span>
          </div>
          <h2 className="text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
            Questions about Zoiko Billing
          </h2>
        </div>

        {/* Main Grid: FAQ Accordion + Query Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* FAQ Accordion List (8 Cols) */}
          <div className="lg:col-span-8 bg-slate-50 border-t border-b border-zinc-200 divide-y divide-zinc-200">
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className="py-2">
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-4 flex items-center justify-between text-left transition-colors focus:outline-hidden group"
                  >
                    <span className="text-zinc-900 text-base font-semibold pr-4 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                        isOpen
                          ? 'bg-blue-600 border-blue-600 text-white'
                          : 'border-zinc-300 text-zinc-600 hover:border-zinc-400'
                      }`}
                    >
                      <span className="text-sm font-mono font-semibold">
                        {isOpen ? '−' : '+'}
                      </span>
                    </span>
                  </button>

                  {/* Expanded Answer Content */}
                  {isOpen && (
                    <div className="pb-5 pr-8 space-y-3 transition-all animate-fadeIn">
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                      <button
                        type="button"
                        className="text-blue-600 text-[10px] font-mono uppercase tracking-wide hover:underline focus:outline-hidden"
                      >
                        Copy link to answer
                      </button>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Bottom FAQ CTA Buttons */}
            <div className="pt-8 pb-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="px-5 py-2.5 bg-blue-600 text-white text-base rounded-md hover:bg-blue-700 transition-colors shadow-2xs"
              >
                View All FAQs
              </button>
              <button
                type="button"
                className="px-5 py-2.5 bg-white text-zinc-900 text-base rounded-md border border-zinc-200 hover:bg-zinc-50 transition-colors"
              >
                Visit the Help Center
              </button>
            </div>
          </div>

          {/* Featured Specific Query Sidebar Card (4 Cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden flex flex-col">
            {/* Question Bar */}
            <div className="px-4 py-3.5 bg-gray-50 border-b border-zinc-200 flex items-center gap-2.5">
              <div className="w-3.5 h-3.5 rounded-sm border border-zinc-400 shrink-0" />
              <p className="text-zinc-900 text-sm font-normal truncate">
                How do I bill one customer from two legal entities?
              </p>
              <div className="w-0.5 h-4 bg-blue-600 ml-auto shrink-0 animate-pulse" />
            </div>

            {/* Answer & Related Links */}
            <div className="p-5 space-y-4">
              <span className="text-blue-600 text-[10px] font-mono uppercase tracking-wide block">
                Answer
              </span>
              <p className="text-zinc-900 text-sm leading-relaxed">
                Hold one customer with entity-scoped billing accounts. Each
                invoice carries the identity, numbering, and tax mode of the
                entity that issued it, and group reporting consolidates across
                both.
              </p>

              {/* Topic Links */}
              <div className="pt-4 border-t border-zinc-100 space-y-2">
                {[
                  'Multi-entity billing',
                  'Jurisdiction configuration',
                  'Multi-entity reporting',
                ].map((topic) => (
                  <a
                    key={topic}
                    href={`#${topic.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center gap-2 text-zinc-600 hover:text-blue-600 text-xs font-mono transition-colors group"
                  >
                    <span className="text-zinc-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                    <span>{topic}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}