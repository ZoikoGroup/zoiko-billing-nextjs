import { GuardrailTable, Section, SectionHeading } from "./shared";

const ROWS = [
  {
    label: "Entity source",
    scope: "Supplies authoritative entity references.",
    guardrail: "Never inferred from brand, domain or trading name.",
  },
  {
    label: "Currency context",
    scope: "Supplies the applicable currency context.",
    guardrail: "No FX behavior, rate or conversion is implied.",
  },
  {
    label: "Finance / accounting systems",
    scope: "Receive approved instructions where applicable.",
    guardrail: "No journal schema, account mapping or posting behavior.",
  },
  {
    label: "Settlement / treasury",
    scope: "Cash movement may occur downstream.",
    guardrail: "No netting, payment execution or settlement timing.",
  },
  {
    label: "Evidence & reporting",
    scope: "Supports later review of the instruction.",
    guardrail: "No retention period or export guarantee.",
  },
];

export default function DownstreamHandoff() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="Systems, data & downstream handoff"
        title="What an approved instruction hands to, and what it cannot promise."
        intro={
          <>
            Approval and arrival are separate facts.{" "}
            <strong className="font-bold">
              The fourth approval state exists because a handoff can fail silently.
            </strong>
          </>
        }
      />

      <GuardrailTable columns={["Boundary", "Role", "Not claimed"]} rows={ROWS} />
    </Section>
  );
}
