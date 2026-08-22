"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "Is this agency-management software?",
    answer:
      "No. This solution focuses on client billing and receivables workflows. It does not claim a complete agency-management, PSA or campaign platform.",
  },
  {
    question: "Can it bill retainers?",
    answer:
      "Yes, where the retainer model is configured and supported. Billing tracks the retainer record, its application to invoices, and the related history.",
  },
  {
    question: "Can it bill project or milestone fees?",
    answer:
      "Yes. Approved project phases or milestones can be used as the billing basis where the configured billing model supports them.",
  },
  {
    question: "Can it rebill client expenses or media costs?",
    answer:
      "Supported pass-through or reimbursable costs can be billed when they have the required source, approval and client relationship.",
  },
  {
    question: "Does it manage campaigns?",
    answer:
      "No. Campaign and media-management activity remains in the appropriate upstream system. Billing can retain approved campaign or engagement context.",
  },
];

const rightFaqs = [
  {
    question: "Does it track billable time?",
    answer:
      "Time-derived billing can use an approved upstream time source. Zoiko Billing does not replace a dedicated time-tracking system.",
  },
  {
    question: "Does it calculate profitability or ROAS?",
    answer:
      "No. Finance and media analytics remain in their appropriate systems. Billing reports focus on billing and receivables state.",
  },
  {
    question: "Can it automate reminders?",
    answer:
      "Yes, where reminder workflows are configured. Eligibility is checked against the current invoice, delivery, payment and dispute state before sending.",
  },
  {
    question: "Can it integrate CRM, project or accounting tools?",
    answer:
      "Yes, where supported integrations are configured. Source direction and authority remain explicit.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on the selected plan and configured requirements. View the pricing and plans page for the current options.",
  },
];

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex min-h-20 w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold leading-6 text-gray-900">
          {question}
        </span>

        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gray-100 text-sm font-semibold leading-none text-gray-600 transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm font-normal leading-5 text-gray-600">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  return (
    <section className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-6 py-12 sm:px-8 sm:py-14 lg:px-7 lg:py-16">
        {/* Eyebrow */}
        <div className="flex h-4 items-center">
          <span className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="ml-2.5 text-xs font-bold uppercase leading-4 tracking-[0.18em] text-blue-600">
            Security, fit, FAQ &amp; pricing
          </span>
        </div>

        {/* Heading */}
        <h2 className="!m-0 w-full max-w-[1000px] !text-[30px] !font-extrabold !leading-[1.15] tracking-tight text-gray-900">
          The questions agency owners and finance leads ask first.
        </h2>

        {/* Description */}
        <p className="w-full max-w-[686px] text-sm font-normal leading-6 text-gray-600 sm:text-base">
          Where a capability depends on configuration, an upstream source or
          approval, the answer says so.
        </p>

        {/* FAQ columns */}
        <div className="mt-3.5 grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Left */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]">
            {leftFaqs.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          {/* Right */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]">
            {rightFaqs.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}