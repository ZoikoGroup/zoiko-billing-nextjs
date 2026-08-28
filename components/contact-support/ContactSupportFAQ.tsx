"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: React.ReactNode;
};

const leftFaqs: Faq[] = [
  {
    question: "Why was I sent somewhere else?",
    answer: (
      <>
        Some issues have a specialized route that handles them faster or more
        securely than a general case. Nothing redirects silently, and you can
        always choose a different path.{" "}
        <span className="font-semibold text-[#2563eb]">See the chooser</span>
      </>
    ),
  },
  {
    question: "How quickly will support respond?",
    answer:
      "Response times are governed by the applicable Support Policy. This page does not promise a response time or imply a service level that is not stated in that policy.",
  },
  {
    question: "What should I never include?",
    answer:
      "Never include passwords, API keys, access tokens, payment credentials, secrets, or other sensitive information that support does not need. Redact confidential data before submitting a case.",
  },
  {
    question: "Do I need an account to contact support?",
    answer:
      "It depends on the support route. If the selected support path requires an authenticated account, the page will make that requirement clear. No account requirement should be implied where the support platform does not enforce one.",
  },
];

const rightFaqs: Faq[] = [
  {
    question: "I think the service is down — should I file a case?",
    answer:
      "Check the System Status page first. If an incident is already known, use the published incident information rather than creating a duplicate case. If the issue is not listed and you still need help, you can contact support.",
  },
  {
    question: "I found a security problem. Can I report it here?",
    answer:
      "Use the designated security reporting route whenever one is provided. Security issues should not be submitted through a general support form when doing so could expose sensitive details or bypass the appropriate security response process.",
  },
  {
    question: "What if I submit the same thing twice?",
    answer:
      "Do not assume that submitting again will create a separate case safely. Where duplicate detection or idempotency is supported, the system should identify the existing submission without exposing case information to an unauthorized user. If you are unsure, wait for the existing receipt or case reference before retrying.",
  },
  {
    question: "Can I cancel a request?",
    answer:
      "Only if the support platform explicitly supports withdrawal or cancellation. Do not assume that closing a browser, sending a follow-up message, or submitting another form cancels an existing request.",
  },
];

export default function ContactSupportFAQ() {
  const [openFaq, setOpenFaq] = useState<string | null>(
    "Why was I sent somewhere else?"
  );

  const toggleFaq = (question: string) => {
    setOpenFaq((current) =>
      current === question ? null : question
    );
  };

  const renderFaq = (faq: Faq) => {
    const isOpen = openFaq === faq.question;

    return (
      <div
        key={faq.question}
        className="border-b border-[#edf0f4] last:border-b-0"
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
            gap-4
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
            className="
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
              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-[#7890b2]
                  opacity-40
                "
              />

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
                Contact Support FAQ
              </span>

              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-[#7890b2]
                  opacity-40
                "
              />
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
              Direct answers before you start.
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
              Nothing on this page states a response time — Support Policy owns
              every commitment.
            </p>
          </div>

          {/* FAQ */}
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
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              {leftFaqs.map(renderFaq)}
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
              "
            >
              {rightFaqs.map(renderFaq)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}