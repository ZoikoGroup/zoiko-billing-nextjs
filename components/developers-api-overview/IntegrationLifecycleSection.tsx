interface LifecycleRow {
  stage: string;
  devResponsibility: string;
  zoikoResponsibility: React.ReactNode;
}

const lifecycleRows: LifecycleRow[] = [
  {
    stage: "Discover",
    devResponsibility: "Confirm API fit, resources and source-of-truth boundaries.",
    zoikoResponsibility: "Capability map plus documentation handoff",
  },
  {
    stage: "Authorize",
    devResponsibility: "Set up identity, credentials, permissions and environment access.",
    zoikoResponsibility: "Authentication handoff plus scope boundary",
  },
  {
    stage: "Model",
    devResponsibility: "Map external objects and fields to supported billing objects and states.",
    zoikoResponsibility: (
      <>
        Object-domain guidance —{" "}
        <span className="font-semibold text-slate-900">no undocumented mappings</span>
      </>
    ),
  },
  {
    stage: "Build",
    devResponsibility: "Implement requests, validation, events and error handling.",
    zoikoResponsibility: "Documentation, webhooks and examples handoffs",
  },
  {
    stage: "Test",
    devResponsibility: "Exercise supported flows with nonproduction data where available.",
    zoikoResponsibility: "Developer Sandbox handoff",
  },
  {
    stage: "Launch",
    devResponsibility: "Validate production configuration, permissions, ownership and observability.",
    zoikoResponsibility: "A production-readiness checklist pattern",
  },
  {
    stage: "Operate",
    devResponsibility: "Monitor failures, version changes, deprecations, retries and business exceptions.",
    zoikoResponsibility: "Reliability and change section plus support routes",
  },
  {
    stage: "Evolve",
    devResponsibility: "Adopt new capabilities without breaking existing integrations.",
    zoikoResponsibility: "Version, deprecation and change-log discipline",
  },
];

export default function IntegrationLifecycleSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="lifecycle">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-6 bg-slate-300" />
          INTEGRATION LIFECYCLE
          <span className="h-px w-6 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl max-w-3xl">
          Eight stages, with responsibility named on both sides.
        </h2>

        {/* Subtitle */}
        <p className="mt-3.5 max-w-xl text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
          What the developer owns, and what this page owes them at each stage.
        </p>

        {/* Table Container */}
        <div className="mt-12 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-4 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/6">
                    STAGE
                  </th>
                  <th scope="col" className="py-4 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-5/12">
                    DEVELOPER RESPONSIBILITY
                  </th>
                  <th scope="col" className="py-4 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-5/12">
                    ZOIKO BILLING PAGE RESPONSIBILITY
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {lifecycleRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top whitespace-nowrap">
                      {row.stage}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.devResponsibility}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.zoikoResponsibility}
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
