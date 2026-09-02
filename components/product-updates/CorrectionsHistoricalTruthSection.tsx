interface HistoricalTruthRow {
  trigger: string;
  requiredTreatment: React.ReactNode;
}

const historicalTruthRows: HistoricalTruthRow[] = [
  {
    trigger: "Editorial typo",
    requiredTreatment: "Corrected silently where meaning is unaffected",
  },
  {
    trigger: "Material factual correction",
    requiredTreatment: "A visible correction note with the date and the corrected point",
  },
  {
    trigger: "Availability changed",
    requiredTreatment: "Applicability and rollout state updated from the authoritative source, with a correction note where prior interpretation changes",
  },
  {
    trigger: "Action deadline changed",
    requiredTreatment: (
      <>
        <span className="font-bold text-slate-900">Prominent correction</span>, migration notice updated, downstream owners notified
      </>
    ),
  },
  {
    trigger: "Superseded by a new update",
    requiredTreatment: "The old page links to the newer update and loses current-feed prominence",
  },
  {
    trigger: "Product no longer behaves as described",
    requiredTreatment: (
      <>
        <span className="font-bold text-slate-900">The historical state remains dated</span>, with a prominent current-documentation link
      </>
    ),
  },
  {
    trigger: "Withdrawn communication",
    requiredTreatment: "Removed from feed and index, with a safe notice and redirect; audit retained",
  },
];

export default function CorrectionsHistoricalTruthSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="corrections-truth">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          CORRECTIONS &amp; HISTORICAL TRUTH
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Seven triggers, and history is never rewritten.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A release feed is a record of when things changed. Editing an old entry to match current
          behavior destroys the only thing that record is for.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    TRIGGER
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIRED TREATMENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {historicalTruthRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.trigger}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.requiredTreatment}
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
