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
    <div className="w-full flex-1 overflow-hidden rounded-2xl border border-color-grey-92-4 bg-color-white-solid shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className={
              index !== items.length - 1
                ? "border-b border-color-grey-95-10"
                : ""
            }
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold leading-6 text-color-azure-11-2">
                {item.question}
              </span>

              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-color-grey-97-4 text-sm font-semibold leading-5 text-color-azure-44-3 transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5">
                <p className="text-sm font-normal leading-5 text-color-azure-44-3">
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
    <section className="w-full bg-color-grey-97-4 px-6 py-12 sm:px-8 md:px-12 lg:px-24 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-2">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-4 bg-color-azure-60 opacity-40" />

            <span className="whitespace-nowrap text-center text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Decision guide &amp; FAQ
            </span>

            <div className="h-px w-4 bg-color-azure-60 opacity-40" />
          </div>

          <h2 className="text-center text-3xl font-[1000] leading-9 text-color-azure-11-2 sm:text-4xl sm:leading-10">
            Direct answers about localized
            <br className="hidden sm:block" />
            documents.
          </h2>

          <p className="max-w-[687px] text-center text-sm font-normal leading-6 text-color-azure-44-3 sm:text-base sm:leading-7">
            Evaluating this never requires uploading real invoices, tax
            documents, customer addresses, identifiers, payment instructions,
            legal notices or confidential translations.
          </p>
        </div>

        <div className="flex w-full flex-col gap-5 pt-5 lg:flex-row">
          <FAQColumn items={leftFaqs} />
          <FAQColumn items={rightFaqs} />
        </div>
      </div>
    </section>
  );
}