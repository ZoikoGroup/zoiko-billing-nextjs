import { DataTable, Section, SectionHeading, type Column, type Row } from "./shared";

const COLUMNS: Column[] = [
  { key: "fn", label: "Central function", width: "w-[22%]" },
  { key: "oversight", label: "Potential oversight", width: "w-[38%]" },
  { key: "boundary", label: "Action boundary", width: "w-[40%]" },
];

const ROWS: Row[] = [
  {
    fn: "Finance leadership",
    oversight: "Cross-entity operational summaries where approved.",
    boundary: "No automatic issue, payment or configuration rights",
  },
  {
    fn: "Shared AR team",
    oversight: "Assigned entities, customers and AR workflows.",
    boundary: "Scope is explicit — no group-wide default",
  },
  {
    fn: "Platform / IT admin",
    oversight: "Identity, integration and configuration operations where approved.",
    boundary:
      "Cannot approve financial actions merely by being technically privileged",
  },
  {
    fn: "Localization / content team",
    oversight: "Template and resource work across approved entities.",
    boundary:
      "Cannot change issuer, legal or tax content without separate authority",
  },
  {
    fn: "Compliance / privacy team",
    oversight: "Scoped evidence, review and restriction workflows.",
    boundary: "No general billing administration",
  },
  {
    fn: "Support",
    oversight: "Case-specific troubleshooting scope.",
    boundary: "No standing customer or entity financial access",
  },
  {
    fn: "Auditor / reviewer",
    oversight: "Read-only evidence according to scope.",
    boundary: "No edit or approval unless separately assigned",
  },
];

export default function CentralOversight() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="Central oversight vs cross-entity action"
        title="Seeing everything is not permission to change anything."
        intro="A central control plane can summarize access, pending approvals, conflicts and policy health across entities. That visibility is not implemented by giving every central user the same operational permissions."
      />
      <DataTable columns={COLUMNS} rows={ROWS} />
    </Section>
  );
}
