"use client";

import { useState } from "react";
import Link from "next/link";

const leftFaqs = [
  {
    question: "Why are there no announcements?",
    answer: (
      <>
        No approved publications back this wireframe. Fabricating a press
        release would put claims about funding, partnerships or results into a
        company&apos;s public record — the exact artifacts this doctrine exists
        to govern.{" "}
        <Link
          href="/newsroom"
          className="font-semibold text-[#5276ad] hover:text-[#091127] hover:underline"
        >
          See the states
        </Link>
      </>
    ),
  },
  {
    question: "Where do I find product announcements?",
    answer: (
      <>
        Product announcements are published through{" "}
        <Link
          href="/product-updates"
          className="font-semibold text-[#5276ad] hover:text-[#091127] hover:underline"
        >
          Product Updates
        </Link>
        , where release availability and action requirements are maintained.
      </>
    ),
  },
  {
    question: "Is there a press contact?",
    answer: (
      <>
        Use the approved contact route published by the company. No press
        email, phone number or form should be inferred or invented.
      </>
    ),
  },
  {
    question: "Can I use your logo?",
    answer: (
      <>
        Only where current usage terms permit it. Availability of a logo file
        does not itself grant permission for use.
      </>
    ),
  },
];

const rightFaqs = [
  {
    question: "An old release describes the product differently — which is right?",
    answer: (
      <>
        The old release remains a dated historical record. For the current
        product state, use the latest{" "}
        <Link
          href="/product-updates"
          className="font-semibold text-[#5276ad] hover:text-[#091127] hover:underline"
        >
          Product Updates
        </Link>{" "}
        or current product documentation.
      </>
    ),
  },
  {
    question: "Why does a quote show an old job title?",
    answer: (
      <>
        Historical publications preserve the title that was correct at the
        publication date. Current leadership information should be taken from
        the{" "}
        <Link
          href="/leadership-governance"
          className="font-semibold text-[#5276ad] hover:text-[#091127] hover:underline"
        >
          Leadership
        </Link>{" "}
        registry.
      </>
    ),
  },
  {
    question: "Can I quote a statement in my article?",
    answer: (
      <>
        Yes, provided the statement is quoted accurately and retains its
        original context and publication date. Do not present a historical
        statement as a current product, company or leadership position.
      </>
    ),
  },
  {
    question: "Why did a release disappear?",
    answer: (
      <>
        A release may be withdrawn or superseded when a correction, permission
        change, legal restriction or other governance trigger requires it.
        Historical records remain traceable where appropriate.
      </>
    ),
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#edf0f4] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
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
          {question}
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
            bg-[#f0f2f5]
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

      {isOpen && (
        <div className="px-5 pb-5">
          <p className="!m-0 text-sm font-normal leading-6 text-[#5d7192]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function NewsroomFAQ() {
  const [openItem, setOpenItem] = useState<string | null>(
    "Why are there no announcements?"
  );

  const toggleItem = (question: string) => {
    setOpenItem((current) => (current === question ? null : question));
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
                Newsroom FAQ
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
              Direct answers for media and readers.
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
              Several answers route elsewhere, because the other destination
              publishes the thing with its evidence attached.
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
            {/* LEFT FAQ CARD */}
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
                  isOpen={openItem === faq.question}
                  onToggle={() => toggleItem(faq.question)}
                />
              ))}
            </div>

            {/* RIGHT FAQ CARD */}
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
                  isOpen={openItem === faq.question}
                  onToggle={() => toggleItem(faq.question)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}