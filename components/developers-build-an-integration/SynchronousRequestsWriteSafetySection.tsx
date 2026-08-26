interface WriteSafetyDecisionRow {
  decision: string;
  requiredOutcome: React.ReactNode;
}

const writeSafetyDecisionRows: WriteSafetyDecisionRow[] = [
  {
    decision: "Is the operation state-changing?",
    requiredOutcome: "If yes, a documented safe-repetition behavior must be implemented",
  },
  {
    decision: "Does it support idempotency?",
    requiredOutcome: (
      <>
        Use the documented mechanism —{" "}
        <span className="font-bold text-slate-900">
          never infer a key the platform does not define
        </span>
      </>
    ),
  },
  {
    decision: "What is retryable?",
    requiredOutcome: "Follow canonical retryability per error class; do not retry an unchangeable request",
  },
  {
    decision: "What if the outcome is unknown?",
    requiredOutcome: "Read back authoritative state before deciding whether repetition is safe",
  },
  {
    decision: "Are there ordering dependencies?",
    requiredOutcome: "Sequence dependent writes explicitly rather than relying on timing assumptions",
  },
  {
    decision: "What evidence persists?",
    requiredOutcome: "Safe correlation identifiers stored on both sides at the time of execution",
  },
];

export default function SynchronousRequestsWriteSafetySection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="synchronous-requests">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          SYNCHRONOUS REQUESTS &amp; WRITE SAFETY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Every state-changing call needs a repetition plan.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Idempotency, retry and reconciliation semantics stay API-owned; this page requires
          that a plan exists for each write before launch.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-800/80 bg-[#060D20]">
          <img
            src="/images/developers-build-an-integration/dban3.png"
            alt="Every state-changing call needs a repetition plan"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787669067292.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Write-safety decision and required outcome.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80">
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-2/5">
                      DECISION
                    </th>
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-3/5">
                      REQUIRED OUTCOME
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {writeSafetyDecisionRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.decision}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.requiredOutcome}
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
