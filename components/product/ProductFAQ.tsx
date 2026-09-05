"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const leftFaqs: FAQ[] = [
  {
    question: "Why are invoice and payment separate records?",
    answer:
      "So that matching a payment to an obligation records a relationship rather than altering the issued document. Allocation does not rewrite the invoice — which is what lets you show later how a balance reached its current state.",
  },
  {
    question: "Does it collect overdue payments for us?",
    answer:
      "No. The product records and represents billing activity, but collection activity remains outside the product's authority.",
  },
  {
    question: "Does it handle our tax filing?",
    answer:
      "No. Tax filing is a separate responsibility. The product can provide billing and payment information, but it does not claim to file taxes on your behalf.",
  },
  {
    question: "Is delivery guaranteed?",
    answer:
      "No. Delivery status can be represented and tracked, but the product does not claim that an external delivery outcome is guaranteed.",
  },
];

const rightFaqs: FAQ[] = [
  {
    question: "Can a correction delete the original?",
    answer:
      "No. Corrections preserve the original record and establish what changed, rather than silently removing the historical document.",
  },
  {
    question: "Which capabilities are on my plan?",
    answer:
      "Capabilities depend on the plan and configuration associated with your account. The relevant plan information should be used as the source of truth.",
  },
  {
    question: "Is it the same product with Zoiko One?",
    answer:
      "No. The products may work together, but they represent distinct product experiences and responsibilities.",
  },
  {
    question: "Why does the demo view show problems?",
    answer:
      "The demo deliberately exposes failure and incomplete states so that users can see how the product treats real-world conditions instead of presenting only an ideal success path.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#edf0f4] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="
          flex
          min-h-20
          w-full
          items-center
          justify-between
          gap-4
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
}

function FAQColumn({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
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
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.question}
          faq={faq}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
}

export default function ProductFAQ() {
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
                Product FAQ
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
              Direct answers about the model.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-0.5
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Several answers explain a distinction the product deliberately
              keeps.
            </p>
          </div>

          {/* FAQ COLUMNS */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-5

              lg:flex-row
              lg:items-start
            "
          >
            {/* LEFT COLUMN */}
            <div className="w-full lg:flex-1">
              <FAQColumn faqs={leftFaqs} />
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full lg:flex-1">
              <FAQColumn faqs={rightFaqs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}