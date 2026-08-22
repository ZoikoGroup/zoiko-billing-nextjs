"use client";

import React, { useState } from "react";

const leftFaqs = [
  {
    question: "Is this only an AR tool?",
    answer:
      "No. It combines customer records, billing documents, balances, payments and reconciliation, roles, workflows and reporting around Finance and AR jobs. Product depth lives on the individual capability pages.",
  },
  {
    question: "Does it collect debt for us?",
    answer:
      "It supports configured reminders and operational workflows, but collection decisions and sensitive customer exceptions remain subject to your configured policies and human authority.",
  },
  {
    question: "Can we automate reminders?",
    answer:
      "Yes, where the configured workflow and production capability support it. The current record state is checked before a reminder is sent.",
  },
  {
    question: "How are outstanding balances calculated?",
    answer:
      "Outstanding balances trace to invoice-level open amounts and the underlying billing, payment, allocation and adjustment records.",
  },
];

const rightFaqs = [
  {
    question: "Can it reconcile payments?",
    answer:
      "Yes, where supported by the configured workflow and integration. Payment allocation and reconciliation remain governed actions with retained evidence.",
  },
  {
    question: "Can we integrate accounting, ERP, CRM or banks?",
    answer:
      "Approved integrations can support governed handoffs. Availability depends on the plan, provider, jurisdiction and configuration.",
  },
  {
    question: "Does it forecast cash?",
    answer:
      "Reporting can expose governed billing and receivables data, but forecasting capability depends on the specific product capability and configuration.",
  },
  {
    question: "Can auditors see who changed an invoice or adjustment?",
    answer:
      "Material billing and AR actions retain history and evidence, including actor, role, source and relevant state changes where applicable.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on the commercial path, plan and required capabilities. See Pricing & Plans for the available options.",
  },
];

function FaqItem({
  question,
  answer,
  open,
  onClick,
}: {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`border-b border-gray-200 last:border-b-0 ${
        open ? "bg-gray-50/50" : "bg-white"
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        className="flex min-h-20 w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
      >
        <span className="text-sm font-semibold leading-6 text-slate-900">
          {question}
        </span>

        <span
          className={`flex size-5 shrink-0 items-center justify-center rounded-md bg-gray-100 text-sm font-semibold leading-5 text-slate-600 transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5 sm:px-6">
          <p className="m-0 text-sm font-normal leading-5 text-slate-600">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FinanceFAQ() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (question: string) => {
    setOpenFaq((current) => (current === question ? null : question));
  };

  return (
    <section className="w-full border-t border-gray-200 bg-white px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 pb-px sm:px-7">
        {/* Eyebrow */}
        <div className="relative flex h-6 w-full max-w-[260px] items-center">
          <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Fit, FAQ &amp; procurement
          </span>

          <span className="ml-4 h-px w-6 shrink-0 bg-blue-600 opacity-50" />
        </div>

        {/* Heading */}
        <div className="w-full pb-[0.61px]">
          <h2 className="m-0 text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
            Questions Finance and AR teams ask first.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[686.38px]">
          <p className="m-0 text-base font-normal leading-6 text-slate-600">
            Where a capability depends on approval or availability, the answer
            says so instead of implying it.
          </p>
        </div>

        {/* FAQ Columns */}
        <div className="flex w-full flex-col gap-5 pt-3.5 pb-2 lg:flex-row">
          {/* Left Column */}
          <div className="w-full overflow-hidden rounded-2xl bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200 lg:flex-1">
            {leftFaqs.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                open={openFaq === faq.question}
                onClick={() => toggleFaq(faq.question)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="w-full overflow-hidden rounded-2xl bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200 lg:flex-1">
            {rightFaqs.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                open={openFaq === faq.question}
                onClick={() => toggleFaq(faq.question)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}