"use client";

import React, { useState } from "react";

const leftFaqs = [
  {
    question: "What does Localized Documents mean?",
    answer:
      "Supported language, locale, formatting and template controls for approved billing surfaces. It does not automatically mean local legal compliance.",
  },
  {
    question: "Which languages are supported?",
    answer:
      "Supported languages depend on the configured localization resources and approved document surfaces.",
  },
  {
    question: "Which countries are supported?",
    answer:
      "Country support depends on the supported localization, formatting, tax and document requirements for each market.",
  },
  {
    question:
      "Can an invoice use a different language without changing currency?",
    answer:
      "Yes. Document language and currency can be controlled independently where the configured billing and localization rules allow it.",
  },
  {
    question: "Can each entity use a different template or language?",
    answer:
      "Yes. Templates and languages can be scoped by entity, subject to the required permissions and localization governance rules.",
  },
  {
    question: "Does changing language change old invoices?",
    answer:
      "No. Issued documents retain their historical language and evidence snapshot. A later language change affects eligible future documents.",
  },
];

const rightFaqs = [
  {
    question: "Are translations legally certified?",
    answer:
      "Localized Documents does not automatically mean a translation is legally certified. Certification requirements depend on the relevant jurisdiction and use case.",
  },
  {
    question: "Can AI translate documents automatically?",
    answer:
      "Automated translation may be used where approved, but controlled content, review requirements and localization governance still apply.",
  },
  {
    question: "Does Zoiko Billing support e-invoicing formats?",
    answer:
      "Supported e-invoicing formats depend on the configured document and integration capabilities for the relevant market.",
  },
  {
    question: "Can I customize document text?",
    answer:
      "Yes, approved document text can be customized within the controlled template, permissions and localization governance workflow.",
  },
  {
    question: "How does this work with currency?",
    answer:
      "Language and currency are separate document attributes. Currency follows the billing and transaction configuration while language follows localization settings.",
  },
  {
    question: "How do we control who can publish templates?",
    answer:
      "Publishing requires the appropriate release permission and completion of all required approvals.",
  },
];

function FAQColumn({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div
      className="
        w-full
        flex-1
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
          <div
            key={item.question}
            className={
              index !== items.length - 1
                ? "border-b border-[#edf0f4]"
                : ""
            }
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="
                flex
                w-full
                items-center
                justify-between
                gap-4
                px-5
                py-5
                text-left

                sm:px-5
                sm:py-6
              "
              aria-expanded={isOpen}
            >
              <span
                className="
                  text-sm
                  font-semibold
                  leading-6
                  text-[#091127]
                "
              >
                {item.question}
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
                  bg-[#f5f7fa]
                  text-sm
                  font-semibold
                  leading-5
                  text-[#7890b2]
                  transition-transform
                  ${isOpen ? "rotate-45" : ""}
                `}
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
                    leading-6
                    text-[#5d7192]
                  "
                >
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function LocalizedDocumentsFAQ() {
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
              Direct answers about localized
              <br className="hidden sm:block" />
              documents.
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
              Evaluating this never requires uploading real invoices, tax
              documents, customer addresses, identifiers, payment instructions,
              legal notices or confidential translations.
            </p>
          </div>

          {/* FAQ COLUMNS */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-5
              pt-2

              lg:flex-row
            "
          >
            <FAQColumn items={leftFaqs} />
            <FAQColumn items={rightFaqs} />
          </div>
        </div>
      </div>
    </section>
  );
}