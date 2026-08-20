"use client";

const rows = [
  {
    domain: "Authentication",
    billing: "The approved Billing authentication and session boundary.",
    boundary:
      "Shared or federated identity only when configured and authoritative.",
  },
  {
    domain: "Authorization",
    billing: "Billing permissions enforced at the Billing service boundary.",
    boundary: "Connected context cannot bypass Billing authorization.",
  },
  {
    domain: "Data minimization",
    billing: "Expose only configured, necessary fields.",
    boundary: "Customer selects the lawful purpose and scope.",
  },
  {
    domain: "Encryption & secrets",
    billing:
      "Approved platform controls. Secrets never appear in a public interface.",
    boundary:
      "Connection credentials stored only in approved secret infrastructure.",
  },
  {
    domain: "Audit evidence",
    billing:
      "Record connection changes, mapping versions, authorization, workflow outcomes and exceptions.",
    boundary: "Review and export rights depend on role and policy.",
  },
  {
    domain: "Retention & deletion",
    billing: "Apply product and contractual retention rules.",
    boundary: "Disconnect does not imply immediate deletion.",
  },
  {
    domain: "Privacy rights",
    billing: "Route through authoritative privacy processes.",
    boundary:
      "Connected copies and references must be discoverable enough for governed handling.",
  },
  {
    domain: "Incident handling",
    billing:
      "Operational and security incidents route to approved support and security channels.",
    boundary: "A sales conversion never replaces incident handling.",
  },
];

const defaults = [
  "Setup defaults to the minimum approved categories for the stated purpose.",
  "A stable reference is used instead of a full record wherever it satisfies the workflow.",
  "Matching identities never imply entitlement to Billing data.",
  "Connected data is never repurposed for advertising, employee scoring, or customer-value scoring.",
];

const routes = [
  "Trust & security",
  "Privacy",
  "Accessibility",
  "System status",
];

export default function Security() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50 px-4 py-14 sm:px-6 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-3.5">
        {/* Label */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Security, privacy &amp; shared responsibility
          </span>
          <span className="h-px w-6 bg-blue-600/50" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold leading-9 tracking-tight text-slate-900 sm:text-3xl sm:leading-10">
          Who is responsible for what, stated per domain.
        </h2>

        {/* Description */}
        <p className="max-w-[700px] text-sm leading-6 text-slate-500 sm:text-base">
          Connecting two products does not create a compliance, certification,
          residency or audit guarantee. Claims stay scoped to approved
          evidence.
        </p>

        {/* Table */}
        <div className="mt-2 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
          {/* Desktop */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-[160px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-600">
                    Domain
                  </th>

                  <th className="w-[45%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-600">
                    Zoiko Billing responsibility
                  </th>

                  <th className="w-[42%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-600">
                    Customer / Zoiko One / shared boundary
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row, index) => (
                  <tr key={row.domain}>
                    <td
                      className={`px-4 py-3.5 align-top text-sm font-semibold leading-5 text-slate-900 ${
                        index !== rows.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      {row.domain}
                    </td>

                    <td
                      className={`px-4 py-3.5 align-top text-sm leading-5 text-slate-500 ${
                        index !== rows.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      {row.billing}
                    </td>

                    <td
                      className={`px-4 py-3.5 align-top text-sm leading-5 text-slate-500 ${
                        index !== rows.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      {row.boundary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="divide-y divide-gray-200 md:hidden">
            <div className="bg-gray-50 px-4 py-3">
              <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                Shared responsibility boundaries
              </p>
            </div>

            {rows.map((row) => (
              <div key={row.domain} className="p-4">
                <h3 className="text-sm font-semibold leading-5 text-slate-900">
                  {row.domain}
                </h3>

                <div className="mt-4 space-y-4">
                  <div>
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-blue-600">
                      Zoiko Billing responsibility
                    </p>
                    <p className="text-sm leading-5 text-slate-500">
                      {row.billing}
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-blue-600">
                      Customer / Zoiko One / shared boundary
                    </p>
                    <p className="text-sm leading-5 text-slate-500">
                      {row.boundary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom cards */}
        <div className="grid grid-cols-1 gap-5 pt-2 lg:grid-cols-2">
          {/* Data minimization */}
          <div className="rounded-2xl border border-gray-200 bg-gray-100 px-5 py-6 sm:px-6">
            <h3 className="text-base font-bold leading-7 text-slate-900">
              Data minimization defaults
            </h3>

            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-500">
              {defaults.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Procurement */}
          <div className="rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:px-6">
            <h3 className="text-base font-bold leading-7 text-slate-900">
              Procurement routes stay ungated
            </h3>

            <p className="mt-3 text-sm leading-5 text-slate-500">
              Trust, Privacy, Accessibility, Help, Status and account-specific
              support are reachable without a sales gate.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {routes.map((route) => (
                <span
                  key={route}
                  className="inline-flex min-h-9 items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-semibold leading-5 text-slate-900"
                >
                  {route}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}