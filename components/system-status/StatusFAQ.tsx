"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Everything shows operational but I have a problem.",
    answer: (
      <>
        Operational reflects expected operation for the scoped component — it
        is not a guarantee for every account, request or third-party
        dependency. An account-specific issue routes to{" "}
        <span className="font-semibold text-blue-600">Contact Support</span>.
      </>
    ),
  },
  {
    question: 'Does "monitoring" mean it is fixed?',
    answer:
      "Monitoring means the situation is being observed. It does not by itself mean the issue has been resolved.",
  },
  {
    question: "Why is there no estimated restoration time?",
    answer:
      "A restoration estimate is shown only when the source provides a reliable estimate.",
  },
  {
    question: 'What does "unknown" mean?',
    answer:
      "Unknown means the current source cannot provide a sufficiently reliable state.",
  },
  {
    question: "Why does an old update still show the wrong scope?",
    answer:
      "Older incident updates preserve the information available when they were published. Later corrections do not rewrite the original update.",
  },
  {
    question: "Is maintenance an outage?",
    answer:
      "No. Maintenance is not automatically classified as an outage. The displayed state follows the authoritative source.",
  },
  {
    question: "Does a resolved incident entitle me to a credit?",
    answer:
      "No. Status information does not determine SLA credits or other contractual entitlements.",
  },
  {
    question: "Can I subscribe to updates?",
    answer:
      "Yes, when update subscriptions are available for the status information.",
  },
];

export default function StatusFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
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
                Status FAQ
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
              Direct answers about what a state means.
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
              Every answer here is about interpretation. The states themselves
              come from the source.
            </p>
          </div>

          {/* FAQ */}
          <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
            {[faqs.slice(0, 4), faqs.slice(4)].map(
              (column, columnIndex) => (
                <div
                  key={columnIndex}
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
                  {column.map((faq, itemIndex) => {
                    const index = columnIndex * 4 + itemIndex;
                    const isOpen = openIndex === index;

                    return (
                      <div
                        key={faq.question}
                        className={
                          itemIndex !== column.length - 1
                            ? "border-b border-[#edf0f4]"
                            : ""
                        }
                      >
                        {/* QUESTION */}
                        <button
                          type="button"
                          onClick={() => toggleFAQ(index)}
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

                          {/* PLUS */}
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

                        {/* ANSWER */}
                        {isOpen && (
                          <div className="px-5 pb-5">
                            <div
                              className="
                                text-sm
                                font-normal
                                leading-6
                                text-[#5d7192]
                              "
                            >
                              {faq.answer}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}