'use client';

import { useState } from "react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const leftFaqs: FaqItem[] = [
  {
    question: "Is Zoiko Billing WCAG 2.2 AA conformant?",
    answer: (
      <>
        This page does not claim product-wide conformance to any named standard. Where approved
        evidence establishes a conformance position for a stated scope, it is linked from Trust
        Center.{" "}
        <Link href="#domains" className="text-blue-600 font-semibold underline">
          See what our terms mean
        </Link>
      </>
    ),
  },
  {
    question: "Do you have a VPAT or ACR?",
    answer:
      "Accessibility Conformance Reports (ACRs) are published in Trust Center as evaluations complete.",
  },
  {
    question: "Does the product work with my screen reader?",
    answer:
      "Screen-reader semantics are evaluated per domain. Specific domain status is detailed in our Interaction Accessibility Domains matrix.",
  },
  {
    question: "Why does everything say \"not established\"?",
    answer:
      "We publish status only when formal, verified evidence exists. 'Not established' means evaluation is incomplete, not that it failed.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Will you tell me when a barrier is fixed?",
    answer:
      "Public limitation records update when remediations are verified by testing rather than when code is merged.",
  },
  {
    question: "Do I have to describe my disability to report a barrier?",
    answer:
      "No. Intake requests reproduction context only. We never ask for disability category or medical details.",
  },
  {
    question: "How quickly will you respond?",
    answer:
      "Accessibility barrier reports are triaged by product and accessibility engineering per standard intake processes.",
  },
  {
    question: "What if the barrier is in a connected system?",
    answer:
      "We evaluate Zoiko Billing and Zoiko-owned integrations; third-party system barriers are noted with respective boundaries.",
  },
];

export default function AccessibilityFaqSection() {
  const [openLeftIdx, setOpenLeftIdx] = useState<number | null>(0);
  const [openRightIdx, setOpenRightIdx] = useState<number | null>(null);

  const toggleLeft = (idx: number) => {
    setOpenLeftIdx(openLeftIdx === idx ? null : idx);
  };

  const toggleRight = (idx: number) => {
    setOpenRightIdx(openRightIdx === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="faq">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          ACCESSIBILITY FAQ
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Direct answers, including the uncomfortable ones.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Where the answer is &quot;we have not established that,&quot; this page says so.
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
