interface MigrationScenarioRow {
  scenario: string;
  requiredBehavior: React.ReactNode;
}

const migrationScenarioRows: MigrationScenarioRow[] = [
  {
    scenario: "Initial migration",
    requiredBehavior: "Dry-run counts, external IDs, duplicates, field authority, rejects, conflicts, privacy scope and review",
  },
  {
    scenario: "Existing Billing customers",
    requiredBehavior: "Map without recreating or overwriting; customer history preserved",
  },
  {
    scenario: "CRM schema or API change",
    requiredBehavior: "Compatibility check, mapping version, test, rollout and rollback",
  },
  {
    scenario: "Field mapping change",
    requiredBehavior: "Impact preview, future effective date where needed, stale and conflict handling",
  },
  {
    scenario: "Integration degraded",
    requiredBehavior: (
      <>
        Expose operational status and currentness —{" "}
        <span className="font-bold text-slate-900">
          do not continue risky writes blindly
        </span>
      </>
    ),
  },
  {
    scenario: "CRM incident",
    requiredBehavior: "Status and support route; preserve local Billing truth, queue and reconcile only where safe",
  },
  {
    scenario: "Deprecated connector",
    requiredBehavior: "Lifecycle state and migration path if authorized; no surprise removal",
  },
  {
    scenario: "Provider account change",
    requiredBehavior: "Versioned connection mapping; no historical external-ID rewrite",
  },
  {
    scenario: "Disconnect",
    requiredBehavior: "Stop new sync, revoke credentials and webhooks, preserve historical external IDs, resolve queued items",
  },
  {
    scenario: "Support",
    requiredBehavior: "Integration Support owns connection diagnosis; domain teams own business-data decisions per source authority",
  },
];

export default function MigrationChangeOperationalStatusSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="migration-status">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          MIGRATION, CHANGE, OPERATIONAL STATUS &amp; SUPPORT
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          A healthy connection is not healthy data.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Authentication health, transport health, object sync health, field currentness, conflict
          count, event backlog and lifecycle state are seven different readings.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="p-3.5 px-6 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
            Scenarios and required behavior.
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    SCENARIO
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIRED BEHAVIOR
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {migrationScenarioRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.scenario}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.requiredBehavior}
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
