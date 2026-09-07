"use client";

import { useState } from "react";

type StatusBadgeType = "warning" | "approved" | "pending" | "current";

function StatusBadge({
  children,
  type = "warning",
}: {
  children: React.ReactNode;
  type?: StatusBadgeType;
}) {
  const styles: Record<StatusBadgeType, string> = {
    warning: "border-color-orange-31 text-color-orange-31",
    approved: "border-color-cyan-21 text-color-cyan-21",
    pending: "border-color-azure-35-2 text-color-azure-35-2",
    current: "border-color-orange-31 text-color-orange-31",
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 border px-2 pt-0.5 pb-[3px] text-xs font-semibold uppercase leading-5 tracking-wide ${styles[type]}`}
    >
      <span
        className={`h-2 w-2 ${
          type === "approved"
            ? "bg-color-cyan-21"
            : type === "pending"
              ? "bg-color-azure-35-2"
              : "rounded-sm border border-current"
        }`}
      />
      {children}
    </div>
  );
}

function Section({
  id,
  title,
  description,
  children,
  badge,
  className = "",
}: {
  id?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  badge?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-8 bg-color-white-solid px-8 pt-8 pb-12 outline outline-1 outline-offset-[-1px] outline-color-azure-83 ${className}`}
    >
      <div className="mb-1.5 flex flex-wrap items-baseline gap-3">
        <h2 className="text-3xl font-medium leading-8 text-color-azure-10-2">
          {title}
        </h2>

        {badge}
      </div>

      {description && (
        <div className="mb-5 max-w-[550.87px] border-b border-color-azure-83 pb-4">
          <p className="text-sm font-normal leading-6 text-color-azure-35-2">
            {description}
          </p>
        </div>
      )}

      {children}
    </section>
  );
}

function SimpleTable({
  headers,
  rows,
  widths = ["w-56", "flex-1"],
}: {
  headers: string[];
  rows: string[][];
  widths?: string[];
}) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[760px]">
        <div className="flex">
          {headers.map((header, index) => (
            <div
              key={header}
              className={`${
                widths[index] ?? "flex-1"
              } border-b border-color-azure-66 px-3.5 py-2.5`}
            >
              <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
                {header}
              </span>
            </div>
          ))}
        </div>

        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`${
                  widths[cellIndex] ?? "flex-1"
                } border-b border-color-azure-83 px-3.5 py-3`}
              >
                <span
                  className={`text-sm leading-6 ${
                    cellIndex === 0
                      ? "font-semibold text-color-azure-10-2"
                      : "font-normal text-color-azure-10-2"
                  }`}
                >
                  {cell}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DataProcessingAddendum() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const navigation = [
    {
      title: "The package",
      items: [
        ["Applicability and scope", "applicability"],
        ["Package and version", "package"],
        ["Parties and roles", "roles"],
        ["Processing instructions", "instructions"],
        ["Processing details annex", "processing"],
      ],
    },
    {
      title: "Obligations",
      items: [
        ["Security measures", "security"],
        ["Subprocessors", "subprocessors"],
        ["International transfers", "transfers"],
        ["Data-subject assistance", "assistance"],
        ["Security incidents", "incidents"],
        ["Return and deletion", "deletion"],
        ["Audit and evidence", "evidence"],
      ],
    },
    {
      title: "Next steps",
      items: [
        ["Execution and history", "execution"],
        ["Questions", "questions"],
        ["Related documents", "related"],
      ],
    },
  ];

  return (
    <main className="w-full bg-color-grey-99-9">
      <div className="mx-auto flex w-full max-w-[1320px] items-start gap-10 px-6 pt-10 pb-16">
        {/* LEFT NAVIGATION */}
        <aside className="sticky top-6 hidden w-60 shrink-0 flex-col gap-2.5 lg:flex">
          <div className="text-xs font-bold uppercase leading-5 tracking-wider text-color-azure-35-2">
            Data Processing Addendum
          </div>

          <nav className="border-l border-color-azure-83">
            {navigation.map((group) => (
              <div key={group.title}>
                <div className="px-3 pt-3 pb-2 text-xs font-bold uppercase leading-5 tracking-wider text-color-azure-35-2">
                  {group.title}
                </div>

                {group.items.map(([label, id]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="block border-l-[3px] border-color-black--0% px-3 py-[5px] text-sm leading-6 text-color-azure-35-2 transition hover:border-color-cyan-21 hover:bg-color-white-solid hover:text-color-azure-10-2"
                  >
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <div className="flex w-full min-w-0 flex-col gap-6">
         {/* APPLICABILITY */}
<Section
  id="applicability"
  title="Applicability and scope"
  badge={
    <StatusBadge type="warning">
      Confirmation required
    </StatusBadge>
  }
  description="Whether this addendum applies to your organisation is a contractual question. It is answered from the approved applicability record, never inferred from how you arrived at this page."
>
  <div className="w-full overflow-x-auto">
    <div className="min-w-[928px]">
      {/* SECTION LABEL */}
      <div className="pb-2 pt-4">
        <span className="text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
          Applicability dimensions
        </span>
      </div>

      {/* TABLE HEADER */}
      <div className="flex">
        <div className="w-56 border-b border-color-azure-66 px-3.5 py-2.5">
          <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Dimension
          </span>
        </div>

        <div className="w-[480.19px] border-b border-color-azure-66 px-3.5 py-2.5">
          <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Position
          </span>
        </div>

        <div className="w-56 border-b border-color-azure-66 px-3.5 py-2.5">
          <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Source state
          </span>
        </div>
      </div>

      {/* TABLE ROWS */}
      {[
        {
          item: "Scope statement",
          position:
            "Published from the approved Applicability Matrix once Legal supplies it.",
          state: "Awaiting source",
          type: "warning" as const,
        },
        {
          item: "Your organisation",
          position:
            "Applicability is confirmed through the approved customer or legal route. It is not determined by plan, region or company profile shown to marketing.",
          state: "Requires confirmation",
          type: "warning" as const,
        },
        {
          item: "Services covered",
          position:
            "Named only where the DPA source explicitly identifies them. The page title is not evidence of scope.",
          state: "Awaiting source",
          type: "warning" as const,
        },
        {
          item: "Contracting entity",
          position:
            "The approved contracting entity and its relationship to your agreement, exactly as the source states it.",
          state: "Awaiting source",
          type: "warning" as const,
        },
        {
          item: "Region or jurisdiction",
          position:
            "Shown only where legally relevant and present in the approved source.",
          state: "Awaiting source",
          type: "warning" as const,
        },
        {
          item: "Plan or tier",
          position:
            "No difference in data-processing obligations is implied by commercial tier unless the contract sources establish one.",
          state: "Governance rule",
          type: "approved" as const,
        },
      ].map((row) => (
        <div key={row.item} className="flex">
          {/* DIMENSION */}
          <div className="w-56 border-b border-color-azure-83 px-3.5 py-3">
            <span className="text-sm font-semibold leading-6 text-color-azure-10-2">
              {row.item}
            </span>
          </div>

          {/* POSITION */}
          <div className="w-[480.19px] border-b border-color-azure-83 px-3.5 py-3">
            <span className="text-sm font-normal leading-6 text-color-azure-10-2">
              {row.position}
            </span>
          </div>

          {/* SOURCE STATE */}
          <div className="w-56 border-b border-color-azure-83 px-3.5 py-3">
            <StatusBadge type={row.type}>
              {row.state}
            </StatusBadge>
          </div>
        </div>
      ))}
    </div>
  </div>
</Section>
{/* PACKAGE */}
<Section
  id="package"
  title="The DPA package and its version"
  description="One package is current at a time. The operative legal text is rendered from the approved package; summaries elsewhere on this page never change its meaning."
>
  <div className="w-full overflow-x-auto">
    <div className="min-w-[900px] border border-color-azure-10-2 py-4">
      {/* PACKAGE HEADER */}
      <div className="flex h-16 items-center bg-color-azure-10-2 px-5">
        <div className="text-base font-medium leading-7 text-color-white-solid">
          Data Processing Addendum
        </div>

        <div className="ml-5 text-xs font-normal leading-5 text-color-azure-69">
          Package ZB-DPA-05 · v1.0
        </div>

        <div className="ml-auto">
          <StatusBadge type="warning">
            Not yet current
          </StatusBadge>
        </div>
      </div>

      {/* PACKAGE ITEMS */}
      {[
        {
          label: "Main body",
          title: "Data Processing Addendum",
          description:
            "Operative clauses, definitions and precedence.",
          state: "Text pending",
        },
        {
          label: "Annex I",
          title: "Processing details",
          description:
            "Subject matter, duration, nature and purpose, data categories, data subjects.",
          state: "Text pending",
        },
        {
          label: "Annex II",
          title: "Technical and organisational measures",
          description:
            "Published where Legal and Security approve a public annex.",
          state: "Text pending",
        },
        {
          label: "Annex III",
          title: "Transfer mechanism",
          description:
            "Conditional. Published only where the Transfer Mechanism Registry holds a current record.",
          state: "Conditional",
        },
      ].map((row) => (
        <div
          key={row.label}
          className="flex min-h-20 border-b border-color-azure-83"
        >
          {/* LABEL */}
          <div className="w-24 shrink-0 px-5 pt-4">
            <span className="text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
              {row.label}
            </span>
          </div>

          {/* TITLE + DESCRIPTION */}
          <div className="flex-1 px-5 py-3">
            <div className="text-base font-semibold leading-7 text-color-azure-10-2">
              {row.title}
            </div>

            <div className="text-sm font-normal leading-6 text-color-azure-25">
              {row.description}
            </div>
          </div>

          {/* STATE */}
          <div className="w-36 shrink-0 px-5 pt-4">
            <StatusBadge type="warning">
              {row.state}
            </StatusBadge>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* UNAVAILABLE ARTIFACT CALLOUT */}
  <div className="mt-5 border-l-[3px] border-color-orange-31 bg-color-grey-96-9 px-5 py-4">
    <div className="text-xs font-bold uppercase leading-5 tracking-wide text-color-orange-31">
      If the artifact is unavailable
    </div>

    <p className="mt-1 text-base font-normal leading-6 text-color-azure-10-2">
      A superseded or withdrawn version is never offered in place
      of the current one. When the current file cannot be served,
      the page states that plainly and routes you to the approved
      legal or procurement contact.
    </p>
  </div>
</Section>
{/* PARTIES AND ROLES */}
<Section
  id="roles"
  title="Parties and privacy-role allocation"
  description="Roles carry legal consequence, so they are reproduced from the package rather than summarised."
>
  <div className="w-full overflow-x-auto">
    <div className="min-w-[928px]">
      {/* SECTION LABEL */}
      <div className="pb-2 pt-4">
        <span className="text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
          Role allocation
        </span>
      </div>

      {/* TABLE HEADER */}
      <div className="flex">
        <div className="w-56 border-b border-color-azure-66 px-3.5 py-2.5">
          <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Topic
          </span>
        </div>

        <div className="w-[703.77px] border-b border-color-azure-66 px-3.5 py-2.5">
          <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Position
          </span>
        </div>
      </div>

      {/* TABLE ROWS */}
      {[
        {
          topic: "Named parties",
          position:
            "The approved legal names exactly as written. No shortened form that changes meaning.",
        },
        {
          topic: "Controller, processor or equivalent",
          position:
            "Rendered only from the approved allocation, including any conditions the package attaches to it. Zoiko Billing is not described in a single role across all processing.",
        },
        {
          topic: "Exporter and importer",
          position:
            "Assigned only where the approved transfer annex assigns them.",
        },
        {
          topic: "Customer affiliates",
          position:
            "Affiliate coverage and accession follow the package wording. Neither is inferred.",
        },
        {
          topic: "Zoiko entities",
          position:
            "The contracting and processing entity is source-controlled. No group-wide assumption is made.",
        },
      ].map((row) => (
        <div key={row.topic} className="flex">
          {/* TOPIC */}
          <div className="w-56 border-b border-color-azure-83 px-3.5 py-3">
            <span className="text-sm font-semibold leading-6 text-color-azure-10-2">
              {row.topic}
            </span>
          </div>

          {/* POSITION */}
          <div className="w-[703.77px] border-b border-color-azure-83 px-3.5 py-3">
            <span className="text-sm font-normal leading-6 text-color-azure-10-2">
              {row.position}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* ROLE ALLOCATION NOT PUBLISHED */}
  <div className="mt-6 w-full border border-color-azure-66 bg-color-grey-99-9 px-6 pt-9 pb-6">
    <div className="text-base font-semibold leading-7 text-color-azure-10-2">
      Role allocation not yet published
    </div>

    <p className="mt-1 max-w-[574.85px] text-base font-normal leading-6 text-color-azure-25">
      Until the approved package supplies it, this section shows the
      structure and the rules rather than naming a role. Placeholders
      read &quot;Customer&quot; and &quot;Zoiko Billing contracting entity&quot;
      until Legal provides public-safe exact text.
    </p>
  </div>
</Section>


{/* PROCESSING INSTRUCTIONS */}
<Section
  id="instructions"
  title="Processing instructions and subject matter"
  description="What may be processed, on whose instruction, and for how long. All of it comes from the operative clauses."
>
  <div className="w-full overflow-x-auto">
    <div className="min-w-[928px]">
      {/* SECTION LABEL */}
      <div className="pb-2 pt-4">
        <span className="text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
          Instruction and subject-matter rules
        </span>
      </div>

      {/* TABLE HEADER */}
      <div className="flex">
        <div className="w-56 border-b border-color-azure-66 px-3.5 py-2.5">
          <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Area
          </span>
        </div>

        <div className="w-[703.77px] border-b border-color-azure-66 px-3.5 py-2.5">
          <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Position
          </span>
        </div>
      </div>

      {/* TABLE ROWS */}
      {[
        {
          area: "Instructions",
          position:
            "The operative clause and its approved summary. Ordinary product use is not treated as a blanket instruction unless the DPA says it is.",
        },
        {
          area: "Subject matter and duration",
          position:
            "Exact annex wording, reproduced rather than paraphrased.",
        },
        {
          area: "Nature and purpose",
          position:
            "Annex terminology only. Purposes are not widened using Privacy Policy or marketing language.",
        },
        {
          area: "Customer obligations",
          position:
            "Only the obligations the source sets out. No catch-all responsibility clause is added for convenience.",
        },
        {
          area: "Conflicting instructions",
          position:
            "Shown only where the DPA defines the handling, with its notice and response conditions preserved.",
        },
        {
          area: "Order of precedence",
          position:
            "Stated only where the agreement or DPA states it explicitly.",
        },
      ].map((row) => (
        <div key={row.area} className="flex">
          {/* AREA */}
          <div className="w-56 border-b border-color-azure-83 px-3.5 py-3">
            <span className="text-sm font-semibold leading-6 text-color-azure-10-2">
              {row.area}
            </span>
          </div>

          {/* POSITION */}
          <div className="w-[703.77px] border-b border-color-azure-83 px-3.5 py-3">
            <span className="text-sm font-normal leading-6 text-color-azure-10-2">
              {row.position}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</Section>


         {/* PROCESSING DETAILS */}
<Section
  id="processing"
  title="Processing details annex"
  description="Each field below comes from a controlled vocabulary. None of it is inferred from product feature names."
>
  <div className="w-full overflow-x-auto">
    <div className="min-w-[928px]">
      {/* SECTION LABEL */}
      <div className="pb-2 pt-4">
        <span className="text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
          Annex fields and their rules
        </span>
      </div>

      {/* TABLE HEADER */}
      <div className="flex">
        <div className="w-56 border-b border-color-azure-66 px-3.5 py-2.5">
          <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Field
          </span>
        </div>

        <div className="w-[525.22px] border-b border-color-azure-66 px-3.5 py-2.5">
          <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Rule
          </span>
        </div>

        <div className="w-44 border-b border-color-azure-66 px-3.5 py-2.5">
          <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            State
          </span>
        </div>
      </div>

      {/* TABLE ROWS */}
      {[
        {
          field: "Categories of data subjects",
          rule:
            "Source-driven vocabulary. No assumed list of end users, employees or consumers.",
          state: "Awaiting source",
          type: "warning" as const,
        },
        {
          field: "Categories of personal data",
          rule:
            "Source-driven. Not derived from feature names or telemetry conventions.",
          state: "Awaiting source",
          type: "warning" as const,
        },
        {
          field: "Special category data",
          rule:
            "Not described as supported, prohibited, processed or excluded until the approved sources establish it.",
          state: "Not established",
          type: "warning" as const,
        },
        {
          field: "Processing operations",
          rule:
            "Approved annex terms only.",
          state: "Awaiting source",
          type: "warning" as const,
        },
        {
          field: "Frequency and duration",
          rule:
            "Exact source wording.",
          state: "Awaiting source",
          type: "warning" as const,
        },
        {
          field: "Locations",
          rule:
            "Processing and hosting locations are not inferred from where Zoiko operates commercially.",
          state: "Not established",
          type: "warning" as const,
        },
      ].map((row) => (
        <div key={row.field} className="flex">
          {/* FIELD */}
          <div className="w-56 border-b border-color-azure-83 px-3.5 py-3">
            <span className="text-sm font-semibold leading-6 text-color-azure-10-2">
              {row.field}
            </span>
          </div>

          {/* RULE */}
          <div className="w-[525.22px] border-b border-color-azure-83 px-3.5 py-3">
            <span className="text-sm font-normal leading-6 text-color-azure-10-2">
              {row.rule}
            </span>
          </div>

          {/* STATE */}
          <div className="w-44 border-b border-color-azure-83 px-3.5 py-3">
            <StatusBadge type={row.type}>
              {row.state}
            </StatusBadge>
          </div>
        </div>
      ))}
    </div>
  </div>
</Section>
          {/* SECURITY */}
<Section
  id="security"
  title="Technical and organisational measures"
  description="The contractual measures live in the annex. Public security material helps orientation but does not replace them."
>
  <div className="w-full overflow-x-auto">
    <div className="min-w-[928px]">
      {/* SECTION LABEL */}
      <div className="pb-2 pt-4">
        <span className="text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
          Security material and its standing
        </span>
      </div>

      {/* TABLE HEADER */}
      <div className="flex">
        <div className="w-56 border-b border-color-azure-66 px-3.5 py-2.5">
          <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Source
          </span>
        </div>

        <div className="w-[555.36px] border-b border-color-azure-66 px-3.5 py-2.5">
          <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            What it is
          </span>
        </div>

        <div className="w-36 border-b border-color-azure-66 px-3.5 py-2.5">
          <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Standing
          </span>
        </div>
      </div>

      {/* TABLE ROWS */}
      {[
        {
          source: "TOMs annex",
          description:
            "The contractual measures, published where Legal and Security approve a public version.",
          standing: "Contractual",
        },
        {
          source: "Security overview",
          description:
            "Public-safe orientation to how the service is secured.",
          standing: "Informational only",
        },
        {
          source: "Controlled evidence",
          description:
            "Reports and certifications routed through the approved evidence path.",
          standing: "Access-controlled",
        },
        {
          source: "Scope qualifiers",
          description:
            "Any measure keeps its control, service, entity and region qualifiers attached.",
          standing: "Always shown",
        },
        {
          source: "Change handling",
          description:
            'No commitment to notice or to "no material reduction" unless the DPA contains one.',
          standing: "Source-bound",
        },
      ].map((row) => (
        <div key={row.source} className="flex">
          {/* SOURCE */}
          <div className="w-56 border-b border-color-azure-83 px-3.5 py-3">
            <span className="text-sm font-semibold leading-6 text-color-azure-10-2">
              {row.source}
            </span>
          </div>

          {/* WHAT IT IS */}
          <div className="w-[555.36px] border-b border-color-azure-83 px-3.5 py-3">
            <span className="text-sm font-normal leading-6 text-color-azure-10-2">
              {row.description}
            </span>
          </div>

          {/* STANDING */}
          <div className="w-36 border-b border-color-azure-83 px-3.5 py-3">
            <span className="text-sm font-normal leading-6 text-color-azure-10-2">
              {row.standing}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* NOT PUBLISHED HERE */}
  <div className="mt-6 border-l-[3px] border-color-orange-31 bg-color-grey-96-9 px-5 py-4">
    <div className="text-xs font-bold uppercase leading-5 tracking-wide text-color-orange-31">
      Not published here
    </div>

    <p className="mt-1 text-base font-normal leading-6 text-color-azure-10-2">
      Internal architecture, secrets, customer-specific configuration,
      unpublished penetration-test detail and operational playbooks stay
      out of this page regardless of who asks.
    </p>
  </div>
</Section>
         {/* SUBPROCESSORS */}
<Section
  id="subprocessors"
  title="Subprocessors and change process"
  description="This page links to the subprocessor list. It never holds a second copy, because two lists drift apart."
>
  <div className="w-full overflow-x-auto">
    <div className="min-w-[928px]">
      <div className="pb-2 pt-4">
        <span className="text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
          Subprocessor questions and where they resolve
        </span>
      </div>

      {/* TABLE HEADER */}
      <div className="flex">
        <div className="w-56 border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Question
          </div>
        </div>

        <div className="w-[703.77px] border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Where it resolves
          </div>
        </div>
      </div>

      {/* TABLE ROWS */}
      {[
        {
          question: "Who are the subprocessors?",
          answer:
            "The Subprocessors page, once published, is authoritative.",
        },
        {
          question: "How are changes notified?",
          answer:
            "The process set out in the DPA and on the Subprocessors page. No notice period is stated here.",
        },
        {
          question: "Can we object to a change?",
          answer:
            "Only the right, grounds, timeframe and remedy the source establishes.",
        },
        {
          question: (
            <>
              What terms bind
              <br />
              subprocessors?
            </>
          ),
          answer:
            "The DPA wording. There is no blanket claim that every vendor carries identical terms.",
        },
        {
          question: "Is there a change history?",
          answer:
            "Owned by the Subprocessors registry where published.",
        },
      ].map((row, index) => (
        <div key={index} className="flex">
          <div className="w-56 border-b border-color-azure-83 px-3.5 py-3">
            <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
              {row.question}
            </div>
          </div>

          <div className="w-[703.77px] border-b border-color-azure-83 px-3.5 py-3">
            <div className="text-sm font-normal leading-6 text-color-azure-10-2">
              {row.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* NOT YET PUBLISHED */}
  <div className="mt-6 w-full border border-color-azure-66 bg-color-grey-99-9 px-6 pt-9 pb-6">
    <div className="text-base font-semibold leading-7 text-color-azure-10-2">
      Subprocessors page not yet published
    </div>

    <p className="mt-1.5 max-w-[574.85px] text-base font-normal leading-6 text-color-azure-25">
      Item 06 remains paused, so there is no list to link to. No vendor names
      appear here in the meantime. For a current list during a review, use
      the approved legal or procurement route.
    </p>
  </div>
</Section>

         {/* INTERNATIONAL TRANSFERS */}
<Section
  id="transfers"
  title="International transfers"
  description="A transfer mechanism is named only when the registry holds a current, approved record for it."
>
  <div className="w-full overflow-x-auto">
    <div className="min-w-[928px]">
      <div className="pb-2 pt-4">
        <span className="text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
          Transfer fields
        </span>
      </div>

      {/* TABLE HEADER */}
      <div className="flex">
        <div className="w-56 border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Field
          </div>
        </div>

        <div className="w-[520.64px] border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Position
          </div>
        </div>

        <div className="w-44 border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            State
          </div>
        </div>
      </div>

      {/* TABLE ROWS */}
      {[
        {
          field: "Transfer statement",
          position: "Exact wording from the approved DPA or annex.",
          state: "Awaiting source",
          type: "warning" as const,
        },
        {
          field: "Mechanism",
          position:
            "Named only from a current Transfer Mechanism Registry record. No mechanism is claimed in advance of one.",
          state: "Not established",
          type: "warning" as const,
        },
        {
          field: "Module or annex",
          position:
            "Linked to the approved annex or controlled artifact.",
          state: "Conditional",
          type: "warning" as const,
        },
        {
          field: "Exporter and importer",
          position:
            "Assigned exactly as the annex assigns them, where applicable.",
          state: "Awaiting source",
          type: "warning" as const,
        },
        {
          field: "Supplementary measures",
          position:
            "Only approved public-safe material. No inferred measure set.",
          state: "Not established",
          type: "warning" as const,
        },
        {
          field: "Data location",
          position:
            "Residency and hosting countries are not inferred from transfer language.",
          state: "Governance rule",
          type: "approved" as const,
        },
      ].map((row) => (
        <div key={row.field} className="flex">
          <div className="w-56 border-b border-color-azure-83 px-3.5 py-3">
            <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
              {row.field}
            </div>
          </div>

          <div className="w-[520.64px] border-b border-color-azure-83 px-3.5 py-3">
            <div className="text-sm font-normal leading-6 text-color-azure-10-2">
              {row.position}
            </div>
          </div>

          <div className="w-44 border-b border-color-azure-83 px-3.5 py-3">
            <StatusBadge type={row.type}>
              {row.state}
            </StatusBadge>
          </div>
        </div>
      ))}
    </div>
  </div>
</Section>

          {/* DATA SUBJECT ASSISTANCE */}
<Section
  id="assistance"
  title="Data-subject rights and assistance"
  description="The obligation and its conditions come from the operative clause. This page is not itself a request channel."
>
  <div className="w-full overflow-x-auto">
    <div className="min-w-[928px]">
      <div className="pb-2 pt-4">
        <span className="text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
          Assistance obligations
        </span>
      </div>

      {/* TABLE HEADER */}
      <div className="flex">
        <div className="w-56 border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Area
          </div>
        </div>

        <div className="w-[703.77px] border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Position
          </div>
        </div>
      </div>

      {/* TABLE ROWS */}
      {[
        {
          area: "Assistance obligation",
          position:
            "The operative clause with its conditions preserved.",
        },
        {
          area: "Where to send a request",
          position:
            "The Privacy Policy route, or the approved customer support and privacy route where one applies.",
        },
        {
          area: "Response timing",
          position:
            "Only a period the DPA expressly sets. Statutory periods are not substituted from general knowledge.",
        },
        {
          area: "Cost and effort conditions",
          position:
            "Only where the source establishes them.",
        },
        {
          area: "Who does what",
          position:
            "The role allocation in the package governs. Nothing here is legal advice about your own obligations.",
        },
        {
          area: "Requester data",
          position:
            "Not collected on this page. An approved privacy request flow owns verification.",
        },
      ].map((row) => (
        <div key={row.area} className="flex">
          <div className="w-56 border-b border-color-azure-83 px-3.5 py-3">
            <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
              {row.area}
            </div>
          </div>

          <div className="w-[703.77px] border-b border-color-azure-83 px-3.5 py-3">
            <div className="text-sm font-normal leading-6 text-color-azure-10-2">
              {row.position}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</Section>

          {/* SECURITY INCIDENTS */}
<Section
  id="incidents"
  title="Security incidents and breach assistance"
  description="Terminology, triggers and timing all come from the DPA definitions, which may differ from the terms used in general privacy commentary."
>
  <div className="w-full overflow-x-auto">
    <div className="min-w-[928px]">
      <div className="pb-2 pt-4">
        <span className="text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
          Incident obligations
        </span>
      </div>

      {/* TABLE HEADER */}
      <div className="flex">
        <div className="w-56 border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Topic
          </div>
        </div>

        <div className="w-[703.77px] border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Position
          </div>
        </div>
      </div>

      {/* TABLE ROWS */}
      {[
        {
          topic: "Terminology",
          position:
            "The DPA's own incident and breach definitions apply, not a generic definition.",
        },
        {
          topic: "Notification trigger",
          position: "The exact conditions the source states.",
        },
        {
          topic: "Timing",
          position:
            "No 24, 48 or 72-hour figure appears unless the operative DPA sets it for that event and role.",
        },
        {
          topic: "Content of a notice",
          position: "Only the categories the source approves.",
        },
        {
          topic: "Cooperation and updates",
          position:
            "Only the obligations the source establishes.",
        },
      ].map((row) => (
        <div key={row.topic} className="flex">
          <div className="w-56 border-b border-color-azure-83 px-3.5 py-3">
            <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
              {row.topic}
            </div>
          </div>

          <div className="w-[703.77px] border-b border-color-azure-83 px-3.5 py-3">
            <div className="text-sm font-normal leading-6 text-color-azure-10-2">
              {row.position}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* WHERE TO REPORT */}
  <div className="mt-6 border-l-[3px] border-color-cyan-21 bg-color-grey-96-10 px-5 py-4">
    <div className="text-xs font-bold uppercase leading-5 tracking-wide text-color-cyan-21">
      Where to report
    </div>

    <p className="mt-1 text-base font-normal leading-6 text-color-azure-10-2">
      A security vulnerability goes to responsible disclosure. A service or
      security incident affecting your account goes to the approved support
      authority. The two are kept separate and are not collapsed into one
      form.
    </p>
  </div>
</Section>

          {/* RETURN AND DELETION */}
<Section
  id="deletion"
  title="Return, deletion and end of service"
  description="Deletion terms carry exceptions. Removing the exceptions to make the summary cleaner would make it wrong."
>
  <div className="w-full overflow-x-auto">
    <div className="min-w-[928px]">
      <div className="pb-2 pt-4">
        <span className="text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
          Return and deletion
        </span>
      </div>

      {/* TABLE HEADER */}
      <div className="flex">
        <div className="w-56 border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Area
          </div>
        </div>

        <div className="w-[703.77px] border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Position
          </div>
        </div>
      </div>

      {/* TABLE ROWS */}
      {[
        {
          area: "Return or deletion",
          position:
            "The exact operative clause. No automatic deletion is promised without a source.",
        },
        {
          area: "Timing",
          position:
            "Only the period or triggering event the source sets.",
        },
        {
          area: "Backups and legal holds",
          position:
            "Approved exceptions are preserved with their scope intact.",
        },
        {
          area: "Export and retrieval",
          position:
            "Product export capabilities are described only where product documentation confirms them.",
        },
        {
          area: "Retention practices",
          position:
            "The Privacy Policy explains public retention. These contract terms are separate.",
        },
        {
          area: "Termination",
          position:
            "Service termination sits in the Terms of User or your master agreement, which this page links rather than restates.",
        },
      ].map((row) => (
        <div key={row.area} className="flex">
          <div className="w-56 border-b border-color-azure-83 px-3.5 py-3">
            <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
              {row.area}
            </div>
          </div>

          <div className="w-[703.77px] border-b border-color-azure-83 px-3.5 py-3">
            <div className="text-sm font-normal leading-6 text-color-azure-10-2">
              {row.position}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</Section>
         {/* EVIDENCE */}
<Section
  id="evidence"
  title="Audit, compliance evidence and records"
  description="Audit rights come with scope, notice, frequency, cost and alternatives attached. All of those conditions travel with the right."
>
  <div className="w-full overflow-x-auto">
    <div className="min-w-[928px]">
      <div className="pb-2 pt-4">
        <span className="text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
          Evidence and audit
        </span>
      </div>

      {/* TABLE HEADER */}
      <div className="flex">
        <div className="w-56 border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Item
          </div>
        </div>

        <div className="w-[703.77px] border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Position
          </div>
        </div>
      </div>

      {/* TABLE ROWS */}
      {[
        {
          item: "Reports and certifications",
          position:
            "Only the evidence classes the DPA clause names, routed through the approved evidence path.",
        },
        {
          item: "Audit right",
          position:
            "Reproduced with its full conditions. No simplified universal statement of a right to audit.",
        },
        {
          item: "Questionnaires",
          position:
            "Offered only where the approved process supports them.",
        },
        {
          item: "Regulator cooperation",
          position:
            "Only the obligations the source establishes.",
        },
        {
          item: "Customer-specific evidence",
          position:
            "Never public. It routes through a controlled channel where one exists.",
        },
        {
          item: "Expired evidence",
          position:
            "Not presented as current. The authoritative destination owns historical state.",
        },
      ].map((row) => (
        <div key={row.item} className="flex">
          <div className="w-56 border-b border-color-azure-83 px-3.5 py-3">
            <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
              {row.item}
            </div>
          </div>

          <div className="w-[703.77px] border-b border-color-azure-83 px-3.5 py-3">
            <div className="text-sm font-normal leading-6 text-color-azure-10-2">
              {row.position}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</Section>
         {/* EXECUTION */}
<Section
  id="execution"
  title="Execution, request path and version history"
  description="Four states, deliberately kept distinct. Confusing a submitted request with an executed agreement is the failure this section exists to prevent."
>
  {/* EXECUTION STATES */}
  <div className="space-y-0 pt-4 pb-5">
    {[
      {
        title: "Reviewed",
        text:
          "You have read the public package and its annexes. No form, no account and no sales contact is required to get here.",
        note:
          "Does not mean: any agreement exists between us.",
      },
      {
        title: "Request submitted",
        text:
          "You have asked to put the DPA in place through the approved request route. The confirmation says a request was received and nothing more.",
        note:
          "Does not mean: the addendum is signed, accepted or in force.",
      },
      {
        title: "Signature or acceptance",
        text:
          "Where an approved signature or acceptance mechanism exists, it names its own prerequisites: authority, account and signatory.",
        note:
          "Does not exist by default. No instant-signing flow is offered where none is implemented.",
      },
      {
        title: "Executed record",
        text:
          "The authoritative executed agreement lives in the contract record, and the confirmation tells you where that is.",
        note:
          "Does not appear here. Your organisation's contract status is never shown on a public page.",
      },
    ].map((state) => (
      <div
        key={state.title}
        className="border-t border-color-azure-83 py-3.5"
      >
        <div className="flex gap-4">
          <div className="hidden w-10 shrink-0 lg:block" />

          <div className="w-full">
            <div className="text-base font-semibold leading-6 text-color-azure-10-2">
              {state.title}
            </div>

            <p className="mt-0.5 max-w-[565.49px] text-sm font-normal leading-6 text-color-azure-25">
              {state.text}
            </p>

            <p className="mt-0.5 text-sm font-normal leading-6 text-color-azure-35-2">
              {state.note}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* REQUEST ROUTE */}
  <div className="border border-color-azure-66 bg-color-grey-99-9 px-6 py-6">
    <div className="text-base font-semibold leading-7 text-color-azure-10-2">
      Request route not yet published
    </div>

    <p className="mt-1.5 max-w-[574.85px] text-base font-normal leading-6 text-color-azure-25">
      The approved request or execution mechanism has not been established,
      so no action is offered. Until then, applicability questions,
      negotiated terms and execution requests go through the approved legal
      and procurement contact, which publishes with the package.
    </p>
  </div>

  {/* VERSION HISTORY */}
  <div className="pt-5">
    <h3 className="text-base font-semibold leading-7 text-color-azure-10-2">
      Version history
    </h3>
  </div>

  <div className="w-full overflow-x-auto">
    <div className="min-w-[928px]">
      <div className="pb-2 pt-3">
        <span className="text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
          Package versions
        </span>
      </div>

      {/* VERSION TABLE HEADER */}
      <div className="flex">
        <div className="w-56 border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Version
          </div>
        </div>

        <div className="w-56 border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            State
          </div>
        </div>

        <div className="w-28 border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Effective
          </div>
        </div>

        <div className="w-96 border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Relationship
          </div>
        </div>
      </div>

      {/* VERSION TABLE ROWS */}
      <div className="flex">
        <div className="w-56 border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            v1.0
          </div>
        </div>

        <div className="w-56 border-b border-color-azure-83 px-3.5 py-3">
          <StatusBadge type="warning">
            Prepared for approval
          </StatusBadge>
        </div>

        <div className="w-28 border-b border-color-azure-83 px-3.5 py-2.5">
          <div className="text-sm font-normal leading-6 text-color-azure-10-2">
            On approval
          </div>
        </div>

        <div className="w-96 border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-normal leading-6 text-color-azure-10-2">
            First package. Not published as current.
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-56 border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Earlier versions
          </div>
        </div>

        <div className="w-56 border-b border-color-azure-83 px-3.5 py-3">
          <StatusBadge type="pending">
            None recorded
          </StatusBadge>
        </div>

        <div className="w-28 border-b border-color-azure-83 px-3.5 py-2.5">
          <div className="text-sm font-normal leading-6 text-color-azure-10-2">
            —
          </div>
        </div>

        <div className="w-96 border-b border-color-azure-83 px-3.5 py-2.5">
          <div className="text-sm font-normal leading-6 text-color-azure-10-2">
            Superseded packages state their status and link forward to the
            current one.
          </div>
        </div>
      </div>
    </div>
  </div>
</Section>
          {/* QUESTIONS */}
          <section
            id="questions"
            className="scroll-mt-8 bg-color-white-solid px-8 pt-8 pb-14 outline outline-1 outline-offset-[-1px] outline-color-azure-83"
          >
            <h2 className="text-3xl font-medium leading-8 text-color-azure-10-2">
              Questions
            </h2>

            <div className="mt-2 max-w-[550px] border-b border-color-azure-83 pb-4">
              <p className="text-sm leading-6 text-color-azure-35-2">
                Common questions about the Data Processing Addendum,
                its applicability, roles, obligations and execution.
              </p>
            </div>

            <div className="mt-12 border-b border-color-azure-83">
              {[
                {
                  question:
                    "What is the Zoiko Billing Data Processing Addendum?",
                  answer:
                    "The Data Processing Addendum (DPA) is the contractual document that sets out the parties' data-processing obligations when personal data is processed in connection with the applicable Zoiko Billing services. It defines matters such as processing instructions, privacy roles, security obligations, assistance, subprocessors, transfers, return or deletion of data, and audit or evidence rights where those matters are applicable.",
                },
                {
                  question: "Does it apply to my organisation?",
                  answer:
                    "The DPA applies where your organisation's agreement with Zoiko Billing requires or incorporates data-processing terms. Applicability should be confirmed against the applicable contract, order, service terms, or approved legal route. It should not be determined solely from your plan, region, or information displayed on this public page.",
                },
                {
                  question:
                    "Is Zoiko Billing a controller or a processor?",
                  answer:
                    "The role depends on the processing activity and the applicable legal relationship. For customer-directed processing covered by a DPA, Zoiko Billing may act as a processor where it processes personal data on the customer's documented instructions. The applicable agreement and processing activity determine the relevant role; this public page does not change that allocation.",
                },
                {
                  question: "Where can I see the subprocessors?",
                  answer:
                    "The current subprocessor information should be taken from the authoritative subprocessor list and its applicable change-notification process. If that authoritative public list has not yet been published, this page does not provide an unofficial or incomplete vendor list.",
                },
                {
                  question: "What security measures are included?",
                  answer:
                    "The DPA may contain or incorporate technical and organisational security measures applicable to the processing. The contractual security measures, together with any approved security documentation or evidence, control the applicable obligations. Public security information should not be treated as replacing the contractual security terms.",
                },
                {
                  question:
                    "How are international transfers handled?",
                  answer:
                    "International transfers are handled according to the transfer provisions and safeguards applicable to the relevant processing activity. The specific transfer mechanism depends on the circumstances and the governing contractual and legal requirements. Where a current transfer registry or contractual mechanism is required, that authoritative source controls.",
                },
                {
                  question: "How do I execute the DPA?",
                  answer:
                    "Execution takes place through the approved contractual process applicable to your organisation. Reading or downloading a DPA does not by itself create an executed agreement. Where signature or electronic acceptance is required, the applicable process identifies the authorised parties, prerequisites, and acceptance method.",
                },
                {
                  question: "Can I download the current version?",
                  answer:
                    "A version should only be presented as the current DPA when it has been approved and published as the authoritative version. If the current package or download is not yet available, the page should state that clearly rather than presenting a draft, superseded, or unapproved document as current.",
                },
              ].map((item, index) => {
                const isOpen = openQuestion === index;

                return (
                  <div
                    key={item.question}
                    className="border-t border-color-azure-83"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenQuestion(isOpen ? null : index)
                      }
                      className="flex w-full items-center gap-3 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="w-4 shrink-0 text-xl font-medium leading-8 text-color-azure-35-2">
                        {isOpen ? "−" : "+"}
                      </span>

                      <span className="text-base font-semibold leading-6 text-color-azure-10-2">
                        {item.question}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-5 pl-7 pr-4">
                        <p className="max-w-[760px] text-sm leading-6 text-color-azure-25">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* RELATED DOCUMENTS */}
          <Section
            id="related"
            title="Related legal documents"
            description="The Legal Corporate sequence, with the current state of each destination."
            className="pb-14"
          >
            <div className="overflow-x-auto">
              <div className="min-w-[900px]">
                <div className="flex">
                  <div className="w-56 border-b border-color-azure-66 px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wide text-color-azure-35-2">
                    Document
                  </div>

                  <div className="flex-1 border-b border-color-azure-66 px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wide text-color-azure-35-2">
                    Governs
                  </div>

                  <div className="w-52 border-b border-color-azure-66 px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wide text-color-azure-35-2">
                    State
                  </div>
                </div>

                {[
                  {
                    document: "Terms of User",
                    governs:
                      "Commercial and service terms, and the agreement relationship.",
                    state: "Approved",
                    type: "approved" as const,
                  },
                  {
                    document: "Privacy Policy",
                    governs:
                      "The public privacy notice. It does not replace these contract terms.",
                    state: "Approved",
                    type: "approved" as const,
                  },
                  {
                    document: "Cookie Policy",
                    governs:
                      "Cookies and tracking on the website. Not a DPA annex.",
                    state: "Approved",
                    type: "approved" as const,
                  },
                  {
                    document: "Acceptable Use Policy",
                    governs:
                      "Use restrictions, separate from data-processing obligations.",
                    state: "Approved",
                    type: "approved" as const,
                  },
                  {
                    document: "Data Processing Addendum",
                    governs:
                      "Data-processing contract terms and annexes.",
                    state: "This page",
                    type: "current" as const,
                  },
                  {
                    document: "Subprocessors",
                    governs:
                      "The authoritative vendor list and change process.",
                    state: "Not yet published",
                    type: "pending" as const,
                  },
                  {
                    document: "Legal Notices",
                    governs: "Corporate and legal notices.",
                    state: "Not yet published",
                    type: "pending" as const,
                  },
                  {
                    document: "Sitemap",
                    governs: "Index of published destinations.",
                    state: "Not yet published",
                    type: "pending" as const,
                  },
                ].map((document) => (
                  <div
                    key={document.document}
                    className="flex"
                  >
                    <div className="w-56 border-b border-color-azure-83 px-3.5 py-3 text-sm font-semibold leading-6 text-color-azure-10-2">
                      {document.document}
                    </div>

                    <div className="flex-1 border-b border-color-azure-83 px-3.5 py-3 text-sm leading-6 text-color-azure-10-2">
                      {document.governs}
                    </div>

                    <div className="w-52 border-b border-color-azure-83 px-3.5 py-3">
                      <StatusBadge type={document.type}>
                        {document.state}
                      </StatusBadge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* PROCUREMENT CALLOUT */}
          <section className="border-l-[3px] border-color-cyan-21 bg-color-grey-96-10 px-5 py-4">
            <div className="text-xs font-bold uppercase leading-5 tracking-wide text-color-cyan-21">
              For procurement reviews
            </div>

            <p className="mt-1 text-base leading-6 text-color-azure-10-2">
              Security orientation and controlled evidence are routed
              through the approved security and trust destination rather
              than duplicated here, so a review always reads the current
              version.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}