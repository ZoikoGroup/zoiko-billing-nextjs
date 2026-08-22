const roles = [
  {
    role: "Billing Admin",
    rights: "Create and edit approved profile, contact and context fields.",
    restricted:
      "Merge, retention or deletion, and high-risk ownership change may require elevated permission",
  },
  {
    role: "AR / Finance Operator",
    rights:
      "View the context needed for receivables and payment work; update limited operational fields.",
    restricted: "No broad identity, contact or tax changes by default",
  },
  {
    role: "Document / Billing Operator",
    rights: "Use approved delivery and profile context.",
    restricted: "Cannot silently change authoritative customer identity",
  },
  {
    role: "Manager / Approver",
    rights: "Review and approve high-impact changes and exceptions.",
    restricted: "No unrestricted system-admin access implied",
  },
  {
    role: "Integration Admin",
    rights: "Manage mappings, health and sync behavior.",
    restricted:
      "Cannot redefine business authority without approved configuration",
  },
  {
    role: "Privacy / Compliance Admin",
    rights:
      "Handle rights, restriction, retention and deletion workflows per policy.",
    restricted: "No billing or commercial override",
  },
  {
    role: "Auditor",
    rights: "Read history and evidence within scope.",
    restricted: "No edit",
  },
  {
    role: "Support Admin",
    rights:
      "Scoped break-fix access with reason, time bound, audit and privacy policy.",
    restricted: "No unlogged permanent change",
  },
];

export default function Roles() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 px-0 sm:px-4 lg:gap-5 lg:px-7">
        {/* Header */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-4 bg-blue-600 opacity-40" />

            <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
              Roles, permissions, approvals &amp; controls
            </span>

            <div className="h-px w-4 bg-blue-600 opacity-40" />
          </div>

          {/* Heading */}
         <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl sm:leading-10">
  High-risk actions need
  authority, reason and a record.
</h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
            Merges, identity-affecting edits, ownership changes, exports and
            retention actions all require least-privilege permission and leave
            evidence.
          </p>
        </div>

        {/* Table Container */}
        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          {/* Desktop Table */}
          <div className="hidden md:block">
            {/* Header */}
            <div className="grid grid-cols-[20%_40%_40%] border-b border-gray-200 bg-gray-50">
              <div className="px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                  Role
                </span>
              </div>

              <div className="px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                  Typical rights
                </span>
              </div>

              <div className="px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                  Restricted actions
                </span>
              </div>
            </div>

            {/* Rows */}
            {roles.map((item, index) => (
              <div
                key={item.role}
                className={`grid grid-cols-[20%_40%_40%] ${
                  index !== roles.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                <div className="px-4 py-3.5">
                  <p className="text-sm font-semibold leading-5 text-slate-900">
                    {item.role}
                  </p>
                </div>

                <div className="px-4 py-3.5">
                  <p className="text-sm font-normal leading-5 text-slate-600">
                    {item.rights}
                  </p>
                </div>

                <div className="px-4 py-3.5">
                  <p className="text-sm font-normal leading-5 text-slate-600">
                    {item.restricted}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="flex flex-col md:hidden">
            {roles.map((item, index) => (
              <div
                key={item.role}
                className={`p-5 ${
                  index !== roles.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                <h3 className="text-base font-bold leading-6 text-slate-900">
                  {item.role}
                </h3>

                <div className="mt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-blue-600">
                    Typical rights
                  </p>

                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    {item.rights}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-blue-600">
                    Restricted actions
                  </p>

                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    {item.restricted}
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