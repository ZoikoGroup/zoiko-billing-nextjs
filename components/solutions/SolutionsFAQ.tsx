"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: React.ReactNode;
};

const leftFaqs: FAQ[] = [
  {
    question: "Does choosing a solution change what I get?",
    answer: (
      <>
        No. A solution path is a way of finding relevant reading. What you get
        is determined by your plan, contract, jurisdiction and configuration —
        not by the label you arrived through.
      </>
    ),
  },
  {
    question: "Will this reduce our outstanding balances?",
    answer: (
      <>
        This page explains solution paths and relevant capabilities. It does
        not change balances or perform account-level reconciliation.
      </>
    ),
  },
  {
    question: "Do you specialize in my industry?",
    answer: (
      <>
        Solution paths help you find capabilities based on the problem you are
        solving. Industry-specific requirements depend on your configuration,
        jurisdiction and use case.
      </>
    ),
  },
  {
    question: "Is there a solution finder?",
    answer: (
      <>
        The solution paths on this page are designed to help you navigate by
        capability, integration job, API area, lifecycle concern or readiness
        stage.
      </>
    ),
  },
];

const rightFaqs: FAQ[] = [
  {
    question: "Which plan includes the capability on this path?",
    answer: (
      <>
        Plan availability depends on the specific capability and your
        configuration. Check the relevant pricing and product documentation
        for the current availability.
      </>
    ),
  },
  {
    question: "Can you support our entities in every country we operate in?",
    answer: (
      <>
        Availability can vary by jurisdiction, entity type and configuration.
        Review the relevant regional and compliance documentation before
        relying on a particular capability.
      </>
    ),
  },
  {
    question: "Why are there no customer results on this page?",
    answer: (
      <>
        This page is designed for discovery and routing. Customer examples and
        outcomes are presented in the relevant case studies and product
        materials rather than being used as a substitute for solution
        documentation.
      </>
    ),
  },
  {
    question: "I'm an existing customer and something is broken.",
    answer: (
      <>
        This is not the right path for an active support issue. Please use the
        support channel so the issue can be investigated against your account
        and configuration.
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
          min-h-20
          w-full
          items-center
          justify-between
          gap-4
          px-5
          py-4
          text-left
          transition-colors
          hover:bg-[#fafbfc]
        "
      >
        <span
          className="
            min-w-0
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
            bg-[#f1f3f6]
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

export default function SolutionsFAQ() {
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
                Solutions FAQ
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
              Direct answers about what a solution
            
              path is.
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
              Most answers redirect an expectation this page cannot meet.
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

              md:flex-row
              md:items-start
            "
          >
            {/* LEFT COLUMN */}
            <div className="w-full min-w-0 flex-1">
              <FAQColumn faqs={leftFaqs} />
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full min-w-0 flex-1">
              <FAQColumn faqs={rightFaqs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}