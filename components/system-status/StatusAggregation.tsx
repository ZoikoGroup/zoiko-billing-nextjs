export default function StatusAggregation() {
  const rows = [
    {
      condition: "All visible components operational, no active impact",
      behavior: (
        <>
          Operational —{" "}
          <span className="font-bold">
            subject to current source freshness
          </span>
        </>
      ),
    },
    {
      condition: "Any component degraded",
      behavior: (
        <>
          Overall follows approved aggregation policy, with{" "}
          <span className="font-bold">
            affected components explicitly shown
          </span>
        </>
      ),
    },
    {
      condition: "Any partial or major outage",
      behavior:
        "Overall reflects source-defined incident impact and aggregation",
    },
    {
      condition: "Maintenance only",
      behavior: (
        <>
          <span className="font-bold">Do not automatically mark an outage</span>{" "}
          — follow the source state
        </>
      ),
    },
    {
      condition: "Mixed states",
      behavior: (
        <>
          Use the most meaningful approved aggregate.{" "}
          <span className="font-bold">
            Never hide an affected component behind a green overall banner
          </span>
        </>
      ),
    },
    {
      condition: "Source unavailable or stale",
      behavior: (
        <>
          Overall becomes unknown or source-unavailable —{" "}
          <span className="font-bold">it does not retain green</span>
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto flex w-full max-w-[1440px] flex-col items-start
          px-5 py-14
          sm:px-8 sm:py-16
          md:px-10 md:py-20
          lg:px-14
          xl:px-20
        "
      >
        <div
          className="
            mx-auto flex w-full max-w-[1240px] flex-col
            items-center gap-8
            sm:gap-10
            md:gap-11
          "
        >
          {/* INTRO */}
          <div
            className="
              flex w-full max-w-[662px] flex-col
              items-center gap-3 pt-2 text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px] font-bold uppercase leading-4
                  tracking-[0.16em] text-[#7890b2]
                  sm:text-xs sm:tracking-[0.18em]
                "
              >
                Overall status aggregation
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0 w-full max-w-[662px]
                !text-[30px] !font-extrabold
                !leading-[1.2] !tracking-[-0.035em]
                !text-[#091127]
                sm:!text-[34px]
                md:!text-[36px]
                lg:!text-[40px]
              "
            >
              Six conditions, and green is never the fallback.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0 w-full max-w-[687px]
                text-[15px] font-normal leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              The overall banner summarizes component state. It must never
              summarize it in a way that conceals an affected component.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full overflow-hidden rounded-2xl
              border border-[#dfe5ee] bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* DESKTOP */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[minmax(300px,0.48fr)_minmax(0,1fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs font-bold uppercase leading-4
                      tracking-wide text-[#7890b2]
                    "
                  >
                    Condition
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs font-bold uppercase leading-4
                      tracking-wide text-[#7890b2]
                    "
                  >
                    Overall behavior
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.condition}
                  className={`
                    grid
                    grid-cols-[minmax(300px,0.48fr)_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm font-semibold leading-5
                        text-[#091127]
                      "
                    >
                      {row.condition}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm font-normal leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.behavior}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.condition}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  <div className="mb-4">
                    <p
                      className="
                        !m-0 text-[11px] font-bold uppercase
                        tracking-[0.12em] text-[#7890b2]
                      "
                    >
                      Condition
                    </p>

                    <p
                      className="
                        !m-0 mt-1.5 text-sm font-semibold
                        leading-5 text-[#091127]
                      "
                    >
                      {row.condition}
                    </p>
                  </div>

                  <div>
                    <p
                      className="
                        !m-0 text-[11px] font-bold uppercase
                        tracking-[0.12em] text-[#7890b2]
                      "
                    >
                      Overall behavior
                    </p>

                    <p
                      className="
                        !m-0 mt-1.5 text-sm font-normal
                        leading-6 text-[#5d7192]
                      "
                    >
                      {row.behavior}
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