interface OperatingModelRow {
  layer: string;
  role: string;
  authorityBoundary: React.ReactNode;
}

const operatingModelRows: OperatingModelRow[] = [
  {
    layer: "CRM platform",
    role: "Customer relationship and pipeline context per its own configuration.",
    authorityBoundary: (
      <span className="font-bold text-slate-900">
        Not financial authority by default
      </span>
    ),
  },
  {
    layer: "Customer Records",
    role: "Billing account, purpose-specific contacts, billing profile, history and controls.",
    authorityBoundary: "Billing-record authority unless a field mapping explicitly delegates",
  },
  {
    layer: "Sales / commercial context",
    role: "Opportunity, deal, quote and order metadata if registered.",
    authorityBoundary: "Input only — does not auto-create binding billing terms",
  },
  {
    layer: "Billing objects",
    role: "Invoices, credits, charges, schedules and AR status where approved.",
    authorityBoundary: "The owning Billing domain remains authoritative",
  },
  {
    layer: "Integration layer",
    role: "Maps IDs, fields, actions, direction, transforms, versions and events.",
    authorityBoundary: "Does not create business authority",
  },
  {
    layer: "Identity & permissions",
    role: "CRM user, group and owner context may be mapped for routing.",
    authorityBoundary: "Does not grant Billing permissions by default",
  },
  {
    layer: "Consent & purpose",
    role: "Marketing, sales, service and billing purposes remain distinct.",
    authorityBoundary: "No purpose expansion from synchronization",
  },
  {
    layer: "Evidence",
    role: "External IDs, source, versions, events, conflicts, effective dates and currentness.",
    authorityBoundary: "Supports explainability and recovery",
  },
];

export default function CrmBillingOperatingModelSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="operating-model">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          CRM-BILLING INTEGRATION OPERATING MODEL
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          There is no single-master shortcut.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          The same customer may carry CRM-owned sales fields, Billing-owned financial fields,
          external identity fields and controlled tax fields simultaneously.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/5">
                    LAYER
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-2/5">
                    ROLE
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-2/5">
                    AUTHORITY BOUNDARY
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {operatingModelRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.layer}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.role}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.authorityBoundary}
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
