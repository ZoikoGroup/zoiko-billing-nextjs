"use client";

const corrections = [
  {
    happened: "Wrong detail before issue",
    recovery: "Correct the draft.",
    preserved: "Change history and actor",
  },
  {
    happened: "Wrong detail after issue",
    recovery: "Use the approved credit or correction path.",
    preserved: "The original issued record, intact",
  },
  {
    happened: "Customer disputes the amount",
    recovery: "Mark the dispute or hold and route it to an owner.",
    preserved:
      "Dispute reason, status and resolution; reminders suppressed if policy says so",
  },
  {
    happened: "Payment does not match",
    recovery: "Route to reconciliation.",
    preserved:
      "The invoice stays open — never silently marked paid",
  },
  {
    happened: "Delivery failed",
    recovery:
      "Correct the contact or route, then retry safely.",
    preserved: "Every attempt and its reason",
  },
  {
    happened: "Schedule failed",
    recovery:
      "Resolve the missing input or dependency.",
    preserved: "The failed event, not hidden",
  },
  {
    happened: "Integration went stale",
    recovery:
      "Show the stale source and its age; block unsafe dependence where needed.",
    preserved: "Last verified time and source",
  },
  {
    happened: "Outcome unknown",
    recovery: "Reconcile before retrying.",
    preserved:
      "No duplicate invoice, charge or reminder",
  },
];

export default function Corrections() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50 px-6 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
        {/* Eyebrow */}
        <div className="relative flex h-4 items-center">
          <div className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="ml-2.5 text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Corrections, disputes &amp; exceptions
          </span>
        </div>

        {/* Heading */}
        <div className="w-full pb-1">
          <h2 className="text-2xl font-bold leading-9 text-gray-900 sm:text-3xl sm:leading-10">
            Mistakes happen. What matters is how they are corrected.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[686px] pb-1">
          <p className="text-sm font-normal leading-6 text-gray-600 sm:text-base">
            Confidence in billing comes from safe recovery, not from
            pretending nothing goes wrong.
          </p>
        </div>

        {/* Table */}
        <div className="mt-3 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          {/* Desktop / Tablet */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-[19%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-gray-600">
                    What happened
                  </th>

                  <th className="w-[40%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-gray-600">
                    Recovery
                  </th>

                  <th className="w-[41%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-gray-600">
                    What is preserved
                  </th>
                </tr>
              </thead>

              <tbody>
                {corrections.map((item, index) => (
                  <tr key={item.happened}>
                    {/* What happened */}
                    <td
                      className={`px-4 py-3.5 align-top ${
                        index !== corrections.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <p className="text-sm font-semibold leading-5 text-gray-900">
                        {item.happened}
                      </p>
                    </td>

                    {/* Recovery */}
                    <td
                      className={`px-4 py-3.5 align-top ${
                        index !== corrections.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <p className="text-sm font-normal leading-5 text-gray-600">
                        {item.recovery}
                      </p>
                    </td>

                    {/* Preserved */}
                    <td
                      className={`px-4 py-3.5 align-top ${
                        index !== corrections.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <p className="text-sm font-normal leading-5 text-gray-600">
                        {item.preserved}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="flex flex-col md:hidden">
            {corrections.map((item, index) => (
              <div
                key={item.happened}
                className={`flex flex-col gap-4 p-4 ${
                  index !== corrections.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                {/* What happened */}
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    What happened
                  </p>

                  <p className="text-sm font-semibold leading-5 text-gray-900">
                    {item.happened}
                  </p>
                </div>

                {/* Recovery */}
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    Recovery
                  </p>

                  <p className="text-sm leading-5 text-gray-600">
                    {item.recovery}
                  </p>
                </div>

                {/* Preserved */}
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    What is preserved
                  </p>

                  <p className="text-sm leading-5 text-gray-600">
                    {item.preserved}
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