const checks = [
  {
    title: "Invoice issued",
    description:
      "Authoritative and current — issued 01 Aug with approval evidence",
    status: "Pass",
    passed: true,
  },
  {
    title: "Delivery confirmed",
    description: "Delivered 01 Aug on the approved route",
    status: "Pass",
    passed: true,
  },
  {
    title: "Outstanding balance current",
    description:
      "Balance derived from the authoritative record, not a cached figure",
    status: "Pass",
    passed: true,
  },
  {
    title: "Payment status clear",
    description:
      "No posted or processing payment that would make the message inaccurate",
    status: "Pass",
    passed: true,
  },
  {
    title: "Dispute or hold",
    description:
      "Client dispute open on two lines since 09 Aug — configured policy blocks follow-up",
    status: "Blocked",
    passed: false,
  },
  {
    title: "Pending correction",
    description:
      "A credit note is under review that would change the amount owed",
    status: "Blocked",
    passed: false,
  },
  {
    title: "Client communication policy",
    description:
      "Approved cadence and channel; last contact 12 Aug",
    status: "Pass",
    passed: true,
  },
  {
    title: "Ownership",
    description:
      "Current AR owner assigned; account lead notified",
    status: "Pass",
    passed: true,
  },
  {
    title: "Audit",
    description:
      "Reason, policy version and outcome recorded where the product supports it",
    status: "Pass",
    passed: true,
  },
];

export default function ReminderChecks() {
  return (
    <section className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-6 py-12 sm:px-8 sm:py-14 lg:px-7 lg:py-16">

        {/* Eyebrow */}
        <div className="flex h-4 items-center">
          <span className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="ml-2.5 text-xs font-bold uppercase leading-4 tracking-[0.18em] text-blue-600">
            Balances, reminders, disputes &amp; payments
          </span>
        </div>

        {/* Heading */}
        <h2 className="!m-0 w-full max-w-[900px] !text-[30px] !font-extrabold !leading-[1.15] tracking-tight text-gray-900">
          Nine checks run before a client reminder goes out.
        </h2>

        {/* Description */}
        <p className="w-full max-w-[686px] text-sm font-normal leading-6 text-gray-600 sm:text-base">
          Chasing a client for an invoice that was never delivered, is under
          dispute, or has already been paid damages the relationship your
          account team maintains. Eligibility is evaluated against current
          state at send time.
        </p>

        {/* Reminder Safety Contract */}
        <div className="mt-3 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]">

          {/* Header */}
          <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
            <h3 className="!m-0 text-base font-bold leading-7 text-gray-900">
              Reminder safety contract — synthetic invoice INV-6455, client
              CLI-266
            </h3>

            <p className="!m-0 mt-1 text-xs font-normal leading-5 text-gray-500">
              Every check must pass. A single block prevents the reminder and
              names the owner who can clear it.
            </p>
          </div>

          {/* Checks */}
          <div className="px-5 py-1.5">
            {checks.map((check, index) => (
              <div
                key={check.title}
                className={`flex items-start gap-3 py-3 ${
                  index !== 0 ? "border-t border-gray-100" : ""
                }`}
              >
                {/* Check icon */}
                <div className="flex w-5 shrink-0 justify-center pt-0.5">
                  <span
                    className={`text-sm font-extrabold leading-5 ${
                      check.passed ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {check.passed ? "✓" : "✕"}
                  </span>
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <p className="!m-0 text-sm font-semibold leading-5 text-gray-900">
                    {check.title}
                  </p>

                  <p className="!m-0 mt-0.5 text-xs font-normal leading-5 text-gray-500">
                    {check.description}
                  </p>
                </div>

                {/* Status */}
                <span
                  className={`shrink-0 rounded-md border px-2.5 py-0.5 text-xs font-semibold leading-4 ${
                    check.passed
                      ? "border-green-200 bg-green-50 text-green-700"
                      : "border-red-200 bg-red-50 text-red-600"
                  }`}
                >
                  {check.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}