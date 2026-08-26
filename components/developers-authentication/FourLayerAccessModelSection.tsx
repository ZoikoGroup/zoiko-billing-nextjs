interface LayerRow {
  layer: string;
  question: string;
  uiTreatment: string;
}

const layerRows: LayerRow[] = [
  {
    layer: "Identity",
    question: "What system, workload, user or approved actor is requesting access?",
    uiTreatment: "Identity card with owner and organization context when supported",
  },
  {
    layer: "Authentication",
    question: "How is that identity proven?",
    uiTreatment: "Method card sourced from the capability registry, plus setup status",
  },
  {
    layer: "Authorization",
    question: "What may the authenticated identity do?",
    uiTreatment: "Permission summary, object and action boundaries, link to the detailed definition",
  },
  {
    layer: "Resource / workflow context",
    question: "Which billing object, action and state is in scope?",
    uiTreatment: "Operation-level permission display with state prerequisites",
  },
  {
    layer: "Evidence",
    question: "What access-related change can be reviewed later?",
    uiTreatment: "Audit callout where the product supports it",
  },
];

export default function FourLayerAccessModelSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="four-layer">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          FOUR-LAYER ACCESS MODEL
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          A credential proves who you are. It does not decide what you may do.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Identity proof and allowed actions are separate decisions, and the interface
          represents them separately throughout.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-12 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/5">
                    LAYER
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-[40%]">
                    QUESTION
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-[40%]">
                    UI TREATMENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {layerRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.layer}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.question}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.uiTreatment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787663259198.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm mb-4">
            <div className="p-3.5 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Each layer, the question it answers, and how it must be presented.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80">
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                      LAYER
                    </th>
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-3/8">
                      QUESTION
                    </th>
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-3/8">
                      UI TREATMENT
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {layerRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.layer}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.question}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.uiTreatment}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Red Callout Box */}
          <div className="rounded-xl border border-red-200/80 bg-red-50/70 p-3.5 text-xs font-normal text-red-950 leading-relaxed">
            <span className="font-bold text-red-900">Do not collapse authentication and authorization.</span> The page must never imply that possession of a credential grants universal billing access.
          </div>

        </div>

      </div>
    </section>
  );
}
