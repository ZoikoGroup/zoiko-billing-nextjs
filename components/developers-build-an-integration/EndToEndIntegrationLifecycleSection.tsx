interface LifecycleStageRow {
  stage: string;
  responsibility: string;
  exitCriteria: string;
}

const lifecycleStageRows: LifecycleStageRow[] = [
  {
    stage: "Discover",
    responsibility: "Confirm outcome, API fit, constraints, owners and canonical sources.",
    exitCriteria: "Approved outcome, source references and known constraints",
  },
  {
    stage: "Authorize",
    responsibility: "Resolve integration identity, environment, permissions, credential ownership and rotation responsibility.",
    exitCriteria: "Authentication plan approved for the intended environment",
  },
  {
    stage: "Model",
    responsibility: "Map identities, states, actions, source of truth, mutability and evidence.",
    exitCriteria: "Mapping reviewed; invalid, conflict and unmapped cases owned",
  },
  {
    stage: "Build",
    responsibility: "Implement requests, events, validation and application-level safeguards.",
    exitCriteria: "Implementation references canonical docs; no undocumented behavior",
  },
  {
    stage: "Test",
    responsibility: "Exercise happy, edge, failure, duplicate, recovery and reconciliation cases.",
    exitCriteria: "Required evidence complete; production differences identified",
  },
  {
    stage: "Launch",
    responsibility: "Pass security, observability, reconciliation, support and rollout gates.",
    exitCriteria: "Production owners sign off; go-live and backout plan ready",
  },
  {
    stage: "Operate",
    responsibility: "Monitor health, errors, exceptions, delivery evidence and reconciliation.",
    exitCriteria: "Operational cadence and exception ownership active",
  },
  {
    stage: "Evolve",
    responsibility: "Adopt version changes safely; migrate, hand over or decommission with evidence.",
    exitCriteria: "Change and decommission artifacts complete",
  },
];

export default function EndToEndIntegrationLifecycleSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="integration-lifecycle">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          END-TO-END INTEGRATION LIFECYCLE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Eight stages, each with an exit criterion.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A stage is complete when its exit condition is met — not when the code compiles.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/5">
                    STAGE
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-[45%]">
                    RESPONSIBILITY
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-[35%]">
                    EXIT CRITERIA
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {lifecycleStageRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.stage}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.responsibility}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.exitCriteria}
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
