"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What can Zoiko Billing report on?",
    answer:
      "Operational activity across the billing record: customers and entities, draft, issued, credited and corrected documents, charges, fees, discounts and adjustments, billing schedule occurrences, document rendering and delivery evidence, and workflow, approval and exception workload. On the revenue side it covers issued and credit activity, current and aging receivable positions, dispute, hold and promise workload, payment states, exceptions and outstanding balances. Availability of any specific metric or dataset depends on your plan, configuration and market.",
  },
  {
    question: "How are metrics defined?",
    answer:
      "Each metric has a defined formula, scope, unit, inclusions, exclusions, owner and version. The definition travels with the result so the same metric has the same meaning across reports and comparisons.",
  },
  {
    question: "Can I compare periods or entities?",
    answer:
      "Yes, where the periods, entities, currencies and other dimensions are comparable. Invalid comparisons are identified rather than presented as misleading totals.",
  },
  {
    question: "How current is the data?",
    answer:
      "Freshness and the as-of time are visible with the result. Data that is stale, incomplete or affected by late-arriving information is identified rather than silently presented as current.",
  },
  {
    question: "Can I drill from a chart to the source records?",
    answer:
      "Where supported and permitted, drill-through carries the relevant metric, filters, snapshot and context into the underlying records. Access remains permission-aware.",
  },
  {
    question: "Can reports be scheduled or exported?",
    answer:
      "Supported reports can be scheduled or exported depending on your plan, configuration and market. Exports are governed with permissions, scope, delivery controls, expiry and audit information.",
  },
  {
    question: "Does Reporting & Analytics provide forecasts?",
    answer:
      "Reporting and Analytics is governed operational reporting. It does not represent a guaranteed forecast or causal intelligence. Any supported target or comparison uses an explicitly defined source.",
  },
  {
    question: "Can I use Reporting & Analytics without Zoiko One?",
    answer:
      "Yes. Zoiko Billing remains independently deployable. Zoiko One participation and cross-product handoffs are available where enabled and supported.",
  },
];

export default function ReportingFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
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
              flex-col
              items-start
              gap-4
              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:gap-16
            "
          >
            {/* LEFT */}
            <div
              className="
                flex
                w-full
                max-w-[662px]
                flex-col
                items-start
                gap-3
              "
            >
              {/* EYEBROW */}
              <div className="flex items-center gap-3">
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
                Direct answers about
                <br className="hidden sm:block" />
                reporting.
              </h2>
            </div>

            {/* RIGHT */}
            <div className="w-full max-w-[528px]">
              <p
                className="
                  !m-0
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
          </div>

          {/* FAQ */}
          <div className="w-full max-w-[920px]">
            <div className="overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className={
                      index !== faqs.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="
                        flex
                        w-full
                        items-start
                        justify-between
                        gap-6
                        px-5
                        py-5
                        text-left
                        transition-colors
                        hover:bg-[#fafbfc]
                        sm:px-6
                        sm:py-5
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
                          leading-6
                          transition-colors
                          ${
                            isOpen
                              ? "bg-[#091127] text-white outline outline-1 outline-offset-[-1px] outline-[#091127]"
                              : "bg-white text-[#5d7192] outline outline-1 outline-offset-[-1px] outline-[#dfe5ee]"
                          }
                        `}
                        aria-hidden="true"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="max-w-[780px] px-5 pb-6 sm:px-6 sm:pb-7">
                        <p
                          className="
                            !m-0
                            text-[15px]
                            font-normal
                            leading-7
                            text-[#5d7192]
                            sm:text-base
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
      </div>
    </section>
  );
}