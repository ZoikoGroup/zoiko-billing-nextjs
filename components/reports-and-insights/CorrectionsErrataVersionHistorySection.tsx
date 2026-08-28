interface ErrataClassRow {
  changeClass: string;
  publicBehavior: React.ReactNode;
}

const errataClassRows: ErrataClassRow[] = [
  {
    changeClass: "Typographic",
    publicBehavior: "Corrected silently, or noted only where editorial policy requires; the finding does not change",
  },
  {
    changeClass: "Methodology clarification",
    publicBehavior: "Methodology version updated, with a note where the clarification is material",
  },
  {
    changeClass: "Numerical correction",
    publicBehavior: (
      <>
        Visible correction note showing{" "}
        <span className="font-bold text-slate-900">old and new value</span>, the date, and the
        affected interpretation
      </>
    ),
  },
  {
    changeClass: "Finding changes materially",
    publicBehavior: "Prominent correction or replacement; related summaries and cards updated; cached share context addressed",
  },
  {
    changeClass: "Privacy, legal or security issue",
    publicBehavior: (
      <>
        <span className="font-bold text-slate-900">
          Immediate withdrawal or suppression
        </span>
        , with a safe route notice after review
      </>
    ),
  },
  {
    changeClass: "Superseded dataset",
    publicBehavior: "Replacement banner and current-report link; historical version archived only if useful and non-misleading",
  },
];

export default function CorrectionsErrataVersionHistorySection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="corrections-errata">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          CORRECTIONS, ERRATA &amp; VERSION HISTORY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          A numerical correction shows the old value.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Six change classes, scaled from a silent typo fix to immediate withdrawal.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    CHANGE CLASS
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    PUBLIC BEHAVIOR
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {errataClassRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.changeClass}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.publicBehavior}
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
