'use client';

import { useState } from "react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const leftFaqs: FaqItem[] = [
  {
    question: "Does an update mean the change is available to me?",
    answer: (
      <>
        Not necessarily. Availability state distinguishes shipped, rolling out and scope-limited, and
        applicability names the region, plan or environment.{" "}
        <Link href="#availability-contract" className="text-blue-600 font-semibold underline">
          See the feed
        </Link>
      </>
    ),
  },
  {
    question: "Will you announce upcoming features here?",
    answer:
      "No. Product Updates lists effective, shipped changes only. Unreleased roadmap promises belong to approved roadmap communications.",
  },
  {
    question: "Is this where I check for outages?",
    answer:
      "No. Operational health and status incidents are hosted exclusively on System Status.",
  },
  {
    question: "How do I know if I need to act?",
    answer:
      "Every release entry clearly displays an Action Required label (None, Recommended, or Required) along with clear audience steps.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "What happens when a deadline changes?",
    answer:
      "Action deadlines trigger a prominent correction note, update the migration contract, and notify downstream owners explicitly.",
  },
  {
    question: "Are old updates kept accurate?",
    answer:
      "Release entries remain historical records of when changes occurred. Current documentation links are attached rather than rewriting past entries.",
  },
  {
    question: "Where are security advisories?",
    answer:
      "Vulnerability advisories and security governance notices are published through Trust & Security, never buried in feature update feeds.",
  },
  {
    question: "Why did an update disappear?",
    answer:
      "If a communication is withdrawn, it is replaced with a safe notice and redirect to preserve audit integrity while removing outdated guidance.",
  },
];

export default function ProductUpdatesFaqSection() {
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
          PRODUCT UPDATES FAQ
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Direct answers about what changed.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Updates and their documentation links are never gated behind an account.
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
