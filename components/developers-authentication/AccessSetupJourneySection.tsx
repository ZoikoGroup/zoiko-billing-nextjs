interface StepSequenceRow {
  step: string;
  detail: React.ReactNode;
}

interface OutcomeStateRow {
  badge: React.ReactNode;
  behavior: React.ReactNode;
}

const setupSequenceRows: StepSequenceRow[] = [
  {
    step: "1 · Confirm context",
    detail: "Organization or workspace, and the intended integration purpose",
  },
  {
    step: "2 · Choose a method",
    detail: "From the verified method registry only",
  },
  {
    step: "3 · Confirm prerequisites",
    detail: "Plan and availability, plus administrator permissions",
  },
  {
    step: "4 · Create the identity",
    detail: "Through the approved setup surface",
  },
  {
    step: "5 · Reveal or copy",
    detail: (
      <>
        Only through the approved secure pattern —{" "}
        <span className="font-bold text-slate-900">
          never redisplay secret material if the product does not support redisplay
        </span>
      </>
    ),
  },
  {
    step: "6 · Assign permissions",
    detail: "Only the permissions actually required",
  },
  {
    step: "7 · Choose environment & test",
    detail: "A non-destructive request where supported",
  },
  {
    step: "8 · Confirm",
    detail: "Success, owner, rotation and review responsibility, and the audit record",
  },
];

const outcomeStateRows: OutcomeStateRow[] = [
  {
    badge: (
      <span className="inline-flex items-center gap-1 rounded bg-slate-100 border border-slate-200 text-slate-700 font-semibold px-2 py-0.5 text-[11px]">
        <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
        Unavailable
      </span>
    ),
    behavior: (
      <>
        Explain why{" "}
        <span className="font-bold text-slate-900">
          do not show a dead-end call to action
        </span>
      </>
    ),
  },
  {
    badge: (
      <span className="inline-flex items-center gap-1 rounded bg-red-50 border border-red-200 text-red-700 font-semibold px-2 py-0.5 text-[11px]">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
        Permission denied
      </span>
    ),
    behavior: "Name the required administrative role and route to the owner or admin",
  },
  {
    badge: (
      <span className="inline-flex items-center gap-1 rounded bg-amber-50 border border-amber-200 text-amber-800 font-semibold px-2 py-0.5 text-[11px]">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
        Plan-gated
      </span>
    ),
    behavior: (
      <>
        Show the benefit and an approved route,{" "}
        <span className="font-bold text-slate-900">
          without blocking access to public documentation
        </span>
      </>
    ),
  },
  {
    badge: (
      <span className="inline-flex items-center gap-1 rounded bg-amber-50 border border-amber-200 text-amber-800 font-semibold px-2 py-0.5 text-[11px]">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
        Validation failure
      </span>
    ),
    behavior: (
      <>
        Keep non-secret inputs, clarify the exact field, and{" "}
        <span className="font-bold text-slate-900">
          never echo the full secret value
        </span>
      </>
    ),
  },
  {
    badge: (
      <span className="inline-flex items-center gap-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold px-2 py-0.5 text-[11px]">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        Success
      </span>
    ),
    behavior: "Safe re-display metadata, the next step, and audit confirmation where supported",
  },
];

export default function AccessSetupJourneySection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="setup-journey">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          ACCESS SETUP JOURNEY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Eight steps, with five failure states that never dead-end.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A blocked step explains why and routes to the person who can unblock it.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:grid)                             */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid mt-14 w-full max-w-[1240px] grid-cols-2 gap-8 items-center text-left">
          
          {/* Left Column: Table Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden w-full">
            <div className="p-3.5 px-6 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              The setup sequence.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <tbody className="divide-y divide-slate-100">
                  {setupSequenceRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3.5 px-6 text-xs sm:text-sm font-bold text-slate-900 align-top w-2/5">
                        {row.step}
                      </td>
                      <td className="py-3.5 px-6 text-xs font-normal text-slate-600 leading-relaxed align-top w-3/5">
                        {row.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Graphic Image da3.png */}
          <div className="w-full overflow-hidden rounded-3xl shadow-xl border border-slate-800/80 bg-[#060D20]">
            <img
              src="/images/devolpers-authentication/da3.png"
              alt="Eight steps, with five failure states that never dead-end"
              className="w-full h-auto object-cover rounded-3xl block"
            />
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787663340283.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card 1: Setup sequence */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden w-full mb-4">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              The setup sequence.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <tbody className="divide-y divide-slate-100">
                  {setupSequenceRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-2.5 px-4 text-xs font-bold text-slate-900 align-top w-2/5">
                        {row.step}
                      </td>
                      <td className="py-2.5 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top w-3/5">
                        {row.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Table Card 2: State outcomes */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden w-full">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              State outcomes and required behavior.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <tbody className="divide-y divide-slate-100">
                  {outcomeStateRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs align-top w-2/5">
                        {row.badge}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top w-3/5">
                        {row.behavior}
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
