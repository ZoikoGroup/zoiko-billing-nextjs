"use client";

import Link from "next/link";
import { useState } from "react";

import { Section, SectionHeading, cardClass, heading } from "./shared";

export type FAQ = { question: string; answer: React.ReactNode };

export const linkClass = "font-semibold !text-[#1F6FEB] hover:underline";

const LEFT: FAQ[] = [
  {
    question: "Which currencies does Zoiko Billing support?",
    answer: (
      <>
        Not stated here. Supported currency lists are explicitly out of scope —{" "}
        <Link href="/multi-currency" className={linkClass}>
          Multi-Currency Billing
        </Link>{" "}
        owns that, and this page names no currency at all.
      </>
    ),
  },
  {
    question: "How is this different from FX Management?",
    answer:
      "Currency Control governs which currencies are permitted, where, and on whose authority. FX Management owns conversion rates — their provenance, currentness and authority. Permitting a currency says nothing about how it is converted.",
  },
  {
    question: "If a currency is enabled, does the platform convert to it?",
    answer:
      "Not by implication. Permission to use a currency in a context is not a conversion capability. Where conversion is required, it belongs to FX Management governance.",
  },
  {
    question: "Which scope layer wins when two policies overlap?",
    answer:
      "This page does not say, because governed precedence has not been defined. Overlaps surface as “Conflict / review needed” with the affected scopes and candidate rules — the interface does not silently choose one.",
  },
];

const RIGHT: FAQ[] = [
  {
    question: "How many decimal places does a currency use?",
    answer:
      "Not stated here. Currencies can require different precision, but exact decimal places must come from governed product sources, not from this page.",
  },
  {
    question: "What rounding rule applies?",
    answer:
      "Not stated here. Rounding policy should be explicit, consistent and versioned where financially material; no specific mode, threshold or tolerance is published on this page.",
  },
  {
    question: "Does a market scope layer mean you operate there?",
    answer: (
      <>
        No. A market scope layer is a configuration context, not coverage.{" "}
        <Link href="/jurisdiction-availability" className={linkClass}>
          Jurisdiction Availability
        </Link>{" "}
        is the governed coverage source.
      </>
    ),
  },
  {
    question: "Can we set a currency per customer or contract?",
    answer:
      "Customer and contract appear as conceptual scope layers in this model. Whether a policy can be set at that level, and how it interacts with other layers, must be confirmed from governed product sources.",
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
        <span className={`${heading} text-sm !font-bold !leading-6 !text-[#0F172A]`}>
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
          <p className="!mb-0 text-sm !leading-6 !text-[#5D7192]">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQColumn({ faqs, defaultOpen }: { faqs: FAQ[]; defaultOpen: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen ? 0 : null);

  return (
    <div className={`${cardClass} w-full self-start overflow-hidden`}>
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

export default function CurrencyFAQ() {
  return (
    <Section tone="tint" className="lg:gap-11">
      <SectionHeading
        eyebrow="Currency control FAQ"
        title="Direct answers, most of them separations."
        intro="Several distinguish this page from a question it is frequently mistaken for."
      />

      <div className="grid w-full grid-cols-1 items-start gap-5 lg:grid-cols-2">
        <FAQColumn faqs={LEFT} defaultOpen />
        <FAQColumn faqs={RIGHT} defaultOpen={false} />
      </div>
    </Section>
  );
}
