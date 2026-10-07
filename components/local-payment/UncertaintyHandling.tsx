import Link from "next/link";

import { GuardrailTable, Section, SectionHeading, linkClass } from "./shared";

const ROWS = [
  {
    label: "Method availability unknown",
    scope: "Route to Local Payment Methods or source review.",
    guardrail: "Do not infer method support.",
  },
  {
    label: "Coverage unknown",
    scope: (
      <>
        Route to{" "}
        <Link href="/jurisdiction-availability" className={linkClass}>
          Supported Countries
        </Link>
        .
      </>
    ),
    guardrail: "Do not infer market support.",
  },
  {
    label: "Currency context unknown",
    scope: "Route to currency context governance.",
    guardrail: "Do not infer acceptance.",
  },
  {
    label: "Compliance review outstanding",
    scope: "Show the review dependency and its owner category.",
    guardrail: "No automatic legal permission or tax outcome.",
  },
  {
    label: "Source unavailable",
    scope: "Show the unavailable state and a safe next action.",
    guardrail: "No cached or assumed operating context substituted.",
  },
  {
    label: "Outcome cannot be established",
    scope: (
      <>
        Show <strong className="font-bold">Outcome unknown</strong>.
      </>
    ),
    guardrail: "Never auto-convert to success or failure.",
  },
];

export default function UncertaintyHandling() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Exceptions, recovery & uncertainty"
        title="Six unknowns, and every one routes rather than resolves."
        intro="The pattern is consistent: an unresolved dependency sends the reader to its governed source and infers nothing."
      />

      <GuardrailTable
        columns={["Condition", "Required treatment", "Boundary"]}
        rows={ROWS}
      />
    </Section>
  );
}
