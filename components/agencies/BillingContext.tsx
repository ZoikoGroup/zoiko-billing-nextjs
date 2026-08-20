"use client";

const rows = [
  {
    context: "Client & billing account",
    behavior: "The billing account of record.",
    authority: "Customer Records",
    highlighted: true,
  },
  {
    context: "Brand or sub-account reference",
    behavior:
      "An optional contextual reference where approved — never a hidden hierarchy that Customer Records does not support.",
    authority: "Customer Records",
  },
  {
    context: "Engagement, campaign or project reference",
    behavior:
      "A stable reference to approved context. Not a campaign or project-management object.",
    authority: "Upstream system",
  },
  {
    context: "Service description & fee purpose",
    behavior: "An approved descriptor with source and version.",
    authority: "Billing, versioned",
  },
  {
    context: "Client contact & delivery route",
    behavior: "Purpose-limited and current.",
    authority: "Billing",
  },
  {
    context: "Entity, currency & jurisdiction",
    behavior: "Approved availability only.",
    authority: "Global Billing",
    highlighted: true,
  },
  {
    context: "Upstream CRM, project or campaign system",
    behavior:
      "A manual reference or an approved integration, with direction and authority explicit.",
    authority: "Integrations",
    highlighted: true,
  },
];

export default function BillingContext() {
  return (
    <section className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-6 py-12 sm:px-8 sm:py-14 lg:px-7 lg:py-16">

        {/* Eyebrow */}
        <div className="flex h-4 items-center">
          <span className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="ml-2.5 text-xs font-bold uppercase leading-4 tracking-[0.18em] text-blue-600">
            Client, brand &amp; engagement context
          </span>
        </div>

        {/* Heading */}
        <h2 className="!m-0 w-full max-w-[900px] !text-[30px] !font-extrabold !leading-[1.15] tracking-tight text-gray-900">
          A campaign reference explains why you are billing. It does not run
          the campaign.
        </h2>

        {/* Description */}
        <p className="w-full max-w-[686px] text-sm font-normal leading-6 text-gray-600 sm:text-base">
          Context can arrive from a CRM, project tool or media plan. Authority
          over issued billing documents, payments and financial approvals stays
          where it belongs.
        </p>

        {/* Table */}
        <div className="mt-3 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-[320px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-600">
                    Context
                  </th>

                  <th className="w-[calc(100%-496px)] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-600">
                    Behavior
                  </th>

                  <th className="w-44 border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-600">
                    Authority
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row) => (
                  <tr key={row.context}>
                    <td className="border-b border-gray-100 px-4 py-3.5 align-top">
                      <span className="text-sm font-semibold leading-5 text-gray-900">
                        {row.context}
                      </span>
                    </td>

                    <td className="border-b border-gray-100 px-4 py-3.5 align-top">
                      <span className="text-sm font-normal leading-5 text-gray-600">
                        {row.behavior}
                      </span>
                    </td>

                    <td className="border-b border-gray-100 px-4 py-3.5 align-top">
                      <span
                        className={`text-sm font-semibold leading-6 ${
                          row.highlighted
                            ? "text-blue-600"
                            : "text-gray-600"
                        }`}
                      >
                        {row.authority}
                      </span>
                    </td>
                  </tr>
                ))}

                {/* Unknown / incomplete */}
                <tr>
                  <td className="px-4 py-3.5 align-top">
                    <span className="text-sm font-semibold leading-5 text-gray-900">
                      Unknown or incomplete
                    </span>
                  </td>

                  <td className="px-4 py-3.5 align-top">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex min-h-6 items-center rounded-md border border-orange-200 bg-orange-50 px-2.5 py-0.5 text-xs font-semibold leading-4 text-orange-700">
                        <span className="mr-2 h-1.5 w-1.5 rounded-sm bg-orange-500" />
                        Needs input
                      </span>

                      <span className="text-sm font-normal leading-5 text-gray-600">
                        stays visible until the source owner resolves it.
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-3.5 align-top">
                    <span className="text-sm font-normal leading-5 text-gray-600">
                      Named source owner
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}