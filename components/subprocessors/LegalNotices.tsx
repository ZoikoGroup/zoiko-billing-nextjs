"use client";

import { useState } from "react";

type TableRow = {
  [key: string]: string;
};

type TableProps = {
  headers: string[];
  rows: TableRow[];
};

type SectionProps = {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

const navigation = [
  {
    title: "The registry",
    items: [
      { label: "Currentness and states", id: "currentness" },
      { label: "Current subprocessors", id: "subprocessors" },
      { label: "What a record shows", id: "record-fields" },
      { label: "Purpose, scope, location", id: "field-discipline" },
    ],
  },
  {
    title: "Changes",
    items: [
      { label: "Changes and upcoming", id: "changes" },
      { label: "Removed providers", id: "removed" },
      { label: "Knowing about changes", id: "notifications" },
    ],
  },
  {
    title: "Elsewhere",
    items: [
      { label: "Contracts and evidence", id: "evidence" },
      { label: "Questions", id: "questions" },
      { label: "Related documents", id: "documents" },
    ],
  },
];

const recordFields: TableRow[] = [
  {
    Field: "Provider identity",
    Rule:
      "The approved legal entity, with a display name or alias only where one is approved.",
  },
  {
    Field: "Classification",
    Rule:
      "The Legal-approved relationship, scoped to the applicable context. Vendors that are not subprocessors are not forced into this registry.",
  },
  {
    Field: "Purpose",
    Rule:
      'An approved purpose category with a concise explanation. Not "services" where the source is more precise.',
  },
  {
    Field: "Service scope",
    Rule:
      "The specific Zoiko Billing service or module. One provider is never implied to support the whole platform.",
  },
  {
    Field: "Location",
    Rule:
      "Approved country or region language, at no greater precision than the source. Never derived from headquarters or cloud marketing regions.",
  },
  {
    Field: "Transfer context",
    Rule:
      "A short approved reference. The operative mechanism lives in the DPA and is not asserted here.",
  },
  {
    Field: "Effective state",
    Rule: "Current or historical, with effective dates where approved.",
  },
  {
    Field: "Related changes",
    Rule:
      "The addition, update, removal or correction events for that provider.",
  },
  {
    Field: "Source context",
    Rule:
      "The source owner, version and review context, at a public-safe level.",
  },
];

const fieldDiscipline: TableRow[] = [
  {
    Field: "Purpose",
    "What publishes": "The approved public purpose category, stated plainly.",
    "What is never inferred":
      "A marketing generality standing in for a specific purpose the source already names.",
  },
  {
    Field: "Service scope",
    "What publishes":
      "The exact service or module context, so use is not read as platform-wide.",
    "What is never inferred":
      "That a provider supporting one feature supports every feature.",
  },
  {
    Field: "Location",
    "What publishes": "The approved country or region, at source precision.",
    "What is never inferred":
      "Processing location taken from a provider's headquarters, a cloud region name, an IP address or your browser locale.",
  },
  {
    Field: "Transfer context",
    "What publishes":
      "A reference to the approved context, with the DPA as the authority.",
    "What is never inferred":
      "Any standard contractual clause, adequacy or equivalent claim made independently by this page.",
  },
  {
    Field: "Unknown fields",
    "What publishes": 'The words "not published", so the gap is visible.',
    "What is never inferred":
      'A blank, a dash, or "not applicable" used to fill space.',
  },
];

const changeTypes: TableRow[] = [
  {
    Type: "Addition",
    Meaning: "A provider enters the registry from a stated effective date.",
  },
  {
    Type: "Field update",
    Meaning:
      "A material change to purpose, service scope, location or another published field.",
  },
  {
    Type: "Removal",
    Meaning: "A provider leaves the current registry from a stated effective date.",
  },
  {
    Type: "Correction",
    Meaning:
      "A published value was wrong and has been amended, with the prior value preserved and the correction marked.",
  },
];

const authorities: TableRow[] = [
  {
    Authority: "Data Processing Addendum",
    Owns:
      "Subprocessing rights, notice, objection, transfers, audit and deletion obligations.",
    "This page does not": "Restate or simplify any operative clause.",
  },
  {
    Authority: "Privacy Policy",
    Owns: "Broader personal-data disclosures and your privacy rights.",
    "This page does not": "Duplicate privacy disclosures that would drift.",
  },
  {
    Authority: "Security and trust",
    Owns: "Zoiko Billing's own security controls and evidence.",
    "This page does not": "Make a security or certification claim of its own.",
  },
  {
    Authority: "Provider assurances",
    Owns: "A provider's own certifications, published on its own pages.",
    "This page does not":
      "Present a provider's certification as a Zoiko Billing certification.",
  },
  {
    Authority: "Legal and procurement",
    Owns: "Questions the public registry cannot answer.",
    "This page does not": "Require a conversation before showing you the registry.",
  },
];

const legalDocuments: TableRow[] = [
  {
    Document: "Terms of User",
    "Authoritative for": "Contractual terms governing use of the service.",
    State: "Approved",
  },
  {
    Document: "Privacy Policy",
    "Authoritative for": "Personal data handling, rights and choices.",
    State: "Approved",
  },
  {
    Document: "Cookie Policy",
    "Authoritative for": "Cookies, trackers and consent settings.",
    State: "Approved",
  },
  {
    Document: "Acceptable Use Policy",
    "Authoritative for": "Responsible-use boundaries and reporting routes.",
    State: "Approved",
  },
  {
    Document: "Data Processing Addendum",
    "Authoritative for":
      "Subprocessing, notice, objection, transfers and audit terms.",
    State: "Approved",
  },
  {
    Document: "Subprocessors",
    "Authoritative for": "The provider registry and its change history.",
    State: "This page",
  },
];

const questions = [
  "What is a subprocessor?",
  "Which subprocessors does Zoiko Billing use?",
  "What does each provider do?",
  "Where is data processed?",
  "Does every customer use every listed provider?",
  "How will I know about changes?",
  "Can I object to a new subprocessor?",
  "Can I get a copy of the registry for a review?",
];

function StatusBadge({
  children,
  variant = "cyan",
}: {
  children: React.ReactNode;
  variant?: "cyan" | "orange";
}) {
  const isOrange = variant === "orange";

  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2 py-0.5 text-xs font-semibold uppercase leading-5 tracking-wide ${
        isOrange
          ? "border-[#e58b24] text-[#e58b24]"
          : "border-[#1aa7a1] text-[#1aa7a1]"
      }`}
    >
      <span
        className={`h-2 w-2 ${
          isOrange
            ? "rounded-sm border border-[#e58b24]"
            : "bg-[#1aa7a1]"
        }`}
      />
      {children}
    </span>
  );
}

function Section({
  id,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-none border border-[#dfe5ee] bg-white px-5 py-7 sm:px-6 sm:py-8 md:px-8 md:py-8"
    >
      <div className="flex flex-col gap-1.5">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="!m-0 text-[26px] font-medium leading-8 tracking-[-0.02em] text-[#091127] sm:text-3xl">
            {title}
          </h2>
        </div>

        {description && (
          <div className="max-w-[687px] border-b border-[#dfe5ee] pb-4 pt-1">
            <p className="!m-0 text-sm font-normal leading-6 text-[#5d7192] sm:text-[15px]">
              {description}
            </p>
          </div>
        )}

        <div className="pt-2">{children}</div>
      </div>
    </section>
  );
}

function DataTable({ headers, rows }: TableProps) {
  return (
    <>
      {/* DESKTOP */}
      <div className="hidden overflow-hidden md:block">
        <div
          className="grid border-b border-[#dfe5ee] bg-[#fafbfc]"
          style={{
            gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))`,
          }}
        >
          {headers.map((header) => (
            <div key={header} className="px-3.5 py-2.5">
              <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-[#7890b2]">
                {header}
              </span>
            </div>
          ))}
        </div>

        {rows.map((row, index) => (
          <div
            key={index}
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))`,
            }}
          >
            {headers.map((header) => (
              <div
                key={header}
                className={`px-3.5 py-3 ${
                  index !== rows.length - 1
                    ? "border-b border-[#edf0f4]"
                    : ""
                }`}
              >
                <span
                  className={`text-sm leading-6 ${
                    header === headers[0]
                      ? "font-semibold text-[#091127]"
                      : "font-normal text-[#091127]"
                  }`}
                >
                  {row[header]}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* MOBILE */}
      <div className="flex flex-col md:hidden">
        {rows.map((row, index) => (
          <div
            key={index}
            className={`py-4 ${
              index !== rows.length - 1
                ? "border-b border-[#edf0f4]"
                : ""
            }`}
          >
            {headers.map((header) => (
              <div key={header} className="mb-4 last:mb-0">
                <p className="!m-0 text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                  {header}
                </p>

                <p
                  className={`!m-0 mt-1.5 text-sm leading-6 ${
                    header === headers[0]
                      ? "font-semibold text-[#091127]"
                      : "font-normal text-[#5d7192]"
                  }`}
                >
                  {row[header]}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

function EmptyState({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <div className="border border-[#dfe5ee] bg-[#fafbfc] px-5 py-6 sm:px-6 sm:py-7">
      <h3 className="!m-0 text-base font-semibold leading-7 text-[#091127]">
        {title}
      </h3>

      <div className="mt-1.5 max-w-[650px] space-y-1.5">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="!m-0 text-[15px] leading-6 text-[#5d7192]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

function Callout({
  label,
  children,
  variant = "cyan",
}: {
  label: string;
  children: React.ReactNode;
  variant?: "cyan" | "orange";
}) {
  const orange = variant === "orange";

  return (
    <div
      className={`mt-5 border-l-[3px] px-5 py-4 ${
        orange
          ? "border-[#e58b24] bg-[#fffaf3]"
          : "border-[#1aa7a1] bg-[#f3fbfa]"
      }`}
    >
      <p
        className={`!m-0 text-xs font-bold uppercase leading-5 tracking-wide ${
          orange ? "text-[#e58b24]" : "text-[#1aa7a1]"
        }`}
      >
        {label}
      </p>

      <div className="mt-1 text-[15px] leading-6 text-[#091127]">
        {children}
      </div>
    </div>
  );
}

function Questions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const answers = [
    "A subprocessor is a third party classified by Legal as processing personal data on behalf of Zoiko Billing within the applicable service scope.",
    "No current provider records are available from the approved source. The page therefore does not name providers or imply that none are used.",
    "Each provider record identifies the approved purpose, service scope, location, transfer context and effective state when those values are published.",
    "Location is published only at the precision approved by the source. It is not inferred from headquarters, cloud regions, IP addresses or browser locale.",
    "No. A provider appearing in the registry does not mean every customer uses that provider.",
    "No email subscription, feed, webhook or portal alert is offered by this page. Notice timing comes from the Data Processing Addendum.",
    "Whether a right to object exists, and the applicable grounds, timing and remedy, are governed by the Data Processing Addendum.",
    "The registry can be reviewed through this page. No separate registry-copy workflow is established by the page.",
  ];

  return (
    <div className="divide-y divide-[#dfe5ee] border-y border-[#dfe5ee]">
      {questions.map((question, index) => {
        const open = openIndex === index;

        return (
          <div key={question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center gap-3 py-4 text-left"
              aria-expanded={open}
            >
              <span className="flex h-8 w-4 shrink-0 items-center justify-center text-xl font-medium leading-8 text-[#5d7192]">
                {open ? "−" : "+"}
              </span>

              <span className="text-sm font-semibold leading-6 text-[#091127] sm:text-base">
                {question}
              </span>
            </button>

            {open && (
              <div className="pb-5 pl-7 pr-3">
                <p className="!m-0 text-sm leading-6 text-[#5d7192]">
                  {answers[index]}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function LegalNotices() {
  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5
          py-10

          sm:px-8
          sm:py-14

          md:px-10
          md:py-16

          lg:px-14

          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            gap-6

            lg:flex-row
            lg:items-start
            lg:gap-10
          "
        >
          {/* LEFT NAVIGATION */}
          <aside className="hidden w-56 shrink-0 lg:block">
            <div className="sticky top-6 flex flex-col gap-2.5">
              {navigation.map((group) => (
                <div key={group.title}>
                  <div className="pb-2 pt-1">
                    <p className="!m-0 text-xs font-bold uppercase leading-5 tracking-wider text-[#7890b2]">
                      {group.title}
                    </p>
                  </div>

                  <nav className="border-l border-[#dfe5ee]">
                    {group.items.map((item, index) => {
                      const active =
                        item.id === "documents";

                      return (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`block border-l-[3px] px-3 py-2 text-sm leading-6 transition ${
                            active
                              ? "border-[#1aa7a1] bg-white font-semibold text-[#091127]"
                              : "border-transparent font-normal text-[#5d7192] hover:bg-white hover:text-[#091127]"
                          }`}
                        >
                          {item.label}
                        </a>
                      );
                    })}
                  </nav>
                </div>
              ))}
            </div>
          </aside>

          {/* MOBILE NAV */}
          <div className="w-full lg:hidden">
            <div className="rounded-2xl border border-[#dfe5ee] bg-white p-4">
              <p className="!m-0 text-xs font-bold uppercase leading-5 tracking-wider text-[#7890b2]">
                The registry
              </p>

              <div className="mt-2 grid gap-1 sm:grid-cols-2">
                {navigation.flatMap((group) =>
                  group.items.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="border-l-2 border-transparent px-3 py-2 text-sm leading-6 text-[#5d7192] hover:border-[#1aa7a1] hover:bg-[#f7f8fa]"
                    >
                      {item.label}
                    </a>
                  )),
                )}
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <main className="flex w-full min-w-0 flex-col gap-6 lg:max-w-[1008px]">
            {/* CURRENTNESS */}
            <Section
              id="currentness"
              title="Currentness and record states"
              description="Four states, each with a plain text label. A provider's state is never conveyed by colour or position alone."
            >
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <StatusBadge variant="orange">
                  Source unavailable
                </StatusBadge>
              </div>

              <div className="overflow-hidden border border-[#dfe5ee]">
                {[
                  {
                    title: "Current",
                    text: "Approved and in effect now for the stated service scope. These are the records in the registry below.",
                  },
                  {
                    title: "Upcoming change",
                    text: "Approved with a future effective date. Kept separate from the current registry until the cutover, which happens for every surface at once.",
                  },
                  {
                    title: "Removed",
                    text: "No longer in use from a stated effective date. Kept in the history, clearly distinct from current providers.",
                  },
                  {
                    title: "Corrected",
                    text: "A published record was amended. The correction is marked and the prior published value is preserved rather than overwritten.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`px-4 py-4 ${
                      index !== 0
                        ? "border-t border-[#dfe5ee]"
                        : ""
                    }`}
                  >
                    <p className="!m-0 text-xs font-bold uppercase leading-5 tracking-wide text-[#091127]">
                      {item.title}
                    </p>

                    <p className="!m-0 mt-1 text-sm leading-6 text-[#5d7192]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <Callout label="What this page governs">
                This registry owns provider facts: who is approved, for what
                purpose, in which service scope, from when. The Data Processing
                Addendum owns the contractual side — notice, objection, transfer
                mechanisms, audit and deletion. The Privacy Policy owns broader
                personal-data disclosures. Neither is restated here.
              </Callout>
            </Section>

            {/* CURRENT SUBPROCESSORS */}
            <Section
              id="subprocessors"
              title="Current subprocessors"
              description="Search, filters and sorting appear once records exist. They refine what is shown and never change the legal scope of the registry."
            >
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <StatusBadge variant="orange">0 records</StatusBadge>
              </div>

              <EmptyState
                title="No current provider records are available from the approved source"
                paragraphs={[
                  "The approved vendor and classification sources have not been supplied, so no provider is named. This is a statement about the registry, not about Zoiko Billing's processing arrangements. It does not mean no subprocessors are used.",
                  "A third party is listed here only once Legal classifies it as a subprocessor. Appearing in an architecture diagram or a vendor system is not that classification.",
                ]}
              />

              <Callout
                label="Why there are no blank rows"
                variant="orange"
              >
                An empty cell or a dash in a provider table reads as "none" or
                "not applicable", and that is a factual claim nobody approved.
                Where a field is unknown or withheld, a published record will say
                "not published" in words instead.
              </Callout>
            </Section>

            {/* RECORD FIELDS */}
            <Section
              id="record-fields"
              title="What each provider record shows"
              description="The record contract, so a reviewer knows what to expect and engineering knows what to export."
            >
              <p className="!m-0 mb-3 text-xs uppercase leading-5 tracking-wide text-[#7890b2]">
                Provider record fields
              </p>

              <DataTable
                headers={["Field", "Rule"]}
                rows={recordFields}
              />
            </Section>

            {/* FIELD DISCIPLINE */}
            <Section
              id="field-discipline"
              title="Purpose, service scope and location"
              description="Three fields that are easy to get subtly wrong, and the rules that keep them accurate."
            >
              <p className="!m-0 mb-3 text-xs uppercase leading-5 tracking-wide text-[#7890b2]">
                Field discipline
              </p>

              <DataTable
                headers={[
                  "Field",
                  "What publishes",
                  "What is never inferred",
                ]}
                rows={fieldDiscipline}
              />
            </Section>

            {/* CHANGES */}
            <Section
              id="changes"
              title="Changes and upcoming updates"
              description="The change record is what makes a registry reviewable. Values are added to the history, never written over."
            >
              <EmptyState
                title="No change events yet"
                paragraphs={[
                  "Once the registry publishes, each event will show the provider, the change type, the announced and effective dates, which fields changed, the prior and current values where they are public, and the source version.",
                  "An upcoming change is shown separately from the current registry. The current records stay authoritative until the effective date, and the cutover updates every surface at once rather than page by page.",
                ]}
              />

              <div className="mt-6">
                <p className="!m-0 mb-3 text-xs uppercase leading-5 tracking-wide text-[#7890b2]">
                  Change types the history will record
                </p>

                <DataTable
                  headers={["Type", "Meaning"]}
                  rows={changeTypes}
                />
              </div>
            </Section>

            {/* REMOVED */}
            <Section
              id="removed"
              title="Removed and superseded providers"
              description="Historical records stay reachable so a past review can be checked, and stay clearly marked so they cannot be read as current."
            >
              <EmptyState
                title="No historical records yet"
                paragraphs={[
                  "Each removed provider will show its effective range and an approved neutral reason. Internal risk assessments and commercial negotiation notes are not published.",
                  "Where a successor exists and Legal approves the link, it is shown as a link and not as a claim that the two providers are equivalent.",
                ]}
              />
            </Section>

            {/* NOTIFICATIONS */}
            <Section
              id="notifications"
              title="Knowing about changes"
              description="How you learn about a change, and where the right to object actually comes from."
            >
              <EmptyState
                title="No change-notification channel is offered"
                paragraphs={[
                  "No email subscription, feed, webhook or portal alert is provided, because no approved operational mechanism has been established. Offering a subscription that does not exist would be worse than offering none.",
                  "No advance notice period is stated here. Any notice timing comes from your Data Processing Addendum, which is the operative source.",
                ]}
              />

              <Callout label="Objecting to a new subprocessor">
                Whether a right to object exists, on what grounds, within what
                timeframe and with what remedy is set by the DPA. This page does
                not create an objection workflow and does not paraphrase the
                right.
              </Callout>
            </Section>

            {/* EVIDENCE */}
            <Section
              id="evidence"
              title="Contracts, privacy and security evidence"
              description="Four neighbouring authorities. This registry holds provider facts and routes everything else to its owner."
            >
              <p className="!m-0 mb-3 text-xs uppercase leading-5 tracking-wide text-[#7890b2]">
                Where each question belongs
              </p>

              <DataTable
                headers={[
                  "Authority",
                  "Owns",
                  "This page does not",
                ]}
                rows={authorities}
              />
            </Section>

            {/* QUESTIONS */}
            <Section
              id="questions"
              title="Questions"
              description="Answers come from the current registry version, or say plainly that the source establishes nothing yet."
            >
              <Questions />
            </Section>

            {/* DOCUMENTS */}
            <Section
              id="documents"
              title="Related legal documents"
              description="The Legal Corporate sequence, with the current state of each destination."
            >
              <p className="!m-0 mb-3 text-xs uppercase leading-5 tracking-wide text-[#7890b2]">
                Legal Corporate destinations
              </p>

              {/* DESKTOP */}
              <div className="hidden md:block">
                <div className="grid grid-cols-[240px_minmax(0,1fr)_180px] border-b border-[#dfe5ee] bg-[#fafbfc]">
                  <div className="px-3.5 py-2.5">
                    <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-[#7890b2]">
                      Document
                    </span>
                  </div>

                  <div className="px-3.5 py-2.5">
                    <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-[#7890b2]">
                      Authoritative for
                    </span>
                  </div>

                  <div className="px-3.5 py-2.5">
                    <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-[#7890b2]">
                      State
                    </span>
                  </div>
                </div>

                {legalDocuments.map((document, index) => (
                  <div
                    key={document.Document}
                    className="grid grid-cols-[240px_minmax(0,1fr)_180px]"
                  >
                    <div
                      className={`px-3.5 py-3 ${
                        index !== legalDocuments.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }`}
                    >
                      <span className="text-sm font-semibold leading-6 text-[#091127]">
                        {document.Document}
                      </span>
                    </div>

                    <div
                      className={`px-3.5 py-3 ${
                        index !== legalDocuments.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }`}
                    >
                      <span className="text-sm leading-6 text-[#5d7192]">
                        {document["Authoritative for"]}
                      </span>
                    </div>

                    <div
                      className={`px-3.5 py-3 ${
                        index !== legalDocuments.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }`}
                    >
                      <StatusBadge
                        variant={
                          document.State === "This page"
                            ? "orange"
                            : "cyan"
                        }
                      >
                        {document.State}
                      </StatusBadge>
                    </div>
                  </div>
                ))}
              </div>

              {/* MOBILE */}
              <div className="flex flex-col md:hidden">
                {legalDocuments.map((document, index) => (
                  <div
                    key={document.Document}
                    className={`py-4 ${
                      index !== legalDocuments.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }`}
                  >
                    <p className="!m-0 text-sm font-semibold leading-6 text-[#091127]">
                      {document.Document}
                    </p>

                    <p className="!m-0 mt-2 text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                      Authoritative for
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {document["Authoritative for"]}
                    </p>

                    <div className="mt-3">
                      <StatusBadge
                        variant={
                          document.State === "This page"
                            ? "orange"
                            : "cyan"
                        }
                      >
                        {document.State}
                      </StatusBadge>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </main>
        </div>
      </div>
    </section>
  );
}