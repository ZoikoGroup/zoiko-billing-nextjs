interface AvailabilityStateRow {
  badge: React.ReactNode;
  meaning: React.ReactNode;
  publicLanguage: string;
}

const availabilityStateRows: AvailabilityStateRow[] = [
  {
    badge: (
      <span className="bg-emerald-50 text-emerald-700 text-[10px] px-2 py-0.5 rounded font-bold border border-emerald-200/80 inline-block">
        + Shipped / effective
      </span>
    ),
    meaning: "Operationally effective for the stated scope.",
    publicLanguage: "Available for [scope]",
  },
  {
    badge: (
      <span className="bg-blue-50 text-blue-700 text-[10px] px-2 py-0.5 rounded font-semibold border border-blue-200/80 inline-block">
        o Rolling out
      </span>
    ),
    meaning: (
      <>
        Being enabled progressively;{" "}
        <span className="font-bold text-slate-900">not universal yet</span>.
      </>
    ),
    publicLanguage: "Rolling out to [scope]; schedule approved",
  },
  {
    badge: (
      <span className="bg-amber-50 text-amber-800 text-[10px] px-2 py-0.5 rounded font-semibold border border-amber-200/80 inline-block">
        o Scope-limited
      </span>
    ),
    meaning: "Available only for an approved region, plan, environment or cohort.",
    publicLanguage: "Available for [scope]; see eligibility",
  },
  {
    badge: (
      <span className="bg-amber-100/80 text-amber-900 text-[10px] px-2 py-0.5 rounded font-semibold border border-amber-300/80 inline-block">
        o Deprecated
      </span>
    ),
    meaning: "Still available, but replacement or migration is required or recommended.",
    publicLanguage: "Deprecated; migration required",
  },
  {
    badge: (
      <span className="bg-red-50 text-red-700 text-[10px] px-2 py-0.5 rounded font-semibold border border-red-200/80 inline-block">
        o Retired
      </span>
    ),
    meaning: "No longer supported for the stated scope.",
    publicLanguage: "Retired from [scope]; see documentation",
  },
  {
    badge: (
      <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded font-semibold inline-block">
        o Superseded
      </span>
    ),
    meaning: "A historical communication replaced by a newer update.",
    publicLanguage: "Superseded by [link]",
  },
  {
    badge: (
      <span className="bg-red-100 text-red-800 text-[10px] px-2 py-0.5 rounded font-semibold border border-red-200/80 inline-block">
        o Withdrawn
      </span>
    ),
    meaning: "Removed due to error, policy or invalid source.",
    publicLanguage: "Withdrawn; see safe redirect notice",
  },
];

export default function AvailabilityStateContractSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="availability-contract">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          AVAILABILITY STATE CONTRACT
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Seven states, and shipped is not the same as universal.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Public language is prescribed per state, because &quot;available now&quot; reads as
          everywhere to a reader whose region or plan is excluded.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/product-updates/pu2.png"
            alt="Seven states, and shipped is not the same as universal"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787835265594.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              State, meaning and required public language.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <th scope="col" className="py-2.5 px-4 w-1/4">STATE</th>
                    <th scope="col" className="py-2.5 px-4 w-2/4">MEANING</th>
                    <th scope="col" className="py-2.5 px-4 w-1/4">PUBLIC LANGUAGE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {availabilityStateRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.badge}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.meaning}
                      </td>
                      <td className="py-3 px-4 text-[10px] font-mono text-purple-700 font-semibold align-top">
                        {row.publicLanguage}
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
