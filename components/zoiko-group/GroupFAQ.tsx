"use client";

import Link from "next/link";
import { useState } from "react";

import { Eyebrow, heading, linkClass } from "./shared";

type FAQ = { question: string; answer: React.ReactNode };

const LEFT: FAQ[] = [
  {
    question: "Is Zoiko Billing the same as Zoiko Group?",
    answer:
      "No. Zoiko Billing is a product within the group — not the group itself, and not a separately incorporated company. Group-level information is published by the group's own destination.",
  },
  {
    question: "Which entity will we contract with?",
    answer:
      "The contracting entity is stated in your agreement, not inferred from the group name. Group membership establishes corporate context and nothing about who signs with you.",
  },
  {
    question: "Does a group certification cover Zoiko Billing?",
    answer: (
      <>
        Not automatically. Assurance evidence carries its own scope, status and
        date, and a certification held elsewhere in the group does not extend to
        this product by default.{" "}
        <Link href="#" className={linkClass}>
          Trust Center
        </Link>{" "}
        is where that scope is stated.
      </>
    ),
  },
  {
    question: "What other companies or brands are in the group?",
    answer:
      "That list belongs to the group destination. This page does not publish a second copy of it, because a duplicated corporate fact is a second thing to go out of date.",
  },
];

const RIGHT: FAQ[] = [
  {
    question: "Who leads Zoiko Group?",
    answer:
      "Leadership is group-level information and is published by the group's own destination. It is not restated here.",
  },
  {
    question: "Where is the group based?",
    answer:
      "Group headquarters and registered addresses are owned by the group destination. Jurisdiction of the group also does not determine the entity you contract with.",
  },
  {
    question: "Is this the group's official page?",
    answer:
      "No. This is the Zoiko Billing page explaining the relationship. The group's official page is its own destination, and this page routes to it rather than standing in for it.",
  },
  {
    question: "Does being part of a group change what I get?",
    answer: (
      <>
        No. Capability, pricing, entitlement and availability are established by
        the product, not by group membership.{" "}
        <Link href="/why-zoiko-billing" className={linkClass}>
          Why Zoiko Billing
        </Link>{" "}
        holds the design reasoning.
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

export default function GroupFAQ() {
  return (
    <section
      id="zoiko-group-faq"
      className="w-full bg-white px-4 py-16 sm:px-6 lg:px-12 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 lg:px-7">
        <div className="flex w-full max-w-[664px] flex-col items-center gap-3 pt-2">
          <Eyebrow centered>Zoiko Group FAQ</Eyebrow>

          <h2
            className={`${heading} !mb-0 text-center !text-[28px] !leading-9 !tracking-[-0.02em] !text-[#0F172A] sm:!text-[32px] sm:!leading-10 lg:!text-4xl`}
          >
            Direct answers about the relationship.
          </h2>

          <p className="!mb-0 text-center text-base !leading-7 !text-[#5B6B85]">
            Most answers here explain what the relationship does not establish,
            which is the more common misreading.
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
