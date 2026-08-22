const decisions = [
  {
    decision: "Provide approved commercial context",
    revenueOps: "Coordinate",
    billingOps: "Consume",
    finance: "View",
    sales: "Own and source",
    admin: "Integrate",
  },
  {
    decision: "Maintain billing readiness",
    revenueOps: "Coordinate",
    billingOps: "Own",
    finance: "Review",
    sales: "Supply inputs",
    admin: "Configure",
  },
  {
    decision: "Configure schedule",
    revenueOps: "Coordinate",
    billingOps: "Own",
    finance: "Review",
    sales: "No",
    admin: "Admin",
  },
  {
    decision: "Approve invoice or change",
    revenueOps: "Coordinate only",
    billingOps: "Role-based",
    finance: "Own where policy requires",
    sales: "No",
    admin: "Configures roles",
  },
  {
    decision: "Issue or deliver document",
    revenueOps: "Monitor",
    billingOps: "Own",
    finance: "View",
    sales: "No",
    admin: "Supports integrations",
  },
  {
    decision: "Resolve AR or payment exception",
    revenueOps: "Coordinate",
    billingOps: "Assist",
    finance: "Own",
    sales: "No",
    admin: "Integration support",
  },
  {
    decision: "Change workflow policy",
    revenueOps: "Recommend",
    billingOps: "Admin owner",
    finance: "Approve if required",
    sales: "No",
    admin: "Own admin",
  },
  {
    decision: "Export operational data",
    revenueOps: "Role-based",
    billingOps: "Role-based",
    finance: "Role-based",
    sales: "Limited",
    admin: "Permission admin",
  },
];

const columns = [
  { key: "revenueOps", label: "Revenue Ops" },
  { key: "billingOps", label: "Billing Ops" },
  { key: "finance", label: "Finance / AR" },
  { key: "sales", label: "Sales / CRM Ops" },
  { key: "admin", label: "Admin / IT" },
] as const;

export default function RoleHandoff() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Roles, ownership &amp; cross-team handoffs
          </span>
        </div>

        {/* Heading */}
        <h2 className="w-full text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
          Coordinating a handoff is not the same as holding every permission.
        </h2>

        {/* Description */}
        <p className="w-full max-w-[686px] text-sm leading-6 text-slate-600 sm:text-base">
          Revenue Operations keeps work moving. It does not become a
          super-role that silently combines Sales, Finance, Billing,
          Integration and Admin authority.
        </p>

        {/* Desktop table */}
        <div className="mt-2 hidden w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm md:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1080px] border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-[25%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-600">
                    Decision
                  </th>

                  {columns.map((column) => (
                    <th
                      key={column.key}
                      className="border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-600"
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {decisions.map((item) => (
                  <tr key={item.decision}>
                    <td className="border-b border-gray-200 px-4 py-3.5 text-sm font-semibold leading-5 text-slate-900">
                      {item.decision}
                    </td>

                    {columns.map((column) => {
                      const value = item[column.key];

                      const isPrimary =
                        (column.key === "sales" &&
                          value === "Own and source") ||
                        (column.key === "billingOps" &&
                          value === "Own") ||
                        (column.key === "finance" &&
                          value === "Own where policy requires") ||
                        (column.key === "finance" && value === "Own") ||
                        (column.key === "admin" && value === "Own admin");

                      return (
                        <td
                          key={column.key}
                          className={`border-b border-gray-200 px-4 py-3.5 text-sm leading-5 ${
                            isPrimary
                              ? "font-bold text-slate-700"
                              : "text-slate-600"
                          }`}
                        >
                          {value}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="mt-2 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm md:hidden">
          <div className="divide-y divide-gray-200">
            {decisions.map((item) => (
              <div key={item.decision} className="p-4 sm:p-5">
                <h3 className="text-sm font-semibold leading-5 text-slate-900">
                  {item.decision}
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  {columns.map((column) => {
                    const value = item[column.key];

                    const isPrimary =
                      (column.key === "sales" &&
                        value === "Own and source") ||
                      (column.key === "billingOps" && value === "Own") ||
                      (column.key === "finance" &&
                        value === "Own where policy requires") ||
                      (column.key === "finance" && value === "Own") ||
                      (column.key === "admin" && value === "Own admin");

                    return (
                      <div
                        key={column.key}
                        className="flex items-start justify-between gap-4 border-t border-gray-100 pt-3"
                      >
                        <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                          {column.label}
                        </span>

                        <span
                          className={`text-right text-sm leading-5 ${
                            isPrimary
                              ? "font-bold text-slate-700"
                              : "text-slate-600"
                          }`}
                        >
                          {value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}