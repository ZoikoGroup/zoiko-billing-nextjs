interface CrmFilterRow {
  filter: string;
  requiredBehavior: React.ReactNode;
}

const crmFilterRows: CrmFilterRow[] = [
  {
    filter: "CRM / provider",
    requiredBehavior: "Canonical registry-backed name and approved aliases",
  },
  {
    filter: "Object",
    requiredBehavior: "Account or customer, contact, opportunity or deal, quote reference, invoice status summary or approved object",
  },
  {
    filter: "Action",
    requiredBehavior: "Create, read, update, link, status update, event, or import and export where registered",
  },
  {
    filter: "Direction",
    requiredBehavior: "CRM to Billing, Billing to CRM, bidirectional only for the exact action, event-only, or reference-only",
  },
  {
    filter: "Authentication",
    requiredBehavior: "Registered OAuth, API, service, file or webhook method",
  },
  {
    filter: "Region & plan",
    requiredBehavior: "Current integration applicability",
  },
  {
    filter: "Availability",
    requiredBehavior: "Available, Limited, Partner-supported, Planned only where publication is approved",
  },
  {
    filter: "Operational status",
    requiredBehavior: "Normal, degraded, incident, maintenance, unavailable or stale",
  },
  {
    filter: "Lifecycle",
    requiredBehavior: "Current, deprecated, sunset, withdrawn or replaced",
  },
  {
    filter: "Certification / review",
    requiredBehavior: "Named current evidence only; otherwise Not published",
  },
  {
    filter: "Last verified",
    requiredBehavior: (
      <>
        Current verification date —{" "}
        <span className="font-bold text-slate-900">
          a stale record cannot remain silently positive
        </span>
      </>
    ),
  },
];

export default function FindCrmConnectionsSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="crm-catalog">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          FIND CRM CONNECTIONS &amp; CHECK AVAILABILITY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Eleven filters, all registry-backed.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A CRM appears in this category only with a governed current integration record.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/crm-platforms/crm2.png"
            alt="Eleven filters, all registry-backed"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787711171807.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm mb-4">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Discovery filters and required behavior.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80">
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-2/5">
                      FILTER
                    </th>
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-3/5">
                      REQUIRED BEHAVIOR
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {crmFilterRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.filter}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.requiredBehavior}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Amber Discipline Callout Box */}
          <div className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-xs text-amber-950 font-normal leading-relaxed">
            <span className="font-bold text-amber-900">Directory discipline.</span> A proposal, sales request, prototype, private script, roadmap item or customer-specific custom work does not equal public support.
          </div>

        </div>

      </div>
    </section>
  );
}
