"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is a charge?",
    answer:
      "A charge is a governed amount component that increases what a customer owes for a product, service, usage or other supported billable item. It carries an explicit type and direction, a source, a currency, an effective period and the calculation evidence behind its value. A charge is not an invoice — it becomes a document line only once it is approved and applied.",
  },
  {
    question:
      "What is the difference between a discount, credit and adjustment?",
    answer:
      "A discount reduces an amount according to an applicable pricing or eligibility rule. A credit is a governed negative amount that can correct or reduce a customer balance. An adjustment changes an amount or its underlying context through a controlled action. They are distinct concepts and should not be treated as interchangeable.",
  },
  {
    question: "Can charges require approval?",
    answer:
      "Yes. Approval can be required based on configured amount, percentage, charge type, source, legal entity, risk class or other governed thresholds. Approval applies to the specific amount and context that was reviewed.",
  },
  {
    question: "How are taxes calculated?",
    answer:
      "Tax treatment depends on the configured entity, market, jurisdiction, tax rules and available evidence. Tax calculation is performed only where the required configuration and verified support exist; the system does not assume tax treatment when required context is unavailable.",
  },
  {
    question: "Can amounts come from integrations?",
    answer:
      "Yes. Approved integrations can provide quantity, rate, eligibility, contract, usage or other supported context. The integration boundary determines what the connector can supply or receive, and source ownership and idempotency are preserved.",
  },
  {
    question: "Can an issued amount be changed?",
    answer:
      "Issued amounts should not be silently overwritten. Corrections, credits or other governed adjustments are used where supported so that the original issued state and the subsequent correction remain attributable.",
  },
  {
    question: "Does a credit create a refund?",
    answer:
      "No. A credit changes the governed balance or document context, but it does not by itself guarantee or initiate a refund. Refund processing is a separate state and depends on the applicable payment and refund workflow.",
  },
  {
    question: "Can I use Charges & Adjustments without Zoiko One?",
    answer:
      "Yes. Zoiko Billing remains independently deployable. Zoiko One participation is used only where approved shared identity, source records or cross-product handoffs are enabled for the relevant configuration.",
  },
];

export default function ChargesAdjustmentsFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
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
          {/* =========================================================
              SECTION INTRO
          ========================================================= */}
          <div
            className="
              flex
              w-full
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
                Questions
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
              Direct answers about amounts.
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
              Every answer is rendered on the page and works without
              JavaScript.
            </p>
          </div>

          {/* =========================================================
              FAQ CONTAINER
          ========================================================= */}
          <div
            className="
              w-full
              max-w-[920px]
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`
                    w-full
                    ${
                      index !== faqs.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* QUESTION */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="
                      flex
                      min-h-[68px]
                      w-full
                      items-center
                      justify-between
                      gap-5
                      px-5
                      py-4
                      text-left
                      outline-none
                      transition-colors
                      hover:bg-[#fafbfc]
                      focus-visible:ring-2
                      focus-visible:ring-inset
                      focus-visible:ring-[#4b91ff]

                      sm:px-6
                      sm:py-5
                    "
                  >
                    <span
                      className="
                        pr-2
                        text-sm
                        font-semibold
                        leading-6
                        text-[#091127]

                        sm:text-base
                        sm:leading-7
                      "
                    >
                      {faq.question}
                    </span>

                    {/* PLUS / MINUS */}
                    <span
                      className={`
                        flex
                        size-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-sm
                        font-semibold
                        leading-6
                        transition-all
                        ${
                          isOpen
                            ? "bg-[#4b91ff] text-white outline outline-1 outline-[#4b91ff]"
                            : "bg-white text-[#5d7192] outline outline-1 outline-[#dfe5ee]"
                        }
                      `}
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* ANSWER */}
                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      className="
                        px-5
                        pb-5
                        sm:px-6
                        sm:pb-6
                      "
                    >
                      <p
                        className="
                          !m-0
                          w-full
                          max-w-[735px]
                          text-sm
                          font-normal
                          leading-6
                          text-[#5d7192]

                          sm:text-base
                          sm:leading-7
                        "
                      >
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