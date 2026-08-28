interface ReleaseStandardRow {
  field: string;
  requirement: React.ReactNode;
}

const releaseStandardRows: ReleaseStandardRow[] = [
  {
    field: "What changed?",
    requirement: "Plain language",
  },
  {
    field: "Effective date",
    requirement: (
      <>
        The operational date —{" "}
        <span className="font-bold text-slate-900">
          the primary date for understanding impact
        </span>
      </>
    ),
  },
  {
    field: "Published date",
    requirement: "The editorial date, shown only where it differs meaningfully",
  },
  {
    field: "Applicability",
    requirement: (
      <>
        Region, plan, environment, cohort or audience —{" "}
        <span className="font-bold text-slate-900">
          only from current authority
        </span>
      </>
    ),
  },
  {
    field: "Rollout state",
    requirement: "Shipped, rolling out, complete or limited — only when supported",
  },
  {
    field: "Action required",
    requirement: (
      <>
        None, recommended or required; a required action{" "}
        <span className="font-bold text-slate-900">must be actionable</span>
      </>
    ),
  },
  {
    field: "Deadline",
    requirement: "Only from release authority, with date and time-zone clarity",
  },
  {
    field: "Known limitations",
    requirement: "Material constraints, stated rather than discovered",
  },
  {
    field: "Documentation",
    requirement: "A current source link",
  },
  {
    field: "Support",
    requirement: "A help path whenever customer action may fail or need account-specific help",
  },
  {
    field: "Correction / supersession",
    requirement: "Visible when material",
  },
];

export default function ReleaseCommunicationStandardSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="release-standard">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          RELEASE COMMUNICATION STANDARD
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Eleven fields, required whenever applicable.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          The standard exists so a reader can answer &quot;does this affect me, and must I do
          anything&quot; without opening documentation.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    FIELD
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIREMENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {releaseStandardRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.field}
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
