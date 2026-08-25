"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "Is an integration available for me?",
    answer: (
      <>
        Check the exact integration, capability, region, plan, environment and
        compatibility. The public result does not confirm account-specific
        readiness.{" "}
        <span className="font-semibold text-blue-600">
          Open the resolver
        </span>
      </>
    ),
  },
  {
    question: "Does Available mean the connector is healthy right now?",
    answer:
      "No. Availability and operational health are separate qualifiers. An integration can remain an approved capability while operationally degraded.",
  },
  {
    question: "Does a certification badge mean every workflow is compliant?",
    answer:
      "No. Certification evidence applies only to its defined subject and scope. It does not establish availability for every workflow or make your implementation compliant.",
  },
  {
    question: "Does my plan guarantee access?",
    answer:
      "No. A public plan qualifier describes commercial applicability. It does not confirm a specific customer's active entitlement.",
  },
  {
    question: "Can a provider be available in one region but not another?",
    answer:
      "Yes. Region and jurisdiction are explicit availability qualifiers and can differ between locations.",
  },
  {
    question: "Does one supported operation mean the whole integration is supported?",
    answer:
      "No. Availability is evaluated at the operation level. A connector supporting one action does not automatically support every object, action or direction.",
  },
];

const rightFaqs = [
  {
    question: "Are Planned integrations guaranteed?",
    answer:
      "No. Planned represents future intent only. It is not a production availability commitment.",
  },
  {
    question: "What if a record says Needs review?",
    answer:
      "Treat the record as unconfirmed. A material qualifier could not be verified, so it should not be presented as Available.",
  },
  {
    question: "Where do I configure an available integration?",
    answer:
      "The public availability page establishes applicability. Customer-specific configuration and readiness happen through the appropriate authenticated environment.",
  },
  {
    question: "Where do I go during an incident?",
    answer:
      "Use the operational status and incident channels associated with the integration. An incident does not automatically change the underlying availability state.",
  },
  {
    question: "Can I request an unavailable integration?",
    answer:
      "You can request consideration, but a request does not change the public availability state or imply a delivery commitment.",
  },
  {
    question: "How do I find all connectors?",
    answer:
      "Use the integrations directory to browse the canonical connector records and inspect their supported contexts.",
  },
];

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e9edf3] last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="
          flex
          min-h-20
          w-full
          items-center
          justify-between
          gap-6
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
            size-5
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
          aria-hidden="true"
        >
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5">
          <p className="m-0 text-sm font-normal leading-5 text-[#5d7192]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function AvailabilityFaq() {
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
          gap-6
          px-5
          py-12

          sm:px-8
          sm:py-14

          md:px-10
          md:py-16

          lg:px-7
          lg:py-20
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
          <div className="flex w-full items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.14em]
                text-[#7890b2]

                sm:text-xs
                sm:tracking-[0.17em]
              "
            >
              Decision guide &amp; FAQ
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          {/* TITLE */}
          <h2
            className="
              !m-0
              !text-center
              !text-[30px]
              !font-extrabold
              !leading-[1.2]
              !tracking-[-0.03em]
              !text-[#091127]

              sm:!text-[34px]

              md:!text-[36px]
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
              pt-1
              text-center
              text-[15px]
              font-normal
              leading-7
              text-[#5d7192]

              sm:text-base
            "
          >
            Current availability, limitations, certification scope and
            operational status are never gated behind a demo, a sales
            conversation, account creation or a request form.
          </p>
        </div>

        {/* FAQ COLUMNS */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-5
            pt-2

            lg:grid-cols-2
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
    </section>
  );
}