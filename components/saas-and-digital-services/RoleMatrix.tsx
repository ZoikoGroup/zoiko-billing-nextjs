const rows = [
  {
    decision: "Provide service, plan or change context",
    product: "Own and source",
    billing: "Consume",
    finance: "View",
    it: "Integrate",
    commercial: "May source approved commercial context",
  },
  {
    decision: "Provide usage or seat quantity",
    product: "Own and source if applicable",
    billing: "Validate",
    finance: "View",
    it: "Integrate",
    commercial: "No",
  },
  {
    decision: "Define billing basis or schedule",
    product: "Consult",
    billing: "Own",
    finance: "Review",
    it: "Admin support",
    commercial: "No",
  },
  {
    decision: "Approve change, fee or invoice",
    product: "No unless separately authorized",
    billing: "Role-based",
    finance: "Own where policy requires",
    it: "No",
    commercial: "No",
  },
  {
    decision: "Issue or deliver",
    product: "View",
    billing: "Own",
    finance: "View",
    it: "Supports connectors",
    commercial: "No",
  },
  {
    decision: "Manage reminder & dispute policy",
    product: "View",
    billing: "Operate as authorized",
    finance: "Own or approve as configured",
    it: "No",
    commercial: "No",
  },
  {
    decision: "Payment allocation & reconciliation",
    product: "View",
    billing: "Assist",
    finance: "Own",
    it: "Integration support",
    commercial: "No",
  },
  {
    decision: "Change API or integration mapping",
    product: "Consult",
    billing: "Consult",
    finance: "Consult",
    it: "Own",
    commercial: "No",
  },
  {
    decision: "Change service entitlement or access",
    product: "Own upstream if authorized",
    billing: "No",
    finance: "No",
    it: "Integration support",
    commercial: "No",
  },
];

const columns = [
  { key: "decision", label: "Decision" },
  { key: "product", label: "Product / RevOps source" },
  { key: "billing", label: "Billing Ops" },
  { key: "finance", label: "Finance / AR" },
  { key: "it", label: "IT / integration" },
  { key: "commercial", label: "Commercial" },
];

export default function RoleMatrix() {
  return (
    <section className="w-full bg-[#f7f7f7] px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8">

        {/* ================= HEADER ================= */}
        <div className="flex w-full max-w-[900px] flex-col items-center pt-2 text-center">

          {/* Eyebrow */}
          <div className="mb-4 flex w-full items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-blue-600/40" />

            <span className="text-center text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-blue-600 sm:text-[11px] sm:tracking-[0.14em] lg:text-xs lg:tracking-widest">
              Roles, approvals, change control &amp; audit
            </span>

            <span className="h-px w-4 shrink-0 bg-blue-600/40" />
          </div>

          {/* Heading */}
          <h2
            className="
              mx-auto
              w-full
              max-w-[900px]
              text-center
              text-[30px]
              font-extrabold
              leading-[1.15]
              tracking-[-0.02em]
              text-gray-900
              sm:text-[38px]
              sm:leading-[1.15]
              lg:text-5xl
              lg:leading-[1.14]
            "
          >
            <span className="block">
              Owning the product does not mean
            </span>

            <span className="block">
              approving the invoice.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-4
              w-full
              max-w-[687px]
              text-center
              text-sm
              font-normal
              leading-6
              text-slate-600
              sm:mt-5
              sm:text-base
              sm:leading-7
            "
          >
            Product, RevOps and Customer Success provide the service and change
            context. That is a different authority from billing approval,
            credit, payment, reconciliation and reminder policy.
          </p>
        </div>

        {/* ================= TABLE ================= */}
        <div
          className="
            w-full
            overflow-hidden
            rounded-xl
            border
            border-slate-200
            bg-white
            shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)]
            shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)]
            sm:rounded-2xl
          "
        >
          {/* Mobile horizontal scroll */}
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[1000px] border-collapse">

              {/* Header */}
              <thead>
                <tr className="bg-slate-50">
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      className="
                        border-b
                        border-slate-200
                        px-4
                        py-3
                        text-left
                        text-xs
                        font-bold
                        uppercase
                        leading-4
                        tracking-wide
                        text-blue-600
                      "
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {rows.map((row) => (
                  <tr key={row.decision}>

                    {/* Decision */}
                    <td
                      className="
                        border-b
                        border-slate-100
                        px-4
                        py-3.5
                        text-sm
                        font-semibold
                        leading-5
                        text-gray-900
                      "
                    >
                      {row.decision}
                    </td>

                    {/* Product */}
                    <td
                      className="
                        border-b
                        border-slate-100
                        px-4
                        py-3.5
                        text-sm
                        font-normal
                        leading-5
                        text-slate-600
                      "
                    >
                      {row.product}
                    </td>

                    {/* Billing */}
                    <td
                      className="
                        border-b
                        border-slate-100
                        px-4
                        py-3.5
                        text-sm
                        font-normal
                        leading-5
                        text-slate-600
                      "
                    >
                      {row.billing}
                    </td>

                    {/* Finance */}
                    <td
                      className="
                        border-b
                        border-slate-100
                        px-4
                        py-3.5
                        text-sm
                        font-normal
                        leading-5
                        text-slate-600
                      "
                    >
                      {row.finance}
                    </td>

                    {/* IT */}
                    <td
                      className="
                        border-b
                        border-slate-100
                        px-4
                        py-3.5
                        text-sm
                        font-normal
                        leading-5
                        text-slate-600
                      "
                    >
                      {row.it}
                    </td>

                    {/* Commercial */}
                    <td
                      className="
                        border-b
                        border-slate-100
                        px-4
                        py-3.5
                        text-sm
                        font-normal
                        leading-5
                        text-slate-600
                      "
                    >
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