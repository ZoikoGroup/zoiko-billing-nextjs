"use client";

import Link from "next/link";
import { useState } from "react";

type FAQ = {
  question: string;
  answer?: React.ReactNode;
};

const leftFaqs: FAQ[] = [
  {
    question:
      "There are no advisories listed — does that mean there are no issues?",
    answer: (
      <>
        No. It means no advisory is currently published. And if the registry is
        unreachable, this page says so rather than showing an empty list as
        current.{" "}
        <Link
          href="#advisory-states"
          className="font-semibold !text-[#1F6FEB] hover:underline"
        >
          See the states
        </Link>
      </>
    ),
  },
  {
    question: "Why does this advisory have no CVSS score or CVE ID?",
    answer: (
      <>
        Because neither has been authoritatively assigned yet. Both appear only
        after an external authority provides them — never auto-generated from
        the advisory text.
      </>
    ),
  },
  {
    question: 'Does "no customer action required" mean I am not affected?',
    answer: (
      <>
        No. It states that no action is required of you, not that your account
        falls outside the affected scope. Applicability is a separate field.
      </>
    ),
  },
  {
    question: "Is a mitigation the same as a fix?",
    answer: (
      <>
        No. A mitigation reduces exposure while the underlying issue remains; a
        fix resolves it. An advisory distinguishes the two rather than
        presenting either as the other.
      </>
    ),
  },
];

const rightFaqs: FAQ[] = [
  {
    question: "How do I know if my account is affected?",
    answer: (
      <>
        The advisory states its affected scope and the criteria it uses. Where
        it cannot determine applicability from those criteria, it says so and
        routes you to{" "}
        <Link
          href="/contact-support"
          className="font-semibold !text-[#1F6FEB] hover:underline"
        >
          Contact Support
        </Link>{" "}
        rather than guessing.
      </>
    ),
  },
  {
    question: "Does an advisory mean there is an outage?",
    answer: (
      <>
        No. A vulnerability is not an incident by default. Current service
        availability belongs to System Status, and this page never asserts
        operational state.
      </>
    ),
  },
  {
    question: "Why can I still see steps marked deprecated?",
    answer: (
      <>
        So you can recognise guidance you may already have followed. Deprecated
        steps stay visible and labelled; where guidance conflicts, the newest
        advisory governs.
      </>
    ),
  },
  {
    question: "Can I subscribe to advisories?",
    answer: (
      <>
        Only where an approved notification mechanism exists — none is
        described here. A subscription would never replace checking the current
        advisory list.
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

export default function AdvisoriesFAQ() {
  return (
    <section
      id="advisories-faq"
      className="w-full bg-white px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span className="text-xs font-bold uppercase !leading-4 tracking-widest !text-[#7890b2]">
              Security Advisories FAQ
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          <h2 className="!m-0 text-balance !text-2xl !tracking-normal font-extrabold !leading-8 font-[family-name:var(--font-jakarta)] !text-[#091127] sm:!text-3xl sm:!leading-9 md:!text-4xl md:!leading-10">
            Direct answers about what an advisory tells you.
          </h2>

          <p className="m-0 w-full max-w-[687px] pt-[3.1px] text-sm font-normal !leading-6 !text-[#5d7192] sm:text-base sm:!leading-7">
            Where a field is missing from an advisory, that absence is
            deliberate and means something specific.
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
