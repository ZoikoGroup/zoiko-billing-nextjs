"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

const leftFaqs: Faq[] = [
  {
    question: "What is the Zoiko Billing Resource Center?",
    answer:
      "The public discovery hub for current Zoiko Billing guides, templates, terminology, analysis, customer evidence, events, product updates, and links to authoritative product, help and documentation sources.",
  },
  {
    question: "Where should I go for product documentation?",
    answer:
      "Use the authoritative product documentation for detailed product behavior, configuration, and usage guidance.",
  },
  {
    question: "Where do I get technical API information?",
    answer:
      "Use the Developers and API documentation for API references, authentication, webhooks, SDKs, examples, and integration guidance.",
  },
];

const rightFaqs: Faq[] = [
  {
    question: "Are templates professional or legal advice?",
    answer:
      "No. Templates are operational starting points and are not legal, tax, accounting, or regulatory advice. Local requirements and professional review may still apply.",
  },
  {
    question: "How do I know a resource is current?",
    answer:
      "Check the published or reviewed date and the resource metadata. Outdated resources should not remain prominent in default or featured results.",
  },
  {
    question: "Where can I see what changed in Zoiko Billing?",
    answer:
      "Product Updates is the authoritative destination for shipped product changes. Operational incidents and security advisories are handled separately.",
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
    <div
      className={`
        border-b border-[#edf0f4]
        last:border-b-0
      `}
    >
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
            text-sm
            font-semibold
            leading-5
            transition-all
            duration-200
            ${
              isOpen
                ? "bg-[#5279b4] text-white"
                : "bg-[#f1f3f6] text-[#5d7192]"
            }
          `}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5">
          <p className="!m-0 text-sm font-normal leading-5 text-[#5d7192]">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ResourceCenterFAQ() {
  const [openFaq, setOpenFaq] = useState<string>(
    leftFaqs[0].question
  );

  const toggleFaq = (question: string) => {
    setOpenFaq((current) =>
      current === question ? "" : question
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
                Resource Center FAQ
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
              Direct answers about where things
         live.
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
              The Resource Center itself is never gated behind a lead form.
            </p>
          </div>

          {/* FAQ COLUMNS */}
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
                  onToggle={() => toggleFaq(faq.question)}
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
                  onToggle={() => toggleFaq(faq.question)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}