interface TrustDimensionRow {
  dimension: string;
  proofPattern: React.ReactNode;
}

const trustDimensionRows: TrustDimensionRow[] = [
  {
    dimension: "Security",
    proofPattern: "Verification model, material lifecycle, least privilege and safe diagnostics",
  },
  {
    dimension: "Operational control",
    proofPattern: "Endpoint status, event selection, logs, delivery evidence and change notices",
  },
  {
    dimension: "Governance",
    proofPattern: "Named owners, permissions, audit events and environment boundaries",
  },
  {
    dimension: "Privacy",
    proofPattern: "Payload minimization, redaction, restricted raw-content access and analytics exclusions",
  },
  {
    dimension: "Reliability transparency",
    proofPattern: (
      <>
        Published guarantees and limits where defined —{" "}
        <span className="font-bold text-slate-900">
          explicit unknowns otherwise
        </span>
      </>
    ),
  },
  {
    dimension: "Implementation support",
    proofPattern: "Self-service documentation first, with assistance for genuine enterprise needs",
  },
];

export default function EnterpriseTrustWebhooksSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="enterprise-trust">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          ENTERPRISE TRUST
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Six dimensions a security reviewer can assess from this page.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Self-service documentation first; technical assistance where security, procurement
          or integration scope genuinely requires it.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    DIMENSION
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    PROOF PATTERN
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {trustDimensionRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.dimension}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.proofPattern}
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
