"use client";

import Link from "next/link";
import { useState } from "react";

type FAQ = {
  question: string;
  answer?: React.ReactNode;
};

const leftFaqs: FAQ[] = [
  {
    question: "Will you delete all my data if I ask?",
    answer: (
      <>
        A request is evaluated against applicable retention and preservation
        obligations. Some records may be deletable while others in the same
        account are required to be preserved — and a legal or audit hold can
        suspend disposition entirely.{" "}
        <Link
          href="#retention-deletion-holds"
          className="font-semibold !text-[#1F6FEB] hover:underline"
        >
          See the states
        </Link>
      </>
    ),
  },
  {
    question: "Are you a controller or a processor?",
    answer: (
      <>
        It depends on the processing activity and your agreement. The role is
        determined by the binding Privacy Notice and your contract, not by this
        page.
      </>
    ),
  },
  {
    question: "How long do you keep billing records?",
    answer: (
      <>
        No period is published unless it has been approved for publication.
        Records remain while an approved operational, legal or contractual
        purpose requires them, and that condition ends.
      </>
    ),
  },
  {
    question: "Where is my data stored?",
    answer: (
      <>
        Data location and residency are not stated here, and they are never
        inferred from continuity or architecture content. The privacy source
        and your contract govern.
      </>
    ),
  },
];

const rightFaqs: FAQ[] = [
  {
    question: "Can you correct a record without a trail?",
    answer: (
      <>
        Authoritative financial and operational records may use a correction
        history rather than a silent overwrite, so the original and the
        correction both remain visible. The product and legal source decides
        the behavior.
      </>
    ),
  },
  {
    question: "Does a product export satisfy portability?",
    answer: (
      <>
        Not automatically. A product export and a legal portability request are
        different things that happen to produce a file; which one applies
        depends on your context.
      </>
    ),
  },
  {
    question: "What about data I already exported?",
    answer: (
      <>
        Once data leaves through an export or an integration you configured,
        governance of that copy moves with it. No privacy request to us can
        retrieve it.
      </>
    ),
  },
  {
    question: "Who are your subprocessors?",
    answer: (
      <>
        The controlled subprocessor source owns that list, and it is linked
        where approved rather than duplicated into static content that would
        drift.
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
    <div className="border-b border-[#edf0f4] last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-5 py-6 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold !leading-6 !text-[#091127] font-[family-name:var(--font-jakarta)]">
          {faq.question}
        </span>

        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-sm font-semibold !leading-5 transition-transform duration-200 ${
            open
              ? "rotate-45 bg-[#1F6FEB] !text-white"
              : "bg-[#f7f8fa] !text-[#5d7192]"
          }`}
        >
          +
        </span>
      </button>

      {open && faq.answer && (
        <div className="px-5 pb-6">
          <p className="m-0 text-sm font-normal !leading-6 !text-[#5d7192]">
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
    <div className="w-full self-start overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
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

export default function PrivacyFAQ() {
  return (
    <section
      id="privacy-faq"
      className="w-full bg-white px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span className="text-xs font-bold uppercase !leading-4 tracking-widest !text-[#7890b2]">
              Privacy &amp; data governance FAQ
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          <h2 className="!m-0 !text-2xl !tracking-normal font-extrabold !leading-8 text-balance font-[family-name:var(--font-jakarta)] !text-[#091127] sm:!text-3xl sm:!leading-9 md:!text-4xl md:!leading-10">
            Direct answers, including the ones
            that are not reassuring.
          </h2>

          <p className="m-0 w-full max-w-[687px] pt-[3.1px] text-sm font-normal !leading-6 !text-[#5d7192] sm:text-base sm:!leading-7">
            Where the honest answer is &quot;it depends on the context,&quot;
            this page says which context decides.
          </p>
        </div>

        {/* Columns */}
        <div className="grid w-full grid-cols-1 items-start gap-5 lg:grid-cols-2">
          <FAQColumn faqs={leftFaqs} defaultOpen={false} />
          <FAQColumn faqs={rightFaqs} defaultOpen={false} />
        </div>
      </div>
    </section>
  );
}
