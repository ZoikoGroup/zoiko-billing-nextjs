"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What can Zoiko Billing report on?",
    answer:
      "Operational activity across the billing record: customers and entities, draft, issued, credited and corrected documents, charges, fees, discounts and adjustments, billing schedule occurrences, document rendering and delivery evidence, and workflow, approval and exception workload. On the revenue side it covers issued and credit activity, current and aging receivable positions, dispute, hold and promise workload, payment states, exceptions and outstanding balances. Availability of any specific metric or dataset depends on your plan, configuration and market.",
  },
  {
    question: "How are metrics defined?",
    answer:
      "Each metric has a defined formula, scope, unit, inclusions, exclusions, owner and version. The definition travels with the result so the same metric has the same meaning across reports and comparisons.",
  },
  {
    question: "Can I compare periods or entities?",
    answer:
      "Yes, where the periods, entities, currencies and other dimensions are comparable. Invalid comparisons are identified rather than presented as misleading totals.",
  },
  {
    question: "How current is the data?",
    answer:
      "Freshness and the as-of time are visible with the result. Data that is stale, incomplete or affected by late-arriving information is identified rather than silently presented as current.",
  },
  {
    question: "Can I drill from a chart to the source records?",
    answer:
      "Where supported and permitted, drill-through carries the relevant metric, filters, snapshot and context into the underlying records. Access remains permission-aware.",
  },
  {
    question: "Can reports be scheduled or exported?",
    answer:
      "Supported reports can be scheduled or exported depending on your plan, configuration and market. Exports are governed with permissions, scope, delivery controls, expiry and audit information.",
  },
  {
    question: "Does Reporting & Analytics provide forecasts?",
    answer:
      "Reporting and Analytics is governed operational reporting. It does not represent a guaranteed forecast or causal intelligence. Any supported target or comparison uses an explicitly defined source.",
  },
  {
    question: "Can I use Reporting & Analytics without Zoiko One?",
    answer:
      "Yes. Zoiko Billing remains independently deployable. Zoiko One participation and cross-product handoffs are available where enabled and supported.",
  },
];

export default function ReportingFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-slate-50 px-5 py-16 transition-colors dark:bg-slate-950 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-10 sm:gap-12 lg:gap-14">
        {/* Header */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">
          <div className="flex w-full flex-1 flex-col items-start gap-5">
            <div className="flex items-center gap-2.5">
              <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500" />

              <span className="font-mono text-xs font-medium uppercase leading-4 tracking-wider text-sky-600 dark:text-sky-400">
                Questions
              </span>
            </div>

            <h2 className="text-3xl font-medium leading-[1.15] tracking-tight text-sky-950 dark:text-white sm:text-4xl lg:text-5xl">
              Direct answers about
              <br className="hidden sm:block" />
              reporting.
            </h2>
          </div>

          <div className="w-full max-w-[528px] flex-1">
            <p className="text-base font-normal leading-8 text-slate-600 dark:text-slate-300">
              Every answer is rendered on the page and works without
              JavaScript.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="w-full max-w-[920px]">
          <div className="border-t border-slate-200 dark:border-slate-700">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-slate-200 dark:border-slate-700"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 px-0.5 py-5 text-left"
                  >
                    <span className="text-base font-semibold leading-7 text-sky-950 dark:text-white">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-sm font-semibold leading-6 transition-colors ${
                        isOpen
                          ? "bg-sky-600 text-white outline outline-1 outline-offset-[-1px] outline-sky-600"
                          : "text-slate-600 outline outline-1 outline-offset-[-1px] outline-slate-200 dark:text-slate-300 dark:outline-slate-700"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="max-w-[736px] pb-6 pr-4 sm:pb-7">
                      <p className="text-sm font-normal leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}