"use client";

import Link from "next/link";
import { useState } from "react";

type FAQ = {
  question: string;
  answer?: React.ReactNode;
};

const leftFaqs: FAQ[] = [
  {
    question: "Am I protected if I test in good faith?",
    answer: (
      <>
        No safe-harbor text is reproduced here. Where Legal has approved terms
        they render from the source with their exact conditions — and if none
        are published, you have no stated protection.{" "}
        <Link
          href="#safe-harbor-rewards"
          className="font-semibold !text-[#1F6FEB] hover:underline"
        >
          See the boundary
        </Link>
      </>
    ),
  },
  {
    question: "What is in scope?",
    answer: (
      <>
        Only what the approved scope source lists, with its environment,
        exclusion and version detail. Nothing is in scope by default, and the
        absence of an exclusion is not inclusion.
      </>
    ),
  },
  {
    question: "How much evidence should I gather?",
    answer: (
      <>
        The minimum that demonstrates the finding. Volume does not strengthen a
        report, and bulk data, live secrets and weaponized payloads should not
        reach us at all.
      </>
    ),
  },
  {
    question: "Should I include the credential I found?",
    answer: (
      <>
        No. Describe it — never submit it. Any credential, token or key stays
        out of the report, whichever route you use.
      </>
    ),
  },
];

const rightFaqs: FAQ[] = [
  {
    question: "Is there a bug bounty?",
    answer: (
      <>
        No bounty, reward amount or eligibility rule is stated on this page.
        Where a program exists, its own approved source defines it — and a case
        reaching resolved does not imply a reward.
      </>
    ),
  },
  {
    question: "How quickly will you respond?",
    answer: (
      <>
        No response time is published here. None of the case states carries a
        deadline, and stating one that has not been approved would be a promise
        this page cannot keep.
      </>
    ),
  },
  {
    question: "Why won't you tell me what my report duplicated?",
    answer: (
      <>
        A duplicate state confirms the outcome for your report without exposing
        another researcher&apos;s submission or internal case detail.
      </>
    ),
  },
  {
    question: "Can I publish my findings?",
    answer: (
      <>
        Coordinate before publishing. Publication is coordinated rather than
        unilateral, and unilateral disclosure may affect whatever protection
        applies to you.
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

function FAQColumn({
  faqs,
  defaultOpen,
}: {
  faqs: FAQ[];
  defaultOpen: boolean;
}) {
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

export default function DisclosureFAQ() {
  return (
    <section
      id="disclosure-faq"
      className="w-full bg-[#f7f8fa] px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span className="text-xs font-bold uppercase !leading-4 tracking-widest !text-[#7890b2]">
              Responsible disclosure FAQ
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          <h2 className="!m-0 text-balance !text-2xl !tracking-normal font-extrabold !leading-8 font-[family-name:var(--font-jakarta)] !text-[#091127] sm:!text-3xl sm:!leading-9 md:!text-4xl md:!leading-10">
            Direct answers for researchers.
          </h2>

          <p className="m-0 w-full max-w-[687px] pt-[3.1px] text-sm font-normal !leading-6 !text-[#5d7192] sm:text-base sm:!leading-7">
            Where this page publishes nothing, it is because Security and Legal
            have not approved a value — not because it was left out.
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
