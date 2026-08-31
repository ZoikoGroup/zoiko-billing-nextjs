"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: React.ReactNode;
};

const leftFaqs: FAQ[] = [
  {
    question: "Do I need to send my API key?",
    answer: (
      <>
        No. Support never needs a credential to diagnose an integration, and
        never asks for one. Detected secrets are blocked before submission and
        are not echoed back or logged.{" "}
        <span className="font-semibold text-blue-600">See the intake</span>
      </>
    ),
  },
  {
    question: "My request timed out — should I retry?",
    answer: (
      <>
        Not blindly. A timeout does not establish whether the request was
        processed. Check the current write-safety and reconciliation guidance
        first, then use the available request, reference, and timestamp
        information to determine the outcome before retrying.
      </>
    ),
  },
  {
    question: "Why does this page not explain the API?",
    answer: (
      <>
        This page focuses on integration support and diagnosis rather than
        replacing the technical API contract. Use the current API
        Documentation for endpoints, parameters, responses, authentication
        methods, and supported behavior.
      </>
    ),
  },
  {
    question: "Can support see my logs or inspect my account?",
    answer: (
      <>
        Support only works with the account-specific evidence required for
        diagnosis. Customers should provide the minimum safe context needed,
        such as identifiers, timestamps, status information, or redacted
        fragments. Full logs, credentials, and unnecessary sensitive payloads
        should not be submitted.
      </>
    ),
  },
];

const rightFaqs: FAQ[] = [
  {
    question: "Are webhook deliveries guaranteed exactly once?",
    answer: (
      <>
        No exactly-once delivery guarantee should be assumed unless it is
        explicitly stated in the authoritative Webhooks documentation.
        Separate delivery evidence from the downstream consumer effect and use
        the documented retry and deduplication behavior.
      </>
    ),
  },
  {
    question: "Can support reset a credential for me?",
    answer: (
      <>
        No. Support cannot recover or reset a secret for you. Rotate or
        regenerate credentials through the approved account controls, and
        never send the existing secret to Support.
      </>
    ),
  },
  {
    question: "What if I cannot categorize my issue?",
    answer: (
      <>
        That is a valid answer. Do not invent a category just to submit the
        request. Provide the observable symptom and the minimum safe evidence
        available so the issue can be routed through internal triage.
      </>
    ),
  },
  {
    question: "Will you ask me to reproduce it in production?",
    answer: (
      <>
        No. Reproduction should use an approved sandbox, testing, or replay
        capability where available. Do not perform potentially destructive
        actions in production simply to reproduce an uncertain integration
        issue.
      </>
    ),
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-color-grey-95-10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex min-h-20 w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold leading-6 text-color-azure-11-2">
          {faq.question}
        </span>

        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-color-grey-97-4 text-sm font-semibold leading-5 text-color-azure-44-3 transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5">
          <div className="text-sm font-normal leading-5 text-color-azure-44-3">
            {faq.answer}
          </div>
        </div>
      )}
    </div>
  );
}

function FAQColumn({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex-1 overflow-hidden rounded-2xl bg-color-white-solid shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-color-grey-92-4">
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.question}
          faq={faq}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
}

export default function IntegrationSupportFAQ() {
  return (
    <section className="w-full bg-color-grey-97-4 px-6 py-16 sm:px-8 lg:px-24 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-2">
          {/* Eyebrow */}
          <div className="flex h-4 items-center justify-center">
            <span className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />

            <span className="mx-2 whitespace-nowrap text-center text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Integration Support FAQ
            </span>

            <span className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />
          </div>

          {/* Title */}
          <div className="w-full">
            <h2 className="text-center font-['Plus_Jakarta_Sans'] text-3xl font-extrabold leading-10 text-color-azure-11-2 sm:text-4xl">
              Direct answers before you open a
              <br className="hidden sm:block" />
              case.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[687px] pt-[3px]">
            <p className="text-center font-['Inter'] text-sm font-normal leading-6 text-color-azure-44-3 sm:text-base sm:leading-7">
              No response time, priority model or channel commitment appears
              here — Support Policy owns those.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="flex w-full flex-col items-stretch gap-5 lg:flex-row">
          <FAQColumn faqs={leftFaqs} />
          <FAQColumn faqs={rightFaqs} />
        </div>
      </div>
    </section>
  );
}