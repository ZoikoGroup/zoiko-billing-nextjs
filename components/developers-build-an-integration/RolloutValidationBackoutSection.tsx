interface RolloutPhaseRow {
  phase: string;
  requiredDecision: React.ReactNode;
}

const rolloutPhaseRows: RolloutPhaseRow[] = [
  {
    phase: "Pre-launch",
    requiredDecision: "Freeze the relevant configuration version; confirm credentials, endpoints and mappings; capture baseline evidence",
  },
  {
    phase: "Limited rollout",
    requiredDecision: (
      <>
        Narrow scope only where architecture and product support safe scoping —{" "}
        <span className="font-bold text-slate-900">
          do not invent percentage or canary controls
        </span>
      </>
    ),
  },
  {
    phase: "Validation",
    requiredDecision: "Verify expected API, business, event and reconciliation outcomes using approved evidence",
  },
  {
    phase: "Pause criteria",
    requiredDecision: "Conditions requiring new writes or processing to stop, with the mechanism matching the architecture",
  },
  {
    phase: "Backout",
    requiredDecision: (
      <>
        How to stop or revert components and credentials safely —{" "}
        <span className="font-bold text-slate-900">
          without pretending business transactions always reverse
        </span>
      </>
    ),
  },
  {
    phase: "Reconciliation after rollback",
    requiredDecision: "Compare both systems and resolve partial, late or duplicate outcomes before resuming",
  },
  {
    phase: "Communication",
    requiredDecision: "Named technical and business owners receive launch and exception status",
  },
  {
    phase: "Evidence",
    requiredDecision: "Deployment version, timings, validation results, incidents, reconciliation result and final decision",
  },
];

export default function RolloutValidationBackoutSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="rollout-validation">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          ROLLOUT, VALIDATION &amp; BACKOUT
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Backout is not the same as undo.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          You can stop components and revoke credentials. You cannot pretend every business
          transaction can be rolled back.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    PHASE
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIRED DECISION
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rolloutPhaseRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.phase}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.requiredDecision}
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
