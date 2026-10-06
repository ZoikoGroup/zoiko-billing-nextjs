"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "Is this policy in force?",
    answer:
      "No. It has no effective date, no version in force and no authored clauses. It is a page architecture awaiting Legal authorship, and nothing here is enforceable or intended to be relied on.",
  },
  {
    question: "Are the ten categories the prohibitions?",
    answer:
      "No. The ten categories are a proposed taxonomy only. They are not operative prohibitions until Legal authors and approves the applicable policy language.",
  },
  {
    question: "Why is there no sample clause text?",
    answer:
      "Because sample wording could be mistaken for an operative rule. The published policy should contain only Legal-approved clause text.",
  },
  {
    question: "Where is the appeals section?",
    answer:
      "It is deliberately absent from this version. Appeals or reconsideration should appear only if Legal approves the applicable process and rights.",
  },
];

const rightFaqs = [
  {
    question: "Can I report suspected misuse now?",
    answer:
      "This page does not establish a reporting channel. A reporting route should be published only when the destination and process have been approved by Legal and Operations.",
  },
  {
    question: "What happens to older versions?",
    answer:
      "Older versions remain operationally relevant because conduct is judged against the policy in force when it occurred. Version history should therefore remain accessible.",
  },
  {
    question: "Why do the section anchors matter?",
    answer:
      "Stable section anchors make the policy easier to reference, link to and govern without changing the substantive policy language.",
  },
  {
    question: "Does this replace the earlier acceptable use page?",
    answer:
      "Not by itself. Supersession requires an approved effective date and versioning decision. This wireframe does not create that decision.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`
        border-[#edf0f4]
        ${isOpen ? "border-b" : ""}
      `}
    >
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
          gap-4
          px-5
          py-5
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
          <p
            className="
              !m-0
              text-sm
              font-normal
              leading-5
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

export default function QuestionsAboutPolicy() {
  const [openFaq, setOpenFaq] = useState("left-0");

  const toggleFaq = (id: string) => {
    setOpenFaq((current) => (current === id ? "" : id));
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
                Questions about this policy
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
              Direct answers about a policy that does not yet exist.
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
              Including why it is published in this state at all.
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
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              {leftFaqs.map((faq, index) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === `left-${index}`}
                  onToggle={() => toggleFaq(`left-${index}`)}
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
              {rightFaqs.map((faq, index) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === `right-${index}`}
                  onToggle={() => toggleFaq(`right-${index}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}