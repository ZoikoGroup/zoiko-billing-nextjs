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
    question: "Does a Ready status mean we're compliant?",
    answer:
      "No. The matrix is a readiness worksheet, not a legal, tax or accounting certification. Ready means the required information and evidence appear present for the next governance step — nothing about the position itself.",
  },
  {
    id: "q2",
    question: "Why does every phase have a hold condition?",
    answer:
      "Because billing between your own entities lacks the natural verification a customer relationship provides. Each hold condition names the point at which progress must stop rather than be reasoned past.",
  },
  {
    id: "q3",
    question: "Can the program lead close the tax phase?",
    answer:
      "No. Phase 4 belongs to the tax / legal specialist and no other role may close it. Listing the questions is not completing the review.",
  },
  {
    id: "q4",
    question: "Why is there no amount in the worksheet?",
    answer:
      "The worksheet is a public mockup. Real customer entities, contracts, tax positions, charges, bank details and legal documents never belong in it — every field holds a placeholder.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    id: "q5",
    question: "Who owns exceptions and corrections?",
    answer:
      "The controller / accounting role owns correction authority in phase 6, with inputs from the tax / legal specialist where a correction touches phase 4.",
  },
  {
    id: "q6",
    question: "Can we set a phase to Ready directly?",
    answer:
      "No. Guide status is computed from all six inputs per phase and never set directly. Any missing input, or a blocked dependency, holds the phase.",
  },
  {
    id: "q7",
    question: "Do we keep superseded arrangements?",
    answer:
      "Yes. Entity arrangements are examined across periods, so a superseded arrangement stays on the record with its effective dates rather than being overwritten.",
  },
  {
    id: "q8",
    question: "Is our worksheet data stored?",
    answer:
      "No. The worksheet is a planning aid. Keep the readiness record in your own governed systems, where it can outlive the arrangement it describes.",
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

export default function MultiEntityGuideFaqSection() {
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
          eyebrow="Multi-Entity Guide FAQ"
          title={
            <>
              Direct answers about what Ready{" "}
              <br className="hidden lg:inline" />
              means here.
            </>
          }
          subtitle="Consistently: less than the word suggests."
        />

        <div className="mt-8 grid w-full max-w-[1184px] grid-cols-1 gap-5 sm:mt-11 lg:grid-cols-2">
          <FaqColumn faqs={leftFaqs} openId={openLeft} onToggle={toggleLeft} />
          <FaqColumn faqs={rightFaqs} openId={openRight} onToggle={toggleRight} />
        </div>
      </div>
    </section>
  );
}
