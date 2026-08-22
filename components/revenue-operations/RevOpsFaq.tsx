"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is this a full quote-to-cash platform?",
    answer:
      "No. This solution focuses on billing operations and revenue-cycle coordination. No end-to-end quote-to-cash claim is made, because that would require upstream and downstream capabilities that are approved separately.",
  },
  {
    question: "Does it replace our CRM?",
    answer:
      "No. Approved CRM context may support governed billing handoffs, but the CRM remains a separate system of record and is not a financial authority by default.",
  },
  {
    question: "Does it recognize revenue?",
    answer:
      "No revenue-recognition automation claim is made. Accounting and ERP capabilities depend on approved integrations and configuration.",
  },
  {
    question: "Does it forecast revenue?",
    answer:
      "Revenue forecasting is outside the core scope described here. Operational reporting can provide governed billing and revenue-cycle context where supported.",
  },
  {
    question: "Can it handle recurring billing?",
    answer:
      "Recurring billing capabilities depend on the configured billing setup, plan, provider and approved workflow.",
  },
  {
    question: "Can it automate changes and workflows?",
    answer:
      "Configured workflows may automate approved steps, while sensitive corrections, approvals and overrides retain explicit permission and evidence.",
  },
  {
    question: "Can RevOps see payment and AR status?",
    answer:
      "Yes, where the configured permissions and integrations provide that visibility. Seeing payment or AR status does not grant Finance authority.",
  },
  {
    question: "Can it integrate ERP, CRM or banks?",
    answer:
      "Approved integrations may support operational and financial handoffs. Availability depends on provider, plan, jurisdiction and configuration.",
  },
  {
    question: "How is access governed?",
    answer:
      "Access is governed through role-based permissions, configured workflows and explicit authorization. Revenue Operations does not automatically receive every financial permission.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on the selected plan, deployment requirements, integrations and configuration. Commercial details should be confirmed through the applicable pricing or sales process.",
  },
];

function FAQItem({
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
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
      >
        <span className="text-sm font-semibold leading-6 text-slate-900">
          {question}
        </span>

        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gray-100 text-sm font-semibold leading-5 text-slate-600 transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm leading-5 text-slate-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function RevOpsFaq() {
  return (
    <section className="w-full border-t border-gray-200 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Security, fit, FAQ &amp; procurement
          </span>
        </div>

        {/* Heading */}
        <h2 className="w-full text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
          The questions Revenue Operations teams ask first.
        </h2>

        {/* Description */}
        <p className="w-full max-w-[686px] text-sm leading-6 text-slate-600 sm:text-base">
          Where a capability depends on approval or availability, the answer
          says so rather than implying it.
        </p>

        {/* FAQ */}
        <div className="mt-2 grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Left column */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {faqs.slice(0, 5).map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {faqs.slice(5).map((faq) => (
              <FAQItem
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