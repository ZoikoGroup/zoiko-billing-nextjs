interface ObjectClassRow {
  objectClass: string;
  potentialActions: string;
  boundary: React.ReactNode;
}

const objectClassRows: ObjectClassRow[] = [
  {
    objectClass: "Account / customer",
    potentialActions: "Create, link, read or update selected fields; lifecycle and reference mapping.",
    boundary: "Customer Records authority remains field-specific",
  },
  {
    objectClass: "Contact",
    potentialActions: "Create, link, read or update approved purpose-specific contact fields.",
    boundary: (
      <span className="font-bold text-slate-900">
        Marketing, billing, delivery and finance contact purposes are not collapsed
      </span>
    ),
  },
  {
    objectClass: "Opportunity / deal",
    potentialActions: "Read or import selected commercial context; status references.",
    boundary: "Does not create an invoice or terms automatically",
  },
  {
    objectClass: "Quote / order reference",
    potentialActions: "Link, read or import approved references where the architecture supports it.",
    boundary: "Not a binding contract or price source unless separately authorized",
  },
  {
    objectClass: "Product / service reference",
    potentialActions: "Map external SKU or service references if registered.",
    boundary: "Does not create product catalog capability by implication",
  },
  {
    objectClass: "Invoice / document summary",
    potentialActions: "Outbound link, status or amount summary only where approved.",
    boundary: "CRM is not the document system of record",
  },
  {
    objectClass: "AR / outstanding summary",
    potentialActions: "Outbound high-level status only if purpose and permission allow.",
    boundary: "No sensitive collections detail exposed by default",
  },
  {
    objectClass: "Payment status summary",
    potentialActions: "Minimal paid, unpaid or partial state only if approved.",
    boundary: "Provider and payment details stay in Billing",
  },
  {
    objectClass: "Activity / event",
    potentialActions: "Created, updated, issued, paid or closed events where registered.",
    boundary: "Event receipt is not business-finality proof",
  },
];

export default function SupportedObjectsActionsDirectionSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="objects-direction">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          SUPPORTED OBJECTS, ACTIONS &amp; DIRECTION
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Importing accounts and exporting invoice status is not two-way customer sync.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Nine object classes, each declaring its direction in words rather than as an unlabeled
          arrow.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    OBJECT CLASS
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-[45%]">
                    POTENTIAL REGISTERED ACTIONS
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-[30%]">
                    BOUNDARY
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {objectClassRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.objectClass}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.potentialActions}
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
