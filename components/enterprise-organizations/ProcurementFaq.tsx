"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "Is Zoiko Billing suitable for enterprise organizations?",
    answer:
      "Use this page to evaluate governed multi-team and integration-led requirements. Exact capability, availability and service scope remain dependent on configuration, market and contract.",
  },
  {
    question: "Does Enterprise include single sign-on or custom roles?",
    answer:
      "Enterprise identity capabilities depend on the configured plan, available functionality and applicable commercial scope.",
  },
  {
    question: "Can it support multiple entities and currencies?",
    answer:
      "Multi-entity and currency capabilities depend on the supported configuration and market availability.",
  },
  {
    question: "Does it replace our ERP or accounting system?",
    answer:
      "No. Zoiko Billing should be evaluated as part of the broader billing and financial systems architecture rather than as a universal ERP or accounting replacement.",
  },
  {
    question:
      "Can we get custom service levels, round-the-clock support or dedicated success management?",
    answer:
      "Service levels, support coverage and success management are commercial and service entitlements and depend on the applicable agreement.",
  },
];

const rightFaqs = [
  {
    question: "What about data residency?",
    answer:
      "Data residency and localization depend on the approved options and markets available for the applicable configuration.",
  },
  {
    question: "Can it handle very high volume?",
    answer:
      "Capacity depends on verified evidence for the applicable configuration. Unsupported volume, concurrency or throughput claims are not assumed.",
  },
  {
    question: "How much does Enterprise cost?",
    answer:
      "Enterprise pricing depends on scope, configuration, requirements and commercial terms.",
  },
  {
    question: "How is procurement handled?",
    answer:
      "Procurement follows the applicable commercial process and requirements for the organization.",
  },
  {
    question: "Will this page tell us whether we need Enterprise?",
    answer:
      "It provides the architecture and governance context needed for evaluation. The final plan and commercial fit depend on your specific requirements.",
  },
];

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
      >
        <span className="text-sm font-semibold leading-6 text-slate-900">
          {question}
        </span>

        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-slate-100 text-sm font-semibold text-slate-600 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm font-normal leading-6 text-slate-600">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

function FaqColumn({
  faqs,
  openId,
  setOpenId,
  column,
}: {
  faqs: typeof leftFaqs;
  openId: string | null;
  setOpenId: (id: string | null) => void;
  column: string;
}) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
      {faqs.map((faq, index) => {
        const id = `${column}-${index}`;
        const isOpen = openId === id;

        return (
          <FaqItem
            key={id}
            question={faq.question}
            answer={faq.answer}
            open={isOpen}
            onToggle={() => setOpenId(isOpen ? null : id)}
          />
        );
      })}
    </div>
  );
}

export default function ProcurementFaq() {
  const [openId, setOpenId] = useState<string | null>("left-0");

  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 xl:px-16 xl:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
        {/* Header */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-1 sm:pt-2">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-4 shrink-0 bg-blue-600 opacity-40 sm:w-5" />

            <span className="text-center text-[10px] font-bold uppercase leading-4 tracking-[0.14em] text-blue-600 sm:text-xs sm:tracking-[0.18em]">
              Procurement, commercial fit &amp; FAQ
            </span>

            <span className="h-px w-4 shrink-0 bg-blue-600 opacity-40 sm:w-5" />
          </div>

          {/* Heading */}
          <h2 className="w-full px-2 text-center text-2xl font-extrabold leading-8 tracking-tight text-slate-900 sm:px-0 sm:text-3xl sm:leading-9 lg:text-4xl lg:leading-10">
            Questions procurement and architecture ask first.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] px-2 text-center text-sm font-normal leading-6 text-slate-600 sm:px-0 sm:text-base sm:leading-7">
            Where an answer depends on your configuration, market or contract,
            it says so rather than implying inclusion.
          </p>
        </div>

        {/* FAQ */}
        <div className="flex w-full flex-col gap-5 pt-2 lg:flex-row lg:items-start">
          <FaqColumn
            faqs={leftFaqs}
            openId={openId}
            setOpenId={setOpenId}
            column="left"
          />

          <FaqColumn
            faqs={rightFaqs}
            openId={openId}
            setOpenId={setOpenId}
            column="right"
          />
        </div>
      </div>
    </section>
  );
}