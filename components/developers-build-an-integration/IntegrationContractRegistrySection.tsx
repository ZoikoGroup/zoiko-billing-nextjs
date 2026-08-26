interface SourceAuthorityRow {
  source: string;
  retainsAuthorityOver: React.ReactNode;
}

const sourceAuthorityRows: SourceAuthorityRow[] = [
  {
    source: "API Overview",
    retainsAuthorityOver: "Capability orientation, the product-domain versus API-exposure distinction, lifecycle and readiness principles",
  },
  {
    source: "API Documentation",
    retainsAuthorityOver: "Exact operations, schemas, object and state behavior, permissions, errors, idempotency and retry semantics, versions and limits",
  },
  {
    source: "Authentication",
    retainsAuthorityOver: "Supported access methods, credential lifecycle, permission boundaries, environment identity and secret handling",
  },
  {
    source: "Webhooks",
    retainsAuthorityOver: "Event identifiers and schemas, delivery, verification, acknowledgement, retry, duplicate and order semantics, replay and endpoint lifecycle",
  },
  {
    source: "Developer Sandbox",
    retainsAuthorityOver: "Non-production fidelity, test data, side effects, environment boundaries and safe validation evidence",
  },
  {
    source: "SDKs & Examples",
    retainsAuthorityOver: "Verified SDK and runtime availability, example completeness, compatibility and source provenance",
  },
  {
    source: "Build an Integration",
    retainsAuthorityOver: (
      <>
        <span className="font-bold text-slate-900">Composition only</span> — architecture decisions, readiness sequencing, ownership, evidence, rollout, operations, change and decommission
      </>
    ),
  },
];

export default function IntegrationContractRegistrySection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="contract-registry">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          INTEGRATION CONTRACT REGISTRY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Every dependency traced to its owning source.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          The registry records how one approved pattern depends on the six technical
          destinations. It replaces none of them.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    SOURCE
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    RETAINS AUTHORITY OVER
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {sourceAuthorityRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.source}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.retainsAuthorityOver}
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
