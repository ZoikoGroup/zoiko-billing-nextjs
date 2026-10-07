"use client";

import { useState } from "react";

export default function MediaEnquiriesFaq() {
  const leftFaqs = [
    {
      question: "Will I get a response, and how fast?",
      answer:
        "No response time is committed and receipt is not a promise of reply. We review submissions where appropriate, but sending an enquiry does not guarantee a response or a particular response time.",
    },
    {
      question: "Can I place an embargo by submitting?",
      answer:
        "You can state a requested embargo date or timing in your submission. An embargo is not accepted merely because it appears in the form, so please make the requested timing explicit and wait for confirmation where one is required.",
    },
    {
      question: "Is my submission confidential or off the record?",
      answer:
        "No. A submission should not be treated as confidential, privileged, or off the record unless Zoiko has explicitly agreed to those terms. Do not include information that requires confidentiality unless that arrangement has been confirmed in advance.",
    },
    {
      question: "Who is the press contact?",
      answer:
        "The media enquiries channel is the appropriate first point of contact for press requests. Where a specific spokesperson or subject-matter contact is appropriate, the enquiry can be routed internally.",
    },
  ];

  const rightFaqs = [
    {
      question: "Can you review my article before publication?",
      answer:
        "Generally, no. Media enquiries are intended for factual requests, interview opportunities, statements, and other press matters rather than editorial review or approval of published work.",
    },
    {
      question: "Why does the form ask so little?",
      answer:
        "The form is intentionally limited to information needed to understand and route the enquiry. Keeping the initial submission small reduces unnecessary data collection and lets the team request additional context only when it is relevant.",
    },
    {
      question: "My deadline has already passed. Should I still send it?",
      answer:
        "Yes, if the request is still relevant. State clearly that the deadline has passed and explain whether you still need a response. A past deadline does not create an obligation to respond, but it gives the team useful context for prioritisation.",
    },
    {
      question: "Where are the logos and press kit?",
      answer:
        "Approved press assets, including available logos and other media materials, are provided through the designated press-assets or media-resources area. Use the current published assets rather than downloading or modifying unofficial copies.",
    },
  ];

  const [openLeft, setOpenLeft] = useState<number | null>(0);
  const [openRight, setOpenRight] = useState<number | null>(null);

  const renderFaq = (
    faq: {
      question: string;
      answer: string;
    },
    index: number,
    total: number,
    openIndex: number | null,
    setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>
  ) => {
    const isOpen = openIndex === index;

    return (
      <div
        key={faq.question}
        className={`
          w-full
          ${index !== total - 1 ? "border-b border-[#edf0f4]" : ""}
        `}
      >
        {/* QUESTION */}
        <button
          type="button"
          onClick={() => setOpenIndex(isOpen ? null : index)}
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
            transition-colors
            hover:bg-[#fafbfc]
          "
        >
          <span
            className="
              min-w-0
              flex-1
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
              size-5
              shrink-0
              items-center
              justify-center
              rounded-md
              bg-[#f7f8fa]
              transition-transform
              duration-200
              ${isOpen ? "rotate-45" : ""}
            `}
            aria-hidden="true"
          >
            <span
              className="
                text-center
                text-sm
                font-semibold
                leading-6
                text-[#5d7192]
              "
            >
              +
            </span>
          </span>
        </button>

        {/* ANSWER */}
        <div
          className={`
            grid
            transition-all
            duration-200
            ease-in-out
            ${
              isOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="overflow-hidden">
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
          </div>
        </div>
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
                Media Enquiries FAQ
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
              Direct answers for working journalists.
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
              Including the ones a press page usually avoids.
            </p>
          </div>

          {/* FAQ CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
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
                renderFaq(
                  faq,
                  index,
                  leftFaqs.length,
                  openLeft,
                  setOpenLeft
                )
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
                renderFaq(
                  faq,
                  index,
                  rightFaqs.length,
                  openRight,
                  setOpenRight
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}