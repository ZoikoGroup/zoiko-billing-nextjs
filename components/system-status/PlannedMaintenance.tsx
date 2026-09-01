export default function PlannedMaintenance() {
  const rows = [
    {
      field: "Window",
      requirement: "Start and end with an explicit time zone.",
      guardrail: (
        <>
          <strong>Never a bare clock time</strong> — the same rule the events
          page applies
        </>
      ),
    },
    {
      field: "Affected components",
      requirement: "From the component registry.",
      guardrail: "Not a product area name that maps to nothing",
    },
    {
      field: "Expected impact",
      requirement: "What a customer should expect during the window.",
      guardrail: (
        <>
          <strong>No impact stated means no impact known</strong>, which must
          be said explicitly
        </>
      ),
    },
    {
      field: "Status during window",
      requirement: "Under maintenance, per source state.",
      guardrail: <strong>Maintenance is not automatically an outage</strong>,
    },
    {
      field: "Changes to the window",
      requirement:
        "Extension, rescheduling or cancellation recorded with a timestamp.",
      guardrail: (
        <>
          An extended window is stated, <strong>not quietly moved</strong>
        </>
      ),
    },
    {
      field: "Completion",
      requirement: "An explicit completion entry.",
      guardrail:
        "The window ending on the clock is not confirmation it completed",
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
            mx-auto flex w-full max-w-[1240px]
            flex-col items-center gap-8
            sm:gap-10
            md:gap-11
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex w-full max-w-[662px] flex-col
              items-center gap-3 pt-2 text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px] font-bold uppercase leading-4
                  tracking-[0.16em] text-[#7890b2]
                  sm:text-xs sm:tracking-[0.18em]
                "
              >
                Planned maintenance
              </span>

              <span className="h-px w-4 bg-[#7890b2] opacity-40" />
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
              Six fields, and expected impact is one of them.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0 w-full max-w-[687px]
                text-[15px] font-normal leading-7
                text-[#5d7192] sm:text-base
              "
            >
              A maintenance window with no stated impact tells a customer
              nothing they can plan around.
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
            {/* DESKTOP TABLE */}
            <div className="hidden md:block overflow-x-auto">
              <div className="min-w-[1040px]">
                {/* HEADER */}
                <div className="grid grid-cols-[192px_minmax(0,474.75px)_minmax(0,1fr)] bg-[#fafbfc]">
                  <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                    <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                      Field
                    </span>
                  </div>

                  <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                    <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                      Requirement
                    </span>
                  </div>

                  <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                    <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                      Guardrail
                    </span>
                  </div>
                </div>

                {/* ROWS */}
                {rows.map((row, index) => (
                  <div
                    key={row.field}
                    className={`
                      grid grid-cols-[192px_minmax(0,474.75px)_minmax(0,1fr)]
                      ${
                        index !== rows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    <div className="px-4 py-3.5">
                      <span className="text-sm font-semibold leading-5 text-[#091127]">
                        {row.field}
                      </span>
                    </div>

                    <div className="px-4 py-3.5">
                      <span className="text-sm font-normal leading-5 text-[#5d7192]">
                        {row.requirement}
                      </span>
                    </div>

                    <div className="px-4 py-3.5">
                      <span className="text-sm font-normal leading-5 text-[#5d7192]">
                        {row.guardrail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.field}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* FIELD */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Field
                    </p>
                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {row.field}
                    </p>
                  </div>

                  {/* REQUIREMENT */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Requirement
                    </p>
                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.requirement}
                    </p>
                  </div>

                  {/* GUARDRAIL */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Guardrail
                    </p>
                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.guardrail}
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