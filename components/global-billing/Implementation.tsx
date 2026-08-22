const implementationAreas = [
  {
    area: "Discovery",
    requirement:
      "Identify desired entities, jurisdictions, currencies, document locales, providers, integrations and roles — without collecting unnecessary sensitive data.",
  },
  {
    area: "Availability validation",
    requirement:
      "Resolve each capability against the current registry before committing scope.",
  },
  {
    area: "Configuration",
    requirement:
      "Set entity, currency, document and control mappings with source ownership and effective dates.",
  },
  {
    area: "Migration & import",
    requirement:
      "Preserve original IDs and source, with batch evidence, validation, conflicts and review state.",
  },
  {
    area: "Testing",
    requirement:
      "Sandbox or test only where approved; validate documents, currency behavior, permissions, provider integrations, accessibility and fallback.",
  },
  {
    area: "Cutover",
    requirement:
      "A versioned change with a rollback and recovery plan and a named owner.",
  },
  {
    area: "Operational monitoring",
    requirement:
      "Sync, provider and configuration health, stale availability, exceptions and change history.",
  },
  {
    area: "Security & privacy",
    requirement:
      "Least privilege, tenant and entity isolation, data minimization, retention and support-access controls. Encryption and status claims come only from the Trust authority.",
  },
  {
    area: "Resilience",
    requirement:
      "No uptime figure, failover claim, recovery objective, region redundancy or round-the-clock support is published without current evidence.",
  },
];

export default function Implementation() {
  return (
    <section className="w-full bg-color-grey-97-4 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-24">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 lg:gap-11">
        {/* Header */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2">
          {/* Eyebrow */}
          <div className="flex w-full max-w-[420px] items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />

            <span className="whitespace-nowrap text-center text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Implementation, security, privacy &amp; resilience
            </span>

            <span className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />
          </div>

          {/* Title */}
          <h2 className="text-center text-3xl font-extrabold leading-9 text-color-azure-11-2 sm:text-4xl sm:leading-10">
            Validate availability before
            <br className="hidden sm:block" />
            committing scope.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-center text-sm font-normal leading-6 text-color-azure-44-3 sm:text-base sm:leading-7">
            A global rollout resolves each capability against the current
            registry first, then configures with source ownership and
            effective dates.
          </p>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-2xl border border-color-grey-92-4 bg-color-white-solid shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <div className="w-full overflow-x-auto">
            <div className="min-w-[850px]">
              {/* Header */}
              <div className="grid grid-cols-[176px_minmax(674px,1fr)] bg-color-grey-99-2">
                <div className="border-b border-color-grey-92-4 px-4 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                    Area
                  </span>
                </div>

                <div className="border-b border-color-grey-92-4 px-4 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                    Requirement
                  </span>
                </div>
              </div>

              {/* Rows */}
              {implementationAreas.map((item, index) => {
                const isLast = index === implementationAreas.length - 1;

                return (
                  <div
                    key={item.area}
                    className={`grid grid-cols-[176px_minmax(674px,1fr)] ${
                      !isLast
                        ? "border-b border-color-grey-95-10"
                        : ""
                    }`}
                  >
                    {/* Area */}
                    <div className="px-4 py-3.5">
                      <span className="text-sm font-semibold leading-5 text-color-azure-11-2">
                        {item.area}
                      </span>
                    </div>

                    {/* Requirement */}
                    <div className="px-4 py-3.5">
                      <span className="text-sm font-normal leading-5 text-color-azure-44-3">
                        {item.requirement}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}