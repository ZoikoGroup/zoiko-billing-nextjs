"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "Which banks or feeds are supported?",
    answer: (
      <>
        Use the current registry and the{" "}
        <span className="font-semibold text-blue-600">
          Integrations Directory
        </span>
        . No banks, providers or counts are invented.
      </>
    ),
  },
  {
    question: "Does this use open banking?",
    answer:
      "Supported connection methods depend on the current provider registry and the exact source capability.",
  },
  {
    question: "Can Zoiko Billing initiate bank payments?",
    answer:
      "A banking connection does not automatically provide payment-initiation capability. That capability must be explicitly registered and supported.",
  },
  {
    question: "Does a matched bank transaction mean an invoice is paid?",
    answer:
      "No. A match establishes a relationship between source transaction evidence and Billing records. Payment status remains governed by the Billing record and its rules.",
  },
  {
    question: "Does reconciled mean the ledger is posted?",
    answer:
      "No. Reconciliation confirms a configured relationship between banking evidence and Billing records. Accounting posting remains a separate process.",
  },
  {
    question: "Can bank feeds be real time?",
    answer:
      "Only where the provider supports the required event or polling model. Connection health does not itself prove that source data is current.",
  },
];

const rightFaqs = [
  {
    question: "Can Zoiko see account balances?",
    answer:
      "Only where the exact connector explicitly supports balance data. Transaction access does not imply balance access.",
  },
  {
    question: "How does auto-matching work?",
    answer:
      "Matching can use configured deterministic or heuristic signals, but the underlying match basis remains inspectable and policy-controlled.",
  },
  {
    question: "What about provider payouts?",
    answer:
      "Provider settlement records can be related to bank transactions through explicit settlement evidence. A payout does not automatically equal one invoice.",
  },
  {
    question: "Can I import bank statements or files?",
    answer:
      "Approved statement or file formats can be imported where the current source capability supports them.",
  },
  {
    question: "Can this replace statutory bank reconciliation?",
    answer:
      "No. Billing reconciliation is distinct from statutory bank reconciliation, accounting close and audit sign-off.",
  },
  {
    question: "Can I build another banking connector?",
    answer:
      "Additional connectors require an approved integration path, defined source capabilities, authentication, data scope, mapping and operational support.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[#edf0f4] last:border-b-0">
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
          gap-5
          px-5
          py-5
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
          {question}
        </span>

        <span
          className={`
            flex
            size-5
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
          aria-hidden="true"
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
              leading-5
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

export default function BankingConnectionsFAQ() {
  const [openFaq, setOpenFaq] = useState("left-0");

  const toggleFaq = (id: string) => {
    setOpenFaq((current) => (current === id ? "" : id));
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
          items-start
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14
          lg:py-20

          xl:px-20
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-5
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
                !max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]
              "
            >
              Direct answers about banking
              <br className="hidden sm:block" />
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
              No public form should request bank credentials, account numbers,
              statements, transaction exports, customer payment data, banking
              consent artifacts or production secrets merely to evaluate
              compatibility.
            </p>
          </div>

          {/* FAQ COLUMNS */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-5
              pt-5

              lg:flex-row
              lg:items-start
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
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                lg:flex-1
              "
            >
              {leftFaqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === `left-${index}`}
                  onClick={() => toggleFaq(`left-${index}`)}
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
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                lg:flex-1
              "
            >
              {rightFaqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === `right-${index}`}
                  onClick={() => toggleFaq(`right-${index}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}