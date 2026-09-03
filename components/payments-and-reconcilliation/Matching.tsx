"use client";

import Image from "next/image";

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
        <span className="font-medium text-[#091127]">amount equal</span>,
        value date within 2 days, customer matches payer identifier.
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
        <span className="font-medium text-[#091127]">no reference</span> and
        the value date sits outside the approved proximity window.
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
        <span className="font-medium text-[#091127]">
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
    success: "border-[#dce7f5] bg-[#f7f9fc] text-[#4b6f9f]",
    warning: "border-[#f3dfc8] bg-[#fff8ef] text-[#b87532]",
    neutral: "border-[#dfe5ee] bg-[#f7f8fa] text-[#7890b2]",
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
    success: "bg-[#7890b2]",
    warning: "bg-[#c9965b]",
    neutral: "bg-[#aeb9c9]",
  };

  return (
    <div className="flex w-full items-center gap-2.5">
      <span className="w-16 shrink-0 text-[9px] font-bold uppercase leading-4 tracking-wider text-[#7890b2]">
        Confidence
      </span>

      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#e7ebf1]">
        <div
          className={`h-full rounded-full ${barStyles[type]}`}
          style={{ width: `${value}%` }}
        />
      </div>

      <span className="w-7 shrink-0 font-mono text-xs text-[#091127]">
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
          className={`
            grid
            gap-4
            py-3.5

            sm:grid-cols-[145px_1fr]

            ${
              index !== rows.length - 1
                ? "border-b border-[#edf0f4]"
                : ""
            }
          `}
        >
          <div className="text-sm font-semibold leading-6 text-[#091127]">
            {row.title}
          </div>

          <div className="text-sm font-normal leading-6 text-[#5d7192]">
            {row.description}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Matching() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

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
            items-center
            gap-10

            sm:gap-12

            md:gap-14
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[780px]
              flex-col
              items-center
              gap-4
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Matching
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[760px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              Use clear evidence and review when a match is uncertain.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[720px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Ambiguity is shown, not resolved quietly. Automatic application
              happens only inside approved thresholds; everything else waits
              for a person.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div
            className="
              grid
              w-full
              items-start
              gap-8

              lg:grid-cols-2
              lg:gap-10

              xl:gap-12
            "
          >
            {/* LEFT - PRODUCT VIEW */}
            <div className="flex w-full flex-col items-start gap-3">
              {/* PRODUCT BADGE */}
              <div
                className="
                  flex
                  h-7
                  items-center
                  rounded-full
                  border
                  border-[#dfe5ee]
                  bg-[#f7f8fa]
                  px-3
                "
              >
                <span className="mr-2 h-[5px] w-[5px] rounded-sm bg-[#7890b2]" />

                <span className="text-[10px] font-bold uppercase leading-4 tracking-wider text-[#7890b2]">
                  Illustrative product view
                </span>
              </div>

              {/* PRODUCT CARD */}
              <div
                className="
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* PRODUCT HEADER */}
                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-2.5
                    border-b
                    border-[#dfe5ee]
                    bg-[#fafbfc]
                    px-4
                    py-3.5
                  "
                >
                  <div className="h-2 w-2 shrink-0 rounded-sm bg-[#7890b2]" />

                  <span className="min-w-0 flex-1 text-xs font-normal uppercase leading-4 tracking-wider text-[#5d7192]">
                    Match candidates · PMT-99C08 · £6,120.00
                  </span>

                  <StatusBadge type="warning">
                    Review required
                  </StatusBadge>
                </div>

                {/* CANDIDATES */}
                {candidates.map((candidate, index) => (
                  <div
                    key={candidate.invoice}
                    className={`
                      flex
                      flex-col
                      gap-3
                      px-4
                      py-4

                      ${
                        index !== candidates.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* INVOICE ROW */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-sm font-medium text-[#091127]">
                        {candidate.invoice}
                      </span>

                      <StatusBadge
                        type={
                          candidate.type as
                            | "success"
                            | "warning"
                            | "neutral"
                        }
                      >
                        {candidate.status}
                      </StatusBadge>

                      <span className="ml-auto font-mono text-sm text-[#5d7192]">
                        {candidate.amount}
                      </span>
                    </div>

                    {/* CONFIDENCE */}
                    <ConfidenceBar
                      value={candidate.confidence}
                      type={
                        candidate.type as
                          | "success"
                          | "warning"
                          | "neutral"
                      }
                    />

                    {/* DESCRIPTION */}
                    <p className="!m-0 text-xs font-normal leading-5 text-[#5d7192] sm:text-sm">
                      {candidate.description}
                    </p>
                  </div>
                ))}

                {/* REVIEW NOTICE */}
                <div className="border-t border-[#dfe5ee] bg-[#fff8ef] px-4 py-3.5">
                  <p className="!m-0 text-sm font-normal leading-5 text-[#9a642f]">
                    Two candidates share the same amount. Threshold not met,
                    so no automatic allocation. Routed to a reviewer with all
                    candidates visible.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT - CANDIDATE PATTERNS */}
            <div className="flex w-full flex-col items-start gap-1.5">
              {/* CANDIDATE PATTERNS */}
              <h3 className="text-lg font-semibold leading-6 text-[#091127]">
                Candidate patterns
              </h3>

              <InfoRows rows={candidatePatterns} />

              {/* RESULT TREATMENT */}
              <h3 className="pt-6 text-lg font-semibold leading-6 text-[#091127]">
                How the result is treated
              </h3>

              <InfoRows rows={resultTreatment} />
            </div>
          </div>

          {/* MATCHING IMAGE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
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
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-2
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-[#f7f8fa]
              px-5
              py-6

              sm:px-6
              sm:py-7
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.14em]
                text-[#7890b2]
              "
            >
              Confidence boundary
            </span>

            <p
              className="
                !m-0
                w-full
                max-w-[850px]
                text-[15px]
                font-normal
                leading-7
                text-[#091127]
              "
            >
              Confidence is operational evidence, not proof of payer identity
              or intent. Ambiguous candidate sets are never hidden, and a
              match is never silently forced to clear a queue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}