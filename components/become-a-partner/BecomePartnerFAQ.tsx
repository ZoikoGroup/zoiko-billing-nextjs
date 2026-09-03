"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Does submitting make me a partner?",
    answer: (
      <>
        No. A submission records that you asked to be considered. It creates no
        partnership, no approved relationship, no public listing and no portal
        access — and this page will not describe it as though it did.{" "}
        <span className="font-semibold text-[#2563eb]">See the states</span>
      </>
    ),
  },
  {
    question: "What are the partner tiers and commissions?",
    answer:
      "Partner tiers and commercial terms are owned by the Partner Program. No commission, margin or tier structure is published on this page.",
  },
  {
    question: "Am I eligible? Is my country covered?",
    answer:
      "Eligibility and territory coverage are determined through the applicable Partner Program criteria. No unsupported eligibility threshold or country list is published here.",
  },
  {
    question: "How long does review take?",
    answer:
      "No response time or review duration is published because none is source-approved. Applicant states communicate where the process stands.",
  },
  {
    question: "I built an integration — should I apply here?",
    answer:
      "No. A technical integration follows the dedicated integration review route rather than the partner application.",
  },
  {
    question: "Will you ask for a security questionnaire or tax documents?",
    answer:
      "The initial application does not collect security questionnaires, certificates or financial documents. Additional information, if required later, belongs to its own controlled workflow.",
  },
  {
    question: "We have no website. Can we still apply?",
    answer:
      "The application should provide enough business context for the review process. A website is not described as a standalone eligibility requirement here.",
  },
  {
    question: "We are already a partner. Should I reapply?",
    answer:
      "No. Existing partner relationships are managed through approved partner routes. A new application does not update an existing relationship.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[#edf0f4] last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="
          flex w-full items-center justify-between gap-6
          px-5 py-4 text-left
          transition-colors
          hover:bg-[#fafbfc]
        "
      >
        <span className="text-sm font-semibold leading-6 text-[#091127]">
          {question}
        </span>

        <span
          className={`
            flex h-5 w-5 shrink-0 items-center justify-center
            rounded-md bg-[#f7f8fa]
            text-sm font-semibold leading-5 text-[#5d7192]
            transition-transform duration-200
            ${isOpen ? "rotate-45" : ""}
          `}
        >
          +
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5">
          <p className="!m-0 text-sm leading-6 text-[#5d7192]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function BecomePartnerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const leftFaqs = faqs.slice(0, 4);
  const rightFaqs = faqs.slice(4);

  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto flex w-full max-w-[1440px]
          flex-col items-start
          px-5 py-14

          sm:px-8 sm:py-16
          md:px-10 md:py-20
          lg:px-14
          xl:px-20
        "
      >
        <div
          className="
            mx-auto flex w-full max-w-[1240px]
            flex-col items-center gap-11
            px-0

            sm:px-3
            md:px-7
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex w-full max-w-[662px]
              flex-col items-center gap-3
              pt-2 text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-xs font-bold uppercase
                  leading-4 tracking-[0.16em]
                  text-[#7890b2]
                  sm:tracking-[0.18em]
                "
              >
                Become a Partner FAQ
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0 w-full max-w-[662px]
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
              Direct answers for applicants.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0 w-full max-w-[687px]
                text-[15px] font-normal
                leading-7 text-[#5d7192]
                sm:text-base
              "
            >
              Where a figure or a timeline would be reassuring, this page says
              which source owns it.
            </p>
          </div>

          {/* FAQ GRID */}
          <div className="w-full">
            {/* DESKTOP */}
            <div className="hidden gap-5 md:grid md:grid-cols-2">
              {/* LEFT CARD */}
              <div
                className="
                  overflow-hidden rounded-2xl
                  border border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {leftFaqs.map((faq, index) => {
                  const actualIndex = index;

                  return (
                    <FAQItem
                      key={faq.question}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openIndex === actualIndex}
                      onClick={() =>
                        setOpenIndex(
                          openIndex === actualIndex ? null : actualIndex
                        )
                      }
                    />
                  );
                })}
              </div>

              {/* RIGHT CARD */}
              <div
                className="
                  overflow-hidden rounded-2xl
                  border border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {rightFaqs.map((faq, index) => {
                  const actualIndex = index + 4;

                  return (
                    <FAQItem
                      key={faq.question}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openIndex === actualIndex}
                      onClick={() =>
                        setOpenIndex(
                          openIndex === actualIndex ? null : actualIndex
                        )
                      }
                    />
                  );
                })}
              </div>
            </div>

            {/* MOBILE */}
            <div
              className="
                flex flex-col overflow-hidden rounded-2xl
                border border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                md:hidden
              "
            >
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}