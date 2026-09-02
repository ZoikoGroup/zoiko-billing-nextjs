interface InsightRuleRow {
  rule: string;
  requirement: React.ReactNode;
}

const insightRuleRows: InsightRuleRow[] = [
  {
    rule: "Eligibility",
    requirement: "Published and current; methodology approved; claim registry complete; privacy and ethics passed; accessible; not review-due",
  },
  {
    rule: "Presentation",
    requirement: (
      <>
        One finding plus scope and period, evidence type, methodology link, and a{" "}
        <span className="font-bold text-slate-900">limitation teaser</span>
      </>
    ),
  },
  {
    rule: "Selection",
    requirement: (
      <>
        Editorial significance and user value —{" "}
        <span className="font-bold text-slate-900">
          not conversion performance or a cherry-picked favorable result
        </span>
      </>
    ),
  },
  {
    rule: "Visualization",
    requirement: (
      <>
        Only an approved chart tied to data.{" "}
        <span className="font-bold text-slate-900">
          If no approved figure exists, use a text-led layout
        </span>
      </>
    ),
  },
  {
    rule: "Fallback",
    requirement: "Omit the section if no item meets eligibility",
  },
];

export default function FeaturedCurrentInsightSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="featured-insight">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          FEATURED CURRENT INSIGHT
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Never the most favorable result.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Selection is editorial significance and reader value — not conversion performance, and
          not a cherry-picked finding.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/5">
                    RULE
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-4/5">
                    REQUIREMENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {insightRuleRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.rule}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.requirement}
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
