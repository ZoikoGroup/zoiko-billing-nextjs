interface EvidenceTypeRow {
  type: string;
  establishes: string;
  treatment: React.ReactNode;
}

const evidenceTypeRows: EvidenceTypeRow[] = [
  {
    type: "Conformance document",
    establishes: "A conformance position for a named standard and a stated scope.",
    treatment: (
      <>
        Linked from Trust Center;{" "}
        <span className="font-bold text-slate-900">never paraphrased into a claim</span>
      </>
    ),
  },
  {
    type: "Assessment artifact",
    establishes: "The result of an evaluation, with its methodology and date.",
    treatment: (
      <>
        Referenced with scope and date;{" "}
        <span className="font-bold text-slate-900">not hosted here</span>
      </>
    ),
  },
  {
    type: "Internal test record",
    establishes: "What was tested, how, and what the result was.",
    treatment: (
      <>
        Summarized in registry;{" "}
        <span className="font-bold text-slate-900">gated from public publication</span>
      </>
    ),
  },
  {
    type: "Remediation record",
    establishes: "That work occurred on a known barrier.",
    treatment: (
      <>
        Reflected in limitation status once{" "}
        <span className="font-bold text-slate-900">verified</span>
      </>
    ),
  },
  {
    type: "No current evidence",
    establishes: "Nothing. This is a real state.",
    treatment: (
      <>
        <span className="font-bold text-slate-900">Stated as not established</span>, not as passing or failing
      </>
    ),
  },
];

interface EvidenceStatusRow {
  field: string;
  value: React.ReactNode;
}

const evidenceStatusRows: EvidenceStatusRow[] = [
  {
    field: "Named standard",
    value: (
      <span className="font-mono text-purple-700 font-semibold">[only_if_approved_evidence_exists]</span>
    ),
  },
  {
    field: "Evaluated scope",
    value: (
      <span className="font-mono text-purple-700 font-semibold">[exact_surfaces_and_workflows]</span>
    ),
  },
  {
    field: "Methodology",
    value: (
      <span className="font-mono text-purple-700 font-semibold">[approved_method]</span>
    ),
  },
  {
    field: "Effective date",
    value: (
      <span className="font-mono text-purple-700 font-semibold">[date]</span>
    ),
  },
  {
    field: "Conformance document",
    value: (
      <>
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block mr-1">
          ● Not established on this page
        </span>{" "}
        — see Trust Center for what exists
      </>
    ),
  },
  {
    field: "Unevaluated surfaces",
    value: "Explicitly listed rather than left ambiguous, so absence of a result is clear",
  },
];

export default function CurrentAccessibilityEvidenceSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="evidence">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          CURRENT ACCESSIBILITY EVIDENCE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Scoped, dated, and linked rather than duplicated.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Trust Center holds the artifacts. This page states what exists and for which scope — it never
          reproduces an assessment document.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/accessibility/a2.png"
            alt="Scoped, dated, and linked rather than duplicated"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1788178861578.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left space-y-4">
          
          {/* Card 1: Evidence type */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Evidence type, what it establishes and how it appears here.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <th scope="col" className="py-2.5 px-4 w-1/4">EVIDENCE TYPE</th>
                    <th scope="col" className="py-2.5 px-4 w-2/4">ESTABLISHES</th>
                    <th scope="col" className="py-2.5 px-4 w-1/4">TREATMENT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {evidenceTypeRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.type}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.establishes}
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

          {/* Card 2: Current evidence status */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Current evidence status.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <tbody className="divide-y divide-slate-100">
                  {evidenceStatusRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top w-1/3">
                        {row.field}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top w-2/3">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Red WCAG 2.2 AA Footnote Box */}
          <div className="rounded-2xl border border-red-200/80 bg-red-50/70 p-4 text-xs text-red-950 font-normal leading-relaxed mt-4">
            <span className="font-bold text-red-900">This page targets WCAG 2.2 AA for itself.</span> That is a release requirement for this one page. It establishes nothing about the product, and it is stated here only so that the target is not mistaken for a product-wide claim — which is exactly the inference an accessibility page invites.
          </div>

        </div>

      </div>
    </section>
  );
}
