"use client";

import { useState } from "react";

const sections = [
  "Status and applicability",
  "Who these terms apply to",
  "Using Zoiko Billing",
  "Acceptable use",
  "Plans, orders and payment",
  "Content, data and IP",
  "Privacy and data processing",
  "Changes, suspension, termination",
  "Warranties, liability, indemnity",
  "Disputes, law and notices",
];

const aroundTerms = [
  "Updates and version history",
  "Related legal documents",
  "Questions",
];

const faqItems = [
  {
    question: "What are the Zoiko Billing Terms of User?",
    answer:
      "These terms govern use of the Zoiko Billing service. The operative version and its applicability are identified on this page.",
  },
  {
    question: "Which version is current?",
    answer:
      "The current version is the version identified as current in the document status section. A future-effective or superseded version is not presented as the governing version.",
  },
  {
    question: "Do these terms apply to every customer?",
    answer:
      "Applicability depends on the product, service, customer, entity, territory and agreement qualifiers published by the applicable source. Unknown scope is not assumed to mean all customers.",
  },
  {
    question: "Where is the Privacy Policy or the Acceptable Use Policy?",
    answer:
      "The Privacy Policy owns personal-data disclosures and rights. The Acceptable Use Policy owns prohibited use and reporting routes. Related documents are listed below.",
  },
  {
    question: "Can I cancel or get a refund?",
    answer:
      "No general cancellation, renewal, refund or tax rule is stated here. Those terms may depend on the applicable plan, order form or commercial document.",
  },
  {
    question: "What law governs these terms?",
    answer:
      "No governing law or venue is inferred from a company address, domain registration or apparent operating location. The applicable rule will be published from the approved legal record.",
  },
  {
    question: "How do I send a legal notice?",
    answer:
      "The formal notice method and address must come from the approved record. Until that information is published, a general support or sales channel is not treated as a substitute.",
  },
  {
    question: "Can I see an older version?",
    answer:
      "Older versions may be retained according to the applicable archive policy. Superseded versions should identify their effective period and link to the current terms.",
  },
];

const relatedDocuments = [
  {
    document: "Terms of User",
    authority: "General terms governing use of the service.",
    state: "This page",
    current: true,
  },
  {
    document: "Privacy Policy",
    authority: "Personal data handling, rights and choices.",
    state: "Not yet published",
  },
  {
    document: "Cookie Policy",
    authority: "Cookies, trackers and consent settings.",
    state: "Not yet published",
  },
  {
    document: "Acceptable Use Policy",
    authority: "Prohibited and restricted use, and reporting routes.",
    state: "Not yet published",
  },
  {
    document: "Data Processing Addendum",
    authority: "Contractual data-processing terms and annexes.",
    state: "Not yet published",
  },
  {
    document: "Subprocessors",
    authority: "The current provider registry and change process.",
    state: "Not yet published",
  },
  {
    document: "Legal Notices",
    authority: "Statutory, corporate and entity notices.",
    state: "Not yet published",
  },
  {
    document: "Sitemap",
    authority: "Navigation only. Not an authority for any obligation.",
    state: "Not yet published",
  },
];

function StatusBadge({
  children,
  type = "pending",
}: {
  children: React.ReactNode;
  type?: "pending" | "resolved" | "neutral";
}) {
  const styles = {
    pending:
      "border-[#f08a24] text-[#f08a24] before:border-[#f08a24]",
    resolved:
      "border-[#16b8b0] text-[#16b8b0] before:bg-[#16b8b0]",
    neutral:
      "border-[#7890b2] text-[#7890b2] before:bg-[#7890b2]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2 py-0.5 text-[10px] font-semibold uppercase leading-5 tracking-[0.08em] ${styles[type]}`}
    >
      <span
        className={`h-2.5 w-2.5 rounded-sm border ${
          type === "pending"
            ? "border-current"
            : "border-transparent"
        } before:content-['']`}
      />
      {children}
    </span>
  );
}

function SectionHeader({
  number,
  title,
  status,
  statusType = "pending",
}: {
  number?: string;
  title: string;
  status?: string;
  statusType?: "pending" | "resolved";
}) {
  return (
    <div className="flex w-full flex-col items-start gap-1">
      {number && (
        <span className="text-xs font-bold uppercase leading-5 tracking-[0.08em] text-[#7890b2]">
          {number}
        </span>
      )}

      <div className="flex w-full flex-wrap items-center gap-3">
        <h2 className="m-0 font-sans text-[28px] font-medium leading-9 tracking-[-0.02em] text-[#091127] sm:text-[30px]">
          {title}
        </h2>

        {status && (
          <StatusBadge type={statusType}>
            {status}
          </StatusBadge>
        )}
      </div>
    </div>
  );
}

function BackToTop() {
  return (
    <a
      href="#terms-top"
      className="inline-flex min-h-11 items-center pt-3 text-sm font-semibold leading-6 text-[#5d7192] transition-colors hover:text-[#091127]"
    >
      ↑ Back to top
    </a>
  );
}

function NoticeBox({
  children,
  accent = "blue",
}: {
  children: React.ReactNode;
  accent?: "blue" | "orange";
}) {
  return (
    <div
      className={`w-full border-l-[3px] px-5 py-4 ${
        accent === "orange"
          ? "border-[#f08a24] bg-[#fff9f3]"
          : "border-[#16b8b0] bg-[#f5fbfb]"
      }`}
    >
      {children}
    </div>
  );
}

function PendingBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full border border-[#dfe5ee] bg-[#fafbfc] px-5 py-6">
      <div className="max-w-[650px] font-sans text-base leading-7 text-[#5d7192]">
        {children}
      </div>
    </div>
  );
}

function SectionCard({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border border-[#dfe5ee] bg-white p-6 sm:p-8"
    >
      {children}
    </section>
  );
}

export default function TermsContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main
      id="terms-top"
      className="w-full bg-[#f7f8fa]"
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-start px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-16 lg:px-14 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1240px] items-start gap-8 lg:gap-10">

          {/* LEFT NAVIGATION */}
          <aside className="sticky top-6 hidden w-60 shrink-0 lg:block">
            <div className="flex flex-col items-start gap-2.5">

              <div className="w-full">
                <p className="m-0 text-xs font-bold uppercase leading-5 tracking-[0.12em] text-[#7890b2]">
                  The terms
                </p>
              </div>

              <nav className="w-full border-l border-[#dfe5ee]">
                {sections.map((section, index) => (
                  <a
                    key={section}
                    href={`#section-${index}`}
                    className="block border-l-[3px] border-transparent px-4 py-2 text-sm leading-6 text-[#5d7192] transition-colors hover:border-[#16b8b0] hover:bg-white hover:text-[#091127]"
                  >
                    {section}
                  </a>
                ))}
              </nav>

              <div className="w-full pt-3">
                <p className="m-0 text-xs font-bold uppercase leading-5 tracking-[0.12em] text-[#7890b2]">
                  Around the terms
                </p>
              </div>

              <nav className="w-full border-l border-[#dfe5ee]">
                {aroundTerms.map((item, index) => (
                  <a
                    key={item}
                    href={
                      index === 0
                        ? "#version-history"
                        : index === 1
                        ? "#related-documents"
                        : "#questions"
                    }
                    className={`block border-l-[3px] px-3 py-2 text-sm leading-6 transition-colors ${
                      index === 2
                        ? "border-[#16b8b0] bg-white font-semibold text-[#091127]"
                        : "border-transparent text-[#5d7192] hover:border-[#16b8b0] hover:bg-white hover:text-[#091127]"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </nav>

            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="flex min-w-0 flex-1 flex-col gap-6">

            {/* MOBILE CONTENT NAV */}
            <div className="block border border-[#dfe5ee] bg-white p-5 lg:hidden">
              <p className="m-0 mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                On this page
              </p>

              <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {sections.map((section, index) => (
                  <a
                    key={section}
                    href={`#section-${index}`}
                    className="rounded px-2 py-1.5 text-sm leading-6 text-[#5d7192] hover:bg-[#f7f8fa] hover:text-[#091127]"
                  >
                    {section}
                  </a>
                ))}
              </div>
            </div>

            {/* SECTION 0 */}
            <SectionCard id="section-0">
              <SectionHeader
                title="Document status and applicability"
                status="Operative text pending"
              />

              <div className="mt-5 max-w-[700px] border-b border-[#dfe5ee] pb-5">
                <p className="m-0 font-sans text-sm leading-6 text-[#5d7192]">
                  Five possible states. Only one version is current at a
                  time, and a version that is not current says so before you
                  read a word of it.
                </p>
              </div>

              <div className="mt-6 overflow-hidden border border-[#dfe5ee]">
                {[
                  {
                    title: "Current",
                    text: "In force now for the stated scope, with its effective date shown. This is the version that governs.",
                  },
                  {
                    title: "Future-effective",
                    text: "Approved and published in advance, labelled with its effective date, and linked to the version that governs until then.",
                  },
                  {
                    title: "Superseded",
                    text: "Carries a permanent, non-dismissible notice that it is no longer current, its effective period, and a link to the current version.",
                  },
                  {
                    title: "Withdrawn",
                    text: "Removed from effect. Shown only where the archive policy requires it, and never presented as governing.",
                  },
                  {
                    title: "Unavailable",
                    text: "The registry could not be reached. Cached text is not served as current; the page explains the problem and gives the legal contact route.",
                  },
                  {
                    title: "Applicability",
                    text: "Product, service, customer, entity, territory and agreement qualifiers publish only where the source defines them. Unknown scope never defaults to “all customers”.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`grid gap-1 bg-white px-4 py-4 sm:grid-cols-[180px_1fr] sm:gap-6 ${
                      index !== 5
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold uppercase leading-5 tracking-[0.08em] text-[#091127]">
                        {item.title}
                      </span>
                    </div>

                    <p className="m-0 font-sans text-sm leading-6 text-[#5d7192]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <NoticeBox>
                  <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-[#16a8a1]">
                    Authority boundary
                  </p>

                  <p className="m-0 mt-1 font-sans text-base leading-7 text-[#091127]">
                    These terms govern use of the service. The Privacy Policy
                    owns personal-data disclosures and rights, the Cookie
                    Policy owns tracking and consent, the Acceptable Use
                    Policy owns prohibited use, the Data Processing Addendum
                    owns contractual processing, and the Subprocessors page
                    owns the provider registry. Each is linked below and none
                    is duplicated here.
                  </p>
                </NoticeBox>
              </div>
            </SectionCard>

            {/* SECTION 1 */}
            <SectionCard id="section-1">
              <SectionHeader
                number="Section 1"
                title="Who these terms apply to"
                status="Awaiting Legal"
              />

              <div className="mt-5 max-w-[700px] border-b border-[#dfe5ee] pb-5">
                <p className="m-0 font-sans text-sm leading-6 text-[#5d7192]">
                  Parties, eligibility, definitions and the precedence between
                  this document and any other agreement.
                </p>
              </div>

              <div className="mt-6">
                <PendingBox>
                  <p className="m-0">
                    The operative clauses for this section have not been
                    supplied, so none are shown. Publishing plausible wording
                    here would create obligations nobody approved.
                  </p>

                  <p className="m-0 mt-4">
                    When published, this section will carry the approved
                    parties and contracting entity, eligibility conditions,
                    defined terms, and the precedence rule where one exists.
                    No age threshold, territory, account type or order of
                    precedence is assumed from convention.
                  </p>
                </PendingBox>
              </div>

              <BackToTop />
            </SectionCard>

            {/* SECTION 2 */}
            <SectionCard id="section-2">
              <SectionHeader
                number="Section 2"
                title="Using Zoiko Billing"
                status="Awaiting Legal"
              />

              <div className="mt-5 max-w-[700px] border-b border-[#dfe5ee] pb-5">
                <p className="m-0 font-sans text-sm leading-6 text-[#5d7192]">
                  Accounts, access, user responsibilities and service-use
                  clauses.
                </p>
              </div>

              <div className="mt-6">
                <PendingBox>
                  Awaiting the approved clause package. Where a clause refers
                  to how the product behaves, that behaviour is taken from
                  approved product documentation rather than described from
                  the interface.
                </PendingBox>
              </div>

              <BackToTop />
            </SectionCard>

            {/* SECTION 3 */}
            <SectionCard id="section-3">
              <SectionHeader
                number="Section 3"
                title="Acceptable use"
                status="Authority resolved"
                statusType="resolved"
              />

              <div className="mt-5 max-w-[700px] border-b border-[#dfe5ee] pb-5">
                <p className="m-0 font-sans text-sm leading-6 text-[#5d7192]">
                  A short relationship statement, plus the approved
                  incorporation wording where Legal supplies one.
                </p>
              </div>

              <div className="mt-5 max-w-[700px]">
                <p className="m-0 font-sans text-base leading-7 text-[#091127]">
                  The Acceptable Use Policy owns the prohibited-use categories,
                  the enforcement model and the reporting routes. This section
                  will state the relationship between the two documents and
                  nothing more, so that the two cannot drift apart or
                  contradict each other.
                </p>
              </div>

              <div className="mt-6">
                <PendingBox>
                  The exact incorporation-by-reference wording is awaiting
                  Legal. No summary of prohibited conduct appears here in the
                  meantime, because a shortened list reads as the whole
                  standard.
                </PendingBox>
              </div>
            </SectionCard>

            {/* SECTION 4 */}
            <SectionCard id="section-4">
              <SectionHeader
                number="Section 4"
                title="Plans, orders, fees and payment"
                status="Awaiting Legal"
              />

              <div className="mt-5 max-w-[700px] border-b border-[#dfe5ee] pb-5">
                <p className="m-0 font-sans text-sm leading-6 text-[#5d7192]">
                  The relationship between these terms and the commercial
                  documents that set price, term and renewal.
                </p>
              </div>

              <div className="mt-6">
                <PendingBox>
                  <p className="m-0">
                    No renewal, cancellation, refund or tax rule is stated.
                    These vary by plan and order form, and inventing a general
                    rule would misinform exactly the customers who need it to
                    be right.
                  </p>

                  <p className="m-0 mt-4">
                    Where an order form, pricing page or billing policy is the
                    operative authority for a commercial specific, this
                    section will name it rather than restate its contents.
                  </p>
                </PendingBox>
              </div>
            </SectionCard>

            {/* SECTION 5 */}
            <SectionCard id="section-5">
              <SectionHeader
                number="Section 5"
                title="Content, data and intellectual property"
                status="Awaiting Legal"
              />

              <div className="mt-5 max-w-[700px] border-b border-[#dfe5ee] pb-5">
                <p className="m-0 font-sans text-sm leading-6 text-[#5d7192]">
                  Ownership, licences, customer content, feedback and
                  intellectual-property clauses.
                </p>
              </div>

              <div className="mt-6">
                <PendingBox>
                  <p className="m-0">
                    Awaiting the approved clause package. Ownership and
                    licence grants are reproduced exactly when they arrive,
                    since a paraphrase of a licence grant is a different
                    licence.
                  </p>

                  <p className="m-0 mt-4">
                    Data-processing obligations are not covered here. They
                    belong to the Privacy Policy and the Data Processing
                    Addendum, and the two subjects are kept apart deliberately.
                  </p>
                </PendingBox>
              </div>
            </SectionCard>

            {/* SECTION 6 */}
            <SectionCard id="section-6">
              <SectionHeader
                number="Section 6"
                title="Privacy, cookies and data processing"
                status="Authority resolved"
                statusType="resolved"
              />

              <div className="mt-5 max-w-[700px] border-b border-[#dfe5ee] pb-5">
                <p className="m-0 font-sans text-sm leading-6 text-[#5d7192]">
                  A map of which document answers which question, rather than a
                  second privacy notice.
                </p>
              </div>

              <div className="mt-6">
                <p className="m-0 mb-3 text-xs font-bold uppercase tracking-[0.08em] text-[#7890b2]">
                  Where each question belongs
                </p>

                <div className="overflow-x-auto border border-[#dfe5ee]">
                  <div className="min-w-[650px]">

                    <div className="grid grid-cols-[42%_58%] bg-[#fafbfc]">
                      <div className="border-b border-[#dfe5ee] px-4 py-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#7890b2]">
                          Question
                        </span>
                      </div>

                      <div className="border-b border-[#dfe5ee] px-4 py-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#7890b2]">
                          Authority
                        </span>
                      </div>
                    </div>

                    {[
                      [
                        "How is personal data handled, and what rights do I have?",
                        "Privacy Policy",
                      ],
                      [
                        "What cookies are used, and how do I change my choices?",
                        "Cookie Policy and its settings",
                      ],
                      [
                        "What are the contractual processing terms?",
                        "Data Processing Addendum",
                      ],
                      [
                        "Which providers are involved in processing?",
                        "Subprocessors registry",
                      ],
                    ].map(([question, authority], index) => (
                      <div
                        key={question}
                        className={`grid grid-cols-[42%_58%] ${
                          index !== 3
                            ? "border-b border-[#edf0f4]"
                            : ""
                        }`}
                      >
                        <div className="px-4 py-4">
                          <p className="m-0 font-sans text-sm font-semibold leading-6 text-[#091127]">
                            {question}
                          </p>
                        </div>

                        <div className="px-4 py-4">
                          <p className="m-0 font-sans text-sm leading-6 text-[#091127]">
                            {authority}
                          </p>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              </div>

              <div className="mt-6">
                <PendingBox>
                  Any incorporation-by-reference wording tying these documents
                  to the agreement is awaiting Legal.
                </PendingBox>
              </div>
            </SectionCard>

            {/* SECTION 7 */}
            <SectionCard id="section-7">
              <SectionHeader
                number="Section 7"
                title="Service changes, suspension and termination"
                status="Awaiting Legal"
              />

              <div className="mt-5 max-w-[700px] border-b border-[#dfe5ee] pb-5">
                <p className="m-0 font-sans text-sm leading-6 text-[#5d7192]">
                  Modification, suspension, termination and survival clauses.
                </p>
              </div>

              <div className="mt-6">
                <PendingBox>
                  <p className="m-0">
                    No notice period, cure period or termination trigger is
                    stated in advance of the approved wording.
                  </p>

                  <p className="m-0 mt-4">
                    Operational behaviour is not converted into a legal
                    promise. That a service usually behaves a certain way is
                    not a contractual commitment that it will.
                  </p>
                </PendingBox>
              </div>
            </SectionCard>

            {/* SECTION 8 */}
            <SectionCard id="section-8">
              <SectionHeader
                number="Section 8"
                title="Warranties, disclaimers, liability and indemnity"
                status="Awaiting Legal"
              />

              <div className="mt-5 max-w-[700px] border-b border-[#dfe5ee] pb-5">
                <p className="m-0 font-sans text-sm leading-6 text-[#5d7192]">
                  The clauses where wording carries the most weight, and where
                  summarising does the most damage.
                </p>
              </div>

              <div className="mt-6">
                <PendingBox>
                  <p className="m-0">
                    No liability cap, warranty disclaimer or indemnity is
                    published. These are not standard across the industry in
                    any way that would justify borrowing one.
                  </p>

                  <p className="m-0 mt-4">
                    When the approved text arrives it will be set in full,
                    with its defined terms and carve-outs intact. It will be
                    chunked for readability but never condensed into a
                    summary, and no plain-language version will stand in for
                    it.
                  </p>
                </PendingBox>
              </div>
            </SectionCard>

            {/* SECTION 9 */}
            <SectionCard id="section-9">
              <SectionHeader
                number="Section 9"
                title="Disputes, governing law and notices"
                status="Awaiting Legal"
              />

              <div className="mt-5 max-w-[700px] border-b border-[#dfe5ee] pb-5">
                <p className="m-0 font-sans text-sm leading-6 text-[#5d7192]">
                  Governing law, venue or arbitration, and the formal route for
                  sending a legal notice.
                </p>
              </div>

              <div className="mt-6">
                <PendingBox>
                  <p className="m-0">
                    No governing law or venue is named. Jurisdiction is never
                    inferred from a company address, a domain registration or
                    where a service appears to be operated from.
                  </p>

                  <p className="m-0 mt-4">
                    The formal notice method and address publish from the
                    approved record. Until they do, no route is offered — and
                    a formal legal notice is never routed to general support
                    or to sales as a substitute.
                  </p>
                </PendingBox>
              </div>

              <div className="mt-6">
                <NoticeBox accent="orange">
                  <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-[#f08a24]">
                    Sending a legal notice
                  </p>

                  <p className="m-0 mt-1 font-sans text-base leading-7 text-[#091127]">
                    If you need to serve a formal notice now, contact your
                    account or legal counterpart directly rather than through
                    the support channel. This page will carry the approved
                    method as soon as it exists.
                  </p>
                </NoticeBox>
              </div>
            </SectionCard>

            {/* VERSION HISTORY */}
            <SectionCard id="version-history">
              <SectionHeader title="Updates, effective dates and version history" />

              <div className="mt-5 max-w-[700px] border-b border-[#dfe5ee] pb-5">
                <p className="m-0 font-sans text-sm leading-6 text-[#5d7192]">
                  Publication date and effective date are separate facts, and
                  both are labelled wherever they exist.
                </p>
              </div>

              <div className="mt-6">
                <p className="m-0 mb-3 text-xs font-bold uppercase tracking-[0.08em] text-[#7890b2]">
                  Version record
                </p>

                <div className="overflow-x-auto border border-[#dfe5ee]">
                  <div className="min-w-[800px]">

                    <div className="grid grid-cols-[18%_24%_15%_43%] bg-[#fafbfc]">
                      {[
                        "Version",
                        "State",
                        "Effective",
                        "Change summary",
                      ].map((heading) => (
                        <div
                          key={heading}
                          className="border-b border-[#dfe5ee] px-4 py-3"
                        >
                          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#7890b2]">
                            {heading}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-[18%_24%_15%_43%]">
                      <div className="border-b border-[#edf0f4] px-4 py-4">
                        <span className="font-sans text-sm font-semibold text-[#091127]">
                          v1.0
                        </span>
                      </div>

                      <div className="border-b border-[#edf0f4] px-4 py-4">
                        <StatusBadge>
                          Prepared for approval
                        </StatusBadge>
                      </div>

                      <div className="border-b border-[#edf0f4] px-4 py-4 font-sans text-sm text-[#091127]">
                        On approval
                      </div>

                      <div className="border-b border-[#edf0f4] px-4 py-4 font-sans text-sm leading-6 text-[#091127]">
                        Consolidated wireframe and implementation
                        specification. Not published as the current terms.
                      </div>
                    </div>

                    <div className="grid grid-cols-[18%_24%_15%_43%]">
                      <div className="px-4 py-4">
                        <span className="font-sans text-sm font-semibold text-[#091127]">
                          Earlier versions
                        </span>
                      </div>

                      <div className="px-4 py-4">
                        <StatusBadge type="neutral">
                          None recorded
                        </StatusBadge>
                      </div>

                      <div className="px-4 py-4 font-sans text-sm text-[#091127]">
                        —
                      </div>

                      <div className="px-4 py-4 font-sans text-sm leading-6 text-[#091127]">
                        Superseded versions keep a permanent banner, their
                        effective period and a link to the current terms.
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="mt-6 max-w-[750px]">
                <p className="m-0 font-sans text-base leading-7 text-[#091127]">
                  A change summary may accompany a new version where Legal
                  approves one. It is labelled as a summary and never stands
                  in for reading the operative terms. Where notice of a change
                  is legally required, it comes from the source-controlled
                  notice record rather than from a timing or channel invented
                  here.
                </p>
              </div>
            </SectionCard>

            {/* RELATED DOCUMENTS */}
            <SectionCard id="related-documents">
              <SectionHeader title="Related legal documents" />

              <div className="mt-5 max-w-[700px] border-b border-[#dfe5ee] pb-5">
                <p className="m-0 font-sans text-sm leading-6 text-[#5d7192]">
                  Seven neighbouring destinations. Each is authoritative for
                  its own subject, and this page links rather than repeats.
                </p>
              </div>

              <div className="mt-6">
                <p className="m-0 mb-3 text-xs font-bold uppercase tracking-[0.08em] text-[#7890b2]">
                  Legal Corporate destinations
                </p>

                <div className="overflow-x-auto border border-[#dfe5ee]">
                  <div className="min-w-[800px]">

                    <div className="grid grid-cols-[24%_51%_25%] bg-[#fafbfc]">
                      <div className="border-b border-[#dfe5ee] px-4 py-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#7890b2]">
                          Document
                        </span>
                      </div>

                      <div className="border-b border-[#dfe5ee] px-4 py-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#7890b2]">
                          Authoritative for
                        </span>
                      </div>

                      <div className="border-b border-[#dfe5ee] px-4 py-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#7890b2]">
                          State
                        </span>
                      </div>
                    </div>

                    {relatedDocuments.map((item, index) => (
                      <div
                        key={item.document}
                        className={`grid grid-cols-[24%_51%_25%] ${
                          index !== relatedDocuments.length - 1
                            ? "border-b border-[#edf0f4]"
                            : ""
                        }`}
                      >
                        <div className="px-4 py-4">
                          <span className="font-sans text-sm font-semibold leading-6 text-[#091127]">
                            {item.document}
                          </span>
                        </div>

                        <div className="px-4 py-4">
                          <span className="font-sans text-sm leading-6 text-[#091127]">
                            {item.authority}
                          </span>
                        </div>

                        <div className="px-4 py-4">
                          <StatusBadge
                            type={item.current ? "pending" : "neutral"}
                          >
                            {item.state}
                          </StatusBadge>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </SectionCard>

            {/* QUESTIONS */}
            <SectionCard id="questions">
              <SectionHeader title="Questions" />

              <div className="mt-5 max-w-[700px] border-b border-[#dfe5ee] pb-5">
                <p className="m-0 font-sans text-sm leading-6 text-[#5d7192]">
                  Answers resolve to the operative clause and its version.
                  Where the source establishes nothing, the answer says so.
                </p>
              </div>

              <div className="mt-6 border-t border-[#dfe5ee]">
                {faqItems.map((item, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      key={item.question}
                      className="border-b border-[#dfe5ee]"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaq(isOpen ? null : index)
                        }
                        className="flex w-full items-start gap-3 py-4 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="w-5 shrink-0 font-sans text-xl font-normal leading-6 text-[#5d7192]">
                          {isOpen ? "−" : "+"}
                        </span>

                        <span className="font-sans text-sm font-semibold leading-6 text-[#091127] sm:text-base">
                          {item.question}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="pb-5 pl-8 pr-4">
                          <p className="m-0 max-w-[700px] font-sans text-base leading-7 text-[#5d7192]">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </SectionCard>

          </div>
        </div>
      </div>
    </main>
  );
}