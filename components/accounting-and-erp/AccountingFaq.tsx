"use client";

import { useState } from "react";
import Link from "next/link";

const leftFaqs = [
  {
    question: "Which accounting or ERP systems are supported?",
    answer: (
      <>
        Use the current registry on this page and the{" "}
        <Link
          href="/integrations"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Integrations Directory
        </Link>
        . No system names or counts are fabricated.
      </>
    ),
  },
  {
    question: "Does Zoiko Billing replace our accounting software?",
    answer:
      "No. Zoiko Billing manages approved billing operations and governed handoffs; the accounting or ERP system remains authoritative for its native accounting records.",
  },
  {
    question: "Does invoice export create a journal?",
    answer:
      "Not automatically. A journal is only represented when the target connector explicitly supports the capability and provides the required authoritative evidence.",
  },
  {
    question: "Does Zoiko Billing recognize revenue?",
    answer:
      "No. Revenue recognition remains within the applicable accounting policy and authoritative accounting system.",
  },
  {
    question: "Can data sync both ways?",
    answer:
      "Direction is defined per registered object and action. There is no generic bidirectional synchronization assumption.",
  },
  {
    question: "Can you map our chart of accounts?",
    answer:
      "Account-code mapping can be supported where the connector and approved product policy explicitly provide it. Accounting interpretation is not inferred automatically.",
  },
];

const rightFaqs = [
  {
    question: "What happens if the accounting period is closed?",
    answer:
      "The closed-period state is preserved. The authorized target accounting treatment determines the appropriate correction or handoff rather than hidden backdating.",
  },
  {
    question: "Can payments be sent to the ERP?",
    answer:
      "Approved payment and allocation context can be handed off where the target connector supports those objects and actions.",
  },
  {
    question: "Can it consolidate multiple entities?",
    answer:
      "No. Entity mapping does not create financial consolidation. Each entity and its accounting authority remain distinct.",
  },
  {
    question: "Can it handle taxes?",
    answer:
      "Approved tax values and governed tax-code mappings can be passed where supported. Zoiko Billing does not claim tax calculation, filing, or compliance authority.",
  },
  {
    question: "Where does bank matching live?",
    answer:
      "Banking and reconciliation remain authoritative for bank transactions and bank matching. An accounting integration does not replace that authority.",
  },
  {
    question: "Can I build another connector?",
    answer:
      "Yes, where the integration model and available interfaces support it. New connectors should preserve registered mappings, permissions, target semantics, and evidence boundaries.",
  },
];

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

function FaqCard({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
              aria-expanded={isOpen}
              className="
                flex
                min-h-20
                w-full
                items-center
                justify-between
                gap-5
                px-5
                py-3.5
                text-left

                sm:px-6
                sm:py-4
              "
            >
              <span
                className="
                  min-w-0
                  flex-1
                  text-sm
                  font-semibold
                  leading-5
                  text-[#091127]

                  sm:text-sm
                  sm:leading-6
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
              <div
                className="
                  px-5
                  pb-5
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]

                  sm:px-6
                  sm:pb-6
                "
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function AccountingFaq() {
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
              Direct answers about accounting
          
              connections.
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
              No public evaluation form should request accounting credentials,
              chart-of-accounts exports, journals, general-ledger data, tax
              returns, bank files, customer ledgers, production ERP dumps or
              confidential financial statements.
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
            <FaqCard items={leftFaqs} />
            <FaqCard items={rightFaqs} />
          </div>
        </div>
      </div>
    </section>
  );
}