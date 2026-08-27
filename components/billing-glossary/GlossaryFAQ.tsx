"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const leftFaqs: FAQ[] = [
  {
    question: "Are these definitions authoritative for my organization?",
    answer:
      "They are plain-language educational definitions with explicit scope. Accounting, tax, legal and regulatory obligations remain with your qualified professionals and applicable authorities.",
  },
  {
    question: "Why do some terms show a scope note?",
    answer:
      "A scope note is shown when a term can have different meanings depending on context, jurisdiction, profession, provider, or product usage.",
  },
  {
    question: "What if a term means something different in Zoiko Billing?",
    answer:
      "The glossary distinguishes general terminology from approved Zoiko Billing concepts and links to the relevant product documentation when the meaning is product-specific.",
  },
  {
    question: "What happens when I search a term that does not exist?",
    answer:
      "No definition is invented to fill the gap. The glossary simply indicates that no eligible canonical term was found.",
  },
];

const rightFaqs: FAQ[] = [
  {
    question: "How current are the definitions?",
    answer:
      "Definitions include a visible review date and are reviewed according to their applicable governance requirements.",
  },
  {
    question: "Do acronyms have their own pages?",
    answer:
      "Only when an acronym represents a distinct canonical meaning. Otherwise, it resolves to the appropriate canonical term.",
  },
  {
    question: "What happens if a term is renamed?",
    answer:
      "The previous term is marked as replaced and links prominently to the current canonical term.",
  },
  {
    question: "Can I get technical detail from a definition?",
    answer:
      "The glossary provides business-facing meaning only. Technical contracts, APIs, schemas, and implementation details remain in Developers documentation.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-color-grey-95-10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex min-h-20 w-full items-center justify-between gap-6 px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold leading-6 text-color-azure-11-2">
          {faq.question}
        </span>

        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-color-grey-97-4 text-sm font-semibold leading-6 text-color-azure-44-3 transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5">
          <p className="text-sm font-normal leading-5 text-color-azure-44-3">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

function FAQCard({
  faqs,
  openIndex,
  setOpenIndex,
}: {
  faqs: FAQ[];
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
}) {
  return (
    <div className="w-full overflow-hidden rounded-2xl bg-color-white-solid shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-color-grey-92-4">
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.question}
          faq={faq}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
}

export default function GlossaryFAQ() {
  const [leftOpen, setLeftOpen] = useState<number | null>(0);
  const [rightOpen, setRightOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-color-grey-97-4 px-4 py-16 sm:px-6 lg:px-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-2 text-center">
          {/* Eyebrow */}
          <div className="flex h-4 items-center justify-center">
            <span className="mr-3 h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />

            <span className="whitespace-nowrap text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Glossary FAQ
            </span>

            <span className="ml-3 h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-extrabold leading-10 text-color-azure-11-2 sm:text-4xl">
            Direct answers about the definitions
            themselves.
          </h2>

          {/* Description */}
          <p className="max-w-[687px] pt-[3px] text-base font-normal leading-7 text-color-azure-44-3">
            A public definition never requires an account or a sales
            conversation.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="grid w-full grid-cols-1 items-start gap-5 lg:grid-cols-2">
          <FAQCard
            faqs={leftFaqs}
            openIndex={leftOpen}
            setOpenIndex={setLeftOpen}
          />

          <FAQCard
            faqs={rightFaqs}
            openIndex={rightOpen}
            setOpenIndex={setRightOpen}
          />
        </div>
      </div>
    </section>
  );
}