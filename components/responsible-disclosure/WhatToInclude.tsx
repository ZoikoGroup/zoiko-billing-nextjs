import Link from "next/link";

type Row = {
  label: string;
  detail: React.ReactNode;
};

const INCLUDE: Row[] = [
  {
    label: "Summary",
    detail: <>What the issue is, in one or two sentences</>,
  },
  {
    label: "Affected target",
    detail: <>The surface or asset, as precisely as you can state it</>,
  },
  {
    label: "Reproduction",
    detail: <>Ordered steps someone else can follow</>,
  },
  {
    label: "Observed result",
    detail: <>What happened, distinguished from what you infer it means</>,
  },
  {
    label: "Impact assessment",
    detail: (
      <>
        Your view of why it matters —{" "}
        <span className="font-bold">marked as your assessment</span>, not as a
        severity rating
      </>
    ),
  },
  {
    label: "Timestamps",
    detail: <>When you tested, so logs can be correlated</>,
  },
  {
    label: "Redacted evidence",
    detail: <>The minimum that demonstrates the finding</>,
  },
];

const OMIT: Row[] = [
  {
    label: "A severity score",
    detail: (
      <>
        <span className="font-bold">Do not assign one.</span> No public severity
        model is stated here, and internal scores are never exposed
      </>
    ),
  },
  {
    label: "Live secrets",
    detail: <>Any credential, token or key — described, never submitted</>,
  },
  {
    label: "Bulk data",
    detail: <>Volume does not strengthen a report</>,
  },
  {
    label: "Weaponized payloads",
    detail: <>Minimum proof only, where approved</>,
  },
  {
    label: "A disclosure deadline",
    detail: (
      <>
        <span className="font-bold">Do not set one unilaterally</span>;
        coordination is discussed if policy allows it
      </>
    ),
  },
  {
    label: "A reward expectation",
    detail: <>No bounty is stated on this page — see the boundary below</>,
  },
  {
    label: "Unrelated support issues",
    detail: (
      <>
        Those belong to{" "}
        <Link
          href="/contact-support"
          className="font-semibold !text-[#1F6FEB] hover:underline"
        >
          Contact Support
        </Link>
      </>
    ),
  },
];

function RowCard({ caption, rows }: { caption: string; rows: Row[] }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
      <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-5 py-4">
        <p className="m-0 text-sm font-normal !leading-5 !text-[#5d7192]">
          {caption}
        </p>
      </div>

      {rows.map((row, index) => (
        <div
          key={row.label}
          className={`flex flex-col gap-1 px-4 py-3.5 sm:flex-row sm:gap-4 ${
            index === rows.length - 1 ? "" : "border-b border-[#edf0f4]"
          }`}
        >
          <span className="text-sm font-semibold !leading-5 !text-[#091127] sm:w-40 sm:shrink-0">
            {row.label}
          </span>

          <p className="m-0 text-sm font-normal !leading-5 !text-[#5d7192]">
            {row.detail}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function WhatToInclude() {
  return (
    <section
      id="what-to-include"
      className="w-full bg-[#f7f8fa] px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span className="text-xs font-bold uppercase !leading-4 tracking-widest !text-[#7890b2]">
              What to include &amp; secure submission
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          <h2 className="!m-0 text-balance !text-2xl !tracking-normal font-extrabold !leading-8 font-[family-name:var(--font-jakarta)] !text-[#091127] sm:!text-3xl sm:!leading-9 md:!text-4xl md:!leading-10">
            Enough to reproduce, and nothing beyond it.
          </h2>

          <p className="m-0 w-full max-w-[687px] pt-[3.1px] text-sm font-normal !leading-6 !text-[#5d7192] sm:text-base sm:!leading-7">
            The submission route itself is source-controlled — this page states
            what a report needs, not which channel or key to use.
          </p>
        </div>

        {/* Include / Omit */}
        <div className="grid w-full grid-cols-1 items-stretch gap-5 pt-5 lg:grid-cols-2">
          <RowCard caption="Include." rows={INCLUDE} />
          <RowCard caption="Omit." rows={OMIT} />
        </div>
      </div>
    </section>
  );
}
