interface PrincipleRow {
  principle: string;
  requiredTreatment: React.ReactNode;
}

const principleRows: PrincipleRow[] = [
  {
    principle: "Issued history remains issued",
    requiredTreatment: (
      <>
        Distinguish draft changes from actions affecting an already issued record —{" "}
        <span className="font-bold text-slate-900">
          never imply issued evidence can be silently rewritten
        </span>
      </>
    ),
  },
  {
    principle: "Allocation is not invoice mutation",
    requiredTreatment:
      "Payment application and invoice identity stay visually and structurally separate",
  },
  {
    principle: "Permissions are contextual",
    requiredTreatment: (
      <>
        Identity, role or scope, object and action, and workflow state are distinct concerns —{" "}
        <span className="font-bold text-slate-900">not one admin key</span>
      </>
    ),
  },
  {
    principle: "Approvals are not cosmetic",
    requiredTreatment:
      "Where an action requires approval, describe the approval boundary rather than implying a direct write",
  },
  {
    principle: "Exceptions remain visible",
    requiredTreatment:
      "Failed, partial, pending, unknown and needs-review outcomes stay inspectable rather than normalized into success",
  },
  {
    principle: "Exports are data releases",
    requiredTreatment:
      "Preserve requester, purpose, permission and retention framing where product surfaces expose data",
  },
  {
    principle: "Audit follows meaningful change",
    requiredTreatment:
      "Point to audit capabilities for financial-impacting changes without overpromising universal logging",
  },
];

export default function GovernanceIntegritySection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="governance">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          GOVERNANCE &amp; BILLING INTEGRITY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl max-w-3xl">
          API convenience does not bypass billing truth.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-xl text-xs font-normal leading-relaxed text-slate-600 sm:text-base">
          The same lifecycle, ownership, approval and evidence rules that govern the product
          govern the integration.
        </p>

        {/* Table Container (Responsive) */}
        <div className="mt-8 lg:mt-12 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          
          {/* Sub-header inside card */}
          <div className="p-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
            Seven principles and the page treatment each requires.
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[580px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-4 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/3">
                    PRINCIPLE
                  </th>
                  <th scope="col" className="py-3.5 px-4 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-2/3">
                    REQUIRED TREATMENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {principleRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-3.5 px-4 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.principle}
                    </td>
                    <td className="py-3.5 px-4 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.requiredTreatment}
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
