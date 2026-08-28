interface AssetRuleRow {
  asset: string;
  requirement: React.ReactNode;
}

const assetRuleRows: AssetRuleRow[] = [
  {
    asset: "Product screenshot",
    requirement: (
      <>
        Approved current UI with synthetic or redacted data —{" "}
        <span className="font-bold text-slate-900">
          no names, document IDs, bank or card data, tax IDs, credentials or sensitive customer information
        </span>
      </>
    ),
  },
  {
    asset: "Annotated screenshot",
    requirement: "Annotations stay outside sensitive UI values and are available as text",
  },
  {
    asset: "Concept diagram",
    requirement: (
      <>
        May explain relationships but{" "}
        <span className="font-bold text-slate-900">
          must not imply unsupported data flow, ownership, automation or guarantees
        </span>
      </>
    ),
  },
  {
    asset: "Example invoice or payment",
    requirement: (
      <>
        Synthetic and clearly illustrative, with{" "}
        <span className="font-bold text-slate-900">
          no implication of accounting, tax or legal correctness
        </span>
      </>
    ),
  },
  {
    asset: "Code or config example",
    requirement: "Only where Documentation owns the configuration context — API code remains in Developers",
  },
  {
    asset: "Alt text",
    requirement: (
      <>
        Describes purpose and relevant UI state,{" "}
        <span className="font-bold text-slate-900">
          not every decorative pixel
        </span>
      </>
    ),
  },
  {
    asset: "Review",
    requirement: "Asset version and review date tied to the source-change process",
  },
];

export default function AssetGovernanceSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="asset-governance">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          SCREENSHOT, DIAGRAM &amp; EXAMPLE GOVERNANCE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Seven asset rules, starting with what a screenshot must not contain.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Product screenshots are the most common route for real customer data to reach a public page.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    ASSET
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIREMENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {assetRuleRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.asset}
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
