"use client";

import Link from "next/link";
import { useState } from "react";

import { Eyebrow, heading, linkClass } from "./shared";

type FAQ = { question: string; answer: React.ReactNode };

const LEFT: FAQ[] = [
  {
    question: "Why are no partners listed?",
    answer: (
      <>
        No approved partner records with publication rights back this wireframe.
        Fabricating partner companies would publish claims about real
        organizations&apos; relationships with Zoiko.{" "}
        <Link href="#relationship-states" className={linkClass}>
          See the states
        </Link>
      </>
    ),
  },
  {
    question: "Does a listing mean Zoiko recommends them?",
    answer:
      "No. A listing states that an approved relationship exists and what its scope is. It is not an endorsement, a recommendation or a ranking.",
  },
  {
    question: "Is a listed integration certified?",
    answer:
      "No. A listing is not a certification. Whether an integration is available is a separate technical record, and no certification claim is published here.",
  },
  {
    question: "We have an integration but are not listed here. Why?",
    answer:
      "A relationship and an integration are separate records. An integration can exist without an approved, publishable partner relationship behind it — and this page only publishes the latter.",
  },
];

const RIGHT: FAQ[] = [
  {
    question: "Will the integration work with our setup?",
    answer: (
      <>
        This page cannot answer that. Availability varies by provider,
        jurisdiction and configuration.{" "}
        <Link href="/integrations-directory" className={linkClass}>
          Check the Integrations directory
        </Link>
      </>
    ),
  },
  {
    question: "Who supports the integration if it breaks?",
    answer: (
      <>
        It depends on the issue type — three of the six belong to Zoiko and three
        do not.{" "}
        <Link href="#support-ownership" className={linkClass}>
          See support ownership
        </Link>
      </>
    ),
  },
  {
    question: "A company claims to be a Zoiko partner — can I check?",
    answer:
      "This directory is the published record of approved relationships. If an organization is not listed here, that absence is not itself a statement about them — but no relationship is confirmed by this page unless it appears on it.",
  },
  {
    question: "Can we use each other's logos?",
    answer:
      "Only within the terms of an approved agreement. Nothing on this page grants brand or logo rights in either direction.",
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

export default function PartnersFAQ() {
  return (
    <section
      id="technology-partners-faq"
      className="w-full bg-white px-4 py-16 sm:px-6 lg:px-12 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 lg:px-7">
        <div className="flex w-full max-w-[664px] flex-col items-center gap-3 pt-2">
          <Eyebrow centered>Technology Partners FAQ</Eyebrow>

          <h2
            className={`${heading} !mb-0 text-center !text-[28px] !leading-9 !tracking-[-0.02em] !text-[#0F172A] sm:!text-[32px] sm:!leading-10 lg:!text-4xl`}
          >
            Direct answers about the directory.
          </h2>

          <p className="!mb-0 text-center text-base !leading-7 !text-[#5B6B85]">
            Most answers clarify what a listing does not establish, which is the
            common misreading.
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
