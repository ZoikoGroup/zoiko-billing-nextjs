const reportingQuestions = [
  {
    question: "What is ready to bill?",
    proof: "Definition, source, current readiness state and as-of time",
  },
  {
    question: "What is pending approval?",
    proof: "Approver and state, with no assumed outcome",
  },
  {
    question: "What was billed or issued?",
    proof: "Issued-document definition and period",
  },
  {
    question: "Which engagements have exceptions?",
    proof: "Reason taxonomy and owner",
  },
  {
    question: "What is outstanding?",
    proof: "AR definition, with Finance authority stated",
  },
  {
    question: "How much retainer remains?",
    proof:
      "Only where an authoritative retainer balance capability exists — otherwise the question is not answered here",
  },
];

const linkedQuestions = [
  {
    question: "How do external systems connect?",
    description: "Approved Integration Registry methods and direction.",
    link: "Integrations",
  },
  {
    question: "Can we grow to multiple entities or currencies?",
    description: "Availability stays explicit.",
    link: "Global Billing",
  },
  {
    question: "Can Zoiko One connect?",
    description: "Evaluated separately, with no forced migration.",
    link: "Zoiko Billing + Zoiko One",
  },
];

export default function BillingReporting() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-4 px-0 sm:px-4 lg:px-7">
        {/* Section Label */}
        <div className="flex items-center gap-3">
          <span className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Reporting, integrations &amp; growth
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
          Operational reporting, with the definition attached.
        </h2>

        {/* Description */}
        <p className="max-w-[686px] text-sm font-normal leading-6 text-slate-600 sm:text-base">
          Each figure names its source, definition, time basis and exclusions.
          Metrics your accounting stack owns are not restated here.
        </p>

        {/* Reporting Table */}
        <div className="mt-5 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
          <div className="w-full overflow-x-auto">
            <table className="min-w-[900px] w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-[360px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                    Question
                  </th>

                  <th className="min-w-[540px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                    Required proof or boundary
                  </th>
                </tr>
              </thead>

              <tbody>
                {reportingQuestions.map((item) => (
                  <tr key={item.question} className="align-top">
                    <td className="border-b border-gray-200 px-4 py-4 text-sm font-semibold leading-5 text-slate-900">
                      {item.question}
                    </td>

                    <td className="border-b border-gray-200 px-4 py-4 text-sm leading-5 text-slate-600">
                      {item.proof}
                    </td>
                  </tr>
                ))}

                {linkedQuestions.map((item) => (
                  <tr key={item.question} className="align-top">
                    <td className="border-b border-gray-200 px-4 py-4 text-sm font-semibold leading-5 text-slate-900">
                      {item.question}
                    </td>

                    <td className="border-b border-gray-200 px-4 py-4 text-sm leading-5 text-slate-600">
                      {item.description}{" "}
                      <span className="font-semibold text-blue-600">
                        {item.link}
                      </span>
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