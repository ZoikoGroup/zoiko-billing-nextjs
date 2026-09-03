"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is payment reconciliation?",
    answer:
      "In Zoiko Billing it means connecting observed payment evidence to the right billing records. Payment events are captured from approved sources, their provider states are normalized while the originals are preserved, candidate matches are identified with explicit evidence, and accepted matches become allocations that update receivable positions. Anything that cannot be confidently allocated becomes a visible, owned exception. It is reconciliation against your billing record — not bank reconciliation and not an accounting close.",
  },
  {
    question: "What is the difference between received and settled?",
    answer:
      "Received means the payment event has been observed by Zoiko Billing from an approved source. Settled means the provider or bank has reported the funds as settled. These states remain separate because a payment can be received before it is settled.",
  },
  {
    question: "How are payments matched to invoices?",
    answer:
      "Payments are matched using explicit evidence such as payment references, customer context, amount, currency, dates and source information. Matches inside approved thresholds can be applied automatically. Lower-confidence or ambiguous matches remain visible for review.",
  },
  {
    question: "Can one payment cover multiple invoices?",
    answer:
      "Yes, where the configured allocation model supports it. A single payment can be allocated across multiple eligible billing documents while preserving the payment itself and recording each allocation relationship separately.",
  },
  {
    question: "What happens to unmatched or overpaid amounts?",
    answer:
      "They remain visible as exceptions or unapplied funds. An unmatched payment is not silently allocated, and an overpayment is not treated as revenue or free credit without an explicit policy decision.",
  },
  {
    question: "How are reversals and refunds handled?",
    answer:
      "Reversals, returns and refunds are recorded as corrective events linked to the original payment relationship. The original evidence remains available, while the corrective event records its own source, reason, state and downstream effect.",
  },
  {
    question: "Does reconciliation update accounting automatically?",
    answer:
      "No. Payment reconciliation and accounting close are separate responsibilities. Where an approved accounting integration exists, posting states can be exchanged or displayed, but accounting ownership remains with the connected accounting system.",
  },
  {
    question: "Can I use Payments & Reconciliation without Zoiko One?",
    answer:
      "Yes. Zoiko Billing can operate independently. Zoiko One participation is used only where an approved cross-product handoff or customer context is enabled.",
  },
];

export default function PaymentsFAQ() {
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
            gap-10

            sm:gap-12

            md:gap-14
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[780px]
              flex-col
              items-center
              gap-4
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
                max-w-[700px]
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
              Direct answers about payments and reconciliation.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[700px]
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

          {/* FAQ */}
          <div className="w-full max-w-[920px] rounded-2xl border border-[#dfe5ee] bg-white px-5 sm:px-7">
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
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="
                      flex
                      min-h-16
                      w-full
                      items-center
                      justify-between
                      gap-6
                      px-0
                      py-5
                      text-left
                    "
                  >
                    <span
                      className="
                        flex-1
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
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-sm
                        font-semibold
                        leading-6
                        transition-all
                        duration-200
                        ${
                          isOpen
                            ? "bg-[#091127] text-white"
                            : "border border-[#dfe5ee] bg-white text-[#7890b2]"
                        }
                      `}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`
                      grid
                      transition-all
                      duration-300
                      ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] pb-6 opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="
                          !m-0
                          max-w-[735px]
                          text-sm
                          font-normal
                          leading-7
                          text-[#5d7192]
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}