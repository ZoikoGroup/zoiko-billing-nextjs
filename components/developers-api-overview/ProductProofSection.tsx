interface ProofRow {
  uiArea: string;
  requiredContent: React.ReactNode;
}

const proofRows: ProofRow[] = [
  {
    uiArea: "Resource selector",
    requiredContent: "One confirmed resource family from the API catalog",
  },
  {
    uiArea: "Operation selector",
    requiredContent: "A confirmed method or action label only",
  },
  {
    uiArea: "Environment",
    requiredContent: (
      <>
        A verified environment label —{" "}
        <span className="font-semibold text-slate-900">omit rather than invent</span> if
        environments are not yet defined
      </>
    ),
  },
  {
    uiArea: "Request pane",
    requiredContent:
      "Canonical headers and body fields, with syntax highlighting and a copy control",
  },
  {
    uiArea: "Response pane",
    requiredContent:
      "Canonical status and result fields, line wrapping, copy control, no horizontal clipping",
  },
  {
    uiArea: "Metadata rail",
    requiredContent:
      "Version, permission or scope requirement, idempotency behavior if applicable, and a link to the exact reference",
  },
  {
    uiArea: "States",
    requiredContent:
      "Ready, loading, success, validation error, permission error, rate response if canonical, service error, and unknown outcome if canonical",
  },
  {
    uiArea: "Accessibility",
    requiredContent:
      "Text alternative for the code pane, keyboard scroll, focusable copy control, status never color-only, minimum readable code size",
  },
];

export default function ProductProofSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="product-proof">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-6 bg-slate-300" />
          REQUEST &amp; RESPONSE PRODUCT PROOF
          <span className="h-px w-6 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl max-w-3xl">
          One credible technical visual, zero invented facts.
        </h2>

        {/* Subtitle */}
        <p className="mt-3.5 max-w-2xl text-sm font-normal leading-relaxed text-slate-500 sm:text-base">
          The console above is schema-driven. Until canonical documentation supplies exact
          examples, every token is a marked placeholder rather than production syntax.
        </p>

        {/* Table Container */}
        <div className="mt-12 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-4 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    UI AREA
                  </th>
                  <th scope="col" className="py-4 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIRED CONTENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {proofRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top whitespace-nowrap">
                      {row.uiArea}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.requiredContent}
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
