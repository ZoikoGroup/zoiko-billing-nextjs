"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Why are there no resources listed?",
    answer:
      "No approved registry has been supplied, and the page is in its sparse-inventory state — showing route navigation rather than empty filters and sections built around content that does not exist.",
    open: true,
  },
  {
    question: "Why do some resources show no date?",
    answer:
      "Not every resource type uses the same primary date. Some resources may have no meaningful date until the applicable lifecycle or publication rule provides one.",
  },
  {
    question: "Can I filter by date across everything?",
    answer:
      "No. Date filters only appear where the available inventory supports a meaningful and governed date dimension.",
  },
  {
    question: "Can I sort by most popular?",
    answer:
      "Popularity is not treated as a universal resource attribute. Sorting is only offered when the underlying inventory provides a trustworthy basis for that ordering.",
  },
  {
    question: "What happens when a resource is withdrawn?",
    answer:
      "A withdrawn resource becomes ineligible for discovery or featuring according to its resource-type rules. The page does not silently substitute or rewrite the resource.",
  },
  {
    question: "Is a guide legal or tax advice?",
    answer:
      "No. Guides are explanatory material and should not be treated as legal, tax, or other professional advice unless explicitly stated by an appropriate authority.",
  },
  {
    question: "I have a problem with my account.",
    answer:
      "Account-specific issues should be handled through the appropriate support or account channel rather than the public Resource Center.",
  },
  {
    question: "Why isn't Documentation listed as a resource type?",
    answer:
      "Documentation is an authority with its own governance. It is linked from the Resource Center rather than being absorbed into the resource inventory.",
  },
];

export default function ResourceCenterFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const leftFAQs = faqs.slice(0, 4);
  const rightFAQs = faqs.slice(4);

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
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
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

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
                Resource Center FAQ
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
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
              Direct answers about currentness.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-1
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Most answers explain why one type&apos;s date rules do not apply
              to another.
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
              {leftFAQs.map((faq, index) => {
                const actualIndex = index;
                const isOpen = openIndex === actualIndex;

                return (
                  <div
                    key={faq.question}
                    className={
                      index !== leftFAQs.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(actualIndex)}
                      aria-expanded={isOpen}
                      className="
                        flex
                        min-h-[80px]
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
              {rightFAQs.map((faq, index) => {
                const actualIndex = index + 4;
                const isOpen = openIndex === actualIndex;

                return (
                  <div
                    key={faq.question}
                    className={
                      index !== rightFAQs.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(actualIndex)}
                      aria-expanded={isOpen}
                      className="
                        flex
                        min-h-[80px]
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
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}