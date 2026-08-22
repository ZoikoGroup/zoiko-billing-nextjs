export default function RoleAudit() {
  const columns = [
    "Decision",
    "Account / client services",
    "Billing Ops",
    "Finance / AR",
    "IT / integration",
    "Commercial",
  ];

  const rows = [
    [
      "Provide client & engagement context",
      "Own and source",
      "Consume",
      "View",
      "Integrate",
      "May source approved commercial context",
    ],
    [
      "Confirm project or service evidence",
      "Own where the process requires",
      "Validate",
      "View",
      "Integration support",
      "No",
    ],
    [
      "Submit pass-through cost",
      "Initiate where configured",
      "Process",
      "Review or approve",
      "Integration support",
      "No",
    ],
    [
      "Approve markup, fee or adjustment",
      "No unless separately authorized",
      "Role-based",
      "Own where policy requires",
      "No",
      "No",
    ],
    [
      "Configure schedule",
      "Consult",
      "Own",
      "Review",
      "Admin support",
      "No",
    ],
    [
      "Approve invoice or change",
      "No unless separately authorized",
      "Role-based",
      "Own where policy requires",
      "No",
      "No",
    ],
    [
      "Issue or deliver",
      "View",
      "Own",
      "View",
      "Supports connectors",
      "No",
    ],
    [
      "Reminder & dispute policy",
      "View",
      "Operate as authorized",
      "Own or approve as configured",
      "No",
      "No",
    ],
    [
      "Payment allocation & reconciliation",
      "View",
      "Assist",
      "Own",
      "Integration support",
      "No",
    ],
  ];

  return (
    <section className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-6 py-12 sm:px-8 sm:py-14 lg:px-7 lg:py-16">
        {/* Eyebrow */}
        <div className="flex h-4 items-center">
          <span className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="ml-2.5 text-xs font-bold uppercase leading-4 tracking-[0.18em] text-blue-600">
            Roles, approvals, client ownership &amp; audit
          </span>
        </div>

        {/* Heading */}
        <h2 className="!m-0 w-full max-w-[1000px] !text-[30px] !font-extrabold !leading-[1.15] tracking-tight text-gray-900">
          Owning the client relationship is not the same as approving the fee.
        </h2>

        {/* Description */}
        <p className="w-full max-w-[686px] text-sm font-normal leading-6 text-gray-600 sm:text-base">
          Account leads need visibility into billing status. That is a
          different thing from authority over invoices, markups, payments and
          reminder policy.
        </p>

        {/* Table */}
        <div className="mt-3 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1080px] border-collapse text-left">
              <thead>
                <tr className="bg-gray-50">
                  {columns.map((column) => (
                    <th
                      key={column}
                      className="border-b border-gray-200 px-4 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-gray-500"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={`${rowIndex}-${cellIndex}`}
                        className={`border-b border-gray-100 px-4 py-3.5 text-sm leading-5 ${
                          cellIndex === 0
                            ? "font-semibold text-gray-900"
                            : "font-normal text-gray-600"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
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