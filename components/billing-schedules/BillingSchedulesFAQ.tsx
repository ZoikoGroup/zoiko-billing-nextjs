"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is a billing schedule?",
    answer:
      "A billing schedule is a governed definition of when approved billing work becomes eligible to begin. It records a start date and time, a governing timezone, a one-time or supported recurrence pattern, an eligibility window and cutoff, the customers and entity it applies to, a named owner, and the approval and exception policies that govern it. It controls timing — not amounts, contract terms or outcomes.",
  },
  {
    question: "What is the difference between a schedule and a billing cycle?",
    answer:
      "A billing schedule defines when an eligible billing action may occur. A billing cycle describes the broader recurring period used to organize billing activity. They are related, but they are not the same concept.",
  },
  {
    question: "Which recurrence patterns are supported?",
    answer:
      "Supported recurrence patterns depend on the configured billing schedule capabilities. A schedule may be one-time or use an approved recurring pattern with defined timing, timezone, eligibility and cutoff rules.",
  },
  {
    question: "How are timezones handled?",
    answer:
      "Each schedule has a governing timezone. The configured timezone determines when an occurrence becomes due, regardless of the timezone used by the person viewing the schedule.",
  },
  {
    question: "What happens when a scheduled run fails?",
    answer:
      "A failed run is recorded as an operational exception with its relevant state, reason and next action. A failure does not silently create a successful billing outcome.",
  },
  {
    question: "Can a schedule be paused or changed?",
    answer:
      "Yes. Schedule changes are versioned and attributable. Pausing prevents new eligible occurrences according to policy while preserving completed runs, issued documents and historical evidence.",
  },
  {
    question: "Does a schedule guarantee an invoice will be issued?",
    answer:
      "No. A schedule controls timing eligibility. Invoice creation, validation, approval, issue and delivery remain separate document states and controls.",
  },
  {
    question: "Can I use Billing Schedules without Zoiko One?",
    answer:
      "Billing Schedules can operate independently where the required billing capabilities and integrations are available. Zoiko One participation is only relevant where an enabled cross-product handoff is required.",
  },
];

export default function BillingSchedulesFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
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
          "
        >
          {/* =========================================================
              SECTION INTRO
          ========================================================= */}
          <div
            className="
              flex
              w-full
              max-w-[700px]
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
                Questions
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[700px]
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
              Direct answers about billing timing.
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
              Every answer is rendered on the page and works without
              JavaScript.
            </p>
          </div>

          {/* =========================================================
              FAQ
          ========================================================= */}
          <div
            className="
              mt-10
              w-full
              max-w-[920px]
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              sm:mt-12
            "
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`
                    ${
                      index !== faqs.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* QUESTION */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="
                      flex
                      min-h-16
                      w-full
                      items-center
                      justify-between
                      gap-5
                      px-5
                      py-5
                      text-left
                      outline-none

                      sm:px-6
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-6
                        text-[#091127]

                        sm:text-base
                        sm:leading-7
                      "
                    >
                      {faq.question}
                    </span>

                    {/* TOGGLE */}
                    <span
                      className={`
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        outline
                        outline-1
                        outline-offset-[-1px]
                        transition-colors
                        ${
                          isOpen
                            ? "bg-[#091127] text-white outline-[#091127]"
                            : "bg-transparent text-[#5d7192] outline-[#dfe5ee]"
                        }
                      `}
                    >
                      <span className="text-sm font-semibold leading-6">
                        {isOpen ? "−" : "+"}
                      </span>
                    </span>
                  </button>

                  {/* ANSWER */}
                  {isOpen && (
                    <div
                      className="
                        px-5
                        pb-6
                        pr-16

                        sm:px-6
                        sm:pb-6
                        sm:pr-20
                      "
                    >
                      <p
                        className="
                          !m-0
                          max-w-[735px]
                          text-sm
                          font-normal
                          leading-7
                          text-[#5d7192]
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}