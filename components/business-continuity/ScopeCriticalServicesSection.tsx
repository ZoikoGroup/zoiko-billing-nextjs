interface CriticalityRow {
  field: string;
  requirement: string;
  mustNotImply: React.ReactNode;
}

const criticalityRows: CriticalityRow[] = [
  {
    field: "Service or process",
    requirement: "The exact, source-defined service, not a marketing product name.",
    mustNotImply: "That every capability inside it shares one classification",
  },
  {
    field: "Criticality classification",
    requirement: "The source-assigned tier, using approved public vocabulary.",
    mustNotImply: (
      <>
        <span className="font-bold text-slate-900">A numeric recovery objective</span>, unless one is separately published
      </>
    ),
  },
  {
    field: "Restoration priority",
    requirement: "Relative order among source-defined services.",
    mustNotImply: "A duration, or a guarantee about any one service",
  },
  {
    field: "Dependencies",
    requirement: "Identified platform and third-party dependencies where approved.",
    mustNotImply: "That a dependency's own continuity posture is ours to state",
  },
  {
    field: "Scope of applicability",
    requirement: "Which customers, plans or regions the classification covers.",
    mustNotImply: (
      <>
        <span className="font-bold text-slate-900">Universal applicability</span> where the source does not establish it
      </>
    ),
  },
  {
    field: "Not classified",
    requirement: "A real state, published as such.",
    mustNotImply: "Low importance, or exclusion from recovery",
  },
];

export default function ScopeCriticalServicesSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="critical-services">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          SCOPE &amp; CRITICAL SERVICES
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Criticality is assigned, not inferred.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A service being important to you does not by itself make it critical in the continuity model —
          and the model says which classification applies rather than leaving it ambiguous.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    FIELD
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/3">
                    REQUIREMENT
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-5/12">
                    MUST NOT IMPLY
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {criticalityRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.field}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.requirement}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.mustNotImply}
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
