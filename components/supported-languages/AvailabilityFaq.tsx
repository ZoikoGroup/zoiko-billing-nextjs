"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "Which languages does Zoiko Billing support?",
    answer: (
      <>
        Use the registry on this page and read support by exact surface. An
        unscoped language count would be misleading, so none is published.{" "}
        <span className="font-semibold text-[#7890b2]">Open the lookup</span>
      </>
    ),
  },
  {
    question: "Does one supported language work everywhere in the product?",
    answer:
      "No. Language support is scoped to the specific billing surface, document, locale, entity or jurisdiction where it has been approved.",
  },
  {
    question: "Are planned languages included?",
    answer:
      "No. Planned languages indicate intent only and are not counted as current language support.",
  },
  {
    question: "Does language support mean the country is supported?",
    answer:
      "No. Language support and jurisdiction availability are separate capabilities. A language may be supported without the related market being available.",
  },
  {
    question: "Does language support mean invoices are locally compliant?",
    answer:
      "No. Language support describes localization capability. It does not by itself establish tax, legal, regulatory or invoice compliance.",
  },
  {
    question: "Can currency and language be different?",
    answer:
      "Yes. Currency and language are independent dimensions and can be supported differently depending on the billing configuration and document surface.",
  },
];

const rightFaqs = [
  {
    question: "Can each billing entity use different languages?",
    answer:
      "Yes. Language availability can differ by billing entity, configuration, jurisdiction, document surface and other supported scope.",
  },
  {
    question: "What happens when a preferred language is unsupported?",
    answer:
      "The configured fallback policy applies. Missing or unsupported content must follow an explicit safe fallback or blocking rule rather than silently producing an unreliable result.",
  },
  {
    question: "Does Zoiko Billing use AI translation?",
    answer:
      "Language support is based on approved and governed localization resources. Automated translation does not by itself establish current supported-language status.",
  },
  {
    question: "Is right-to-left support automatic?",
    answer:
      "No. Right-to-left support requires the relevant rendering, typography, directionality and accessibility requirements to be supported and tested.",
  },
  {
    question: "Can support agents help in every document language?",
    answer:
      "Not necessarily. Support-agent language coverage is a separate operational capability from document localization support.",
  },
  {
    question: "Where do I control who publishes localized templates?",
    answer:
      "Publishing permissions are governed through the applicable entity, role and template-control configuration rather than through language preference alone.",
  },
];

function FaqItem({
  question,
  answer,
  open,
  onClick,
}: {
  question: string;
  answer: React.ReactNode;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[#edf0f4] last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        className="
          flex
          min-h-[80px]
          w-full
          items-center
          justify-between
          gap-4
          px-5
          py-4
          text-left
        "
      >
        {/* QUESTION */}
        <span
          className="
            min-w-0
            flex-1
            text-sm
            font-semibold
            leading-6
            text-[#091127]
          "
        >
          {question}
        </span>

        {/* PLUS */}
        <span
          className={`
            flex
            h-5
            w-5
            shrink-0
            items-center
            justify-center
            rounded-md
            bg-[#f3f5f7]
            text-sm
            font-semibold
            leading-5
            text-[#7890b2]
            transition-transform
            duration-200
            ${open ? "rotate-45" : ""}
          `}
        >
          +
        </span>
      </button>

      {/* ANSWER */}
      {open && (
        <div className="px-5 pb-5">
          <p className="!m-0 text-sm font-normal leading-6 text-[#5d7192]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

function FaqColumn({
  items,
  openIndex,
  setOpenIndex,
}: {
  items: typeof leftFaqs;
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
}) {
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
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            open={isOpen}
            onClick={() => setOpenIndex(isOpen ? null : index)}
          />
        );
      })}
    </div>
  );
}

export default function AvailabilityFaq() {
  const [leftOpen, setLeftOpen] = useState<number | null>(0);
  const [rightOpen, setRightOpen] = useState<number | null>(null);

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
                Decision guide &amp; FAQ
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
              Direct answers about language support.
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
              Verifying current language support never requires uploading
              customer lists, invoices, legal notices, translation memories,
              support transcripts or employee language data.
            </p>
          </div>

          {/* FAQ */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-5
              pt-2

              lg:flex-row
              lg:items-start
            "
          >
            {/* LEFT COLUMN */}
            <div className="w-full lg:flex-1">
              <FaqColumn
                items={leftFaqs}
                openIndex={leftOpen}
                setOpenIndex={setLeftOpen}
              />
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full lg:flex-1">
              <FaqColumn
                items={rightFaqs}
                openIndex={rightOpen}
                setOpenIndex={setRightOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}