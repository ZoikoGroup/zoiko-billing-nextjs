'use client';

import { useState } from "react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const leftFaqs: FaqItem[] = [
  {
    question: "Is every Zoiko Billing product feature available through the API?",
    answer: (
      <>
        No blanket claim is made. Product capability and API exposure are governed separately
        — see the dual-state contract in the resource catalog.{" "}
        <Link href="#catalog" className="text-blue-600 font-semibold hover:underline">
          View the catalog
        </Link>
      </>
    ),
  },
  {
    question: "Where do I find authentication requirements?",
    answer:
      "Authentication method, credential lifecycle, scopes, secret handling and environment setup are sourced from the canonical Authentication documentation.",
  },
  {
    question: "How do I know whether a write is safe to retry?",
    answer:
      "Every write operation explicitly states its idempotency support, retry rules and safe read-before-repeat paths in the operation details.",
  },
  {
    question: "How are issued billing records handled?",
    answer:
      "Issued billing records carry strict immutability semantics. Adjustments and cancellations emit governed evidence records rather than silently overwriting historical documents.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Where are webhook events documented?",
    answer:
      "Exact event types, payloads, delivery guarantees, signatures, retry behavior, ordering and replay semantics belong exclusively to the Webhooks specification.",
  },
  {
    question: "How do I test without affecting production data?",
    answer:
      "Use the Developer Sandbox environment to validate requests, test-data rules, reset behaviors and endpoint contracts safely.",
  },
  {
    question: "How do I know when documentation changes?",
    answer:
      "Notice windows, changelogs, migration guidance and sunset states are published in the canonical versioning and release notes hub.",
  },
];

export default function DocumentationFaqDocSection() {
  const [openIndexLeft, setOpenIndexLeft] = useState<number | null>(0); // First item open by default
  const [openIndexRight, setOpenIndexRight] = useState<number | null>(null);

  const toggleLeft = (idx: number) => {
    setOpenIndexLeft(openIndexLeft === idx ? null : idx);
  };

  const toggleRight = (idx: number) => {
    setOpenIndexRight(openIndexRight === idx ? null : idx);
  };

  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="faq">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          DOCUMENTATION FAQ
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Direct answers, with the owning source named.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Each answer routes to the authority rather than restating a technical fact this page
          cannot verify.
        </p>

        {/* 2-Column Accordion Layout */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-6 text-left items-start">
          
          {/* Left Column Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm divide-y divide-slate-100">
            {leftFaqs.map((faq, idx) => {
              const isOpen = openIndexLeft === idx;
              return (
                <div key={idx} className="py-4 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggleLeft(idx)}
                    className="flex w-full items-center justify-between gap-4 text-left font-bold text-xs sm:text-sm text-slate-900 transition hover:text-blue-600"
                  >
                    <span>{faq.question}</span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-xs font-bold">
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
          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm divide-y divide-slate-100">
            {rightFaqs.map((faq, idx) => {
              const isOpen = openIndexRight === idx;
              return (
                <div key={idx} className="py-4 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggleRight(idx)}
                    className="flex w-full items-center justify-between gap-4 text-left font-bold text-xs sm:text-sm text-slate-900 transition hover:text-blue-600"
                  >
                    <span>{faq.question}</span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-xs font-bold">
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
