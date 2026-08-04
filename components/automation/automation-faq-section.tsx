'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: 'What can Zoiko Billing automate?',
    answer:
      'Repeatable billing work built from explicit parts: assigning owners, notifying people, preparing documents and reminders, routing records for review, updating permitted internal states, scheduling approved summaries and invoking approved connector actions. Availability of any specific trigger, condition or action depends on your plan, configuration, connectors and market.',
  },
  {
    question: 'How are workflows triggered?',
    answer:
      'Workflows can be triggered by recurring schedules, record status changes, manual actions by authorized users, or incoming webhooks from external integration partners.',
  },
  {
    question: 'Can a workflow send an invoice or reminder automatically?',
    answer:
      'Yes. Scheduled or event-driven rules can trigger automatic dispatch of invoices and reminders based on template rules and customer preferences.',
  },
  {
    question: 'Which actions require approval?',
    answer:
      'High-severity actions-such as overrides, manual refunds, rate changes, or bulk data exports-can be configured to require explicit multi-step authorization.',
  },
  {
    question: 'What happens when a workflow fails?',
    answer:
      'Failures are classified into specific exception classes with automatic retry policies, safe pauses, or routing to designated exception owners.',
  },
  {
    question: 'Can workflows use integrations?',
    answer:
      'Yes. Workflows can invoke actions across approved connector integrations, including payment gateways, ERP systems, and CRM platforms.',
  },
  {
    question: 'Can workflows be paused or changed?',
    answer:
      'Authorized administrators can pause running workflows or publish updated version definitions at any time without dropping active queue state.',
  },
  {
    question: 'Can I use Automation & Workflows without Zoiko One?',
    answer:
      'Yes. Zoiko Billing features an independent, fully functional runtime and can be deployed standalone or integrated with Zoiko One.',
  },
];

export default function AutomationFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-4 py-16 text-slate-800 sm:px-6 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10 lg:space-y-12">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start gap-4 lg:col-span-7">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-cyan-500 to-sky-500" />
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-sky-600">
                Questions
              </span>
            </div>
            <h2 className="text-3xl font-medium leading-tight font-sans text-sky-950 sm:text-4xl lg:text-5xl">
              Direct answers about automation.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
              Every answer is rendered on the page and works without JavaScript.
            </p>
          </div>
        </div>

        <div className="max-w-4xl divide-y divide-slate-200 border-y border-slate-200">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="py-2">
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left focus:outline-hidden group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold leading-snug font-sans text-sky-950 transition-colors group-hover:text-sky-700 sm:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={`flex size-7 shrink-0 items-center justify-center rounded-full font-mono text-sm font-semibold transition-colors ${
                      isOpen
                        ? 'border border-sky-500 bg-sky-500 text-white'
                        : 'border border-slate-300 text-slate-600 group-hover:border-slate-400'
                    }`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-5 pr-8">
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
