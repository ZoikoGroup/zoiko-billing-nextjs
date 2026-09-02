interface DocStateRow {
  badge: React.ReactNode;
  treatment: React.ReactNode;
}

const docStateRows: DocStateRow[] = [
  {
    badge: (
      <span className="bg-emerald-50 text-emerald-700 text-[10px] px-2 py-0.5 rounded font-bold border border-emerald-200/80 inline-block">
        ● Current
      </span>
    ),
    treatment: "Available, searchable and eligible to be featured",
  },
  {
    badge: (
      <span className="bg-blue-50 text-blue-700 text-[10px] px-2 py-0.5 rounded font-semibold border border-blue-200/80 inline-block">
        ● Recently updated
      </span>
    ),
    treatment: "Review date refreshed, with a change note where material",
  },
  {
    badge: (
      <span className="bg-amber-50 text-amber-800 text-[10px] px-2 py-0.5 rounded font-semibold border border-amber-200/80 inline-block">
        ● Review due
      </span>
    ),
    treatment: (
      <>
        Remains available according to risk,{" "}
        <span className="font-bold text-slate-900">but is not featured as current</span>
      </>
    ),
  },
  {
    badge: (
      <span className="bg-red-50 text-red-700 text-[10px] px-2 py-0.5 rounded font-semibold border border-red-200/80 inline-block">
        ● Urgent re-review
      </span>
    ),
    treatment: (
      <>
        <span className="font-bold text-slate-900">Suppressed or warned depending on product risk</span> — a procedure that fails is not served
      </>
    ),
  },
  {
    badge: (
      <span className="bg-amber-100/80 text-amber-900 text-[10px] px-2 py-0.5 rounded font-semibold border border-amber-300/80 inline-block">
        ● Replaced
      </span>
    ),
    treatment: "Search points to the current replacement; the old link preserves safe redirect",
  },
  {
    badge: (
      <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded font-semibold inline-block">
        ● Historical
      </span>
    ),
    treatment: "Explicitly marked, with no implication of current behavior",
  },
  {
    badge: (
      <span className="bg-red-100 text-red-800 text-[10px] px-2 py-0.5 rounded font-semibold border border-red-200/80 inline-block">
        ● Withdrawn
      </span>
    ),
    treatment: "Absent from search and index, with safe route treatment",
  },
  {
    badge: (
      <span className="bg-purple-50 text-purple-700 text-[10px] px-2 py-0.5 rounded font-semibold border border-purple-200/80 inline-block">
        ● Unverified after product change
      </span>
    ),
    treatment: "Not presented as current until the product source confirms behavior",
  },
];

export default function DocStatesChangeImpactSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="doc-states-impact">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          DOCUMENTATION STATES &amp; CHANGE IMPACT
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Eight states, and one suppresses the article outright.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          When the product changes, a stale procedure is more dangerous than a missing one — someone
          will follow it.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/documentation/d5.png"
            alt="Eight states, and one suppresses the article outright"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787836464012.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              State and required treatment.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <th scope="col" className="py-2.5 px-4 w-1/3">STATE</th>
                    <th scope="col" className="py-2.5 px-4 w-2/3">TREATMENT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {docStateRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.badge}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.treatment}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Red Safety Callout Box */}
          <div className="rounded-2xl border border-red-200/80 bg-red-50/70 p-4 text-xs text-red-950 font-normal leading-relaxed mt-4">
            <span className="font-bold text-red-900">Why urgent re-review can suppress.</span> Most content systems treat staleness as a ranking problem. In operational documentation it is a safety problem: a procedure describing a state transition the product no longer permits will be followed to a failure, and in billing that failure can mean a duplicated document or a misallocated payment.
          </div>

        </div>

      </div>
    </section>
  );
}
