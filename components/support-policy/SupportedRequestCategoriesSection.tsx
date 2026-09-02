import Link from "next/link";

interface CategoryRow {
  category: string;
  policyTreatment: React.ReactNode;
  route: React.ReactNode;
}

const categoryRows: CategoryRow[] = [
  {
    category: "General product usage",
    policyTreatment: "Covered per approved scope; self-service expected first",
    route: (
      <>
        <Link href="/resource-center" className="text-blue-600 font-semibold hover:underline">
          Help Center
        </Link>{" "}
        ·{" "}
        <Link href="/documentation" className="text-blue-600 font-semibold hover:underline">
          Documentation
        </Link>
      </>
    ),
  },
  {
    category: "Account-specific behavior",
    policyTreatment: "Covered where behavior differs from documented behavior",
    route: <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Contact Support</span>,
  },
  {
    category: "Account & subscription billing",
    policyTreatment: (
      <>
        Coverage stated here;{" "}
        <span className="font-bold text-slate-900">evidence is not collected on this page</span>
      </>
    ),
    route: <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Billing Support</span>,
  },
  {
    category: "Integration diagnostics",
    policyTreatment: "Coverage boundaries defined here; technical detail stays elsewhere",
    route: <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Integration Support</span>,
  },
  {
    category: "Access & identity",
    policyTreatment: (
      <>
        Covered, with{" "}
        <span className="font-bold text-slate-900">no support bypass of identity controls</span>
      </>
    ),
    route: <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Account Access</span>,
  },
  {
    category: "Implementation questions",
    policyTreatment: "Guidance scope, not a professional-services commitment",
    route: <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Implementation Guidance</span>,
  },
  {
    category: "Security vulnerability",
    policyTreatment: "Not routed through ordinary support channels",
    route: <span className="text-slate-600 font-medium">Responsible Disclosure</span>,
  },
];

export default function SupportedRequestCategoriesSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="request-categories">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          SUPPORTED REQUEST CATEGORIES
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Seven categories, each with a route rather than a queue.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Policy describes whether a category is covered. It does not perform intake — that belongs to the destination.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    CATEGORY
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/2">
                    POLICY TREATMENT
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    ROUTE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {categoryRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.category}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.policyTreatment}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.route}
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
