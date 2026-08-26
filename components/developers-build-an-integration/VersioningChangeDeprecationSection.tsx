interface VersioningConcernRow {
  concern: string;
  requiredOwnership: React.ReactNode;
}

const versioningConcernRows: VersioningConcernRow[] = [
  {
    concern: "Version monitoring",
    requiredOwnership: "A named owner watches the canonical version and deprecation source",
  },
  {
    concern: "Breaking change",
    requiredOwnership: "Impact assessed, migration tested in a non-production environment, evidence updated",
  },
  {
    concern: "Additive change",
    requiredOwnership: "Consumers tolerate additive fields without inferring compatibility semantics that no contract states",
  },
  {
    concern: "Event change",
    requiredOwnership: "Renamed or replaced events tracked through the canonical migration path",
  },
  {
    concern: "Verification change",
    requiredOwnership: "Security-reviewed migration with overlap handling",
  },
  {
    concern: "Evidence",
    requiredOwnership: "Each adopted change recorded against the integration's own documentation",
  },
];

export default function VersioningChangeDeprecationSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="versioning-change">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          VERSIONING, CHANGE &amp; DEPRECATION
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Someone must be watching the changelog.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Change ownership is a named production role, and monitoring is assigned before
          go-live.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    CONCERN
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIRED OWNERSHIP
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {versioningConcernRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.concern}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.requiredOwnership}
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
