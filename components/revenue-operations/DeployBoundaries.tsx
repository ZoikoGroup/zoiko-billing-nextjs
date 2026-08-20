const boundaries = [
  {
    context: "CRM platforms",
    says: "Approved CRM context may support governed billing handoffs.",
    boundary: "No universal two-way sync. CRM is not a financial authority by default.",
    link: "Integrations",
  },
  {
    context: "Accounting & ERP",
    says: "Approved integrations may support accounting and operational handoffs.",
    boundary: "No general-ledger or revenue-recognition automation claim.",
  },
  {
    context: "Payment providers & banking",
    says: "Approved routes may provide payment and reconciliation context.",
    boundary: "No universal processing or bank connectivity.",
  },
  {
    context: "Multiple entities",
    says: "Entity-separated billing may be coordinated where approved.",
    boundary: "No universal consolidated accounting.",
    link: "Global Billing",
  },
  {
    context: "Multiple currencies",
    says: "Supported currency workflows depend on availability.",
    boundary: "No real-time FX or universal settlement.",
  },
  {
    context: "Zoiko One",
    says: "Standalone and connected deployment are evaluated separately.",
    boundary: "No automatic inclusion or data merge.",
    link: "Zoiko Billing + Zoiko One",
  },
];

export default function DeployBoundaries() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Integrations, global billing &amp; deployment
          </span>
        </div>

        {/* Heading */}
        <h2 className="w-full text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
          Scoped complexity, with the boundary named each time.
        </h2>

        {/* Description */}
        <p className="w-full max-w-[686px] text-sm leading-6 text-slate-600 sm:text-base">
          Availability depends on plan, provider, jurisdiction and
          configuration. Detail belongs to the pages that own it.
        </p>

        {/* Table */}
        <div className="mt-2 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* Table description */}
          <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
            <p className="text-sm leading-5 text-slate-600">
              What this page says, and what it does not imply. Availability is
              registry-controlled.
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-[18%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-600">
                    Context
                  </th>
                  <th className="w-[39%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-600">
                    What this page says
                  </th>
                  <th className="w-[43%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-600">
                    Boundary
                  </th>
                </tr>
              </thead>

              <tbody>
                {boundaries.map((item) => (
                  <tr key={item.context}>
                    <td className="border-b border-gray-200 px-4 py-3.5 align-top text-sm font-semibold leading-5 text-slate-900">
                      {item.context}
                    </td>

                    <td className="border-b border-gray-200 px-4 py-3.5 align-top text-sm leading-5 text-slate-600">
                      {item.says}
                    </td>

                    <td className="border-b border-gray-200 px-4 py-3.5 align-top text-sm leading-5 text-slate-600">
                      {item.boundary}

                      {item.link && (
                        <div className="mt-1 font-semibold leading-6 text-blue-600">
                          {item.link}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="divide-y divide-gray-200 md:hidden">
            {boundaries.map((item) => (
              <div key={item.context} className="p-4 sm:p-5">
                <h3 className="text-sm font-semibold leading-5 text-slate-900">
                  {item.context}
                </h3>

                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                    What this page says
                  </p>

                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    {item.says}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                    Boundary
                  </p>

                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    {item.boundary}
                  </p>

                  {item.link && (
                    <p className="mt-1 text-sm font-semibold leading-6 text-blue-600">
                      {item.link}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}