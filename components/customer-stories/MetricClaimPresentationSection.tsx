interface ClaimTypeRow {
  claimType: string;
  requiredMetadata: React.ReactNode;
}

const claimTypeRows: ClaimTypeRow[] = [
  {
    claimType: "Percentage change",
    requiredMetadata: "Metric definition, baseline, numerator and denominator or formula, population, period",
  },
  {
    claimType: "Time reduction",
    requiredMetadata: "Start and end event definitions, baseline period, comparison method, sample or population",
  },
  {
    claimType: "Count / volume",
    requiredMetadata: "Unit definition, period, source, and the relevant denominator or context",
  },
  {
    claimType: "Qualitative result",
    requiredMetadata: (
      <>
        Evidence source, interview or observation context —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● no false precision
        </span>
      </>
    ),
  },
  {
    claimType: "Attribution",
    requiredMetadata: (
      <>
        Contribution wording plus co-factors;{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● sole causation only with exceptional evidence
        </span>
      </>
    ),
  },
  {
    claimType: "Customer quote",
    requiredMetadata: "Approved exact meaning, attribution, date and context, and consent scope",
  },
];

export default function MetricClaimPresentationSection() {
  return (
    <section className="w-full bg-[#0B132B] py-12 lg:py-24 text-white border-t border-slate-800" id="claim-presentation">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          <span className="h-px w-5 bg-slate-600" />
          METRIC &amp; CLAIM PRESENTATION
          <span className="h-px w-5 bg-slate-600" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-white tracking-tight max-w-3xl">
          Six claim types, each with mandatory adjacent metadata.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-300">
          Attribution is the one that most often overreaches: contribution wording is required,
          and sole causation needs exceptional evidence.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-700/80 bg-[#060D20]">
          <img
            src="/images/customer-stories/77d1b5fd1890ffe259ffc3536ee74b80c6313f7d.png"
            alt="Six claim types, each with mandatory adjacent metadata"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787833684022.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Dark Table Card */}
          <div className="rounded-2xl border border-slate-800 bg-[#0E1A3C]/90 shadow-lg overflow-hidden w-full">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-900/60 border-b border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <th scope="col" className="py-2.5 px-4 w-1/3">CLAIM TYPE</th>
                    <th scope="col" className="py-2.5 px-4 w-2/3">REQUIRED ADJACENT METADATA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {claimTypeRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition">
                      <td className="py-3 px-4 text-xs font-bold text-white align-top">
                        {row.claimType}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-300 leading-relaxed align-top">
                        {row.requiredMetadata}
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
