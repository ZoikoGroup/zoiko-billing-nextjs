"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "Is this PSA software?",
    answer:
      "No. This solution focuses on billing workflows for service organizations. It does not claim a complete professional-services automation suite, project management, or resource planning.",
  },
  {
    question: "Does it replace our project-management tool?",
    answer:
      "No. It connects billing context to approved project information without replacing your project-management system.",
  },
  {
    question: "Can it bill by project or milestone?",
    answer:
      "Yes, where the relevant billing basis and configuration are supported.",
  },
  {
    question: "Does it support retainers?",
    answer:
      "Retainer and pre-billed models are supported where configured and available.",
  },
  {
    question: "Does it track billable time?",
    answer:
      "Time-based billing can use approved upstream time sources. Billing does not replace the authoritative time-capture system.",
  },
];

const rightFaqs = [
  {
    question: "Can it bill expenses?",
    answer:
      "Approved expenses and pass-through costs can be included where the billing configuration supports them.",
  },
  {
    question: "Does it calculate profitability or recognize revenue?",
    answer:
      "No. Those responsibilities remain with the appropriate financial and accounting systems.",
  },
  {
    question: "Can it integrate project, CRM or accounting tools?",
    answer:
      "Yes. Supported integrations depend on the configured integration method, source and direction.",
  },
  {
    question: "Can it support multiple entities or currencies?",
    answer:
      "Availability depends on the configured billing environment and supported entity and currency capabilities.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on the selected configuration, billing requirements and applicable commercial terms.",
  },
];

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="flex min-h-20 w-full items-center justify-between gap-6 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold leading-6 text-slate-900">
          {question}
        </span>

        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gray-100 text-sm font-semibold leading-none text-slate-600 transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5">
          <p className="text-sm leading-5 text-slate-600">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function BillingFaq() {
  const [openFaq, setOpenFaq] = useState<string | null>(
    "Is this PSA software?"
  );

  const toggleFaq = (question: string) => {
    setOpenFaq((current) =>
      current === question ? null : question
    );
  };

  return (
    <section className="w-full border-t border-gray-200 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-4 px-0 sm:px-4 lg:px-7">
        {/* Section Label */}
        <div className="flex items-center gap-3">
          <span className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Security, fit, FAQ &amp; pricing
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
          The questions service firms ask first.
        </h2>

        {/* Description */}
        <p className="max-w-[686px] text-sm font-normal leading-6 text-slate-600 sm:text-base">
          Where a capability depends on configuration, an upstream source or
          approval, the answer says so.
        </p>

        {/* FAQ Cards */}
        <div className="mt-5 grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Left FAQ */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
            {leftFaqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === faq.question}
                onClick={() => toggleFaq(faq.question)}
              />
            ))}
          </div>

          {/* Right FAQ */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
            {rightFaqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === faq.question}
                onClick={() => toggleFaq(faq.question)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}