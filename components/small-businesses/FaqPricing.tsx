"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "Is Zoiko Billing accounting software?",
    answer: (
      <>
        No. It focuses on billing operations and does not keep your general
        ledger or replace your books. Approved accounting and ERP integrations
        are listed in{" "}
        <span className="font-semibold text-blue-600">Integrations</span>.
      </>
    ),
  },
  {
    question: "Can a small team use it without complex setup?",
    answer:
      "Yes. Zoiko Billing is designed to work for small teams without requiring enterprise-level setup from day one.",
  },
  {
    question: "Can it automate recurring invoices?",
    answer:
      "Yes. Repeat billing schedules can automate recurring invoice workflows while keeping scope, ownership, next events and state visible.",
  },
  {
    question: "Can it take payments?",
    answer:
      "Payment provider integrations may be available through approved routes. Zoiko Billing does not claim universal payment processing.",
  },
  {
    question: "Does it collect overdue debt?",
    answer:
      "It provides visibility into outstanding balances and reminders, but it does not automatically imply debt collection services.",
  },
];

const rightFaqs = [
  {
    question: "Does it file taxes?",
    answer:
      "No. Zoiko Billing focuses on billing operations and does not replace tax filing software or your accounting process.",
  },
  {
    question: "Can we add roles and approvals later?",
    answer:
      "Yes. Roles, scoped permissions and approval routes can be added as your team and billing complexity grow.",
  },
  {
    question: "What integrations are available?",
    answer:
      "Approved accounting, ERP, CRM, payment provider, banking, reconciliation and developer/API routes may be available depending on the integration.",
  },
  {
    question: "Can we use it standalone?",
    answer:
      "Yes. Zoiko Billing works as standalone software. Integrations and Zoiko One are optional governed paths.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on the applicable plan and configuration. See the current pricing and plans for the available options.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex min-h-20 w-full items-center justify-between gap-4 px-5 py-5 text-left"
      >
        <span className="text-sm font-semibold leading-6 text-gray-900">
          {question}
        </span>

        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gray-100 text-sm font-semibold leading-5 text-gray-600 transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5">
          <p className="text-sm font-normal leading-5 text-gray-600">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FaqPricing() {
  const [openFaq, setOpenFaq] = useState<string | null>(
    "Is Zoiko Billing accounting software?"
  );

  const toggleFaq = (question: string) => {
    setOpenFaq((current) =>
      current === question ? null : question
    );
  };

  return (
    <section className="w-full border-t border-gray-200 bg-white px-6 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
        {/* Eyebrow */}
        <div className="relative flex h-4 items-center">
          <div className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="ml-2.5 text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Security, fit, FAQ &amp; pricing
          </span>
        </div>

        {/* Heading */}
        <div className="w-full pb-1">
          <h2 className="text-2xl font-bold leading-9 text-gray-900 sm:text-3xl sm:leading-10">
            The questions owners and bookkeepers ask first.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[686px]">
          <p className="text-sm font-normal leading-6 text-gray-600 sm:text-base">
            Where something depends on your plan, configuration or an
            approved connector, the answer says so.
          </p>
        </div>

        {/* FAQ columns */}
        <div className="mt-3.5 grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Left column */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
            {leftFaqs.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === faq.question}
                onToggle={() => toggleFaq(faq.question)}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
            {rightFaqs.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === faq.question}
                onToggle={() => toggleFaq(faq.question)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}