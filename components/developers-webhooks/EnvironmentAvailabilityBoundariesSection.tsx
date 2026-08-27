interface EnvironmentConcernRow {
  concern: string;
  requirement: React.ReactNode;
}

const environmentConcernRows: EnvironmentConcernRow[] = [
  {
    concern: "Environment",
    requirement: "Always identify sandbox, test, production or another approved environment",
  },
  {
    concern: "Event parity",
    requirement: (
      <span className="font-bold text-slate-900">
        Never assume all events exist in all environments
      </span>
    ),
  },
  {
    concern: "Endpoint reuse",
    requirement: "Never assume subscription configuration is portable across environments",
  },
  {
    concern: "Test data",
    requirement: "Label synthetic and test data distinctly",
  },
  {
    concern: "Availability",
    requirement: "Plan, region, beta, partner or enterprise gates only when source-approved",
  },
  {
    concern: "Migration",
    requirement: "Environment promotion or copy behavior only if the product supports it",
  },
];

export default function EnvironmentAvailabilityBoundariesSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="environment-boundaries">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          ENVIRONMENT &amp; AVAILABILITY BOUNDARIES
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Never assume all events exist in all environments.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Six boundaries, each preventing an assumption that only surfaces in production.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-800/80 bg-[#060D20]">
          <img
            src="/images/devolpers-webhooks/dw7.png"
            alt="Never assume all events exist in all environments"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787665858574.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Concern and requirement.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80">
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-2/5">
                      CONCERN
                    </th>
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-3/5">
                      REQUIREMENT
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {environmentConcernRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.concern}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.requirement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
