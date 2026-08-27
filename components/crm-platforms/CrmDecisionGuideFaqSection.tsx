'use client';

import { useState } from "react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const leftFaqs: FaqItem[] = [
  {
    question: "Which CRM platforms are supported?",
    answer: (
      <>
        Use the current registry and the{" "}
        <Link href="/integrations-directory" className="text-blue-600 font-semibold underline">
          Integrations Directory
        </Link>
        . No provider names or counts are invented.
      </>
    ),
  },
  {
    question: "Does CRM sync both ways?",
    answer:
      "Synchronization direction is explicit per field and object. Bidirectional sync is never assumed blindly; field authority controls which direction takes precedence.",
  },
  {
    question: "Which system owns customer data?",
    answer:
      "Customer data ownership is granular per field rather than per object. Financial, billing profile, and payment terms remain Billing-owned, while sales context remains CRM-owned.",
  },
  {
    question: "Can Closed Won create an invoice automatically?",
    answer:
      "Closed Won is a sales pipeline stage, not an automatic billing trigger. Invoices are generated only when receiving billing workflows validate customer profile, terms, and approvals.",
  },
  {
    question: "Can invoice or payment status appear in CRM?",
    answer:
      "Yes, high-level outbound invoice status or payment summaries can be displayed in CRM for account visibility without granting direct access to sensitive financial ledgers.",
  },
  {
    question: "Can CRM delete a Billing customer?",
    answer:
      "No. Deleting an account in CRM unlinks or restricts external references according to retention policies, but never executes automatic financial-record deletion in Billing.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How are duplicates handled?",
    answer:
      "De-duplication is governed by approved stable external identifiers. Matching signals like name or domain prompt manual review rather than executing destructive merges.",
  },
  {
    question: "Does a CRM owner become a Billing admin?",
    answer:
      "No. Integration identity and CRM user roles do not confer Billing admin permissions. Billing authorizations remain governed separately under least privilege.",
  },
  {
    question: "Can billing data be used for lead scoring?",
    answer:
      "No. Billing data is not exported or processed for hidden customer scoring, churn propensity, or sales ranking without separate governed consent and purpose contracts.",
  },
  {
    question: "Can I build a custom CRM integration?",
    answer:
      "Yes. Developers can use standard Zoiko Billing APIs, webhooks, and sandbox environments to connect custom CRM or internal sales systems.",
  },
  {
    question: "How does this fit Revenue Operations?",
    answer:
      "It aligns Revenue Operations by establishing clear field authority boundaries, eliminating single-master assumptions, and maintaining audit-ready financial records.",
  },
  {
    question: "Where is banking or accounting handled?",
    answer:
      "Banking, payment gateways, and core accounting stay strictly within Billing and accounting integrations. CRM platforms receive only essential operational summaries.",
  },
];

export default function CrmDecisionGuideFaqSection() {
  const [openLeftIdx, setOpenLeftIdx] = useState<number | null>(0);
  const [openRightIdx, setOpenRightIdx] = useState<number | null>(null);

  const toggleLeft = (idx: number) => {
    setOpenLeftIdx(openLeftIdx === idx ? null : idx);
  };

  const toggleRight = (idx: number) => {
    setOpenRightIdx(openRightIdx === idx ? null : idx);
  };

  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="crm-faq">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          DECISION GUIDE &amp; FAQ
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Direct answers about CRM connections.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          No public form should request CRM credentials, customer lists, account exports,
          opportunity data, invoice or payment payloads, consent records or production integration
          secrets just to evaluate compatibility.
        </p>

        {/* 2-Column Accordion Layout */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-6 text-left items-start">
          
          {/* Left Column Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm divide-y divide-slate-100">
            {leftFaqs.map((faq, idx) => {
              const isOpen = openLeftIdx === idx;
              return (
                <div key={idx} className="py-4 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggleLeft(idx)}
                    className="flex w-full items-center justify-between gap-4 text-left font-bold text-slate-900 text-sm sm:text-base hover:text-blue-600 transition"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition ${
                        isOpen ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-slate-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm divide-y divide-slate-100">
            {rightFaqs.map((faq, idx) => {
              const isOpen = openRightIdx === idx;
              return (
                <div key={idx} className="py-4 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggleRight(idx)}
                    className="flex w-full items-center justify-between gap-4 text-left font-bold text-slate-900 text-sm sm:text-base hover:text-blue-600 transition"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition ${
                        isOpen ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-slate-600">
                      {faq.answer}
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
