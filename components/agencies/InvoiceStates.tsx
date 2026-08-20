const invoiceStates = [
  {
    state: "Draft",
    type: "neutral",
    meaning: "Client, fee basis, source and review state visible.",
    notMean: "Not visible to the client",
  },
  {
    state: "Pending approval",
    type: "approval",
    meaning: "Approver and blocking reason shown.",
    notMean: "Not approved",
  },
  {
    state: "Approved",
    type: "approval",
    meaning: "Approval evidence recorded.",
    notMean: "Not issued",
  },
  {
    state: "Issued",
    type: "green",
    meaning:
      "Authoritative issue state and time, with the fee basis attached.",
    notMean: "Not generated or sent by itself",
  },
  {
    state: "Document generated",
    type: "green",
    meaning:
      "The client-facing artifact exists, with the engagement reference where approved.",
    notMean: "Not sent",
  },
  {
    state: "Sent",
    type: "approval",
    meaning: "A delivery attempt was recorded.",
    notMean: "Not confirmed delivered",
  },
  {
    state: "Delivered",
    type: "green",
    meaning: "Confirmed where the route supports confirmation.",
    notMean: "Not a payment, and not client acceptance",
  },
  {
    state: "Failed",
    type: "orange",
    meaning: "Explicit failure with attempts and reason.",
    notMean: "Not a client refusal to pay",
  },
  {
    state: "Unknown",
    type: "blue",
    meaning: "The route cannot confirm the outcome.",
    notMean: "Never converted to Delivered",
  },
  {
    state: "Corrected or credited",
    type: "orange",
    meaning: "A linked correction with reason and approver.",
    notMean: "Not an overwrite of the original",
  },
];

const stateStyles = {
  neutral: {
    wrapper: "border-gray-200 bg-gray-50 text-gray-500",
    dot: "bg-gray-500",
  },
  approval: {
    wrapper: "border-gray-200 bg-gray-100 text-gray-600",
    dot: "border-2 border-gray-500 bg-transparent",
  },
  green: {
    wrapper: "border-green-200 bg-green-50 text-green-700",
    dot: "bg-green-600",
  },
  orange: {
    wrapper: "border-orange-200 bg-orange-50 text-orange-700",
    dot: "bg-orange-500",
  },
  blue: {
    wrapper: "border-blue-100 bg-blue-50 text-blue-600",
    dot: "bg-blue-500",
  },
};

export default function InvoiceStates() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-6 py-12 sm:px-8 sm:py-14 lg:px-7 lg:py-16">

        {/* Eyebrow */}
        <div className="flex h-4 items-center">
          <span className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="ml-2.5 text-xs font-bold uppercase leading-4 tracking-[0.18em] text-blue-600">
            Invoices, documents &amp; client delivery
          </span>
        </div>

        {/* Heading */}
        <h2 className="!m-0 w-full max-w-[900px] !text-[30px] !font-extrabold !leading-[1.15] tracking-tight text-gray-900">
          A generated invoice is not sent, and sent is not delivered.
        </h2>

        {/* Description */}
        <p className="w-full max-w-[686px] text-sm font-normal leading-6 text-gray-600 sm:text-base">
          Client-service teams need the actual state before they discuss an
          invoice with a client — not a single &quot;billed&quot; badge.
        </p>

        {/* Table */}
        <div className="mt-3 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-60 border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-600">
                    State
                  </th>

                  <th className="w-[664px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-600">
                    Meaning
                  </th>

                  <th className="w-96 border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-600">
                    What it does not mean
                  </th>
                </tr>
              </thead>

              <tbody>
                {invoiceStates.map((item) => {
                  const styles =
                    stateStyles[item.type as keyof typeof stateStyles];

                  return (
                    <tr key={item.state}>
                      {/* State */}
                      <td className="border-b border-gray-100 px-4 py-3.5 align-top">
                        <span
                          className={`inline-flex min-h-6 items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold leading-4 ${styles.wrapper}`}
                        >
                          <span
                            className={`mr-2 h-1.5 w-1.5 rounded-sm ${styles.dot}`}
                          />
                          {item.state}
                        </span>
                      </td>

                      {/* Meaning */}
                      <td className="border-b border-gray-100 px-4 py-3.5 align-top">
                        <p className="!m-0 text-sm font-normal leading-5 text-gray-600">
                          {item.meaning}
                        </p>
                      </td>

                      {/* What it does not mean */}
                      <td className="border-b border-gray-100 px-4 py-3.5 align-top">
                        <p className="!m-0 text-sm font-normal leading-5 text-gray-600">
                          {item.notMean}
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}