'use client';

import { useState } from "react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const leftAuthFaqs: FaqItem[] = [
  {
    question: "How do I authenticate to the Zoiko Billing API?",
    answer: (
      <>
        Access requirements are provided through the approved setup paths. Only currently
        verified methods are listed, and no mechanism is named here until security source
        confirms it.{" "}
        <Link href="#access-requirements" className="text-[#1D70F5] font-semibold hover:underline">
          View access requirements
        </Link>
      </>
    ),
  },
  {
    question: "Is authentication the same as API permissions?",
    answer:
      "No. Authentication proves identity, while authorization and permissions dictate what that authenticated identity is allowed to inspect or perform.",
  },
  {
    question: "Where should I store credentials?",
    answer:
      "Credentials must be stored in approved secret management systems. Never store secrets in client-side code, browser local storage, or public repositories.",
  },
  {
    question: "Can one credential be used in every environment?",
    answer:
      "Never assume credential portability. Production, sandbox, and staging environments use distinct credentials and isolation boundaries.",
  },
];

const rightAuthFaqs: FaqItem[] = [
  {
    question: "How do I rotate or revoke access?",
    answer:
      "Rotation and revocation follow verified lifecycle steps. Revoking access immediately invalidates active tokens without grace periods.",
  },
  {
    question: "What should I do if authentication fails?",
    answer:
      "Check transport headers, machine error codes, and credential status. Never attempt blind retries on unconfirmed or failing credentials.",
  },
  {
    question: "Does Zoiko Billing support a specific authentication standard?",
    answer:
      "Exact supported standards (such as OAuth2, API Keys, or MTLS) are published strictly through the canonical security registry.",
  },
  {
    question: "How do I request broader access?",
    answer:
      "Permission expansion requires administrative approval and audit review through your organization's security administrator.",
  },
];

export default function AuthenticationFaqSection() {
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
          AUTHENTICATION FAQ
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Direct answers, without speculation.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Where a mechanism is not confirmed by canonical source, the answer says so rather
          than guessing.
        </p>

        {/* 2-Column Accordion Layout */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-6 text-left items-start">
          
          {/* Left Column Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm divide-y divide-slate-100">
            {leftAuthFaqs.map((faq, idx) => {
              const isOpen = openIndexLeft === idx;
              return (
                <div key={idx} className="py-4 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggleLeft(idx)}
                    className="flex w-full items-center justify-between gap-4 text-left font-bold text-xs sm:text-sm text-slate-900 transition hover:text-[#1D70F5]"
                  >
                    <span>{faq.question}</span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1D70F5] text-xs font-bold">
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
            {rightAuthFaqs.map((faq, idx) => {
              const isOpen = openIndexRight === idx;
              return (
                <div key={idx} className="py-4 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggleRight(idx)}
                    className="flex w-full items-center justify-between gap-4 text-left font-bold text-xs sm:text-sm text-slate-900 transition hover:text-[#1D70F5]"
                  >
                    <span>{faq.question}</span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1D70F5] text-xs font-bold">
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
