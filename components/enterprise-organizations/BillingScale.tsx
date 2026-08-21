const billingRows = [
  {
    domain: "Customer records",
    proof: "Scoped records with ownership and history.",
    boundary: "No master-data management claim beyond product scope",
  },
  {
    domain: "Billing schedules",
    proof:
      "Repeat and staged billing where supported, with state, owner and version.",
    boundary: "No advanced subscription-management claim",
  },
  {
    domain: "Invoices & credit notes",
    proof: "Draft, approval, issue and correction history.",
    boundary: "No statutory-compliance guarantee",
  },
  {
    domain: "Documents & delivery",
    proof: "Generate, send and delivery evidence where supported.",
    boundary: "Sent is not delivered",
  },
  {
    domain: "Outstanding balances & AR",
    proof: "Aging, attention, dispute and reminder states.",
    boundary: "No debt-collection-service claim",
  },
  {
    domain: "Payments & reconciliation",
    proof: "Payment record, allocation and reconciliation context.",
    boundary: "No universal payment processing",
  },
  {
    domain: "Adjustments",
    proof: "Reason, approval and history.",
    boundary: "No silent financial override",
  },
  {
    domain: "Reporting",
    proof: "Operational metrics with source, definition and as-of.",
    boundary: "No revenue recognition or forecasting unless approved",
  },
];

export default function BillingScale() {
  return (
    <section className="w-full bg-[#F7F8FA] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 lg:gap-11">
        {/* Header */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-blue-600 opacity-40" />

            <span className="text-center text-xs font-bold uppercase leading-4 tracking-[0.18em] text-blue-600">
              Billing operations at scale
            </span>

            <span className="h-px w-4 shrink-0 bg-blue-600 opacity-40" />
          </div>

          {/* Heading */}
          <h2 className="w-full text-center text-2xl font-extrabold leading-8 tracking-tight text-slate-900 sm:text-3xl sm:leading-9 lg:text-4xl lg:leading-10">
            Operating breadth, without a volume claim.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-center text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
            Scope, segmentation, filters and operational patterns are what make
            enterprise billing workable. Transaction volumes, concurrency,
            latency and throughput figures are not published without verified
            capacity evidence.
          </p>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          {/* Desktop / Tablet Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="bg-[#FBFCFD]">
                  <th className="w-[22%] border-b border-slate-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                    Domain
                  </th>

                  <th className="w-[45%] border-b border-slate-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                    Enterprise proof
                  </th>

                  <th className="w-[33%] border-b border-slate-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                    Boundary
                  </th>
                </tr>
              </thead>

              <tbody>
                {billingRows.map((row, index) => (
                  <tr key={row.domain}>
                    <td
                      className={`px-4 py-3.5 text-sm font-semibold leading-5 text-slate-900 ${
                        index !== billingRows.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >
                      {row.domain}
                    </td>

                    <td
                      className={`px-4 py-3.5 text-sm font-normal leading-5 text-slate-600 ${
                        index !== billingRows.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >
                      {row.proof}
                    </td>

                    <td
                      className={`px-4 py-3.5 text-sm font-normal leading-5 text-slate-600 ${
                        index !== billingRows.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >
                      {row.boundary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="flex flex-col md:hidden">
            {billingRows.map((row, index) => (
              <div
                key={row.domain}
                className={`flex flex-col gap-4 p-5 ${
                  index !== billingRows.length - 1
                    ? "border-b border-slate-200"
                    : ""
                }`}
              >
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-blue-600">
                    Domain
                  </p>
                  <p className="text-sm font-semibold leading-5 text-slate-900">
                    {row.domain}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-blue-600">
                    Enterprise proof
                  </p>
                  <p className="text-sm font-normal leading-6 text-slate-600">
                    {row.proof}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-blue-600">
                    Boundary
                  </p>
                  <p className="text-sm font-normal leading-6 text-slate-600">
                    {row.boundary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}