interface PriorityDefinitionRow {
  field: string;
  structure: React.ReactNode;
}

const priorityDefinitionRows: PriorityDefinitionRow[] = [
  {
    field: "Priority label",
    structure: (
      <>
        A source-owned public term —{" "}
        <span className="font-bold text-slate-900">internal incident severity is not copied</span> unless it genuinely is the same system
      </>
    ),
  },
  {
    field: "Impact definition",
    structure: "Objective user or business impact, described in terms a customer can apply",
  },
  {
    field: "Scope of affected users",
    structure: "Only where relevant and safe to state",
  },
  {
    field: "Examples",
    structure: (
      <>
        Approved, non-binding, and <span className="font-bold text-slate-900">clearly labeled as examples</span>
      </>
    ),
  },
  {
    field: "Customer-selected urgency",
    structure: (
      <>
        May be collected at intake but{" "}
        <span className="font-bold text-slate-900">does not automatically determine final priority</span>
      </>
    ),
  },
  {
    field: "Final classification",
    structure: "Support may validate classification per approved policy, in language Legal and Support own",
  },
];

export default function PriorityDefinitionsSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="priority-definitions">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          PRIORITY DEFINITIONS
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Conditional content — structure without values.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Public priority definitions render only where Support Operations and Legal have approved
          them for publication.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    FIELD
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    STRUCTURE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {priorityDefinitionRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.field}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.structure}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1788177889948.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Field and required structure.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <th scope="col" className="py-2.5 px-4 w-1/3">FIELD</th>
                    <th scope="col" className="py-2.5 px-4 w-2/3">STRUCTURE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {priorityDefinitionRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.field}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.structure}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Amber Internal Severity Callout Box */}
          <div className="rounded-2xl border border-amber-200/80 bg-amber-50/70 p-4 text-xs text-amber-950 font-normal leading-relaxed mt-4">
            <span className="font-bold text-amber-900">Why internal severity is not republished.</span> An internal incident scale is calibrated for engineering triage, not for customer expectation. Publishing it invites a customer to argue their case is a P1 by an internal definition they were never meant to apply — which is why the public label is separately owned.
          </div>

        </div>

      </div>
    </section>
  );
}
