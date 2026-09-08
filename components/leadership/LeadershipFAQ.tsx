"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Why is no one listed?",
    answer: (
      <>
        No approved Leadership Registry records back this wireframe. Showing
        placeholder people would publish claims about individuals who do not
        exist — so the roster is empty rather than filled.{" "}
        <Link
          href="#profile-lifecycle"
          className="font-semibold text-[#5278aa] hover:underline"
        >
          See the states
        </Link>
      </>
    ),
  },
  {
    question: "Does a leadership title mean someone can sign a contract?",
    answer:
      "No. A leadership title does not establish legal signing authority, contracting authority, or corporate office. Those claims require the appropriate legal or company record.",
  },
  {
    question: "Is this the same as Zoiko Group leadership?",
    answer:
      "Not necessarily. Group-level leadership belongs to Zoiko Group unless an approved cross-listing establishes the relationship on this destination.",
  },
  {
    question: "How do I contact a specific leader?",
    answer:
      "Use the approved Contact or press route. Personal contact details are not published by default.",
  },
  {
    question: "Why do some profiles have no photograph?",
    answer:
      "A photograph is only displayed when an approved image exists in the underlying leadership record. Missing imagery is not replaced with fabricated or unverified photography.",
  },
  {
    question: "Why are biographies so short?",
    answer:
      "Biographies are limited to approved claims. Keeping them concise reduces the risk of presenting unsupported achievements, responsibilities, or personal information as fact.",
  },
  {
    question: "Someone left. Why is their profile gone?",
    answer:
      "Former leaders are removed from the default current roster. Historical records may remain only where an approved historical purpose exists.",
  },
  {
    question: 'What does "acting" or "interim" mean here?',
    answer:
      "It means the person currently holds a temporary leadership state. Acting or interim profiles should carry explicit wording and, where applicable, a review date rather than being presented as permanent appointments.",
  },
];

export default function LeadershipFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
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
                Leadership FAQ
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
              Direct answers about who appears here.
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
              Several answers explain what a listing does not establish, which
              is the more common misreading.
            </p>
          </div>

          {/* FAQ GRID */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              lg:grid-cols-2
              lg:gap-5
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
                      index !== 3 ? "border-b border-[#edf0f4]" : ""
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
                        gap-4
                        px-5
                        py-4
                        text-left
                      "
                    >
                      <span className="text-sm font-semibold leading-6 text-[#091127]">
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
                        <p className="!m-0 text-sm font-normal leading-5 text-[#5d7192]">
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
                      index !== 3 ? "border-b border-[#edf0f4]" : ""
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
                        gap-4
                        px-5
                        py-4
                        text-left
                      "
                    >
                      <span className="text-sm font-semibold leading-6 text-[#091127]">
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
                        <p className="!m-0 text-sm font-normal leading-5 text-[#5d7192]">
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