"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "What rate applies to our transaction?",
    answer:
      "No rate or rate table appears anywhere on this page. Rate information would require an approved source and current verification, and neither is established here — it belongs to approved tax sources and qualified advisors.",
  },
  {
    question: "Is this product or service taxable?",
    answer:
      "This page does not determine whether a product or service is taxable or exempt. Taxability requires governed tax rules, an applicable jurisdiction and qualified interpretation from an approved source.",
  },
  {
    question: "Does Zoiko Billing calculate indirect tax?",
    answer:
      "This page makes no claim that Zoiko Billing calculates or determines indirect tax. Tax calculation and taxability determination require governed rules and an approved product or tax source.",
  },
  {
    question: "Are we registered or over a threshold somewhere?",
    answer:
      "This page does not determine registration obligations, nexus or thresholds. Those conclusions depend on jurisdiction-specific rules, current evidence and qualified tax advice.",
  },
];

const rightFaqs = [
  {
    question: "Do you handle filing or remittance?",
    answer:
      "No filing, remittance support or filing deadline is provided here. Those requirements should be handled through approved compliance and tax destinations with current jurisdiction-specific information.",
  },
  {
    question: "Which countries does this cover?",
    answer:
      "This page does not make country-support or jurisdiction-availability claims. For current availability, use the approved Jurisdiction Availability destination.",
  },
  {
    question: "What if sources disagree?",
    answer:
      "Conflicting sources should not be resolved by this page. Compare source authority, effective dates, currentness and supersession, then route the issue to the appropriate qualified tax specialist or governing authority.",
  },
  {
    question: "Can we rely on a context record for configuration?",
    answer:
      "A context record can provide orientation and supporting evidence for configuration, but it is not itself a tax determination. Configuration should use an approved and current resolved decision with the appropriate authority and evidence.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[#edf0f4] last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="
          flex
          min-h-20
          w-full
          items-center
          justify-between
          gap-4
          px-5
          py-5
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
          {question}
        </span>

        <span
          className={`
            flex
            size-5
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

      {isOpen && (
        <div className="px-5 pb-5">
          <p className="!m-0 text-sm font-normal leading-5 text-[#5d7192]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function IndirectTaxFaq() {
  const [openFaq, setOpenFaq] = useState("left-0");

  const toggleFaq = (id: string) => {
    setOpenFaq((current) => (current === id ? "" : id));
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
            gap-6

            sm:gap-8

            md:gap-11
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[1000px]
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
                Indirect Tax FAQ
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
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
              Direct answers, and nearly all of them
              <br className="hidden sm:block" />
              route out.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-1
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              This is a page where the useful answer is usually the name of
              someone else&apos;s authority.
            </p>
          </div>

          {/* FAQ COLUMNS */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-4

              lg:flex-row
              lg:gap-5
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
                shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]

                lg:flex-1
              "
            >
              {leftFaqs.map((faq, index) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === `left-${index}`}
                  onClick={() => toggleFaq(`left-${index}`)}
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
                shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]

                lg:flex-1
              "
            >
              {rightFaqs.map((faq, index) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === `right-${index}`}
                  onClick={() => toggleFaq(`right-${index}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}