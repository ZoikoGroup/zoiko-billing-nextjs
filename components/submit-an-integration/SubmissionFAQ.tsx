"use client";

import Link from "next/link";
import { useState } from "react";

import { Eyebrow, heading, linkClass } from "./shared";

type FAQ = { question: string; answer: React.ReactNode };

const LEFT: FAQ[] = [
  {
    question: "Does technical acceptance mean we are listed?",
    answer: (
      <>
        No. Publication is a separate decision by a separate authority, as is
        partnership and as is portal access. One authority reviewed one thing.{" "}
        <Link href="#decision-ladder" className={linkClass}>
          See the ladder
        </Link>
      </>
    ),
  },
  {
    question: "Can I include a test API key so you can reproduce it?",
    answer:
      "No. No route accepts a credential, and a test key is still a credential. Describe the authentication mechanism by reference instead — the mechanism is public, the value is yours.",
  },
  {
    question: "What if I already submitted a secret by mistake?",
    answer:
      "Rotate it immediately at its source — that is the only action that makes it safe. Then say so through an approved channel so the record can be handled.",
  },
  {
    question: "How long does review take?",
    answer:
      "No timeline is published, here or in a confirmation. A complete submission with its architecture summary and test evidence avoids the review cycles that a missing one costs.",
  },
];

const RIGHT: FAQ[] = [
  {
    question: "Do I need to be a partner to submit?",
    answer: (
      <>
        No. Technical submission and relationship intent are separate in both
        directions — submitting does not create a partnership, and a partnership
        is not required to submit.{" "}
        <Link href="/technology-partners" className={linkClass}>
          See Technology Partners
        </Link>
      </>
    ),
  },
  {
    question: "Why do you ask about error and retry behavior?",
    answer:
      "Because an unknown outcome that gets retried can produce a duplicate financial record. How the integration behaves on failure is part of what a review has to understand.",
  },
  {
    question: "Can I attach logs and screenshots?",
    answer:
      "Yes, redacted — synthetic data, cropped screenshots, identifiers and tokens removed. The redaction review before submit exists specifically to catch what got pasted in anyway.",
  },
  {
    question: "Our integration changed — do I resubmit?",
    answer:
      "Where the change affects the architecture, the data boundary or the authentication approach, yes. A technical acceptance describes what was reviewed, not whatever it later became.",
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
    <div className="border-b border-[#EDF1F7] last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-6 text-left"
      >
        <span className="text-sm font-semibold !leading-6 !text-[#0F172A]">
          {faq.question}
        </span>

        <span
          aria-hidden
          className={`flex size-5 shrink-0 items-center justify-center text-sm font-semibold !leading-5 transition-transform duration-200 ${
            open
              ? "rotate-45 rounded-full bg-[#1F6FEB] !text-white"
              : "rounded-md bg-[#F5F7FB] !text-[#5B6B85]"
          }`}
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-5 pb-6">
          <p className="!mb-0 text-sm !leading-5 !text-[#5B6B85]">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

function FAQColumn({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full self-start overflow-hidden rounded-2xl border border-[#E5EAF2] bg-white shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)]">
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

export default function SubmissionFAQ() {
  return (
    <section
      id="submit-an-integration-faq"
      className="w-full bg-white px-4 py-16 sm:px-6 lg:px-12 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 lg:px-7">
        <div className="flex w-full max-w-[664px] flex-col items-center gap-3 pt-2">
          <Eyebrow centered>Submit an Integration FAQ</Eyebrow>

          <h2
            className={`${heading} !mb-0 text-center !text-[28px] !leading-9 !tracking-[-0.02em] !text-[#0F172A] sm:!text-[32px] sm:!leading-10 lg:!text-4xl`}
          >
            Direct answers for builders.
          </h2>

          <p className="!mb-0 text-center text-base !leading-7 !text-[#5B6B85]">
            Most of these clarify what a review decision does not extend to.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 items-start gap-5 lg:grid-cols-2">
          <FAQColumn faqs={LEFT} />
          <FAQColumn faqs={RIGHT} />
        </div>
      </div>
    </section>
  );
}
