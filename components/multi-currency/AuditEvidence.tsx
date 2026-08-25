"use client";

const evidenceRows = [
  {
    event: "Entity or default currency change",
    evidence:
      "Before and after, actor, source, reason, effective date, approval, and the impacted future workflows",
  },
  {
    event: "Customer currency override",
    evidence:
      "The request, the eligibility result, the approver and the effective period",
  },
  {
    event: "Rate source or policy change",
    evidence:
      "Old and new source, type, freshness and rounding policy, owner and effective date",
  },
  {
    event: "Manual rate override",
    evidence:
      "Pair, rate, reason, approver, expiry and the impacted transactions",
  },
  {
    event: "Provider currency change",
    evidence:
      "Provider, account, operation and currency scope, with the effective date",
  },
  {
    event: "Conflict resolution",
    evidence:
      "The competing sources or configurations, the chosen authority and the rationale",
  },
  {
    event: "Stale-rate fallback",
    evidence:
      "Why the conversion was blocked or a fallback shown — never a hidden substitute",
  },
  {
    event: "Rounding or variance adjustment",
    evidence:
      "Calculation basis, amount, currency and the actor or system",
  },
  {
    event: "Export",
    evidence:
      "Requester, purpose, scope, permissions and expiry where applicable",
  },
];

export default function AuditEvidence() {
  return (
    <section className="w-full bg-gray-50 px-4 py-14 dark:bg-slate-950 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
        {/* Heading */}
        <div className="flex w-full max-w-[900px] flex-col items-center gap-3 text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-sky-600/40 dark:bg-sky-400/40" />

            <span className="whitespace-nowrap text-xs font-bold uppercase leading-4 tracking-[0.18em] text-sky-600 dark:text-sky-400">
              Audit, approvals, exceptions &amp; conflict evidence
            </span>

            <span className="h-px w-4 bg-sky-600/40 dark:bg-sky-400/40" />
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-4xl sm:leading-[1.08]">
            <span className="block whitespace-nowrap">
              History has to support an
            </span>

            <span className="block whitespace-nowrap">
              investigation.
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-[720px] text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
            Which currency, rate and policy was effective, which source
            supplied it, what operation consumed it, who approved an
            exception, and what downstream record resulted.
          </p>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
          {/* Desktop header */}
          <div className="hidden grid-cols-[320px_minmax(0,1fr)] border-b border-gray-200 bg-gray-50 dark:border-slate-800 dark:bg-slate-900/80 md:grid">
            <div className="px-4 py-3.5">
              <span className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500 dark:text-slate-400">
                Event
              </span>
            </div>

            <div className="px-4 py-3.5">
              <span className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500 dark:text-slate-400">
                Evidence required
              </span>
            </div>
          </div>

          {/* Rows */}
          <div>
            {evidenceRows.map((item, index) => (
              <div
                key={item.event}
                className={
                  index !== 0
                    ? "border-t border-gray-200 dark:border-slate-800"
                    : ""
                }
              >
                {/* Desktop */}
                <div className="hidden md:grid md:grid-cols-[320px_minmax(0,1fr)]">
                  <div className="px-4 py-3.5">
                    <p className="text-sm font-semibold leading-5 text-slate-900 dark:text-white">
                      {item.event}
                    </p>
                  </div>

                  <div className="px-4 py-3.5">
                    <p className="text-sm leading-5 text-slate-600 dark:text-slate-400">
                      {item.evidence}
                    </p>
                  </div>
                </div>

                {/* Mobile */}
                <div className="flex flex-col gap-2 px-4 py-4 md:hidden">
                  <p className="text-sm font-semibold leading-5 text-slate-900 dark:text-white">
                    {item.event}
                  </p>

                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.evidence}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}