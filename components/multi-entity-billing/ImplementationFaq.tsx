"use client";

import Image from "next/image";
import { useState } from "react";

const leftFaqs = [
  {
    question: "Does Multi-Entity Billing consolidate accounts?",
    answer:
      "No general statutory or general-ledger consolidation claim is made. It provides entity-separated billing, and may provide operational cross-entity visibility where supported.",
  },
  {
    question: "Can different teams manage different entities?",
    answer:
      "Yes. Access can be scoped by identity, role, entity, action, object or field, workflow state, purpose, effective period and policy conditions.",
  },
  {
    question: "Can one customer belong to multiple entities?",
    answer:
      "Yes. A shared customer reference can be visible across entities while preserving entity-specific billing relationships, profiles, terms and balances.",
  },
  {
    question: "Can each entity use different currencies?",
    answer:
      "Yes. Currency capability and billing currency are resolved at the entity and customer context level according to approved Multi-Currency rules.",
  },
  {
    question: "Can each entity have different invoice formats or languages?",
    answer:
      "Yes. Issuer, template, document series, language and locale can be resolved according to entity-specific configuration and localized document rules.",
  },
];

const rightFaqs = [
  {
    question: "Can entities use different payment providers?",
    answer:
      "Yes. Payment providers and merchant accounts can be mapped per entity and operation without assuming one global provider.",
  },
  {
    question: "Does this handle intercompany accounting or transfer pricing?",
    answer:
      "No. Multi-Entity Billing does not by itself constitute an intercompany accounting or transfer-pricing system.",
  },
  {
    question: "Which entities and countries are available?",
    answer:
      "Availability depends on configured entity capabilities, jurisdiction availability, supported currencies, providers and applicable product rules.",
  },
  {
    question: "Can it connect to our ERP or Zoiko One?",
    answer:
      "Yes, where supported. Integrations use explicit entity, object and field mappings with source, direction, freshness and conflict visibility.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on your required entities, capabilities, integrations and operating scope. Contact the team for a configuration-specific quote.",
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
    <div className="border-b border-[#edf0f3] last:border-b-0">
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
          transition
          hover:bg-[#fafbfc]
        "
      >
        <span
          className="
            min-w-0
            text-sm
            font-semibold
            leading-6
            text-slate-900
          "
        >
          {question}
        </span>

        <span
          className="
            flex
            h-5
            w-5
            shrink-0
            items-center
            justify-center
            rounded-md
            bg-[#f2f4f7]
            text-sm
            font-semibold
            leading-none
            text-[#5d7192]
          "
        >
          {isOpen ? "−" : "+"}
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
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ImplementationFaq() {
  const [openFaq, setOpenFaq] = useState<string | null>(
    leftFaqs[0].question
  );

  const toggleFaq = (question: string) => {
    setOpenFaq((current) =>
      current === question ? null : question
    );
  };

  return (
    <section className="w-full overflow-hidden bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-5
          py-12

          sm:px-8
          sm:py-14

          md:px-10
          md:py-16

          lg:px-14
          lg:py-20

          xl:px-24
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-9

            sm:gap-10

            lg:gap-11
          "
        >
          {/* HEADER */}
          <div
            className="
              flex
              w-full
              max-w-[1000px]
              flex-col
              items-center
              gap-3
              pt-2
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-blue-600 opacity-40" />

              <span
                className="
                  text-center
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-blue-600

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Implementation, decision guide &amp; FAQ
              </span>

              <span className="h-px w-4 shrink-0 bg-blue-600 opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
                text-center
                text-[30px]
                font-extrabold
                leading-[1.12]
                tracking-[-0.035em]
                text-slate-900

                sm:text-[36px]

                md:text-[40px]

                lg:text-4xl
                lg:leading-10
              "
            >
              Nine stages, from discovery to
              <br className="hidden sm:block" />
              disconnect.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-center
                text-sm
                font-normal
                leading-6
                text-[#5d7192]

                sm:text-[15px]
                sm:leading-7

                md:text-base
              "
            >
              Evaluating this never requires uploading entity registers, tax
              identifiers, bank data, customer lists, invoices or confidential
              accounting exports.
            </p>
          </div>

          {/* IMAGE */}
          <div
            className="
              relative
              w-full
              max-w-[1184px]
              overflow-hidden
              rounded-2xl
              border
              border-[#e1e5eb]
              bg-white
              pt-5
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            <div className="relative aspect-[1184/583] w-full">
              <Image
                src="/images/multi-entity-billing/implementation.png"
                alt="Multi-Entity Billing implementation stages"
                fill
                priority
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 1023px) 90vw,
                  1184px
                "
                className="object-cover"
              />
            </div>
          </div>

          {/* FAQ */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-5

              lg:flex-row
            "
          >
            {/* LEFT FAQ CARD */}
            <div
              className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#e1e5eb]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                lg:flex-1
              "
            >
              {leftFaqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === faq.question}
                  onClick={() => toggleFaq(faq.question)}
                />
              ))}
            </div>

            {/* RIGHT FAQ CARD */}
            <div
              className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#e1e5eb]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                lg:flex-1
              "
            >
              {rightFaqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === faq.question}
                  onClick={() => toggleFaq(faq.question)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}