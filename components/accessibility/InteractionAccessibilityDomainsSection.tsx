interface DomainRow {
  domain: string;
  covers: string;
  status: React.ReactNode;
}

const domainRows: DomainRow[] = [
  {
    domain: "Keyboard operation",
    covers: "Reaching and operating every control without a pointer, including custom components.",
    status: (
      <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
        ● Not established [per_scope]
      </span>
    ),
  },
  {
    domain: "Focus visibility & order",
    covers: "A visible focus indicator and a logical, predictable order.",
    status: (
      <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
        ● Not established [per_scope]
      </span>
    ),
  },
  {
    domain: "Screen-reader semantics",
    covers: "Names, roles, states, relationships and live-region announcements.",
    status: (
      <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
        ● Not established [per_scope]
      </span>
    ),
  },
  {
    domain: "Zoom, reflow & spacing",
    covers: "Useability at increased zoom and with adjusted text spacing.",
    status: (
      <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
        ● Not established [per_scope]
      </span>
    ),
  },
  {
    domain: "Contrast & non-color cues",
    covers: "Sufficient contrast, and meaning never conveyed by color alone.",
    status: (
      <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
        ● Not established [per_scope]
      </span>
    ),
  },
  {
    domain: "Forms, errors & validation",
    covers: "Persistent labels, programmatic error association, and clear recovery.",
    status: (
      <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
        ● Not established [per_scope]
      </span>
    ),
  },
  {
    domain: "Tables & data views",
    covers: "Header association, scrolling, sorting and dense-data navigation.",
    status: (
      <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
        ● Not established [per_scope]
      </span>
    ),
  },
  {
    domain: "Motion & timing",
    covers: "Reduced-motion respect, and no essential action lost to a timeout.",
    status: (
      <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
        ● Not established [per_scope]
      </span>
    ),
  },
];

export default function InteractionAccessibilityDomainsSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="domains">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          INTERACTION ACCESSIBILITY DOMAINS
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Eight domains, each with its own status.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A single product-wide answer would be false in both directions. Status is stated per domain,
          per evaluated scope.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    DOMAIN
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/2">
                    COVERS
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {domainRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.domain}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.covers}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1788178861578.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Domain, what it covers and current status.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <th scope="col" className="py-2.5 px-4 w-1/3">DOMAIN</th>
                    <th scope="col" className="py-2.5 px-4 w-2/3">COVERS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {domainRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.domain}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.covers}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Amber "Not established" Callout Box */}
          <div className="rounded-2xl border border-amber-200/80 bg-amber-50/70 p-4 text-xs text-amber-950 font-normal leading-relaxed mt-4">
            <span className="font-bold text-amber-900">Every row reads &quot;not established&quot; for a reason.</span> This is a wireframe with no evidence registry behind it, and the honest rendering of an empty registry is an explicit absence — not a hopeful &quot;supports&quot; that would be a fabricated conformance claim on the one page where that does most harm.
          </div>

        </div>

      </div>
    </section>
  );
}
