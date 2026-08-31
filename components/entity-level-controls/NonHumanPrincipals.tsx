import Link from "next/link";

import { DataTable, Section, SectionHeading, type Column, type Row } from "./shared";

const COLUMNS: Column[] = [
  { key: "principal", label: "Principal or source", width: "w-[24%]" },
  { key: "control", label: "Required control", width: "w-[76%]" },
];

const ROWS: Row[] = [
  {
    principal: "Service principal / API client",
    control:
      "Owner, purpose, entity scope, allowed actions, credential reference, status, last use and review, rotation or expiry status where authoritative",
  },
  {
    principal: "ERP integration",
    control:
      "Entity, object and field mappings with direction — an external role does not become a Billing role automatically",
  },
  {
    principal: "CRM integration",
    control:
      "Customer and organization context may be mapped; CRM ownership does not grant entity financial rights",
  },
  {
    principal: "Payment provider",
    control:
      "Provider, account and entity operation scope, with secrets held outside the controls interface",
  },
  {
    principal: "Tax provider",
    control:
      "Tax result authority stays separate; the integration account is limited to the required entity and operation scope",
  },
  {
    principal: "Localization provider",
    control: "Content and resource scope only — no billing financial privilege",
  },
  {
    principal: "Zoiko One",
    control: (
      <>
        Identity, organization, group and entity mapping is explicit, with no
        permission union across products by default.{" "}
        <Link
          href="/zoiko-billing-plus-zoiko-one"
          className="font-semibold !text-[#1F6FEB] hover:underline"
        >
          Compare deployment options
        </Link>
      </>
    ),
  },
  {
    principal: "Directory or SSO, if approved",
    control:
      "Authentication and group input only; final Billing authorization still evaluates current policies",
  },
];

export default function NonHumanPrincipals() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Service accounts, integrations, ERP/CRM & Zoiko One"
        title="Non-human principals are first-class identities."
        intro="Service accounts are not exempt from ownership, least-necessary scope, review, revocation, mapping cleanup and audit simply because no employee signs in interactively."
      />
      <DataTable columns={COLUMNS} rows={ROWS} />
    </Section>
  );
}
