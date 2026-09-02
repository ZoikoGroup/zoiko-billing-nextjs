interface SharedRow {
  area: string;
  zoiko: React.ReactNode;
  you: React.ReactNode;
  thirdParty: React.ReactNode;
}

const sharedRows: SharedRow[] = [
  {
    area: "Service continuity",
    zoiko: "Approved platform continuity controls and recovery governance.",
    you: "Your internal process for business disruption, where applicable.",
    thirdParty: "Provider and service dependency obligations where applicable.",
  },
  {
    area: "Identity & access",
    zoiko: "Approved platform recovery and access controls.",
    you: (
      <>
        Maintaining authorized admins, identity-provider access and{" "}
        <span className="font-bold text-slate-900">local admin continuity</span> where customer-owned.
      </>
    ),
    thirdParty: "Identity provider availability.",
  },
  {
    area: "Integrations",
    zoiko: "The approved integration and platform boundary.",
    you: "Credential, endpoint, external system and reconciliation continuity where customer-owned.",
    thirdParty: "External system and API availability.",
  },
  {
    area: "Data & records",
    zoiko: "Approved recovery and integrity processes.",
    you: (
      <>
        Export, downstream archive or local retention{" "}
        <span className="font-bold text-slate-900">
          where the source assigns that responsibility to you
        </span>
        .
      </>
    ),
    thirdParty: "Processor and provider obligations as approved.",
  },
  {
    area: "Incident communication",
    zoiko: "System Status and approved support communication.",
    you: (
      <>
        Monitoring status and support, and{" "}
        <span className="font-bold text-slate-900">
          maintaining local escalation paths
        </span>
        .
      </>
    ),
    thirdParty: "Provider communication where they own the dependency.",
  },
];

export default function SharedResponsibilityContinuitySection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="shared-responsibility">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          SHARED RESPONSIBILITY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Five areas, three parties, no gaps left implied.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          The most common continuity failure is not a technical one — it is a responsibility neither side
          believed was theirs.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[768px]">
              <thead>
                <tr className="bg-[#0B132B] text-white border-b border-slate-800">
                  <th scope="col" className="py-3.5 px-6 text-[11px] font-bold uppercase tracking-wider text-white w-[18%]">
                    AREA
                  </th>
                  <th scope="col" className="py-3.5 px-6 text-[11px] font-bold uppercase tracking-wider text-white w-[30%]">
                    ZOIKO BILLING
                  </th>
                  <th scope="col" className="py-3.5 px-6 text-[11px] font-bold uppercase tracking-wider text-white w-[30%]">
                    YOU / YOUR ADMINS
                  </th>
                  <th scope="col" className="py-3.5 px-6 text-[11px] font-bold uppercase tracking-wider text-white w-[22%]">
                    THIRD PARTY
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {sharedRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.area}
                    </td>
                    <td className="py-4 px-6 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.zoiko}
                    </td>
                    <td className="py-4 px-6 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.you}
                    </td>
                    <td className="py-4 px-6 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.thirdParty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1788179741778.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Stacked Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm p-4 sm:p-6 text-left space-y-6 divide-y divide-slate-100">
            {sharedRows.map((row, idx) => (
              <div key={idx} className="pt-4 first:pt-0 space-y-2 text-xs">
                <div className="font-bold text-slate-900 text-sm mb-1">{row.area}</div>
                <div className="space-y-1.5 text-[11px]">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">ZOIKO BILLING</span>
                    <span className="text-slate-600 leading-relaxed">{row.zoiko}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">YOU / YOUR ADMINS</span>
                    <span className="text-slate-600 leading-relaxed">{row.you}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">THIRD PARTY</span>
                    <span className="text-slate-600 leading-relaxed">{row.thirdParty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Red Two Rows Assumed Away Callout Box */}
          <div className="rounded-2xl border border-red-200/80 bg-red-50/70 p-4 text-xs text-red-950 font-normal leading-relaxed mt-4">
            <span className="font-bold text-red-900">The two rows most often assumed away. Local admin continuity</span> — if the only person who can grant access is unavailable, platform recovery does not help you. And <span className="font-bold text-slate-900">local escalation paths</span> — knowing where a status notification should go inside your organization is a decision made before an incident, not during one. Both sit on the customer side because neither is something a platform can do on your behalf.
          </div>

        </div>

      </div>
    </section>
  );
}
