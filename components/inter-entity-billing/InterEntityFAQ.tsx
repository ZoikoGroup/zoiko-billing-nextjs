import Link from "next/link";

import {
  FAQColumn,
  linkClass,
  type FAQ,
} from "@/components/currency-control/CurrencyFAQ";

import { Section, SectionHeading } from "./shared";

const LEFT: FAQ[] = [
  {
    question: "Does this handle transfer pricing?",
    answer:
      "No. Transfer-pricing rules, arm's-length policies and documentation sufficiency are out of scope. The page treats specialist review as a first-class approval state — it does not perform or conclude the analysis.",
  },
  {
    question: "How is this different from Multi-Entity Billing?",
    answer: (
      <>
        <Link href="/multi-entity-billing" className={linkClass}>
          Multi-Entity Billing
        </Link>{" "}
        covers billing customers from several of your entities. This page covers
        charges between those entities, where both sides are you and the approval
        requirements differ.
      </>
    ),
  },
  {
    question: "What tax treatment applies to an intercompany charge?",
    answer:
      "Not stated here. Tax treatment is a specialist determination. The model records tax and legal review as its own approval state, but never concludes what the treatment is.",
  },
  {
    question: "Does an approved instruction post to our GL?",
    answer:
      "Not claimed. Approval and arrival are separate facts — no journal schema, account mapping or posting behavior is described, and the downstream outcome is tracked as its own state.",
  },
];

const RIGHT: FAQ[] = [
  {
    question: "Why are there four approval states instead of one?",
    answer:
      "Business ownership, specialist review, accounting acceptance and downstream outcome are separate decisions, usually made by different people. A single “Approved” label hides which of them actually happened.",
  },
  {
    question: "Can the billing operator approve their own instruction?",
    answer:
      "The billing operator prepares the instruction and cannot self-assert specialist approvals. Whether any self-approval is allowed is a policy decision, never inferred from a role.",
  },
  {
    question: "Does this net or settle balances between entities?",
    answer:
      "No. Netting, payment execution and settlement timing are not claimed. Cash movement may occur downstream, outside what this page describes.",
  },
  {
    question: "Can entity references come from our directory or domains?",
    answer:
      "Entity references come from an authoritative entity source. They are never inferred from a brand, domain or trading name.",
  },
];

export default function InterEntityFAQ() {
  return (
    <Section tone="tint" className="lg:gap-11">
      <SectionHeading
        eyebrow="Inter-entity billing FAQ"
        title="Direct answers, and the specialist questions route out."
        intro="Several of these are questions a billing platform should decline rather than answer well."
      />

      <div className="grid w-full grid-cols-1 items-start gap-5 lg:grid-cols-2">
        <FAQColumn faqs={LEFT} defaultOpen />
        <FAQColumn faqs={RIGHT} defaultOpen={false} />
      </div>
    </Section>
  );
}
