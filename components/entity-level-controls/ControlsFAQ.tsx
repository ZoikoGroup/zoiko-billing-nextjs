"use client";

import Link from "next/link";
import { useState } from "react";

import { Eyebrow, heading } from "./shared";

type FAQ = { question: string; answer: React.ReactNode };

const linkClass = "font-semibold !text-[#1F6FEB] hover:underline";

const LEFT: FAQ[] = [
  {
    question: "What are Entity-Level Controls?",
    answer:
      "Zoiko Billing controls for entity-specific access, configuration and approvals. This product meaning is deliberately distinct from audit and internal-control terminology that uses similar words.",
  },
  {
    question: "Can different teams manage different entities?",
    answer:
      "Yes. Each assignment names the entity or explicit entity set it applies to, so one team can own a subsidiary without gaining any rights in the others.",
  },
  {
    question: "Can a central team see all entities?",
    answer:
      "Where approved, yes — as read-only oversight. Visibility across entities is a separate grant from the right to issue, pay, approve or configure anything in them.",
  },
  {
    question: "Can an admin approve their own work?",
    answer:
      "Only where policy explicitly allows it. Self-approval is configured as allowed or blocked; it is never inferred from someone holding an administrative role.",
  },
  {
    question: "Can access be temporary?",
    answer:
      "Yes. Delegation and support access are purpose-bound with a start, an end and revocation. When the window expires the access is denied, even mid-session.",
  },
  {
    question: "Does single sign-on automatically give entity access?",
    answer:
      "No. Directory and SSO provide authentication and group input only. Final Billing authorization still evaluates the current entity scope and policy.",
  },
];

const RIGHT: FAQ[] = [
  {
    question: "Can integrations act across entities?",
    answer:
      "Only within the entity scope configured for that service principal. An external role in an ERP or CRM does not become a Billing role automatically.",
  },
  {
    question: "Does this make us audit-ready or compliant?",
    answer:
      "No. The product records who reviewed what, when and with what outcome. It does not assert that your permissions are correct or that any framework is met.",
  },
  {
    question: "How does this work with Multi-Entity Billing?",
    answer: (
      <>
        Multi-Entity Billing establishes the entities themselves; these controls
        govern who may act for each one.{" "}
        <Link href="/multi-entity-billing" className={linkClass}>
          Review Multi-Entity Billing
        </Link>
      </>
    ),
  },
  {
    question: "Can controls vary by jurisdiction?",
    answer: (
      <>
        A jurisdiction or currency filter may constrain scope only where it is
        explicitly configured — never inferred from a location or currency alone.{" "}
        <Link href="/jurisdiction-availability" className={linkClass}>
          See Jurisdiction Availability
        </Link>
      </>
    ),
  },
  {
    question: "Can template publication be restricted by entity?",
    answer:
      "Yes. Document and template applicability carries entity, locale and surface scope, and authority over controlled text stays separate from the right to publish.",
  },
  {
    question: "Where do general product roles live?",
    answer: (
      <>
        General roles and approval routing for the product as a whole are covered
        by{" "}
        <Link href="/roles-and-approvals" className={linkClass}>
          Roles &amp; Approvals
        </Link>
        . This page covers only what is scoped per billing entity.
      </>
    ),
  },
];

function FAQItem({
  faq,
  open,
  onClick,
}: {
  faq: FAQ;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[#EDF0F4] last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-6 text-left"
      >
        <span
          className={`${heading} text-sm !font-bold !leading-6 !text-[#0F172A]`}
        >
          {faq.question}
        </span>

        <span
          aria-hidden
          className={`flex size-5 shrink-0 items-center justify-center text-sm font-semibold !leading-5 transition-transform duration-200 ${
            open
              ? "rotate-45 rounded-full bg-[#1F6FEB] !text-white"
              : "rounded-md bg-[#F7F8FA] !text-[#5D7192]"
          }`}
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-5 pb-6">
          <p className="!mb-0 text-sm !leading-6 !text-[#5D7192]">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

function FAQColumn({ faqs, defaultOpen }: { faqs: FAQ[]; defaultOpen: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpen ? 0 : null
  );

  return (
    <div className="w-full self-start overflow-hidden rounded-2xl border border-[#DFE5EE] bg-white shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)]">
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.question}
          faq={faq}
          open={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

export default function ControlsFAQ() {
  return (
    <section
      id="controls-faq"
      className="w-full bg-[#F7F8FA] px-4 py-16 sm:px-6 lg:px-12 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 lg:px-7">
        <div className="flex w-full max-w-[664px] flex-col items-center gap-3 pt-2">
          <Eyebrow centered>Decision guide &amp; FAQ</Eyebrow>

          <h2
            className={`${heading} !mb-0 text-center !text-[28px] !leading-9 !tracking-[-0.02em] !text-[#0F172A] sm:!text-[32px] sm:!leading-10 lg:!text-4xl`}
          >
            Direct answers about entity-level controls.
          </h2>

          <p className="!mb-0 text-center text-base !leading-7 !text-[#5D7192]">
            Evaluating this never requires submitting employee lists, org charts,
            permission exports, security logs, customer data or confidential
            policies through a public form.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 items-start gap-5 lg:grid-cols-2">
          <FAQColumn faqs={LEFT} defaultOpen={false} />
          <FAQColumn faqs={RIGHT} defaultOpen={false} />
        </div>
      </div>
    </section>
  );
}
