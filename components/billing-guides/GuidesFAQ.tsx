"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "What are Zoiko Billing Guides?",
    answer:
      "Educational guides explaining billing concepts and workflows across records, invoicing, receivables, payments, reconciliation, balances, reporting, integrations and implementation.",
  },
  {
    question: "Are guides the same as product documentation?",
    answer:
      "No. Guides explain concepts and workflows, while product documentation is the authoritative source for current product behavior and technical details.",
  },
  {
    question: "Do guides give accounting, tax or legal advice?",
    answer:
      "No. Guides are educational resources and do not replace professional accounting, tax or legal advice.",
  },
  {
    question: "How do I know a guide is current?",
    answer:
      "Each guide includes freshness information and review details. Guides that become outdated are reviewed, replaced, archived or withdrawn.",
  },
];

const rightFaqs = [
  {
    question: "What happens when a guide becomes outdated?",
    answer:
      "An outdated guide is no longer newly featured and may be replaced, archived or withdrawn depending on the severity of the change.",
  },
  {
    question: "Are the examples real?",
    answer:
      "Examples are clearly identified as product-accurate, conceptual or synthetic so readers can understand their level of authority.",
  },
  {
    question: "Where do I get technical API detail?",
    answer:
      "Technical API details belong in the Developers documentation, which remains the authoritative source for implementation details.",
  },
  {
    question: "I have a problem with my account — can a guide help?",
    answer:
      "Guides can explain general concepts and safe checks, but account-specific problems should be handled through Help and Support.",
  },
];

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#edf0f4] last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-4
          px-5
          py-5
          text-left
          transition-colors
          duration-150
          hover:bg-[#f7f8fa]
        "
        aria-expanded={open}
      >
        <span
          className="
            text-sm
            font-bold
            leading-6
            text-[#091127]
          "
        >
          {question}
        </span>

        <span
          className="
            flex
            h-6
            w-6
            shrink-0
            items-center
            justify-center
            rounded-md
            border
            border-[#dfe5ee]
            bg-[#f7f8fa]
            text-sm
            font-semibold
            leading-5
            text-[#5d7192]
          "
          aria-hidden="true"
        >
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
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
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

const GuidesFAQ = () => {
  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
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
              max-w-[800px]
              flex-col
              items-center
              gap-3
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
                  tracking-[0.14em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Billing Guides FAQ
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
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
              Direct answers about what a guide is for.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[720px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Guides are never gated behind a lead form.
            </p>
          </div>

          {/* FAQ GRID */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              items-start
              gap-5

              lg:grid-cols-2
              lg:gap-6
            "
          >
            {/* LEFT FAQ CARD */}
            <div
              className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_6px_20px_rgba(15,23,42,0.04)]
              "
            >
              {leftFaqs.map((faq) => (
                <FaqItem key={faq.question} {...faq} />
              ))}
            </div>

            {/* RIGHT FAQ CARD */}
            <div
              className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_6px_20px_rgba(15,23,42,0.04)]
              "
            >
              {rightFaqs.map((faq) => (
                <FaqItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidesFAQ;