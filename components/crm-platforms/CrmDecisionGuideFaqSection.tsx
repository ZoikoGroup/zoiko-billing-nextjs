"use client";

import { useState } from "react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const leftFaqs: FaqItem[] = [
  {
    question: "Which CRM platforms are supported?",
    answer: (
      <>
        Use the current registry and the{" "}
        <Link
          href="/integrations-directory"
          className="font-semibold text-blue-600 underline"
        >
          Integrations Directory
        </Link>
        . No provider names or counts are invented.
      </>
    ),
  },
  {
    question: "Does CRM sync both ways?",
    answer:
      "Synchronization direction is explicit per field and object. Bidirectional sync is never assumed blindly; field authority controls which direction takes precedence.",
  },
  {
    question: "Which system owns customer data?",
    answer:
      "Customer data ownership is granular per field rather than per object. Financial, billing profile, and payment terms remain Billing-owned, while sales context remains CRM-owned.",
  },
  {
    question: "Can Closed Won create an invoice automatically?",
    answer:
      "Closed Won is a sales pipeline stage, not an automatic billing trigger. Invoices are generated only when receiving billing workflows validate customer profile, terms, and approvals.",
  },
  {
    question: "Can invoice or payment status appear in CRM?",
    answer:
      "Yes, high-level outbound invoice status or payment summaries can be displayed in CRM for account visibility without granting direct access to sensitive financial ledgers.",
  },
  {
    question: "Can CRM delete a Billing customer?",
    answer:
      "No. Deleting an account in CRM unlinks or restricts external references according to retention policies, but never executes automatic financial-record deletion in Billing.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "How are duplicates handled?",
    answer:
      "De-duplication is governed by approved stable external identifiers. Matching signals like name or domain prompt manual review rather than executing destructive merges.",
  },
  {
    question: "Does a CRM owner become a Billing admin?",
    answer:
      "No. Integration identity and CRM user roles do not confer Billing admin permissions. Billing authorizations remain governed separately under least privilege.",
  },
  {
    question: "Can billing data be used for lead scoring?",
    answer:
      "No. Billing data is not exported or processed for hidden customer scoring, churn propensity, or sales ranking without separate governed consent and purpose contracts.",
  },
  {
    question: "Can I build a custom CRM integration?",
    answer:
      "Yes. Developers can use standard Zoiko Billing APIs, webhooks, and sandbox environments to connect custom CRM or internal sales systems.",
  },
  {
    question: "How does this fit Revenue Operations?",
    answer:
      "It aligns Revenue Operations by establishing clear field authority boundaries, eliminating single-master assumptions, and maintaining audit-ready financial records.",
  },
  {
    question: "Where is banking or accounting handled?",
    answer:
      "Banking, payment gateways, and core accounting stay strictly within Billing and accounting integrations. CRM platforms receive only essential operational summaries.",
  },
];

function FaqColumn({
  faqs,
  openIndex,
  onToggle,
}: {
  faqs: FaqItem[];
  openIndex: number | null;
  onToggle: (index: number) => void;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-[#dfe5ee]
        bg-white
        p-5
        shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
        sm:p-6
      "
    >
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question}
            className={`py-4 first:pt-0 last:pb-0 ${
              index !== faqs.length - 1
                ? "border-b border-[#edf0f4]"
                : ""
            }`}
          >
            <button
              type="button"
              onClick={() => onToggle(index)}
              className="
                flex
                w-full
                items-center
                justify-between
                gap-4
                text-left
                text-sm
                font-semibold
                leading-6
                text-[#091127]
                transition
                hover:text-blue-600
                sm:text-base
              "
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>

              <span
                className={`
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-xs
                  font-bold
                  ${
                    isOpen
                      ? "bg-blue-600 text-white"
                      : "bg-[#f1f4f8] text-[#5d7192]"
                  }
                `}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen && (
              <div className="mt-3 pr-8 text-sm leading-6 text-[#5d7192]">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function CrmDecisionGuideFaqSection() {
  const [openLeftIdx, setOpenLeftIdx] = useState<number | null>(0);
  const [openRightIdx, setOpenRightIdx] = useState<number | null>(null);

  return (
    <section
      id="crm-faq"
      className="w-full bg-[#f7f8fa]"
    >
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
          {/* INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[760px]
              flex-col
              items-center
              gap-3
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
                Decision Guide &amp; FAQ
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
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
              Direct answers about CRM connections.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[700px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              No public form should request CRM credentials, customer lists,
              account exports, opportunity data, invoice or payment payloads,
              consent records or production integration secrets just to
              evaluate compatibility.
            </p>
          </div>

          {/* FAQ COLUMNS */}
          <div className="grid w-full grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-6">
            <FaqColumn
              faqs={leftFaqs}
              openIndex={openLeftIdx}
              onToggle={(index) =>
                setOpenLeftIdx(openLeftIdx === index ? null : index)
              }
            />

            <FaqColumn
              faqs={rightFaqs}
              openIndex={openRightIdx}
              onToggle={(index) =>
                setOpenRightIdx(openRightIdx === index ? null : index)
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}