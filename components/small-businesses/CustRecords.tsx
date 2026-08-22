"use client";

const rows = [
  {
    area: "Customer profile",
    behavior:
      "Billing name and reference, contacts, delivery context and relevant billing settings.",
    state: "Current",
    stateType: "green",
  },
  {
    area: "Ownership",
    behavior:
      "A named internal owner or role, so no record is nobody's job.",
    state: "Assigned",
    stateType: "green",
  },
  {
    area: "History",
    behavior:
      "Material changes, billing documents, balances and communication references.",
    state: "Retained",
    stateType: "text",
  },
  {
    area: "Duplicate or conflict",
    behavior:
      "A potential duplicate is flagged for review. There is no silent merge.",
    state: "Needs review",
    stateType: "orange",
  },
  {
    area: "Import or integration",
    behavior:
      "Approved methods only, with source and currentness shown.",
    state: "Source shown",
    stateType: "blue",
  },
  {
    area: "Changed details",
    behavior:
      "A changed billing contact revalidates drafts, schedules and delivery context before the next action.",
    state: "Changed",
    stateType: "orange",
  },
  {
    area: "Privacy",
    behavior:
      "Only the billing and contact data needed for the billing purpose. No unrelated profiling.",
    state: "Purpose-limited",
    stateType: "text",
  },
  {
    area: "Archived",
    behavior:
      "A record can be retired without losing its billing history.",
    state: "Archived",
    stateType: "gray",
  },
];

function StatusBadge({
  state,
  type,
}: {
  state: string;
  type: string;
}) {
  const styles = {
    green:
      "bg-gray-100 border-green-200 text-green-700 before:bg-green-600",
    orange:
      "bg-gray-100 border-orange-200 text-orange-600 before:bg-orange-500",
    blue:
      "bg-gray-100 border-gray-300 text-gray-600 before:bg-gray-500",
    gray:
      "bg-gray-100 border-gray-200 text-gray-500 before:bg-gray-400",
    text: "border-transparent bg-transparent text-gray-600 before:hidden",
  };

  return (
    <span
      className={`inline-flex min-h-6 items-center rounded-md border px-2.5 py-0.5 pl-2 text-xs font-semibold leading-4 before:mr-2 before:h-1.5 before:w-1.5 before:rounded-sm ${
        styles[type as keyof typeof styles]
      }`}
    >
      {state}
    </span>
  );
}

export default function CustRecords() {
  return (
    <section className="w-full border-t border-gray-200 bg-white px-6 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
        {/* Eyebrow */}
        <div className="relative flex h-4 items-center">
          <div className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="ml-2.5 text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Customer records
          </span>
        </div>

        {/* Heading */}
        <div className="w-full pb-1">
          <h2 className="text-2xl font-bold leading-9 text-gray-900 sm:text-3xl sm:leading-10">
            One controlled billing record — not one magical record everywhere.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[686px] pb-1">
          <p className="text-sm font-normal leading-6 text-gray-600 sm:text-base">
            Zoiko Billing keeps the billing customer record it owns, with
            history and named ownership.
            <br className="hidden sm:block" />
            Where other systems hold customer data, approved integrations
            connect them and the authority boundary stays visible.
          </p>
        </div>

        {/* Table */}
        <div className="mt-3 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          {/* Desktop / Tablet Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[820px] border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-[18%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-gray-600">
                    Area
                  </th>

                  <th className="w-[67%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-gray-600">
                    Behavior
                  </th>

                  <th className="w-[15%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-gray-600">
                    State
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row, index) => (
                  <tr key={row.area}>
                    <td
                      className={`px-4 py-3.5 align-top ${
                        index !== rows.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <span className="text-sm font-semibold leading-5 text-gray-900">
                        {row.area}
                      </span>
                    </td>

                    <td
                      className={`px-4 py-3.5 align-top ${
                        index !== rows.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <span className="text-sm font-normal leading-5 text-gray-600">
                        {row.behavior}
                      </span>
                    </td>

                    <td
                      className={`px-4 py-3.5 align-top ${
                        index !== rows.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <StatusBadge
                        state={row.state}
                        type={row.stateType}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="flex flex-col md:hidden">
            {rows.map((row, index) => (
              <div
                key={row.area}
                className={`flex flex-col gap-3 p-4 ${
                  index !== rows.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    Area
                  </p>

                  <p className="text-sm font-semibold leading-5 text-gray-900">
                    {row.area}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    Behavior
                  </p>

                  <p className="text-sm font-normal leading-5 text-gray-600">
                    {row.behavior}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    State
                  </p>

                  <StatusBadge
                    state={row.state}
                    type={row.stateType}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}