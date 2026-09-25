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
    <div className="border-b border-[#edf0f4] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="
          flex
          min-h-20
          w-full
          items-center
          justify-between
          gap-6
          px-5
          py-4
          text-left
        "
        aria-expanded={isOpen}
      >
        <span
          className="
            text-sm
            font-bold
            leading-6
            text-[#091127]
          "
        >
          {faq.question}
        </span>

        <span
          className={`
            flex
            h-6
            w-6
            shrink-0
            items-center
            justify-center
            rounded-md
            border
            border-[#dfe5ee]
            bg-[#f7f8fa]
            text-sm
            font-semibold
            leading-6
            text-[#5d7192]
            transition-transform
            duration-200
            ${isOpen ? "rotate-45" : ""}
          `}
        >
          +
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5">
          <p
            className="
              m-0
              text-sm
              font-normal
              leading-6
              text-[#5d7192]
            "
          >
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
    <div
      className="
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-[#dfe5ee]
        bg-white
        shadow-[0_6px_20px_rgba(15,23,42,0.04)]
      "
    >
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
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-5
          py-14
          sm:px-8
          sm:py-16
          md:px-10
          md:py-20
          lg:px-14
          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8
            sm:gap-10
            md:gap-11
          "
        >
          {/* Intro */}
          <div
            className="
              flex
              w-full
              max-w-[800px]
              flex-col
              items-center
              gap-3
              text-center
            "
          >
            {/* Eyebrow */}
            <div className="flex h-4 items-center justify-center gap-3">
              <span className="h-px w-4 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.14em]
                  text-[#7890b2]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Glossary FAQ
              </span>

              <span className="h-px w-4 bg-[#7890b2] opacity-40" />
            </div>

            {/* Heading */}
            <h2
              className="
                !m-0
                w-full
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#091127]
                sm:!text-[34px]
                md:!text-[36px]
                lg:!text-[40px]
              "
            >
              Direct answers about the definitions themselves.
            </h2>

            {/* Description */}
            <p
              className="
                !m-0
                w-full
                max-w-[720px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              A public definition never requires an account or a sales
              conversation.
            </p>
          </div>

          {/* FAQ Cards */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              items-start
              gap-3
              lg:grid-cols-2
              lg:gap-5
            "
          >
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
      </div>
    </section>
  );
}