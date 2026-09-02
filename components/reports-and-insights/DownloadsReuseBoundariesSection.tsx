interface AssetRuleRow {
  asset: string;
  rule: React.ReactNode;
}

const assetRuleRows: AssetRuleRow[] = [
  {
    asset: "HTML report",
    rule: "The primary source of truth",
  },
  {
    asset: "PDF",
    rule: (
      <>
        Offered only as a registry-backed, accessible, version-matched asset —{" "}
        <span className="font-bold text-slate-900">not promised by default</span>
      </>
    ),
  },
  {
    asset: "CSV / data file",
    rule: "Only where privacy, license and methodology permit and export is explicitly approved, with schema, definitions and use note included",
  },
  {
    asset: "Chart image",
    rule: (
      <>
        Only with an accessible alternative and source, period and units still attached —{" "}
        <span className="font-bold text-slate-900">avoid context-free share images</span>
      </>
    ),
  },
  {
    asset: "Citation",
    rule: "Stable title, publisher, date and canonical URL",
  },
  {
    asset: "Share",
    rule: (
      <>
        A static URL is sufficient —{" "}
        <span className="font-bold text-slate-900">
          do not invent social, share or save features
        </span>
      </>
    ),
  },
];

export default function DownloadsReuseBoundariesSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="downloads-reuse">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          DOWNLOADS &amp; REUSE BOUNDARIES
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          HTML is the source of truth.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A PDF is a version-matched artifact, not a default promise — and a chart image never
          travels without its context.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/5">
                    ASSET
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-4/5">
                    RULE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {assetRuleRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.asset}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.rule}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
