type FactRow = {
  fact: string;
  authority: string;
  behavior: React.ReactNode;
};

const FACTS: FactRow[] = [
  {
    fact: "Data location or residency",
    authority: "Privacy source · contract",
    behavior: (
      <span className="font-bold">
        Not stated, and never inferred from continuity or architecture
      </span>
    ),
  },
  {
    fact: "International transfer mechanism",
    authority: "Privacy Notice · Legal",
    behavior: (
      <>
        <span className="font-bold">No mechanism named</span> — this is a legal
        determination, not an explanation
      </>
    ),
  },
  {
    fact: "Subprocessor list",
    authority: "Controlled subprocessor source",
    behavior: (
      <>
        Linked where approved;{" "}
        <span className="font-bold">a dynamic list is not duplicated</span>{" "}
        into static content
      </>
    ),
  },
  {
    fact: "Legal bases",
    authority: "Privacy Notice",
    behavior: <>Referenced, not rewritten</>,
  },
  {
    fact: "Processing terms",
    authority: "Data Processing Addendum · contract",
    behavior: <>Referenced only where approved</>,
  },
  {
    fact: "Encryption & controls",
    authority: "Security Overview",
    behavior: (
      <span className="font-bold">
        No unverified technical control restated
      </span>
    ),
  },
];

export default function DataLocationTransfers() {
  return (
    <section
      id="data-location-transfers"
      className="w-full bg-white px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span className="text-xs font-bold uppercase !leading-4 tracking-widest !text-[#7890b2]">
              Data location, transfers &amp; subprocessors
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          <h2 className="!m-0 !text-2xl !tracking-normal font-extrabold !leading-8 text-balance font-[family-name:var(--font-jakarta)] !text-[#091127] sm:!text-3xl sm:!leading-9 md:!text-4xl md:!leading-10">
            Three facts this page does not state.
          </h2>

          <p className="m-0 w-full max-w-[687px] pt-[3.1px] text-sm font-normal !leading-6 !text-[#5d7192] sm:text-base sm:!leading-7">
            Each is owned by a controlled source, and each changes — which is
            exactly why it is not duplicated into explanatory content.
          </p>
        </div>

        {/* Stacked cards — small screens */}
        <div className="flex w-full flex-col gap-3 lg:hidden">
          {FACTS.map((row) => (
            <div
              key={row.fact}
              className="flex w-full flex-col gap-3 rounded-2xl border border-[#dfe5ee] bg-white p-4 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]"
            >
              <h3 className="!m-0 text-sm font-bold !leading-5 !text-[#091127] font-[family-name:var(--font-jakarta)]">
                {row.fact}
              </h3>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                  Authority
                </span>

                <p className="m-0 text-sm font-normal !leading-5 !text-[#5d7192]">
                  {row.authority}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                  Behavior here
                </span>

                <p className="m-0 text-sm font-normal !leading-5 !text-[#5d7192]">
                  {row.behavior}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Table — md and up */}
        <div className="hidden w-full overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] lg:block">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#fafbfc]">
                  <th className="w-72 border-b border-[#dfe5ee] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                    Fact
                  </th>

                  <th className="w-80 border-b border-[#dfe5ee] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                    Authority
                  </th>

                  <th className="border-b border-[#dfe5ee] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#7890b2]">
                    Behavior here
                  </th>
                </tr>
              </thead>

              <tbody>
                {FACTS.map((row, index) => (
                  <tr
                    key={row.fact}
                    className={
                      index === FACTS.length - 1
                        ? ""
                        : "border-b border-[#edf0f4]"
                    }
                  >
                    <td className="px-4 py-4 align-top text-sm font-semibold !leading-5 !text-[#091127]">
                      {row.fact}
                    </td>

                    <td className="px-4 py-4 align-top text-sm font-normal !leading-5 !text-[#5d7192]">
                      {row.authority}
                    </td>

                    <td className="px-4 py-4 align-top text-sm font-normal !leading-5 !text-[#5d7192]">
                      {row.behavior}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
