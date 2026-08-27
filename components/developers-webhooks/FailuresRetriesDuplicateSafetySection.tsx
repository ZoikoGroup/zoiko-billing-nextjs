interface FailureTopicRow {
  topic: string;
  detail: React.ReactNode;
}

const failureTopicRows: FailureTopicRow[] = [
  {
    topic: "Failure categories",
    detail: "Stable user-facing categories: connection, timeout, verification, receiver rejection, payload invalid — mapped only from canonical sources",
  },
  {
    topic: "Retry schedule",
    detail: (
      <>
        Exact schedule only if engineering publishes it; otherwise{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● state that retry timing is unspecified
        </span>
      </>
    ),
  },
  {
    topic: "Next attempt",
    detail: "Displayed only when deterministically known",
  },
  {
    topic: "Manual retry",
    detail: "Rendered only if supported, with eligibility and a side-effect warning",
  },
  {
    topic: "Duplicate delivery",
    detail: "Publish the actual guarantee; where duplicates can occur, recommend idempotent consumer logic with stable identifiers",
  },
  {
    topic: "Dead-letter / terminal",
    detail: "Used only if the product genuinely has such a state",
  },
  {
    topic: "Unknown outcome",
    detail: (
      <>
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● Never tell developers to blindly replay side-effecting processing
        </span>{" "}
        — preserve safe IDs
      </>
    ),
  },
];

export default function FailuresRetriesDuplicateSafetySection() {
  return (
    <section className="w-full bg-[#0B132B] py-12 lg:py-24 text-white border-t border-slate-800" id="failures-retries">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          <span className="h-px w-5 bg-slate-600" />
          FAILURES, RETRIES &amp; DUPLICATE SAFETY
          <span className="h-px w-5 bg-slate-600" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-white tracking-tight max-w-3xl">
          &quot;No public guarantee is currently published&quot; is a valid state.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-300">
          Seven topics where an invented reassurance would be worse than an honest gap.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-700/80 bg-[#060D20]">
          <img
            src="/images/devolpers-webhooks/dw5.png"
            alt="No public guarantee is currently published is a valid state"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787665740184.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="rounded-2xl border border-slate-800 bg-[#0E1A3C]/90 shadow-lg overflow-hidden w-full mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <thead>
                  <tr className="bg-slate-900/60 border-b border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <th scope="col" className="py-2.5 px-4 w-1/3">TOPIC</th>
                    <th scope="col" className="py-2.5 px-4 w-2/3">REQUIRED ANSWER STATE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {failureTopicRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition">
                      <td className="py-3 px-4 text-xs font-bold text-white align-top">
                        {row.topic}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-300 leading-relaxed align-top">
                        {row.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dark Guidance Card 1 */}
          <div className="rounded-2xl border border-slate-800 bg-[#0E1A3C] p-4 text-xs mb-3">
            <h3 className="text-xs font-bold text-white mb-1.5">
              Consumer-side safety guidance
            </h3>
            <p className="text-[11px] text-slate-300 font-normal leading-relaxed">
              Verify authenticity before trusting or acting on a delivery. De-duplicate using the stable identifier the contract approves. Make business processing idempotent where feasible — <span className="font-bold text-white">never infer an idempotency key the platform has not defined</span>. Persist enough safe evidence to reconcile external processing against event and delivery IDs.
            </p>
          </div>

          {/* Dark Guidance Card 2 */}
          <div className="rounded-2xl border border-slate-800 bg-[#0E1A3C] p-4 text-xs">
            <h3 className="text-xs font-bold text-white mb-1.5">
              Do not treat arrival order as truth
            </h3>
            <p className="text-[11px] text-slate-300 font-normal leading-relaxed">
              Delivery arrival order is not business truth unless ordering guarantees explicitly permit it. Where payload semantics are reference-based or may be stale, fetch authoritative current state through an approved API read — if that pattern is canonically supported.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
