interface GovernedRow {
  field: string;
  description: string;
}

const governedRows: GovernedRow[] = [
  {
    field: "Restoration process",
    description: "That a defined process exists, with owners and review",
  },
  {
    field: "Integrity verification",
    description: "That restored data is verified rather than assumed correct",
  },
  {
    field: "Restore testing",
    description: "That restore is validated as its own exercise type",
  },
  {
    field: "Scope of recoverability",
    description: "Which datasets and processes an objective applies to, where published",
  },
];

interface NeverStatedRow {
  field: string;
  value: React.ReactNode;
}

const neverStatedRows: NeverStatedRow[] = [
  {
    field: "Backup frequency",
    value: (
      <>
        <span className="font-bold text-slate-900">Not published</span> — and an RPO is not a backup frequency
      </>
    ),
  },
  {
    field: "Retention period",
    value: "Privacy & Data Governance authority",
  },
  {
    field: "Data location or region",
    value: (
      <>
        Data residency authority —{" "}
        <span className="font-bold text-slate-900">
          never inferred from continuity design
        </span>
      </>
    ),
  },
  {
    field: "Replication pattern",
    value: "Architecture detail; not a public continuity claim",
  },
  {
    field: "Zero data loss",
    value: (
      <>
        <span className="font-bold text-slate-900">Never claimed</span>. An RPO is a target interval, not proof of none
      </>
    ),
  },
];

export default function DataContinuityRestorationSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="data-restoration">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          DATA CONTINUITY &amp; RESTORATION
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Restoration is a process, not a schedule we publish.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Backup frequency, retention period and data location are owned by Privacy &amp; Data Governance —
          this page does not invent any of them.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:grid)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid mt-14 w-full max-w-[1240px] grid-cols-2 gap-8 text-left items-start">
          
          {/* Left Card: Governed here. */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3.5 px-6 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Governed here.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[320px]">
                <tbody className="divide-y divide-slate-100">
                  {governedRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3.5 px-6 text-xs font-bold text-slate-900 align-top w-1/3">
                        {row.field}
                      </td>
                      <td className="py-3.5 px-6 text-xs font-normal text-slate-600 leading-relaxed align-top w-2/3">
                        {row.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Card: Never stated here. */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3.5 px-6 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Never stated here.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[320px]">
                <tbody className="divide-y divide-slate-100">
                  {neverStatedRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3.5 px-6 text-xs font-bold text-slate-900 align-top w-1/3">
                        {row.field}
                      </td>
                      <td className="py-3.5 px-6 text-xs font-normal text-slate-600 leading-relaxed align-top w-2/3">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1788179672191.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left space-y-6">
          
          {/* Card 1: Governed here */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Governed here.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <tbody className="divide-y divide-slate-100">
                  {governedRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top w-1/3">
                        {row.field}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top w-2/3">
                        {row.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Card 2: Never stated here */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Never stated here.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <tbody className="divide-y divide-slate-100">
                  {neverStatedRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top w-1/3">
                        {row.field}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top w-2/3">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Red RPO Error Callout Box */}
          <div className="rounded-2xl border border-red-200/80 bg-red-50/70 p-4 text-xs text-red-950 font-normal leading-relaxed mt-4">
            <span className="font-bold text-red-900">The RPO-as-backup-frequency error.</span> A reader who sees an RPO naturally infers a backup schedule, and a reader who sees a backup schedule infers a data-loss guarantee. Neither inference follows: an objective is a target for a defined dataset, and the mechanism achieving it is not disclosed by the objective. This is why the two are held in separate authorities.
          </div>

        </div>

      </div>
    </section>
  );
}
