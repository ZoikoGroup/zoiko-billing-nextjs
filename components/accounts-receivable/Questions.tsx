"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What is accounts receivable?",
    answer:
      "In Zoiko Billing, accounts receivable is the operational view of what customers currently owe and what should happen about it. It connects issued documents, credits, payments and allocations into a current position, then attaches an owner, a next action, customer contact and restriction context, any dispute, hold or promise, and the evidence behind each decision. It is receivables operations — not an autonomous collections service, a credit-scoring system or a legal-enforcement process.",
  },
  {
    question: "How is an open balance calculated?",
    answer:
      "An open balance is derived from current approved receivable relationships. It starts with issued amounts, then accounts for applicable credits and verified allocated payments, while excluding drafts and unverified or unmatched payment events. The resulting amount is tied to the relevant entity, currency and calculation timestamp so the underlying documents and transactions can be checked.",
  },
  {
    question: "What is the difference between due and overdue?",
    answer:
      "A due balance is an amount that is scheduled for payment according to its agreed terms. An overdue balance has passed its applicable due date without a verified settlement. Aging is derived from the approved due date and operational rules, and it does not by itself establish legal status, collectibility or customer intent.",
  },
  {
    question: "Can reminders be automated?",
    answer:
      "Yes. Supported reminders can be automated using approved rules, customer context, communication preferences and timing controls. Before a reminder is sent, the current balance, payment state, contact preference, restrictions, disputes, holds and applicable communication rules can be checked. Configured sensitive or external communications can also require human review before sending.",
  },
  {
    question: "How are disputes handled?",
    answer:
      "A dispute places the affected balance or document into a neutral review state. The dispute records its reason and scope, owner, reviewer, supporting evidence, hold type, communication status and eventual resolution. Ordinary follow-up can be paused while the matter is reviewed, and a dispute is not treated as an admission or proof that either side is wrong.",
  },
  {
    question: "What is a promise to pay?",
    answer:
      "A promise to pay records a customer's stated intention to make a payment, together with the relevant amount, expected date, owner and supporting communication context. It does not mark an invoice as paid and does not guarantee that payment will occur. The receivable remains based on verified payment and allocation state until settlement is confirmed.",
  },
  {
    question: "How do payments update receivables?",
    answer:
      "Verified payment events can update the receivable position according to their payment state, currency and allocation. Settled and allocated payments can reduce the applicable document balance, while initiated, failed, reversed, unknown or unmatched events are treated differently. An unmatched payment does not automatically close an invoice, and an unverified payment is never treated as settled.",
  },
  {
    question: "Can I use Accounts Receivable without Zoiko One?",
    answer:
      "Yes. Zoiko Billing can operate independently where the required billing, receivable, payment and customer data sources are supported. Zoiko One can provide additional identity, customer context and cross-product handoffs where enabled, but it is not required for the core receivables operation. Available integrations and capabilities depend on the deployment and supported connector configuration.",
  },
];

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
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
              Direct answers about receivables.
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

          {/* FAQ LIST */}
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
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="
                      flex
                      min-h-[64px]
                      w-full
                      items-center
                      justify-between
                      gap-5
                      px-5
                      py-4
                      text-left
                      transition-colors
                      hover:bg-[#fafbfc]

                      sm:px-6
                      sm:py-5
                    "
                  >
                    <span
                      className="
                        pr-4
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
                        border
                        transition-colors
                        ${
                          isOpen
                            ? "border-[#7890b2] bg-[#7890b2]"
                            : "border-[#dfe5ee] bg-white"
                        }
                      `}
                    >
                      <span
                        className={`
                          text-base
                          font-medium
                          leading-none
                          ${
                            isOpen
                              ? "text-white"
                              : "text-[#5d7192]"
                          }
                        `}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </span>
                  </button>

                  {/* ANSWER */}
                  {isOpen && (
                    <div
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
                          max-w-[735px]
                          text-sm
                          font-normal
                          leading-7
                          text-[#5d7192]

                          sm:text-base
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