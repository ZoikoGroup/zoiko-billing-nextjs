"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer?: string;
};

const leftFaqs: Faq[] = [
  {
    question: "How long does an implementation take?",
    answer:
      "This page publishes no default duration. Timeline depends on scope, data volume and quality, integrations, decision speed and your own operational constraints — a stated figure would be wrong for most projects.",
  },
  {
    question: "Does Zoiko run the implementation for us?",
  },
  {
    question: "Is there a migration tool for our existing data?",
  },
  {
    question: "Why is there no readiness score?",
  },
];

const rightFaqs: Faq[] = [
  {
    question: "What is the rollback procedure?",
  },
  {
    question: "How much historical data should we bring?",
  },
  {
    question: "Who signs off go-live?",
  },
  {
    question: "Where do legal and tax obligations fit?",
  },
];

function FaqItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: Faq;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[#edf0f4] last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        className="
          flex min-h-20 w-full items-center justify-between
          gap-4 px-5 py-4 text-left
        "
        aria-expanded={isOpen}
      >
        <span
          className="
            text-sm font-semibold leading-6
            text-[#091127]
          "
        >
          {faq.question}
        </span>

        <span
          className="
            flex h-5 w-5 shrink-0 items-center justify-center
            rounded-md bg-[#f7f8fa]
            text-sm font-semibold leading-5 text-[#5d7192]
          "
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && faq.answer && (
        <div className="px-5 pb-5">
          <p
            className="
              !m-0 text-sm font-normal
              leading-5 text-[#5d7192]
            "
          >
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ImplementationFAQ() {
  const [openFaq, setOpenFaq] = useState<string | null>(
    leftFaqs[0].question
  );

  const toggleFaq = (question: string) => {
    setOpenFaq((current) =>
      current === question ? null : question
    );
  };

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
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
            gap-11
            px-0
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[1000px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#7890b2]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Implementation FAQ
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
                !pb-[0.69px]
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
              Direct answers about scope and
             
              support.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-[3px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              This is public guidance. Organization-specific help routes to
              Contact Support.
            </p>
          </div>

          {/* FAQ COLUMNS */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-5
              lg:flex-row
            "
          >
            {/* LEFT COLUMN */}
            <div
              className="
                min-w-0
                flex-1
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              {leftFaqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  faq={faq}
                  isOpen={openFaq === faq.question}
                  onClick={() => toggleFaq(faq.question)}
                />
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div
              className="
                min-w-0
                flex-1
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              {rightFaqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  faq={faq}
                  isOpen={openFaq === faq.question}
                  onClick={() => toggleFaq(faq.question)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}