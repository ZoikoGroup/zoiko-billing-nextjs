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
    <section
      className="
        w-full
        bg-gray-100
        px-4
        py-16
        sm:px-6
        sm:py-20
        lg:px-28
        lg:py-24
        dark:bg-slate-950
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1220px]
          flex-col
          items-start
          gap-10
          sm:gap-12
          lg:px-12
        "
      >
        {/* Heading */}
        <div
          className="
            flex
            w-full
            flex-col
            justify-center
            gap-8
            lg:flex-row
            lg:items-end
            lg:gap-16
          "
        >
          {/* Left heading */}
          <div className="flex-1 pt-2.5 pb-2">
            <div className="mb-5 flex h-4 items-center gap-2.5">
              <div
                className="
                  h-0.5
                  w-5
                  rounded-xs
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                "
              />

              <div
                className="
                  text-xs
                  font-medium
                  uppercase
                  leading-4
                  tracking-wider
                  text-blue-600
                  dark:text-cyan-400
                "
              >
                Questions
              </div>
            </div>

            <h2
              className="
                max-w-[638px]
                text-4xl
                font-medium
                leading-[1.15]
                text-sky-950
                sm:text-5xl
                sm:leading-[53.82px]
                dark:text-white
              "
            >
              Direct answers about
              <br className="hidden sm:block" />
              receivables.
            </h2>
          </div>

          {/* Right description */}
          <div className="flex-1 lg:max-w-[528px]">
            <p
              className="
                text-base
                font-normal
                leading-7
                text-slate-600
                lg:leading-8
                dark:text-slate-300
              "
            >
              Every answer is rendered on the page and works without
              JavaScript.
            </p>
          </div>
        </div>

        {/* FAQ list */}
        <div className="w-full max-w-[920px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`
                  w-full
                  border-slate-200
                  dark:border-slate-700
                  ${index === 0 ? "border-t" : ""}
                  border-b
                `}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="
                    flex
                    min-h-16
                    w-full
                    items-start
                    justify-between
                    gap-4
                    px-0.5
                    py-5
                    text-left
                  "
                  aria-expanded={isOpen}
                >
                  <span
                    className="
                      pr-4
                      text-base
                      font-semibold
                      leading-7
                      text-sky-950
                      dark:text-white
                    "
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`
                      flex
                      size-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      outline
                      outline-1
                      outline-offset-[-1px]
                      ${
                        isOpen
                          ? "bg-blue-500 outline-blue-500"
                          : "outline-slate-300 dark:outline-slate-600"
                      }
                    `}
                  >
                    <span
                      className={`
                        text-sm
                        font-semibold
                        leading-6
                        ${
                          isOpen
                            ? "text-white"
                            : "text-slate-600 dark:text-slate-300"
                        }
                      `}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="max-w-[735px] px-0.5 pb-6">
                    <p
                      className="
                        text-sm
                        font-normal
                        leading-7
                        text-slate-600
                        sm:text-base
                        dark:text-slate-300
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
    </section>
  );
}