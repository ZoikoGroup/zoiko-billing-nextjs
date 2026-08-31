import { DataTable, Section, SectionHeading, type Column, type Row } from "./shared";

const COLUMNS: Column[] = [
  { key: "configuration", label: "Configuration", width: "w-[26%]" },
  { key: "requirements", label: "Control requirements", width: "w-[74%]" },
];

const ROWS: Row[] = [
  {
    configuration: "Entity profile",
    requirements:
      "Owner and source, current and future values, sensitive-field permissions, effective date",
  },
  {
    configuration: "Permission policy",
    requirements:
      "Version, author, reviewer or approver, effective period, and impacted principals, entities and actions",
  },
  {
    configuration: "Approval policy",
    requirements:
      "Version, scope, self-approval and segregation settings, effective date",
  },
  {
    configuration: "Currency & entity capability",
    requirements:
      "Only within Multi-Currency and Multi-Entity authority and entitlement",
  },
  {
    configuration: "Document & template applicability",
    requirements:
      "Entity, locale and surface scope; controlled-text authority stays separate",
  },
  {
    configuration: "Provider & integration mapping",
    requirements: "Technical owner plus business authority plus effective state",
  },
  {
    configuration: "Delegation policy",
    requirements: "Who can delegate what, to whom, for how long, with what approval",
  },
  {
    configuration: "Support-access policy",
    requirements: "Purpose, scope, time, approval and audit controls",
  },
];

export default function ConfigurationChangeControl() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Configuration ownership, versioning & change control"
        title="Preview the blast radius before activating a policy."
        intro="A high-risk policy change shows the affected users, entities, actions, pending approvals, service principals and integrations before it takes effect."
      />
      <DataTable columns={COLUMNS} rows={ROWS} />
    </Section>
  );
}
