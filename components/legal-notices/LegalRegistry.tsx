"use client";

import { useState } from "react";

type Row = {
  name: string;
  description: string;
  state?: "Approved" | "Awaiting source" | "This page";
};

type SectionProps = {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

const categories = [
  ["Operator and corporate", "No published record"],
  ["Intellectual property", "No published record"],
  ["Third party and open source", "No published record"],
  ["Product and service", "No published record"],
  ["Regional and jurisdictional", "No published record"],
  ["Electronic notices", "No published record"],
];

const noticeRows: Row[] = [
  {
    name: "Title",
    description: "The exact approved public title.",
  },
  {
    name: "Category",
    description: "A label from the approved taxonomy.",
  },
  {
    name: "Status",
    description:
      "A text label: current, upcoming, superseded or corrected. Never conveyed by colour alone.",
  },
  {
    name: "Applies to",
    description:
      "Product, artifact, audience, entity or jurisdiction qualifiers. Unknown dimensions are omitted, not guessed.",
  },
  {
    name: "Effective",
    description:
      "The approved effective date, shown separately from the publication date.",
  },
  {
    name: "Summary",
    description:
      "A faithful approved synopsis. Operative legal effect is never paraphrased without Legal approval.",
  },
  {
    name: "Authority",
    description:
      'A link to the governing document, labelled "governed by", "see also" or "reference".',
  },
  {
    name: "History",
    description:
      "Current records link to their history; historical records link forward to the current one.",
  },
];

const entityRows: Row[] = [
  {
    name: "Legal name",
    description:
      "Published exactly as the Legal Entity Registry records it.",
    state: "Awaiting source",
  },
  {
    name: "Entity role",
    description:
      "The operator relationship to this service, where approved.",
    state: "Awaiting source",
  },
  {
    name: "Registration details",
    description:
      "Jurisdiction and registration identifiers, where publication is authorised.",
    state: "Awaiting source",
  },
  {
    name: "Registered office",
    description:
      "The registered address, where publication is authorised.",
    state: "Awaiting source",
  },
  {
    name: "Trading names",
    description:
      "The relationship between the brand and the legal entity.",
    state: "Awaiting source",
  },
  {
    name: "Legal contact",
    description:
      "The approved route for formal correspondence.",
    state: "Awaiting source",
  },
];

const states = [
  [
    "Current",
    "In force now, with fresh source metadata. Indexable, self-canonical, and the default record for its subject.",
  ],
  [
    "Upcoming",
    "Approved for a future effective date. Shown alongside the current record, never in place of it.",
  ],
  [
    "Superseded",
    "Replaced by a newer record. Kept reachable for reference, with a link to the current notice as its main action.",
  ],
  [
    "Corrected",
    "Amended after publication, with the correction date and an approved note. The corrected record is the authoritative one.",
  ],
  [
    "Withdrawn",
    "No longer published. Visible only where Legal authorises public history.",
  ],
  [
    "Archived",
    "Retained for the record. Not indexed and not presented as current.",
  ],
  [
    "Currentness unavailable",
    "The source could not be verified. The record is not labelled current and stale content is not shown in its place.",
  ],
];

const utilityRows: Row[] = [
  {
    name: "Print",
    description:
      "Navigation and commercial chrome drop away. Notice title, scope, state, effective date, source version and page URL stay on the page.",
  },
  {
    name: "Download",
    description:
      "Only an approved immutable artifact or a snapshot carrying its version identifier. No file is generated that could drift from the source unnoticed.",
  },
  {
    name: "Copy link",
    description:
      "Copies the stable notice and version URL, with no tracking identifiers attached.",
  },
  {
    name: "Citation",
    description:
      "Notice ID, version and effective date as plain text for a review document.",
  },
  {
    name: "If a download fails",
    description:
      "The HTML stays available and readable, your filters and position are kept, and the page explains the unavailability rather than pretending a file was produced.",
  },
];

const legalRows: Row[] = [
  {
    name: "Terms of User",
    description:
      "Operative service and website terms, and contractual rights and obligations.",
    state: "Approved",
  },
  {
    name: "Privacy Policy",
    description:
      "Public privacy disclosures and your rights over personal data.",
    state: "Approved",
  },
  {
    name: "Cookie Policy",
    description:
      "Cookies, tracking technologies and the route to your choices.",
    state: "Approved",
  },
  {
    name: "Acceptable Use Policy",
    description:
      "Responsible-use boundaries and reporting routes.",
    state: "Approved",
  },
  {
    name: "Data Processing Addendum",
    description:
      "Contractual processing, subprocessors and transfer terms.",
    state: "Approved",
  },
  {
    name: "Security Addendum",
    description:
      "Contractual security commitments and related controls.",
    state: "Approved",
  },
  {
    name: "Service Level Agreement",
    description:
      "Service levels and related operational commitments.",
    state: "Approved",
  },
  {
    name: "Subprocessors",
    description:
      "The current provider registry and its change process.",
    state: "Approved",
  },
  {
    name: "Legal Notices",
    description:
      "Published legal notices and corporate disclosures.",
    state: "This page",
  },
  {
    name: "Sitemap",
    description:
      "The index of published destinations.",
    state: "Approved",
  },
];

const questions = [
  {
    question: "What are Zoiko Billing Legal Notices?",
    answer:
      "Zoiko Billing Legal Notices are published notices covering legal, corporate, intellectual-property, third-party, product, regional and electronic-communication matters that are not fully addressed by another governing legal document. Each notice is published with its scope, status, effective date and source information where approved.",
  },
  {
    question: "Which legal entity operates Zoiko Billing?",
    answer:
      "The legal entity responsible for operating Zoiko Billing is published only when the relevant entity information has been approved for public disclosure. This page does not infer the operator from the Zoiko Billing brand, website domain, invoices or corporate-group relationships. Refer to the Operator and legal entity section for the current publication status.",
  },
  {
    question: "Which notice applies to me?",
    answer:
      "Applicability depends on the scope defined by the relevant legal notice or governing agreement. This page does not determine applicability from your IP address, browser locale, language, sales region or billing currency. Where a notice defines a specific jurisdiction, product, audience or entity scope, that scope is stated directly in the notice.",
  },
  {
    question: "When did a notice take effect?",
    answer:
      "The effective date is the date on which an approved notice becomes operative. It is separate from the publication date, which records when the notice was made publicly available. Where both dates exist, they are displayed separately so that publication timing is not confused with legal effectiveness.",
  },
  {
    question: "Has a notice changed?",
    answer:
      "Changes are recorded through the notice's version and history information. A superseded notice remains available for historical reference and links to the current version. Corrections are identified separately and include the relevant correction information and approved explanation.",
  },
  {
    question: "Where are the privacy and data-processing terms?",
    answer:
      "The Privacy Policy contains the public privacy disclosures and information about data-subject rights. The Data Processing Addendum contains contractual provisions relating to processing, subprocessors and applicable data-transfer terms. Both documents are listed under Related legal documents on this page.",
  },
  {
    question: "Where can I find open-source notices?",
    answer:
      "Open-source and third-party notices are published in the Third-party and open-source notices section when an approved notice bundle exists for a specific artifact or service. Dependency metadata or repository contents are not treated as an approved legal notice by themselves.",
  },
  {
    question: "How do I send a legal notice to Zoiko Billing?",
    answer:
      "Formal legal notices must be sent using the delivery method specified in the applicable Terms of User, agreement or other governing document. This page does not create an independent service-of-process or legal-delivery mechanism. The governing agreement should be checked for the authorised delivery channel and applicable requirements.",
  },
];

const sidebarGroups = [
  {
    title: "Notices",
    links: [
      ["Notice categories", "categories"],
      ["Published notices", "published"],
      ["Operator and entity", "entity"],
      ["Intellectual property", "ip"],
      ["Third party and open source", "opensource"],
      ["Product notices", "product"],
      ["Regional notices", "regional"],
      ["Electronic delivery", "delivery"],
    ],
  },
  {
    title: "Provenance",
    links: [
      ["Dates and currentness", "states"],
      ["History and corrections", "history"],
      ["Print, download, cite", "citation"],
    ],
  },
  {
    title: "Elsewhere",
    links: [
      ["Related legal documents", "legal"],
      ["Questions", "questions"],
    ],
  },
];

function StatusBadge({ state }: { state: Row["state"] }) {
  if (!state) return null;

  const isApproved = state === "Approved";

  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2 py-0.5 text-xs font-semibold uppercase tracking-wide ${
        isApproved
          ? "border-[#2cb9c5] text-[#2cb9c5]"
          : "border-[#f28b30] text-[#f28b30]"
      }`}
    >
      <span
        className={`h-2.5 w-2.5 ${
          isApproved ? "bg-[#2cb9c5]" : "border border-current"
        }`}
      />

      {state}
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
      className="
        scroll-mt-24
        rounded-2xl
        border
        border-[#dfe5ee]
        bg-white
        p-5
        shadow-[0_1px_2px_rgba(15,23,42,0.03)]

        sm:p-8
      "
    >
      <h2
        className="
          !m-0
          text-[26px]
          font-medium
          leading-8
          tracking-[-0.02em]
          text-[#091127]

          sm:text-3xl
        "
      >
        {title}
      </h2>

      {description && (
        <div className="mt-3 max-w-[680px] border-b border-[#dfe5ee] pb-5">
          <p
            className="
              !m-0
              text-sm
              leading-6
              text-[#5d7192]

              sm:text-[15px]
            "
          >
            {description}
          </p>
        </div>
      )}

      <div className="mt-6">{children}</div>
    </section>
  );
}

function EmptyNotice({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        border
        border-[#e1e6ed]
        bg-[#fafbfc]
        px-5
        py-8

        sm:px-6
      "
    >
      <h3
        className="
          !m-0
          text-base
          font-semibold
          leading-7
          text-[#091127]
        "
      >
        {title}
      </h3>

      <div
        className="
          mt-2
          space-y-2
          text-[15px]
          leading-6
          text-[#4f6382]
        "
      >
        {children}
      </div>
    </div>
  );
}

function DataTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: Row[];
}) {
  return (
    <>
      {/* DESKTOP TABLE */}
      <div className="hidden overflow-hidden rounded-xl border border-[#dfe5ee] md:block">
        <div
          className={`grid bg-[#fafbfc] ${
            columns.length === 2
              ? "grid-cols-[220px_minmax(0,1fr)]"
              : "grid-cols-[220px_minmax(0,1fr)_180px]"
          }`}
        >
          {columns.map((column) => (
            <div
              key={column}
              className="border-b border-[#dfe5ee] px-3.5 py-3"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-[#7890b2]">
                {column}
              </span>
            </div>
          ))}
        </div>

        {rows.map((row, index) => (
          <div
            key={row.name}
            className={`grid ${
              columns.length === 2
                ? "grid-cols-[220px_minmax(0,1fr)]"
                : "grid-cols-[220px_minmax(0,1fr)_180px]"
            } ${
              index !== rows.length - 1
                ? "border-b border-[#edf0f4]"
                : ""
            }`}
          >
            <div className="px-3.5 py-3">
              <span className="text-sm font-semibold leading-6 text-[#091127]">
                {row.name}
              </span>
            </div>

            <div className="px-3.5 py-3">
              <span className="text-sm leading-6 text-[#091127]">
                {row.description}
              </span>
            </div>

            {columns.length === 3 && (
              <div className="px-3.5 py-3">
                <StatusBadge state={row.state} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* MOBILE TABLE */}
      <div className="flex flex-col overflow-hidden rounded-xl border border-[#dfe5ee] md:hidden">
        {rows.map((row, index) => (
          <div
            key={row.name}
            className={`p-4 ${
              index !== rows.length - 1
                ? "border-b border-[#edf0f4]"
                : ""
            }`}
          >
            <p className="!m-0 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
              {columns[0]}
            </p>

            <p className="!m-0 mt-1 text-sm font-semibold leading-6 text-[#091127]">
              {row.name}
            </p>

            <p className="!m-0 mt-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
              {columns[1]}
            </p>

            <p className="!m-0 mt-1 text-sm leading-6 text-[#091127]">
              {row.description}
            </p>

            {columns.length === 3 && row.state && (
              <>
                <p className="!m-0 mt-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                  {columns[2]}
                </p>

                <div className="mt-1">
                  <StatusBadge state={row.state} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default function LegalRegistry() {
  const [openQuestion, setOpenQuestion] =
    useState<number | null>(null);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
          gap-6
          px-5
          py-10

          sm:px-8
          sm:py-14

          md:px-10
          md:py-16

          lg:flex-row
          lg:px-14

          xl:px-20
        "
      >
        {/* DESKTOP SIDEBAR */}
        <aside className="sticky top-6 hidden w-60 shrink-0 lg:block">
          <nav className="flex flex-col gap-2.5">
            {sidebarGroups.map((group) => (
              <div key={group.title}>
                <p
                  className="
                    !m-0
                    px-0
                    py-1
                    text-xs
                    font-bold
                    uppercase
                    leading-5
                    tracking-wider
                    text-[#7890b2]
                  "
                >
                  {group.title}
                </p>

                <div className="border-l border-[#dfe5ee]">
                  {group.links.map(([label, id]) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => goTo(id)}
                      className="
                        w-full
                        border-l-[3px]
                        border-transparent
                        px-3
                        py-1.5
                        text-left
                        text-sm
                        leading-6
                        text-[#5d7192]
                        transition

                        hover:border-[#091127]
                        hover:text-[#091127]
                      "
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* MOBILE NAVIGATION */}
        <div className="w-full lg:hidden">
          <details className="rounded-xl border border-[#dfe5ee] bg-white">
            <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-[#091127]">
              On this page
            </summary>

            <div className="border-t border-[#edf0f4] p-4">
              <div className="grid gap-2 sm:grid-cols-2">
                {sidebarGroups.flatMap((group) =>
                  group.links.map(([label, id]) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => goTo(id)}
                      className="
                        rounded-lg
                        px-3
                        py-2
                        text-left
                        text-sm
                        text-[#5d7192]

                        hover:bg-[#f7f8fa]
                        hover:text-[#091127]
                      "
                    >
                      {label}
                    </button>
                  )),
                )}
              </div>
            </div>
          </details>
        </div>

        {/* MAIN CONTENT */}
        <main className="flex min-w-0 w-full flex-1 flex-col gap-6">
          {/* CATEGORIES */}
          <Section
            id="categories"
            title="Notice categories"
            description="These are the categories the taxonomy defines. Listing a category is not a claim that a notice currently exists in it."
          >
            <div className="overflow-hidden rounded-xl border border-[#dfe5ee]">
              {categories.map(([name, status], index) => (
                <div
                  key={name}
                  className={`bg-white px-4 py-3.5 ${
                    index !== categories.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <p className="!m-0 text-base font-semibold leading-6 text-[#091127]">
                    {name}
                  </p>

                  <p className="!m-0 mt-1 text-sm leading-6 text-[#5d7192]">
                    {status}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* PUBLISHED NOTICES */}
          <Section
            id="published"
            title="Published notices"
            description="The registry holds every approved public notice with its category, scope, state and effective date. Search and filters appear once records exist; they are an enhancement, never a gate on reading."
          >
            <div className="mb-5 flex items-center gap-2">
              <span className="border border-[#f28b30] px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#f28b30]">
                0 records
              </span>
            </div>

            <EmptyNotice title="No public notice records are available from the approved source at this time">
              <p>
                This means the registry has not published any records yet.
                It does not mean no notice applies to you, and it is not a
                statement about what obligations exist.
              </p>

              <p>
                The related legal documents below remain authoritative for
                their own subjects and are all reachable now.
              </p>
            </EmptyNotice>

            <h3 className="!m-0 mt-6 text-base font-semibold leading-7 text-[#091127]">
              What each published record will carry
            </h3>

            <div className="mt-4">
              <p className="!m-0 mb-2 text-xs uppercase tracking-wide text-[#7890b2]">
                Notice record anatomy
              </p>

              <DataTable
                columns={["Field", "Rule"]}
                rows={noticeRows}
              />
            </div>
          </Section>

          {/* ENTITY */}
          <Section
            id="entity"
            title="Operator and legal entity"
            description="Entity facts are published field by field, each independently approved. None is derived from the brand, the domain registration, an invoice sample or corporate-group convention."
          >
            <p className="!m-0 mb-2 text-xs uppercase tracking-wide text-[#7890b2]">
              Entity fields and their state
            </p>

            <DataTable
              columns={["Field", "Publication rule", "State"]}
              rows={entityRows}
            />

            <div className="mt-5 border-l-[3px] border-[#f28b30] bg-[#fff8f1] px-5 py-4">
              <p className="!m-0 text-xs font-bold uppercase tracking-wide text-[#f28b30]">
                Why nothing is filled in
              </p>

              <p className="!m-0 mt-1 text-sm leading-6 text-[#091127]">
                An entity fact published in error is difficult to correct and
                can mislead a formal process. Each field stays empty until its
                own source and owner are recorded, rather than being completed
                from a plausible inference.
              </p>
            </div>
          </Section>

          {/* IP */}
          <Section
            id="ip"
            title="Intellectual property notices"
            description="Copyright, trademark and proprietary-rights notices publish individually, each with the assets or products it covers."
          >
            <EmptyNotice title="No intellectual property notice is currently published">
              <p>
                No blanket ownership or rights-reserved statement appears here
                by default. Such a statement carries legal weight and
                publishes only with approved wording and an explicit scope.
              </p>

              <p>
                Third-party marks are attributed to their owners where Legal
                approves the attribution, and not otherwise.
              </p>
            </EmptyNotice>
          </Section>

          {/* OPEN SOURCE */}
          <Section
            id="opensource"
            title="Third-party and open-source notices"
            description="Attribution and licence notices are scoped to a specific artifact or service, as structured records rather than a wall of logos."
          >
            <EmptyNotice title="No third-party or open-source notice is currently published">
              <p>
                Dependency lists are not generated from package metadata or
                repository contents. They publish when open-source compliance
                owns and approves the notice bundle for a named artifact and
                version.
              </p>

              <p>
                This absence is not a statement that the service contains no
                third-party components.
              </p>
            </EmptyNotice>
          </Section>

          {/* PRODUCT */}
          <Section
            id="product"
            title="Product and service notices"
            description="Only notices that no other legal document already governs appear here, each with its exact product scope."
          >
            <EmptyNotice title="No product or service notice is currently published">
              <p>
                Generic service disclaimers are not added to make the page
                look complete. Where a subject belongs to the Terms, Privacy
                Policy, Acceptable Use Policy or the Data Processing Addendum,
                it stays there.
              </p>
            </EmptyNotice>
          </Section>

          {/* REGIONAL */}
          <Section
            id="regional"
            title="Regional and jurisdictional notices"
            description="Regional scope is a property of the notice, declared by Legal. It is never decided by where you appear to be browsing from."
          >
            <EmptyNotice title="No regional notice is currently published">
              <p>
                Each regional notice will carry its own jurisdiction label so
                you can read the scope directly rather than being routed by
                inference.
              </p>
            </EmptyNotice>

            <div className="mt-5 border-l-[3px] border-[#f28b30] bg-[#fff8f1] px-5 py-4">
              <p className="!m-0 text-xs font-bold uppercase tracking-wide text-[#f28b30]">
                How applicability is not determined
              </p>

              <p className="!m-0 mt-1 text-sm leading-6 text-[#091127]">
                Your IP address, browser locale, language setting, sales
                region and billing currency are never used to decide which
                legal notice applies to you. Where a legal source defines a
                mechanism for determining applicability, that mechanism is
                described in the notice itself.
              </p>
            </div>
          </Section>

          {/* DELIVERY */}
          <Section
            id="delivery"
            title="Electronic communications and legal delivery"
            description="How formal notices are sent and received is a contractual matter, governed by the Terms of User or your agreement."
          >
            <EmptyNotice title="No electronic delivery notice is currently published">
              <p>
                Consent to electronic notice, deemed-receipt timing, valid
                delivery channels and service-of-process rules are not
                inferred from common practice. They publish only from the
                governing agreement, and the notice will point to it.
              </p>
            </EmptyNotice>
          </Section>

          {/* STATES */}
          <Section
            id="states"
            title="Dates, currentness and states"
            description="Seven states, each with a distinct label. A record can only be shown as current when its source metadata is fresh."
          >
            <div className="overflow-hidden rounded-xl border border-[#dfe5ee]">
              {states.map(([name, description], index) => (
                <div
                  key={name}
                  className={`px-4 py-4 ${
                    index !== states.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <p className="!m-0 text-xs font-bold uppercase tracking-wide text-[#091127]">
                    {name}
                  </p>

                  <p className="!m-0 mt-1 text-sm leading-6 text-[#4f6382]">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <p className="!m-0 mt-4 max-w-[680px] text-sm leading-7 text-[#091127]">
              Publication date and effective date are separate facts and are
              labelled separately wherever both exist. A notice published
              today may take effect later, and neither date is used as a
              substitute for the other.
            </p>
          </Section>

          {/* HISTORY */}
          <Section
            id="history"
            title="History and corrections"
            description="Changes are added to the lineage rather than written over the previous text. A link to an older version stays working."
          >
            <EmptyNotice title="No change history yet">
              <p>
                Once records are published, each change appears here with its
                type, publication and effective timestamps, version, approved
                summary, and its relationship to the current record.
              </p>

              <p>
                A link to a superseded notice will never return a not-found
                error. It resolves to the historical record, states clearly
                that it is superseded, and links forward to what replaced it.
              </p>
            </EmptyNotice>

            <div className="mt-5 border-l-[3px] border-[#2cb9c5] bg-[#f2fbfc] px-5 py-4">
              <p className="!m-0 text-xs font-bold uppercase tracking-wide text-[#2cb9c5]">
                For procurement references
              </p>

              <p className="!m-0 mt-1 text-sm leading-6 text-[#091127]">
                Each record carries an immutable notice ID and version anchor,
                so a citation in a review document keeps pointing at the exact
                version it was written about, even after a later revision.
              </p>
            </div>
          </Section>

          {/* CITATION */}
          <Section
            id="citation"
            title="Print, download and citation"
            description="Evidence for a review needs to carry its context. A printed page with no version or date is not usable evidence."
          >
            <p className="!m-0 mb-2 text-xs uppercase tracking-wide text-[#7890b2]">
              Utilities and what they guarantee
            </p>

            <DataTable
              columns={["Utility", "Behaviour"]}
              rows={utilityRows}
            />
          </Section>

          {/* LEGAL DOCUMENTS */}
          <Section
            id="legal"
            title="Related legal documents"
            description="Each document below is authoritative for its own subject. This page links to them and does not restate or simplify their terms."
          >
            <p className="!m-0 mb-2 text-xs uppercase tracking-wide text-[#7890b2]">
              Legal Corporate destinations
            </p>

            <DataTable
              columns={["Document", "Authoritative for", "State"]}
              rows={legalRows}
            />

            <div className="mt-5 border-l-[3px] border-[#2cb9c5] bg-[#f2fbfc] px-5 py-4">
              <p className="!m-0 text-xs font-bold uppercase tracking-wide text-[#2cb9c5]">
                Security and trust
              </p>

              <p className="!m-0 mt-1 text-sm leading-6 text-[#091127]">
                Security practices, vulnerability reporting and trust evidence
                are routed to the separately approved security destination.
                This page makes no security or certification claim of its own.
              </p>
            </div>
          </Section>

          {/* QUESTIONS */}
          <Section
            id="questions"
            title="Questions"
            description="Each answer keeps its scope and effective context. Where a source establishes nothing, the answer says so rather than answering no."
          >
            <div className="divide-y divide-[#dfe5ee] border-y border-[#dfe5ee]">
              {questions.map((item, index) => {
                const isOpen = openQuestion === index;

                return (
                  <div key={item.question}>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenQuestion(
                          isOpen ? null : index,
                        )
                      }
                      className="
                        flex
                        w-full
                        items-start
                        gap-3
                        py-4
                        text-left
                      "
                      aria-expanded={isOpen}
                      aria-controls={`question-answer-${index}`}
                    >
                      <span className="w-4 shrink-0 text-xl font-medium leading-8 text-[#5d7192]">
                        {isOpen ? "−" : "+"}
                      </span>

                      <span className="text-sm font-semibold leading-6 text-[#091127] sm:text-base">
                        {item.question}
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={`question-answer-${index}`}
                        className="
                          pb-5
                          pl-7
                          pr-2
                          text-sm
                          leading-7
                          text-[#5d7192]
                          sm:pr-6
                        "
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Section>
        </main>
      </div>
    </section>
  );
}