"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "Do you support our country?",
    answer:
      "There is no single answer. Coverage resolves at the intersection of a market and a capability family — seven families each hold an independent state, and a market available for one may be unassessed for another.",
  },
  {
    question: "Our country isn't listed. Does that mean no?",
    answer:
      "No. The absence of a market from the directory does not by itself establish that the market is unsupported. It means there is no published coverage record to rely on.",
  },
  {
    question: "The market is listed but a capability has no record.",
    answer:
      "That means the market has a record, but the specific capability family does not have a public coverage record. Do not infer that the capability is unavailable.",
  },
  {
    question: "If a market is available, is everything available?",
    answer:
      "No. Availability is evaluated independently for each capability family. A market being available for one capability does not establish availability for another.",
  },
];

const rightFaqs = [
  {
    question: 'What does "Available" with no scope text mean?',
    answer:
      'An "Available" state without scope text should not be interpreted as unlimited availability. The published state is only meaningful together with its approved scope and currentness information.',
  },
  {
    question: "Is there coverage you don't publish?",
    answer:
      "Some coverage may require controlled or authorized review. Public directory coverage should not be interpreted as a complete representation of every privately assessed condition.",
  },
  {
    question: "How current is this?",
    answer:
      "Currentness is maintained at the individual coverage-record level. A reviewed date or explicit unknown state should be used rather than assuming that the entire directory was refreshed at once.",
  },
  {
    question: "How does this differ from Jurisdiction Availability?",
    answer:
      "Coverage describes whether a governed capability record exists and what state it carries. Jurisdiction Availability is a separate concept and should not be inferred from this directory alone.",
  },
];

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#edf0f4] last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="
          flex
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
            min-w-0
            flex-1
            text-sm
            font-semibold
            leading-6
            text-[#091127]
          "
        >
          {question}
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
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5">
          <p
            className="
              !m-0
              text-sm
              font-normal
              leading-6
              text-[#5d7192]
            "
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function SupportedCountriesFaq() {
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
                Supported Countries FAQ
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
              Direct answers about what coverage
              <br className="hidden sm:block" />
              means.
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
              Most of these correct a reasonable but wrong inference.
            </p>
          </div>

          {/* FAQ COLUMNS */}
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
            {/* LEFT COLUMN */}
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
              {leftFaqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>

            {/* RIGHT COLUMN */}
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
              {rightFaqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}