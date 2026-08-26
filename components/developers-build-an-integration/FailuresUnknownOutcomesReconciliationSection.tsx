interface AmbiguityClassRow {
  ambiguityClass: string;
  response: React.ReactNode;
}

const ambiguityClassRows: AmbiguityClassRow[] = [
  {
    ambiguityClass: "Validation rejected",
    response: (
      <>
        Correct input against the canonical contract —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● do not retry unchanged
        </span>
      </>
    ),
  },
  {
    ambiguityClass: "Permission denied",
    response: (
      <>
        Resolve identity and configuration through Authentication —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● never &quot;retry with broader scope&quot;
        </span>
      </>
    ),
  },
  {
    ambiguityClass: "Conflict / stale state",
    response: "Refresh canonical state and apply the documented version rule",
  },
  {
    ambiguityClass: "Dependency missing",
    response: "Resolve the required object or configuration before repetition",
  },
  {
    ambiguityClass: "Rate constraint",
    response: (
      <>
        Follow canonical backoff guidance if published —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● do not invent wait times
        </span>
      </>
    ),
  },
  {
    ambiguityClass: "Transient failure",
    response: "Use documented retry guidance; if the outcome is uncertain, reconcile before repetition",
  },
  {
    ambiguityClass: "Partial completion",
    response: (
      <>
        Identify completed steps and their evidence —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● never assume the workflow finished
        </span>
      </>
    ),
  },
  {
    ambiguityClass: "Webhook delivery issue",
    response: "Separate platform delivery evidence from business-processing outcome",
  },
  {
    ambiguityClass: "Duplicate input or event",
    response: (
      <>
        Use documented stable identifiers —{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● never infer exactly-once delivery
        </span>
      </>
    ),
  },
  {
    ambiguityClass: "Reconciliation discrepancy",
    response: "Compare authoritative sources, classify, assign a correction owner, record evidence",
  },
  {
    ambiguityClass: "Unknown outcome",
    response: (
      <>
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● Treat &quot;no response&quot; as unknown, not failed
        </span>{" "}
        — query authoritative state using safe IDs
      </>
    ),
  },
];

export default function FailuresUnknownOutcomesReconciliationSection() {
  return (
    <section className="w-full bg-[#0B132B] py-12 lg:py-24 text-white border-t border-slate-800" id="failures-outcomes">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          <span className="h-px w-5 bg-slate-600" />
          FAILURES, UNKNOWN OUTCOMES &amp; RECONCILIATION
          <span className="h-px w-5 bg-slate-600" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-white tracking-tight max-w-3xl">
          Reason from evidence, not instinct.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-300">
          Eleven ambiguity classes. Exact codes, retryability and idempotency remain API-owned;
          the response pattern is what this page fixes.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-700/80 bg-[#060D20]">
          <img
            src="/images/developers-build-an-integration/dban4.png"
            alt="Reason from evidence, not instinct"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787669160925.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="rounded-2xl border border-slate-800 bg-[#0E1A3C]/90 shadow-lg overflow-hidden w-full mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <thead>
                  <tr className="bg-slate-900/60 border-b border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <th scope="col" className="py-2.5 px-4 w-2/5">CLASS</th>
                    <th scope="col" className="py-2.5 px-4 w-3/5">REQUIRED RESPONSE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {ambiguityClassRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition">
                      <td className="py-3 px-4 text-xs font-bold text-white align-top">
                        {row.ambiguityClass}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-300 leading-relaxed align-top">
                        {row.response}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dark Guidance Card: Reconciliation runbook contract */}
          <div className="rounded-2xl border border-slate-800 bg-[#0E1A3C] p-4 text-xs text-slate-300">
            <h3 className="text-xs font-bold text-white mb-2">
              Reconciliation runbook contract
            </h3>
            <p className="text-[11px] font-normal leading-relaxed text-slate-300">
              Every runbook names seven things: the <span className="font-bold text-white">trigger</span> condition; the <span className="font-bold text-white">correlation</span> identifiers permitted by contract and privacy policy; which source is <span className="font-bold text-white">authoritative</span> for each decision; the permitted <span className="font-bold text-white">decision</span> set — no action, safe repeat, corrective update, manual review or escalation; a named <span className="font-bold text-white">owner</span> who is an operational role rather than &quot;engineering&quot;; the <span className="font-bold text-white">evidence</span> recorded at minimum necessary detail; and the <span className="font-bold text-white">escalation</span> path based on actual incident classification.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
