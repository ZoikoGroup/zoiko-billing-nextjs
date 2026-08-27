interface ReauthPatternRow {
  pattern: string;
  requirement: React.ReactNode;
}

const reauthPatternRows: ReauthPatternRow[] = [
  {
    pattern: "Impact preview",
    requirement: (
      <span className="font-bold text-slate-900">
        Explain what will stop working or change before confirmation
      </span>
    ),
  },
  {
    pattern: "Authority check",
    requirement: "Reconfirm the acting administrator holds the required permission",
  },
  {
    pattern: "Second factor / reauth",
    requirement: "Rendered only if canonical policy requires it",
  },
  {
    pattern: "Reason / ticket",
    requirement: "Rendered only if governance policy requires it",
  },
  {
    pattern: "Success evidence",
    requirement: "Completion, effective time and audit reference where supported",
  },
];

export default function HighRiskReauthenticationSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="reauthentication">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          HIGH-RISK ACTIONS &amp; REAUTHENTICATION
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Impact preview before confirmation, always.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Step-up authentication is not invented here. The design reserves a high-assurance
          confirmation pattern for when policy requires one.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-12 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-800/80 bg-[#060D20]">
          <img
            src="/images/devolpers-authentication/da5.png"
            alt="Impact preview before confirmation, always"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787663770150.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm mb-4">
            <div className="p-3.5 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Pattern and requirement.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80">
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-1/3">
                      PATTERN
                    </th>
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-2/3">
                      REQUIREMENT
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {reauthPatternRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.pattern}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.requirement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Applies to Callout Box */}
          <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-3.5 text-xs font-normal text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-900">Applies to:</span> credential creation, permission escalation, rotation, revocation and environment changes.
          </div>

        </div>

      </div>
    </section>
  );
}
