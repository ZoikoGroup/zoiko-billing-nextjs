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
    question: "Is this the real product?",
    answer:
      "No. Every scene is an illustrative specimen and says so in a label visible without a tooltip. The tour shows an operating grammar — context, policy, authority, state, evidence — not a live implementation.",
  },
  {
    id: "q2",
    question: "Does completing the tour mean anything?",
    answer:
      "No certification or qualification claim is conferred upon completing the chapters. It solely confirms that you reviewed the operating principles.",
  },
  {
    id: "q3",
    question: "Why does every scene list what it doesn't claim?",
    answer:
      "Explicit boundaries and non-claims prevent assumptions, marketing over-interpretations, and keep governance scope strictly defined.",
  },
  {
    id: "q4",
    question: "Who owns the content of these scenes?",
    answer:
      "Each chapter names its authoritative approval body or designates the scene as an uncertified design specimen.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    id: "q5",
    question: "Can I skip to a chapter?",
    answer:
      "Yes. You can jump directly to any chapter in the preview menu above without having to walk through preceding chapters sequentially.",
  },
  {
    id: "q6",
    question: "Is there a version without animation?",
    answer:
      "Yes. Enabling motion reduction lowers transitions and surface motion textures while preserving complete technical content.",
  },
  {
    id: "q7",
    question: "Is my progress saved?",
    answer:
      "Your progress is stored in local session storage without transmitting unnecessary personal data or telemetry across external boundaries.",
  },
  {
    id: "q8",
    question: "What if a scene fails to load?",
    answer:
      "If graphics or scripts fail to render, fallback text equivalents and proof cards remain fully readable and intact.",
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

export default function ProductTourFaqSection() {
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
            Product Tour FAQ
          </span>
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
        </div>

        {/* HEADING */}
        <h2 className="!font-[family-name:var(--font-jakarta)] !m-0 max-w-[850px] text-center !text-[30px] font-extrabold !leading-[1.18] !tracking-[-0.035em] text-[#091127] sm:!text-[38px] md:!text-[44px]">
          Direct answers about what you are looking at.
        </h2>

        {/* SUBTITLE */}
        <p className="!m-0 mt-3.5 max-w-[640px] text-center text-xs leading-relaxed text-[#5d7192] sm:text-sm md:text-base">
          Mostly: a specimen, deliberately.
        </p>

        {/* FAQ 2 COLUMNS */}
        <div className="mt-10 grid w-full max-w-[1240px] grid-cols-1 gap-6 sm:mt-12 lg:grid-cols-2">
          <FaqColumn
            faqs={leftFaqs}
            openId={openLeft}
            onToggle={toggleLeft}
          />
          <FaqColumn
            faqs={rightFaqs}
            openId={openRight}
            onToggle={toggleRight}
          />
        </div>
      </div>
    </section>
  );
}
