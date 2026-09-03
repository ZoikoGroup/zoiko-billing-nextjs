"use client";

import React, { useState } from "react";

const leftFaqs = [
  {
    question: "Is this only an AR tool?",
    answer:
      "No. It combines customer records, billing documents, balances, payments and reconciliation, roles, workflows and reporting around Finance and AR jobs. Product depth lives on the individual capability pages.",
  },
  {
    question: "Does it collect debt for us?",
    answer:
      "It supports configured reminders and operational workflows, but collection decisions and sensitive customer exceptions remain subject to your configured policies and human authority.",
  },
  {
    question: "Can we automate reminders?",
    answer:
      "Yes, where the configured workflow and production capability support it. The current record state is checked before a reminder is sent.",
  },
  {
    question: "How are outstanding balances calculated?",
    answer:
      "Outstanding balances trace to invoice-level open amounts and the underlying billing, payment, allocation and adjustment records.",
  },
];

const rightFaqs = [
  {
    question: "Can it reconcile payments?",
    answer:
      "Yes, where supported by the configured workflow and integration. Payment allocation and reconciliation remain governed actions with retained evidence.",
  },
  {
    question: "Can we integrate accounting, ERP, CRM or banks?",
    answer:
      "Approved integrations can support governed handoffs. Availability depends on the plan, provider, jurisdiction and configuration.",
  },
  {
    question: "Does it forecast cash?",
    answer:
      "Reporting can expose governed billing and receivables data, but forecasting capability depends on the specific product capability and configuration.",
  },
  {
    question: "Can auditors see who changed an invoice or adjustment?",
    answer:
      "Material billing and AR actions retain history and evidence, including actor, role, source and relevant state changes where applicable.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on the commercial path, plan and required capabilities. See Pricing & Plans for the available options.",
  },
];

function FaqItem({
  question,
  answer,
  open,
  onClick,
}: {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`
        border-b
        border-[#edf0f4]
        last:border-b-0
        ${open ? "bg-[#fafbfc]" : "bg-white"}
      `}
    >
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        className="
          flex
          min-h-20
          w-full
          items-center
          justify-between
          gap-5
          px-5
          py-5
          text-left

          sm:px-6
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
            size-6
            shrink-0
            items-center
            justify-center
            rounded-lg
            border
            border-[#dfe5ee]
            bg-white
            text-base
            font-normal
            leading-5
            text-[#5d7192]
            transition-transform
            duration-200
            ${open ? "rotate-45" : ""}
          `}
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5 sm:px-6">
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

export default function FinanceFAQ() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (question: string) => {
    setOpenFaq((current) => (current === question ? null : question));
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
            items-start
            gap-3.5
          "
        >
          {/* EYEBROW */}
          <div className="flex items-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#7890b2]

                sm:text-xs
                sm:tracking-[0.18em]
              "
            >
              Fit, FAQ &amp; procurement
            </span>
          </div>

          {/* HEADING */}
          <div className="w-full">
            <h2
              className="
                !m-0
                w-full
                max-w-[900px]
                !text-[30px]
                !font-bold
                !leading-[1.2]
                !tracking-[-0.025em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              Questions Finance and AR teams ask first.
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="w-full max-w-[686px]">
            <p
              className="
                !m-0
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Where a capability depends on approval or availability, the
              answer says so instead of implying it.
            </p>
          </div>

          {/* FAQ COLUMNS */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-5
              pt-3.5
              pb-2

              lg:flex-row
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

                lg:flex-1
              "
            >
              {leftFaqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  open={openFaq === faq.question}
                  onClick={() => toggleFaq(faq.question)}
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

                lg:flex-1
              "
            >
              {rightFaqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  open={openFaq === faq.question}
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