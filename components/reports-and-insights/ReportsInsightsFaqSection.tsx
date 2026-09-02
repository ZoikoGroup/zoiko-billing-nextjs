'use client';

import { useState } from "react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const leftFaqs: FaqItem[] = [
  {
    question: "Why does this page show no statistics?",
    answer: (
      <>
        Because approved evidence does not yet exist for publication. The doctrine forbids
        fabricating a report, number, trend or chart to fill the space — an empty state is the
        honest state.{" "}
        <Link href="#finder-contract" className="text-blue-600 font-semibold underline">
          See the Finder
        </Link>
      </>
    ),
  },
  {
    question: "Is this the same as Zoiko Billing reporting?",
    answer:
      "No. Product reporting provides live telemetry and operational metrics for your account. Reports & Insights provides methodology-backed research, benchmarks, and operational analysis across general patterns.",
  },
  {
    question: "Where do I find the methodology?",
    answer:
      "Every published report includes a direct, un-gated methodology link disclosing period, scope, sample size, definitions, and limitations before any finding is presented.",
  },
  {
    question: "Do findings prove cause and effect?",
    answer:
      "No. Unless a study explicitly meets formal causal inference criteria, findings describe associations, trends, and operational patterns without claiming direct causation.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Are benchmarks industry-wide?",
    answer:
      "Benchmarks explicitly state their population, sample boundaries, and percentile metrics. They are never generalized across unrelated business models or industries.",
  },
  {
    question: "Is customer data used?",
    answer:
      "Only aggregated, anonymized, and consented datasets that satisfy strict suppression thresholds are ever included. No individual customer account data is disclosed.",
  },
  {
    question: "What happens when a number is wrong?",
    answer:
      "Numerical corrections are published transparently, showing both old and new values, the date of correction, and any impact on conclusions per our errata policy.",
  },
  {
    question: "Can I download the data?",
    answer:
      "Approved reports offer version-matched PDF or CSV exports where methodology and licensing permit, accompanied by complete schema definitions.",
  },
];

export default function ReportsInsightsFaqSection() {
  const [openLeftIdx, setOpenLeftIdx] = useState<number | null>(0);
  const [openRightIdx, setOpenRightIdx] = useState<number | null>(null);

  const toggleLeft = (idx: number) => {
    setOpenLeftIdx(openLeftIdx === idx ? null : idx);
  };

  const toggleRight = (idx: number) => {
    setOpenRightIdx(openRightIdx === idx ? null : idx);
  };

  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="faq">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          REPORTS &amp; INSIGHTS FAQ
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Direct answers about the evidence.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Methodology is never gated behind a form — reading how an analysis was produced
          requires no account.
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
