"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "Does Zoiko Billing calculate our tax?",
    answer:
      "No. Taxability logic, determination, and calculation are not claimed on this page. Tax determination and taxability rules are explicitly out of scope and should come from approved tax sources and qualified advisors.",
  },
  {
    question: "What rate or threshold applies?",
    answer:
      "This page does not determine which tax rate, threshold, exemption, or jurisdictional rule applies. Those values should be sourced from the approved tax authority or tax provider and reviewed by a qualified advisor before being configured.",
  },
  {
    question: "Do these configuration objects exist in the product?",
    answer:
      "Configuration objects may represent billing and tax-related settings used by the platform, but their presence should not be interpreted as a tax determination. Product configuration controls how approved inputs are represented and applied within the billing workflow.",
  },
  {
    question: "If a change is approved, is it live?",
    answer:
      "Not necessarily. An approved configuration change still follows the applicable deployment, activation, and operational controls. Approval alone should not be treated as proof that the configuration is already active in production.",
  },
];

const rightFaqs = [
  {
    question: "Does a date arriving activate a configuration?",
    answer:
      "A date by itself should not be treated as evidence that a configuration has become active. Activation depends on the configured workflow, effective-date handling, deployment state, and any required approval or operational controls.",
  },
  {
    question: "What happens if the supporting source can't be verified?",
    answer:
      "The configuration should not be treated as verified solely because a value has been entered. If the supporting source cannot be validated, the appropriate action is to flag the uncertainty and obtain confirmation from an approved source or qualified advisor before relying on it.",
  },
  {
    question: "Can we roll back a configuration?",
    answer:
      "Rollback depends on the configuration workflow and the controls available for that change. Where versioning or change history is supported, teams should use the documented rollback or correction process rather than manually replacing values without an audit trail.",
  },
  {
    question: "Does this file returns or submit to regulators?",
    answer:
      "No. This configuration does not by itself constitute a regulatory filing or submission. Tax returns, regulatory submissions, and related filing obligations remain outside the scope of this page and should be handled through the appropriate approved process.",
  },
];

export default function TaxConfigurationFaq() {
  const [openFaq, setOpenFaq] = useState<string | null>(
    "Does Zoiko Billing calculate our tax?"
  );

  const toggleFaq = (question: string) => {
    setOpenFaq((current) => (current === question ? null : question));
  };

  const renderFaqCard = (
    faq: {
      question: string;
      answer: string;
    },
    index: number
  ) => {
    const isOpen = openFaq === faq.question;

    return (
      <div
        key={faq.question}
        className={
          index !== 3 ? "border-b border-[#eef0f4]" : ""
        }
      >
        <button
          type="button"
          onClick={() => toggleFaq(faq.question)}
          className="
            flex
            w-full
            items-center
            justify-between
            gap-4
            px-5
            py-5
            text-left

            sm:px-6
            sm:py-6
          "
          aria-expanded={isOpen}
        >
          <span className="min-w-0 text-sm font-semibold leading-6 text-[#091127]">
            {faq.question}
          </span>

          <span
            className={[
              "flex size-5 shrink-0 items-center justify-center rounded-md bg-[#f7f8fa]",
              "text-sm font-semibold leading-6 text-[#5d7192]",
              "transition-transform duration-200",
              isOpen ? "rotate-45" : "",
            ].join(" ")}
            aria-hidden="true"
          >
            +
          </span>
        </button>

        {isOpen && (
          <div className="px-5 pb-5 sm:px-6 sm:pb-6">
            <p className="!m-0 text-sm font-normal leading-6 text-[#5d7192]">
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
              max-w-[1000px]
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
                Tax Configuration FAQ
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
              Direct answers, and the tax questions
              <br className="hidden sm:block" />
              route out.
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
              Most of what a reader wants to know here belongs to a qualified
              advisor.
            </p>
          </div>

          {/* FAQ CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              items-start
              gap-5

              lg:grid-cols-2
            "
          >
            {/* LEFT CARD */}
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
              {leftFaqs.map((faq, index) =>
                renderFaqCard(faq, index)
              )}
            </div>

            {/* RIGHT CARD */}
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
              {rightFaqs.map((faq, index) =>
                renderFaqCard(faq, index)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}