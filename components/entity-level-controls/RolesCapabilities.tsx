import Link from "next/link";

import { DataTable, Section, SectionHeading, type Column, type Row } from "./shared";

const COLUMNS: Column[] = [
  { key: "concept", label: "Concept", width: "w-[20%]" },
  { key: "role", label: "Role in the control model", width: "w-[42%]" },
  { key: "boundary", label: "Boundary", width: "w-[38%]" },
];

const ROWS: Row[] = [
  {
    concept: "Role",
    role: "A human-readable grouping of potential permissions.",
    boundary: "Not sufficient by itself to authorize an action",
  },
  {
    concept: "Permission set",
    role: "Actions, object categories and state conditions.",
    boundary: "Still evaluated against entity scope and policy",
  },
  {
    concept: "Entity capability",
    role: "Whether the entity can use a product capability.",
    boundary: "Separate from user authorization",
  },
  {
    concept: "Commercial entitlement",
    role: "Plan or contract permission to use a capability.",
    boundary: "Separate from user role and jurisdiction availability",
  },
  {
    concept: "Jurisdiction availability",
    role: "Whether the capability is approved in the entity context.",
    boundary: (
      <>
        A separate authority —{" "}
        <Link
          href="/jurisdiction-availability"
          className="font-semibold !text-[#1F6FEB] hover:underline"
        >
          Jurisdiction Availability
        </Link>
      </>
    ),
  },
  {
    concept: "Configuration ownership",
    role: "Who may change settings and policies.",
    boundary: "Can differ from financial action rights",
  },
  {
    concept: "Approval authority",
    role: "Who may approve a specific workflow or action.",
    boundary: "Can be narrower than general administration",
  },
  {
    concept: "Read-only oversight",
    role: "Cross-entity visibility where approved.",
    boundary: "Cannot be promoted into write or action rights invisibly",
  },
];

export default function RolesCapabilities() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="Roles, permission sets &amp; capability boundaries"
        title="Permission and capability are different questions."
        intro="A user can be authorized for something the entity cannot use, and an entity can have a capability no user is authorized to touch. Both checks run."
      />
      <DataTable columns={COLUMNS} rows={ROWS} />
    </Section>
  );
}
