interface ConventionRow {
  convention: string;
  questions: string;
}

const conventionRows: ConventionRow[] = [
  {
    convention: "Money",
    questions:
      "Currency field requirement; amount unit; precision and rounding authority; negative amount rules; tax inclusion or exclusion semantics where relevant",
  },
  {
    convention: "Time",
    questions:
      "UTC versus local; timezone fields; effective date versus creation timestamp versus issue date versus settlement date; daylight-saving implications",
  },
  {
    convention: "Identifiers",
    questions:
      "Internal versus external ID; customer-supplied idempotency key; document number versus immutable record ID; reuse rules",
  },
  {
    convention: "Ordering",
    questions:
      "Stable sort key, default order, tie-breaking, and interaction with pagination",
  },
  {
    convention: "Null / missing",
    questions:
      "The difference between absent, null, empty, zero and unknown where the schema supports those states",
  },
  {
    convention: "Precision",
    questions:
      "Number serialization and display precision, stated explicitly for financial fields and ratios",
  },
];

export default function MoneyTimeConventionsSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="conventions">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          MONEY, TIME &amp; IDENTIFIER CONVENTIONS
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Billing APIs fail expensive when these are assumed.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Six conventions get a dedicated, highly findable concept page and concise callouts on
          every relevant operation page.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    CONVENTION
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    QUESTIONS THAT MUST BE ANSWERED
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {conventionRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.convention}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.questions}
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
