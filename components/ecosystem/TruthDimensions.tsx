const rows = [
  {
    dimension: "Connection availability",
    states:
      "Available · Limited · Planned if public · Not available · Needs review (internal)",
  },
  {
    dimension: "Product availability",
    states:
      "Each product's own current service, commercial and jurisdiction state",
  },
  {
    dimension: "Connection health",
    states:
      "Healthy · Partial · Degraded · Error · Unavailable · Stale",
  },
  {
    dimension: "Mapping health",
    states:
      "Mapped · Partial · Conflict · Stale · Unmapped · Needs review",
  },
  {
    dimension: "Compatibility",
    states:
      "Compatible · Upgrade required · Limited · Incompatible · Needs review",
  },
  {
    dimension: "Event health",
    states:
      "Current · Lagging · Backlog · Failed · Dead-letter · Stale",
  },
  {
    dimension: "Lifecycle",
    states:
      "Current · Deprecated · Sunset scheduled · Withdrawn · Replaced",
  },
  {
    dimension: "Last verified",
    states: "The current product-pair verification date",
  },
];

export default function TruthDimensions() {
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
              pt-2
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
                Operational health, version, compatibility & lifecycle
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
              Eight truth dimensions, no single green badge.
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
              Authentication, connection health, mapping health, compatibility,
              product availability and entitlement are separate readings that
              can disagree.
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
            <div className="w-full overflow-x-auto">
              <div className="min-w-[1040px]">
                {/* TABLE HEADER */}
                <div
                  className="
                    grid
                    grid-cols-[320px_minmax(0,1fr)]
                    border-b
                    border-[#dfe5ee]
                    bg-[#fafbfc]
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
                      Truth dimension
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
                      States
                    </span>
                  </div>
                </div>

                {/* TABLE BODY */}
                <div>
                  {rows.map((row, index) => (
                    <div
                      key={row.dimension}
                      className={`
                        grid
                        grid-cols-[320px_minmax(0,1fr)]
                        ${
                          index !== rows.length - 1
                            ? "border-b border-[#edf0f5]"
                            : ""
                        }
                      `}
                    >
                      {/* TRUTH DIMENSION */}
                      <div className="px-4 py-3.5">
                        <span
                          className="
                            text-sm
                            font-semibold
                            leading-5
                            text-[#091127]
                          "
                        >
                          {row.dimension}
                        </span>
                      </div>

                      {/* STATES */}
                      <div className="px-4 py-3.5">
                        <span
                          className="
                            text-sm
                            font-normal
                            leading-5
                            text-[#5d7192]
                          "
                        >
                          {row.states}
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