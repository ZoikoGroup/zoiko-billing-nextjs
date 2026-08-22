"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Can Zoiko Billing support my country?",
    answer: (
      <>
        Check{" "}
        <span className="font-semibold text-blue-600">
          Jurisdiction Availability
        </span>
        . Support is never inferred from language, currency or the website
        locale you are viewing.
      </>
    ),
  },
  {
    question: "Can I bill in multiple currencies?",
    answer:
      "Multi-currency billing depends on the configured currency context and supported capabilities. Currency support does not by itself mean foreign-exchange execution or settlement.",
  },
  {
    question: "Can I manage multiple entities?",
    answer:
      "Yes, where multi-entity billing is supported. Entity-separated billing operations do not by themselves provide consolidated accounting, intercompany accounting or statutory reporting.",
  },
  {
    question: "Can invoices be localized?",
    answer:
      "Localized documents can be supported by approved language, locale, template and jurisdiction configuration. Translation alone does not establish legal compliance.",
  },
  {
    question: "Can different teams manage different entities?",
    answer:
      "Access is determined from identity, role, entity scope, action, object, workflow state, purpose and sensitivity, and effective period. A role alone does not grant broad financial permissions.",
  },
  {
    question: "Does Zoiko Billing handle global tax compliance?",
    answer:
      "Tax compliance should be verified through the applicable jurisdiction and authoritative tax configuration. Billing capability should not be interpreted as a blanket global tax-compliance claim.",
  },
  {
    question: "Does Zoiko Billing convert currencies in real time?",
    answer:
      "Currency presentation and billing are distinct from FX execution. Any conversion depends on an authoritative source, method, timestamp, pair, rate type and applicable configuration.",
  },
  {
    question: "Does language support mean local customer support?",
    answer:
      "No. Supported language is a separate capability from local customer support, support hours, availability or legal establishment.",
  },
  {
    question: "Can it work with Zoiko One?",
    answer:
      "Integration availability depends on the applicable integration and source-authority configuration. Each object and field can have its own direction and authority.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on the applicable commercial configuration and scope. Use the current pricing or sales route rather than inferring cost from country, currency or feature availability.",
  },
];

export default function BillingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const leftFaqs = faqs.slice(0, 5);
  const rightFaqs = faqs.slice(5);

  return (
    <section className="w-full px-5 py-14 sm:px-8 lg:px-12 xl:px-24">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center">

        {/* ================= HEADER ================= */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2">

          {/* Eyebrow */}
          <div className="relative h-4 w-56 shrink-0">
            <div className="absolute left-0 top-[8.3px] h-px w-4 bg-color-azure-60 opacity-40" />

            <div className="absolute left-[28px] top-[-1px] w-40 text-center text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Decision guide &amp; FAQ
            </div>

            <div className="absolute left-[201.59px] top-[8.3px] h-px w-4 bg-color-azure-60 opacity-40" />
          </div>

          {/* Heading */}
          <div className="flex w-full justify-center">
            <h2
              className="
                m-0
                w-full
                max-w-[700px]
                text-center
                text-[32px]
                font-extrabold
                leading-[36px]
                tracking-[-0.4px]
                text-color-azure-11-2
              "
            >
              Direct answers, with the authoritative route for each.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[687px] pt-[3.11px]">
            <p className="m-0 text-center text-base font-normal leading-7 text-color-azure-44-3">
              Every answer names the destination that actually owns the fact.
            </p>
          </div>
        </div>

        {/* ================= FAQ COLUMNS ================= */}
        <div className="mt-10 grid w-full grid-cols-1 gap-5 lg:grid-cols-2">

          {/* ================= LEFT COLUMN ================= */}
          <div className="w-full overflow-hidden rounded-2xl border border-color-grey-92-4 bg-color-white-solid shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)]">
            {leftFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-color-grey-95-10 last:border-b-0"
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="
                      flex
                      min-h-[64px]
                      w-full
                      items-center
                      justify-between
                      gap-4
                      px-5
                      py-4
                      text-left
                    "
                  >
                    <span className="text-sm font-semibold leading-6 text-color-azure-11-2">
                      {faq.question}
                    </span>

                    <span
                      className={`
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        bg-color-grey-97-4
                        text-sm
                        font-semibold
                        leading-5
                        text-color-azure-44-3
                        transition-transform
                        duration-200
                        ${isOpen ? "rotate-45" : ""}
                      `}
                    >
                      +
                    </span>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div className="px-5 pb-5">
                      <p className="m-0 text-sm font-normal leading-5 text-color-azure-44-3">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="w-full overflow-hidden rounded-2xl border border-color-grey-92-4 bg-color-white-solid shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)]">
            {rightFaqs.map((faq, index) => {
              const actualIndex = index + 5;
              const isOpen = openIndex === actualIndex;

              return (
                <div
                  key={faq.question}
                  className="border-b border-color-grey-95-10 last:border-b-0"
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(actualIndex)}
                    aria-expanded={isOpen}
                    className="
                      flex
                      min-h-[64px]
                      w-full
                      items-center
                      justify-between
                      gap-4
                      px-5
                      py-4
                      text-left
                    "
                  >
                    <span className="text-sm font-semibold leading-6 text-color-azure-11-2">
                      {faq.question}
                    </span>

                    <span
                      className={`
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        bg-color-grey-97-4
                        text-sm
                        font-semibold
                        leading-5
                        text-color-azure-44-3
                        transition-transform
                        duration-200
                        ${isOpen ? "rotate-45" : ""}
                      `}
                    >
                      +
                    </span>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div className="px-5 pb-5">
                      <p className="m-0 text-sm font-normal leading-5 text-color-azure-44-3">
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
    </section>
  );
}