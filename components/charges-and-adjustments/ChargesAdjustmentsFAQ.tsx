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
    <section className="w-full bg-color-grey-97-2">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-20 lg:py-24 xl:px-28">
        <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-8 px-0 lg:px-12 lg:gap-9">
          
          {/* HEADER */}
          <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-end lg:gap-16">
            
            {/* LEFT */}
            <div className="min-w-0 flex-1 pt-2 sm:pt-2.5">
              
              {/* EYEBROW */}
              <div className="mb-5 flex h-4 items-center">
                <span className="mr-2.5 h-0.5 w-5 shrink-0 rounded-sm bg-gradient-to-r from-color-cyan-42 to-color-azure-51" />

                <span className="whitespace-nowrap text-xs font-medium uppercase leading-4 tracking-wider text-color-azure-44">
                  Questions
                </span>
              </div>

              {/* HEADING */}
              <h2 className="max-w-[638px] text-[36px] font-medium leading-[1.15] tracking-[-0.02em] text-sky-950 sm:text-[42px] md:text-[46px] lg:text-5xl lg:leading-[53.82px]">
                Direct answers about
                <br className="hidden sm:block" />
                amounts.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="w-full max-w-[528px] lg:flex-1">
              <p className="text-base font-normal leading-7 text-color-azure-35 sm:leading-8">
                Every answer is rendered on the page and works without
                JavaScript.
              </p>
            </div>
          </div>

          {/* FAQ LIST */}
          <div className="w-full max-w-[920px]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={[
                    "w-full border-b border-zinc-200",
                    index === 0 ? "border-t" : "",
                  ].join(" ")}
                >
                  {/* QUESTION BUTTON */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex min-h-16 w-full items-center justify-between gap-4 px-0.5 py-5 text-left sm:gap-6"
                  >
                    <span className="pr-2 text-sm font-semibold leading-6 text-sky-950 sm:text-base sm:leading-7">
                      {faq.question}
                    </span>

                    {/* PLUS / MINUS */}
                    <span
                      className={[
                        "flex size-7 shrink-0 items-center justify-center rounded-full",
                        "text-sm font-semibold leading-6",
                        isOpen
                          ? "bg-color-azure-51 text-color-white-solid outline outline-1 outline-color-azure-51"
                          : "text-color-azure-35 outline outline-1 outline-zinc-200",
                      ].join(" ")}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* ANSWER */}
                  {isOpen && (
                    <div className="pb-6 pr-2 sm:pb-7">
                      <p className="w-full max-w-[735px] text-sm font-normal leading-6 text-color-azure-35 sm:text-base sm:leading-7">
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