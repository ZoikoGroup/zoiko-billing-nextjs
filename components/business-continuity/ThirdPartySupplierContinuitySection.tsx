interface RuleRow {
  rule: string;
  requirement: React.ReactNode;
}

const ruleRows: RuleRow[] = [
  {
    rule: "No named vendor",
    requirement: (
      <>
        <span className="font-bold text-slate-900">Suppliers and providers are not named</span> unless approved for publication — naming one implies a disclosure we may not be permitted to make
      </>
    ),
  },
  {
    rule: "No borrowed posture",
    requirement: (
      <>
        <span className="font-bold text-slate-900">A provider&apos;s continuity capability is not restated as ours</span>, even where we rely on it
      </>
    ),
  },
  {
    rule: "Governance, not guarantee",
    requirement: "We describe that dependency continuity is assessed — not what a provider would achieve",
  },
  {
    rule: "Boundary without disclaimer",
    requirement: (
      <>
        The boundary is stated <span className="font-bold text-slate-900">without disclaiming Zoiko-owned behavior at the interface</span>
      </>
    ),
  },
  {
    rule: "Change revalidation",
    requirement: "A provider or supplier change triggers revalidation of the affected third-party statements",
  },
];

export default function ThirdPartySupplierContinuitySection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="supplier-continuity">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          THIRD-PARTY &amp; SUPPLIER CONTINUITY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          We do not publish another organization&apos;s posture.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Five rules for describing dependency continuity without making claims we have no authority to make.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/3">
                    RULE
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-2/3">
                    REQUIREMENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ruleRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.rule}
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
