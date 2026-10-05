export default function ExceptionsOverridesConflictsCorrections() {
  const scenarios = [
    {
      scenario: "Temporary override",
      behavior:
        "Requires scope, reason, owner, evidence and a review or expiry concept.",
      boundary: "Never hidden.",
    },
    {
      scenario: "Conflicting source",
      behavior:
        "Mark unresolved and route to specialist review.",
      boundary: "The UI does not choose a legal answer.",
    },
    {
      scenario: "Missing source",
      behavior:
        "Show the gap and withhold the exact configuration.",
      boundary: "Do not publish as verified.",
    },
    {
      scenario: "Emergency correction",
      behavior:
        "Expedited governed correction is permitted.",
      boundary:
        "Only with a visible change and evidence trail.",
    },
    {
      scenario: "Scope conflict",
      behavior:
        "Show which scope is ambiguous.",
      boundary: "Block silent inheritance.",
    },
    {
      scenario: "Scheduled change cancelled",
      behavior:
        "Preserve cancellation history where governance requires.",
      boundary:
        "Current effective configuration remains explicit.",
    },
    {
      scenario: "Superseded value referenced downstream",
      behavior:
        "Show the current replacement and its lineage.",
      boundary:
        "Do not silently rewrite historical evidence.",
    },
  ];

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
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[1000px]
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
                Exceptions, overrides, conflicts &amp; corrections
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
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
              Seven scenarios, and the interface
              <br className="hidden sm:block" />
              never picks a legal answer.
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
              Each names a required behavior rather than a resolution.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div
            className="
              hidden
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              md:block
            "
          >
            {/* HEADER */}
            <div className="grid grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)] bg-[#091127]">
              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Scenario
                </span>
              </div>

              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Required behavior
                </span>
              </div>

              <div className="px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Boundary
                </span>
              </div>
            </div>

            {/* ROWS */}
            {scenarios.map((item, index) => (
              <div
                key={item.scenario}
                className={`
                  grid
                  grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                  ${
                    index !== scenarios.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* SCENARIO */}
                <div className="border-r border-[#edf0f4] bg-[#fafafa] px-3.5 py-3">
                  <span className="text-xs font-bold leading-5 text-[#091127]">
                    {item.scenario}
                  </span>
                </div>

                {/* REQUIRED BEHAVIOR */}
                <div className="border-r border-[#edf0f4] px-3.5 py-3">
                  <span className="text-xs font-normal leading-5 text-[#091127]">
                    {item.behavior}
                  </span>
                </div>

                {/* BOUNDARY */}
                <div className="bg-[#f8f8f8] px-3.5 py-3">
                  <span className="text-xs font-bold leading-5 text-red-900">
                    {item.boundary}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET */}
          <div className="flex w-full flex-col gap-3 md:hidden">
            {scenarios.map((item) => (
              <div
                key={item.scenario}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* SCENARIO */}
                <div className="border-b border-[#edf0f4] bg-[#fafafa] px-4 py-3.5 sm:px-5">
                  <p className="!m-0 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Scenario
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-bold leading-5 text-[#091127]">
                    {item.scenario}
                  </p>
                </div>

                {/* REQUIRED BEHAVIOR */}
                <div className="border-b border-[#edf0f4] px-4 py-4 sm:px-5">
                  <p className="!m-0 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Required behavior
                  </p>

                  <p className="!m-0 mt-1.5 text-sm leading-5 text-[#091127]">
                    {item.behavior}
                  </p>
                </div>

                {/* BOUNDARY */}
                <div className="bg-[#f8f8f8] px-4 py-4 sm:px-5">
                  <p className="!m-0 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Boundary
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-bold leading-5 text-red-900">
                    {item.boundary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}