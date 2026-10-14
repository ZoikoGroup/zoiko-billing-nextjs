"use client";

import { useState } from "react";

import SectionHeader from "./SectionHeader";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const leftFaqs: FaqItem[] = [
  {
    id: "q1",
    question: "Where is the coverage grid?",
    answer:
      "Not here. The map rule prohibits green checkmarks, \"available worldwide\" labels and implied integrations without governed evidence — a tick is the most efficient way to assert eleven unverified things at once. Coverage is owned by the coverage registry.",
  },
  {
    id: "q2",
    question: "Is Global Billing one capability?",
    answer:
      "No. Global Billing is a family of eleven capabilities across seven domains. Each governs one thing, and none of them inherits the scope, status or availability of another.",
  },
  {
    id: "q3",
    question: "Why not include the detail from each capability page?",
    answer:
      "Because a hub that repeats specialist detail becomes a second, unreviewed copy of it. This page points at the source that owns each answer instead of restating it.",
  },
  {
    id: "q4",
    question: "Is the need router a diagnostic?",
    answer:
      "No. It is navigational assistance only — not a diagnostic, an eligibility decision, an entitlement determination or a legal or tax recommendation.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    id: "q5",
    question: "Why are most destinations unlinked?",
    answer:
      "A destination is linked only once it has a governed route. Dashed destinations are shown so the relationship is visible, without implying a reviewed page exists behind them.",
  },
  {
    id: "q6",
    question: "Does a capability being listed mean it works in our market?",
    answer:
      "No. Listing a capability describes what it governs, not where it is available. Market availability is capability-scoped and owned by Supported Countries and Jurisdiction Availability.",
  },
  {
    id: "q7",
    question: "Which page is the Global Billing hub?",
    answer:
      "Global Billing is the hub. This overview orients you across its capabilities and routes each question to the page that owns the answer.",
  },
  {
    id: "q8",
    question: "Where are the guides?",
    answer:
      "Under the Guidance domain in the capability map: the Global Billing Guide, Multi-Entity Guide, Tax Compliance Guide and the downloadable checklist.",
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
    <div className="self-start rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
      <div className="divide-y divide-[#edf0f4]">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className="px-5 py-5 sm:px-6">
              <button
                type="button"
                onClick={() => onToggle(faq.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 text-left transition"
              >
                <span className="text-xs font-bold text-[#091127] sm:text-[14px]">
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
                <div className="mt-3 text-xs leading-relaxed text-[#5d7192] sm:text-[13px]">
                  <p className="!m-0 !leading-relaxed !text-[#5d7192]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function GlobalCapabilitiesFaqSection() {
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
          eyebrow="Global capabilities FAQ"
          title={
            <>
              Direct answers about the scope of this{" "}
              <br className="hidden lg:inline" />
              page.
            </>
          }
          subtitle="Several explain why the obvious summary is missing."
        />

        <div className="mt-8 grid w-full max-w-[1184px] grid-cols-1 gap-6 sm:mt-10 lg:grid-cols-2">
          <FaqColumn faqs={leftFaqs} openId={openLeft} onToggle={toggleLeft} />
          <FaqColumn faqs={rightFaqs} openId={openRight} onToggle={toggleRight} />
        </div>
      </div>
    </section>
  );
}
