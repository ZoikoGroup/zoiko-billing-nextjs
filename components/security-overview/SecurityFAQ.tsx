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
        This page asserts none. Where approved evidence exists, it renders
        from Trust Center with its scope, status, and date — the attributes a
        badge would omit.{" "}
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
    <section className="w-full bg-color-grey-97-4">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-9 sm:gap-10 md:gap-11">
          {/* Header */}
          <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-1 sm:pt-2">
            {/* Eyebrow */}
            <div className="flex w-full items-center justify-center gap-3">
              <div className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />

              <span className="text-center text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-color-azure-60 sm:text-xs">
                Security FAQ
              </span>

              <div className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />
            </div>

            {/* Heading */}
            <h2 className="w-full text-center !text-[30px] !font-extrabold !leading-[1.2] !tracking-[-0.035em] !text-color-azure-11-2 sm:!text-[34px] md:!text-[36px] lg:!text-[40px]">
              Direct answers, including where we
              publish nothing.
            </h2>

            {/* Description */}
            <p className="w-full max-w-[687px] pt-1 text-center text-[15px] font-normal leading-7 text-color-azure-44-3 sm:text-base">
              Absence of a claim here means no approved source supports it —
              not that it was left out for brevity.
            </p>
          </div>

          {/* FAQ Columns */}
          <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
            {/* Left */}
            <div className="w-full overflow-hidden rounded-2xl bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-color-grey-92-4">
              {leftFAQs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  openByDefault={index === 0}
                />
              ))}
            </div>

            {/* Right */}
            <div className="w-full overflow-hidden rounded-2xl bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-color-grey-92-4">
              {rightFAQs.map((faq) => (
                <FAQItem key={faq.question} faq={faq} />
              ))}
            </div>
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
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex min-h-[72px] w-full items-center justify-between gap-4 px-4 py-4 text-left sm:min-h-20 sm:gap-5 sm:px-5"
        aria-expanded={isOpen}
      >
        <span className="min-w-0 pr-2 text-[13px] font-semibold leading-6 text-color-azure-11-2 sm:text-sm">
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
        <div className="px-4 pb-5 sm:px-5">
          <p className="text-[13px] font-normal leading-6 text-slate-500 sm:text-sm sm:leading-5">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}