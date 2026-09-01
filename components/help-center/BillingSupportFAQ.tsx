"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer?: React.ReactNode;
};

const leftFaqs: Faq[] = [
  {
    question: "Is this for invoices I send to my customers?",
    answer: (
      <>
        No. That is product use — Help Center and Documentation cover
        creating, correcting and reconciling customer invoices. Billing
        Support covers billing on your own Zoiko account.{" "}
        <span className="font-semibold text-[#2563eb]">Use the resolver</span>
      </>
    ),
  },
  {
    question: "What should I never put in this form?",
    answer:
      "Do not include full card or bank details, passwords, secrets, or unnecessary tax, personal, or customer data.",
  },
  {
    question: "Do I need to sign in?",
    answer:
      "Sign-in may be required where authenticated support is needed. The public fallback collects only the approved minimum matching information.",
  },
  {
    question: "How quickly will I get a response?",
    answer:
      "Response times are governed by Support Policy. This page does not publish a response-time commitment.",
  },
];

const rightFaqs: Faq[] = [
  {
    question: 'Does selecting "refund" mean I get one?',
    answer:
      "No. Selecting a topic does not establish eligibility or entitlement. Refund and credit decisions follow the applicable operational process.",
  },
  {
    question: "Can support change my payment method for me?",
    answer:
      "Payment method changes are handled through the approved secure account-control flow where one exists.",
  },
  {
    question: "Can support get me into my account?",
    answer:
      "No. Account access issues must be resolved through the Account Access process. Billing Support does not bypass authentication or identity controls.",
  },
  {
    question: "What happens to files I attach?",
    answer:
      "Attachments are handled according to the evidence and attachment policy. Files remain pending until required safety checks pass.",
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
    <div className="border-b border-[#edf0f4] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="
          flex
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

      {isOpen && faq.answer && (
        <div className="px-5 pb-5">
          <p className="!m-0 text-sm font-normal leading-5 text-[#5d7192]">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function BillingSupportFAQ() {
  const [openFaq, setOpenFaq] = useState<string | null>(
    leftFaqs[0].question
  );

  const toggleFaq = (question: string) => {
    setOpenFaq((current) =>
      current === question ? null : question
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
                Billing Support FAQ
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
              Direct answers before you submit.
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
              Nothing here states a response time — Support Policy owns that.
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
                  faq={faq}
                  isOpen={openFaq === faq.question}
                  onToggle={() => toggleFaq(faq.question)}
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