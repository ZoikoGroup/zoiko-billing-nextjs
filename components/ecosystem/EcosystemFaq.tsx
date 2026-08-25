"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "Which Zoiko products connect to Billing?",
    answer:
      "Use the current connection registry on this page. No product names or counts are invented, and portfolio membership is not a listing.",
    link: "Open the inspector",
  },
  {
    question: "Does every Zoiko product integrate automatically?",
    answer:
      "No. Connections are published only when an approved, current connection record exists.",
  },
  {
    question: "Is Billing part of Zoiko One?",
    answer:
      "Billing can operate independently or as part of an approved Zoiko One deployment. Deployment does not remove product-specific authority.",
  },
  {
    question: "Does Zoiko One mean one database?",
    answer:
      "No. A Zoiko One deployment can coordinate approved product connections without implying one universal database or shared data model.",
  },
  {
    question: "Do permissions carry across products?",
    answer:
      "No. Authentication or identity may be shared, but each product evaluates its own current permissions and authorization.",
  },
];

const rightFaqs = [
  {
    question: "Can another product trigger Billing actions?",
    answer:
      "Only through an approved capability and registered handoff. Billing evaluates its own permissions, state and authority before executing the action.",
  },
  {
    question: "Can data deletion propagate?",
    answer:
      "Deletion is handled per domain. A connection does not create a default cascade-delete relationship across products.",
  },
  {
    question: "Where do I check plan, region or compatibility?",
    answer:
      "Use the current connection record and its availability, compatibility and lifecycle information. These dimensions are evaluated independently.",
  },
  {
    question: "Can I build a custom Zoiko integration?",
    answer:
      "Custom connections should use approved APIs, events and integration boundaries. Availability depends on the relevant product capabilities and authorization.",
  },
  {
    question: "Where do I compare standalone versus Zoiko One?",
    answer:
      "Compare the deployment modes using the approved operating model. Zoiko One coordinates the suite but does not create an automatic permission or data union.",
  },
];

function FaqItem({
  question,
  answer,
  link,
  open,
  onClick,
}: {
  question: string;
  answer: string;
  link?: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[#edf0f5] last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
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
            bg-[#f7f8fa]
            text-sm
            font-semibold
            leading-none
            text-[#5d7192]
            transition-transform
            duration-200
            ${open ? "rotate-45" : ""}
          `}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5">
          <p className="m-0 text-sm font-normal leading-5 text-[#5d7192]">
            {answer}{" "}
            {link && (
              <a
                href="#connection-registry"
                className="
                  font-semibold
                  text-blue-600
                  transition
                  hover:text-blue-700
                "
              >
                {link}
              </a>
            )}
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
  items: typeof leftFaqs;
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
      {items.map((item, index) => (
        <FaqItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          link={item.link}
          open={openIndex === index}
          onClick={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
}

export default function EcosystemFaq() {
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
            gap-5
          "
        >
          {/* HEADER */}
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
                Decision guide & FAQ
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                !max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]
              "
            >
              Direct answers about Zoiko-to-Zoiko connections.
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
              A public ecosystem evaluation must never require tenant IDs,
              customer or employee data, invoices, credentials, integration
              keys, event payloads or internal architecture documents.
            </p>
          </div>

          {/* FAQ COLUMNS */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-5
              pt-3

              md:flex-row
            "
          >
            <div className="flex-1">
              <FaqColumn
                items={leftFaqs}
                openIndex={leftOpen}
                setOpenIndex={setLeftOpen}
              />
            </div>

            <div className="flex-1">
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