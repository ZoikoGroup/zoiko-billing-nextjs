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
          {/* ================= SECTION INTRO ================= */}
          <div
            className="
              flex
              w-full
              max-w-[662px]
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
                Decision guide &amp; FAQ
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
              Direct answers, with the authoritative route for each.
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
              Every answer names the destination that actually owns the fact.
            </p>
          </div>

          {/* ================= FAQ TABLE ================= */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* ================= DESKTOP ================= */}
            <div className="hidden md:grid md:grid-cols-2">
              {/* LEFT COLUMN */}
              <div className="border-r border-[#dfe5ee]">
                {leftFaqs.map((faq, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={faq.question}
                      className={
                        index !== leftFaqs.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    >
                      {/* QUESTION */}
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
                        <span className="text-sm font-semibold leading-5 text-[#091127]">
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
                            bg-[#f7f8fa]
                            text-sm
                            font-semibold
                            leading-5
                            text-[#5d7192]
                            transition-transform
                            duration-200
                            ${isOpen ? "rotate-45" : ""}
                          `}
                        >
                          +
                        </span>
                      </button>

                      {/* ANSWER */}
                      {isOpen && (
                        <div className="px-5 pb-5">
                          <p className="!m-0 text-sm font-normal leading-6 text-[#5d7192]">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* RIGHT COLUMN */}
              <div>
                {rightFaqs.map((faq, index) => {
                  const actualIndex = index + 5;
                  const isOpen = openIndex === actualIndex;

                  return (
                    <div
                      key={faq.question}
                      className={
                        index !== rightFaqs.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    >
                      {/* QUESTION */}
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
                        <span className="text-sm font-semibold leading-5 text-[#091127]">
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
                            bg-[#f7f8fa]
                            text-sm
                            font-semibold
                            leading-5
                            text-[#5d7192]
                            transition-transform
                            duration-200
                            ${isOpen ? "rotate-45" : ""}
                          `}
                        >
                          +
                        </span>
                      </button>

                      {/* ANSWER */}
                      {isOpen && (
                        <div className="px-5 pb-5">
                          <p className="!m-0 text-sm font-normal leading-6 text-[#5d7192]">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ================= MOBILE / SMALL TABLET ================= */}
            <div className="flex flex-col md:hidden">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className={
                      index !== faqs.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  >
                    {/* QUESTION */}
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
                      <span className="text-sm font-semibold leading-5 text-[#091127]">
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
                          bg-[#f7f8fa]
                          text-sm
                          font-semibold
                          leading-5
                          text-[#5d7192]
                          transition-transform
                          duration-200
                          ${isOpen ? "rotate-45" : ""}
                        `}
                      >
                        +
                      </span>
                    </button>

                    {/* ANSWER */}
                    {isOpen && (
                      <div className="px-5 pb-5">
                        <p className="!m-0 text-sm font-normal leading-6 text-[#5d7192]">
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