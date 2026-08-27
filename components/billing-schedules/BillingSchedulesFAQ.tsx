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
    <section className="w-full bg-color-grey-97-2">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-14 px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        {/* Hero */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-16">
          <div className="flex-1 pb-5">
            {/* Eyebrow */}
            <div className="mb-5 flex h-4 items-center gap-2.5">
              <div className="h-0.5 w-5 shrink-0 rounded-xs bg-gradient-to-r from-color-cyan-42 to-color-azure-51" />

              <span className="text-xs font-medium uppercase leading-4 tracking-wider text-color-azure-44">
                Questions
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[638px] text-4xl font-medium leading-tight text-sky-950 sm:text-5xl sm:leading-[53.82px]">
              Direct answers about
              <br className="hidden sm:block" />
              billing timing.
            </h2>
          </div>

          {/* Intro */}
          <div className="flex-1 lg:max-w-[529px]">
            <p className="text-base font-normal leading-8 text-color-azure-35">
              Every answer is rendered on the page and works without
              JavaScript.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="w-full max-w-[920px]">
          <div className="border-t border-zinc-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-zinc-200"
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex min-h-16 w-full items-start justify-between gap-6 px-0.5 py-5 text-left outline-none"
                  >
                    <span className="text-base font-semibold leading-7 text-sky-950">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full outline outline-1 outline-offset-[-1px] transition-colors ${
                        isOpen
                          ? "bg-color-azure-51 !text-white outline-color-azure-51"
                          : "bg-transparent text-color-azure-35 outline-zinc-200"
                      }`}
                    >
                      <span className="text-sm font-semibold leading-6">
                        {isOpen ? "−" : "+"}
                      </span>
                    </span>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div className="pb-6 pl-0.5 pr-12 sm:pr-16">
                      <p className="max-w-[735px] text-sm font-normal leading-7 text-color-azure-35">
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