"use client";

import Image from "next/image";
import Link from "next/link";

const candidates = [
  {
    invoice: "INV-2026-0409",
    status: "Reference match",
    type: "success",
    amount: "£6,120.00",
    confidence: 88,
    description: (
      <>
        Exact payment reference,{" "}
        <span className="font-medium text-slate-900 dark:text-white">
          amount equal
        </span>
        , value date within 2 days, customer matches payer identifier.
      </>
    ),
  },
  {
    invoice: "INV-2026-0412",
    status: "Amount only",
    type: "warning",
    amount: "£6,120.00",
    confidence: 54,
    description: (
      <>
        Same amount and customer, but{" "}
        <span className="font-medium text-slate-900 dark:text-white">
          no reference
        </span>{" "}
        and the value date sits outside the approved proximity window.
      </>
    ),
  },
  {
    invoice: "INV-2026-0388",
    status: "Weak",
    type: "neutral",
    amount: "£6,120.00",
    confidence: 22,
    description: (
      <>
        Amount matches but the document is{" "}
        <span className="font-medium text-slate-900 dark:text-white">
          already fully allocated
        </span>
        , so it is not eligible.
      </>
    ),
  },
];

const candidatePatterns = [
  {
    title: "One-to-one",
    description:
      "A single payment matched to a single document, the simplest and most common case.",
  },
  {
    title: "One-to-many",
    description:
      "One payment covering several documents, where that pattern is supported.",
  },
  {
    title: "Many-to-one",
    description:
      "Several payments contributing to a single document, where supported.",
  },
];

const resultTreatment = [
  {
    title: "Within threshold",
    description:
      "Automatic application, with the rule, evidence and confidence recorded.",
  },
  {
    title: "Below threshold",
    description:
      "Review required, with the proposal and every candidate presented.",
  },
  {
    title: "Ambiguous set",
    description:
      "Multiple viable candidates are all shown. No match is forced.",
  },
];

function StatusBadge({
  type,
  children,
}: {
  type: "success" | "warning" | "neutral";
  children: React.ReactNode;
}) {
  const styles = {
    success:
      "border-blue-500/20 bg-slate-50 text-blue-500 dark:border-blue-400/20 dark:bg-slate-800 dark:text-blue-400",
    warning:
      "border-orange-400/20 bg-orange-50 text-orange-500 dark:border-orange-400/20 dark:bg-orange-950/30 dark:text-orange-400",
    neutral:
      "border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400",
  };

  const symbols = {
    success: "✓",
    warning: "•",
    neutral: "–",
  };

  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-wider ${styles[type]}`}
    >
      <span className="mr-1.5">{symbols[type]}</span>
      {children}
    </span>
  );
}

function ConfidenceBar({
  value,
  type,
}: {
  value: number;
  type: "success" | "warning" | "neutral";
}) {
  const barStyles = {
    success: "bg-cyan-400",
    warning: "bg-orange-400",
    neutral: "bg-slate-400",
  };

  return (
    <div className="flex w-full items-center gap-2.5">
      <span className="w-16 shrink-0 text-[9px] font-normal uppercase leading-4 tracking-wider text-blue-500 dark:text-blue-400">
        Confidence
      </span>

      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div
          className={`h-full rounded-full ${barStyles[type]}`}
          style={{ width: `${value}%` }}
        />
      </div>

      <span className="w-7 shrink-0 font-mono text-xs text-slate-900 dark:text-white">
        {value}
      </span>
    </div>
  );
}

function InfoRows({
  rows,
}: {
  rows: {
    title: string;
    description: string;
  }[];
}) {
  return (
    <div className="w-full">
      {rows.map((row, index) => (
        <div
          key={row.title}
          className={`grid gap-4 py-3.5 sm:grid-cols-[145px_1fr] ${
            index !== rows.length - 1
              ? "border-b border-zinc-200 dark:border-slate-700"
              : ""
          }`}
        >
          <div className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">
            {row.title}
          </div>

          <div className="text-sm font-normal leading-6 text-slate-600 dark:text-slate-300">
            {row.description}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Matching() {
  return (
    <section className="w-full bg-white transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-9 px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24">

        {/* HEADER */}
        <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-16">

          {/* LEFT HEADER */}
          <div className="flex flex-1 flex-col items-start gap-5 pt-2.5 pb-5">

            {/* Section label */}
            <div className="flex items-center gap-2.5">
              <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

              <span className="text-xs font-medium uppercase leading-4 tracking-wider text-blue-500 dark:text-blue-400">
                Matching
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[640px] text-[40px] font-medium leading-[1.1] tracking-tight text-slate-900 sm:text-[48px] sm:leading-[1.12] dark:text-white">
              Use clear evidence and
              <br className="hidden sm:block" />
              review when a match is
              <br className="hidden sm:block" />
              uncertain.
            </h2>
          </div>

          {/* RIGHT HEADER */}
          <div className="w-full max-w-[530px] flex-1">
            <p className="text-base font-normal leading-7 text-slate-600 sm:leading-8 dark:text-slate-300">
              Ambiguity is shown, not resolved quietly. Automatic application
              happens only inside approved thresholds; everything else waits
              for a person.
            </p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid w-full gap-12 pt-4 lg:grid-cols-2 lg:gap-16">

          {/* LEFT - PRODUCT VIEW */}
          <div className="flex w-full flex-col items-start gap-3">

            {/* Product badge */}
            <div className="flex h-7 items-center rounded-full border border-emerald-500/10 bg-white/70 px-3 dark:border-emerald-400/10 dark:bg-slate-900/70">
              <span className="mr-2 h-[5px] w-[5px] rounded-sm bg-blue-500" />

              <span className="text-[10px] font-normal uppercase leading-4 tracking-wider text-blue-500 dark:text-blue-400">
                Illustrative product view
              </span>
            </div>

            {/* Product card */}
            <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0px_4px_14px_rgba(14,33,27,0.04)] dark:border-slate-700 dark:bg-slate-900">

              {/* Product header */}
              <div className="flex flex-wrap items-center gap-2.5 border-b border-zinc-200 bg-[#f7f7f7] px-4 py-3.5 dark:border-slate-700 dark:bg-slate-800">
                <div className="h-2 w-2 shrink-0 rounded-sm bg-blue-500" />

                <span className="min-w-0 flex-1 text-xs font-normal uppercase leading-4 tracking-wider text-slate-600 dark:text-slate-300">
                  Match candidates · PMT-99C08 · £6,120.00
                </span>

                <StatusBadge type="warning">
                  Review required
                </StatusBadge>
              </div>

              {/* Candidates */}
              {candidates.map((candidate, index) => (
                <div
                  key={candidate.invoice}
                  className={`flex flex-col gap-3 px-4 py-4 ${
                    index !== candidates.length - 1
                      ? "border-b border-zinc-200 dark:border-slate-700"
                      : ""
                  }`}
                >
                  {/* Invoice row */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-sm font-medium text-slate-900 dark:text-white">
                      {candidate.invoice}
                    </span>

                    <StatusBadge
                      type={
                        candidate.type as "success" | "warning" | "neutral"
                      }
                    >
                      {candidate.status}
                    </StatusBadge>

                    <span className="ml-auto font-mono text-sm text-slate-600 dark:text-slate-300">
                      {candidate.amount}
                    </span>
                  </div>

                  {/* Confidence */}
                  <ConfidenceBar
                    value={candidate.confidence}
                    type={
                      candidate.type as "success" | "warning" | "neutral"
                    }
                  />

                  {/* Description */}
                  <p className="text-xs font-normal leading-5 text-slate-600 sm:text-sm dark:text-slate-300">
                    {candidate.description}
                  </p>
                </div>
              ))}

              {/* Review notice */}
              <div className="border-t border-zinc-200 bg-orange-50 px-4 py-3.5 dark:border-slate-700 dark:bg-orange-950/20">
                <p className="text-sm font-normal leading-5 text-orange-700 dark:text-orange-300">
                  Two candidates share the same amount. Threshold not met, so
                  no automatic allocation. Routed to a reviewer with all
                  candidates visible.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - CANDIDATE PATTERNS */}
          <div className="flex w-full flex-col items-start gap-1.5">

            {/* Candidate patterns */}
            <h3 className="text-lg font-semibold leading-6 text-slate-900 dark:text-white">
              Candidate patterns
            </h3>

            <InfoRows rows={candidatePatterns} />

            {/* Result treatment */}
            <h3 className="pt-6 text-lg font-semibold leading-6 text-slate-900 dark:text-white">
              How the result is treated
            </h3>

            <InfoRows rows={resultTreatment} />
          </div>
        </div>

        {/* MATCHING IMAGE */}
        <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-slate-700 dark:bg-slate-900">
          <Image
            src="/images/payments-and-reconcilliation/matching.png"
            alt="Payment matching workflow"
            width={1116}
            height={474}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        {/* CONFIDENCE BOUNDARY */}
        <div className="flex w-full flex-col items-start gap-2 rounded-r-2xl border-l-[3px] border-blue-500 bg-[#f7f7f7] px-6 py-7 sm:px-7 dark:bg-slate-900">

          <span className="text-[10px] font-normal uppercase leading-4 tracking-wider text-blue-500 dark:text-blue-400">
            Confidence boundary
          </span>

          <p className="max-w-[850px] text-base font-normal leading-7 text-slate-900 dark:text-slate-200">
            Confidence is operational evidence, not proof of payer identity or
            intent. Ambiguous candidate sets are never hidden, and a match is
            never silently forced to clear a queue.
          </p>
        </div>

        {/* CTA */}
        <div className="flex w-full justify-center">
          <Link
            href="/automation-and-workflows"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-950 px-5 py-2.5 text-base font-normal leading-6 text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Explore Automation &amp; Workflows
          </Link>
        </div>
      </div>
    </section>
  );
}