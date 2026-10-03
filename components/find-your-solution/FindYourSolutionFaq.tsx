"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Why don't the results link anywhere?",
    answer: (
      <>
        The five destination paths have no governed routes yet. Rather than
        invent URLs or show dead links, each card renders its label and
        content and says the route is pending.{" "}
        <span className="font-semibold text-blue-600">
          Compare all paths
        </span>
      </>
    ),
  },
  {
    question: "Does this tell me if Zoiko Billing suits us?",
    answer:
      "The guide helps identify which Solutions path to explore first. It is not a product-fit assessment or a substitute for a detailed evaluation.",
  },
  {
    question: "Why is there no match score?",
    answer:
      "The guide does not expose numeric scores. Recommendations are presented as structured paths so the reasoning remains understandable rather than reducing the result to an unexplained number.",
  },
  {
    question: "What if more than one path fits?",
    answer:
      "The guide can present related paths when multiple destinations are relevant instead of forcing an artificial single winner.",
  },
  {
    question: "Do I have to give my details?",
    answer:
      "No. The guide does not require company size, revenue, budget, geography or contact details to produce a suggested path.",
  },
  {
    question: "Can I change one answer without starting over?",
    answer:
      "Yes. Answers remain editable so you can change an earlier response without having to restart the entire guide.",
  },
  {
    question: "Why weren't we asked our company size?",
    answer:
      "Company size is not used as a required input because it would not improve the initial path suggestion.",
  },
  {
    question: 'What if I pick "I\'m not sure"?',
    answer:
      "The guide should not force a result. It can use the other answers and show relevant alternatives instead.",
  },
];

export default function FindYourSolutionFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full bg-white">
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
                Find Your Solution FAQ
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
              Direct answers about what the guide does.
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
              Several explain a limit rather than a feature.
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
              {faqs.slice(0, 4).map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className={
                      index !== 3
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
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
                          text-sm
                          font-semibold
                          transition

                          ${
                            isOpen
                              ? "bg-blue-600 text-white"
                              : "bg-[#f7f8fa] text-[#5d7192]"
                          }
                        `}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5">
                        <p className="!m-0 text-sm leading-5 text-[#5d7192]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
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
              {faqs.slice(4).map((faq, index) => {
                const actualIndex = index + 4;
                const isOpen = openIndex === actualIndex;

                return (
                  <div
                    key={faq.question}
                    className={
                      index !== 3
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(actualIndex)}
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
                          text-sm
                          font-semibold
                          transition

                          ${
                            isOpen
                              ? "bg-blue-600 text-white"
                              : "bg-[#f7f8fa] text-[#5d7192]"
                          }
                        `}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5">
                        <p className="!m-0 text-sm leading-5 text-[#5d7192]">
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