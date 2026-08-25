"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "What is the Integrations Directory?",
    answer:
      "A searchable directory of approved connectors and integration methods, with current capability, availability, setup and verification facts.",
  },
  {
    question: "Are all listed integrations available everywhere?",
    answer:
      "No. Availability can vary by region, plan, provider edition, environment and other registered applicability conditions.",
  },
  {
    question: 'Does "integration" mean two-way sync?',
    answer:
      "No. Integration direction is explicitly stated. A listing does not imply two-way synchronization unless that capability is verified.",
  },
  {
    question: "Does Zoiko Billing store my provider password?",
    answer:
      "Credential handling depends on the integration's approved authentication model. Public directory listings never collect provider passwords or secrets.",
  },
  {
    question: "Are listed integrations certified?",
    answer:
      "Only named, current certification schemes are shown where verified. Certification is never implied by being listed.",
  },
  {
    question: "What if an integration is down?",
    answer:
      "Operational status and integration support take priority. Unsafe actions may pause according to the integration contract while recovery information remains available.",
  },
];

const rightFaqs = [
  {
    question: "Can I build my own integration?",
    answer:
      "Yes, where public developer surfaces are available. The directory identifies the appropriate build and API paths.",
  },
  {
    question: "Can my company submit an integration?",
    answer:
      "Yes. Submission follows the approved integration submission path, but submitting does not automatically publish, approve or certify a listing.",
  },
  {
    question: "Can I request a provider that is not listed?",
    answer:
      "Yes, where a structured request path is available. A request is demand evidence and does not constitute a roadmap commitment or launch date.",
  },
  {
    question: "Can Zoiko Billing connect to Zoiko products?",
    answer:
      "Where supported, the directory identifies the relevant Zoiko ecosystem integration and its current capability and availability boundaries.",
  },
  {
    question: "How do I know a listing is current?",
    answer:
      "Listings include verification and lifecycle information. Currentness is based on registered evidence rather than appearance alone.",
  },
  {
    question: "Where do I get implementation help?",
    answer:
      "Use the integration support route for an existing integration, or the appropriate build and implementation documentation for new connections.",
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
    <div className="border-b border-[#eef1f5] last:border-b-0">
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
          className="
            flex
            h-5
            w-5
            shrink-0
            items-center
            justify-center
            rounded-md
            bg-[#f3f5f8]
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

function FaqColumn({
  items,
  openId,
  setOpenId,
  column,
}: {
  items: typeof leftFaqs;
  openId: string | null;
  setOpenId: (id: string | null) => void;
  column: string;
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
        const id = `${column}-${index}`;
        const isOpen = openId === id;

        return (
          <FaqItem
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

export default function DirectoryFaq() {
  const [openId, setOpenId] = useState<string | null>("left-0");

  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1240px]
          flex-col
          items-center
          px-5
          py-12

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        {/* HEADING */}
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
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-[#7890b2] opacity-40" />

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

            <span className="h-px w-4 bg-[#7890b2] opacity-40" />
          </div>

          {/* TITLE */}
          <h2
            className="
              !m-0
              text-[30px]
              font-extrabold
              leading-[1.15]
              tracking-[-0.025em]
              text-[#091127]

              sm:text-[34px]

              md:text-[36px]
            "
          >
            Direct answers about the directory.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              !m-0
              w-full
              max-w-[687px]
              pt-1
              text-center
              text-[15px]
              font-normal
              leading-7
              text-[#5d7192]

              sm:text-base
            "
          >
            Understanding integration fit never requires real credentials,
            customer records, provider exports, bank data, invoice payloads
            or secrets.
          </p>
        </div>

        {/* FAQ COLUMNS */}
        <div
          className="
            mt-8
            grid
            w-full
            grid-cols-1
            gap-5

            sm:mt-10

            lg:grid-cols-2
          "
        >
          <FaqColumn
            items={leftFaqs}
            openId={openId}
            setOpenId={setOpenId}
            column="left"
          />

          <FaqColumn
            items={rightFaqs}
            openId={openId}
            setOpenId={setOpenId}
            column="right"
          />
        </div>
      </div>
    </section>
  );
}