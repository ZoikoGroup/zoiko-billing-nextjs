interface MethodologyElementRow {
  element: string;
  requiredContent: React.ReactNode;
}

const methodologyElementRows: MethodologyElementRow[] = [
  {
    element: "Evidence type",
    requiredContent: (
      <>
        What the label means{" "}
        <span className="font-bold text-slate-900">and what it does not mean</span>
      </>
    ),
  },
  {
    element: "Metric definition",
    requiredContent: "Exact formula, population, baseline, period and exclusions for any quantitative claim",
  },
  {
    element: "Source",
    requiredContent: "Customer records, approved Zoiko Billing evidence, third party, interview, survey or analysis",
  },
  {
    element: "Measurement window",
    requiredContent: "When the result was observed or measured",
  },
  {
    element: "Contribution statement",
    requiredContent: (
      <>
        How Zoiko Billing contributed{" "}
        <span className="font-bold text-slate-900">and which other factors mattered</span>
      </>
    ),
  },
  {
    element: "Limitations",
    requiredContent: "Known boundaries, missing evidence, external dependencies, context limits",
  },
  {
    element: "Verification date",
    requiredContent: (
      <>
        The last date evidence{" "}
        <span className="font-bold text-slate-900">and permission</span> were reviewed
      </>
    ),
  },
  {
    element: "Corrections",
    requiredContent: "How material errors are corrected and versioned",
  },
  {
    element: "Results variation",
    requiredContent: "That outcomes depend on configuration, process, data, integrations, people and operating context",
  },
];

export default function CustomerEvidenceMethodologySection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="evidence-methodology">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          CUSTOMER EVIDENCE METHODOLOGY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Methodology is part of the proof, not buried legal copy.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Metric definition, period, evidence type and limitations are reachable in one interaction
          from any quantitative claim.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    ELEMENT
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIRED CONTENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {methodologyElementRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.element}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.requiredContent}
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
