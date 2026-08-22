export default function BillingAuthority() {
  const rows = [
    {
      domain: "Customer records",
      authority: "Billing authoritative",
      type: "authoritative",
      rule:
        "Billing keeps its own authoritative customer and account records unless a specific mapped authority is approved.",
    },
    {
      domain: "Invoices & credit notes",
      authority: "Billing authoritative",
      type: "authoritative",
      rule:
        "The issuance and correction lifecycle remains governed by Zoiko Billing.",
    },
    {
      domain: "Charges & adjustments",
      authority: "Billing authoritative",
      type: "authoritative",
      rule: "Line-item and adjustment controls remain in Billing.",
    },
    {
      domain: "Billing schedules",
      authority: "Billing authoritative",
      type: "authoritative",
      rule:
        "Connected triggers cannot silently bypass Billing controls.",
    },
    {
      domain: "Documents & delivery",
      authority: "Billing authoritative",
      type: "authoritative",
      rule:
        "Generation and delivery state remain a Billing concern unless a specific handoff is defined.",
    },
    {
      domain: "Accounts receivable",
      authority: "Billing authoritative",
      type: "authoritative",
      rule:
        "Receivables status and operational control remain explicit.",
    },
    {
      domain: "Payments & reconciliation",
      authority: "Billing authoritative",
      type: "authoritative",
      rule:
        "Payment records, allocation and reconciliation authority must not be assumed to transfer.",
    },
    {
      domain: "Outstanding balances",
      authority: "Billing authoritative",
      type: "authoritative",
      rule:
        "Balance state is a governed Billing object.",
      link: "See the balances page",
    },
    {
      domain: "Reporting & analytics",
      authority: "Scope-dependent",
      type: "scope",
      rule:
        "Billing reporting stays within approved product and plan scope. Connected cross-product reporting is separate.",
    },
  ];

  return (
    <section className="w-full border-t border-gray-200 bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px] px-0 sm:px-4 lg:px-7">
        {/* Eyebrow */}
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
            What stays in Zoiko Billing
          </span>

          <span className="h-px w-6 bg-blue-600/50" />
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-slate-900 sm:text-3xl sm:leading-10">
          Connecting does not hand your billing controls to another product.
        </h2>

        {/* Description */}
        <p className="mt-3 max-w-[720px] text-sm font-normal leading-6 text-slate-500 sm:text-base">
          Each domain below stays governed by Zoiko Billing unless a specific
          mapped authority is separately approved. Standalone is not an
          incomplete edition.
        </p>

        {/* Table */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
          {/* Intro */}
          <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
            <p className="text-sm font-normal leading-5 text-slate-500">
              Standalone authority and continuity rules. These hold in both
              deployment models.
            </p>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:grid lg:grid-cols-[224px_208px_1fr]">
            <div className="border-b border-r border-gray-200 bg-gray-50 px-4 py-3.5">
              <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                Domain
              </span>
            </div>

            <div className="border-b border-r border-gray-200 bg-gray-50 px-4 py-3.5">
              <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                Authority
              </span>
            </div>

            <div className="border-b border-gray-200 bg-gray-50 px-4 py-3.5">
              <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                Continuity rule
              </span>
            </div>
          </div>

          {/* Rows */}
          <div>
            {rows.map((row, index) => (
              <div
                key={row.domain}
                className={`grid grid-cols-1 lg:grid-cols-[224px_208px_1fr] ${
                  index !== rows.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                {/* Domain */}
                <div className="bg-gray-50 px-5 py-4 lg:border-r lg:border-gray-200">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-blue-600 lg:hidden">
                    Domain
                  </div>

                  <p className="text-sm font-semibold leading-5 text-slate-900">
                    {row.domain}
                  </p>
                </div>

                {/* Authority */}
                <div className="px-5 py-4 lg:border-r lg:border-gray-200">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-blue-600 lg:hidden">
                    Authority
                  </div>

                  {row.type === "authoritative" ? (
                    <span className="inline-flex min-h-6 items-center rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold leading-4 text-emerald-700">
                      <span className="mr-2 h-1.5 w-1.5 rounded-sm bg-emerald-600/75" />
                      {row.authority}
                    </span>
                  ) : (
                    <span className="inline-flex min-h-6 items-center rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold leading-4 text-slate-600">
                      <span className="mr-2 h-1.5 w-1.5 rounded-sm bg-slate-500/75" />
                      {row.authority}
                    </span>
                  )}
                </div>

                {/* Continuity Rule */}
                <div className="px-5 py-4">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-blue-600 lg:hidden">
                    Continuity rule
                  </div>

                  <p className="text-sm font-normal leading-5 text-slate-500">
                    {row.rule}{" "}
                    {row.link && (
                      <a
                        href="#balances"
                        className="font-semibold leading-6 text-blue-600 transition hover:text-blue-700"
                      >
                        {row.link}
                      </a>
                    )}
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