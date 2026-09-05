"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: React.ReactNode;
};

const leftFaqs: FAQ[] = [
  {
    question: "Which countries do you support?",
    answer: (
      <>
        Not stated here. <strong>Jurisdiction Availability</strong> is the
        register, with scope and limits per market. No country is named as
        supported on this page without a current registry record.
      </>
    ),
  },
  {
    question: "Which currencies are supported?",
    answer: (
      <>
        Currency support is established through the current availability and
        currency registry. A currency appearing in the registry does not,
        by itself, establish market availability or legal acceptability.
      </>
    ),
  },
  {
    question: "Do you handle FX conversion?",
    answer: (
      <>
        Currency on a billing record and FX conversion are separate concerns.
        Check the applicable product and provider documentation for the
        supported conversion workflow.
      </>
    ),
  },
  {
    question: "Will your invoices be legally compliant in my country?",
    answer: (
      <>
        The page does not make a legal-compliance determination. Invoice
        capability, market availability, and local legal requirements are
        separate questions that may require confirmation from the relevant
        authority or your own advisors.
      </>
    ),
  },
];

const rightFaqs: FAQ[] = [
  {
    question: "Does multi-entity mean consolidated accounts?",
    answer: (
      <>
        No. Multi-entity billing keeps entities as distinct records with
        their own documents, balances, and controls. Consolidation is a
        separate reporting or accounting concern.
      </>
    ),
  },
  {
    question: "Do you calculate and file our taxes?",
    answer: (
      <>
        No. Tax treatment depends on facts and obligations outside the billing
        platform. The appropriate tax configuration should be confirmed with
        your own advisors and the applicable authority.
      </>
    ),
  },
  {
    question: "My country isn't listed — can I still sign up?",
    answer: (
      <>
        Not necessarily. A country not appearing in the current availability
        register should be treated as unknown or unavailable until confirmed.
        Check <strong>Jurisdiction Availability</strong> for the current
        scope.
      </>
    ),
  },
  {
    question:
      "The resolver said I need to check five things. Is that a no?",
    answer: (
      <>
        No. The resolver returns requirements and unknowns, not a verdict.
        Being asked to confirm additional conditions means that the available
        sources do not establish a definitive current state.
      </>
    ),
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
          min-h-[80px]
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
}

function FAQColumn({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      className="
        flex-1
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

export default function GlobalBillingFAQ() {
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
                Global Billing FAQ
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
              Direct answers, with the boundary
              attached.
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
              Most answers separate a capability from its availability.
            </p>
          </div>

          {/* FAQ COLUMNS */}
          <div
            className="
              flex
              w-full
              flex-col
              items-stretch
              gap-5

              lg:flex-row
            "
          >
            <FAQColumn faqs={leftFaqs} />
            <FAQColumn faqs={rightFaqs} />
          </div>
        </div>
      </div>
    </section>
  );
}