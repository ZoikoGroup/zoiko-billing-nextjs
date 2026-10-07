"use client";

import { useState } from "react";

interface Faq {
  question: string;
  answer?: React.ReactNode;
}

const leftFaqs: Faq[] = [
  {
    question: "Is this the Zoiko Billing pricing page?",
    answer: (
      <>
        No. This is a governance model for how prices in multiple currencies
        should be structured and sourced. Zoiko Billing&apos;s own commercial
        terms live on Pricing, and no plan price appears here.
      </>
    ),
  },
  {
    question: "If a currency is enabled, is there a price in it?",
    answer:
      "Not necessarily. Currency availability does not establish that a commercial price exists for that currency.",
  },
  {
    question: "Do you convert prices automatically?",
    answer:
      "No. This page does not perform FX conversion or imply that displayed amounts are automatically converted.",
  },
  {
    question: "Can I pay in the currency a price is shown in?",
    answer:
      "Not necessarily. A displayed currency does not establish payment acceptance or settlement support.",
  },
];

const rightFaqs: Faq[] = [
  {
    question: "Why are all the price values hidden?",
    answer:
      "Because this page describes governance and provenance rather than publishing commercial price values.",
  },
  {
    question: "What happens when two sources disagree on a price?",
    answer:
      "The conflicting sources and context should be exposed, and authoritative display should be blocked rather than choosing a value automatically.",
  },
  {
    question: "Does a price shown in a currency mean you operate in that market?",
    answer:
      "No. A currency label or displayed price does not prove market availability, jurisdiction support, or operational coverage.",
  },
  {
    question: "Is the price tax-inclusive or exclusive?",
    answer:
      "This page does not determine tax treatment. Tax treatment belongs to the appropriate tax and compliance sources.",
  },
];

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: Faq;
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
        >
          +
        </span>
      </button>

      {isOpen && faq.answer && (
        <div className="px-5 pb-5">
          <p
            className="
              !m-0
              text-sm
              font-normal
              leading-6
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

export default function MultiCurrencyPricingFaq() {
  const [openFaq, setOpenFaq] = useState<string | null>(
    leftFaqs[0].question
  );

  const handleToggle = (question: string) => {
    setOpenFaq((current) =>
      current === question ? null : question
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
                Multi-Currency Pricing FAQ
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
                pb-[0.69px]
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
              Direct answers about what a
              <br className="hidden sm:block" /> displayed price means.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-[3px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Most of these separate two things a price appears to say at once.
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
            {/* LEFT COLUMN */}
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
              {leftFaqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  faq={faq}
                  isOpen={openFaq === faq.question}
                  onToggle={() => handleToggle(faq.question)}
                />
              ))}
            </div>

            {/* RIGHT COLUMN */}
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
              {rightFaqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  faq={faq}
                  isOpen={openFaq === faq.question}
                  onToggle={() => handleToggle(faq.question)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}