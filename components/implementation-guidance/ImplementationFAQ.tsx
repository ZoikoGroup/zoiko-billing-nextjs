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
    answer:
      "Implementation support depends on the engagement and scope. Zoiko can provide product guidance, technical documentation and integration support, but your organization remains responsible for its data, configuration, approvals and operational decisions.",
  },
  {
    question: "Is there a migration tool for our existing data?",
    answer:
      "Migration options depend on the source system, data structure and supported integration path. Existing data can be assessed and mapped against the available import or integration capabilities; unsupported migration paths should not be assumed.",
  },
  {
    question: "Why is there no readiness score?",
    answer:
      "A single readiness score would hide the factors that actually determine implementation risk. Readiness depends on data quality, integrations, ownership, controls, testing, approvals and operational processes, so these should be assessed individually.",
  },
];

const rightFaqs: Faq[] = [
  {
    question: "What is the rollback procedure?",
    answer:
      "Rollback is defined according to the affected integration, data flow and deployment change. Changes should be tested before production, with ownership, recovery steps and evidence requirements agreed before go-live rather than relying on a single universal rollback procedure.",
  },
  {
    question: "How much historical data should we bring?",
    answer:
      "Bring the historical data required for your operational, reporting, reconciliation, accounting and legal needs. The appropriate period varies by organization, so the migration scope should be agreed based on actual business and retention requirements.",
  },
  {
    question: "Who signs off go-live?",
    answer:
      "Go-live should be approved by the owners responsible for the affected operations, data, integrations and controls. The exact sign-off roles depend on your organization and implementation scope; Zoiko does not replace your internal approval process.",
  },
  {
    question: "Where do legal and tax obligations fit?",
    answer:
      "Legal, tax, accounting, banking and regulatory obligations remain with the relevant organization and its advisers. Zoiko provides product capabilities and documentation, but those obligations should be assessed and approved as part of your own implementation and go-live process.",
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
          flex
          min-h-20
          w-full
          items-center
          justify-between
          gap-4
          px-5
          py-4
          text-left
        "
        aria-expanded={isOpen}
      >
        <span
          className="
            text-sm
            font-semibold
            leading-6
            text-[#091127]
          "
        >
          {faq.question}
        </span>

        <span
          className="
            flex
            h-5
            w-5
            shrink-0
            items-center
            justify-center
            rounded-md
            bg-[#f7f8fa]
            text-sm
            font-semibold
            leading-5
            text-[#5d7192]
          "
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && faq.answer && (
        <div className="px-5 pb-5">
          <p
            className="
              !m-0
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
            gap-8

            sm:gap-10

            md:gap-11
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
              Direct answers about scope and support.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
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