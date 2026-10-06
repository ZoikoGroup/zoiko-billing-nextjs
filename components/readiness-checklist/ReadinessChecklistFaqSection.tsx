"use client";

import { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const leftFaqs: FaqItem[] = [
  {
    id: "q1",
    question: "Why is there no readiness score?",
    answer:
      "A single percentage score obscures severity: 95% complete with an unaddressed tax block is not 95% ready to launch. The five-count tally exposes what is open rather than hiding risk behind an aggregate.",
  },
  {
    id: "q2",
    question: "What does Verified mean here?",
    answer:
      "Verified means an accountable owner has validated the item against an authoritative regulatory or system artifact, citing evidence and date.",
  },
  {
    id: "q3",
    question: "Is Not assessed the same as passed?",
    answer:
      "No. All 32 prompts initialize in Not assessed to indicate that neither affirmative verification nor blockers have been evaluated. It is explicitly not a passing grade.",
  },
  {
    id: "q4",
    question: "Can we mark something Not applicable?",
    answer:
      "Certain prompts may be marked Not applicable if entity structures or localized jurisdictional scopes explicitly do not apply.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    id: "q5",
    question: "Is our progress saved?",
    answer:
      "Progress is held in local memory during your browser session. Exports to PDF or JSON format produce immutable records that can be stored in your compliance repository.",
  },
  {
    id: "q6",
    question: "Can we share a link to our filled-in checklist?",
    answer:
      "Yes. State tokens allow sharing evaluation configurations with team leads without transmitting sensitive company payload data.",
  },
  {
    id: "q7",
    question: "Does a completed checklist mean we can launch?",
    answer:
      "No. A fully verified checklist is a governance artifact confirming that all domains were reviewed. Launch decisions rest with designated executive and legal signatories.",
  },
  {
    id: "q8",
    question: "Should we put customer details in the notes?",
    answer:
      "Never. The checklist evaluates systemic architectural posture. Customer PII, tokens, and production keys must never be entered.",
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
    <div className="rounded-2xl border border-[#dfe5ee] bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] sm:p-6">
      <div className="divide-y divide-[#edf0f4]">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className="py-4 first:pt-1 last:pb-1">
              <button
                type="button"
                onClick={() => onToggle(faq.id)}
                className="flex w-full items-center justify-between gap-4 text-left transition"
              >
                <span className="text-xs font-bold text-[#091127] sm:text-[14px]">
                  {faq.question}
                </span>

                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all ${
                    isOpen
                      ? "bg-[#1D70F5] text-white shadow-sm"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {isOpen ? (
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 12H4"
                      />
                    </svg>
                  ) : (
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
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="mt-3 text-xs leading-relaxed text-[#5d7192] sm:text-[13px]">
                  <p className="!m-0">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ReadinessChecklistFaqSection() {
  const [openLeft, setOpenLeft] = useState<string | null>("q1");
  const [openRight, setOpenRight] = useState<string | null>(null);

  const toggleLeft = (id: string) => {
    setOpenLeft((prev) => (prev === id ? null : id));
  };

  const toggleRight = (id: string) => {
    setOpenRight((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#f8faff] py-16 font-[family-name:var(--font-inter)] text-slate-900 sm:py-20 md:py-24">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* EYEBROW */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7890b2] sm:text-xs">
            Checklist FAQ
          </span>
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
        </div>

        {/* HEADING */}
        <h2 className="!font-[family-name:var(--font-jakarta)] !m-0 max-w-[850px] text-center !text-[30px] font-extrabold !leading-[1.18] !tracking-[-0.035em] text-[#091127] sm:!text-[38px] md:!text-[44px]">
          Direct answers about what a <br className="hidden sm:inline" />
          completed checklist is.
        </h2>

        {/* SUBTITLE */}
        <p className="!mt-3 text-center text-sm font-normal text-[#5d7192] sm:text-base">
          Consistently: a working document, not a result.
        </p>

        {/* 2-COLUMN ACCORDION GRID */}
        <div className="mt-8 grid w-full max-w-[1240px] grid-cols-1 gap-6 sm:mt-10 lg:grid-cols-2">
          <FaqColumn faqs={leftFaqs} openId={openLeft} onToggle={toggleLeft} />
          <FaqColumn faqs={rightFaqs} openId={openRight} onToggle={toggleRight} />
        </div>
      </div>
    </section>
  );
}
