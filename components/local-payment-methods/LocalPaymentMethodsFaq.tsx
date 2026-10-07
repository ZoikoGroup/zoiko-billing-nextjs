"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
  open?: boolean;
};

const leftFaqs: Faq[] = [
  {
    question: "Do you support local payment methods?",
    answer:
      "That cannot be answered as a simple yes or no. Support is specific to a method family, a market, a billing context, and a currency context, each established by a different source. Any one of those dimensions can remain unassessed while the others are settled.",
    open: true,
  },
  {
    question: "Why is no payment method named?",
    answer:
      "Because a generic method-family statement should not be read as support for a specific scheme, wallet, network, bank, or provider. Naming a specific method without the required evidence would turn an illustrative classification into a support claim.",
  },
  {
    question: "We can bill in a currency — can customers pay in it?",
    answer:
      "Not necessarily. Billing currency and customer payment-method availability are separate dimensions. A currency may be available for billing while the corresponding payment path remains unavailable, unsupported, or unassessed for a particular market.",
  },
  {
    question: "How is this different from the Local Payment page?",
    answer:
      "This page explains how local payment-method support statements are classified, qualified, and kept current. The Local Payment page describes the approved operating path itself. They answer different questions and should not be treated as interchangeable sources.",
  },
];

const rightFaqs: Faq[] = [
  {
    question: 'Does "not assessed" mean unsupported?',
    answer:
      "No. Not assessed means the available evidence is insufficient to make a support statement. It should not be interpreted as either support or non-support. A separate assessment is required before the status can be stated more definitively.",
  },
  {
    question: "Do you handle settlement or act as merchant of record?",
    answer:
      "A method-support statement does not establish settlement responsibility or merchant-of-record status. Those are separate commercial and operating questions that must be answered by the relevant contractual and operating documentation.",
  },
  {
    question: "Where are fees and processing times?",
    answer:
      "They are not established by the method-family record. Fees, settlement timing, processing times, and related commercial terms depend on the applicable operating path, provider, market, and agreement and should be taken from the source that governs those details.",
  },
  {
    question: "Why does one record show conflicting sources?",
    answer:
      "Different sources can describe different dimensions, dates, or scopes. A conflict should therefore not be resolved by choosing whichever statement is more convenient. The record should identify the relevant authority, currentness, scope, and supersession status before a support conclusion is made.",
  },
];

export default function LocalPaymentMethodsFaq() {
  const [openFaq, setOpenFaq] = useState<string | null>(
    leftFaqs.find((faq) => faq.open)?.question ?? null,
  );

  const toggleFaq = (question: string) => {
    setOpenFaq((current) => (current === question ? null : question));
  };

  const renderFaq = (faq: Faq, index: number, list: Faq[]) => {
    const isOpen = openFaq === faq.question;

    return (
      <div
        key={faq.question}
        className={`
          overflow-hidden
          ${index !== list.length - 1 ? "border-b border-[#e7eaf0]" : ""}
        `}
      >
        <button
          type="button"
          onClick={() => toggleFaq(faq.question)}
          aria-expanded={isOpen}
          className="
            flex
            min-h-20
            w-full
            items-center
            justify-between
            gap-5
            px-5
            py-4
            text-left
          "
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
            aria-hidden="true"
          >
            +
          </span>
        </button>

        {isOpen && (
          <div className="px-5 pb-5">
            <p
              className="
                !m-0
                text-sm
                font-normal
                leading-5
                text-[#5d7192]
              "
            >
              {faq.answer}
            </p>
          </div>
        )}
      </div>
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
                Local Payment Methods FAQ
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
              Direct answers about method
             
              support.
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
              Most of them explain why a yes or no would be misleading.
            </p>
          </div>

          {/* FAQ GRID */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-5

              lg:grid-cols-2
            "
          >
            {/* LEFT CARD */}
            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              {leftFaqs.map((faq, index) =>
                renderFaq(faq, index, leftFaqs),
              )}
            </div>

            {/* RIGHT CARD */}
            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              {rightFaqs.map((faq, index) =>
                renderFaq(faq, index, rightFaqs),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}