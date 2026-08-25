"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "Which countries are supported?",
    answer: (
      <>
        Use the lookup — status is scope-specific and current, and it varies
        by capability rather than by country alone.{" "}
        <span className="font-semibold text-[#2563EB]">
          Check a jurisdiction
        </span>
      </>
    ),
  },
  {
    question: "What does Available mean?",
    answer:
      "Available means the current public registry confirms support for the requested scope and capability.",
  },
  {
    question: "What does Limited availability mean?",
    answer:
      "Limited availability means support exists with defined restrictions, conditions, or scope boundaries.",
  },
  {
    question: "What does Partner-supported mean?",
    answer:
      "Partner-supported means part of the capability depends on an approved partner or provider and its availability.",
  },
  {
    question: "When will a Planned country launch?",
    answer:
      "Planned indicates intent only. No launch date, quarter, wait time, or guaranteed roadmap should be inferred.",
  },
];

const rightFaqs = [
  {
    question: "Does Available mean tax compliant?",
    answer:
      "No. Availability describes the published service capability and does not by itself establish tax compliance.",
  },
  {
    question: "Does a country determine currency?",
    answer:
      "No. Currency support can depend on the billing capability, entity, account configuration, and supported payment context.",
  },
  {
    question: "Does a country determine language?",
    answer:
      "No. Language availability can be independent of jurisdiction and may vary by product or capability.",
  },
  {
    question: "Can different entities have different availability?",
    answer:
      "Yes. Availability can vary by entity, capability, provider, commercial scope, or operational conditions.",
  },
  {
    question: "Can I sign up if my market is Not available?",
    answer:
      "Not necessarily. A Not available state means there is no current offering for that scope unless an approved route is explicitly provided.",
  },
];

type Faq = {
  question: string;
  answer: React.ReactNode;
};

function FaqItem({
  question,
  answer,
  open,
  onClick,
}: {
  question: string;
  answer: React.ReactNode;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[#EEF0F2] last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
      >
        <span className="min-w-0 text-sm font-semibold leading-6 text-[#102A43]">
          {question}
        </span>

        <span
          aria-hidden="true"
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#F3F5F7] text-sm font-semibold leading-5 text-[#60758A] transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-4 pb-4 sm:px-5 sm:pb-5">
          <p className="text-sm font-normal leading-6 text-[#60758A]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

function FaqColumn({
  items,
  openIndex,
  setOpenIndex,
}: {
  items: Faq[];
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
}) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-[#E1E5E9] bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)] sm:rounded-2xl">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            open={isOpen}
            onClick={() => setOpenIndex(isOpen ? null : index)}
          />
        );
      })}
    </div>
  );
}

export default function AvailabilityFaq() {
  const [leftOpen, setLeftOpen] = useState<number | null>(0);
  const [rightOpen, setRightOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F7F8FA] px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-7 sm:gap-10">
        {/* Heading */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-1 text-center">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-4 shrink-0 bg-[#4387A8]/40" />

            <span className="text-center text-[9px] font-bold uppercase leading-4 tracking-[0.12em] text-[#4387A8] sm:text-xs sm:tracking-[0.2em]">
              Decision guide &amp; FAQ
            </span>

            <span className="h-px w-4 shrink-0 bg-[#4387A8]/40" />
          </div>

          {/* Heading */}
          <h2 className="w-full text-center text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#102A43] sm:text-[36px] lg:text-[42px]">
            Direct answers about availability.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[720px] text-center text-sm font-normal leading-6 text-[#60758A] sm:text-base sm:leading-7">
            You can read current public status without giving an email,
            company name, employee count, budget, tax identifier, customer data
            or confidential expansion plans.
          </p>
        </div>

        {/* FAQ Columns */}
        <div className="flex w-full flex-col gap-4 pt-1 lg:flex-row lg:items-start lg:gap-5">
          {/* Left */}
          <div className="w-full min-w-0 lg:flex-1">
            <FaqColumn
              items={leftFaqs}
              openIndex={leftOpen}
              setOpenIndex={setLeftOpen}
            />
          </div>

          {/* Right */}
          <div className="w-full min-w-0 lg:flex-1">
            <FaqColumn
              items={rightFaqs}
              openIndex={rightOpen}
              setOpenIndex={setRightOpen}
            />
          </div>
        </div>
      </div>
    </section>
  );
}