"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "Where is the partner directory?",
    answer:
      "There isn't one. Displaying a company's mark requires explicit permission from that company, and an integration or a conversation is not permission. The absence is a rights position rather than a design gap.",
    open: true,
  },
  {
    question: "What tier would we join?",
    answer:
      "There is no tier assigned simply by submitting an enquiry. Any programme structure, eligibility, or commercial arrangement is determined through the applicable partner process rather than implied by an initial conversation.",
  },
  {
    question: "Does submitting an enquiry make us a partner?",
    answer:
      "No. An enquiry starts a conversation; it does not create partner status, grant rights to use Zoiko Billing marks, or establish a commercial relationship. Partnership exists only where the applicable agreement or programme terms say it does.",
  },
  {
    question:
      "We already integrate with Zoiko Billing. Are we a technology partner?",
    answer:
      "Not necessarily. An integration describes a technical relationship, while technology-partner status is a separate designation. If your relationship has been formally established under the relevant partner process, that status will be confirmed there.",
  },
];

const rightFaqs = [
  {
    question: "What should we not send in an enquiry?",
    answer:
      "Do not include passwords, authentication credentials, private keys, production secrets, unnecessary personal data, confidential customer information, or other sensitive material. Describe the requirement at a level that lets the team understand the request without exposing information that does not need to be shared.",
  },
  {
    question: "Can we say we're in discussions with you?",
    answer:
      "Only if that statement is accurate and you are permitted to make it. An enquiry by itself does not authorise public claims about a relationship, partnership, endorsement, or commercial discussion.",
  },
  {
    question: "Is there an NDA in place during review?",
    answer:
      "Submitting an enquiry does not by itself create an NDA. If confidential information needs to be exchanged under an NDA, the applicable confidentiality terms should be agreed through the appropriate process before relying on them.",
  },
  {
    question: "We already work with you — should we use this form?",
    answer:
      "Usually not. If you already have an established relationship or an active conversation, use the existing contact or account channel for that relationship. A new-enquiry form is intended for new requests and may cause an established conversation to lose its context.",
  },
];

type Faq = {
  question: string;
  answer: string;
  open?: boolean;
};

export default function PartnersFaq() {
  const [openFaq, setOpenFaq] = useState<string | null>(
    leftFaqs.find((faq) => faq.open)?.question ?? null,
  );

  const toggleFaq = (question: string) => {
    setOpenFaq((current) => (current === question ? null : question));
  };

  const renderFaq = (faq: Faq, index: number, list: Faq[]) => {
    const isOpen = openFaq === faq.question;

    return (
      <div
        key={faq.question}
        className={`
          overflow-hidden
          ${index !== list.length - 1 ? "border-b border-[#e7eaf0]" : ""}
        `}
      >
        <button
          type="button"
          onClick={() => toggleFaq(faq.question)}
          aria-expanded={isOpen}
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
              {faq.answer}
            </p>
          </div>
        )}
      </div>
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
                Partners FAQ
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
              Direct answers about what a partnership is here.
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
              Starting with the question the page&apos;s own emptiness raises.
            </p>
          </div>

          {/* FAQ GRID */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-5

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
              {leftFaqs.map((faq, index) =>
                renderFaq(faq, index, leftFaqs),
              )}
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
              {rightFaqs.map((faq, index) =>
                renderFaq(faq, index, rightFaqs),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}