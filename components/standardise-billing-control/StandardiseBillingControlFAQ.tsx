"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Why doesn't the diagnostic give us a score?",
    answer:
      "A score implies the page assessed your organization against a benchmark. The diagnostic only reads five multiple-choice answers. It returns a priority order instead, with no grade, colour rating, or comparison to other companies.",
  },
  {
    question: "Are these five dimensions Zoiko Billing modules?",
    answer:
      "No. The five dimensions describe the operating model around billing control: policy, ownership, approval, exception handling, and evidence. They are not a list of Zoiko Billing modules.",
  },
  {
    question: "Does standardizing control make us compliant?",
    answer:
      "No. Standardizing control can make responsibilities, approvals, exceptions, and evidence easier to review, but it does not by itself establish compliance. Compliance depends on the requirements that apply to your organization and how those requirements are actually implemented.",
  },
  {
    question: "We have no open exceptions. Is that good?",
    answer:
      "Not necessarily. A zero-exception state can mean that controls are operating as intended, but it can also mean exceptions are not being identified or recorded. The important question is whether exceptions are surfaced, owned, reviewed, and resolved consistently.",
  },
  {
    question: "Is the change history immutable?",
    answer:
      "This framework does not claim that the underlying change history is immutable. It focuses on reviewability, ownership, evidence, and correction semantics. Whether records are technically immutable depends on the product implementation and its underlying controls.",
  },
  {
    question: "Why are the role names generic?",
    answer:
      "The role names are intentionally generic so the operating model can be mapped to different organizations and team structures. They describe responsibilities and boundaries rather than prescribing specific job titles.",
  },
  {
    question: "Can we export the control history?",
    answer:
      "The framework does not assert a specific export capability. Export behavior belongs to the product's actual record and reporting capabilities, so this page should not infer an export feature from the control model alone.",
  },
  {
    question: "What if a review target has passed?",
    answer:
      "A passed review target should remain visible as part of the control history. The operating model should make the missed or completed review attributable, preserve the relevant evidence, and provide a clear path for follow-up or correction.",
  },
];

export default function StandardiseBillingControlFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 sm:gap-10 md:gap-11">

          {/* Intro */}
          <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span className="text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-[#7890b2] sm:text-xs sm:tracking-[0.18em]">
                Standardise Billing Control FAQ
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            <h2 className="!m-0 w-full max-w-[662px] !text-[30px] !font-extrabold !leading-[1.2] !tracking-[-0.035em] !text-[#091127] sm:!text-[34px] md:!text-[36px] lg:!text-[40px]">
              Direct answers about the framework.
            </h2>

            <p className="!m-0 w-full max-w-[687px] text-[15px] font-normal leading-7 text-[#5d7192] sm:text-base">
              Several explain what the diagnostic deliberately does not
              produce.
            </p>
          </div>

          {/* FAQ columns */}
          <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">

            {/* Left column */}
            <div className="overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
              {faqs.slice(0, 4).map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-[#e8ebf0] last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    >
                      <span className="text-sm font-semibold leading-6 text-[#091127]">
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#f7f8fa] text-sm font-semibold leading-5 text-[#5d7192] transition-transform duration-200 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5">
                        <p className="m-0 text-sm font-normal leading-6 text-[#5d7192]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right column */}
            <div className="overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
              {faqs.slice(4, 8).map((faq, index) => {
                const actualIndex = index + 4;
                const isOpen = openIndex === actualIndex;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-[#e8ebf0] last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(actualIndex)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    >
                      <span className="text-sm font-semibold leading-6 text-[#091127]">
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#f7f8fa] text-sm font-semibold leading-5 text-[#5d7192] transition-transform duration-200 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5">
                        <p className="m-0 text-sm font-normal leading-6 text-[#5d7192]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}