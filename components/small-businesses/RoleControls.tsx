"use client";

const controlStages = [
  {
    stage: "Owner-led",
    looksLike:
      "One authorized owner may do most tasks — and history and permissions still exist behind them.",
    doesNotMean: "Not that controls are unnecessary",
  },
  {
    stage: "Small finance or admin team",
    looksLike:
      "Separate routine billing from sensitive changes and approvals where configured.",
    doesNotMean: "Not enterprise bureaucracy",
  },
  {
    stage: "Growing operations team",
    looksLike:
      "Add scoped roles and approval routes as responsibility spreads.",
    doesNotMean: "Not automatic role assignment",
  },
  {
    stage: "External bookkeeper or adviser",
    looksLike:
      "Permissioned access to only the tasks they need.",
    doesNotMean: "Not full tenant access",
  },
  {
    stage: "Integration admin",
    looksLike:
      "Technical mapping and connection authority.",
    doesNotMean: "Not a finance approver",
  },
];

const roles = [
  {
    title: "Owner / business admin",
    description:
      "Broad configuration and oversight where authorized — without bypassing audit history.",
  },
  {
    title: "Billing admin",
    description:
      "Customer setup, schedules and documents within scope. No security or integration admin authority by default.",
  },
  {
    title: "Approver",
    description:
      "Approves configured high-impact actions. Cannot silently edit the underlying data.",
  },
  {
    title: "AR / finance",
    description:
      "Balances, payment, reconciliation and credit responsibilities. No integration mapping by default.",
  },
  {
    title: "Bookkeeper / adviser",
    description:
      "Scoped billing and reporting access only.",
  },
  {
    title: "Auditor / reviewer",
    description:
      "Read-only history and evidence. No mutation rights.",
  },
];

export default function RoleControls() {
  return (
    <section className="w-full border-t border-gray-200 bg-white px-6 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
        {/* Eyebrow */}
        <div className="relative flex h-4 items-center">
          <div className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="ml-2.5 text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Roles, approvals &amp; owner controls
          </span>
        </div>

        {/* Heading */}
        <div className="w-full pb-1">
          <h2 className="text-2xl font-bold leading-9 text-gray-900 sm:text-3xl sm:leading-10">
            Controls that grow with the team — starting with no shared logins.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[686px]">
          <p className="text-sm font-normal leading-6 text-gray-600 sm:text-base">
            Structure is a way to avoid shared passwords, invisible changes
            and unclear ownership. It is not enterprise process imposed on a
            team of four.
          </p>
        </div>

        {/* Control story */}
        <div className="mt-3 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          {/* Intro */}
          <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
            <p className="text-sm font-normal leading-5 text-gray-600">
              Control story by stage. Each stage is a legitimate place to
              stop.
            </p>
          </div>

          {/* Desktop / Tablet */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-[20%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-gray-600">
                    Where you are
                  </th>

                  <th className="w-[57%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-gray-600">
                    What this looks like
                  </th>

                  <th className="w-[23%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-gray-600">
                    What it does not mean
                  </th>
                </tr>
              </thead>

              <tbody>
                {controlStages.map((item, index) => (
                  <tr key={item.stage}>
                    <td
                      className={`px-4 py-3.5 align-top ${
                        index !== controlStages.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <p className="text-sm font-semibold leading-5 text-gray-900">
                        {item.stage}
                      </p>
                    </td>

                    <td
                      className={`px-4 py-3.5 align-top ${
                        index !== controlStages.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <p className="text-sm font-normal leading-5 text-gray-600">
                        {item.looksLike}
                      </p>
                    </td>

                    <td
                      className={`px-4 py-3.5 align-top ${
                        index !== controlStages.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <p className="text-sm font-normal leading-5 text-gray-600">
                        {item.doesNotMean}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="flex flex-col md:hidden">
            {controlStages.map((item, index) => (
              <div
                key={item.stage}
                className={`flex flex-col gap-4 p-4 ${
                  index !== controlStages.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    Where you are
                  </p>

                  <p className="text-sm font-semibold leading-5 text-gray-900">
                    {item.stage}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    What this looks like
                  </p>

                  <p className="text-sm leading-5 text-gray-600">
                    {item.looksLike}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    What it does not mean
                  </p>

                  <p className="text-sm leading-5 text-gray-600">
                    {item.doesNotMean}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Role cards */}
        <div className="mt-3 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.title}
              className="flex min-h-[170px] flex-col rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]"
            >
              <h3 className="text-sm font-bold leading-6 text-gray-900">
                {role.title}
              </h3>

              <p className="mt-2 text-xs font-normal leading-5 text-gray-500">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}