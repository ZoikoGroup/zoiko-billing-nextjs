interface IdempotencyMobileRow {
  requirement: string;
  statement: React.ReactNode;
}

const mobileIdempotencyRows: IdempotencyMobileRow[] = [
  {
    requirement: "Idempotency unsafe or valid",
    statement: "Key placement, uniqueness scope, expiry and reuse behavior, replay limits",
  },
  {
    requirement: "Safe retry",
    statement: "Which failures are retryable, backoff expectations, and whether the original",
  },
  {
    requirement: "Unknown outcome",
    statement: (
      <span className="inline-flex items-center gap-1 rounded bg-amber-950/70 border border-amber-800/80 text-amber-300 font-semibold px-2 py-0.5 text-[11px]">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        Define the supported read-back path before attempting a second write
      </span>
    ),
  },
  {
    requirement: "Duplicate risk",
    statement: "State which operations can create duplicates and how the platform prevents",
  },
  {
    requirement: "Partial failure",
    statement: "For multi-step or batch operations, expose partial results and the receiver",
  },
  {
    requirement: "Timeout",
    statement: (
      <span className="inline-flex items-center gap-1 rounded bg-amber-950/70 border border-amber-800/80 text-amber-300 font-semibold px-2 py-0.5 text-[11px]">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        Differentiate client timeout from server-side failure
      </span>
    ),
  },
];

export default function IdempotencyRetriesSection() {
  return (
    <section className="w-full bg-[#0B132B] py-12 lg:py-24 text-white" id="idempotency">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          <span className="h-px w-5 bg-slate-600" />
          IDEMPOTENCY, RETRIES &amp; UNKNOWN OUTCOMES
          <span className="h-px w-5 bg-slate-600" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-white tracking-tight max-w-3xl">
          A safety requirement, not an advanced appendix.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-300">
          This section is mandatory for any financial operation that can be retried, or whose
          outcome can be uncertain after a timeout or network failure.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-12 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-2xl border border-slate-700/80 bg-[#060D20]">
          <img
            src="/images/devoloper-api-documentation/dad4.png"
            alt="A safety requirement, not an advanced appendix"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787661565380.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Dark Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0E1A3C] shadow-lg mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-white/10 border-b border-slate-800">
                    <th scope="col" className="py-3 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-300 w-1/3">
                      REQUIREMENT
                    </th>
                    <th scope="col" className="py-3 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-300 w-2/3">
                      REQUIRED STATEMENT
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {mobileIdempotencyRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition">
                      <td className="py-3.5 px-4 text-xs font-bold text-white align-top">
                        {row.requirement}
                      </td>
                      <td className="py-3.5 px-4 text-[11px] font-normal text-slate-300 leading-relaxed align-top">
                        {row.statement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dark Callout Box */}
          <div className="rounded-xl border border-slate-800 bg-[#070D1E] p-4 text-xs text-slate-300 leading-relaxed font-normal">
            <div className="font-bold text-white mb-1">
              Why this sits in the reference, not an appendix
            </div>
            <p>
              A developer who cannot tell whether a write applied will either retry blindly and create a duplicate invoice or payment, or assume failure and under-collect. Both outcomes are financial. The read-back pattern belongs beside the operation that needs it.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
