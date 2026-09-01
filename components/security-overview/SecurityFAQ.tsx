"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: React.ReactNode;
};

const leftFAQs: FAQ[] = [
  {
    question: "Which certifications do you hold?",
    answer: (
      <>
        This page asserts none. Where approved evidence exists, it renders from
        Trust Center with its scope, status, and date — the attributes a badge
        would omit.{" "}
        <span className="font-semibold text-blue-600">
          See the classification
        </span>
        .
      </>
    ),
  },
  {
    question: "What encryption do you use?",
    answer:
      "Encryption details are published only where an approved source supports the claim. This page does not invent algorithms, key-management details, or encryption guarantees that are not established by an authoritative source.",
  },
  {
    question: "Which cloud provider or region hosts my data?",
    answer:
      "This page does not make cloud-provider, hosting-region, residency, or geographic infrastructure claims. Refer to the appropriate Privacy & Data Governance or Trust Center source for approved information.",
  },
  {
    question: "Do you monitor 24x7?",
    answer:
      "No 24x7 monitoring coverage, staffing model, response target, or operational commitment is asserted on this page unless supported by an approved source.",
  },
];

const rightFAQs: FAQ[] = [
  {
    question: "Your provider is certified — does that cover you?",
    answer:
      "No. A provider's certification does not automatically establish the security posture of the service using that provider. The relevant service controls, scope, responsibilities, and evidence must be assessed separately.",
  },
  {
    question: "How many vulnerabilities do you have open?",
    answer:
      "No vulnerability count is stated here. Counts can become misleading without scope, severity, status, and reporting date, so this page does not provide an unsupported number.",
  },
  {
    question: "What am I responsible for?",
    answer:
      "You remain responsible for configuration and controls under your authority, including account administration, identity configuration, credential hygiene, integration endpoints, exported data, and your own incident-response actions.",
  },
  {
    question: "Is there an incident right now?",
    answer:
      "This page does not answer current incident-status questions. Current availability and incidents belong to the System Status authority, where live status and event history can be checked.",
  },
];

export default function SecurityFAQ() {
  return (
    <section className="w-full bg-color-grey-97-4 px-6 py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 px-7">
        {/* Header */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2">
          <div className="relative h-4 w-40">
            <div className="absolute left-0 top-[8px] h-px w-4 bg-color-azure-60 opacity-40" />

            <div className="absolute left-7 top-[-1px] w-24 text-center text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Security FAQ
            </div>

            <div className="absolute left-[142px] top-[8px] h-px w-4 bg-color-azure-60 opacity-40" />
          </div>

          <div className="flex w-full flex-col items-center">
            <h2 className="text-center text-4xl font-extrabold leading-10 text-color-azure-11-2">
              Direct answers, including where we
              publish nothing.
            </h2>
          </div>

          <div className="flex w-full max-w-[687px] flex-col items-center pt-1">
            <p className="text-center text-base font-normal leading-7 text-color-azure-44-3">
              Absence of a claim here means no approved source supports it —
              not that it was left
              <br />
              out for brevity.
            </p>
          </div>
        </div>

        {/* FAQ Columns */}
        <div className="flex w-full flex-col gap-5 lg:flex-row">
          {/* Left */}
          <div className="flex-1 overflow-hidden rounded-2xl bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-color-grey-92-4">
            {leftFAQs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                openByDefault={index === 0}
              />
            ))}
          </div>

          {/* Right */}
          <div className="flex-1 overflow-hidden rounded-2xl bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-color-grey-92-4">
            {rightFAQs.map((faq) => (
              <FAQItem key={faq.question} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  faq,
  openByDefault = false,
}: {
  faq: FAQ;
  openByDefault?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(openByDefault);

  return (
    <div className="border-b border-color-grey-95-10 last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex min-h-20 w-full items-center justify-between gap-5 px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold leading-6 text-color-azure-11-2">
          {faq.question}
        </span>

        <span
          className={`flex size-5 shrink-0 items-center justify-center rounded-md bg-color-grey-97-4 transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <span className="text-sm font-semibold leading-6 text-color-azure-44-3">
            +
          </span>
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5">
          <p className="text-sm font-normal leading-5 text-slate-500">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}