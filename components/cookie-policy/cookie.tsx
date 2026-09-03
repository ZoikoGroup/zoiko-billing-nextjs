"use client";

import { useState } from "react";

type StatusType =
  | "approved"
  | "awaiting"
  | "not-established"
  | "not-published"
  | "this-page"
  | "governance"
  | "prepared";

type TableRow = {
  label: string;
  value: string;
  status?: string;
  statusType?: StatusType;
};

const navigation = [
  { id: "policy-summary", label: "Policy summary" },
  { id: "scope-technologies", label: "Scope and technologies" },
  { id: "cookie-categories", label: "Cookie categories" },
  { id: "cookie-inventory", label: "Cookie inventory" },
  { id: "first-third-party", label: "First party and third party" },
  { id: "duration-expiry", label: "Duration and expiry" },
  { id: "consent-settings", label: "Consent and settings" },
  { id: "browser-signals", label: "Browser and device signals" },
  { id: "contexts-regions", label: "Contexts and regions" },
  { id: "changes-history", label: "Changes and version history" },
  { id: "questions", label: "Questions" },
  { id: "related-documents", label: "Related legal documents" },
];

const scopeRows: TableRow[] = [
  {
    label: "Sites and services",
    value:
      "The exact Zoiko Billing websites, applications, authenticated areas and embedded contexts named in the approved scope record.",
    status: "Awaiting source",
    statusType: "awaiting",
  },
  {
    label: "Cookies",
    value:
      "Small files a site stores in your browser, described to the level Legal and Privacy approve.",
    status: "Awaiting source",
    statusType: "awaiting",
  },
  {
    label: "Local and browser storage",
    value:
      "Included only where the inventory confirms it is in use.",
    status: "Not established",
    statusType: "not-established",
  },
  {
    label: "Pixels, tags and SDKs",
    value:
      "Only the technology types actually deployed in a covered context appear here.",
    status: "Not established",
    statusType: "not-established",
  },
  {
    label: "Server-side measurement",
    value:
      "Not described as a cookie. If it is in scope, it is explained from its own approved source.",
    status: "Not established",
    statusType: "not-established",
  },
  {
    label: "Product versus marketing site",
    value:
      "The public site and the authenticated billing product are treated as separate contexts and are never merged.",
    status: "Governance rule",
    statusType: "governance",
  },
];

const inventoryRows: TableRow[] = [
  {
    label: "Name",
    value:
      "The exact approved public name. No friendly relabelling that breaks traceability.",
  },
  {
    label: "Technology",
    value:
      "Cookie, local storage, pixel, tag, SDK or another approved type.",
  },
  {
    label: "Category",
    value:
      "The canonical category label, identical to Cookie Settings.",
  },
  {
    label: "Purpose",
    value:
      "The approved purpose summary from the Purpose Registry.",
  },
  {
    label: "Provider and party",
    value:
      "The approved provider name and whether it is first or third party.",
  },
  {
    label: "Domain and context",
    value:
      "The site, service or embedded context the record applies to.",
  },
  {
    label: "Duration",
    value:
      'The verified expiry rule. "Session" appears only when that is technically accurate.',
  },
  {
    label: "Activation and choice",
    value:
      "The approved activation behaviour. Your own choices never appear in this public table.",
  },
  {
    label: "Reviewed state",
    value:
      "Current, under review, or unknown. A stale record cannot sit here silently marked current.",
  },
];

const providerRows: TableRow[] = [
  {
    label: "First party",
    value:
      "Used only where the registry establishes the party and domain relationship.",
  },
  {
    label: "Third party",
    value:
      "Used only where the registry establishes that a provider owns or operates the technology.",
  },
  {
    label: "Provider privacy links",
    value:
      "Allowlisted and source-controlled. External destinations are marked as external.",
  },
  {
    label: "Subprocessor status",
    value:
      "A cookie provider is not automatically a subprocessor. The Subprocessors list is authoritative for that.",
  },
  {
    label: "Certifications and claims",
    value:
      "A provider's own privacy or security claim does not become a Zoiko Billing assurance.",
  },
  {
    label: "Embedded services",
    value:
      "The control boundary is explained from source. Third-party behaviour may change after you interact with embedded content.",
  },
];

const durationRows: TableRow[] = [
  {
    label: "Record-level truth",
    value:
      "Duration comes from the individual inventory record, not from a category-wide generalisation.",
  },
  {
    label: "Session",
    value:
      "Used only where the actual expiry behaviour matches the approved definition of a session.",
  },
  {
    label: "Persistent",
    value:
      "Used only with a verified persistence rule, with the exact duration shown where approved.",
  },
  {
    label: "Provider-controlled lifetime",
    value:
      "Where a third party controls the lifetime, only the approved current value is shown, and it is reviewed as a dependency.",
  },
  {
    label: "Clearing cookies yourself",
    value:
      "General browser behaviour is described only where approved. This policy cannot guarantee how your browser or device behaves.",
  },
  {
    label: "When durations change",
    value:
      "A technical change invalidates the affected public record until it is re-verified.",
  },
];

const contextRows: TableRow[] = [
  {
    label: "Public marketing site",
    value:
      "Described from the current inventory for that site only.",
  },
  {
    label: "Authenticated billing product",
    value:
      "Does not inherit marketing-site claims. Where behaviour differs, it carries its own scope label.",
  },
  {
    label: "Support and help centre",
    value:
      "Treated as its own context where support widgets or help technologies apply.",
  },
  {
    label: "Embedded media and content",
    value:
      "The provider boundary and activation trigger are explained from source.",
  },
  {
    label: "Regional differences",
    value:
      "Applicable consent behaviour is resolved from the approved legal source. One global rule is never inferred.",
  },
  {
    label: "Translations",
    value:
      "A translated summary must remain legally equivalent. Legal obligations are not machine-translated as final text.",
  },
];

const relatedRows: TableRow[] = [
  {
    label: "Terms of User",
    value:
      "Contractual terms for use of the service and site.",
    status: "Approved",
    statusType: "approved",
  },
  {
    label: "Privacy Policy",
    value:
      "Personal data processing, rights, retention and transfers.",
    status: "Approved",
    statusType: "approved",
  },
  {
    label: "Cookie Policy",
    value:
      "Cookies and similar technologies, and the route to your choices.",
    status: "This page",
    statusType: "this-page",
  },
  {
    label: "Acceptable Use Policy",
    value:
      "Responsible-use boundaries and reporting routes.",
    status: "Not yet published",
    statusType: "not-published",
  },
  {
    label: "Data Processing Addendum",
    value:
      "Contractual processing terms for customer data.",
    status: "Not yet published",
    statusType: "not-published",
  },
  {
    label: "Subprocessors",
    value:
      "The authoritative vendor list.",
    status: "Not yet published",
    statusType: "not-published",
  },
  {
    label: "Legal Notices",
    value:
      "Corporate and legal notices.",
    status: "Not yet published",
    statusType: "not-published",
  },
];

const questions = [
  "What cookies does Zoiko Billing use?",
  "Why are cookies used at all?",
  "How do I change my choices?",
  "Can I reject all cookies?",
  "Are analytics cookies used?",
  "Are advertising or marketing cookies used?",
  "How long do cookies stay on my device?",
  "Where do I learn how my personal data is used?",
];

const faqAnswers = [
  "The cookies and similar technologies used by Zoiko Billing are determined from the approved cookie inventory for the applicable website, application, or embedded context. Where the current inventory does not establish a specific cookie or technology, this policy does not assume or invent one.",

  "Cookies and similar technologies may be used to operate the service, maintain sessions, remember preferences, support approved measurement, or provide other documented functionality. The specific purpose depends on the individual technology and its approved inventory record.",

  "You can change your cookie choices through Cookie Settings where the applicable consent mechanism is available. Your choices are recorded only after the save operation succeeds. If saving fails, the settings flow should explain the issue and provide an approved retry or alternative method.",

  "Where optional cookie categories are available, you can reject those categories through Cookie Settings. Strictly necessary technologies may not be rejectable when they are required for the website or service to operate. The available choices depend on the applicable legal and technical requirements.",

  "Analytics cookies are used only where the approved inventory establishes that analytics or measurement technologies are deployed in the applicable context. The current inventory does not establish a specific list of analytics cookies, so this policy does not claim particular analytics providers or cookies.",

  "Advertising or marketing cookies are published only where the approved inventory establishes that these technologies are deployed in a covered context. The current source does not establish a specific list of advertising or marketing cookies, so no specific provider or cookie is claimed here.",

  "The duration of a cookie depends on the individual cookie or technology. Some may last only for a browser session, while others may remain for a defined period. The applicable duration must come from the verified inventory record rather than a general assumption.",

  "Your personal data is governed by the Privacy Policy. The Privacy Policy explains how personal data is collected, used, stored, shared, retained, and protected, together with the applicable privacy rights and related information.",
];


function StatusBadge({
  label,
  type = "not-established",
}: {
  label: string;
  type?: StatusType;
}) {
  const styles: Record<StatusType, string> = {
    approved: "border-[#20c6d9] text-[#20c6d9]",
    awaiting: "border-[#f28b2d] text-[#f28b2d]",
    "not-established": "border-[#f28b2d] text-[#f28b2d]",
    "not-published": "border-[#7890b2] text-[#7890b2]",
    "this-page": "border-[#f28b2d] text-[#f28b2d]",
    governance: "border-[#20c6d9] text-[#20c6d9]",
    prepared: "border-[#f28b2d] text-[#f28b2d]",
  };

  const dots: Record<StatusType, string> = {
    approved: "bg-[#20c6d9]",
    awaiting: "border border-[#f28b2d]",
    "not-established": "border border-[#f28b2d]",
    "not-published": "bg-[#7890b2]",
    "this-page": "border border-[#f28b2d]",
    governance: "bg-[#20c6d9]",
    prepared: "border border-[#f28b2d]",
  };

  return (
    <span
      className={`inline-flex max-w-full items-center gap-1.5 border px-2 py-0.5 text-[10px] font-semibold uppercase leading-5 tracking-wide sm:text-xs ${styles[type]}`}
    >
      <span
        className={`h-2.5 w-2.5 shrink-0 rounded-sm ${dots[type]}`}
      />
      <span>{label}</span>
    </span>
  );
}

function ResponsiveTable({
  eyebrow,
  columns,
  rows,
}: {
  eyebrow: string;
  columns: [string, string, string?];
  rows: TableRow[];
}) {
  return (
    <div className="w-full">
      <div className="mb-2 text-xs font-normal uppercase leading-5 tracking-wide text-[#7890b2]">
        {eyebrow}
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <div
          className={`grid ${
            columns[2]
              ? "grid-cols-[minmax(150px,0.8fr)_minmax(0,2fr)_minmax(150px,0.8fr)]"
              : "grid-cols-[minmax(150px,0.8fr)_minmax(0,2fr)]"
          } bg-[#fafbfc]`}
        >
          <div className="border-b border-[#cfd8e5] px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wide text-[#7890b2]">
            {columns[0]}
          </div>

          <div className="border-b border-[#cfd8e5] px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wide text-[#7890b2]">
            {columns[1]}
          </div>

          {columns[2] && (
            <div className="border-b border-[#cfd8e5] px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wide text-[#7890b2]">
              {columns[2]}
            </div>
          )}
        </div>

        {rows.map((row, index) => (
          <div
            key={row.label}
            className={`grid ${
              columns[2]
                ? "grid-cols-[minmax(150px,0.8fr)_minmax(0,2fr)_minmax(150px,0.8fr)]"
                : "grid-cols-[minmax(150px,0.8fr)_minmax(0,2fr)]"
            } ${
              index !== rows.length - 1
                ? "border-b border-[#e5eaf0]"
                : ""
            }`}
          >
            <div className="px-3.5 py-3 text-sm font-semibold leading-6 text-[#091127]">
              {row.label}
            </div>

            <div className="px-3.5 py-3 text-sm leading-6 text-[#091127]">
              {row.value}
            </div>

            {columns[2] && (
              <div className="flex items-start px-3.5 py-3">
                {row.status && (
                  <StatusBadge
                    label={row.status}
                    type={row.statusType}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="flex flex-col md:hidden">
        {rows.map((row, index) => (
          <div
            key={row.label}
            className={`flex flex-col gap-3 py-4 ${
              index !== rows.length - 1
                ? "border-b border-[#e5eaf0]"
                : ""
            }`}
          >
            <div>
              <p className="!m-0 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                {columns[0]}
              </p>

              <p className="!m-0 mt-1 text-sm font-semibold leading-6 text-[#091127]">
                {row.label}
              </p>
            </div>

            <div>
              <p className="!m-0 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                {columns[1]}
              </p>

              <p className="!m-0 mt-1 text-sm leading-6 text-[#091127]">
                {row.value}
              </p>
            </div>

            {columns[2] && row.status && (
              <div>
                <p className="!m-0 mb-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                  {columns[2]}
                </p>

                <StatusBadge
                  label={row.status}
                  type={row.statusType}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function PolicySection({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 bg-white px-5 py-8 outline outline-1 outline-offset-[-1px] outline-[#dfe5ee] sm:px-6 md:px-8"
    >
      <div className="flex w-full flex-col items-start gap-1.5">
        <h2 className="!m-0 w-full text-2xl font-medium leading-8 tracking-[-0.02em] text-[#091127] sm:text-3xl">
          {title}
        </h2>

        {description && (
          <div className="w-full max-w-[626px] border-b border-[#dfe5ee] pb-4 pt-1">
            <p className="!m-0 text-sm leading-6 text-[#5d7192]">
              {description}
            </p>
          </div>
        )}

        <div className="w-full pt-3">{children}</div>
      </div>
    </section>
  );
}

function Callout({
  title,
  children,
  tone = "cyan",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "cyan" | "orange";
}) {
  return (
    <div
      className={`mt-4 flex w-full flex-col items-start gap-1 border-l-[3px] px-5 py-4 ${
        tone === "cyan"
          ? "border-[#20c6d9] bg-[#f3f7fa]"
          : "border-[#f28b2d] bg-[#f8f7f5]"
      }`}
    >
      <div
        className={`w-full text-xs font-bold uppercase leading-5 tracking-wide ${
          tone === "cyan"
            ? "text-[#20c6d9]"
            : "text-[#f28b2d]"
        }`}
      >
        {title}
      </div>

      <div className="text-base leading-6 text-[#091127]">
        {children}
      </div>
    </div>
  );
}

export default function Cookie() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(
    null
  );

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
          sm:py-12

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
            items-start
            gap-8

            lg:flex-row
            lg:gap-10
          "
        >
          {/* DESKTOP SIDE NAVIGATION */}
          <aside className="hidden w-60 shrink-0 lg:block">
            <div className="sticky top-24 flex w-60 flex-col items-start gap-2.5">
              <div className="w-full text-xs font-bold uppercase leading-5 tracking-wider text-[#7890b2]">
                On this page
              </div>

              <nav className="w-full border-l border-[#dfe5ee] pb-1.5">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block w-full border-l-[3px] border-transparent px-3 py-1.5 text-sm leading-6 text-[#5d7192] transition-colors hover:border-[#20c6d9] hover:text-[#091127]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* MOBILE NAVIGATION */}
          <div className="w-full lg:hidden">
            <div className="overflow-x-auto rounded-xl border border-[#dfe5ee] bg-white">
              <div className="flex min-w-max">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="border-b-[3px] border-transparent px-4 py-3 text-xs font-semibold text-[#5d7192]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <main className="flex w-full min-w-0 flex-col gap-6 lg:max-w-[992px]">
            {/* POLICY SUMMARY */}
            <PolicySection
              id="policy-summary"
              title="Policy summary"
              description="A short orientation to what this policy covers and where each decision is actually made."
            >
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <StatusBadge
                  label="Plain language, not the legal text"
                  type="not-established"
                />
              </div>

              <div className="max-w-[626px] space-y-3 text-base leading-7 text-[#091127]">
                <p className="!m-0">
                  This policy describes the cookies and similar technologies
                  used in the Zoiko Billing contexts named in the approved
                  scope record, why each one is used, who provides it, how long
                  it lasts, and which choices are available to you. Every
                  named technology comes from the deployed inventory and is
                  verified before it is published here.
                </p>

                <p className="!m-0">
                  Where the current inventory does not establish a technology,
                  a provider, a duration or a signal behaviour, this page says
                  that the source does not establish it. It does not fill the
                  gap with what comparable providers typically do, and it does
                  not claim the absence of tracking.
                </p>
              </div>

              <Callout title="Authority boundary">
                This policy owns cookie and tracker detail. Cookie Settings
                owns the choice itself. The Privacy Policy owns broader
                personal-data processing, your rights, retention and transfers.
                The Terms of User own contractual use. The Data Processing
                Addendum and Subprocessors list own contractual processing and
                the vendor list where applicable.
              </Callout>
            </PolicySection>

            {/* SCOPE */}
            <PolicySection
              id="scope-technologies"
              title="Scope and technologies covered"
              description="Coverage is stated per context and per technology type. Nothing is assumed to apply everywhere."
            >
              <ResponsiveTable
                eyebrow="What this policy covers"
                columns={["Item", "Coverage", "Source state"]}
                rows={scopeRows}
              />

              <p className="!m-0 pt-5 text-base leading-7 text-[#091127]">
                Exclusions appear only where an approved source states them. A
                technology being absent from this page is not proof that it
                exists nowhere in another Zoiko context.
              </p>
            </PolicySection>

            {/* CATEGORIES */}
            <PolicySection
              id="cookie-categories"
              title="Cookie and tracker categories"
              description="Category labels, descriptions and order match Cookie Settings exactly. A mismatch between the two blocks release."
            >
              <div className="flex w-full flex-col gap-4 rounded-xl bg-[#dfe5ee] p-4">
                <div className="rounded-lg bg-white p-5 sm:p-6">
                  <h3 className="!m-0 text-base font-semibold leading-7 text-[#091127]">
                    Strictly necessary
                  </h3>

                  <p className="!m-0 mt-3 text-base leading-6 text-[#4d607e]">
                    Technologies required for the service to work, such as
                    keeping you signed in or securing a session.
                  </p>

                  <p className="!m-0 mt-4 text-sm leading-6 text-[#5d7192]">
                    Choice: unavailable only where a legal and technical source
                    establishes that it is required.
                  </p>
                </div>

                <div className="rounded-lg bg-white p-5 sm:p-6">
                  <h3 className="!m-0 text-base font-semibold leading-7 text-[#091127]">
                    Functional and preference
                  </h3>

                  <p className="!m-0 mt-3 text-base leading-6 text-[#4d607e]">
                    Technologies that remember choices you make, such as
                    language or interface preferences.
                  </p>

                  <p className="!m-0 mt-4 text-sm leading-6 text-[#5d7192]">
                    Choice: available where this category is deployed in the
                    applicable context.
                  </p>
                </div>

                <div className="rounded-lg bg-white p-5 sm:p-6">
                  <h3 className="!m-0 text-base font-semibold leading-7 text-[#091127]">
                    Analytics and measurement
                  </h3>

                  <p className="!m-0 mt-3 text-base leading-6 text-[#4d607e]">
                    Technologies used to understand how a site or service is
                    used, for the approved measurement purposes only.
                  </p>

                  <p className="!m-0 mt-4 text-sm leading-6 text-[#5d7192]">
                    Choice and activation follow the approved consent rule.
                    This category is not assumed to be anonymous or always
                    active.
                  </p>
                </div>

                <div className="rounded-lg bg-white p-5 sm:p-6">
                  <h3 className="!m-0 text-base font-semibold leading-7 text-[#091127]">
                    Advertising, marketing and social
                  </h3>

                  <p className="!m-0 mt-3 text-base leading-6 text-[#4d607e]">
                    This category publishes only if the current inventory
                    establishes that such technologies are deployed in a
                    covered context.
                  </p>

                  <p className="!m-0 mt-4 text-sm leading-6 text-[#5d7192]">
                    It is shown here as part of the taxonomy. No such technology
                    is claimed or denied.
                  </p>
                </div>
              </div>

              <Callout title="How to read a category with no records" tone="orange">
                A category listed without records means the taxonomy exists but
                the inventory has not been published for it. It is neither a
                claim that these technologies are in use nor an assurance that
                they are not.
              </Callout>
            </PolicySection>

            {/* COOKIE INVENTORY */}
            <PolicySection
              id="cookie-inventory"
              title="Cookie and tracker inventory"
              description="Every published record is exported from the deployed context, verified by engineering, and dated. Filtering never changes the legal scope of the policy."
            >
              <div className="border border-[#cfd8e5] bg-[#fafbfc] px-5 py-8">
                <h3 className="!m-0 text-base font-semibold leading-7 text-[#091127]">
                  No current approved records for this context
                </h3>

                <p className="!m-0 mt-3 max-w-[575px] text-base leading-6 text-[#4d607e]">
                  The verified inventory has not been published yet, so no
                  cookie, tracker, provider or duration is listed. Search,
                  category and provider filters appear here once records exist.
                  Until then, this section stays empty rather than showing
                  sample data.
                </p>

                <p className="!m-0 mt-2 max-w-[575px] text-base leading-6 text-[#4d607e]">
                  For questions about a specific technology in the meantime,
                  use the approved privacy contact route in{" "}
                  <a
                    href="#changes-history"
                    className="underline"
                  >
                    Changes and contact
                  </a>
                  .
                </p>
              </div>

              <h3 className="!m-0 pt-5 text-base font-semibold leading-7 text-[#091127]">
                What each published record will carry
              </h3>

              <div className="pt-3">
                <ResponsiveTable
                  eyebrow="Inventory record contract"
                  columns={["Field", "Rule"]}
                  rows={inventoryRows}
                />
              </div>
            </PolicySection>

            {/* FIRST / THIRD PARTY */}
            <PolicySection
              id="first-third-party"
              title="First party, third party and providers"
              description="Who sets a technology and who operates it are separate facts, and neither transfers assurance from one company to another."
            >
              <ResponsiveTable
                eyebrow="Provider relationships"
                columns={["Topic", "Position"]}
                rows={providerRows}
              />
            </PolicySection>

            {/* DURATION */}
            <PolicySection
              id="duration-expiry"
              title="Duration, persistence and expiry"
              description="Lifetime is a per-record fact. There is no single lifespan that applies to everything."
            >
              <ResponsiveTable
                eyebrow="How duration is stated"
                columns={["Rule", "What it means here"]}
                rows={durationRows}
              />
            </PolicySection>

            {/* CONSENT */}
            <PolicySection
              id="consent-settings"
              title="Consent and Cookie Settings"
              description="Settings is where a choice is made and saved. This section explains what happens when you use it, including when saving fails."
            >
              <div className="overflow-hidden border border-[#091127]">
                <div className="flex flex-wrap items-center gap-4 bg-[#091127] px-5 py-3.5">
                  <div className="text-base font-semibold leading-6 text-white">
                    Cookie Settings
                  </div>

                  <StatusBadge
                    label="Route unresolved"
                    type="awaiting"
                  />
                </div>

                <div className="flex flex-col p-5">
                  <div className="border-b border-[#e5eaf0] py-4">
                    <h3 className="!m-0 text-xs font-bold uppercase leading-5 tracking-wide text-[#7890b2]">
                      Available choices
                    </h3>

                    <p className="!m-0 mt-1 text-base leading-6 text-[#091127]">
                      Determined by the approved consent rule for your context.
                      Optional categories are never preselected to increase
                      acceptance.
                    </p>
                  </div>

                  <div className="border-b border-[#e5eaf0] py-4">
                    <h3 className="!m-0 text-xs font-bold uppercase leading-5 tracking-wide text-[#7890b2]">
                      Equal treatment
                    </h3>

                    <p className="!m-0 mt-1 text-base leading-6 text-[#091127]">
                      Accept, reject, manage and save controls carry clear
                      labels and equal visual weight. No option is hidden or
                      made harder to reach.
                    </p>
                  </div>

                  <div className="border-b border-[#e5eaf0] py-4">
                    <h3 className="!m-0 text-xs font-bold uppercase leading-5 tracking-wide text-[#7890b2]">
                      Changing your mind
                    </h3>

                    <p className="!m-0 mt-1 text-base leading-6 text-[#091127]">
                      Settings can be reopened at any time from the footer
                      route. No account, support ticket or form is required
                      first.
                    </p>
                  </div>

                  <div className="border-b border-[#e5eaf0] py-4">
                    <h3 className="!m-0 text-xs font-bold uppercase leading-5 tracking-wide text-[#7890b2]">
                      Saving
                    </h3>

                    <p className="!m-0 mt-1 text-base leading-6 text-[#091127]">
                      A choice is confirmed in text only after the save
                      actually succeeds. Nothing is reported as saved before
                      it is.
                    </p>
                  </div>

                  <div className="border-b border-[#e5eaf0] py-4">
                    <h3 className="!m-0 text-xs font-bold uppercase leading-5 tracking-wide text-[#7890b2]">
                      If saving fails
                    </h3>

                    <p className="!m-0 mt-1 text-base leading-6 text-[#091127]">
                      The panel stays open, explains what went wrong, and
                      offers a retry plus an approved alternative. Your
                      previous choice is never reverted silently.
                    </p>
                  </div>

                  <div className="py-4">
                    <h3 className="!m-0 text-xs font-bold uppercase leading-5 tracking-wide text-[#7890b2]">
                      Identity
                    </h3>

                    <p className="!m-0 mt-1 text-base leading-6 text-[#091127]">
                      You are not asked to sign in or identify yourself unless
                      the approved preference mechanism genuinely requires it.
                    </p>
                  </div>
                </div>
              </div>

              <Callout title="If settings cannot load" tone="orange">
                Where the panel needs JavaScript and it is unavailable, this
                page states the limitation and gives the approved alternative
                method for recording a choice. It will not display a saved
                state that did not happen.
              </Callout>
            </PolicySection>

            {/* BROWSER */}
            <PolicySection
              id="browser-signals"
              title="Browser, device and privacy signals"
              description="Signal handling is answered only from an approved legal and technical source. An unanswered question is not a yes and not a no."
            >
              <div className="flex w-full flex-col gap-5">
                <div>
                  <h3 className="!m-0 text-base font-semibold leading-6 text-[#091127]">
                    Can I block or delete cookies in my browser?
                  </h3>

                  <p className="!m-0 mt-2 max-w-[575px] text-base leading-6 text-[#4d607e]">
                    Yes, browsers provide their own controls. Blocking may
                    affect how parts of the service work, and this policy
                    cannot control browser behaviour.
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="!m-0 text-base font-semibold leading-6 text-[#091127]">
                      Is Global Privacy Control honoured?
                    </h3>

                    <StatusBadge
                      label="Not established"
                      type="not-established"
                    />
                  </div>

                  <p className="!m-0 mt-2 max-w-[575px] text-base leading-6 text-[#4d607e]">
                    The current approved source does not establish how GPC is
                    handled or in which contexts.
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="!m-0 text-base font-semibold leading-6 text-[#091127]">
                      Is Do Not Track honoured?
                    </h3>

                    <StatusBadge
                      label="Not established"
                      type="not-established"
                    />
                  </div>

                  <p className="!m-0 mt-2 max-w-[575px] text-base leading-6 text-[#4d607e]">
                    The current approved source does not establish DNT
                    handling. No inference is made from the absence of a
                    statement.
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="!m-0 text-base font-semibold leading-6 text-[#091127]">
                      Do mobile or device settings affect tracking?
                    </h3>

                    <StatusBadge
                      label="Not established"
                      type="not-established"
                    />
                  </div>

                  <p className="!m-0 mt-2 max-w-[575px] text-base leading-6 text-[#4d607e]">
                    The current source does not establish one universal rule
                    for all mobile devices and device settings.
                  </p>
                </div>

                <div>
                  <h3 className="!m-0 text-base font-semibold leading-6 text-[#091127]">
                    What if JavaScript is disabled?
                  </h3>

                  <p className="!m-0 mt-2 max-w-[575px] text-base leading-6 text-[#4d607e]">
                    This page remains readable. If Cookie Settings requires
                    JavaScript, the limitation and approved alternative method
                    for recording a choice are provided.
                  </p>
                </div>

                <div>
                  <h3 className="!m-0 text-base font-semibold leading-6 text-[#091127]">
                    What if my browser blocks storage?
                  </h3>

                  <p className="!m-0 mt-2 max-w-[575px] text-base leading-6 text-[#4d607e]">
                    A preference is not treated as saved unless the save
                    operation succeeds. Where the failure can be detected, the
                    settings flow should explain the issue and provide a retry
                    or approved alternative.
                  </p>
                </div>
              </div>
            </PolicySection>

            {/* CONTEXTS */}
            <PolicySection
              id="contexts-regions"
              title="Contexts, embedded services and regions"
              description="Different surfaces carry different technologies. Merging them into one statement would make the policy inaccurate for most readers."
            >
              <ResponsiveTable
                eyebrow="Context handling"
                columns={["Context", "Treatment"]}
                rows={contextRows}
              />
            </PolicySection>

            {/* CHANGES */}
            <PolicySection
              id="changes-history"
              title="Changes, version history and contact"
              description="One version is current at a time. Superseded versions stay reachable where required but never compete with the current one."
            >
              <ResponsiveTable
                eyebrow="Version record"
                columns={["Version", "State", "Effective"]}
                rows={[
                  {
                    label: "v1.0",
                    value:
                      "Prepared for approval — Consolidated wireframe and implementation specification. Not published as current policy.",
                    status: "Prepared for approval",
                    statusType: "prepared",
                  },
                  {
                    label: "Earlier versions",
                    value:
                      "Superseded versions carry a banner and a link to the current policy.",
                    status: "None recorded",
                    statusType: "not-published",
                  },
                ]}
              />

              <p className="!m-0 max-w-[626px] pt-5 text-base leading-7 text-[#091127]">
                Where a change to the policy or the inventory requires a new
                choice or resets existing preferences, that is stated only
                once Legal and Engineering have confirmed it. Contact for
                cookie and privacy questions uses the approved privacy route,
                which publishes with the policy.
              </p>
            </PolicySection>

            {/* QUESTIONS */}
            <PolicySection
              id="questions"
              title="Questions"
              description="Each answer resolves to the current inventory for the applicable context, or says plainly that the source does not establish one."
            >
              <div className="flex w-full flex-col">
                {questions.map((question, index) => {
                  const isOpen = activeQuestion === index;

                  return (
                    <div
                      key={question}
                      className="border-b border-[#dfe5ee] last:border-b-0"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setActiveQuestion(
                            isOpen ? null : index
                          )
                        }
                        className="flex min-h-11 w-full items-center gap-3 py-4 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="flex h-8 w-4 shrink-0 items-center justify-center text-xl font-medium leading-8 text-[#5d7192]">
                          {isOpen ? "−" : "+"}
                        </span>

                        <span className="text-base font-semibold leading-6 text-[#091127]">
                          {question}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="pb-5 pl-7 pr-3">
                          <p className="!m-0 text-base leading-7 text-[#5d7192]">
                            {faqAnswers[index]}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </PolicySection>

            {/* RELATED DOCUMENTS */}
            <PolicySection
              id="related-documents"
              title="Related legal documents"
              description="The Legal Corporate sequence, with the current state of each destination."
            >
              <ResponsiveTable
                eyebrow="Legal Corporate destinations"
                columns={["Document", "Governs", "State"]}
                rows={relatedRows}
              />
            </PolicySection>
          </main>
        </div>
      </div>
    </section>
  );
}