export default function DomainReadinessSummarySection() {
  const nextActions = [
    {
      text: "Group unresolved items by domain and owner, never by a severity score.",
    },
    {
      text: "Route each to its specialist destination rather than resolving it here.",
    },
    {
      text: "Record a re-review trigger for any time-sensitive position.",
    },
    {
      prefix: "Export before circulating",
      suffix: " — the disclaimers must travel with the document.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 font-[family-name:var(--font-inter)] text-slate-900 sm:py-20 md:py-24">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* EYEBROW */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7890b2] sm:text-xs">
            Domain 8 &middot; Readiness Summary &amp; Next Actions
          </span>
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
        </div>

        {/* HEADING */}
        <h2 className="!font-[family-name:var(--font-jakarta)] !m-0 max-w-[850px] text-center !text-[30px] font-extrabold !leading-[1.18] !tracking-[-0.035em] text-[#091127] sm:!text-[38px] md:!text-[44px]">
          Unresolved items, grouped by domain <br className="hidden sm:inline" />
          rather than ranked.
        </h2>

        {/* SUBTITLE */}
        <p className="!m-0 mt-3.5 max-w-[700px] text-center text-xs leading-relaxed text-[#5d7192] sm:text-sm md:text-base">
          No severity score orders this list.{" "}
          <strong className="font-semibold text-slate-800">
            Source gaps and owner gaps are reported separately
          </strong>
          , because an item can be verified and still have neither.
        </p>

        {/* 2X2 CARDS GRID */}
        <div className="mt-10 grid w-full max-w-[1240px] grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
          {/* CARD 1: UNRESOLVED PRIORITIES */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.03)] sm:p-7">
            <div>
              <h3 className="!font-[family-name:var(--font-jakarta)] !m-0 text-sm font-bold text-[#091127] sm:text-[15px]">
                Unresolved priorities &mdash; by domain
              </h3>
              <p className="!m-0 mt-3 text-xs leading-relaxed text-[#5d7192] sm:text-[13px]">
                No items are currently marked Needs review or Blocked. That is
                not the same as nothing being open: 32 items start Not assessed.
              </p>
            </div>
          </div>

          {/* CARD 2: SOURCE GAPS */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.03)] sm:p-7">
            <div>
              <h3 className="!font-[family-name:var(--font-jakarta)] !m-0 text-sm font-bold text-[#091127] sm:text-[15px]">
                Source gaps
              </h3>
              <p className="!m-0 mt-3 text-xs leading-relaxed text-[#5d7192] sm:text-[13px]">
                No verified item is missing an evidence reference.
              </p>
            </div>
          </div>

          {/* CARD 3: OWNER GAPS */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.03)] sm:p-7">
            <div>
              <h3 className="!font-[family-name:var(--font-jakarta)] !m-0 text-sm font-bold text-[#091127] sm:text-[15px]">
                Owner gaps
              </h3>
              <p className="!m-0 mt-3 text-xs leading-relaxed text-[#5d7192] sm:text-[13px]">
                No verified item is missing an accountable owner reference.
              </p>
            </div>
          </div>

          {/* CARD 4: NEXT ACTIONS */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.03)] sm:p-7">
            <div>
              <h3 className="!font-[family-name:var(--font-jakarta)] !m-0 text-sm font-bold text-[#091127] sm:text-[15px]">
                Next actions
              </h3>
              <ul className="!m-0 !list-none !p-0 mt-3 flex flex-col gap-2.5">
                {nextActions.map((action, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-[#5d7192] sm:text-[13px]"
                  >
                    <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border border-[#1D70F5] bg-blue-50/50 text-[#1D70F5]">
                      <svg
                        className="h-2 w-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>
                      {action.prefix ? (
                        <>
                          <strong className="font-semibold text-slate-800">
                            {action.prefix}
                          </strong>
                          {action.suffix}
                        </>
                      ) : (
                        action.text
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* MOBILE READINESS LANGUAGE CALLOUT (lg:hidden) */}
        <div className="mt-5 w-full max-w-[1240px] rounded-xl border border-rose-200/90 bg-[#fff1f2] p-4 text-left text-xs leading-relaxed text-[#9f1239] shadow-sm lg:hidden">
          <strong className="font-bold text-[#881337]">
            Readiness language stays neutral rather than triumphant.
          </strong>{" "}
          This summary uses reviewed, verified against source, needs review, and blocked. It never says certified, approved for launch, compliant, or production-ready &mdash; those are conclusions a governed process must reach on its own, not conclusions a tool can provide.
        </div>
      </div>
    </section>
  );
}
