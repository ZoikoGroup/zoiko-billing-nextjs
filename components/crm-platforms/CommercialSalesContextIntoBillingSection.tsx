interface CommercialContextRow {
  crmContext: string;
  allowedRole: string;
  boundary: React.ReactNode;
}

const commercialContextRows: CommercialContextRow[] = [
  {
    crmContext: "Opportunity / deal ID",
    allowedRole: "Reference and declared commercial context if supported.",
    boundary: "Not a binding billing authorization",
  },
  {
    crmContext: "Deal stage / status",
    allowedRole: "Read-only context for readiness or routing where approved.",
    boundary: (
      <span className="font-bold text-slate-900">
        Closed Won does not automatically create an invoice or contract
      </span>
    ),
  },
  {
    crmContext: "Quote / order reference",
    allowedRole: "Import or reference only where a defined handoff exists.",
    boundary: "Price and terms authority must be named",
  },
  {
    crmContext: "Product / service lines",
    allowedRole: "Map only through approved SKU or service mapping.",
    boundary: "No product catalog, usage or subscription capability implied",
  },
  {
    crmContext: "Commercial owner",
    allowedRole: "Routing and context only.",
    boundary: "Does not grant Billing permissions",
  },
  {
    crmContext: "Expected start date",
    allowedRole: "A potential schedule input only after Billing validation.",
    boundary: "Billing is never scheduled from an unapproved sales date",
  },
  {
    crmContext: "Currency / terms",
    allowedRole: "May be proposed context; Billing and contract authority validates first.",
    boundary: "A CRM field does not override Multi-Currency or profile rules",
  },
  {
    crmContext: "PO / customer metadata",
    allowedRole: "May populate a mapped field if authority and validation permit.",
    boundary: "No blind import of free text or secrets",
  },
];

export default function CommercialSalesContextIntoBillingSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="sales-context">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          COMMERCIAL &amp; SALES CONTEXT INTO BILLING
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Closed Won is a sales stage, not a billing authorization.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          CRM context can prefill or propose billing setup only when the receiving workflow
          validates entity, customer relationship, billing profile, currency, terms, approvals,
          availability and required authoritative fields.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    CRM CONTEXT
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-2/5">
                    ALLOWED ROLE IN BILLING
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-[35%]">
                    BOUNDARY
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {commercialContextRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.crmContext}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.allowedRole}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.boundary}
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
