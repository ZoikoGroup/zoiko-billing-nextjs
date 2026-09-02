"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "Which countries are supported?",
    answer: (
      <>
        Use the lookup — status is scope-specific and current, and it varies
        by capability rather than by country alone.{" "}
        <span className="font-semibold text-[#2563EB]">
          Check a jurisdiction
        </span>
      </>
    ),
  },
  {
    question: "What does Available mean?",
    answer:
      "Available means the current public registry confirms support for the requested scope and capability.",
  },
  {
    question: "What does Limited availability mean?",
    answer:
      "Limited availability means support exists with defined restrictions, conditions, or scope boundaries.",
  },
  {
    question: "What does Partner-supported mean?",
    answer:
      "Partner-supported means part of the capability depends on an approved partner or provider and its availability.",
  },
  {
    question: "When will a Planned country launch?",
    answer:
      "Planned indicates intent only. No launch date, quarter, wait time, or guaranteed roadmap should be inferred.",
  },
];

const rightFaqs = [
  {
    question: "Does Available mean tax compliant?",
    answer:
      "No. Availability describes the published service capability and does not by itself establish tax compliance.",
  },
  {
    question: "Does a country determine currency?",
    answer:
      "No. Currency support can depend on the billing capability, entity, account configuration, and supported payment context.",
  },
  {
    question: "Does a country determine language?",
    answer:
      "No. Language availability can be independent of jurisdiction and may vary by product or capability.",
  },
  {
    question: "Can different entities have different availability?",
    answer:
      "Yes. Availability can vary by entity, capability, provider, commercial scope, or operational conditions.",
  },
  {
    question: "Can I sign up if my market is Not available?",
    answer:
      "Not necessarily. A Not available state means there is no current offering for that scope unless an approved route is explicitly provided.",
  },
];

type Faq = {
  question: string;
  answer: React.ReactNode;
};

function FaqItem({
  question,
  answer,
  open,
  onClick,
}: {
  question: string;
  answer: React.ReactNode;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="
        border-b
        border-[#edf0f4]
        last:border-b-0
      "
    >
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-4
          px-5
          py-5
          text-left

          sm:py-6
        "
      >
        <span
          className="
            min-w-0
            text-sm
            font-semibold
            leading-6
            text-[#091127]
          "
        >
          {question}
        </span>

        <span
          aria-hidden="true"
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
            text-[#7890b2]
            transition-transform
            duration-200
            ${open ? "rotate-45" : ""}
          `}
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5 sm:pb-6">
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

function FaqColumn({
  items,
  openIndex,
  setOpenIndex,
}: {
  items: Faq[];
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
}) {
  return (
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
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            open={isOpen}
            onClick={() => setOpenIndex(isOpen ? null : index)}
          />
        );
      })}
    </div>
  );
}

export default function AvailabilityFaq() {
  const [leftOpen, setLeftOpen] = useState<number | null>(0);
  const [rightOpen, setRightOpen] = useState<number | null>(null);

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
                Decision guide &amp; FAQ
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
              Direct answers about availability.
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
              You can read current public status without giving an email,
              company name, employee count, budget, tax identifier, customer
              data or confidential expansion plans.
            </p>
          </div>

          {/* FAQ COLUMNS */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-5
              pt-1

              lg:flex-row
              lg:items-start
            "
          >
            {/* LEFT */}
            <div className="w-full min-w-0 flex-1">
              <FaqColumn
                items={leftFaqs}
                openIndex={leftOpen}
                setOpenIndex={setLeftOpen}
              />
            </div>

            {/* RIGHT */}
            <div className="w-full min-w-0 flex-1">
              <FaqColumn
                items={rightFaqs}
                openIndex={rightOpen}
                setOpenIndex={setRightOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}