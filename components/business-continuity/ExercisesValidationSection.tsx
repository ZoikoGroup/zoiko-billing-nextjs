interface ExerciseFieldRow {
  field: string;
  rule: React.ReactNode;
}

const exerciseFieldRows: ExerciseFieldRow[] = [
  {
    field: "Exercise type",
    rule: (
      <>
        Tabletop, technical recovery test, restore test, communication exercise —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● the exact type
        </span>
      </>
    ),
  },
  {
    field: "Scope",
    rule: (
      <>
        Services, processes and dependencies included.{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● No &quot;entire platform&quot; inference
        </span>
      </>
    ),
  },
  {
    field: "Date",
    rule: "Exact exercise or test date semantics — not a cadence claim",
  },
  {
    field: "Objective",
    rule: "What the exercise intended to validate, as the source approved it",
  },
  {
    field: "Outcome",
    rule: (
      <>
        Pass, partial, follow-up or complete per source status —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● no invented success percentage
        </span>
      </>
    ),
  },
  {
    field: "Findings",
    rule: (
      <>
        Public only where approved and safe;{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● detailed findings are often controlled
        </span>
      </>
    ),
  },
  {
    field: "Remediation",
    rule: (
      <>
        High-level status only if approved —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● no internal vulnerability or architecture disclosure
        </span>
      </>
    ),
  },
  {
    field: "Evidence",
    rule: "A Trust Center record or controlled evidence path",
  },
];

export default function ExercisesValidationSection() {
  return (
    <section className="w-full bg-[#0B132B] py-12 lg:py-24 text-white border-t border-slate-800" id="validation">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          <span className="h-px w-5 bg-slate-600" />
          EXERCISES &amp; VALIDATION
          <span className="h-px w-5 bg-slate-600" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-white tracking-tight max-w-3xl">
          Eight fields, and &quot;we test regularly&quot; is not one of them.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-300">
          An exercise result is meaningful only with its type, scope, date and outcome attached — and no
          success percentage is invented.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-700/80 bg-[#060D20]">
          <img
            src="/images/business-continuity/bc2.png"
            alt="Eight fields, and 'we test regularly' is not one of them"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1788179716437.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Dark Table Card */}
          <div className="rounded-2xl border border-slate-800 bg-[#0E1A3C]/90 shadow-lg overflow-hidden w-full">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-900/60 border-b border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <th scope="col" className="py-2.5 px-4 w-1/3">FIELD</th>
                    <th scope="col" className="py-2.5 px-4 w-2/3">RULE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {exerciseFieldRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition">
                      <td className="py-3 px-4 text-xs font-bold text-white align-top">
                        {row.field}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-300 leading-relaxed align-top">
                        {row.rule}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Translucent Dark Callout Box inside Card */}
            <div className="m-3.5 rounded-2xl border border-slate-800 bg-[#070D1E]/70 p-4 text-xs text-slate-300 leading-relaxed">
              <div className="text-xs font-bold text-slate-200 mb-1.5">
                Why an exercise scope cannot be generalized
              </div>
              <p className="text-[11px] text-slate-400">
                A successful restore test on one dataset says nothing about a different dataset, a different failure mode, or the same dataset six months later. Publishing &quot;we exercise our continuity plans&quot; invites a reviewer to assume coverage the evidence does not establish — so the scope is part of the result rather than context around it. And when an exercise identifies a material gap, the affected public claims move to a review state rather than standing unchanged.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
