const permissionRows = [
  {
    action: "View connection status",
    authority: "Authorized admin or auditor",
    control: "Read-only evidence and scope",
  },
  {
    action: "Configure connection",
    authority: "Integration or admin permission",
    control: "Step-up authentication where risk warrants",
  },
  {
    action: "Change mapping",
    authority: "Integration or config owner",
    control: "Versioned draft → review → activate",
  },
  {
    action: "Change data direction",
    authority: "High-impact integration authority",
    control: "Explicit approval plus an impact summary",
  },
  {
    action: "Enable a sensitive data category",
    authority: "Data owner, plus privacy or security authority",
    control: "Purpose and minimization review",
  },
  {
    action: "Approve a workflow handoff",
    authority: "Domain authority",
    control: "No implicit cross-product inheritance",
  },
  {
    action: "Pause connection",
    authority: "Authorized operations or admin",
    control: "Reason and impact visible",
  },
  {
    action: "Disconnect",
    authority: "Named high-impact authority",
    control: "Confirmation, dependency review, disposition plan",
  },
  {
    action: "Delete a shared copy or reference",
    authority: "Data-specific authority",
    control: "Retention and legal constraints checked first",
  },
];

const roles = [
  {
    title: "Billing Organization Owner",
    description:
      "Authorizes the organization-level connection decision.",
  },
  {
    title: "Integration Administrator",
    description:
      "Configures mappings and credentials. Cannot override finance or data-owner approvals.",
  },
  {
    title: "Finance Administrator",
    description:
      "Owns billing domain rules and approves financial handoffs.",
  },
  {
    title: "Privacy / Data Owner",
    description:
      "Can block sharing that falls outside an approved purpose.",
  },
  {
    title: "Zoiko One Org Admin",
    description:
      "Authorizes receiving-side scope. Gains no Billing financial privilege.",
  },
  {
    title: "Security / Identity Admin",
    description:
      "Owns identity and auth configuration. Holds no commercial authority.",
  },
  {
    title: "Auditor / Reviewer",
    description:
      "Reads evidence, history and configuration. No mutation rights.",
  },
  {
    title: "Support / Operations",
    description:
      "Diagnoses and recovers within entitlement. Cannot broaden data scope.",
  },
];

export default function Permissions() {
  return (
    <section className="w-full border-t border-gray-200 bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-3.5">
        {/* Eyebrow */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Permissions &amp; separation of duties
          </span>

          <span className="h-px w-6 bg-blue-600/50" />
        </div>

        {/* Heading */}
        <h2 className="max-w-[1150px] text-2xl font-bold leading-9 tracking-tight text-slate-900 sm:text-3xl sm:leading-10">
          Connecting two products does not merge their admins.
        </h2>

        {/* Description */}
        <p className="max-w-[700px] text-sm font-normal leading-6 text-slate-500 sm:text-base">
          Permissions are mapped deliberately. The union of permissions from
          two products is prohibited as a default.
        </p>

        {/* Permission table */}
        <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
          {/* Table intro */}
          <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
            <p className="text-sm leading-5 text-slate-500">
              Minimum authority per action, with the recommended control.
            </p>
          </div>

          {/* Desktop header */}
          <div className="hidden grid-cols-[minmax(220px,1fr)_minmax(260px,1.2fr)_minmax(300px,1.5fr)] border-b border-gray-200 bg-gray-50 md:grid">
            <div className="px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-blue-600">
              Action
            </div>

            <div className="border-l border-gray-200 px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-blue-600">
              Minimum authority
            </div>

            <div className="border-l border-gray-200 px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-blue-600">
              Recommended control
            </div>
          </div>

          {/* Permission rows */}
          <div>
            {permissionRows.map((row, index) => (
              <div
                key={row.action}
                className={`md:grid md:grid-cols-[minmax(220px,1fr)_minmax(260px,1.2fr)_minmax(300px,1.5fr)] ${
                  index !== permissionRows.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                {/* Action */}
                <div className="px-4 py-4 md:py-3.5">
                  <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-blue-600 md:hidden">
                    Action
                  </div>

                  <p className="mt-1 text-sm font-semibold leading-5 text-slate-900 md:mt-0">
                    {row.action}
                  </p>
                </div>

                {/* Authority */}
                <div className="border-t border-gray-100 px-4 py-4 md:border-l md:border-t-0 md:py-3.5">
                  <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-blue-600 md:hidden">
                    Minimum authority
                  </div>

                  <p className="mt-1 text-sm font-normal leading-5 text-slate-500 md:mt-0">
                    {row.authority}
                  </p>
                </div>

                {/* Control */}
                <div className="border-t border-gray-100 px-4 py-4 md:border-l md:border-t-0 md:py-3.5">
                  <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-blue-600 md:hidden">
                    Recommended control
                  </div>

                  <p className="mt-1 text-sm font-normal leading-5 text-slate-500 md:mt-0">
                    {row.control}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roles */}
        <div className="mt-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <div
              key={role.title}
              className="flex min-h-[170px] flex-col rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
            >
              <h3 className="text-sm font-bold leading-6 text-slate-900">
                {role.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-blue-600">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}