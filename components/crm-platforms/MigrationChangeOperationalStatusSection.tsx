interface MigrationScenarioRow {
  scenario: string;
  requiredBehavior: string;
}

const migrationScenarioRows: MigrationScenarioRow[] = [
  {
    scenario: "Initial migration",
    requiredBehavior:
      "Dry-run counts, external IDs, duplicates, field authority, rejects, conflicts, privacy scope and review",
  },
  {
    scenario: "Existing Billing customers",
    requiredBehavior:
      "Map without recreating or overwriting; customer history preserved",
  },
  {
    scenario: "CRM schema or API change",
    requiredBehavior:
      "Compatibility check, mapping version, test, rollout and rollback",
  },
  {
    scenario: "Field mapping change",
    requiredBehavior:
      "Impact preview, future effective date where needed, stale and conflict handling",
  },
  {
    scenario: "Integration degraded",
    requiredBehavior:
      "Expose operational status and currentness — do not continue risky writes blindly",
  },
  {
    scenario: "CRM incident",
    requiredBehavior:
      "Status and support route; preserve local Billing truth, queue and reconcile only where safe",
  },
  {
    scenario: "Deprecated connector",
    requiredBehavior:
      "Lifecycle state and migration path if authorized; no surprise removal",
  },
  {
    scenario: "Provider account change",
    requiredBehavior:
      "Versioned connection mapping; no historical external-ID rewrite",
  },
  {
    scenario: "Disconnect",
    requiredBehavior:
      "Stop new sync, revoke credentials and webhooks, preserve historical external IDs, resolve queued items",
  },
  {
    scenario: "Support",
    requiredBehavior:
      "Integration Support owns connection diagnosis; domain teams own business-data decisions per source authority",
  },
];

export default function MigrationChangeOperationalStatusSection() {
  return (
    <section
      id="migration-status"
      className="w-full bg-[#f7f8fa]"
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-5
          py-14
          sm:px-8
          sm:py-16
          md:px-10
          md:py-20
          lg:px-14
          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8
            sm:gap-10
            md:gap-11
          "
        >
          {/* INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[800px]
              flex-col
              items-center
              gap-3
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.14em]
                  text-[#7890b2]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Migration, Change, Operational Status &amp; Support
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#091127]
                sm:!text-[34px]
                md:!text-[36px]
                lg:!text-[40px]
              "
            >
              A healthy connection is not healthy data.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[720px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              Authentication health, transport health, object sync health,
              field currentness, conflict count, event backlog and lifecycle
              state are seven different readings.
            </p>
          </div>

          {/* MIGRATION CARD */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* CARD HEADER */}
            <div
              className="
                border-b
                border-[#edf0f4]
                bg-[#fafbfc]
                px-5
                py-3.5
                text-sm
                leading-6
                text-[#5d7192]
              "
            >
              Scenarios and required behavior.
            </div>

            {/* DESKTOP */}
            <div className="hidden md:block">
              <div className="grid grid-cols-[280px_minmax(0,1fr)]">
                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Scenario
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#7890b2]">
                    Required Behavior
                  </span>
                </div>
              </div>

              {migrationScenarioRows.map((row, index) => (
                <div
                  key={row.scenario}
                  className={`grid grid-cols-[280px_minmax(0,1fr)] ${
                    index !== migrationScenarioRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <div className="px-5 py-4">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.scenario}
                    </span>
                  </div>

                  <div className="px-5 py-4">
                    <span
                      className={`text-sm leading-6 ${
                        row.scenario === "Integration degraded"
                          ? "font-semibold text-[#091127]"
                          : "text-[#5d7192]"
                      }`}
                    >
                      {row.requiredBehavior}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {migrationScenarioRows.map((row, index) => (
                <div
                  key={row.scenario}
                  className={`p-5 ${
                    index !== migrationScenarioRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Scenario
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                    {row.scenario}
                  </p>

                  <p className="!m-0 mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Required Behavior
                  </p>

                  <p
                    className={`!m-0 mt-1.5 text-sm leading-6 ${
                      row.scenario === "Integration degraded"
                        ? "font-semibold text-[#091127]"
                        : "text-[#5d7192]"
                    }`}
                  >
                    {row.requiredBehavior}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}