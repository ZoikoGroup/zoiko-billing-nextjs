"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

const leftFaqs: Faq[] = [
  {
    question: "Is Zoiko Billing subscription-management software?",
    answer:
      "No. Zoiko Billing supports approved billing schedules, documents, changes and related workflows. Subscription lifecycle capabilities require separate product evidence and are not implied here.",
  },
  {
    question: "Can it bill recurring digital services?",
    answer:
      "Yes. Recurring digital services can be billed when the required billing schedule, service context and approved commercial rules are configured.",
  },
  {
    question: "Can it bill usage?",
    answer:
      "Yes. Usage-based billing can be supported when approved quantity data is available from a configured source and the applicable billing rules are defined.",
  },
  {
    question: "Can it bill per seat or user?",
    answer:
      "Yes. Per-seat or per-user billing can be supported when the approved customer, user or quantity source is connected and the corresponding pricing rules are configured.",
  },
  {
    question: "Does it handle trials, upgrades, downgrades or cancellations?",
    answer:
      "These lifecycle changes can be represented when supported by the connected product and approved workflow. Zoiko Billing does not independently claim ownership of subscription lifecycle decisions.",
  },
];

const rightFaqs: Faq[] = [
  {
    question: "Does it prorate automatically?",
    answer:
      "Proration depends on the configured billing rules and approved service-period changes. It should not be assumed for every billing model without confirming the applicable configuration.",
  },
  {
    question: "Does it calculate MRR, ARR or revenue recognition?",
    answer:
      "Billing records can provide the underlying commercial and service-period information needed for reporting. MRR, ARR and revenue-recognition calculations depend on the approved definitions and reporting configuration.",
  },
  {
    question: "Will an unpaid invoice suspend the customer's service?",
    answer:
      "Not automatically by default. Service suspension depends on the connected product, approved policy and configured workflow. An unpaid invoice should not be treated as universal authorization to suspend service.",
  },
  {
    question: "Can it integrate our product or CRM?",
    answer:
      "Yes, where an approved API, webhook or connector is available. Integration availability is controlled by the Integration Registry, and each route remains versioned, directional and registry-backed.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on the required billing capabilities, configuration, integrations and commercial scope. A specific price should be confirmed through the applicable Zoiko Billing pricing or sales process.",
  },
];

function FaqItem({ question, answer }: Faq) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#edf0f4] last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
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

          sm:px-6
        "
        aria-expanded={open}
      >
        <span
          className="
            text-sm
            font-semibold
            leading-6
            text-[#091127]

            sm:text-[15px]
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
            bg-[#f7f8fa]
            text-sm
            font-semibold
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

export default function BillingFaq() {
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
              max-w-[900px]
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
                Security, fit, FAQ &amp; pricing
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[900px]
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
              <span className="block">Questions about digital-service</span>

              <span className="block">billing.</span>
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
              Where a capability depends on configuration, an upstream source
              or separate approval, the answer says so.
            </p>
          </div>

          {/* FAQ CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              pt-1

              sm:gap-5
              sm:pt-2

              lg:grid-cols-2
            "
          >
            {/* LEFT FAQ CARD */}
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
                <FaqItem key={faq.question} {...faq} />
              ))}
            </div>

            {/* RIGHT FAQ CARD */}
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
                <FaqItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}