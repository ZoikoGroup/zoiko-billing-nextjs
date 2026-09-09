"use client";

import React, { useState } from "react";

const SIDEBAR_GROUPS = [
  {
    title: "The notice",
    links: [
      {
        label: "Status and summary",
        id: "status-summary",
      },
      {
        label: "Scope and coverage",
        id: "scope",
      },
      {
        label: "Personal data categories",
        id: "data-categories",
      },
      {
        label: "Where data comes from",
        id: "data-sources",
      },
      {
        label: "Purposes and legal bases",
        id: "purposes",
      },
    ],
  },
  {
    title: "Handling",
    links: [
      {
        label: "Sharing and recipients",
        id: "sharing",
      },
      {
        label: "Transfers and location",
        id: "transfers",
      },
      {
        label: "Retention and deletion",
        id: "retention",
      },
      {
        label: "Security, DPA, subprocessors",
        id: "security",
      },
      {
        label: "Special topics",
        id: "special-topics",
      },
    ],
  },
  {
    title: "Your part",
    links: [
      {
        label: "Rights and requests",
        id: "rights",
      },
      {
        label: "Cookies and tracking",
        id: "cookies",
      },
      {
        label: "Changes and contact",
        id: "changes",
      },
      {
        label: "Questions",
        id: "questions",
      },
      {
        label: "Related documents",
        id: "related",
      },
    ],
  },
];

function Sidebar() {
  return (
    <aside className="hidden w-60 shrink-0 lg:block">
      <div className="sticky top-8 max-h-[788px] overflow-y-auto">
        {SIDEBAR_GROUPS.map((group) => (
          <div key={group.title} className="mb-3">
            <div
              className="
                mb-2
                px-0
                font-['Archivo']
                text-[11px]
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-color-azure-35-2

                sm:text-xs
                sm:tracking-[0.16em]
              "
            >
              {group.title}
            </div>

            <nav className="border-l border-color-azure-83">
              {group.links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="
                    block
                    border-l-[3px]
                    border-transparent
                    px-3
                    py-1.5
                    font-['Archivo']
                    text-sm
                    font-normal
                    leading-6
                    text-color-azure-35-2
                    transition-colors

                    hover:border-color-cyan-21
                    hover:bg-color-white-solid
                    hover:text-color-azure-10-2
                  "
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  );
}


function QuestionItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="w-full border-b border-color-azure-83">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 py-4 text-left"
      >
        <span
          className="
            flex size-4 shrink-0 items-center justify-center
            text-xl font-normal leading-8 text-color-azure-35-2
          "
          aria-hidden="true"
        >
          {open ? "−" : "+"}
        </span>

        <span className="text-base font-semibold leading-6 text-color-azure-10-2">
          {question}
        </span>
      </button>

      {open && (
        <div className="pb-5 pl-7 pr-4 sm:pl-7 sm:pr-8">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-35-2 sm:text-base">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}


function StatusIndicator({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "approved" | "current" | "pending";
}) {
  const styles = {
    approved: {
      wrapper:
        "outline-color-cyan-21 text-color-cyan-21",
      marker: "bg-color-cyan-21",
    },
    current: {
      wrapper:
        "outline-color-orange-31 text-color-orange-31",
      marker: "rounded-sm border border-color-orange-31",
    },
    pending: {
      wrapper:
        "outline-color-azure-35-2 text-color-azure-35-2",
      marker: "bg-color-azure-35-2",
    },
  };

  const current = styles[variant];

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 outline outline-1 outline-offset-[-1px] ${current.wrapper}`}
    >
      <div className={`size-2 ${current.marker}`} />
      <span className="text-xs font-semibold uppercase leading-5 tracking-wide">
        {children}
      </span>
    </div>
  );
}

function RelatedDocumentCard({
  document,
  description,
  state,
  variant,
}: {
  document: string;
  description: string;
  state: string;
  variant: "approved" | "current" | "pending";
}) {
  return (
    <div className="bg-color-white-solid px-5 py-5">
      <div className="mb-2 text-sm font-semibold leading-6 text-color-azure-10-2">
        {document}
      </div>

      <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
        {description}
      </p>

      <div className="mt-4">
        <StatusIndicator variant={variant}>{state}</StatusIndicator>
      </div>
    </div>
  );
}

function StatusBadge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        inline-flex
        shrink-0
        items-center
        gap-1.5
        px-2
        py-0.5
        outline
        outline-1
        outline-offset-[-1px]
        outline-color-orange-31
      "
    >
      <div className="size-2.5 shrink-0 rounded-sm border border-color-orange-31" />

      <div
        className="
          font-['Archivo']
          text-[11px]
          font-bold
          uppercase
          leading-4
          tracking-[0.12em]
          text-color-orange-31

          sm:text-xs
          sm:tracking-[0.16em]
        "
      >
        {children}
      </div>
    </div>
  );
}

interface SectionShellProps {
  id: string;
  title: string;
  children: React.ReactNode;
  badge?: React.ReactNode;
}

function SectionShell({
  id,
  title,
  children,
  badge,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className="
        scroll-mt-8
        w-full
        bg-color-white-solid
        px-5
        pt-10
        pb-12
        outline
        outline-1
        outline-offset-[-1px]
        outline-color-azure-83

        sm:px-8
        sm:pt-12
        sm:pb-14

        md:px-10
        md:pt-14
        md:pb-16

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

          sm:gap-10

          md:gap-11
        "
      >
        {/* ============================================================
            SECTION HEADER
            ============================================================ */}

        <div
          className="
            flex
            w-full
            flex-col
            items-start
            gap-4

            sm:flex-row
            sm:items-center
            sm:gap-6
          "
        >
          <h2
            className="
              !m-0
              font-['Archivo']
              text-[30px]
              font-extrabold
              leading-[1.2]
              tracking-[-0.035em]
              text-color-azure-10-2

              sm:text-[34px]

              md:text-[36px]

              lg:text-[40px]
            "
          >
            {title}
          </h2>

          {badge && badge}
        </div>

        {/* ============================================================
            ACTUAL SECTION CONTENT
            ============================================================ */}

        {children}
      </div>
    </section>
  );
}

/* ================================================================
   PRIVACY NOTICE PAGE
   ================================================================ */

export default function PrivacyNoticePage() {
  return (
    <main className="w-full bg-color-white-solid">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1320px]
          items-start
          gap-10
          px-6
          py-10

          sm:px-8
          sm:py-12

          lg:px-10

          xl:px-0
        "
      >
        {/* ==========================================================
            SIDEBAR
            ========================================================== */}

        <Sidebar />

        {/* ==========================================================
            MAIN CONTENT
            ========================================================== */}

        <div
          className="
            flex
            w-full
            min-w-0
            flex-col
            gap-6

            lg:max-w-[992px]
          "
        >
          {/* ========================================================
              01. STATUS AND SUMMARY
              ======================================================== */}
<SectionShell
  id="status-summary"
  title="Notice status and summary"
  badge={
    <StatusBadge>
      Plain language, not the legal text
    </StatusBadge>
  }
>
  {/* SECTION INTRO */}
  <div className="flex w-full max-w-[688px] flex-col items-start gap-5">
    {/* INTRO DESCRIPTION */}
    <div className="w-full border-b border-color-azure-83 pb-6">
      <p className="!m-0 text-sm font-normal leading-6 text-color-azure-35-2 sm:text-base">
        A short orientation to what this notice does and which document owns
        each related subject.
      </p>
    </div>

    {/* MAIN DESCRIPTION */}
    <div className="flex w-full flex-col items-start pt-1">
      <p className="!m-0 text-base font-normal leading-7 text-color-azure-10-2">
        This privacy notice describes how personal data is handled in the Zoiko
        Billing services and contexts named in the approved coverage record.
        It sets out the categories of data described, where they come from,
        the purposes they are used for, who they may be shared with, how long
        they are kept, and the rights and choices that apply.
      </p>
    </div>

    {/* SECOND DESCRIPTION */}
    <div className="flex w-full flex-col items-start pt-0.5 pb-1">
      <p className="!m-0 text-base font-normal leading-7 text-color-azure-10-2">
        Where the approved source does not establish a fact, this page says
        so. It does not fill a gap with what a billing platform typically
        does, and silence on a practice is never presented as a denial that it
        occurs.
      </p>
    </div>

    {/* AUTHORITY BOUNDARY */}
    <div className="w-full border-l-[3px] border-color-cyan-21 bg-color-grey-96-10 px-5 py-4">
      <div className="flex w-full flex-col items-start gap-1">
        <div className="text-xs font-bold uppercase leading-5 tracking-wide text-color-cyan-21">
          Authority boundary
        </div>

        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          The Terms of User govern the contractual relationship. The Cookie
          Policy owns the cookie and tracker inventory and your cookie choices.
          The Data Processing Addendum owns contractual processing terms, and
          the Subprocessors page owns the current vendor list. Security
          evidence sits with the approved security destination. This notice
          routes to each of them rather than restating them.
        </p>
      </div>
    </div>

    {/* CURRENTNESS FIELDS */}
    <div className="w-full pt-4">
      <div className="mb-2 text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
        Currentness fields
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden w-full overflow-hidden border-t border-color-azure-66 sm:block">
        {/* TABLE HEADER */}
        <div className="grid grid-cols-[180px_minmax(0,1fr)_150px] border-b border-color-azure-66">
          <div className="px-3.5 py-2.5">
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
              Field
            </span>
          </div>

          <div className="px-3.5 py-2.5">
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
              Position
            </span>
          </div>

          <div className="px-3.5 py-2.5">
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
              State
            </span>
          </div>
        </div>

        {/* VERSION */}
        <div className="grid grid-cols-[180px_minmax(0,1fr)_150px] border-b border-color-azure-83">
          <div className="px-3.5 py-3">
            <span className="text-sm font-semibold leading-6 text-color-azure-10-2">
              Version
            </span>
          </div>

          <div className="px-3.5 py-3">
            <span className="text-sm font-normal leading-6 text-color-azure-10-2">
              The registry version identifier. No "latest" label appears
              without a source-current check.
            </span>
          </div>

          <div className="px-3.5 py-3">
            <StatusBadge>Awaiting source</StatusBadge>
          </div>
        </div>

        {/* EFFECTIVE DATE */}
        <div className="grid grid-cols-[180px_minmax(0,1fr)_150px] border-b border-color-azure-83">
          <div className="px-3.5 py-3">
            <span className="text-sm font-semibold leading-6 text-color-azure-10-2">
              Effective date
            </span>
          </div>

          <div className="px-3.5 py-3">
            <span className="text-sm font-normal leading-6 text-color-azure-10-2">
              Shown separately from the publication date wherever both exist.
            </span>
          </div>

          <div className="px-3.5 py-3">
            <StatusBadge>Awaiting source</StatusBadge>
          </div>
        </div>

        {/* LAST REVIEWED */}
        <div className="grid grid-cols-[180px_minmax(0,1fr)_150px] border-b border-color-azure-83">
          <div className="px-3.5 py-3">
            <span className="text-sm font-semibold leading-6 text-color-azure-10-2">
              Last reviewed
            </span>
          </div>

          <div className="px-3.5 py-3">
            <span className="text-sm font-normal leading-6 text-color-azure-10-2">
              Published only where governed review metadata exists. A content
              edit is not a legal review.
            </span>
          </div>

          <div className="px-3.5 py-3">
            <StatusBadge>Not established</StatusBadge>
          </div>
        </div>

        {/* RESPONSIBLE ENTITY */}
        <div className="grid grid-cols-[180px_minmax(0,1fr)_150px] border-b border-color-azure-83">
          <div className="px-3.5 py-3">
            <span className="text-sm font-semibold leading-6 text-color-azure-10-2">
              Responsible entity
            </span>
          </div>

          <div className="px-3.5 py-3">
            <span className="text-sm font-normal leading-6 text-color-azure-10-2">
              The approved entity and its role, where publication is
              authorised.
            </span>
          </div>

          <div className="px-3.5 py-3">
            <StatusBadge>Awaiting source</StatusBadge>
          </div>
        </div>

        {/* PREVIOUS VERSIONS */}
        <div className="grid grid-cols-[180px_minmax(0,1fr)_150px]">
          <div className="px-3.5 py-3">
            <span className="text-sm font-semibold leading-6 text-color-azure-10-2">
              Previous versions
            </span>
          </div>

          <div className="px-3.5 py-3">
            <span className="text-sm font-normal leading-6 text-color-azure-10-2">
              Archived with their effective periods and a link to the
              successor, where Legal approves public history.
            </span>
          </div>

          <div className="px-3.5 py-3">
            <div className="inline-flex shrink-0 items-center gap-1.5 px-2 py-0.5 outline outline-1 outline-offset-[-1px] outline-color-azure-35-2">
              <div className="size-2 shrink-0 bg-color-azure-35-2" />

              <span className="text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-color-azure-35-2 sm:text-xs sm:tracking-[0.16em]">
                None recorded
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE TABLE / CARDS */}
      <div className="flex w-full flex-col border-t border-color-azure-66 sm:hidden">
        {/* VERSION */}
        <div className="flex flex-col gap-3 border-b border-color-azure-83 px-3.5 py-4">
          <div>
            <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
              Field
            </p>

            <p className="!m-0 mt-1 text-sm font-semibold leading-6 text-color-azure-10-2">
              Version
            </p>
          </div>

          <div>
            <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
              Position
            </p>

            <p className="!m-0 mt-1 text-sm leading-6 text-color-azure-10-2">
              The registry version identifier. No "latest" label appears
              without a source-current check.
            </p>
          </div>

          <div>
            <p className="!m-0 mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
              State
            </p>

            <StatusBadge>Awaiting source</StatusBadge>
          </div>
        </div>

        {/* EFFECTIVE DATE */}
        <div className="flex flex-col gap-3 border-b border-color-azure-83 px-3.5 py-4">
          <div>
            <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
              Field
            </p>

            <p className="!m-0 mt-1 text-sm font-semibold leading-6 text-color-azure-10-2">
              Effective date
            </p>
          </div>

          <div>
            <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
              Position
            </p>

            <p className="!m-0 mt-1 text-sm leading-6 text-color-azure-10-2">
              Shown separately from the publication date wherever both exist.
            </p>
          </div>

          <div>
            <p className="!m-0 mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
              State
            </p>

            <StatusBadge>Awaiting source</StatusBadge>
          </div>
        </div>

        {/* LAST REVIEWED */}
        <div className="flex flex-col gap-3 border-b border-color-azure-83 px-3.5 py-4">
          <div>
            <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
              Field
            </p>

            <p className="!m-0 mt-1 text-sm font-semibold leading-6 text-color-azure-10-2">
              Last reviewed
            </p>
          </div>

          <div>
            <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
              Position
            </p>

            <p className="!m-0 mt-1 text-sm leading-6 text-color-azure-10-2">
              Published only where governed review metadata exists. A content
              edit is not a legal review.
            </p>
          </div>

          <div>
            <p className="!m-0 mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
              State
            </p>

            <StatusBadge>Not established</StatusBadge>
          </div>
        </div>

        {/* RESPONSIBLE ENTITY */}
        <div className="flex flex-col gap-3 border-b border-color-azure-83 px-3.5 py-4">
          <div>
            <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
              Field
            </p>

            <p className="!m-0 mt-1 text-sm font-semibold leading-6 text-color-azure-10-2">
              Responsible entity
            </p>
          </div>

          <div>
            <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
              Position
            </p>

            <p className="!m-0 mt-1 text-sm leading-6 text-color-azure-10-2">
              The approved entity and its role, where publication is
              authorised.
            </p>
          </div>

          <div>
            <p className="!m-0 mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
              State
            </p>

            <StatusBadge>Awaiting source</StatusBadge>
          </div>
        </div>

        {/* PREVIOUS VERSIONS */}
        <div className="flex flex-col gap-3 px-3.5 py-4">
          <div>
            <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
              Field
            </p>

            <p className="!m-0 mt-1 text-sm font-semibold leading-6 text-color-azure-10-2">
              Previous versions
            </p>
          </div>

          <div>
            <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
              Position
            </p>

            <p className="!m-0 mt-1 text-sm leading-6 text-color-azure-10-2">
              Archived with their effective periods and a link to the
              successor, where Legal approves public history.
            </p>
          </div>

          <div>
            <p className="!m-0 mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
              State
            </p>

            <div className="inline-flex shrink-0 items-center gap-1.5 px-2 py-0.5 outline outline-1 outline-offset-[-1px] outline-color-azure-35-2">
              <div className="size-2 shrink-0 bg-color-azure-35-2" />

              <span className="text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-color-azure-35-2">
                None recorded
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</SectionShell>

          {/* ========================================================
              02. SCOPE AND COVERAGE
              ======================================================== */}

          <SectionShell
            id="scope"
            title="Scope and coverage"
            badge={
              <StatusBadge>
                Plain language, not the legal text
              </StatusBadge>
            }
          >
           <div
  className="
    flex
    w-full
    max-w-[688px]
    flex-col
    items-start
    gap-5
  "
>
  {/* INTRO DESCRIPTION */}
  <div
    className="
      w-full
      border-b
      border-color-azure-83
      pb-6
    "
  >
    <p
      className="
        !m-0
        font-['Newsreader']
        text-sm
        font-normal
        leading-6
        text-color-azure-35-2
        sm:text-base
      "
    >
      One notice does not automatically cover every site, service, entity,
      role or region. Coverage is stated, not assumed.
    </p>
  </div>

  {/* COVERAGE DIMENSIONS */}
  <div className="w-full pt-4">
    <div
      className="
        mb-2
        font-['Archivo']
        text-xs
        font-normal
        uppercase
        leading-5
        tracking-wide
        text-color-azure-35-2
      "
    >
      Coverage dimensions
    </div>

    {/* DESKTOP TABLE */}
    <div
      className="
        hidden
        w-full
        overflow-hidden
        border-t
        border-color-azure-66
        sm:block
      "
    >
      {/* TABLE HEADER */}
      <div
        className="
          grid
          grid-cols-[180px_minmax(0,1fr)_150px]
          border-b
          border-color-azure-66
        "
      >
        <div className="px-3.5 py-2.5">
          <span
            className="
              font-['Archivo']
              text-xs
              font-semibold
              uppercase
              leading-5
              tracking-wide
              text-color-azure-35-2
            "
          >
            Dimension
          </span>
        </div>

        <div className="px-3.5 py-2.5">
          <span
            className="
              font-['Archivo']
              text-xs
              font-semibold
              uppercase
              leading-5
              tracking-wide
              text-color-azure-35-2
            "
          >
            Position
          </span>
        </div>

        <div className="px-3.5 py-2.5">
          <span
            className="
              font-['Archivo']
              text-xs
              font-semibold
              uppercase
              leading-5
              tracking-wide
              text-color-azure-35-2
            "
          >
            State
          </span>
        </div>
      </div>

      {/* SCOPE STATEMENT */}
      <div
        className="
          grid
          grid-cols-[180px_minmax(0,1fr)_150px]
          border-b
          border-color-azure-83
        "
      >
        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Scope statement
          </span>
        </div>

        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            The exact approved statement of what this notice covers.
          </span>
        </div>

        <div className="px-3.5 py-3">
          <StatusBadge>Awaiting source</StatusBadge>
        </div>
      </div>

      {/* SERVICES AND CONTEXTS */}
      <div
        className="
          grid
          grid-cols-[180px_minmax(0,1fr)_150px]
          border-b
          border-color-azure-83
        "
      >
        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Services and contexts
          </span>
        </div>

        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            Named individually. The public website and the authenticated
            product are not merged by default.
          </span>
        </div>

        <div className="px-3.5 py-3">
          <StatusBadge>Awaiting source</StatusBadge>
        </div>
      </div>

      {/* ENTITY AND REGION */}
      <div
        className="
          grid
          grid-cols-[180px_minmax(0,1fr)_150px]
          border-b
          border-color-azure-83
        "
      >
        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Entity and region
          </span>
        </div>

        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            Shown where materially relevant and approved, not as a general
            claim of global coverage.
          </span>
        </div>

        <div className="px-3.5 py-3">
          <StatusBadge>Awaiting source</StatusBadge>
        </div>
      </div>

      {/* CUSTOMER-CONTROLLED DATA */}
      <div
        className="
          grid
          grid-cols-[180px_minmax(0,1fr)_150px]
          border-b
          border-color-azure-83
        "
      >
        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Customer-controlled data
          </span>
        </div>

        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            Where a customer organisation determines how data is handled, that
            boundary is described from the approved wording. No controller or
            processor conclusion is drawn here.
          </span>
        </div>

        <div className="px-3.5 py-3">
          <StatusBadge>Not established</StatusBadge>
        </div>
      </div>

      {/* NOT COVERED */}
      <div
        className="
          grid
          grid-cols-[180px_minmax(0,1fr)_150px]
        "
      >
        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Not covered
          </span>
        </div>

        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            An exclusion appears only where an approved source states it.
            Nothing is inferred as excluded from silence.
          </span>
        </div>

        <div className="px-3.5 py-3">
          <div
            className="
              inline-flex
              shrink-0
              items-center
              gap-1.5
              px-2
              py-0.5
              outline
              outline-1
              outline-offset-[-1px]
              outline-color-cyan-21
            "
          >
            <div className="size-2 shrink-0 bg-color-cyan-21" />

            <span className="font-['Archivo'] text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-color-cyan-21 sm:text-xs sm:tracking-[0.16em]">
              Governance rule
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* MOBILE CARDS */}
    <div
      className="
        flex
        w-full
        flex-col
        border-t
        border-color-azure-66
        sm:hidden
      "
    >
      {/* SCOPE STATEMENT */}
      <div className="flex flex-col gap-3 border-b border-color-azure-83 px-3.5 py-4">
        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Dimension
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Scope statement
          </p>
        </div>

        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Position
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm leading-6 text-color-azure-10-2">
            The exact approved statement of what this notice covers.
          </p>
        </div>

        <div>
          <p className="!m-0 mb-2 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            State
          </p>
          <StatusBadge>Awaiting source</StatusBadge>
        </div>
      </div>

      {/* SERVICES AND CONTEXTS */}
      <div className="flex flex-col gap-3 border-b border-color-azure-83 px-3.5 py-4">
        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Dimension
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Services and contexts
          </p>
        </div>

        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Position
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm leading-6 text-color-azure-10-2">
            Named individually. The public website and the authenticated
            product are not merged by default.
          </p>
        </div>

        <div>
          <p className="!m-0 mb-2 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            State
          </p>
          <StatusBadge>Awaiting source</StatusBadge>
        </div>
      </div>

      {/* ENTITY AND REGION */}
      <div className="flex flex-col gap-3 border-b border-color-azure-83 px-3.5 py-4">
        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Dimension
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Entity and region
          </p>
        </div>

        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Position
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm leading-6 text-color-azure-10-2">
            Shown where materially relevant and approved, not as a general
            claim of global coverage.
          </p>
        </div>

        <div>
          <p className="!m-0 mb-2 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            State
          </p>
          <StatusBadge>Awaiting source</StatusBadge>
        </div>
      </div>

      {/* CUSTOMER-CONTROLLED DATA */}
      <div className="flex flex-col gap-3 border-b border-color-azure-83 px-3.5 py-4">
        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Dimension
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Customer-controlled data
          </p>
        </div>

        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Position
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm leading-6 text-color-azure-10-2">
            Where a customer organisation determines how data is handled, that
            boundary is described from the approved wording. No controller or
            processor conclusion is drawn here.
          </p>
        </div>

        <div>
          <p className="!m-0 mb-2 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            State
          </p>
          <StatusBadge>Not established</StatusBadge>
        </div>
      </div>

      {/* NOT COVERED */}
      <div className="flex flex-col gap-3 px-3.5 py-4">
        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Dimension
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Not covered
          </p>
        </div>

        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Position
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm leading-6 text-color-azure-10-2">
            An exclusion appears only where an approved source states it.
            Nothing is inferred as excluded from silence.
          </p>
        </div>

        <div>
          <p className="!m-0 mb-2 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            State
          </p>

          <div
            className="
              inline-flex
              shrink-0
              items-center
              gap-1.5
              px-2
              py-0.5
              outline
              outline-1
              outline-offset-[-1px]
              outline-color-cyan-21
            "
          >
            <div className="size-2 shrink-0 bg-color-cyan-21" />

            <span className="font-['Archivo'] text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-color-cyan-21">
              Governance rule
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
          </SectionShell>

          {/* ========================================================
              03. PERSONAL DATA CATEGORIES
              ======================================================== */}

          <SectionShell
            id="data-categories"
            title="Personal data categories"
            badge={
              <StatusBadge>
                Plain language, not the legal text
              </StatusBadge>
            }
          >
          <div
  className="
    flex
    w-full
    flex-col
    items-start
    gap-5
  "
>
  {/* INTRO DESCRIPTION */}
  <div
    className="
      w-full
      max-w-[688px]
      border-b
      border-color-azure-83
      pb-6
    "
  >
    <p
      className="
        !m-0
        font-['Newsreader']
        text-sm
        font-normal
        leading-6
        text-color-azure-35-2
        sm:text-base
      "
    >
      Each category publishes as a record with its own description, purposes,
      retention link and scope. These are legal summaries, not feature
      descriptions.
    </p>
  </div>

  {/* EMPTY STATE */}
  <div
    className="
      w-full
      max-w-[688px]
      bg-color-grey-99-9
      px-6
      py-8
      outline
      outline-1
      outline-offset-[-1px]
      outline-color-azure-66
    "
  >
    <div className="flex w-full flex-col items-start gap-1.5">
      <h3
        className="
          !m-0
          font-['Archivo']
          text-base
          font-semibold
          leading-7
          text-color-azure-10-2
        "
      >
        No approved category records yet
      </h3>

      <p
        className="
          !m-0
          font-['Newsreader']
          text-base
          font-normal
          leading-6
          text-color-azure-25
        "
      >
        The Personal Data Category Registry has not published records, so no
        category is named here. Nothing is listed on the basis of what billing
        platforms commonly collect.
      </p>

      <p
        className="
          !m-0
          pt-1.5
          font-['Newsreader']
          text-base
          font-normal
          leading-6
          text-color-azure-25
        "
      >
        An absent category is not a statement that the data is not handled. It
        means the record has not been approved for publication.
      </p>
    </div>
  </div>

  {/* SUBHEADING */}
  <div className="w-full pt-1">
    <h3
      className="
        !m-0
        font-['Archivo']
        text-base
        font-semibold
        leading-7
        text-color-azure-10-2
      "
    >
      What each published category will carry
    </h3>
  </div>

  {/* CATEGORY RECORD CONTRACT */}
  <div className="w-full">
    <div
      className="
        mb-2
        font-['Archivo']
        text-xs
        font-normal
        uppercase
        leading-5
        tracking-wide
        text-color-azure-35-2
      "
    >
      Category record contract
    </div>

    {/* DESKTOP TABLE */}
    <div
      className="
        hidden
        w-full
        overflow-hidden
        border-t
        border-color-azure-66
        sm:block
      "
    >
      {/* HEADER */}
      <div
        className="
          grid
          grid-cols-[180px_minmax(0,1fr)]
          border-b
          border-color-azure-66
        "
      >
        <div className="px-3.5 py-2.5">
          <span
            className="
              font-['Archivo']
              text-xs
              font-semibold
              uppercase
              leading-5
              tracking-wide
              text-color-azure-35-2
            "
          >
            Field
          </span>
        </div>

        <div className="px-3.5 py-2.5">
          <span
            className="
              font-['Archivo']
              text-xs
              font-semibold
              uppercase
              leading-5
              tracking-wide
              text-color-azure-35-2
            "
          >
            Rule
          </span>
        </div>
      </div>

      {/* CATEGORY NAME */}
      <div className="grid grid-cols-[180px_minmax(0,1fr)] border-b border-color-azure-83">
        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Category name
          </span>
        </div>

        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            The approved public label from the registry.
          </span>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="grid grid-cols-[180px_minmax(0,1fr)] border-b border-color-azure-83">
        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Description
          </span>
        </div>

        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            A parity-controlled summary that neither narrows nor widens the
            approved text.
          </span>
        </div>
      </div>

      {/* EXAMPLES */}
      <div className="grid grid-cols-[180px_minmax(0,1fr)] border-b border-color-azure-83">
        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Examples
          </span>
        </div>

        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            Counsel-approved only. An example never expands the scope of the
            category.
          </span>
        </div>
      </div>

      {/* PURPOSES */}
      <div className="grid grid-cols-[180px_minmax(0,1fr)] border-b border-color-azure-83">
        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Purposes
          </span>
        </div>

        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            Linked to approved purpose records. There is no generic
            &quot;service improvement&quot; fallback.
          </span>
        </div>
      </div>

      {/* RETENTION */}
      <div className="grid grid-cols-[180px_minmax(0,1fr)] border-b border-color-azure-83">
        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Retention
          </span>
        </div>

        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            Linked to the approved retention rule or criteria where one exists.
          </span>
        </div>
      </div>

      {/* SENSITIVITY */}
      <div className="grid grid-cols-[180px_minmax(0,1fr)] border-b border-color-azure-83">
        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Sensitivity
          </span>
        </div>

        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            A special-category label appears only where an approved source
            classifies it that way.
          </span>
        </div>
      </div>

      {/* STATE */}
      <div className="grid grid-cols-[180px_minmax(0,1fr)]">
        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            State
          </span>
        </div>

        <div className="px-3.5 py-3">
          <span className="font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            Scope, conditionality and under-review status stay visible rather
            than hidden in a tooltip.
          </span>
        </div>
      </div>
    </div>

    {/* MOBILE CARDS */}
    <div
      className="
        flex
        w-full
        flex-col
        border-t
        border-color-azure-66
        sm:hidden
      "
    >
      {/* CATEGORY NAME */}
      <div className="flex flex-col gap-3 border-b border-color-azure-83 px-3.5 py-4">
        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Field
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Category name
          </p>
        </div>

        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Rule
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm leading-6 text-color-azure-10-2">
            The approved public label from the registry.
          </p>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="flex flex-col gap-3 border-b border-color-azure-83 px-3.5 py-4">
        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Field
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Description
          </p>
        </div>

        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Rule
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm leading-6 text-color-azure-10-2">
            A parity-controlled summary that neither narrows nor widens the
            approved text.
          </p>
        </div>
      </div>

      {/* EXAMPLES */}
      <div className="flex flex-col gap-3 border-b border-color-azure-83 px-3.5 py-4">
        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Field
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Examples
          </p>
        </div>

        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Rule
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm leading-6 text-color-azure-10-2">
            Counsel-approved only. An example never expands the scope of the
            category.
          </p>
        </div>
      </div>

      {/* PURPOSES */}
      <div className="flex flex-col gap-3 border-b border-color-azure-83 px-3.5 py-4">
        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Field
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Purposes
          </p>
        </div>

        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Rule
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm leading-6 text-color-azure-10-2">
            Linked to approved purpose records. There is no generic
            &quot;service improvement&quot; fallback.
          </p>
        </div>
      </div>

      {/* RETENTION */}
      <div className="flex flex-col gap-3 border-b border-color-azure-83 px-3.5 py-4">
        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Field
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Retention
          </p>
        </div>

        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Rule
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm leading-6 text-color-azure-10-2">
            Linked to the approved retention rule or criteria where one exists.
          </p>
        </div>
      </div>

      {/* SENSITIVITY */}
      <div className="flex flex-col gap-3 border-b border-color-azure-83 px-3.5 py-4">
        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Field
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Sensitivity
          </p>
        </div>

        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Rule
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm leading-6 text-color-azure-10-2">
            A special-category label appears only where an approved source
            classifies it that way.
          </p>
        </div>
      </div>

      {/* STATE */}
      <div className="flex flex-col gap-3 px-3.5 py-4">
        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Field
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            State
          </p>
        </div>

        <div>
          <p className="!m-0 font-['Archivo'] text-[11px] font-bold uppercase tracking-[0.12em] text-color-azure-35-2">
            Rule
          </p>
          <p className="!m-0 mt-1 font-['Newsreader'] text-sm leading-6 text-color-azure-10-2">
            Scope, conditionality and under-review status stay visible rather
            than hidden in a tooltip.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
          </SectionShell>

          {/* ========================================================
              04. WHERE DATA COMES FROM
              ======================================================== */}

          <SectionShell
            id="data-sources"
            title="Where personal data comes from"
            badge={
              <StatusBadge>
                Plain language, not the legal text
              </StatusBadge>
            }
          >
           <div className="flex w-full flex-col items-start gap-5">
  {/* INTRO DESCRIPTION */}
  <div
    className="
      w-full
      max-w-[688px]
      border-b
      border-color-azure-83
      pb-6
    "
  >
    <p
      className="
        !m-0
        font-['Newsreader']
        text-sm
        font-normal
        leading-6
        text-color-azure-35-2
        sm:text-base
      "
    >
      Each source pattern publishes only where the approved notice establishes
      it.
    </p>
  </div>

  {/* SOURCE PATTERNS */}
  <div
    className="
      grid
      w-full
      max-w-[688px]
      grid-cols-1
      gap-px
      overflow-hidden
      bg-color-azure-83
      outline
      outline-1
      outline-offset-[-1px]
      outline-color-azure-83

      md:grid-cols-2
    "
  >
    {/* DIRECTLY FROM YOU */}
    <div
      className="
        flex
        min-h-[180px]
        flex-col
        items-start
        bg-color-white-solid
        px-5
        py-5
      "
    >
      <h3
        className="
          !m-0
          font-['Archivo']
          text-base
          font-semibold
          leading-7
          text-color-azure-10-2
        "
      >
        Directly from you
      </h3>

      <p
        className="
          !m-0
          mt-2
          max-w-[570px]
          font-['Newsreader']
          text-base
          font-normal
          leading-6
          text-color-azure-25
        "
      >
        Information you provide yourself, where the notice establishes direct
        collection.
      </p>

      <div className="mt-auto pt-6">
        <StatusBadge>Awaiting source</StatusBadge>
      </div>
    </div>

    {/* FROM YOUR ORGANISATION */}
    <div
      className="
        flex
        min-h-[180px]
        flex-col
        items-start
        bg-color-white-solid
        px-5
        py-5
      "
    >
      <h3
        className="
          !m-0
          font-['Archivo']
          text-base
          font-semibold
          leading-7
          text-color-azure-10-2
        "
      >
        From your organisation
      </h3>

      <p
        className="
          !m-0
          mt-2
          max-w-[570px]
          font-['Newsreader']
          text-base
          font-normal
          leading-6
          text-color-azure-25
        "
      >
        Information a customer organisation supplies about its users, with the
        approved role wording attached.
      </p>

      <div className="mt-auto pt-6">
        <StatusBadge>Awaiting source</StatusBadge>
      </div>
    </div>

    {/* FROM USING THE SERVICE */}
    <div
      className="
        flex
        min-h-[180px]
        flex-col
        items-start
        bg-color-white-solid
        px-5
        py-5
      "
    >
      <h3
        className="
          !m-0
          font-['Archivo']
          text-base
          font-semibold
          leading-7
          text-color-azure-10-2
        "
      >
        From using the service
      </h3>

      <p
        className="
          !m-0
          mt-2
          max-w-[570px]
          font-['Newsreader']
          text-base
          font-normal
          leading-6
          text-color-azure-25
        "
      >
        System-generated or usage data, published only where a source
        establishes the categories.
      </p>

      <div className="mt-auto pt-6">
        <StatusBadge>Awaiting source</StatusBadge>
      </div>
    </div>

    {/* FROM YOUR DEVICE OR BROWSER */}
    <div
      className="
        flex
        min-h-[180px]
        flex-col
        items-start
        bg-color-white-solid
        px-5
        py-5
      "
    >
      <h3
        className="
          !m-0
          font-['Archivo']
          text-base
          font-semibold
          leading-7
          text-color-azure-10-2
        "
      >
        From your device or browser
      </h3>

      <p
        className="
          !m-0
          mt-2
          max-w-[570px]
          font-['Newsreader']
          text-base
          font-normal
          leading-6
          text-color-azure-25
        "
      >
        Not inferred from ordinary web practice. Cookie and tracker detail
        belongs to the Cookie Policy.
      </p>

      <div className="mt-auto pt-6">
        <StatusBadge>Not established</StatusBadge>
      </div>
    </div>

    {/* FROM INTEGRATIONS */}
    <div
      className="
        flex
        min-h-[180px]
        flex-col
        items-start
        bg-color-white-solid
        px-5
        py-5
      "
    >
      <h3
        className="
          !m-0
          font-['Archivo']
          text-base
          font-semibold
          leading-7
          text-color-azure-10-2
        "
      >
        From integrations
      </h3>

      <p
        className="
          !m-0
          mt-2
          max-w-[570px]
          font-['Newsreader']
          text-base
          font-normal
          leading-6
          text-color-azure-25
        "
      >
        Named only where an approved source permits it. Connected services are
        not assumed.
      </p>

      <div className="mt-auto pt-6">
        <StatusBadge>Not established</StatusBadge>
      </div>
    </div>

    {/* FROM OTHER SOURCES */}
    <div
      className="
        flex
        min-h-[180px]
        flex-col
        items-start
        bg-color-white-solid
        px-5
        py-5
      "
    >
      <h3
        className="
          !m-0
          font-['Archivo']
          text-base
          font-semibold
          leading-7
          text-color-azure-10-2
        "
      >
        From other sources
      </h3>

      <p
        className="
          !m-0
          mt-2
          max-w-[570px]
          font-['Newsreader']
          text-base
          font-normal
          leading-6
          text-color-azure-25
        "
      >
        Public records, data providers or similar sources appear only where the
        approved notice identifies them.
      </p>

      <div className="mt-auto pt-6">
        <StatusBadge>Not established</StatusBadge>
      </div>
    </div>
  </div>
</div>
          </SectionShell>

          {/* ========================================================
              05. PURPOSES AND LEGAL BASES
              ======================================================== */}

          <SectionShell
            id="purposes"
            title="Purposes and legal bases"
            badge={
              <StatusBadge>
                Plain language, not the legal text
              </StatusBadge>
            }
          >
           <div className="flex w-full flex-col items-start gap-5">
  {/* INTRO DESCRIPTION */}
  <div
    className="
      w-full
      max-w-[688px]
      border-b
      border-color-azure-83
      pb-6
    "
  >
    <p
      className="
        !m-0
        font-['Newsreader']
        text-sm
        font-normal
        leading-6
        text-color-azure-35-2
        sm:text-base
      "
    >
      A purpose says what processing supports. A legal basis says what permits
      it. Neither is written here without an approved record.
    </p>
  </div>

  {/* EMPTY PURPOSE RECORDS */}
  <div
    className="
      w-full
      max-w-[688px]
      bg-color-grey-99-9
      px-6
      py-8
      outline
      outline-1
      outline-offset-[-1px]
      outline-color-azure-66
    "
  >
    <div className="flex w-full flex-col items-start gap-1.5">
      <h3
        className="
          !m-0
          font-['Archivo']
          text-base
          font-semibold
          leading-7
          text-color-azure-10-2
        "
      >
        No approved purpose records yet
      </h3>

      <p
        className="
          !m-0
          font-['Newsreader']
          text-base
          font-normal
          leading-6
          text-color-azure-25
        "
      >
        Purposes publish from the Purpose Registry, each linked to the data
        categories involved and the contexts it applies to. Vague wording such
        as &quot;business purposes&quot; is avoided wherever more precise
        approved wording exists.
      </p>

      <p
        className="
          !m-0
          pt-1.5
          font-['Newsreader']
          text-base
          font-normal
          leading-6
          text-color-azure-25
        "
      >
        Legal bases appear only where relevant to the approved notice and
        jurisdiction. Legitimate-interest assessments, consent conditions and
        withdrawal mechanics are not invented to complete the picture.
      </p>
    </div>
  </div>

  {/* REQUIRED AND OPTIONAL DATA */}
  <div
    className="
      w-full
      border-l-[3px]
      border-color-orange-31
      bg-color-grey-96-9
      px-5
      py-4
    "
  >
    <div className="flex w-full flex-col items-start gap-1">
      <div
        className="
          font-['Archivo']
          text-xs
          font-bold
          uppercase
          leading-5
          tracking-wide
          text-color-orange-31
        "
      >
        Required and optional data
      </div>

      <p
        className="
          !m-0
          font-['Newsreader']
          text-base
          font-normal
          leading-6
          text-color-azure-10-2
        "
      >
        What happens if you do not provide certain data is stated only where
        the approved source establishes the consequence. No consequence is
        implied by the fact that a field exists.
      </p>
    </div>
  </div>
</div>
          </SectionShell>

          {/* ========================================================
              06. SHARING AND RECIPIENTS
              ======================================================== */}

          <SectionShell
            id="sharing"
            title="Sharing, recipients and disclosures"
            badge={
              <StatusBadge>
                Plain language, not the legal text
              </StatusBadge>
            }
          >
           <div className="flex w-full flex-col items-start gap-5">
  {/* INTRO DESCRIPTION */}
  <div className="w-full max-w-[688px] border-b border-color-azure-83 pb-6">
    <p className="!m-0 font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-35-2 sm:text-base">
      Recipients are described by category. The current vendor list is owned by
      the Subprocessors page rather than copied here.
    </p>
  </div>

  {/* DISCLOSURE TOPICS */}
  <div className="w-full">
    <div className="mb-3 font-['Archivo'] text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
      Disclosure topics
    </div>

    {/* Desktop table */}
    <div className="hidden w-full overflow-hidden md:block">
      <div className="grid grid-cols-[220px_minmax(0,1fr)]">
        <div className="border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="font-['Archivo'] text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Topic
          </div>
        </div>

        <div className="border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="font-['Archivo'] text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Position
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Recipient categories
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            Approved categories with the reason for each disclosure.
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Service providers
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            This notice explains the relationship. The current inventory lives
            with Subprocessors once that page is published.
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Affiliates
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            Described only from an approved source. Group-wide sharing is not
            inferred from corporate structure.
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Sharing you direct
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            Where an administrator or user controls a disclosure, the
            responsibility is described only from approved wording.
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Legal and safety
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            The exact approved wording. There is no broad &quot;when required
            by law&quot; phrase beyond what the notice contains.
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Selling or sharing for advertising
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            Jurisdiction-specific terms appear only where the approved notice
            defines them and their scope. Their absence here is not a denial.
          </div>
        </div>
      </div>
    </div>

    {/* Mobile cards */}
    <div className="flex w-full flex-col gap-px overflow-hidden bg-color-azure-83 md:hidden">
      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 font-['Archivo'] text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Recipient categories
        </div>
        <p className="!m-0 font-['Newsreader'] text-base font-normal leading-6 text-color-azure-10-2">
          Approved categories with the reason for each disclosure.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 font-['Archivo'] text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Service providers
        </div>
        <p className="!m-0 font-['Newsreader'] text-base font-normal leading-6 text-color-azure-10-2">
          This notice explains the relationship. The current inventory lives
          with Subprocessors once that page is published.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 font-['Archivo'] text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Affiliates
        </div>
        <p className="!m-0 font-['Newsreader'] text-base font-normal leading-6 text-color-azure-10-2">
          Described only from an approved source. Group-wide sharing is not
          inferred from corporate structure.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 font-['Archivo'] text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Sharing you direct
        </div>
        <p className="!m-0 font-['Newsreader'] text-base font-normal leading-6 text-color-azure-10-2">
          Where an administrator or user controls a disclosure, the
          responsibility is described only from approved wording.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 font-['Archivo'] text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Legal and safety
        </div>
        <p className="!m-0 font-['Newsreader'] text-base font-normal leading-6 text-color-azure-10-2">
          The exact approved wording. There is no broad &quot;when required by
          law&quot; phrase beyond what the notice contains.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 font-['Archivo'] text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Selling or sharing for advertising
        </div>
        <p className="!m-0 font-['Newsreader'] text-base font-normal leading-6 text-color-azure-10-2">
          Jurisdiction-specific terms appear only where the approved notice
          defines them and their scope. Their absence here is not a denial.
        </p>
      </div>
    </div>
  </div>
</div>
          </SectionShell>

          {/* ========================================================
              07. TRANSFERS AND LOCATION
              ======================================================== */}

          <SectionShell
            id="transfers"
            title="International transfers and data location"
            badge={
              <StatusBadge>
                Plain language, not the legal text
              </StatusBadge>
            }
          >
           <div className="flex w-full flex-col items-start gap-5">
  {/* INTRO DESCRIPTION */}
  <div className="w-full max-w-[688px] border-b border-color-azure-83 pb-6">
    <p className="!m-0 font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-35-2 sm:text-base">
      Storage location is a factual claim with legal weight. It is never
      derived from where offices are or which providers are used.
    </p>
  </div>

  {/* TRANSFER AND LOCATION QUESTIONS */}
  <div className="w-full">
    <div className="mb-3 font-['Archivo'] text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
      Transfer and location questions
    </div>

    {/* Desktop table */}
    <div className="hidden w-full overflow-hidden md:block">
      <div className="grid grid-cols-[220px_minmax(0,1fr)]">
        {/* Header */}
        <div className="border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="font-['Archivo'] text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Question
          </div>
        </div>

        <div className="border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="font-['Archivo'] text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Current answer
          </div>
        </div>

        {/* Row 1 */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Where is data stored?
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            Answered only from an approved residency source. The current source
            does not establish it.
          </p>
        </div>

        {/* Row 2 */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Is data transferred internationally?
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            Answered from the approved transfer statement and its scope, once
            published.
          </p>
        </div>

        {/* Row 3 */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Which transfer mechanism applies?
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            Named only where a counsel-approved source defines it for the
            relevant context.
          </p>
        </div>

        {/* Row 4 */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Can a region be chosen?
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            Deployment capability is a product question, answered by product
            and trust documentation rather than inferred from privacy wording.
          </p>
        </div>

        {/* Row 5 */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="font-['Newsreader'] text-sm font-semibold leading-6 text-color-azure-10-2">
            Where are subprocessors located?
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 font-['Newsreader'] text-sm font-normal leading-6 text-color-azure-10-2">
            The Subprocessors page owns vendor locations once published.
          </p>
        </div>
      </div>
    </div>

    {/* Mobile cards */}
    <div className="flex w-full flex-col gap-px overflow-hidden bg-color-azure-83 md:hidden">
      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 font-['Archivo'] text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Where is data stored?
        </div>
        <p className="!m-0 font-['Newsreader'] text-base font-normal leading-6 text-color-azure-10-2">
          Answered only from an approved residency source. The current source
          does not establish it.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 font-['Archivo'] text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Is data transferred internationally?
        </div>
        <p className="!m-0 font-['Newsreader'] text-base font-normal leading-6 text-color-azure-10-2">
          Answered from the approved transfer statement and its scope, once
          published.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 font-['Archivo'] text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Which transfer mechanism applies?
        </div>
        <p className="!m-0 font-['Newsreader'] text-base font-normal leading-6 text-color-azure-10-2">
          Named only where a counsel-approved source defines it for the
          relevant context.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 font-['Archivo'] text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Can a region be chosen?
        </div>
        <p className="!m-0 font-['Newsreader'] text-base font-normal leading-6 text-color-azure-10-2">
          Deployment capability is a product question, answered by product and
          trust documentation rather than inferred from privacy wording.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 font-['Archivo'] text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Where are subprocessors located?
        </div>
        <p className="!m-0 font-['Newsreader'] text-base font-normal leading-6 text-color-azure-10-2">
          The Subprocessors page owns vendor locations once published.
        </p>
      </div>
    </div>
  </div>
</div>
          </SectionShell>

          {/* ========================================================
              08. RETENTION AND DELETION
              ======================================================== */}

          <SectionShell
            id="retention"
            title="Retention and deletion"
            badge={
              <StatusBadge>
                Plain language, not the legal text
              </StatusBadge>
            }
          >
            <div className="flex w-full flex-col items-start gap-5">
  {/* INTRO DESCRIPTION */}
  <div className="w-full max-w-[688px] border-b border-color-azure-83 pb-6">
    <p className="!m-0 text-sm font-normal leading-6 text-color-azure-35-2 sm:text-base">
      A retention period without its trigger and exceptions is misleading, so
      all three travel together.
    </p>
  </div>

  {/* RETENTION RULES */}
  <div className="w-full">
    <div className="mb-3 text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
      Retention rules
    </div>

    {/* Desktop table */}
    <div className="hidden w-full overflow-hidden md:block">
      <div className="grid grid-cols-[220px_minmax(0,1fr)]">
        <div className="border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Element
          </div>
        </div>

        <div className="border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Position
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Retention statement
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            The approved period or the criteria used to determine it. No period
            is invented, and open-ended wording is avoided where more precise
            approved detail exists.
          </p>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Trigger
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            The event that starts the period, where the source defines one.
          </p>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Scope
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Each rule is connected to the data categories, purposes and
            contexts it applies to.
          </p>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Deletion
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Described from the approved treatment. Deletion is not equated with
            immediate removal from backups unless the source says so.
          </p>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Exceptions
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Legal holds, disputes, security and compliance exceptions appear
            only where approved, with their scope intact.
          </p>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Your own deletion controls
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            What the product lets you delete is documented by the product. This
            notice states only the approved legal effect.
          </p>
        </div>
      </div>
    </div>

    {/* Mobile cards */}
    <div className="flex w-full flex-col gap-px overflow-hidden bg-color-azure-83 md:hidden">
      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Retention statement
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          The approved period or the criteria used to determine it. No period
          is invented, and open-ended wording is avoided where more precise
          approved detail exists.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Trigger
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          The event that starts the period, where the source defines one.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Scope
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Each rule is connected to the data categories, purposes and contexts
          it applies to.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Deletion
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Described from the approved treatment. Deletion is not equated with
          immediate removal from backups unless the source says so.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Exceptions
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Legal holds, disputes, security and compliance exceptions appear only
          where approved, with their scope intact.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Your own deletion controls
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          What the product lets you delete is documented by the product. This
          notice states only the approved legal effect.
        </p>
      </div>
    </div>
  </div>
</div>
          </SectionShell>

          {/* ========================================================
              09. SECURITY, DPA AND SUBPROCESSORS
              ======================================================== */}

          <SectionShell
            id="security"
            title="Security, DPA and subprocessors"
            badge={
              <StatusBadge>
                Plain language, not the legal text
              </StatusBadge>
            }
          >
          <div className="flex w-full flex-col items-start gap-5">
  {/* INTRO DESCRIPTION */}
  <div className="w-full max-w-[688px] border-b border-color-azure-83 pb-6">
    <p className="!m-0 text-sm font-normal leading-6 text-color-azure-35-2 sm:text-base">
      Three neighbouring subjects, each owned elsewhere. This notice explains
      the relationship and routes onward.
    </p>
  </div>

  {/* RELATED AUTHORITIES */}
  <div className="w-full">
    <div className="mb-3 text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
      Related authorities
    </div>

    {/* Desktop table */}
    <div className="hidden w-full overflow-hidden md:block">
      <div className="grid grid-cols-[220px_minmax(0,1fr)_176px]">
        {/* Header */}
        <div className="border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Subject
          </div>
        </div>

        <div className="border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Treatment here
          </div>
        </div>

        <div className="border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Owner
          </div>
        </div>

        {/* Security practices */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Security practices
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            The relationship between privacy and security, plus the approved
            route. No encryption, certification, monitoring or architecture
            claim is made.
          </p>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Security and trust destination
          </p>
        </div>

        {/* Contractual processing */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Contractual processing
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Explained as living in the Data Processing Addendum. Its clauses
            are never paraphrased here.
          </p>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Data Processing Addendum
          </p>
        </div>

        {/* Vendors */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Vendors
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Described as a category relationship. The current list is not
            duplicated.
          </p>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Subprocessors
          </p>
        </div>

        {/* Contractual use terms */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Contractual use terms
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Routed onward. This notice does not touch contract formation,
            warranties or liability.
          </p>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Terms of User
          </p>
        </div>

        {/* Statutory notices */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Statutory notices
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Routed onward once that destination is published.
          </p>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Legal Notices
          </p>
        </div>
      </div>
    </div>

    {/* Mobile cards */}
    <div className="flex w-full flex-col gap-px overflow-hidden bg-color-azure-83 md:hidden">
      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Security practices
        </div>

        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          The relationship between privacy and security, plus the approved
          route. No encryption, certification, monitoring or architecture
          claim is made.
        </p>

        <div className="mt-4 border-t border-color-azure-83 pt-3">
          <div className="mb-1 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Owner
          </div>
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Security and trust destination
          </p>
        </div>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Contractual processing
        </div>

        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Explained as living in the Data Processing Addendum. Its clauses are
          never paraphrased here.
        </p>

        <div className="mt-4 border-t border-color-azure-83 pt-3">
          <div className="mb-1 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Owner
          </div>
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Data Processing Addendum
          </p>
        </div>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Vendors
        </div>

        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Described as a category relationship. The current list is not
          duplicated.
        </p>

        <div className="mt-4 border-t border-color-azure-83 pt-3">
          <div className="mb-1 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Owner
          </div>
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Subprocessors
          </p>
        </div>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Contractual use terms
        </div>

        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Routed onward. This notice does not touch contract formation,
          warranties or liability.
        </p>

        <div className="mt-4 border-t border-color-azure-83 pt-3">
          <div className="mb-1 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Owner
          </div>
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Terms of User
          </p>
        </div>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Statutory notices
        </div>

        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Routed onward once that destination is published.
        </p>

        <div className="mt-4 border-t border-color-azure-83 pt-3">
          <div className="mb-1 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Owner
          </div>
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Legal Notices
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
          </SectionShell>

          {/* ========================================================
              10. SPECIAL TOPICS
              ======================================================== */}

          <SectionShell
            id="special-topics"
            title="Special topics"
            badge={
              <StatusBadge>
                Plain language, not the legal text
              </StatusBadge>
            }
          >
            <div className="flex w-full flex-col items-start gap-5">
  {/* INTRO DESCRIPTION */}
  <div className="w-full max-w-[688px] border-b border-color-azure-83 pb-6">
    <p className="!m-0 text-sm font-normal leading-6 text-color-azure-35-2 sm:text-base">
      These subjects attract assumptions, so each one states explicitly that
      nothing is inferred from common industry practice.
    </p>
  </div>

  {/* SPECIAL-TOPIC DISCLOSURES */}
  <div className="w-full">
    <div className="mb-3 text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
      Special-topic disclosures
    </div>

    {/* Desktop table */}
    <div className="hidden w-full overflow-hidden md:block">
      <div className="grid grid-cols-[220px_minmax(0,1fr)_176px]">
        {/* Header */}
        <div className="border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Topic
          </div>
        </div>

        <div className="border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Position
          </div>
        </div>

        <div className="border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            State
          </div>
        </div>

        {/* Children and minors */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Children and minors
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Published only where the approved notice defines an age scope or
            child-specific handling.
          </p>
        </div>

        <div className="flex items-start border-b border-color-azure-83 px-3.5 py-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 outline outline-1 outline-offset-[-1px] outline-color-orange-31">
            <span className="size-2.5 rounded-sm border border-color-orange-31" />
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-orange-31">
              Not established
            </span>
          </span>
        </div>

        {/* Special-category data */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Special-category data
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Only approved categories, purposes, restrictions and rights appear.
          </p>
        </div>

        <div className="flex items-start border-b border-color-azure-83 px-3.5 py-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 outline outline-1 outline-offset-[-1px] outline-color-orange-31">
            <span className="size-2.5 rounded-sm border border-color-orange-31" />
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-orange-31">
              Not established
            </span>
          </span>
        </div>

        {/* Biometrics */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Biometrics and identity verification
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Not inferred from authentication, anti-fraud or payment
            conventions.
          </p>
        </div>

        <div className="flex items-start border-b border-color-azure-83 px-3.5 py-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 outline outline-1 outline-offset-[-1px] outline-color-orange-31">
            <span className="size-2.5 rounded-sm border border-color-orange-31" />
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-orange-31">
              Not established
            </span>
          </span>
        </div>

        {/* Payment and financial account data */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Payment and financial account data
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            No storage or processing of card, bank or payment-instrument data
            is implied by the fact that this is a billing product.
          </p>
        </div>

        <div className="flex items-start border-b border-color-azure-83 px-3.5 py-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 outline outline-1 outline-offset-[-1px] outline-color-orange-31">
            <span className="size-2.5 rounded-sm border border-color-orange-31" />
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-orange-31">
              Not established
            </span>
          </span>
        </div>

        {/* Device, location and network data */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Device, location and network data
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Not inferred from ordinary web, fraud or payment practice.
          </p>
        </div>

        <div className="flex items-start border-b border-color-azure-83 px-3.5 py-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 outline outline-1 outline-offset-[-1px] outline-color-orange-31">
            <span className="size-2.5 rounded-sm border border-color-orange-31" />
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-orange-31">
              Not established
            </span>
          </span>
        </div>

        {/* Automated decisions */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Automated decisions and profiling
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Model training, automated decision-making, profiling and human
            review are not inferred. Any disclosure comes from an approved
            source.
          </p>
        </div>

        <div className="flex items-start border-b border-color-azure-83 px-3.5 py-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 outline outline-1 outline-offset-[-1px] outline-color-orange-31">
            <span className="size-2.5 rounded-sm border border-color-orange-31" />
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-orange-31">
              Not established
            </span>
          </span>
        </div>

        {/* Credit, fraud and risk data */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Credit, fraud and risk data
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Not inferred from common billing or financial workflows.
          </p>
        </div>

        <div className="flex items-start border-b border-color-azure-83 px-3.5 py-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 outline outline-1 outline-offset-[-1px] outline-color-orange-31">
            <span className="size-2.5 rounded-sm border border-color-orange-31" />
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-orange-31">
              Not established
            </span>
          </span>
        </div>
      </div>
    </div>

    {/* Mobile cards */}
    <div className="flex w-full flex-col gap-px overflow-hidden bg-color-azure-83 md:hidden">
      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Children and minors
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Published only where the approved notice defines an age scope or
          child-specific handling.
        </p>
        <div className="mt-4">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 outline outline-1 outline-offset-[-1px] outline-color-orange-31">
            <span className="size-2.5 rounded-sm border border-color-orange-31" />
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-orange-31">
              Not established
            </span>
          </span>
        </div>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Special-category data
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Only approved categories, purposes, restrictions and rights appear.
        </p>
        <div className="mt-4">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 outline outline-1 outline-offset-[-1px] outline-color-orange-31">
            <span className="size-2.5 rounded-sm border border-color-orange-31" />
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-orange-31">
              Not established
            </span>
          </span>
        </div>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Biometrics and identity verification
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Not inferred from authentication, anti-fraud or payment conventions.
        </p>
        <div className="mt-4">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 outline outline-1 outline-offset-[-1px] outline-color-orange-31">
            <span className="size-2.5 rounded-sm border border-color-orange-31" />
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-orange-31">
              Not established
            </span>
          </span>
        </div>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Payment and financial account data
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          No storage or processing of card, bank or payment-instrument data is
          implied by the fact that this is a billing product.
        </p>
        <div className="mt-4">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 outline outline-1 outline-offset-[-1px] outline-color-orange-31">
            <span className="size-2.5 rounded-sm border border-color-orange-31" />
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-orange-31">
              Not established
            </span>
          </span>
        </div>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Device, location and network data
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Not inferred from ordinary web, fraud or payment practice.
        </p>
        <div className="mt-4">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 outline outline-1 outline-offset-[-1px] outline-color-orange-31">
            <span className="size-2.5 rounded-sm border border-color-orange-31" />
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-orange-31">
              Not established
            </span>
          </span>
        </div>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Automated decisions and profiling
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Model training, automated decision-making, profiling and human review
          are not inferred. Any disclosure comes from an approved source.
        </p>
        <div className="mt-4">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 outline outline-1 outline-offset-[-1px] outline-color-orange-31">
            <span className="size-2.5 rounded-sm border border-color-orange-31" />
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-orange-31">
              Not established
            </span>
          </span>
        </div>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Credit, fraud and risk data
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Not inferred from common billing or financial workflows.
        </p>
        <div className="mt-4">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 outline outline-1 outline-offset-[-1px] outline-color-orange-31">
            <span className="size-2.5 rounded-sm border border-color-orange-31" />
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-orange-31">
              Not established
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>

  {/* READING THESE STATES */}
  <div className="w-full border-l-[3px] border-color-orange-31 bg-color-grey-96-9 px-5 py-4">
    <div className="flex w-full flex-col items-start gap-1">
      <div className="text-xs font-bold uppercase leading-5 tracking-wide text-color-orange-31">
        Reading these states
      </div>

      <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
        &quot;Not established&quot; means the approved source has not published a
        position. It is not a statement that the practice does not occur, and
        it is not a statement that it does.
      </p>
    </div>
  </div>
</div>
          </SectionShell>

          {/* ========================================================
              11. RIGHTS AND REQUESTS
              ======================================================== */}

          <SectionShell
            id="rights"
            title="Rights and requests"
            badge={
              <StatusBadge>
                Plain language, not the legal text
              </StatusBadge>
            }
          >
           <div className="flex w-full flex-col items-start gap-5">
  {/* INTRO DESCRIPTION */}
  <div className="w-full max-w-[688px] border-b border-color-azure-83 pb-6">
    <p className="!m-0 text-sm font-normal leading-6 text-color-azure-35-2 sm:text-base">
      Which rights apply depends on your jurisdiction, context and role. There
      is no universal list, so none is presented as one.
    </p>
  </div>

  {/* MAKING A PRIVACY REQUEST */}
  <div className="w-full outline outline-1 outline-offset-[-1px] outline-color-azure-10-2">
    {/* Header */}
    <div className="flex w-full flex-wrap items-center gap-4 bg-color-azure-10-2 px-5 py-3.5">
      <div className="text-base font-medium leading-7 text-color-white-solid">
        Making a privacy request
      </div>

      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 outline outline-1 outline-offset-[-1px] outline-color-orange-80">
        <div className="size-2.5 rounded-sm border border-color-orange-80" />
        <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-orange-80">
          Route unresolved
        </div>
      </div>
    </div>

    {/* Request details */}
    <div className="flex w-full flex-col gap-6 p-5">
      <div className="flex w-full flex-col gap-1">
        <div className="text-xs font-bold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Which rights apply
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Resolved from the approved jurisdiction and context records. Rights
          are not listed universally, and no right is promised beyond what the
          applicable law and notice establish.
        </p>
      </div>

      <div className="flex w-full flex-col gap-1">
        <div className="text-xs font-bold uppercase leading-5 tracking-wide text-color-azure-35-2">
          How to ask
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Through the approved request route, direct and with no unnecessary
          fields. A request never starts with a sales conversation.
        </p>
      </div>

      <div className="flex w-full flex-col gap-1">
        <div className="text-xs font-bold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Verification
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Described only where the approved process defines it. Identity
          documents are not collected on this page.
        </p>
      </div>

      <div className="flex w-full flex-col gap-1">
        <div className="text-xs font-bold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Timing
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Only counsel-approved timeframes appear, with their qualifiers.
          Statutory periods are not substituted from general knowledge.
        </p>
      </div>

      <div className="flex w-full flex-col gap-1">
        <div className="text-xs font-bold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Someone acting for you
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Authorised agents and representatives are covered where the approved
          source provides for them.
        </p>
      </div>

      <div className="flex w-full flex-col gap-1">
        <div className="text-xs font-bold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Complaints
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Escalation and regulator routes publish where they apply, with their
          jurisdictional conditions attached.
        </p>
      </div>
    </div>
  </div>

  {/* COOKIE CHOICES */}
  <div className="w-full border-l-[3px] border-color-cyan-21 bg-color-grey-96-10 px-5 py-4">
    <div className="flex w-full flex-col items-start gap-1">
      <div className="text-xs font-bold uppercase leading-5 tracking-wide text-color-cyan-21">
        Cookie choices are separate
      </div>

      <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
        Changing cookie and tracking preferences is not the same as exercising
        a legal right. Those controls live with the Cookie Policy and its
        settings once that page is published.
      </p>
    </div>
  </div>
</div>
          </SectionShell>

          {/* ========================================================
              12. COOKIES AND TRACKING
              ======================================================== */}

          <SectionShell
            id="cookies"
            title="Cookies and tracking"
            badge={
              <StatusBadge>
                Plain language, not the legal text
              </StatusBadge>
            }
          >
           <div className="flex w-full flex-col items-start gap-5">
  {/* INTRO DESCRIPTION */}
  <div className="w-full max-w-[688px] border-b border-color-azure-83 pb-6">
    <p className="!m-0 text-sm font-normal leading-6 text-color-azure-35-2 sm:text-base">
      This section explains the relationship only. Duplicating cookie detail
      here would let two documents drift apart.
    </p>
  </div>

  {/* COOKIE SUBJECTS AND THEIR OWNER */}
  <div className="w-full">
    <div className="mb-3 text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
      Cookie subjects and their owner
    </div>

    {/* Desktop table */}
    <div className="hidden w-full overflow-hidden md:block">
      <div className="grid grid-cols-[220px_minmax(0,1fr)]">
        {/* Header */}
        <div className="border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Subject
          </div>
        </div>

        <div className="border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Where it lives
          </div>
        </div>

        {/* Row 1 */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Categories, purposes, providers, duration
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            The Cookie Policy inventory, once published, is authoritative.
          </p>
        </div>

        {/* Row 2 */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Consent and preferences
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Cookie Settings performs the choice. No cookie controls are
            recreated in this notice.
          </p>
        </div>

        {/* Row 3 */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Browser privacy signals
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Answered only where approved sources define the support and its
            behaviour.
          </p>
        </div>

        {/* Row 4 */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Analytics and advertising technologies
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Neither their use nor their absence is inferred here. The cookie
            records answer this.
          </p>
        </div>
      </div>
    </div>

    {/* Mobile cards */}
    <div className="flex w-full flex-col gap-px overflow-hidden bg-color-azure-83 md:hidden">
      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Categories, purposes, providers, duration
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          The Cookie Policy inventory, once published, is authoritative.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Consent and preferences
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Cookie Settings performs the choice. No cookie controls are
          recreated in this notice.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Browser privacy signals
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Answered only where approved sources define the support and its
          behaviour.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Analytics and advertising technologies
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Neither their use nor their absence is inferred here. The cookie
          records answer this.
        </p>
      </div>
    </div>
  </div>
</div>
          </SectionShell>

          {/* ========================================================
              13. CHANGES AND CONTACT
              ======================================================== */}

          <SectionShell
            id="changes"
            title="Changes and contact"
            badge={
              <StatusBadge>
                Plain language, not the legal text
              </StatusBadge>
            }
          >
            <div className="flex w-full flex-col items-start gap-5">
  {/* INTRO DESCRIPTION */}
  <div className="w-full max-w-[688px] border-b border-color-azure-83 pb-6">
    <p className="!m-0 text-sm font-normal leading-6 text-color-azure-35-2 sm:text-base">
      Changes are published transparently rather than written over the
      previous text.
    </p>
  </div>

  {/* CHANGE AND CONTACT RULES */}
  <div className="w-full">
    <div className="mb-3 text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
      Change and contact rules
    </div>

    {/* Desktop table */}
    <div className="hidden w-full overflow-hidden md:block">
      <div className="grid grid-cols-[220px_minmax(0,1fr)]">
        {/* Header */}
        <div className="border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Element
          </div>
        </div>

        <div className="border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Position
          </div>
        </div>

        {/* Version history */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Version history
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Previous versions are archived with their effective periods and a
            link to what replaced them, where public history is approved.
          </p>
        </div>

        {/* Change summary */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Change summary
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            A plain-language summary publishes only where Legal approves it,
            and never substitutes for the full text.
          </p>
        </div>

        {/* Notice of material change */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Notice of material change
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            The channel and timing come from the approved policy. No email or
            banner obligation is invented.
          </p>
        </div>

        {/* Corrections */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Corrections
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            A correction is shown as a correction, with the prior version
            preserved rather than silently replaced.
          </p>
        </div>

        {/* Privacy contact */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Privacy contact
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            The approved contact record, including any data protection officer
            or representative where one applies. No address is published
            without authority.
          </p>
        </div>
      </div>
    </div>

    {/* Mobile cards */}
    <div className="flex w-full flex-col gap-px overflow-hidden bg-color-azure-83 md:hidden">
      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Version history
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          Previous versions are archived with their effective periods and a
          link to what replaced them, where public history is approved.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Change summary
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          A plain-language summary publishes only where Legal approves it, and
          never substitutes for the full text.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Notice of material change
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          The channel and timing come from the approved policy. No email or
          banner obligation is invented.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Corrections
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          A correction is shown as a correction, with the prior version
          preserved rather than silently replaced.
        </p>
      </div>

      <div className="bg-color-white-solid px-5 py-5">
        <div className="mb-2 text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
          Privacy contact
        </div>
        <p className="!m-0 text-base font-normal leading-6 text-color-azure-10-2">
          The approved contact record, including any data protection officer or
          representative where one applies. No address is published without
          authority.
        </p>
      </div>
    </div>
  </div>

  {/* PRIVACY CONTACT NOT YET PUBLISHED */}
  <div className="w-full bg-color-grey-99-9 px-6 py-8 outline outline-1 outline-offset-[-1px] outline-color-azure-66">
    <div className="flex w-full flex-col items-start gap-1.5">
      <h3 className="!m-0 text-base font-semibold leading-7 text-color-azure-10-2">
        Privacy contact not yet published
      </h3>

      <p className="!m-0 text-base font-normal leading-6 text-color-azure-25">
        The approved contact record publishes with the notice. Until then, no
        email, form or postal address appears here, because an incorrect route
        for a privacy request is worse than none.
      </p>
    </div>
  </div>
</div>
          </SectionShell>

          {/* ========================================================
              14. QUESTIONS
              ======================================================== */}

          <SectionShell
            id="questions"
            title="Questions"
            badge={
              <StatusBadge>
                Plain language, not the legal text
              </StatusBadge>
            }
          >
            <div className="flex w-full flex-col items-start gap-5">
  {/* INTRO */}
  <div className="w-full max-w-[688px] border-b border-color-azure-83 pb-6">
    <p className="!m-0 text-sm font-normal leading-6 text-color-azure-35-2 sm:text-base">
      Each answer keeps its scope and qualifiers. Where a source establishes
      nothing, the answer says that rather than answering no.
    </p>
  </div>

  {/* QUESTIONS */}
  <div className="w-full">
    {[
      {
        question: "What does this privacy policy cover?",
        answer:
          "This privacy notice covers the services, contexts, data categories, purposes, disclosures, retention rules and privacy rights established by the approved coverage records. It does not automatically cover every Zoiko service, website, entity or region unless the approved scope says so.",
      },
      {
        question: "What personal data is collected?",
        answer:
          "Personal data categories are published only from approved category records. No category is added based on what a billing platform would normally be expected to collect. If a category has not been approved for publication, this notice does not infer that the data is or is not handled.",
      },
      {
        question: "Why is personal data processed?",
        answer:
          "Personal data is processed only for purposes established by approved purpose records. Each purpose is connected to the applicable data categories and context. Legal bases are stated only where the approved notice establishes them.",
      },
      {
        question: "Is personal data sold or shared for advertising?",
        answer:
          "Any selling or sharing for advertising is described only where the approved notice defines the activity, its scope and the applicable jurisdiction. The absence of a published position is not treated as a denial that the practice occurs.",
      },
      {
        question: "Where is data stored?",
        answer:
          "Data location is answered only from an approved residency or transfer source. This notice does not infer storage location from company offices, service providers, infrastructure assumptions or the location of a particular business entity.",
      },
      {
        question: "How long is data kept?",
        answer:
          "Retention is based on approved retention rules, including the applicable period or criteria, trigger and scope. No retention period is invented. Deletion from active systems is also not automatically treated as immediate removal from backups unless the approved source says so.",
      },
      {
        question: "What privacy rights do I have?",
        answer:
          "The privacy rights available to you depend on your jurisdiction, context and role. Rights are therefore published only where the approved sources establish them. This notice does not present a universal list or promise a right beyond the applicable law and approved notice.",
      },
      {
        question: "How do I make a privacy request?",
        answer:
          "A privacy request should use the approved request route once that route is published. Verification, authorised representatives, response timing and escalation are described only where the approved process establishes them. An unresolved or unpublished contact route is not replaced with an invented email address or form.",
      },
      {
        question: "How will I know if this policy changes?",
        answer:
          "Changes are published transparently with the applicable version history and effective information where those records are approved. A plain-language change summary is provided only where Legal approves it. No email, banner or other notification method is promised unless the approved policy establishes that requirement.",
      },
    ].map((item, index) => (
      <QuestionItem
        key={item.question}
        question={item.question}
        answer={item.answer}
        defaultOpen={index === 0}
      />
    ))}
  </div>
</div>
          </SectionShell>

          {/* ========================================================
              15. RELATED DOCUMENTS
              ======================================================== */}

          <SectionShell
            id="related"
            title="Related documents"
            badge={
              <StatusBadge>
                Plain language, not the legal text
              </StatusBadge>
            }
          >
           <div className="flex w-full flex-col items-start gap-5">
  {/* INTRO */}
  <div className="w-full max-w-[688px] border-b border-color-azure-83 pb-6">
    <p className="!m-0 text-sm font-normal leading-6 text-color-azure-35-2 sm:text-base">
      The Legal Corporate sequence, with the current state of each
      destination.
    </p>
  </div>

  {/* LEGAL CORPORATE DESTINATIONS */}
  <div className="w-full">
    <div className="mb-3 text-xs font-normal uppercase leading-5 tracking-wide text-color-azure-35-2">
      Legal Corporate destinations
    </div>

    {/* Desktop table */}
    <div className="hidden w-full overflow-hidden md:block">
      <div className="grid grid-cols-[220px_minmax(0,1fr)_208px]">
        {/* Header */}
        <div className="border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Document
          </div>
        </div>

        <div className="border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            Authoritative for
          </div>
        </div>

        <div className="border-b border-color-azure-66 px-3.5 py-2.5">
          <div className="text-xs font-semibold uppercase leading-5 tracking-wide text-color-azure-35-2">
            State
          </div>
        </div>

        {/* Terms of User */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Terms of User
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Contractual rules governing use of the service.
          </p>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <StatusIndicator variant="approved">
            Approved
          </StatusIndicator>
        </div>

        {/* Privacy Policy */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Privacy Policy
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            How personal data is handled, and your rights over it.
          </p>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <StatusIndicator variant="current">
            This page
          </StatusIndicator>
        </div>

        {/* Cookie Policy */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Cookie Policy
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Cookie and tracker inventory, purposes, duration and consent.
          </p>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <StatusIndicator variant="pending">
            Not yet published
          </StatusIndicator>
        </div>

        {/* Acceptable Use Policy */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Acceptable Use Policy
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Responsible-use boundaries and reporting routes.
          </p>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <StatusIndicator variant="pending">
            Not yet published
          </StatusIndicator>
        </div>

        {/* Data Processing Addendum */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Data Processing Addendum
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Contractual processing terms for customer data.
          </p>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <StatusIndicator variant="pending">
            Not yet published
          </StatusIndicator>
        </div>

        {/* Subprocessors */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Subprocessors
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            The current vendor list and its change process.
          </p>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <StatusIndicator variant="pending">
            Not yet published
          </StatusIndicator>
        </div>

        {/* Legal Notices */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Legal Notices
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Entity and statutory notices.
          </p>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <StatusIndicator variant="pending">
            Not yet published
          </StatusIndicator>
        </div>

        {/* Sitemap */}
        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <div className="text-sm font-semibold leading-6 text-color-azure-10-2">
            Sitemap
          </div>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <p className="!m-0 text-sm font-normal leading-6 text-color-azure-10-2">
            Index of published destinations.
          </p>
        </div>

        <div className="border-b border-color-azure-83 px-3.5 py-3">
          <StatusIndicator variant="pending">
            Not yet published
          </StatusIndicator>
        </div>
      </div>
    </div>

    {/* Mobile cards */}
    <div className="flex w-full flex-col gap-px overflow-hidden bg-color-azure-83 md:hidden">
      <RelatedDocumentCard
        document="Terms of User"
        description="Contractual rules governing use of the service."
        state="Approved"
        variant="approved"
      />

      <RelatedDocumentCard
        document="Privacy Policy"
        description="How personal data is handled, and your rights over it."
        state="This page"
        variant="current"
      />

      <RelatedDocumentCard
        document="Cookie Policy"
        description="Cookie and tracker inventory, purposes, duration and consent."
        state="Not yet published"
        variant="pending"
      />

      <RelatedDocumentCard
        document="Acceptable Use Policy"
        description="Responsible-use boundaries and reporting routes."
        state="Not yet published"
        variant="pending"
      />

      <RelatedDocumentCard
        document="Data Processing Addendum"
        description="Contractual processing terms for customer data."
        state="Not yet published"
        variant="pending"
      />

      <RelatedDocumentCard
        document="Subprocessors"
        description="The current vendor list and its change process."
        state="Not yet published"
        variant="pending"
      />

      <RelatedDocumentCard
        document="Legal Notices"
        description="Entity and statutory notices."
        state="Not yet published"
        variant="pending"
      />

      <RelatedDocumentCard
        document="Sitemap"
        description="Index of published destinations."
        state="Not yet published"
        variant="pending"
      />
    </div>
  </div>

  {/* FOOTNOTE */}
  <div className="w-full max-w-[688px] pt-1">
    <p className="!m-0 text-sm font-normal leading-6 text-color-azure-35-2">
      Where a destination is not yet published, this page states that rather
      than linking to a substitute or writing a short version of its content
      here.
    </p>
  </div>
</div>
          </SectionShell>
        </div>
      </div>
    </main>
  );
}