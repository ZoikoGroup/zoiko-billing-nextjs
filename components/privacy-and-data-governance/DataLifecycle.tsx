type Stage = {
  step: number;
  title: string;
  description: React.ReactNode;
  guardrail: React.ReactNode;
};

const STAGES: Stage[] = [
  {
    step: 1,
    title: "Collection",
    description: (
      <>
        Data enters through product use, integrations, exports you configure,
        or your own contact with us.
      </>
    ),
    guardrail: (
      <>
        Scoped to the activity.{" "}
        <span className="font-bold">
          No collection purpose is inferred from technical capability
        </span>{" "}
        — that something could be collected is not a reason it is.
      </>
    ),
  },
  {
    step: 2,
    title: "Use",
    description: (
      <>
        Processing for approved purposes tied to the specific activity and its
        context.
      </>
    ),
    guardrail: (
      <>
        No legal basis is invented. Where a basis is required, the
        authoritative privacy source states it —{" "}
        <span className="font-bold">not this page</span>.
      </>
    ),
  },
  {
    step: 3,
    title: "Access",
    description: (
      <>
        Available to defined role categories under approval and access
        governance.
      </>
    ),
    guardrail: (
      <>
        Public role categories only.{" "}
        <span className="font-bold">
          Product permission mechanics stay in Documentation
        </span>
        , and internal access controls are not described in detail.
      </>
    ),
  },
  {
    step: 4,
    title: "Sharing & movement",
    description: (
      <>
        Movement to integrations, exports and approved recipients — including
        copies you create.
      </>
    ),
    guardrail: (
      <>
        Source and destination <span className="font-bold">categories</span>{" "}
        only, where approved. Subprocessor facts come from the controlled
        source, never duplicated here.
      </>
    ),
  },
  {
    step: 5,
    title: "Retention",
    description: (
      <>
        Records remain while an approved operational, legal or contractual
        purpose requires them.
      </>
    ),
    guardrail: (
      <>
        <span className="font-bold">
          No period is published unless approved.
        </span>{" "}
        And retention is not a promise of indefinite or universal keeping — it
        is a condition that ends.
      </>
    ),
  },
  {
    step: 6,
    title: "Disposition",
    description: (
      <>
        Deletion, anonymization, or continued preservation under an applicable
        hold.
      </>
    ),
    guardrail: (
      <>
        Anonymization is{" "}
        <span className="font-bold">distinguished from deletion</span>, and
        irreversibility is never claimed without a source. Internal job
        schedules are not exposed.
      </>
    ),
  },
];

export default function DataLifecycle() {
  return (
    <section
      id="data-lifecycle"
      className="w-full bg-[#f7f8fa] px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span className="text-xs font-bold uppercase !leading-4 tracking-widest !text-[#7890b2]">
              Data lifecycle
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          <h2 className="!m-0 !text-2xl !tracking-normal font-extrabold !leading-8 text-balance font-[family-name:var(--font-jakarta)] !text-[#091127] sm:!text-3xl sm:!leading-9 md:!text-4xl md:!leading-10">
            Six stages, each with the guardrail
            that keeps it honest.
          </h2>

          <p className="m-0 w-full max-w-[687px] pt-[3.1px] text-sm font-normal !leading-6 !text-[#5d7192] sm:text-base sm:!leading-7">
            The guardrail column is what distinguishes a lifecycle description
            from a marketing statement.
          </p>
        </div>

        {/* Lifecycle rows */}
        <div className="w-full overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          {STAGES.map((stage, index) => (
            <div
              key={stage.step}
              className={`flex flex-col md:flex-row md:items-stretch ${
                index === 0 ? "" : "border-t border-[#edf0f4]"
              }`}
            >
              {/* Step number */}
              <div className="flex shrink-0 items-center gap-3 border-b border-[#edf0f4] bg-white px-4 py-3 md:w-11 md:justify-center md:border-b-0 md:border-r md:px-0 md:py-8">
                <span className="text-base font-extrabold !leading-6 !text-[#1F6FEB] font-[family-name:var(--font-jakarta)]">
                  {stage.step}
                </span>

                <span className="text-sm font-bold !leading-6 !text-[#091127] font-[family-name:var(--font-jakarta)] md:hidden">
                  {stage.title}
                </span>
              </div>

              {/* Stage */}
              <div className="flex flex-1 flex-col items-start gap-[5px] border-[#edf0f4] px-4 pb-5 pt-3.5 md:border-r md:pb-7">
                <h3 className="!m-0 hidden text-sm font-bold !leading-6 !text-[#091127] font-[family-name:var(--font-jakarta)] md:block">
                  {stage.title}
                </h3>

                <p className="m-0 text-xs font-normal !leading-5 !text-[#5d7192]">
                  {stage.description}
                </p>
              </div>

              {/* Guardrail */}
              <div className="flex flex-1 flex-col items-start gap-1 bg-white px-4 pb-5 pt-3.5 md:pb-4">
                <span className="text-[10px] font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                  Guardrail
                </span>

                <p className="m-0 text-xs font-normal !leading-5 !text-[#5d7192]">
                  {stage.guardrail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
