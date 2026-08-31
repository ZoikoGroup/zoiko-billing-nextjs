import { DataTable, Section, SectionHeading, type Column, type Row } from "./shared";

const COLUMNS: Column[] = [
  { key: "lifecycle", label: "Lifecycle", width: "w-[20%]" },
  { key: "behavior", label: "Required behavior", width: "w-[80%]" },
];

const ROWS: Row[] = [
  {
    lifecycle: "Joiner",
    behavior:
      "Identity is authoritative from its source; no entity rights exist until an assignment and policy resolve",
  },
  {
    lifecycle: "Assignment",
    behavior:
      "Role plus entity scope plus actions and policy source, with an effective date",
  },
  {
    lifecycle: "Mover",
    behavior:
      "A role, team or entity change triggers recalculation; obsolete access is removed before or with the new assignment",
  },
  {
    lifecycle: "Leaver",
    behavior:
      "Revoke or disable current access, delegations and active sessions or tokens where authoritative; transfer service ownership where needed",
  },
  {
    lifecycle: "Stale assignment",
    behavior:
      "Review overdue, owner missing or source unavailable — restrict or flag according to risk policy",
  },
  {
    lifecycle: "Periodic review",
    behavior:
      "The reviewer receives principal, entity, action, source and currentness evidence, and the approve, change or revoke decision is recorded",
  },
  {
    lifecycle: "Event-driven review",
    behavior:
      "Triggered by entity closure, policy change, role change, security event, integration disconnect or a support-access anomaly",
  },
  {
    lifecycle: "Evidence",
    behavior:
      "Assignment, change, review, delegation, override and approval decision history is preserved",
  },
];

export default function AccessReviews() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="Joiner, mover, leaver & access reviews"
        title="A review is evidence of a review — not proof of correctness."
        intro="The product shows who reviewed what, when, using which source, and what changed. It does not assert that permissions are always right or that any framework is met."
      />
      <DataTable columns={COLUMNS} rows={ROWS} />
    </Section>
  );
}
