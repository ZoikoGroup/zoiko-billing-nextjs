interface ObservabilityLayerRow {
  layer: string;
  requiredDesign: React.ReactNode;
}

const observabilityLayerRows: ObservabilityLayerRow[] = [
  {
    layer: "Integration service",
    requiredDesign: (
      <>
        Health and error signals, plus job or queue state{" "}
        <span className="font-bold text-slate-900">
          only if the architecture actually uses those components
        </span>
      </>
    ),
  },
  {
    layer: "Request evidence",
    requiredDesign: "Safe correlation identifiers captured at call time on both sides",
  },
  {
    layer: "Event evidence",
    requiredDesign: "Delivery identifiers separated from business-processing results",
  },
  {
    layer: "Reconciliation evidence",
    requiredDesign: "Observed state, decision, action and result, at minimum necessary detail",
  },
  {
    layer: "Alerting",
    requiredDesign: "Exception ownership assigned before launch, not after the first incident",
  },
  {
    layer: "Support bundle",
    requiredDesign: (
      <>
        Safe metadata only —{" "}
        <span className="font-bold text-slate-900">
          never secrets or raw sensitive payloads as default troubleshooting material
        </span>
      </>
    ),
  },
];

export default function ObservabilityEvidenceSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="observability-evidence">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          OBSERVABILITY &amp; EVIDENCE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Safe identifiers are the backbone of diagnosis.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Observability components are described only where the architecture genuinely uses
          them.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    LAYER
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIRED DESIGN
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {observabilityLayerRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.layer}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.requiredDesign}
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
