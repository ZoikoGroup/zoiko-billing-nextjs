"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "What are Zoiko Billing Guides?",
    answer:
      "Educational guides explaining billing concepts and workflows across records, invoicing, receivables, payments, reconciliation, balances, reporting, integrations and implementation.",
  },
  {
    question: "Are guides the same as product documentation?",
    answer:
      "No. Guides explain concepts and workflows, while product documentation is the authoritative source for current product behavior and technical details.",
  },
  {
    question: "Do guides give accounting, tax or legal advice?",
    answer:
      "No. Guides are educational resources and do not replace professional accounting, tax or legal advice.",
  },
  {
    question: "How do I know a guide is current?",
    answer:
      "Each guide includes freshness information and review details. Guides that become outdated are reviewed, replaced, archived or withdrawn.",
  },
];

const rightFaqs = [
  {
    question: "What happens when a guide becomes outdated?",
    answer:
      "An outdated guide is no longer newly featured and may be replaced, archived or withdrawn depending on the severity of the change.",
  },
  {
    question: "Are the examples real?",
    answer:
      "Examples are clearly identified as product-accurate, conceptual or synthetic so readers can understand their level of authority.",
  },
  {
    question: "Where do I get technical API detail?",
    answer:
      "Technical API details belong in the Developers documentation, which remains the authoritative source for implementation details.",
  },
  {
    question: "I have a problem with my account — can a guide help?",
    answer:
      "Guides can explain general concepts and safe checks, but account-specific problems should be handled through Help and Support.",
  },
];

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-color-grey-95-10 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full px-5 py-5 flex items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="text-color-azure-11-2 text-sm font-semibold font-['Inter'] leading-6">
          {question}
        </span>

        <span className="shrink-0 size-5 bg-color-grey-97-4 rounded-md flex items-center justify-center text-color-azure-44-3 text-sm font-semibold leading-5">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5">
          <p className="text-color-azure-44-3 text-sm font-normal font-['Inter'] leading-5">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

const GuidesFAQ = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-24 py-12 sm:py-16 lg:py-20 bg-color-grey-97-4">
      <div className="w-full max-w-[1240px] mx-auto px-0 sm:px-4 lg:px-7 flex flex-col items-center gap-8 sm:gap-10 lg:gap-11">
        {/* Heading */}
        <div className="w-full max-w-[662px] pt-2 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-4 h-px opacity-40 bg-color-azure-60" />

            <span className="text-color-azure-60 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-widest whitespace-nowrap">
              Billing Guides FAQ
            </span>

            <div className="w-4 h-px opacity-40 bg-color-azure-60" />
          </div>

          <h2 className="text-center text-color-azure-11-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-8 sm:leading-9 lg:leading-10">
            Direct answers about what a guide is
            for.
          </h2>

          <p className="w-full max-w-[687px] pt-1 text-center text-color-azure-44-3 text-sm sm:text-base font-normal font-['Inter'] leading-6 sm:leading-7">
            Guides are never gated behind a lead form.
          </p>
        </div>

        {/* FAQ */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
          <div className="bg-color-white-solid rounded-2xl shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-color-grey-92-4 overflow-hidden">
            {leftFaqs.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>

          <div className="bg-color-white-solid rounded-2xl shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-color-grey-92-4 overflow-hidden">
            {rightFaqs.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidesFAQ;