"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "What are Customer Records?",
    answer:
      "Billing profiles, purpose-specific contacts, account history and customer-level controls for the billing account.",
  },
  {
    question: "Is Customer Records a CRM?",
    answer:
      "No. Customer Records is focused on governed billing-account context, authority, history and operational controls rather than general CRM functionality.",
  },
  {
    question: "Can I keep multiple contacts?",
    answer:
      "Yes. Multiple purpose-specific contacts can be maintained, with each contact role clearly defined.",
  },
  {
    question: "Can I change billing terms or addresses?",
    answer:
      "Yes, where you have the required authority. Changes remain governed and can preserve effective dates and history.",
  },
  {
    question: "Can records be merged?",
    answer:
      "Yes, but merging is a reviewed workflow. Similarity alone never authorizes an automatic merge.",
  },
];

const rightFaqs = [
  {
    question: "Can I import customer data?",
    answer:
      "Customer data can be introduced through approved workflows and integrations subject to validation, permissions and source-authority rules.",
  },
  {
    question: "Does Zoiko Billing verify tax IDs or credit risk?",
    answer:
      "No. Customer Records can hold approved context, but tax validation, credit decisions and other authoritative determinations belong to their respective services.",
  },
  {
    question: "Can Customer Records work with Zoiko One?",
    answer:
      "Yes. Customer Records can operate independently or as part of an approved Zoiko One connected deployment with explicit authority and permissions.",
  },
  {
    question: "Can I delete a customer record?",
    answer:
      "Deletion depends on applicable rights, retention requirements and financial-record obligations. A record is not always immediately deletable.",
  },
  {
    question: "Where do I see account-specific billing?",
    answer:
      "Account-specific billing context is available within the governed Customer Records and billing workflows where your role has access.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="flex min-h-20 w-full items-center justify-between gap-4 px-5 py-5 text-left"
      >
        <span className="text-sm font-semibold leading-6 text-slate-900">
          {question}
        </span>

        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-sm font-semibold transition ${
            isOpen
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-slate-600"
          }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5">
          <p className="text-sm leading-5 text-slate-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<string | null>(
    "What are Customer Records?"
  );

  const toggleFaq = (question: string) => {
    setOpenFaq((current) => (current === question ? null : question));
  };

  return (
    <section className="w-full bg-gray-50 px-4 py-12 sm:px-6 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 px-0 sm:px-4 lg:gap-5 lg:px-7">
        {/* Header */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-4 bg-blue-600 opacity-40" />

            <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
              Evaluation &amp; FAQ
            </span>

            <div className="h-px w-4 bg-blue-600 opacity-40" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl sm:leading-10">
  Direct answers about
  <br />
  Customer Records.
</h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
            No visitor needs to upload or paste real customer records, contact
            lists, tax identifiers, invoices, payment data or credentials to
            evaluate this.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="grid w-full grid-cols-1 gap-5 pt-2 lg:grid-cols-2">
          {/* Left FAQ */}
          <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
            {leftFaqs.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === faq.question}
                onClick={() => toggleFaq(faq.question)}
              />
            ))}
          </div>

          {/* Right FAQ */}
          <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
            {rightFaqs.map((faq) => (
              <FaqItem
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