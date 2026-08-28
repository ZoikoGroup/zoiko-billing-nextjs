interface StoryRuleRow {
  rule: string;
  requirement: React.ReactNode;
}

const storyRuleRows: StoryRuleRow[] = [
  {
    rule: "Eligibility",
    requirement: (
      <>
        Current consent; current evidence; current product-source review; accessible assets;{" "}
        <span className="font-bold text-slate-900">
          no unresolved claim, legal or privacy issue
        </span>
      </>
    ),
  },
  {
    rule: "Card proof",
    requirement: "Context, use case, outcome, evidence type, period, last verified, and a limitation or contribution note",
  },
  {
    rule: "Selection",
    requirement: (
      <>
        Editorial relevance and evidence quality —{" "}
        <span className="font-bold text-slate-900">
          not extreme-result optimization
        </span>
      </>
    ),
  },
  {
    rule: "Rotation",
    requirement: (
      <>
        Manual or registry-driven —{" "}
        <span className="font-bold text-slate-900">no automatic carousel</span>
      </>
    ),
  },
  {
    rule: "Fallback",
    requirement: "Omit if no story qualifies",
  },
];

export default function FeaturedCurrentStorySection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="featured-story">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          FEATURED CURRENT STORY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Not the most extreme result.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Selection is editorial relevance and evidence quality, and rotation is registry-driven
          rather than an automatic carousel.
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
                {storyRuleRows.map((row, idx) => (
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
