interface PermissionElementRow {
  element: string;
  specification: React.ReactNode;
}

const permissionRows: PermissionElementRow[] = [
  {
    element: "Permission summary",
    specification: "Every operation entry shows required access in human-readable form",
  },
  {
    element: "Permission explorer",
    specification:
      "Filter by billing domain, resource, action, environment and availability where canonical metadata exists",
  },
  {
    element: "Scope identifiers",
    specification:
      "Source-approved identifiers only, each paired with a plain-English definition",
  },
  {
    element: "Object & action context",
    specification: (
      <>
        Read, create, update, approve, issue, send, allocate, reconcile and export are{" "}
        <span className="font-bold text-slate-900">
          action categories, not claims of API support
        </span>
      </>
    ),
  },
  {
    element: "Workflow state",
    specification:
      "Where an action is state-dependent, expose the prerequisite state and authority",
  },
  {
    element: "Role mapping",
    specification:
      "Where admin roles govern credential or permission changes, show role visibility and action boundaries",
  },
  {
    element: "Denial behavior",
    specification:
      "Denied access is distinct from not-found or unavailable data, where API semantics support the distinction",
  },
  {
    element: "Review cadence",
    specification: "Periodic access review appears only if product policy defines it",
  },
];

export default function PermissionsLeastPrivilegeSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="permissions">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          PERMISSIONS &amp; LEAST PRIVILEGE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Denied is not the same as not found.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Eight elements of the authorization model, each requiring source-approved
          identifiers paired with plain-English definitions.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    ELEMENT
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    SPECIFICATION
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {permissionRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.element}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.specification}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
