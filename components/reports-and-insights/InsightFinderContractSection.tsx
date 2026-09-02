interface FinderBehaviorRow {
  property: string;
  detail: React.ReactNode;
}

interface CardFieldRow {
  field: string;
  requirement: React.ReactNode;
}

const finderBehaviorRows: FinderBehaviorRow[] = [
  { property: "Scope", detail: "Published current public insight registry only" },
  { property: "Primary filter", detail: "Question or decision need" },
  { property: "Secondary filters", detail: "Billing topic, evidence type, audience; time period only when normalized and useful" },
  { property: "Sort", detail: "Relevance by default; newest or recently reviewed only with reliable metadata" },
  { property: "Result count", detail: "Visible and politely announced to assistive technology" },
  {
    property: "Privacy",
    detail: (
      <>
        Controlled filter values only —{" "}
        <span className="font-bold text-slate-900">
          raw free-text query not logged by default
        </span>
      </>
    ),
  },
];

const cardFieldRows: CardFieldRow[] = [
  { field: "Content type", requirement: "Report, research note, benchmark, operational insight or another approved type" },
  {
    field: "Title",
    requirement: (
      <>
        A specific question or finding —{" "}
        <span className="font-bold text-slate-900">no clickbait</span>
      </>
    ),
  },
  { field: "Finding summary", requirement: "One sentence carrying the essential qualifier where period or population matters" },
  {
    field: "Evidence label",
    requirement: (
      <>
        Telemetry aggregate, survey, customer research, desk research, internal analysis or benchmark —{" "}
        <span className="font-bold text-slate-900">only when accurate</span>
      </>
    ),
  },
  { field: "Scope metadata", requirement: "Time period plus population, sample or scope, and geography when material" },
  {
    field: "Methodology link",
    requirement: (
      <span className="font-bold text-slate-900">
        Visible before the reader needs to trust the finding
      </span>
    ),
  },
];

export default function InsightFinderContractSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="finder-contract">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          INSIGHT FINDER CONTRACT
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Question first, then topic and evidence type.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          The primary filter is the decision the reader is trying to make, not the format of the
          artifact.
        </p>

        {/* 2-Column Grid Layout */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-8 text-left items-start">
          
          {/* Left Column Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden w-full">
            <div className="p-3.5 px-6 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Finder behavior.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <tbody className="divide-y divide-slate-100">
                  {finderBehaviorRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-6 text-xs sm:text-sm font-bold text-slate-900 align-top w-2/5">
                        {row.property}
                      </td>
                      <td className="py-3 px-6 text-xs font-normal text-slate-600 leading-relaxed align-top w-3/5">
                        {row.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden w-full">
            <div className="p-3.5 px-6 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Required card fields.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <tbody className="divide-y divide-slate-100">
                  {cardFieldRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-6 text-xs sm:text-sm font-bold text-slate-900 align-top w-2/5">
                        {row.field}
                      </td>
                      <td className="py-3 px-6 text-xs font-normal text-slate-600 leading-relaxed align-top w-3/5">
                        {row.requirement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
