interface PolicyStateRow {
  badge: React.ReactNode;
  publicBehavior: string;
  guard: React.ReactNode;
}

const policyStateRows: PolicyStateRow[] = [
  {
    badge: (
      <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded font-semibold inline-block">
        ● Draft
      </span>
    ),
    publicBehavior: "Not public.",
    guard: "Editorial, legal review required",
  },
  {
    badge: (
      <span className="bg-blue-50 text-blue-700 text-[10px] px-2 py-0.5 rounded font-semibold border border-blue-200/80 inline-block">
        o Approved — scheduled
      </span>
    ),
    publicBehavior: "Not current until its effective date.",
    guard: "Public preview only where approved",
  },
  {
    badge: (
      <span className="bg-emerald-50 text-emerald-700 text-[10px] px-2 py-0.5 rounded font-bold border border-emerald-200/80 inline-block">
        ● Published — current
      </span>
    ),
    publicBehavior: "Canonical and indexable.",
    guard: <span className="font-bold text-slate-900">All commitments sourced</span>,
  },
  {
    badge: (
      <span className="bg-blue-50 text-blue-700 text-[10px] px-2 py-0.5 rounded font-semibold border border-blue-200/80 inline-block">
        ● Future effective
      </span>
    ),
    publicBehavior: "If shown, clearly labeled future and not current.",
    guard: <span className="font-bold text-slate-900">No automatic early application</span>,
  },
  {
    badge: (
      <span className="bg-amber-100/80 text-amber-900 text-[10px] px-2 py-0.5 rounded font-semibold border border-amber-300/80 inline-block">
        ● Replaced
      </span>
    ),
    publicBehavior: "A historical version, no longer current.",
    guard: "The current replacement clearly linked",
  },
  {
    badge: (
      <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded font-semibold inline-block">
        ● Archived
      </span>
    ),
    publicBehavior: "Historical reference only where Legal permits.",
    guard: "Noindex or restricted access",
  },
  {
    badge: (
      <span className="bg-red-100 text-red-800 text-[10px] px-2 py-0.5 rounded font-semibold border border-red-200/80 inline-block">
        ● Withdrawn
      </span>
    ),
    publicBehavior: "Removed from public navigation and index.",
    guard: "Safe replacement notice",
  },
];

export default function VersioningChangeNoticesSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="versioning-notices">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          VERSIONING &amp; CHANGE NOTICES
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Seven policy states, and a future version is never applied early.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A support policy is cited in procurement and in disputes, so historical versions matter as
          much as the current one.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/support-policy/sp4.png"
            alt="Seven policy states, and a future version is never applied early"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1788177966186.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              State, public behavior and guard.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <th scope="col" className="py-2.5 px-4 w-1/4">STATE</th>
                    <th scope="col" className="py-2.5 px-4 w-2/4">PUBLIC BEHAVIOR</th>
                    <th scope="col" className="py-2.5 px-4 w-1/4">GUARD</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {policyStateRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.badge}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.publicBehavior}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.guard}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Red Historical Versions Footnote Box */}
          <div className="rounded-2xl border border-red-200/80 bg-red-50/70 p-4 text-xs text-red-950 font-normal leading-relaxed mt-4">
            <span className="font-bold text-red-900">Historical versions are not corrected into the present.</span> A customer whose dispute concerns a period covered by an earlier version needs that version as it stood. Editing a superseded policy to match current commitments destroys the record both sides rely on.
          </div>

        </div>

      </div>
    </section>
  );
}
