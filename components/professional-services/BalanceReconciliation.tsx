const balanceRows = [
  {
    state: "Open balance",
    view: "Current due and balance context",
    authority: "Accounts Receivable authority",
  },
  {
    state: "Reminder eligible",
    view: "According to configured AR policy and exception states",
    authority: "No debt-collection service claim",
  },
  {
    state: "Disputed or on hold",
    view: "Visible to delivery and billing teams to prevent contradictory follow-up",
    authority: "Finance and AR workflow",
  },
  {
    state: "Payment recorded",
    view: "Approved payment record context",
    authority: "Does not imply universal payment processing",
  },
  {
    state: "Allocation pending",
    view: "The unresolved state stays visible",
    authority: "Finance and AR authority",
  },
  {
    state: "Reconciliation mismatch",
    view: "Exception and owner shown",
    authority: "No project or CRM override",
  },
  {
    state: "Settled or closed",
    view: "Current AR and payment state",
    authority: "No revenue-recognition claim attaches to this",
  },
];

export default function BalanceReconciliation() {
  return (
    <section className="w-full border-t border-gray-200 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-4 px-0 sm:px-4 lg:px-7">
        {/* Section Label */}
        <div className="flex items-center gap-3">
          <span className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Outstanding balances, payments &amp; reconciliation
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
          Service teams see the downstream state. Finance decides it.
        </h2>

        {/* Description */}
        <p className="max-w-[686px] text-sm font-normal leading-6 text-slate-600 sm:text-base">
          Visibility after issue prevents contradictory client follow-up. It
          does not turn an engagement manager into a Finance user.
        </p>

        {/* Table */}
        <div className="mt-5 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
          <div className="w-full overflow-x-auto">
            <table className="min-w-[900px] w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-[220px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                    State
                  </th>

                  <th className="min-w-[430px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                    Professional Services view
                  </th>

                  <th className="min-w-[300px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                    Authority boundary
                  </th>
                </tr>
              </thead>

              <tbody>
                {balanceRows.map((row) => (
                  <tr
                    key={row.state}
                    className="align-top"
                  >
                    <td className="border-b border-gray-200 px-4 py-4 text-sm font-semibold leading-5 text-slate-900">
                      {row.state}
                    </td>

                    <td className="border-b border-gray-200 px-4 py-4 text-sm leading-5 text-slate-600">
                      {row.view}
                    </td>

                    <td className="border-b border-gray-200 px-4 py-4 text-sm leading-5 text-slate-600">
                      {row.authority}
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