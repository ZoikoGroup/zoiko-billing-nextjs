const rows = [
  {
    field: "Product pair",
    behavior: "Only from the approved product registry",
  },
  {
    field: "Connection type",
    behavior:
      "Native product integration, Zoiko One handoff, or approved API-event connection",
  },
  {
    field: "Capabilities",
    behavior:
      "The exact current object, event and action groups",
  },
  {
    field: "Direction",
    behavior:
      "Source to target, target to source, controlled bidirectional, reference-only or event-only",
  },
  {
    field: "Authentication",
    behavior: "Registered method and product trust",
  },
  {
    field: "Plan / region",
    behavior: "Current applicability",
  },
  {
    field: "Compatibility",
    behavior: "Current compatible versions",
  },
  {
    field: "Operational status",
    behavior:
      "Normal, degraded, incident, maintenance, unavailable or stale",
  },
  {
    field: "Lifecycle",
    behavior:
      "Current, deprecated, sunset, withdrawn or replaced",
  },
  {
    field: "Last verified",
    behavior: "The current verification date",
  },
];

export default function Connections() {
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
                Approved product connections & availability
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
              Only current connection records are published.
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
              Ten listing fields, each registry-backed. A product name alone
              never appears as evidence of support.
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
              <div className="min-w-[900px]">
                {/* TABLE HEADER */}
                <div
                  className="
                    grid
                    grid-cols-[240px_minmax(0,1fr)]
                    border-b
                    border-[#dfe5ee]
                    bg-[#fafbfc]

                    md:grid-cols-[240px_minmax(0,1fr)]
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
                      Field
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
                      Required behavior
                    </span>
                  </div>
                </div>

                {/* TABLE BODY */}
                <div>
                  {rows.map((row, index) => (
                    <div
                      key={row.field}
                      className={`
                        grid
                        grid-cols-[240px_minmax(0,1fr)]
                        ${
                          index !== rows.length - 1
                            ? "border-b border-[#edf0f5]"
                            : ""
                        }
                      `}
                    >
                      {/* FIELD */}
                      <div className="px-4 py-3.5">
                        <span
                          className="
                            text-sm
                            font-semibold
                            leading-5
                            text-[#091127]
                          "
                        >
                          {row.field}
                        </span>
                      </div>

                      {/* REQUIRED BEHAVIOR */}
                      <div className="px-4 py-3.5">
                        <span
                          className="
                            text-sm
                            font-normal
                            leading-5
                            text-[#5d7192]
                          "
                        >
                          {row.behavior}
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