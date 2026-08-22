"use client";

import React, { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const leftFaqs: FAQ[] = [
  {
    question: "How much does Zoiko Billing cost?",
    answer:
      "No public amount is currently published. Prices appear on this page only when a complete Price Record exists for your market, including currency, unit, interval, tax basis, eligibility, and effective date. Until then, the route is Book a demo for a scoped quote.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "A free trial is not currently published as an approved commercial offer. The page does not invent a trial period or represent access as free unless an approved plan record explicitly provides it.",
  },
  {
    question: "What is included?",
    answer:
      "Included capabilities depend on the approved plan record. Customer records, account structure, roles and approvals, accounts receivable, and other capability groups are stated individually rather than inferred from a tier name.",
  },
  {
    question: "What limits apply?",
    answer:
      "Limits are stated by dimension, value or state, unit and scope, boundary behavior, and source. Where a limit has not been approved for publication, the page says Not public or Plan-dependent rather than displaying an invented number or using the word unlimited.",
  },
  {
    question: "How do taxes and currencies work?",
    answer:
      "Contract currency and tax basis are shown only when they have been approved for the relevant market. Your locale does not automatically determine the contract currency, and the page does not perform unsupported FX conversions or provide tax advice.",
  },
  {
    question: "What happens when I reach a limit?",
    answer:
      "The behavior depends on the applicable limit record. A boundary may be a hard limit, soft limit followed by review, throttling, blocking, or another approved behavior. If the treatment has not been approved, it is not represented as a confirmed commercial rule.",
  },
];

const rightFaqs: FAQ[] = [
  {
    question: "Which integrations are included?",
    answer:
      "Integration availability depends on the approved plan, environment, region, and provider setup. Being listed as an available integration does not by itself mean that it is enabled for every account.",
  },
  {
    question: "Is implementation charged separately?",
    answer:
      "Implementation scope is contract-dependent unless an approved plan record states otherwise. The page keeps implementation assistance separate from documentation, customer support, and contracted service scope.",
  },
  {
    question: "How does Zoiko One affect pricing?",
    answer:
      "Zoiko One can affect the commercial scope when multiple products, entities, or deployment requirements are involved. Any resulting pricing treatment must come from an approved commercial record rather than being inferred from the suite relationship.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Plan changes depend on the applicable commercial terms, availability, eligibility, and any contractual commitments. No upgrade, downgrade, proration, or renewal behavior is assumed unless it is explicitly approved and published.",
  },
  {
    question: "Where do existing customers see actual billing?",
    answer:
      "Existing customers should use their authenticated account and Billing Support for account-specific charges, invoices, disputes, and other actual billing information. This public pricing page does not expose customer-specific billing data.",
  },
  {
    question: "Where do I get procurement evidence?",
    answer:
      "Public Trust, Privacy, Accessibility, Security, DPA, Subprocessor, and Legal materials are available through their respective public pages. Account-specific commercial evidence or contractual documentation is provided through the appropriate authenticated or commercial route.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="w-full border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left transition hover:bg-gray-50"
      >
        <span className="text-sm font-semibold leading-6 text-slate-900">
          {faq.question}
        </span>

        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md transition ${
            isOpen
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-slate-600"
          }`}
        >
          <span className="text-sm font-semibold leading-none">
            {isOpen ? "−" : "+"}
          </span>
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5">
          <p className="text-sm font-normal leading-5 text-slate-600">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function QuestionsAndProcurement() {
  const [openFaq, setOpenFaq] = useState<string | null>(
    "How much does Zoiko Billing cost?"
  );

  const handleToggle = (question: string) => {
    setOpenFaq((current) =>
      current === question ? null : question
    );
  };

  return (
    <section className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
        <div className="flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
          {/* Section label */}
          <div className="flex h-6 items-center gap-2 sm:gap-3">
            <div className="rounded-[5px] border border-blue-100 bg-gray-100 px-1.5 py-0.5">
              <div className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                13
              </div>
            </div>

            <div className="text-xs font-bold uppercase leading-4 tracking-[0.2em] text-slate-500">
              Questions &amp; procurement
            </div>

            <div className="hidden h-px w-6 bg-slate-500 opacity-50 sm:block" />
          </div>

          {/* Heading */}
          <div className="w-full pb-0.5">
            <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
              Questions about Zoiko Billing pricing.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[666px] pb-0.5">
            <p className="text-sm font-normal leading-5 text-slate-600 sm:text-base sm:leading-6">
              Where a fact is not yet approved, the answer says so rather than
              estimating.
            </p>
          </div>

          {/* FAQ cards */}
          <div className="flex w-full flex-col gap-5 pt-3.5 pb-1.5 lg:flex-row">
            {/* Left column */}
            <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
              {leftFaqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  isOpen={openFaq === faq.question}
                  onToggle={() => handleToggle(faq.question)}
                />
              ))}
            </div>

            {/* Right column */}
            <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white pb-20 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
              {rightFaqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  isOpen={openFaq === faq.question}
                  onToggle={() => handleToggle(faq.question)}
                />
              ))}
            </div>
          </div>

          {/* Support boundary */}
          <div className="w-full rounded-[10px] border border-gray-200 bg-gray-50 px-5 py-4">
            <p className="text-sm leading-5 text-slate-600">
              <span className="font-bold text-slate-900">
                Support boundary.
              </span>{" "}
              Billing disputes and account-specific charges are handled by
              authenticated Billing Support, not by this page and not by Sales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}