interface ActionContractRow {
  stateBadge: React.ReactNode;
  uxTreatment: string;
  rule: React.ReactNode;
}

const actionContractRows: ActionContractRow[] = [
  {
    stateBadge: (
      <span className="bg-slate-100 text-slate-600 text-[10px] px-2.5 py-1 rounded-full font-semibold inline-flex items-center gap-1.5">
        ● No action required
      </span>
    ),
    uxTreatment: "A neutral status near the summary.",
    rule: <span className="font-bold text-slate-900">Do not create urgency</span>,
  },
  {
    stateBadge: (
      <span className="bg-amber-50 text-amber-800 text-[10px] px-2.5 py-1 rounded-full font-semibold border border-amber-200/80 inline-flex items-center gap-1.5">
        ● Recommended
      </span>
    ),
    uxTreatment: "A visible recommendation with its rationale.",
    rule: "No deadline unless the source is authoritative",
  },
  {
    stateBadge: (
      <span className="bg-red-50 text-red-700 text-[10px] px-2.5 py-1 rounded-full font-semibold border border-red-200/80 inline-flex items-center gap-1.5">
        ● Required
      </span>
    ),
    uxTreatment: "A prominent action block with audience, steps, deadline and source documentation.",
    rule: <span className="font-bold text-slate-900">Release blocker if action details are incomplete</span>,
  },
  {
    stateBadge: (
      <span className="bg-purple-50 text-purple-700 text-[10px] px-2.5 py-1 rounded-full font-semibold border border-purple-200/80 inline-flex items-center gap-1.5">
        ● Unknown / under review
      </span>
    ),
    uxTreatment: "No action state published until the release owner resolves it.",
    rule: <span className="font-bold text-slate-900">No speculative migration guidance</span>,
  },
];

export default function ActionRequirementContractSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="action-contract">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          ACTION REQUIREMENT CONTRACT
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Four action states, and one of them blocks release.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          An update whose action details are incomplete does not publish — and an unresolved action
          state is never filled with speculative migration guidance.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    STATE
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-2/4">
                    UX TREATMENT
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    RULE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {actionContractRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.stateBadge}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.uxTreatment}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.rule}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787835265594.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              State, treatment and governing rule.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <th scope="col" className="py-2.5 px-4 w-1/3">STATE</th>
                    <th scope="col" className="py-2.5 px-4 w-2/3">UX TREATMENT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {actionContractRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.stateBadge}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.uxTreatment}
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
