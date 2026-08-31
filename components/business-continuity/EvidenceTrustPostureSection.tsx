interface EvidenceClassRow {
  evidenceClass: string;
  behaviorHere: React.ReactNode;
}

const evidenceClassRows: EvidenceClassRow[] = [
  {
    evidenceClass: "Public continuity summary",
    behaviorHere: "Linked to the current Trust Center record where approved.",
  },
  {
    evidenceClass: "Continuity plan",
    behaviorHere: <span className="font-bold text-slate-900">Never copied or summarized into a claim.</span>,
  },
  {
    evidenceClass: "Exercise or test report",
    behaviorHere: "Referenced with type, scope and date where approved.",
  },
  {
    evidenceClass: "Third-party assessment",
    behaviorHere: (
      <>
        Referenced where approved; <span className="font-bold text-slate-900">the finding is not paraphrased.</span>
      </>
    ),
  },
  {
    evidenceClass: "Contractual commitment",
    behaviorHere: (
      <>
        <span className="font-bold text-slate-900">Not restated here.</span> Your agreement governs.
      </>
    ),
  },
  {
    evidenceClass: "No current evidence",
    behaviorHere: "A real state — stated as not established.",
  },
];

export default function EvidenceTrustPostureSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="trust-posture">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          EVIDENCE &amp; TRUST POSTURE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Linked, scoped, and never copied.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Continuity plans and assessment reports are frequently confidential. This page states what class
          of evidence exists and routes to it.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/business-continuity/bc3.png"
            alt="Linked, scoped, and never copied"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1788179741778.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Evidence class, behavior here and access.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <th scope="col" className="py-2.5 px-4 w-1/3">EVIDENCE CLASS</th>
                    <th scope="col" className="py-2.5 px-4 w-2/3">BEHAVIOR HERE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {evidenceClassRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.evidenceClass}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.behaviorHere}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Amber Evidence Unavailable Callout Box */}
          <div className="rounded-2xl border border-amber-200/80 bg-amber-50/70 p-4 text-xs text-amber-950 font-normal leading-relaxed mt-4">
            <span className="font-bold text-amber-900">When evidence is unavailable, the governance explanation stays.</span> The page does not go blank and does not imply the governance stopped working — Trust Center shows the access state, and this page keeps explaining how continuity is managed.
          </div>

        </div>

      </div>
    </section>
  );
}
