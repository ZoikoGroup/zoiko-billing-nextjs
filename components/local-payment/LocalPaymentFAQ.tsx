import Link from "next/link";

import {
  FAQColumn,
  linkClass,
  type FAQ,
} from "@/components/currency-control/CurrencyFAQ";

import { Section, SectionHeading } from "./shared";

const LEFT: FAQ[] = [
  {
    question: "Does Zoiko Billing process payments?",
    answer:
      "No such claim is made. Processing, acquiring, clearing, settlement, custody and payouts are all out of scope, and processor, acquirer, bank, wallet issuer, settlement agent and merchant-of-record status cannot be inferred from this page.",
  },
  {
    question: "Which local payment methods do you support?",
    answer:
      "Not stated here. Method availability is owned by Local Payment Methods; this page only references a method context and never re-decides it.",
  },
  {
    question: "Which markets does this cover?",
    answer: (
      <>
        Not stated here. Coverage is governed by{" "}
        <Link href="/jurisdiction-availability" className={linkClass}>
          Jurisdiction Availability
        </Link>
        , and a market label on this page is specimen — it does not prove support.
      </>
    ),
  },
  {
    question: "Are you the merchant of record?",
    answer:
      "No such claim is made. Merchant-of-record status, like every other legal role in a payment flow, cannot be inferred from this page.",
  },
];

const RIGHT: FAQ[] = [
  {
    question: "What are the fees and settlement times?",
    answer: (
      <>
        Not stated here. Settlement timing is not claimed on this page, and
        commercial terms belong to{" "}
        <Link href="/pricing" className={linkClass}>
          Pricing
        </Link>
        .
      </>
    ),
  },
  {
    question: "Are you PCI compliant?",
    answer: (
      <>
        This page makes no compliance claim. Security and compliance posture is
        covered in the{" "}
        <Link href="/trust-center" className={linkClass}>
          Trust Center
        </Link>
        .
      </>
    ),
  },
  {
    question: "If we operate in a market, do the local methods follow?",
    answer:
      "No. Market coverage and method availability are separate dependencies with separate owners, and confirming one never resolves the other.",
  },
  {
    question: "Can we see live payment status here?",
    answer:
      "No. This is governance of payment paths, not a processing console — no transaction data appears and no row represents a live transaction.",
  },
];

export default function LocalPaymentFAQ() {
  return (
    <Section className="lg:gap-11">
      <SectionHeading
        eyebrow="Local payment FAQ"
        title="Direct answers, and the regulated questions route out."
        intro="Several of these are questions the page must decline rather than answer well."
      />

      <div className="grid w-full grid-cols-1 items-start gap-5 lg:grid-cols-2">
        <FAQColumn faqs={LEFT} defaultOpen />
        <FAQColumn faqs={RIGHT} defaultOpen={false} />
      </div>
    </Section>
  );
}
