"use client";

import { useState } from "react";

import SectionHeader from "@/components/global-capabilities/SectionHeader";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const leftFaqs: FaqItem[] = [
  {
    id: "q1",
    question: "If we complete all seven phases, are we ready?",
    answer:
      "You have a plan with its gaps named and owned. Completing phases produces decisions, questions, owner assignments and verification tasks — not availability, entitlement, tax position or implementation guarantees.",
  },
  {
    id: "q2",
    question: "Can we skip a phase?",
    answer:
      "Branches are allowed, and a phase that does not apply can be marked as such. The two gates cannot be skipped where they apply: availability verification in phase 2 and specialist review in phase 5.",
  },
  {
    id: "q3",
    question: "Does the guide tell us what's available in a market?",
    answer:
      "No. Phase 2 routes the question to Supported Countries and Jurisdiction Availability, which own capability-scoped market availability. The guide records the question and its owner, not the answer.",
  },
  {
    id: "q4",
    question: "Can a program lead close the tax phase?",
    answer:
      "No. Phase 5 routes to the tax / compliance specialist, and that review cannot be substituted by another role completing the phase. A program lead can track it, not clear it.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    id: "q5",
    question: "Is our progress saved?",
    answer:
      "The guide is a planning sequence, not a system of record. Keep decisions, owner assignments and verification tasks in your own program tracker or the downloadable checklist.",
  },
  {
    id: "q6",
    question: "Why does the guide ask questions instead of giving answers?",
    answer:
      "Because the answers belong to governed sources that maintain their own currentness. A guide that restated them would inherit their staleness without their review cycle.",
  },
  {
    id: "q7",
    question: "What happens when sources conflict?",
    answer:
      "The conflict is recorded as an open item with an owner, and the affected phase is not treated as complete. The guide does not pick a winner between sources.",
  },
  {
    id: "q8",
    question: "Does this work without JavaScript?",
    answer:
      "Yes. All phase, role and destination content is readable without JavaScript. Only the interactive selection and expand / collapse behaviour depend on it.",
  },
];

function FaqColumn({
  faqs,
  openId,
  onToggle,
}: {
  faqs: FaqItem[];
  openId: string | null;
  onToggle: (id: string) => void;
}) {
  return (
    <div className="self-start rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="divide-y divide-[#edf0f4]">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className="px-5 py-5">
              <button
                type="button"
                onClick={() => onToggle(faq.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 text-left transition"
              >
                <span className="text-[13px] font-semibold leading-6 text-[#091127] sm:text-sm">
                  {faq.question}
                </span>

                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center transition-all ${
                    isOpen
                      ? "rotate-45 rounded-md bg-[#1D70F5] text-white shadow-sm"
                      : "rounded-md bg-[#f5f7fb] text-slate-500 hover:text-slate-700"
                  }`}
                >
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <p className="!m-0 mt-3 text-[13px] !leading-5 !text-[#5d7192] sm:text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function GlobalBillingGuideFaqSection() {
  const [openLeft, setOpenLeft] = useState<string | null>("q1");
  const [openRight, setOpenRight] = useState<string | null>(null);

  const toggleLeft = (id: string) => {
    setOpenLeft((prev) => (prev === id ? null : id));
  };

  const toggleRight = (id: string) => {
    setOpenRight((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#f5f7fb] py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[100px]">
        <SectionHeader
          eyebrow="Global Billing Guide FAQ"
          title={
            <>
              Direct answers about what <br className="hidden lg:inline" />
              completing this guide means.
            </>
          }
          subtitle="Mostly: less than it looks like, and that is the point."
        />

        <div className="mt-8 grid w-full max-w-[1184px] grid-cols-1 gap-5 sm:mt-11 lg:grid-cols-2">
          <FaqColumn faqs={leftFaqs} openId={openLeft} onToggle={toggleLeft} />
          <FaqColumn faqs={rightFaqs} openId={openRight} onToggle={toggleRight} />
        </div>
      </div>
    </section>
  );
}
