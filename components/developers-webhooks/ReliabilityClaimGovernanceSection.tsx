interface ReliabilityClaimRow {
  claimArea: string;
  publicationRule: React.ReactNode;
}

const reliabilityClaimRows: ReliabilityClaimRow[] = [
  {
    claimArea: "Real-time / latency",
    publicationRule: "Only with approved measurement and a defined objective",
  },
  {
    claimArea: "Delivery success rate",
    publicationRule: (
      <span className="font-bold text-slate-900">
        No percentage without a defined population, period, exclusions and source
      </span>
    ),
  },
  {
    claimArea: "Retry durability",
    publicationRule: "Do not claim guaranteed delivery without an explicit contract",
  },
  {
    claimArea: "Availability / uptime",
    publicationRule: "Only from an approved reliability source at the correct product scope",
  },
  {
    claimArea: "Scale / event volume",
    publicationRule: "No throughput or concurrency figure without verified capacity source",
  },
  {
    claimArea: "Regional availability",
    publicationRule: (
      <>
        Exact published coverage states —{" "}
        <span className="font-bold text-slate-900">
          not generic worldwide claims
        </span>
      </>
    ),
  },
];

export default function ReliabilityClaimGovernanceSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="reliability-governance">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          RELIABILITY &amp; CLAIM GOVERNANCE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Six claims that require a source before they can appear.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A reliability number without a defined population, period and exclusion set is not
          evidence.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    CLAIM AREA
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    PUBLICATION RULE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {reliabilityClaimRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.claimArea}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.publicationRule}
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
