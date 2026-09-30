"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const leftFaqs: FaqItem[] = [
  {
    question: "Does Zoiko Billing detect these growth signals?",
    answer:
      "No. The signals are educational — things to notice in your own operation. No automatic detection is claimed.",
  },
  {
    question: "Will this improve our cash flow or collections?",
    answer:
      "The framework does not promise a financial outcome. It provides a structured way to identify operational questions and review them with the appropriate owners.",
  },
  {
    question: "Why does the snapshot show no numbers?",
    answer:
      "The snapshot is deliberately qualitative. It avoids inventing measurements, scores or percentages that are not supported by governed evidence.",
  },
  {
    question: "How often should we run these reviews?",
    answer:
      "There is no fixed interval or SLA prescribed here. The appropriate cadence depends on the operation, its change rate and the owners responsible for review.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "Are these five roles product permissions?",
    answer:
      "No. The roles describe ownership and operating responsibilities. They do not imply product permissions or access rights.",
  },
  {
    question: "Why won't the model assign an owner automatically?",
    answer:
      "Ownership depends on the operating context and governance structure. Automatically assigning an owner would create an unsupported assumption.",
  },
  {
    question: "Can we self-assess commercial fit?",
    answer:
      "Commercial fit belongs to the relevant commercial and pricing context. This framework does not infer entitlement or commercial suitability.",
  },
  {
    question: "Why don't three of the related paths link anywhere?",
    answer:
      "Those paths do not currently have a governed destination. They are intentionally shown without links rather than asserting a route that does not exist.",
  },
];

function QuestionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
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
          w-full
          items-center
          justify-between
          gap-4
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
          {item.question}
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
            leading-5
            transition-colors
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
          <p
            className="
              !m-0
              text-sm
              font-normal
              leading-5
              text-[#5d7192]
            "
          >
            {item.answer}
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
  columnIndex,
}: {
  items: FaqItem[];
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
  columnIndex: number;
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
      {items.map((item, index) => (
        <QuestionItem
          key={item.question}
          item={item}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
}

export default function FoundersAndOwnersFaq() {
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
            gap-11
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
              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-[#7890b2]
                  opacity-40
                "
              />

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
                Founders and Owners FAQ
              </span>

              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-[#7890b2]
                  opacity-40
                "
              />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                text-center
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
              Direct answers about what this
             
              framework is.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-[3px]
                text-center
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Several explain a deliberate absence.
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
            <FaqColumn
              items={leftFaqs}
              openIndex={leftOpen}
              setOpenIndex={setLeftOpen}
              columnIndex={0}
            />

            <FaqColumn
              items={rightFaqs}
              openIndex={rightOpen}
              setOpenIndex={setRightOpen}
              columnIndex={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}