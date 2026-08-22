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
    <section className="w-full bg-[#f7f7f7] transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col items-start gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        {/* HEADER */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">

          {/* LEFT */}
          <div className="flex flex-1 flex-col items-start gap-5 pt-2.5 pb-6">

            {/* LABEL */}
            <div className="flex items-center gap-2.5">
              <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

              <span className="text-xs font-medium uppercase leading-4 tracking-wider text-blue-500 dark:text-blue-400">
                Questions
              </span>
            </div>

            {/* HEADING */}
            <h2 className="max-w-[638px] text-[40px] font-medium leading-[1.1] tracking-tight text-slate-900 sm:text-5xl sm:leading-[53.82px] dark:text-white">
              Direct answers about
              <br className="hidden sm:block" />
              payments and
              <br className="hidden sm:block" />
              reconciliation.
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="w-full max-w-[529px] flex-1">
            <p className="text-base font-normal leading-7 text-slate-600 sm:leading-8 dark:text-slate-300">
              Every answer is rendered on the page and works without
              JavaScript.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="w-full max-w-[920px]">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-zinc-200 dark:border-slate-700"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    min-h-16
                    w-full
                    items-start
                    justify-between
                    gap-6
                    px-0.5
                    py-5
                    text-left
                  "
                >
                  <span
                    className="
                      flex-1
                      text-base
                      font-semibold
                      leading-7
                      text-slate-900
                      dark:text-white
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
                          ? "bg-blue-500 text-white"
                          : "border border-zinc-200 text-slate-600 dark:border-slate-600 dark:text-slate-300"
                      }
                    `}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] pb-6 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[735px] text-sm font-normal leading-7 text-slate-600 dark:text-slate-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}