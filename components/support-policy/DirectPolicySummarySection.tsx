interface PolicySummaryRow {
  question: string;
  answerSource: React.ReactNode;
}

const policySummaryRows: PolicySummaryRow[] = [
  {
    question: "Who is eligible for support?",
    answerSource: "Approved eligibility conditions from the registry, with plan entitlement resolved from the commercial source",
  },
  {
    question: "Which channels can I use?",
    answerSource: (
      <>
        Only channels currently approved <span className="font-bold text-slate-900">and available for your context</span>
      </>
    ),
  },
  {
    question: "When is support available?",
    answerSource: "Approved availability values, with timezone and calendar basis stated",
  },
  {
    question: "What does support commit to?",
    answerSource: "Only commitments with an approved value, scope, measurement basis and exclusions",
  },
  {
    question: "What is not covered?",
    answerSource: "Stated exclusions, each with an alternative route",
  },
  {
    question: "What is expected of me?",
    answerSource: "Customer responsibilities, including safe data handling",
  },
  {
    question: "Which document wins?",
    answerSource: (
      <>
        <span className="font-bold text-slate-900">Your signed contract or order form where it differs</span>, per the approved precedence statement
      </>
    ),
  },
];

export default function DirectPolicySummarySection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="policy-summary">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          DIRECT POLICY SUMMARY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          The short version, before the detail.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Someone arriving from a procurement checklist needs the shape of the policy in one screen.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/3">
                    QUESTION
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-2/3">
                    ANSWER SOURCE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {policySummaryRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.question}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.answerSource}
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
