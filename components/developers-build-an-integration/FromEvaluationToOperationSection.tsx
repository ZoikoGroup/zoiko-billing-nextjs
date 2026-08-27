interface ConversionStageRow {
  stage: string;
  userNeed: string;
  pageResponse: string;
}

const conversionStageRows: ConversionStageRow[] = [
  {
    stage: "Discovery",
    userNeed: "Can this integration be built at all?",
    pageResponse: "Outcome registry with source-approved availability",
  },
  {
    stage: "Evaluation",
    userNeed: "Is it secure and operationally credible?",
    pageResponse: "Architecture, responsibility model, security and evidence",
  },
  {
    stage: "Activation",
    userNeed: "Can I plan and test safely?",
    pageResponse: "Lifecycle, mapping, sandbox strategy",
  },
  {
    stage: "Implementation",
    userNeed: "Can I handle ambiguity?",
    pageResponse: "Failure classes and the reconciliation runbook",
  },
  {
    stage: "Launch",
    userNeed: "Are we actually ready?",
    pageResponse: "The readiness gate and rollout plan",
  },
  {
    stage: "Production",
    userNeed: "Can we operate it?",
    pageResponse: "Observability, incident ownership and change monitoring",
  },
  {
    stage: "Retention",
    userNeed: "Will it survive change and handover?",
    pageResponse: "Versioning, handover and decommission artifacts",
  },
];

export default function FromEvaluationToOperationSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="evaluation-to-operation">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          FROM EVALUATION TO OPERATION
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Successful integration is the conversion.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Seven stages, with human assistance appearing only where scale, security or
          contractual need genuinely requires it.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/5">
                    STAGE
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-2/5">
                    USER NEED
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-2/5">
                    PAGE RESPONSE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {conversionStageRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.stage}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.userNeed}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.pageResponse}
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
