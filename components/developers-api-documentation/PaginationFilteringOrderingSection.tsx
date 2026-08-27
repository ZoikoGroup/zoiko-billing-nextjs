interface PatternRow {
  pattern: string;
  documentation: React.ReactNode;
}

const patternRows: PatternRow[] = [
  {
    pattern: "Pagination model",
    documentation:
      "Cursor, token, offset, page number or other model from source only, explaining continuation and terminal behavior",
  },
  {
    pattern: "Page size",
    documentation: (
      <>
        Default and maximum only when verified —{" "}
        <span className="font-bold text-slate-900">do not invent limits</span>
      </>
    ),
  },
  {
    pattern: "Filtering",
    documentation:
      "Supported filters, operators, combination rules, case sensitivity and invalid-filter behavior",
  },
  {
    pattern: "Date windows",
    documentation:
      "Inclusive or exclusive boundaries, timezone interpretation, and maximum range when relevant",
  },
  {
    pattern: "Ordering",
    documentation:
      "Supported sort fields and directions, with deterministic tie handling",
  },
  {
    pattern: "Consistency",
    documentation:
      "Snapshot or eventual-consistency behavior if results can change during traversal",
  },
  {
    pattern: "Empty result",
    documentation:
      "Distinguish no match from permission-filtered or unavailable data where applicable",
  },
];

export default function PaginationFilteringOrderingSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="pagination">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          PAGINATION, FILTERING &amp; ORDERING
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Seven collection behaviors, no invented limits.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Page sizes, operators and consistency semantics come from source, because a wrong
          assumption silently truncates financial data.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    PATTERN
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIRED DOCUMENTATION
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {patternRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.pattern}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.documentation}
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
