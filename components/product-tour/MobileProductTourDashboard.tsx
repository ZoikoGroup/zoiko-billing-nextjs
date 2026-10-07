"use client";

import { useState } from "react";
import Link from "next/link";

interface ChapterData {
  number: number;
  id: string;
  shortTitle: string;
  fullTitle: string;
  description: string;
  contextObject: string;
  contextObjectId: string;
  policyContext: string;
  authority: string;
  evidence: string;
  history: string;
  scope: string;
  demonstrates: string;
  doesNotClaim: string;
  sourceOwner: string;
  verifyNext: string;
  currentness: string;
}

const chapters: ChapterData[] = [
  {
    number: 1,
    id: "01",
    shortTitle: "Control model",
    fullTitle: "Governed billing control model",
    description:
      "Introduces the operating grammar used throughout the tour: context or object, then policy or decision context, then authority, then action or state, then evidence.",
    contextObject: "Example billing object",
    contextObjectId: "[specimen_id]",
    policyContext: "Specimen policy card — no actual rules",
    authority: "Generic owner and reviewer role",
    evidence: "Specimen source reference",
    history: "Illustrative change lineage; timestamps marked specimen",
    scope: "[scope_label]",
    demonstrates:
      "How billing decisions can remain attached to ownership, effective state and evidence.",
    doesNotClaim:
      "That a specific workflow, approval engine, role model or audit implementation is live.",
    sourceOwner: "Design recommendation — no governed source attached",
    verifyNext: "Product - a demo discussion",
    currentness:
      "Not shown — no source supplies a review date, and dates are never fabricated.",
  },
  {
    number: 2,
    id: "02",
    shortTitle: "Commercial",
    fullTitle: "Commercial contract & pricing rules",
    description:
      "Displays commercial terms, tier boundaries, and pricing structures governed by policy.",
    contextObject: "Contract item",
    contextObjectId: "[tier_specimen]",
    policyContext: "Commercial terms card — illustrative tiers",
    authority: "Commercial operations owner",
    evidence: "Contract source clause reference",
    history: "Draft amendment schedule specimen",
    scope: "[commercial_scope]",
    demonstrates:
      "Clear separation of commercial agreements from raw metering pipelines.",
    doesNotClaim:
      "Legal advice or binding pricing commitments in live customer contracts.",
    sourceOwner: "Commercial governance design guidelines",
    verifyNext: "Commercial pricing schedule documentation",
    currentness: "Reviewed at standard product release cadences.",
  },
  {
    number: 3,
    id: "03",
    shortTitle: "Payments & global",
    fullTitle: "Cross-border settlement & payment flows",
    description:
      "Walkthrough of payment rail boundaries, FX conversion checkpoints, and settlement states.",
    contextObject: "Payment rail transaction",
    contextObjectId: "[rail_tx_specimen]",
    policyContext: "Settlement route policy — illustrative",
    authority: "Treasury and payment operations lead",
    evidence: "Payment network receipt specimen",
    history: "Multi-currency routing ledger entry",
    scope: "[global_settlement]",
    demonstrates:
      "Deterministic routing posture before downstream gateway submission.",
    doesNotClaim:
      "Execution of money transmission or regulatory banking authorization.",
    sourceOwner: "Treasury operating standard guide",
    verifyNext: "Payment rail connectivity documentation",
    currentness: "Periodic ledger consistency reviews.",
  },
  {
    number: 4,
    id: "04",
    shortTitle: "Tax & compliance",
    fullTitle: "Jurisdictional tax determination & filing",
    description:
      "Examines tax calculation pipelines, address validation, and reporting generation.",
    contextObject: "Tax calculation manifest",
    contextObjectId: "[tax_rule_04]",
    policyContext: "Jurisdiction table — illustrative tax codes",
    authority: "Tax compliance manager",
    evidence: "Authoritative tax rate lookup log",
    history: "Effective-dated rate change record",
    scope: "[tax_jurisdiction]",
    demonstrates:
      "Separation of calculation logic from statutory liability reporting.",
    doesNotClaim:
      "Formal tax advice or indemnification of tax return filings.",
    sourceOwner: "ZoikoTax Global Product Charter",
    verifyNext: "Tax compliance documentation",
    currentness: "Statutory rate tables verified annually.",
  },
  {
    number: 5,
    id: "05",
    shortTitle: "Exceptions",
    fullTitle: "Discrepancy resolution & exception holding",
    description:
      "Governs handling of unrated events, rejected invoices, and hold triggers.",
    contextObject: "Discrepancy queue ticket",
    contextObjectId: "[exception_token]",
    policyContext: "Hold policy card — quarantine conditions",
    authority: "Operations escalation supervisor",
    evidence: "Pipeline rejection trace message",
    history: "Quarantine hold log",
    scope: "[exception_queue]",
    demonstrates:
      "Strict isolation of disputed records without halting clean pipelines.",
    doesNotClaim:
      "Automated legal indemnification for unresolved dispute claims.",
    sourceOwner: "Operations control runbook",
    verifyNext: "Exception resolution paths",
    currentness: "Continuous queue review policy.",
  },
  {
    number: 6,
    id: "06",
    shortTitle: "Integrations",
    fullTitle: "Integration contract & boundary handoffs",
    description:
      "Specifies data payload schemas, webhook guarantees, and ERP sync boundaries.",
    contextObject: "Sync handoff event",
    contextObjectId: "[sync_payload_specimen]",
    policyContext: "Outbound schema contract — payload definition",
    authority: "Enterprise integration engineer",
    evidence: "Webhook delivery attempt signature",
    history: "Payload retry and replay audit log",
    scope: "[integration_boundary]",
    demonstrates:
      "Idempotent delivery guarantees and payload signature verification.",
    doesNotClaim:
      "Compatibility with uncertified legacy proprietary protocols.",
    sourceOwner: "Platform API governance team",
    verifyNext: "Developer integration guide",
    currentness: "API version contract active.",
  },
  {
    number: 7,
    id: "07",
    shortTitle: "Evidence & history",
    fullTitle: "Immutable audit evidence & change lineage",
    description:
      "Verifies append-only journal entries, cryptographic hashing, and export integrity.",
    contextObject: "Audit ledger record",
    contextObjectId: "[ledger_hash_specimen]",
    policyContext: "Retention policy card — 7-year retention",
    authority: "Chief Compliance Officer & internal auditor",
    evidence: "Cryptographic merkle root block hash",
    history: "Permanent immutable ledger append",
    scope: "[audit_evidence]",
    demonstrates:
      "Full traceability from customer trigger to finalized ledger row.",
    doesNotClaim:
      "Substitution for independent third-party statutory audit sign-off.",
    sourceOwner: "Zoiko Trust & Verification Architecture",
    verifyNext: "Trust Center & Compliance documentation",
    currentness: "Quarterly attestation cycle.",
  },
];

export default function MobileProductTourDashboard() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [textOnlyMode, setTextOnlyMode] = useState(false);
  const [visitedSet, setVisitedSet] = useState<Set<number>>(new Set([1]));

  const current = chapters[activeChapterIndex];

  const handleSelectChapter = (index: number) => {
    setActiveChapterIndex(index);
    setVisitedSet((prev) => new Set([...prev, chapters[index].number]));
  };

  const handleNext = () => {
    if (activeChapterIndex < chapters.length - 1) {
      handleSelectChapter(activeChapterIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (activeChapterIndex > 0) {
      handleSelectChapter(activeChapterIndex - 1);
    }
  };

  const handleRestart = () => {
    setActiveChapterIndex(0);
    setVisitedSet(new Set([1]));
  };

  return (
    <div className="block w-full font-[family-name:var(--font-inter)] text-slate-900 lg:hidden">
      {/* 1. BREADCRUMBS */}
      <div className="flex items-center gap-1.5 px-4 pt-4 text-[11px] text-slate-500 sm:px-6">
        <Link href="/" className="hover:text-slate-900">
          Home
        </Link>
        <span>/</span>
        <Link href="/product" className="hover:text-slate-900">
          Product
        </Link>
        <span>/</span>
        <span className="font-semibold text-slate-900">Product Tour</span>
      </div>

      {/* 2. MOBILE HERO HEADER */}
      <div className="px-4 pt-6 pb-2 sm:px-6">
        {/* Eyebrow */}
        <div className="mb-3 flex items-center gap-2">
          <span className="h-0.5 w-5 bg-[#1D70F5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7890b2]">
            Product Tour
          </span>
        </div>

        {/* Heading */}
        <h1 className="!font-[family-name:var(--font-jakarta)] !m-0 text-[26px] font-extrabold !leading-[1.15] !tracking-[-0.03em] text-[#091127] sm:text-[32px]">
          Seven chapters,{" "}
          <span className="text-[#1D70F5]">
            each labelled with what it isn&apos;t.
          </span>
        </h1>

        {/* Description */}
        <p className="!m-0 mt-3 text-xs leading-relaxed text-[#5d7192] sm:text-sm">
          A walkthrough of the operating grammar behind governed billing &mdash;
          context, policy, authority, state, evidence. Every scene is a
          specimen, says so in a label you cannot miss, and names the claim it is
          not making.
        </p>

        {/* Buttons / CTA row */}
        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("mobile-tour-console");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-full bg-[#1D70F5] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition active:scale-95"
          >
            Start the tour
          </button>

          <Link
            href="#proof-cards"
            className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 shadow-sm transition active:scale-95"
          >
            Proof card contract
          </Link>

          <Link
            href="/book-demo"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D70F5] transition hover:underline"
          >
            <span>Book a live demo</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Status Callout Pill Box */}
        <div className="mt-5 rounded-xl border-l-2 border-[#1D70F5] bg-white p-3.5 shadow-sm">
          <p className="!m-0 text-[11px] leading-relaxed text-[#5d7192]">
            Illustrative throughout. Visiting a chapter records that it was
            opened &mdash; nothing more.
          </p>
        </div>

        {/* Direct Answer Box */}
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
            Direct Answer
          </span>
          <p className="!m-0 mt-2 text-xs leading-relaxed text-slate-700">
            <strong className="font-semibold text-slate-900">
              A product tour is the surface where a prospect most readily
              converts a picture into a promise.
            </strong>{" "}
            This one is built so that conversion is hard: each scene shows a
            specimen interface, carries a truth label in the open, and is
            followed immediately by a proof card naming both what the concept
            demonstrates and{" "}
            <strong className="font-semibold text-slate-900">
              what no part of the scene establishes. The operating grammar is
              the product being shown
            </strong>{" "}
            &mdash; context, policy or decision, authority, state, evidence &mdash;
            not any specific workflow or engine.
          </p>
        </div>

        {/* Warning / Placement Rule Callout */}
        <div className="mt-4 rounded-2xl border border-rose-200/90 bg-[#fff5f5] p-5">
          <p className="!m-0 text-xs leading-relaxed text-[#9f1239]">
            <strong>
              &ldquo;Do-not-claim text cannot be hidden behind a consent wall or
              a marketing CTA&rdquo; is a placement rule, and placement is where
              this kind of honesty usually fails.
            </strong>{" "}
            The disclaimer exists in most tours; it sits under a fold, inside a
            tooltip, or after the demo booking prompt.{" "}
            <strong>
              Here the exclusion renders in the proof card immediately after the
              scene, in normal reading order on mobile
            </strong>{" "}
            &mdash; in the same visual weight as the claim it qualifies.
          </p>
        </div>
      </div>

      {/* 3. MOBILE TOUR CONSOLE */}
      <div id="mobile-tour-console" className="px-4 pt-10 pb-12 sm:px-6">
        {/* Eyebrow */}
        <div className="mb-2 flex items-center justify-center gap-2">
          <span className="h-0.5 w-5 bg-[#1D70F5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7890b2]">
            The Tour
          </span>
          <span className="h-0.5 w-5 bg-[#1D70F5]" />
        </div>

        {/* Heading */}
        <h2 className="!font-[family-name:var(--font-jakarta)] !m-0 text-center text-[22px] font-extrabold !leading-[1.2] !tracking-[-0.03em] text-[#091127] sm:text-[26px]">
          Jump to any chapter. There is no forced sequence.
        </h2>

        {/* Subtitle */}
        <p className="!m-0 mt-2 text-center text-xs leading-relaxed text-[#5d7192]">
          Progress is descriptive &mdash;{" "}
          <strong className="font-semibold text-slate-900">
            Chapter {current.number} of 7
          </strong>
          , never a completion score. Text-only mode gives the full equivalent
          content without the specimen interface.
        </p>

        {/* Main Console Card Container */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          {/* Top Bar: Progress counter & Controls */}
          <div className="flex flex-col gap-3 pb-3 border-b border-slate-100 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-slate-700">
              <strong className="font-bold text-slate-900">
                Chapter {current.number} of 7
              </strong>{" "}
              <span className="text-slate-400">
                &middot; In progress &middot; {visitedSet.size} of 7 visited
                (visited means opened, not understood)
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <button
                type="button"
                onClick={() => setTextOnlyMode((prev) => !prev)}
                className={`rounded-lg border px-2.5 py-1 text-[11px] font-semibold transition ${
                  textOnlyMode
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {textOnlyMode ? "Specimen mode" : "Text-only mode"}
              </button>
              <button
                type="button"
                onClick={handlePrevious}
                disabled={activeChapterIndex === 0}
                className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={activeChapterIndex === chapters.length - 1}
                className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40"
              >
                Next
              </button>
              <button
                type="button"
                onClick={handleRestart}
                className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:bg-slate-100"
              >
                Restart
              </button>
            </div>
          </div>

          {/* 7 Chapter Select Pill Buttons */}
          <div className="mt-4 flex flex-wrap gap-2">
            {chapters.map((ch, idx) => {
              const isSelected = idx === activeChapterIndex;
              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => handleSelectChapter(idx)}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold transition ${
                    isSelected
                      ? "border border-blue-500 bg-blue-50/80 text-blue-700 shadow-sm"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  <span className="text-[10px] text-slate-400">{ch.id}</span>
                  <span>{ch.shortTitle}</span>
                  {isSelected && (
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Current Chapter Title & Concept Tag */}
          <div className="mt-6">
            <div className="inline-flex items-center gap-2">
              <span className="rounded bg-purple-100 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-purple-700">
                Illustrative Concept
              </span>
              <span className="text-xs text-slate-400">
                Chapter {current.number} of 7
              </span>
            </div>

            <h3 className="!font-[family-name:var(--font-jakarta)] !m-0 mt-2 text-lg font-extrabold text-[#091127]">
              {current.fullTitle}
            </h3>

            <p className="!m-0 mt-1.5 text-xs leading-relaxed text-[#5d7192]">
              {current.description}
            </p>
          </div>

          {/* SPECIMEN INTERFACE CARD (Unless text-only mode) */}
          {!textOnlyMode ? (
            <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-[#fbfcfd]">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-200/80 bg-white px-3.5 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-slate-300" />
                  <span className="h-2 w-2 rounded-full bg-slate-300" />
                  <span className="h-2 w-2 rounded-full bg-slate-300" />
                  <span className="ml-1 text-[11px] font-semibold text-slate-600">
                    Specimen interface
                  </span>
                </div>
                <span className="rounded bg-purple-50 px-2 py-0.5 text-[10px] font-bold text-purple-600">
                  Illustrative - not live
                </span>
              </div>

              {/* Grid of Fields */}
              <div className="grid grid-cols-1 gap-3.5 p-4 sm:grid-cols-2">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Context Object
                  </span>
                  <div className="mt-0.5 text-xs text-slate-800">
                    {current.contextObject}{" "}
                    <span className="rounded bg-purple-100/70 px-1.5 py-0.5 font-mono text-[10px] text-purple-700">
                      {current.contextObjectId}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Policy / Decision Context
                  </span>
                  <p className="!m-0 mt-0.5 text-xs text-slate-800">
                    {current.policyContext}
                  </p>
                </div>

                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Authority
                  </span>
                  <p className="!m-0 mt-0.5 text-xs text-slate-800">
                    {current.authority}
                  </p>
                </div>

                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Evidence
                  </span>
                  <p className="!m-0 mt-0.5 text-xs text-slate-800">
                    {current.evidence}
                  </p>
                </div>

                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    History
                  </span>
                  <p className="!m-0 mt-0.5 text-xs text-slate-800">
                    {current.history}
                  </p>
                </div>

                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Scope
                  </span>
                  <div className="mt-0.5">
                    <span className="rounded bg-purple-100/70 px-1.5 py-0.5 font-mono text-[10px] text-purple-700">
                      {current.scope}
                    </span>
                  </div>
                </div>
              </div>

              {/* Conceptual Lifecycle */}
              <div className="flex flex-wrap items-center gap-1.5 border-t border-slate-200/80 bg-white px-3.5 py-2.5">
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Conceptual Lifecycle
                </span>
                <span className="rounded bg-purple-50 px-2 py-0.5 text-[10px] font-semibold text-purple-700">
                  &bull; Draft
                </span>
                <span className="rounded bg-purple-50 px-2 py-0.5 text-[10px] font-semibold text-purple-700">
                  &bull; Review needed
                </span>
                <span className="rounded bg-purple-50 px-2 py-0.5 text-[10px] font-semibold text-purple-700">
                  &bull; Approved
                </span>
                <span className="rounded bg-purple-50 px-2 py-0.5 text-[10px] font-semibold text-purple-700">
                  &bull; Effective
                </span>
                <span className="rounded bg-purple-50 px-2 py-0.5 text-[10px] font-semibold text-purple-700">
                  &bull; Superseded
                </span>
              </div>
            </div>
          ) : (
            <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50/50 p-4 text-xs text-slate-700">
              <strong className="font-semibold text-blue-900">
                Text-Only Equivalent Specimen:
              </strong>
              <p className="!m-0 mt-2 leading-relaxed">
                Operating object: {current.contextObject} ({current.contextObjectId}). Governed by {current.policyContext} under authority of {current.authority}. Attached evidence: {current.evidence}. Scope: {current.scope}.
              </p>
            </div>
          )}

          {/* SCENE PROOF CARD (Blue Border Card) */}
          <div
            id="proof-cards"
            className="mt-5 overflow-hidden rounded-xl border-2 border-[#1D70F5] bg-white shadow-sm"
          >
            {/* Header */}
            <div className="bg-[#eef5ff] px-4 py-2 border-b border-blue-200/80">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1D70F5]">
                Scene Proof Card
              </span>
            </div>

            {/* Content List */}
            <div className="divide-y divide-slate-100 p-4 text-xs space-y-3.5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Truth label
                </span>
                <div className="mt-1">
                  <span className="rounded bg-purple-100 px-2 py-0.5 text-[10px] font-extrabold text-purple-700">
                    Illustrative Concept
                  </span>
                </div>
              </div>

              <div className="pt-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Demonstrates
                </span>
                <p className="!m-0 mt-0.5 text-xs leading-relaxed text-slate-800">
                  {current.demonstrates}
                </p>
              </div>

              {/* Does not claim - Highlighted in Rose */}
              <div className="rounded-lg bg-[#fff5f6] p-3 border border-rose-200">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#be123c]">
                  Does not claim
                </span>
                <p className="!m-0 mt-0.5 text-xs font-semibold leading-relaxed text-[#9f1239]">
                  {current.doesNotClaim}
                </p>
              </div>

              <div className="pt-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Source / owner
                </span>
                <p className="!m-0 mt-0.5 text-xs leading-relaxed text-slate-700">
                  {current.sourceOwner}
                </p>
              </div>

              <div className="pt-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Verify next
                </span>
                <p className="!m-0 mt-0.5 text-xs leading-relaxed text-slate-700">
                  {current.verifyNext}
                </p>
              </div>

              <div className="pt-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Currentness
                </span>
                <p className="!m-0 mt-0.5 text-xs leading-relaxed text-slate-400">
                  {current.currentness}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
