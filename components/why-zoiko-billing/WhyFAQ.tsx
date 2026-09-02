"use client";

import Link from "next/link";
import { useState } from "react";

import { Eyebrow, heading, linkClass } from "./shared";

type FAQ = { question: string; answer: React.ReactNode };

const LEFT: FAQ[] = [
  {
    question: "How does this compare to a specific competitor?",
    answer: (
      <>
        No competitor is named or characterized here. A comparison claim needs
        its own governance with a stated source, date and scope — without those,
        a comparison asserts things about another product that cannot be
        supported.{" "}
        <Link href="#claim-classification" className={linkClass}>
          See the claim classes
        </Link>
      </>
    ),
  },
  {
    question: "What ROI or savings can we expect?",
    answer:
      "No figure is published here. A savings number depends on your volumes, current process and team, so it belongs in an assessment with its method stated — not in a page that would assert it for every reader.",
  },
  {
    question: "Is Zoiko Billing the best billing platform?",
    answer:
      "That is a superlative, and this page does not make one. What it can state is how the product is designed and what that design is good for, so you can judge fit against your own billing operation.",
  },
  {
    question: "Will this make us compliant?",
    answer: (
      <>
        No. The product is designed to keep records attributable and explainable,
        which supports a compliance programme — but compliance is a determination
        about your organization.{" "}
        <Link href="#" className={linkClass}>
          Trust Center
        </Link>{" "}
        carries assurance evidence with its scope and date.
      </>
    ),
  },
];

const RIGHT: FAQ[] = [
  {
    question: 'Why does every reason say "designed to"?',
    answer:
      "Because each reason is an operating-model principle — a statement about how the product is organized, not a guarantee of a result. The claim class assigned to each card determines the language it is allowed to use.",
  },
  {
    question: "Do you support our payment provider?",
    answer: (
      <>
        No universal provider coverage is claimed; availability varies by
        provider and by jurisdiction.{" "}
        <Link href="/integrations-directory" className={linkClass}>
          Check the Integrations directory
        </Link>
      </>
    ),
  },
  {
    question: "How long does implementation take?",
    answer:
      "No universal duration or timeline is published. Readiness depends on your data, your provider set and your approval process, so it is assessed per organization rather than asserted here.",
  },
  {
    question: "What if Zoiko Billing is not a fit for us?",
    answer: (
      <>
        Then this page should say so. One of the five decision states is a
        decline, and it applies where the design genuinely does not suit the
        operation.{" "}
        <Link href="#decision-states" className={linkClass}>
          Review the decision states
        </Link>
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

function FAQColumn({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full self-start overflow-hidden rounded-2xl border border-[#DFE5EE] bg-white shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)]">
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

export default function WhyFAQ() {
  return (
    <section
      id="why-zoiko-billing-faq"
      className="w-full bg-white px-4 py-16 sm:px-6 lg:px-12 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 lg:px-7">
        <div className="flex w-full max-w-[664px] flex-col items-center gap-3 pt-2">
          <Eyebrow centered>Why Zoiko Billing FAQ</Eyebrow>

          <h2
            className={`${heading} !mb-0 text-center !text-[28px] !leading-9 !tracking-[-0.02em] !text-[#0F172A] sm:!text-[32px] sm:!leading-10 lg:!text-4xl`}
          >
            Direct answers, including the ones that decline.
          </h2>

          <p className="!mb-0 text-center text-base !leading-7 !text-[#5D7192]">
            Where a buyer wants a number or a comparison, this page says which
            source could establish it.
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
