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
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
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
          {/* ================= SECTION INTRO ================= */}
          <div
            className="
              flex
              w-full
              max-w-[662px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  whitespace-nowrap
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Implementation, security, privacy &amp; resilience
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
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
              Validate availability before committing scope.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              A global rollout resolves each capability against the current
              registry first, then configures with source ownership and
              effective dates.
            </p>
          </div>

          {/* ================= TABLE ================= */}
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
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[176px_minmax(0,1fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Area
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Requirement
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {implementationAreas.map((item, index) => (
                <div
                  key={item.area}
                  className={`
                    grid
                    grid-cols-[176px_minmax(0,1fr)]
                    ${
                      index !== implementationAreas.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* AREA */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.area}
                    </span>
                  </div>

                  {/* REQUIREMENT */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {item.requirement}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {implementationAreas.map((item, index) => (
                <div
                  key={item.area}
                  className={`
                    p-5
                    ${
                      index !== implementationAreas.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* AREA */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Area
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.area}
                    </p>
                  </div>

                  {/* REQUIREMENT */}
                  <div>
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Requirement
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.requirement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}