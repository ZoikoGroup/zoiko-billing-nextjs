const rows = [
  {
    layer: "Product pair",
    representation:
      "Canonical source and target products from the approved registry",
  },
  {
    layer: "Deployment mode",
    representation:
      "Standalone, optional point connection, or approved Zoiko One deployment",
  },
  {
    layer: "Context scope",
    representation:
      "Typed tenant, organization, entity, workspace, team, customer and user mappings",
  },
  {
    layer: "Objects / events",
    representation:
      "The registered capability and its direction",
  },
  {
    layer: "Authority",
    representation:
      "The authoritative product or service for each domain and field",
  },
  {
    layer: "Permissions",
    representation:
      "Source and target authorization evaluated independently",
  },
  {
    layer: "Purpose",
    representation:
      "A declared cross-product operational purpose",
  },
  {
    layer: "Compatibility",
    representation:
      "Product, API and event-schema versions",
  },
  {
    layer: "Availability",
    representation:
      "Plan, region, deployment and current evidence",
  },
  {
    layer: "Evidence",
    representation:
      "Correlation IDs, source IDs, versions, timestamps and decisions",
  },
];

export default function EcosystemModel() {
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
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-10

            sm:gap-11
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[662px]
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
                  tracking-[0.16em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Zoiko Ecosystem operating model
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                !max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]
              "
            >
              The public unit is a connection, not a logo.
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
              Every capability must be expressible as source product plus
              target product plus object or event plus action plus direction
              plus purpose plus authority plus applicability.
            </p>
          </div>

          {/* TABLE */}
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
            {/* RESPONSIVE TABLE */}
            <div className="w-full overflow-x-auto">
              <div className="min-w-[760px]">
                {/* TABLE HEADER */}
                <div
                  className="
                    grid
                    grid-cols-[220px_minmax(0,1fr)]
                    border-b
                    border-[#dfe5ee]
                    bg-[#fafbfc]

                    md:grid-cols-[256px_minmax(0,1fr)]
                  "
                >
                  <div className="px-4 py-3">
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
                      Layer
                    </span>
                  </div>

                  <div className="px-4 py-3">
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
                      Required representation
                    </span>
                  </div>
                </div>

                {/* TABLE BODY */}
                <div>
                  {rows.map((row, index) => (
                    <div
                      key={row.layer}
                      className={`
                        grid
                        grid-cols-[220px_minmax(0,1fr)]
                        md:grid-cols-[256px_minmax(0,1fr)]
                        ${
                          index !== rows.length - 1
                            ? "border-b border-[#edf0f5]"
                            : ""
                        }
                      `}
                    >
                      {/* LAYER */}
                      <div className="px-4 py-3.5">
                        <span
                          className="
                            text-sm
                            font-semibold
                            leading-5
                            text-[#091127]
                          "
                        >
                          {row.layer}
                        </span>
                      </div>

                      {/* REPRESENTATION */}
                      <div className="px-4 py-3.5">
                        <span
                          className="
                            text-sm
                            font-normal
                            leading-5
                            text-[#5d7192]
                          "
                        >
                          {row.representation}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}