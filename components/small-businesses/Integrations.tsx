"use client";

const integrations = [
  {
    need: "Accounting or ERP handoff",
    possible:
      "Approved Accounting and ERP integrations where available.",
    boundary: "No built-in accounting or general-ledger claim.",
    link: "Integrations",
  },
  {
    need: "Customer context from a CRM",
    possible:
      "Approved CRM integrations for governed handoffs.",
    boundary: "No universal two-way sync",
  },
  {
    need: "Payment provider context",
    possible:
      "Approved provider integrations where available.",
    boundary: "No universal payment processing",
  },
  {
    need: "Bank or reconciliation context",
    possible:
      "Approved banking and reconciliation routes only.",
    boundary: "No open-banking claim",
  },
  {
    need: "Custom integration",
    possible:
      "Developer and API routes where approved.",
    boundary: "No invented API capability",
  },
  {
    need: "Suite deployment",
    possible:
      "Standalone or connected deployment can be evaluated as complexity grows.",
    boundary: "No automatic inclusion or data merge.",
    link: "Zoiko Billing + Zoiko One",
  },
];

export default function Integrations() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50 px-6 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
        {/* Eyebrow */}
        <div className="relative flex h-4 items-center">
          <div className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="ml-2.5 text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Integrations &amp; Zoiko One as you grow
          </span>
        </div>

        {/* Heading */}
        <div className="w-full pb-1">
          <h2 className="text-2xl font-bold leading-9 text-gray-900 sm:text-3xl sm:leading-10">
            Keep the tools you already run.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[686px]">
          <p className="text-sm font-normal leading-6 text-gray-600 sm:text-base">
            Zoiko Billing works as standalone software. Integrations and Zoiko
            One are governed options you can take when they help — never
            prerequisites.
          </p>
        </div>

        {/* Integration table */}
        <div className="mt-3 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          {/* Desktop / Tablet */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-[19%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-gray-600">
                    Need
                  </th>

                  <th className="w-[44%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-gray-600">
                    What is possible
                  </th>

                  <th className="w-[37%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-gray-600">
                    Boundary
                  </th>
                </tr>
              </thead>

              <tbody>
                {integrations.map((item, index) => (
                  <tr key={item.need}>
                    {/* Need */}
                    <td
                      className={`px-4 py-3.5 align-top ${
                        index !== integrations.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <p className="text-sm font-semibold leading-5 text-gray-900">
                        {item.need}
                      </p>
                    </td>

                    {/* Possible */}
                    <td
                      className={`px-4 py-3.5 align-top ${
                        index !== integrations.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <p className="text-sm leading-5 text-gray-600">
                        {item.possible}
                      </p>
                    </td>

                    {/* Boundary */}
                    <td
                      className={`px-4 py-3.5 align-top ${
                        index !== integrations.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <div className="flex flex-wrap items-baseline gap-1">
                        <span className="text-sm leading-5 text-gray-600">
                          {item.boundary}
                        </span>

                        {item.link && (
                          <span className="text-sm font-semibold leading-6 text-blue-600">
                            {item.link}
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="flex flex-col md:hidden">
            {integrations.map((item, index) => (
              <div
                key={item.need}
                className={`flex flex-col gap-4 p-4 ${
                  index !== integrations.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                {/* Need */}
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    Need
                  </p>

                  <p className="text-sm font-semibold leading-5 text-gray-900">
                    {item.need}
                  </p>
                </div>

                {/* What is possible */}
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    What is possible
                  </p>

                  <p className="text-sm leading-5 text-gray-600">
                    {item.possible}
                  </p>
                </div>

                {/* Boundary */}
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    Boundary
                  </p>

                  <div className="flex flex-wrap items-baseline gap-1">
                    <p className="text-sm leading-5 text-gray-600">
                      {item.boundary}
                    </p>

                    {item.link && (
                      <span className="text-sm font-semibold leading-6 text-blue-600">
                        {item.link}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}