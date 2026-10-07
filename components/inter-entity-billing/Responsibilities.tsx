import { GuardrailTable, Section, SectionHeading } from "./shared";

const ROWS = [
  {
    label: "Business owner",
    scope: "Owns the commercial or business purpose of the relationship or charge.",
    guardrail: "Not automatically the legal, tax or accounting approver.",
  },
  {
    label: "Billing operator",
    scope: "Prepares or administers the billing instruction.",
    guardrail: "Cannot self-assert specialist approvals.",
  },
  {
    label: "Reviewer",
    scope: "Checks completeness, ownership and evidence.",
    guardrail: "Generic naming until source-verified.",
    soft: true,
  },
  {
    label: "Tax / legal specialist",
    scope: "Owns specialist interpretation where applicable.",
    guardrail: "A public page cannot replace advice or a source-owned decision.",
  },
  {
    label: "Accounting / controller",
    scope: "Owns downstream accounting treatment where applicable.",
    guardrail: "No account code or journal logic is invented.",
  },
  {
    label: "Technical owner",
    scope: "Owns the data and system integration boundary.",
    guardrail: "No API or integration capability implied.",
  },
  {
    label: "Auditor / viewer",
    scope: "Reads history and evidence subject to permissions.",
    guardrail: "Export and access controls remain source-controlled.",
  },
];

export default function Responsibilities() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="Authority, responsibility & separation of duties"
        title="Seven responsibilities, each with a guardrail."
        intro={
          <>
            <strong className="font-bold">
              Role naming is generic until a product source verifies it.
            </strong>{" "}
            None of these is a Zoiko Billing permission.
          </>
        }
      />

      <GuardrailTable
        columns={["Responsibility", "Recommended scope", "Guardrail"]}
        rows={ROWS}
      />
    </Section>
  );
}
