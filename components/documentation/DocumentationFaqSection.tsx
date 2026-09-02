'use client';

import { useState } from "react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const leftFaqs: FaqItem[] = [
  {
    question: "Is this the same as API Documentation?",
    answer: (
      <>
        No. Documentation covers current product usage — concepts, procedures, states and
        permissions. API Documentation, under Developers, covers technical contracts. They are
        separate destinations.{" "}
        <Link href="#doc-destinations" className="text-blue-600 font-semibold underline">
          See the boundary
        </Link>
      </>
    ),
  },
  {
    question: "Why does this send me to Help Center?",
    answer:
      "Documentation explains how capabilities work. When you need symptom diagnosis or troubleshooting help, we route you directly to Help Center.",
  },
  {
    question: "How current is an article?",
    answer:
      "Articles are updated alongside release verification. Every published page includes its last-reviewed timestamp.",
  },
  {
    question: "Why are there no limits or quotas listed?",
    answer:
      "Operational limits and commercial quotas reside with Pricing and API Documentation respectively, ensuring single-source truth.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Does documentation tell me what my plan includes?",
    answer:
      "Plan eligibility and commercial feature packaging are maintained in Pricing. Documentation notes applicability without restating pricing terms.",
  },
  {
    question: "Are screenshots from real accounts?",
    answer:
      "Never. All screenshots use synthetic, sanitized data to protect customer confidentiality and privacy completely.",
  },
  {
    question: "Can I tell whether something is available to me?",
    answer:
      "Each article lists clear region, plan, and role prerequisites right at the top before step one.",
  },
  {
    question: "Does documentation say if the service is down?",
    answer:
      "No. Real-time operational availability is tracked exclusively on System Status.",
  },
];

export default function DocumentationFaqSection() {
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
          DOCUMENTATION FAQ
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Direct answers about the docs themselves.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Documentation is public and never gated behind an account or a form.
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
