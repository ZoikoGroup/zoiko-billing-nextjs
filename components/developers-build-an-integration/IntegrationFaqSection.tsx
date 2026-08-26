'use client';

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const leftFaqs: FaqItem[] = [
  {
    question: "Is this an integration builder or wizard?",
    answer:
      "No. This is an implementation planning page. It does not imply a saved integration project, connector marketplace, code generator, deployment pipeline or managed integration service.",
  },
  {
    question: "Where are the exact endpoints and schemas?",
    answer:
      "API Documentation holds the authoritative endpoints, request/response schemas, parameter definitions, and error contracts for Zoiko Billing.",
  },
  {
    question: "Does checking every gate mean we are production ready?",
    answer:
      "Satisfying every gate confirms you have addressed essential technical and operational prerequisites. Formal sign-off remains with your production owners.",
  },
  {
    question: "What counts as a successful integration?",
    answer:
      "A successful integration operates reliably in production, handles edge cases gracefully, maintains evidence-bearing records, and reconciles state divergence automatically.",
  },
  {
    question: "What do we do when an outcome is unknown?",
    answer:
      "Follow the ambiguity handling runbook: capture correlation evidence, query authoritative state via API read-back, and avoid re-executing non-idempotent side effects.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Can we roll back a launch?",
    answer:
      "Components and credentials can be stopped or revoked safely. However, issued financial or business transactions cannot be undone without formal reconciliation.",
  },
  {
    question: "Who owns a reconciliation exception?",
    answer:
      "Finance or operations owners determine the authoritative business state and corrective path for financial exceptions; engineering owns technical delivery failures.",
  },
  {
    question: "Can our external system be the source of truth?",
    answer:
      "Source of truth is determined per field rather than per object. Certain billing states and issued records remain strictly Zoiko Billing-governed.",
  },
  {
    question: "Do we need enterprise assistance?",
    answer:
      "Public documentation comes first. Dedicated technical assistance is offered when complex security, procurement, or custom architectural scoping requires it.",
  },
  {
    question: "How do we hand the integration over?",
    answer:
      "Handover requires transferring operational ownership, credential management, change monitoring, runbooks, and evidence artifacts to designated production teams.",
  },
];

export default function IntegrationFaqSection() {
  const [openLeftIdx, setOpenLeftIdx] = useState<number | null>(0);
  const [openRightIdx, setOpenRightIdx] = useState<number | null>(null);

  const toggleLeft = (idx: number) => {
    setOpenLeftIdx(openLeftIdx === idx ? null : idx);
  };

  const toggleRight = (idx: number) => {
    setOpenRightIdx(openRightIdx === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="integration-faq">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          INTEGRATION FAQ
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Direct answers about planning and readiness.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Every technical answer routes to the destination that owns the contract.
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
                    <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-slate-600">
                      {faq.answer}
                    </p>
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
                    <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-slate-600">
                      {faq.answer}
                    </p>
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
