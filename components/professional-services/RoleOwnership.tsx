const decisions = [
  {
    decision: "Provide engagement or service context",
    engagement: "Own and source",
    billing: "Consume",
    finance: "View",
    it: "Integrate",
    commercial: "May source approved commercial context",
  },
  {
    decision: "Confirm milestone or service trigger",
    engagement: "Own where the process requires",
    billing: "Validate",
    finance: "View",
    it: "Integration support",
    commercial: "No",
  },
  {
    decision: "Configure billing basis or schedule",
    engagement: "Consult",
    billing: "Own",
    finance: "Review",
    it: "Admin support",
    commercial: "No",
  },
  {
    decision: "Approve invoice or change",
    engagement: "No unless separately authorized",
    billing: "Role-based",
    finance: "Own where policy requires",
    it: "No",
    commercial: "No",
  },
  {
    decision: "Issue or deliver",
    engagement: "View",
    billing: "Own",
    finance: "View",
    it: "Supports connectors",
    commercial: "No",
  },
  {
    decision: "Retainer or pre-billed application",
    engagement: "Consult",
    billing: "Operate if authorized",
    finance: "Own or approve as policy requires",
    it: "No",
    commercial: "No",
  },
  {
    decision: "Expense approval",
    engagement: "May initiate",
    billing: "Process",
    finance: "Approve as policy requires",
    it: "No",
    commercial: "No",
  },
  {
    decision: "Payment allocation & reconciliation",
    engagement: "View",
    billing: "Assist",
    finance: "Own",
    it: "Integration support",
    commercial: "No",
  },
  {
    decision: "Change mapping or integration",
    engagement: "No",
    billing: "Consult",
    finance: "Consult",
    it: "Own",
    commercial: "No",
  },
];

export default function RoleOwnership() {
  return (
    <section className="w-full border-t border-gray-200 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-4 px-0 sm:px-4 lg:px-7">
        {/* Section Label */}
        <div className="flex items-center gap-3">
          <span className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Roles, approvals, ownership &amp; audit
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
          Owning the client relationship is not the same as approving the
          invoice.
        </h2>

        {/* Description */}
        <p className="max-w-[686px] text-sm font-normal leading-6 text-slate-600 sm:text-base">
          Engagement ownership does not automatically grant financial approval,
          payment, reconciliation, policy or admin permissions.
        </p>

        {/* Table */}
        <div className="mt-5 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
          <div className="w-full overflow-x-auto">
            <table className="min-w-[1100px] w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-[220px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                    Decision
                  </th>

                  <th className="w-[220px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                    Engagement / delivery
                  </th>

                  <th className="w-[150px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                    Billing Ops
                  </th>

                  <th className="w-[220px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                    Finance / AR
                  </th>

                  <th className="w-[160px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                    IT / integration
                  </th>

                  <th className="w-[220px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                    Commercial
                  </th>
                </tr>
              </thead>

              <tbody>
                {decisions.map((row) => (
                  <tr key={row.decision} className="align-top">
                    <td className="border-b border-gray-200 px-4 py-4 text-sm font-semibold leading-5 text-slate-900">
                      {row.decision}
                    </td>

                    <td className="border-b border-gray-200 px-4 py-4 text-sm leading-5 text-slate-600">
                      {row.engagement}
                    </td>

                    <td
                      className={`border-b border-gray-200 px-4 py-4 text-sm leading-5 ${
                        row.billing === "Own"
                          ? "font-bold text-slate-900"
                          : "text-slate-600"
                      }`}
                    >
                      {row.billing}
                    </td>

                    <td
                      className={`border-b border-gray-200 px-4 py-4 text-sm leading-5 ${
                        row.finance.includes("Own")
                          ? "font-bold text-slate-900"
                          : "text-slate-600"
                      }`}
                    >
                      {row.finance}
                    </td>

                    <td
                      className={`border-b border-gray-200 px-4 py-4 text-sm leading-5 ${
                        row.it === "Own"
                          ? "font-bold text-slate-900"
                          : "text-slate-600"
                      }`}
                    >
                      {row.it}
                    </td>

                    <td className="border-b border-gray-200 px-4 py-4 text-sm leading-5 text-slate-600">
                      {row.commercial}
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