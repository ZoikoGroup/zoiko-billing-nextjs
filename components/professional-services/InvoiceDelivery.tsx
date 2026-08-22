const invoiceStates = [
  {
    state: "Draft",
    type: "neutral",
    meaning:
      "Client, billing basis, source and owner shown, with any missing review named.",
    notMean: "Not visible to the client",
  },
  {
    state: "Pending approval",
    type: "pending",
    meaning: "Approver and blocker visible.",
    notMean: "Not approved",
  },
  {
    state: "Approved",
    type: "pending",
    meaning: "Approval evidence recorded.",
    notMean: "Not issued",
  },
  {
    state: "Issued",
    type: "success",
    meaning:
      "Issue evidence, time and the related billing basis.",
    notMean: "Not generated or sent by itself",
  },
  {
    state: "Document generated",
    type: "success",
    meaning:
      "The client-facing artifact exists, with the engagement reference where approved.",
    notMean: "Not sent",
  },
  {
    state: "Sent",
    type: "pending",
    meaning: "A delivery attempt was recorded.",
    notMean: "Not confirmed delivered",
  },
  {
    state: "Delivered",
    type: "success",
    meaning:
      "Confirmed where the route supports confirmation.",
    notMean: "Not a payment, and not client acceptance",
  },
  {
    state: "Failed",
    type: "warning",
    meaning: "Explicit failure with attempts and reason.",
    notMean: "Not a client refusal to pay",
  },
  {
    state: "Unknown",
    type: "info",
    meaning: "The route cannot confirm the outcome.",
    notMean: "Not a success",
  },
  {
    state: "Corrected or credited",
    type: "warning",
    meaning:
      "A linked correction document exists with a reason and approver.",
    notMean: "Not an overwrite of the original",
  },
];

const stateStyles = {
  neutral: "bg-gray-100 text-slate-600 border-gray-200",
  pending: "bg-gray-100 text-slate-600 border-gray-200",
  success: "bg-green-50 text-green-700 border-green-200",
  warning: "bg-orange-50 text-orange-700 border-orange-200",
  info: "bg-blue-50 text-blue-700 border-blue-200",
};

export default function InvoiceDelivery() {
  return (
    <section className="w-full border-t border-gray-200 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-4 px-0 sm:px-4 lg:px-7">
        {/* Section Label */}
        <div className="flex items-center gap-3">
          <span className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Invoices, documents &amp; client delivery
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
          A generated document is not sent, and sent is not delivered.
        </h2>

        {/* Description */}
        <p className="max-w-[686px] text-sm font-normal leading-6 text-slate-600 sm:text-base">
          Service teams need to know exactly where a client invoice stopped
          before anyone follows up on it.
        </p>

        {/* State Table */}
        <div className="mt-5 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
          {/* Table Header */}
          <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
            <p className="text-sm leading-5 text-slate-600">
              Document and delivery states, kept discrete.
            </p>
          </div>

          {/* Responsive Table */}
          <div className="w-full overflow-x-auto">
            <table className="min-w-[900px] w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-[220px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                    State
                  </th>

                  <th className="min-w-[440px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                    Meaning
                  </th>

                  <th className="min-w-[300px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                    What it does not mean
                  </th>
                </tr>
              </thead>

              <tbody>
                {invoiceStates.map((item) => (
                  <tr
                    key={item.state}
                    className="align-top"
                  >
                    {/* State */}
                    <td className="border-b border-gray-200 px-4 py-4">
                      <span
                        className={`inline-flex rounded-md border px-2.5 py-1 text-xs font-semibold leading-4 ${
                          stateStyles[
                            item.type as keyof typeof stateStyles
                          ]
                        }`}
                      >
                        {item.state}
                      </span>
                    </td>

                    {/* Meaning */}
                    <td className="border-b border-gray-200 px-4 py-4 text-sm leading-5 text-slate-600">
                      {item.meaning}
                    </td>

                    {/* Not Mean */}
                    <td className="border-b border-gray-200 px-4 py-4 text-sm leading-5 text-slate-600">
                      {item.notMean}
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