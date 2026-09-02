interface EvidenceTypeRow {
  badgeLabel: string;
  whatItMeans: string;
  mandatoryTrustCue: React.ReactNode;
}

const evidenceTypeRows: EvidenceTypeRow[] = [
  {
    badgeLabel: "Telemetry aggregate",
    whatItMeans: "Aggregated, de-identified product usage or operational data, when approved.",
    mandatoryTrustCue: "Data period, inclusion criteria, metric definitions, privacy threshold",
  },
  {
    badgeLabel: "Survey research",
    whatItMeans: "Structured responses from a defined sample.",
    mandatoryTrustCue: "Field dates, sample size, response rate, caveats, sponsor disclosure",
  },
  {
    badgeLabel: "Customer research",
    whatItMeans: "Qualitative or quantitative research with participants.",
    mandatoryTrustCue: (
      <>
        Method, sample, period,{" "}
        <span className="font-bold text-slate-900">no overgeneralization</span>
      </>
    ),
  },
  {
    badgeLabel: "Desk research",
    whatItMeans: "Synthesis of named external or public sources.",
    mandatoryTrustCue: "Source list, inclusion criteria, freshness",
  },
  {
    badgeLabel: "Internal analysis",
    whatItMeans: "Analysis or model based on specified inputs and assumptions.",
    mandatoryTrustCue: (
      <>
        Assumptions, methodology,{" "}
        <span className="font-bold text-slate-900">non-product distinction</span>
      </>
    ),
  },
  {
    badgeLabel: "Benchmark",
    whatItMeans: "Approved comparison against a defined population.",
    mandatoryTrustCue: (
      <>
        Population, sample, percentile or average,{" "}
        <span className="font-bold text-slate-900">limitation</span>
      </>
    ),
  },
];

export default function EvidenceTypesSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="evidence-types">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          EVIDENCE TYPES
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Six types, each with a mandatory trust cue.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          The evidence label is not decoration — it determines what disclosure the item must
          carry before it can publish.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/reports-and-insights/rai2.png"
            alt="Six types, each with a mandatory trust cue"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787832545479.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Type, public explanation and mandatory trust cue.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[540px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <th scope="col" className="py-2.5 px-4 w-1/3">TYPE</th>
                    <th scope="col" className="py-2.5 px-4 w-1/3">WHAT IT MEANS</th>
                    <th scope="col" className="py-2.5 px-4 w-1/3">MANDATORY TRUST CUE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {evidenceTypeRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        <span className="bg-blue-50 text-blue-700 font-semibold text-[10px] px-2.5 py-1 rounded-lg border border-blue-200/80 inline-flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full border border-blue-600 bg-white" />
                          {row.badgeLabel}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.whatItMeans}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.mandatoryTrustCue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
