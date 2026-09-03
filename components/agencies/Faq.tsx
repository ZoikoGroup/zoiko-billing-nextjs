"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "Is this agency-management software?",
    answer:
      "No. This solution focuses on client billing and receivables workflows. It does not claim a complete agency-management, PSA or campaign platform.",
  },
  {
    question: "Can it bill retainers?",
    answer:
      "Yes, where the retainer model is configured and supported. Billing tracks the retainer record, its application to invoices, and the related history.",
  },
  {
    question: "Can it bill project or milestone fees?",
    answer:
      "Yes. Approved project phases or milestones can be used as the billing basis where the configured billing model supports them.",
  },
  {
    question: "Can it rebill client expenses or media costs?",
    answer:
      "Supported pass-through or reimbursable costs can be billed when they have the required source, approval and client relationship.",
  },
  {
    question: "Does it manage campaigns?",
    answer:
      "No. Campaign and media-management activity remains in the appropriate upstream system. Billing can retain approved campaign or engagement context.",
  },
];

const rightFaqs = [
  {
    question: "Does it track billable time?",
    answer:
      "Time-derived billing can use an approved upstream time source. Zoiko Billing does not replace a dedicated time-tracking system.",
  },
  {
    question: "Does it calculate profitability or ROAS?",
    answer:
      "No. Finance and media analytics remain in their appropriate systems. Billing reports focus on billing and receivables state.",
  },
  {
    question: "Can it automate reminders?",
    answer:
      "Yes, where reminder workflows are configured. Eligibility is checked against the current invoice, delivery, payment and dispute state before sending.",
  },
  {
    question: "Can it integrate CRM, project or accounting tools?",
    answer:
      "Yes, where supported integrations are configured. Source direction and authority remain explicit.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on the selected plan and configured requirements. View the pricing and plans page for the current options.",
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
        aria-expanded={open}
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
            h-5
            w-5
            shrink-0
            items-center
            justify-center
            rounded-md
            bg-[#f1f3f6]
            text-sm
            font-semibold
            leading-none
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

export default function Faq() {
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
              max-w-[1000px]
              flex-col
              items-start
              gap-3
            "
          >
            {/* EYEBROW */}
            <div className="flex h-4 items-center gap-3">
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
                Security, fit, FAQ &amp; pricing
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
              The questions agency owners and finance leads ask first.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[686px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Where a capability depends on configuration, an upstream source
              or approval, the answer says so.
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
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div
              className="
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
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}