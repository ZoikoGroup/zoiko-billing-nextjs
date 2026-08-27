interface BlueprintQuestionRow {
  field: string;
  question: React.ReactNode;
}

const blueprintQuestionRows: BlueprintQuestionRow[] = [
  {
    field: "Systems",
    question: "Which verified systems participate?",
  },
  {
    field: "Integration boundary",
    question: "Where does translation, orchestration and retry logic live?",
  },
  {
    field: "Data direction",
    question: (
      <>
        Inbound, outbound, event observation, or a verified bidirectional pattern —{" "}
        <span className="font-bold text-slate-900">never assumed</span>
      </>
    ),
  },
  {
    field: "System of record",
    question: "Which system owns authoritative state for each object, field and transition?",
  },
  {
    field: "Write authority",
    question: (
      <>
        Which actor may create, modify, transition, adjust, reverse, allocate or reconcile —{" "}
        <span className="font-bold text-slate-900">only as permissions permit</span>
      </>
    ),
  },
  {
    field: "Conflict rule",
    question: "What happens when both systems disagree or a stale version is presented? Marketplaces or unmapped states marked undocumented",
  },
  {
    field: "Evidence / correlation",
    question: "Which safe identifiers connect an external action to API result, event and audit evidence?",
  },
  {
    field: "Owners",
    question: "Product, technical, security, operations and escalation owners",
  },
  {
    field: "No architecture fiction",
    question: "No queues, middleware, ETL, iPaaS, database or direct ledger access implied",
  },
];

export default function ArchitectureResponsibilityModelSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="architecture-model">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          ARCHITECTURE &amp; RESPONSIBILITY MODEL
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Nine questions the blueprint must answer.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Bidirectional is never inferred, and no deployment architecture is mandated by this
          page.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-800/80 bg-[#060D20]">
          <img
            src="/images/developers-build-an-integration/dban2.png"
            alt="Nine questions the blueprint must answer"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787668991583.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Blueprint field and required design question.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80">
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-2/5">
                      FIELD
                    </th>
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-3/5">
                      QUESTION
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {blueprintQuestionRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.field}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.question}
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
