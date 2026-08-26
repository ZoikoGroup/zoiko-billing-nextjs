interface CatalogRow {
  family: string;
  intent: string;
  rule: React.ReactNode;
}

const catalogRows: CatalogRow[] = [
  {
    family: "Customer records",
    intent: "Identity, account linkage, history and allowed mutable fields.",
    rule: (
      <>
        Publish only verified resources and operations;{" "}
        <span className="font-bold text-slate-900">
          never imply auto-merge or hidden identity scoring
        </span>
      </>
    ),
  },
  {
    family: "Invoices & credit notes",
    intent: "Draft and issued lifecycle, references, monetary lines, status semantics.",
    rule: "Issued-record immutability must be explicit where applicable",
  },
  {
    family: "Charges & adjustments",
    intent: "Charge origins, adjustments, reason and evidence fields.",
    rule: "Do not imply direct mutation of historical issued documents",
  },
  {
    family: "Billing schedules",
    intent: "Schedule configuration and generated-billing relationships.",
    rule: "Separate configuration from generated and issued records",
  },
  {
    family: "Documents & delivery",
    intent: "Document record, delivery state, channel metadata.",
    rule: (
      <span className="font-bold text-slate-900">
        Issued, sent and delivered remain distinct states
      </span>
    ),
  },
  {
    family: "Accounts receivable",
    intent: "Receivable views, balances, aging, collection context.",
    rule: "Avoid implying ledger rewrite from derived views",
  },
  {
    family: "Payments & reconciliation",
    intent: "Payment records, allocation, reconciliation state.",
    rule: "Allocation must not be described as rewriting an invoice",
  },
  {
    family: "Outstanding balances",
    intent: "Open-balance views and invoice traceability.",
    rule: "Every balance must remain traceable to underlying records",
  },
  {
    family: "Reporting & analytics",
    intent: "Defined metrics, periods, filters, exports.",
    rule: "Metrics require definitions; charts do not substitute for data contracts",
  },
];

export default function ResourceCatalogSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="catalog">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          RESOURCE CATALOG
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Nine families, each with a dual-state contract.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Product-domain status and API-exposure status are recorded separately, because a
          capability existing in the product is not evidence that it is callable.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    RESOURCE FAMILY
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-[38%]">
                    DOCUMENTATION INTENT
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-[37%]">
                    PUBLICATION RULE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {catalogRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.family}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.intent}
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
