'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: 'What can Zoiko Billing automate?',
    answer:
      'Repeatable billing work built from explicit parts: assigning owners, notifying people, preparing documents and reminders, routing records for review, updating permitted internal states, scheduling approved summaries and invoking approved connector actions. Availability of any specific trigger, condition or action depends on your plan, configuration, connectors and market.',
  },
  {
    question: 'How are workflows triggered?',
    answer:
      'Workflows can be triggered by recurring schedules, record status changes, manual actions by authorized users, or incoming webhooks from external integration partners.',
  },
  {
    question: 'Can a workflow send an invoice or reminder automatically?',
    answer:
      'Yes. Scheduled or event-driven rules can trigger automatic dispatch of invoices and reminders based on template rules and customer preferences.',
  },
  {
    question: 'Which actions require approval?',
    answer:
      'High-severity actions — such as overrides, manual refunds, rate changes, or bulk data exports — can be configured to require explicit multi-step authorization.',
  },
  {
    question: 'What happens when a workflow fails?',
    answer:
      'Failures are classified into specific exception classes with automatic retry policies, safe pauses, or routing to designated exception owners.',
  },
  {
    question: 'Can workflows use integrations?',
    answer:
      'Yes. Workflows can invoke actions across approved connector integrations, including payment gateways, ERP systems, and CRM platforms.',
  },
  {
    question: 'Can workflows be paused or changed?',
    answer:
      'Authorized administrators can pause running workflows or publish updated version definitions at any time without dropping active queue state.',
  },
  {
    question: 'Can I use Automation & Workflows without Zoiko One?',
    answer:
      'Yes. Zoiko Billing features an independent, fully functional runtime and can be deployed standalone or integrated with Zoiko One.',
  },
];

export default function AutomationFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
              max-w-[780px]
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
                max-w-[780px]
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
              Direct answers about automation.
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
              Every answer is rendered on the page and works without JavaScript.
            </p>
          </div>

          {/* FAQ */}
          <div
            className="
              w-full
              max-w-[900px]
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className={
                    index !== faqData.length - 1
                      ? 'border-b border-[#edf0f4]'
                      : ''
                  }
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-4
                      px-5
                      py-5
                      text-left
                      focus:outline-none
                      sm:px-6
                    "
                    aria-expanded={isOpen}
                  >
                    <span
                      className="
                        text-base
                        font-semibold
                        leading-6
                        text-[#091127]
                        transition-colors
                        group-hover:text-[#7890b2]

                        sm:text-lg
                      "
                    >
                      {item.question}
                    </span>

                    <span
                      className={`
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-sm
                        font-semibold
                        transition-colors

                        ${
                          isOpen
                            ? 'border border-[#7890b2] bg-[#7890b2] text-white'
                            : 'border border-[#cbd5e1] bg-white text-[#7890b2] group-hover:border-[#7890b2]'
                        }
                      `}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pr-12 sm:px-6 sm:pb-6 sm:pr-16">
                      <p
                        className="
                          !m-0
                          text-sm
                          font-normal
                          leading-6
                          text-[#5d7192]

                          sm:text-base
                          sm:leading-7
                        "
                      >
                        {item.answer}
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