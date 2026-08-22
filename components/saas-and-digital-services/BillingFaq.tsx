"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

const leftFaqs: Faq[] = [
  {
    question: "Is Zoiko Billing subscription-management software?",
    answer:
      "No. Zoiko Billing supports approved billing schedules, documents, changes and related workflows. Subscription lifecycle capabilities require separate product evidence and are not implied here.",
  },
  {
    question: "Can it bill recurring digital services?",
    answer:
      "Yes. Recurring digital services can be billed when the required billing schedule, service context and approved commercial rules are configured.",
  },
  {
    question: "Can it bill usage?",
    answer:
      "Yes. Usage-based billing can be supported when approved quantity data is available from a configured source and the applicable billing rules are defined.",
  },
  {
    question: "Can it bill per seat or user?",
    answer:
      "Yes. Per-seat or per-user billing can be supported when the approved customer, user or quantity source is connected and the corresponding pricing rules are configured.",
  },
  {
    question: "Does it handle trials, upgrades, downgrades or cancellations?",
    answer:
      "These lifecycle changes can be represented when supported by the connected product and approved workflow. Zoiko Billing does not independently claim ownership of subscription lifecycle decisions.",
  },
];

const rightFaqs: Faq[] = [
  {
    question: "Does it prorate automatically?",
    answer:
      "Proration depends on the configured billing rules and approved service-period changes. It should not be assumed for every billing model without confirming the applicable configuration.",
  },
  {
    question: "Does it calculate MRR, ARR or revenue recognition?",
    answer:
      "Billing records can provide the underlying commercial and service-period information needed for reporting. MRR, ARR and revenue-recognition calculations depend on the approved definitions and reporting configuration.",
  },
  {
    question: "Will an unpaid invoice suspend the customer's service?",
    answer:
      "Not automatically by default. Service suspension depends on the connected product, approved policy and configured workflow. An unpaid invoice should not be treated as universal authorization to suspend service.",
  },
  {
    question: "Can it integrate our product or CRM?",
    answer:
      "Yes, where an approved API, webhook or connector is available. Integration availability is controlled by the Integration Registry, and each route remains versioned, directional and registry-backed.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on the required billing capabilities, configuration, integrations and commercial scope. A specific price should be confirmed through the applicable Zoiko Billing pricing or sales process.",
  },
];

function FaqItem({ question, answer }: Faq) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex min-h-20 w-full items-center justify-between gap-5 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold leading-6 text-gray-900">
          {question}
        </span>

        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gray-100 text-sm font-semibold leading-5 text-gray-500 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm font-normal leading-5 text-gray-500">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function BillingFaq() {
  return (
    <section className="w-full bg-gray-50">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
        <div className="flex w-full max-w-[1240px] flex-col items-center gap-5">

          {/* Header */}
          <div className="mx-auto flex w-full max-w-[900px] flex-col items-center pt-2 text-center">

            {/* Eyebrow */}
            <div className="mb-4 flex w-full items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-blue-600/40" />

              <span className="text-center text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-blue-600 sm:text-[11px] sm:tracking-[0.14em] lg:text-xs lg:tracking-widest">
                Security, fit, FAQ &amp; pricing
              </span>

              <span className="h-px w-4 shrink-0 bg-blue-600/40" />
            </div>

            {/* Heading */}
            <h2
              className="
                mx-auto
                w-full
                max-w-[900px]
                text-center
                text-[30px]
                font-extrabold
                leading-[1.15]
                tracking-[-0.02em]
                text-gray-900
                sm:text-[38px]
                sm:leading-[1.15]
                lg:text-5xl
                lg:leading-[1.14]
              "
            >
              <span className="block">
                Questions about digital-service
              </span>

              <span className="block">
                billing.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mx-auto
                mt-4
                w-full
                max-w-[687px]
                text-center
                text-sm
                font-normal
                leading-6
                text-gray-500
                sm:mt-5
                sm:text-base
                sm:leading-7
              "
            >
              Where a capability depends on configuration, an upstream source
              or separate approval, the answer says so.
            </p>
          </div>

          {/* FAQ Cards */}
          <div className="grid w-full grid-cols-1 gap-5 pt-3 lg:grid-cols-2 lg:pt-5">

            {/* Left */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)]">
              {leftFaqs.map((faq) => (
                <FaqItem key={faq.question} {...faq} />
              ))}
            </div>

            {/* Right */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)]">
              {rightFaqs.map((faq) => (
                <FaqItem key={faq.question} {...faq} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}