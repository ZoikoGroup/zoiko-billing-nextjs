interface ClaimPatternRow {
  pattern: string;
  allowedOnlyWhen: React.ReactNode;
  requiredWording: React.ReactNode;
}

const claimPatternRows: ClaimPatternRow[] = [
  {
    pattern: "Percentage / rate",
    allowedOnlyWhen: "Numerator, denominator, population, period and calculation are approved.",
    requiredWording: "State the denominator and period in the same sentence or chart note",
  },
  {
    pattern: "Average / median",
    allowedOnlyWhen: "The distribution and aggregation are appropriate.",
    requiredWording: "Prefer median for skewed distributions; state the unit and denominator",
  },
  {
    pattern: "Trend",
    allowedOnlyWhen: "Periods and definitions are comparable with enough observations.",
    requiredWording: "Name the period boundaries and non-trend effects",
  },
  {
    pattern: "Benchmark / percentile",
    allowedOnlyWhen: "Population and calculation are approved and sufficiently representative.",
    requiredWording: "Say \"within the studied cohort\" or equivalent",
  },
  {
    pattern: "Association",
    allowedOnlyWhen: "The analysis supports association.",
    requiredWording: (
      <>
        Use &quot;associated with&quot; or &quot;correlated with&quot; —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● never imply causation
        </span>
      </>
    ),
  },
  {
    pattern: "Causal impact",
    allowedOnlyWhen: (
      <>
        Methodology genuinely supports causal inference{" "}
        <span className="font-bold text-white">and reviewers approve</span>.
      </>
    ),
    requiredWording: (
      <>
        State the design and limitations —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● avoid market generalizations
        </span>
      </>
    ),
  },
  {
    pattern: "Estimate / model",
    allowedOnlyWhen: "Inputs and assumptions are valid for the stated use.",
    requiredWording: "Label it estimated or modeled; include sensitivity",
  },
];

export default function QuantitativeClaimCausalityRulesSection() {
  return (
    <section className="w-full bg-[#0B132B] py-12 lg:py-24 text-white border-t border-slate-800" id="causality-rules">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          <span className="h-px w-5 bg-slate-600" />
          QUANTITATIVE CLAIM &amp; CAUSALITY RULES
          <span className="h-px w-5 bg-slate-600" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-white tracking-tight max-w-3xl">
          Seven claim patterns, and only one may say &quot;caused.&quot;
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-300">
          Each pattern carries a wording requirement, because the difference between association
          and cause is where evidence pages most often overreach.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-700/80 bg-[#060D20]">
          <img
            src="/images/reports-and-insights/rai4.png"
            alt="Seven claim patterns, and only one may say caused"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787832637027.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Dark Table Card */}
          <div className="rounded-2xl border border-slate-800 bg-[#0E1A3C]/90 shadow-lg overflow-hidden w-full">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[520px]">
                <thead>
                  <tr className="bg-slate-900/60 border-b border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <th scope="col" className="py-2.5 px-4 w-1/4">CLAIM PATTERN</th>
                    <th scope="col" className="py-2.5 px-4 w-3/8">ALLOWED ONLY WHEN</th>
                    <th scope="col" className="py-2.5 px-4 w-3/8">REQUIRED WORDING</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {claimPatternRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition">
                      <td className="py-3 px-4 text-xs font-bold text-white align-top">
                        {row.pattern}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-300 leading-relaxed align-top">
                        {row.allowedOnlyWhen}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-300 leading-relaxed align-top">
                        {row.requiredWording}
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
