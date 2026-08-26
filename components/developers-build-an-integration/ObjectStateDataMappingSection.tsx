interface MappingElementRow {
  element: string;
  requiredRecord: React.ReactNode;
}

const mappingElementRows: MappingElementRow[] = [
  {
    element: "Identity mapping",
    requiredRecord: "External identifier to Zoiko Billing identifier, with stability and uniqueness rules",
  },
  {
    element: "State mapping",
    requiredRecord: "Which external state corresponds to which billing lifecycle state, and which transitions are permitted",
  },
  {
    element: "Mutability",
    requiredRecord: (
      <>
        Which fields remain writable at which state —{" "}
        <span className="font-bold text-slate-900">
          issued and evidence-bearing records are not silently rewritten
        </span>
      </>
    ),
  },
  {
    element: "Source of truth",
    requiredRecord: "Per field, not per object",
  },
  {
    element: "Invalid cases",
    requiredRecord: "Unmapped, conflicting and state values each have a named owner and handling rule",
  },
  {
    element: "Evidence",
    requiredRecord: "Which safe identifiers persist on both sides for later reconciliation",
  },
];

export default function ObjectStateDataMappingSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="data-mapping">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          OBJECT, STATE &amp; DATA MAPPING
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Map the states, not just the fields.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A field mapping that ignores lifecycle state will write into records that are no longer
          eligible to change.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    MAPPING ELEMENT
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIRED RECORD
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mappingElementRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.element}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.requiredRecord}
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
