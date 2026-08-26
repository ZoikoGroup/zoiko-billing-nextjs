"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "Does a passing sandbox test mean production will work?",
    answer: (
      <>
        No. It proves the behavior documented for that capability under the
        tested conditions. Anything marked Representative, Simulated,
        Unavailable or Unverified still needs production validation.{" "}
        <span className="font-semibold text-blue-600">
          Check the fidelity matrix
        </span>
      </>
    ),
  },
  {
    question: "Can I use real customer or payment data?",
    answer:
      "No. Use approved synthetic fixtures only. Real customer, payment or regulated material should not be introduced into the sandbox.",
  },
  {
    question: "Can sandbox actions move real money or send real invoices?",
    answer:
      "Only where the capability is explicitly documented as having a real side effect. Review the side-effect status before testing any action that could affect external systems.",
  },
  {
    question: "Can I promote sandbox credentials to production?",
    answer:
      "No. Sandbox credentials are environment-bound and are not promoted or reused in production. Production credentials must be obtained through the approved authentication path.",
  },
  {
    question: "Do sandbox object IDs exist in production?",
    answer:
      "No. Sandbox identifiers and objects are environment-specific and do not exist in production.",
  },
];

const rightFaqs = [
  {
    question: "Are all webhook events available in the sandbox?",
    answer:
      "No. Event availability depends on the supported sandbox capability. The fidelity record should be checked rather than assuming complete event parity.",
  },
  {
    question: "What does a reset actually delete?",
    answer:
      "A reset applies to the explicitly defined destructive scope of the sandbox. The affected objects, collaborators and resulting state should be shown before confirmation.",
  },
  {
    question: "Is there a sandbox uptime guarantee?",
    answer:
      "No sandbox availability or service-level claim should be assumed without an approved canonical source.",
  },
  {
    question: "How long is sandbox data kept?",
    answer:
      "Retention is determined by canonical data-governance policy. No default retention period should be assumed from the sandbox page.",
  },
  {
    question: "Do I need an account to read this page?",
    answer:
      "No. The sandbox documentation and its explanations can be read without an account or sales conversation.",
  },
];

function FAQItem({
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
          w-full
          items-center
          justify-between
          gap-4
          px-5
          py-5
          text-left
          transition-colors
          hover:bg-[#fafbfc]
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
            text-sm
            font-semibold
            leading-5
            transition-all
            ${
              isOpen
                ? "rotate-45 bg-[#526f9f] text-white"
                : "bg-[#f5f6f8] text-[#5d7192]"
            }
          `}
        >
          +
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5">
          <p className="!m-0 text-sm font-normal leading-6 text-[#64748b]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

function FAQColumn({
  items,
  openId,
  setOpenId,
  offset,
}: {
  items: typeof leftFaqs;
  openId: string | null;
  setOpenId: (id: string | null) => void;
  offset: number;
}) {
  return (
    <div
      className="
        flex-1
        overflow-hidden
        rounded-2xl
        border
        border-[#dfe5ee]
        bg-white
        shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
      "
    >
      {items.map((item, index) => {
        const id = `${offset}-${index}`;
        const isOpen = openId === id;

        return (
          <FAQItem
            key={id}
            question={item.question}
            answer={item.answer}
            isOpen={isOpen}
            onToggle={() => setOpenId(isOpen ? null : id)}
          />
        );
      })}
    </div>
  );
}

export default function SandboxFAQ() {
  const [openId, setOpenId] = useState<string | null>("0-0");

  return (
    <section className="w-full overflow-hidden bg-[#f7f8fa]">
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
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            sm:gap-10

            lg:gap-11
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
                Sandbox FAQ
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
                !tracking-[-0.03em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]
              "
            >
              Direct answers about what the sandbox proves.
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
              Reading this page never requires an account or a sales
              conversation.
            </p>
          </div>

          {/* FAQ COLUMNS */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-5

              lg:flex-row
            "
          >
            <FAQColumn
              items={leftFaqs}
              openId={openId}
              setOpenId={setOpenId}
              offset={0}
            />

            <FAQColumn
              items={rightFaqs}
              openId={openId}
              setOpenId={setOpenId}
              offset={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}