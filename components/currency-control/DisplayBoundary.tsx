import GuardrailTable from "./GuardrailTable";
import { Section, SectionHeading } from "./shared";

const CONCERNS = [
  {
    label: "Precision",
    scope: "Different currencies can require different representational precision or operational handling.",
    guardrail: "Exact decimal places for any currency.",
  },
  {
    label: "Rounding",
    scope: "Rounding policy should be explicit, consistent and versioned where financially material.",
    guardrail: "Specific rounding mode, thresholds or tolerance.",
  },
  {
    label: "Display",
    scope: "Display formatting may differ from transaction and accounting treatment.",
    guardrail: "Exact locale symbol or placement behavior as product fact.",
  },
  {
    label: "Transaction currency",
    scope: "The currency a billing transaction is denominated in is conceptually distinct.",
    guardrail: "Supported transaction currencies.",
  },
  {
    label: "Display currency",
    scope: "A displayed currency may be informational or commercial depending on implementation.",
    guardrail: "Automatic conversion or dual-display capability.",
  },
  {
    label: "Accounting / reporting currency",
    scope: "Finance and reporting context can be distinct from customer-facing denomination.",
    guardrail: "Functional or reporting currency mechanics, or journal behavior.",
  },
  {
    label: "FX dependency",
    scope: "Conversion decisions, where required, belong to FX Management governance.",
    guardrail: "Automatic FX provider, rate or settlement behavior.",
  },
];

export default function DisplayBoundary() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="Precision, rounding & display boundary"
        title="Seven concerns the page may explain, and what each must not invent."
        intro="This section is where a wireframe is most tempted to publish a plausible financial rule."
      />

      <GuardrailTable
        columns={["Concern", "May explain", "Must not invent"]}
        rows={CONCERNS}
      />
    </Section>
  );
}
