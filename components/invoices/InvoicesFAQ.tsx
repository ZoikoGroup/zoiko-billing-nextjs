"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is the difference between an invoice and a credit note?",
    answer:
      "An invoice is the billing document that states what a customer owes for a defined supply, with its own number, dates, lines, tax context and total. A credit note is a separate issued document that reduces the amount owed on an identified invoice or billing context. The credit note does not replace or rewrite the invoice — both documents remain, cross-referenced, so the original and the correction are each visible.",
  },
  {
    question: "Can an issued invoice be edited?",
    answer:
      "Issued documents are treated as accountable records. Instead of silently rewriting an issued invoice, supported correction paths such as credit notes, voids or cancellations are used according to the configured workflow and applicable rules.",
  },
  {
    question: "How are invoice numbers assigned?",
    answer:
      "Invoice numbers are assigned from the configured numbering series for the relevant issuer, document type and context. Availability and numbering behaviour depend on the configured billing setup.",
  },
  {
    question: "Can documents require approval before issue?",
    answer:
      "Yes. Where approval is configured, a document can be validated and routed for approval before it becomes issued. The approval decision and applicable version remain part of the document's evidence.",
  },
  {
    question: "How is delivery status tracked?",
    answer:
      "Delivery uses distinct states such as queued, rendering, ready, sent, delivered where verified, failed, bounced, rejected and unknown. A sent state does not by itself prove delivery or receipt.",
  },
  {
    question: "Does Zoiko Billing support electronic invoicing?",
    answer:
      "Electronic invoicing is supported only where the relevant capability and jurisdiction are confirmed in the current availability configuration. Support should not be assumed solely from the country or document language.",
  },
  {
    question: "Does a credit note create a refund?",
    answer:
      "No. A credit note changes the billing relationship or amount owed. A refund is an actual movement of money back to the customer and is handled through payment workflows.",
  },
  {
    question: "Can I use Invoices & Credit Notes without Zoiko One?",
    answer:
      "Yes. Zoiko Billing can remain independently deployable. Zoiko One handoffs and shared context are available where those integrations are enabled and configured.",
  },
];

export default function InvoicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full bg-[#f5f7f7]">
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
          lg:py-24
          xl:px-20
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
            gap-9
            px-0
            lg:px-12
          "
        >
          {/* Header */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-8
              lg:flex-row
              lg:items-end
              lg:gap-16
            "
          >
            {/* Left */}
            <div
              className="
                flex
                w-full
                flex-1
                flex-col
                items-start
                gap-5
                pt-2.5
                pb-2
                lg:pb-6
              "
            >
              <div className="flex items-center gap-3">
                <span
                  className="
                    h-0.5
                    w-5
                    shrink-0
                    rounded-full
                    bg-gradient-to-r
                    from-[#27c7d9]
                    to-[#4f8bd9]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    leading-4
                    tracking-[0.14em]
                    text-[#49758f]
                    sm:text-xs
                  "
                >
                  Questions
                </span>
              </div>

              <h2
                className="
                  !m-0
                  max-w-[638px]
                  text-[34px]
                  font-medium
                  leading-[1.15]
                  tracking-[-0.035em]
                  text-[#08294a]
                  sm:text-[40px]
                  md:text-[44px]
                  lg:text-[48px]
                "
              >
                Direct answers about billing documents.
              </h2>
            </div>

            {/* Right */}
            <div className="w-full max-w-[529px] flex-1">
              <p
                className="
                  !m-0
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#526c82]
                  sm:text-base
                  sm:leading-8
                "
              >
                Every answer is rendered on the page and works without
                JavaScript.
              </p>
            </div>
          </div>

          {/* FAQ List */}
          <div className="w-full max-w-[920px]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`
                    border-b border-zinc-200
                    ${index === 0 ? "border-t" : ""}
                  `}
                >
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
                      gap-5
                      px-0.5
                      py-5
                      text-left
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-7
                        text-[#08294a]
                        sm:text-base
                      "
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        ${
                          isOpen
                            ? "bg-[#4389b5] text-white outline-[#4389b5]"
                            : "text-[#526c82] outline-zinc-200"
                        }
                        outline
                        outline-1
                        outline-offset-[-1px]
                      `}
                    >
                      <span className="text-sm font-semibold leading-6">
                        {isOpen ? "−" : "+"}
                      </span>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="max-w-[736px] px-0.5 pb-6">
                      <p
                        className="
                          !m-0
                          text-sm
                          font-normal
                          leading-7
                          text-[#526c82]
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