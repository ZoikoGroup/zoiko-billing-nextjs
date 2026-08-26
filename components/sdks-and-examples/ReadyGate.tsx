export default function ReadyGate() {
  const rows = [
    {
      check: "Authentication",
      shows: "Correct usage pattern in the declared environment.",
      production:
        "Production credentials, permissions, rotation, secret storage, access ownership",
    },
    {
      check: "Core request",
      shows: "Call shape and expected evidence.",
      production:
        "Production configuration, real data constraints, limits, monitoring",
    },
    {
      check: "Idempotency & retries",
      shows: "The pattern, only if canonical.",
      production:
        "Real failure, timeout and unknown-outcome handling under production conditions",
    },
    {
      check: "Webhooks",
      shows: "Handler pattern under the declared contract.",
      production:
        "Production endpoint, verification material, delivery behavior, monitoring, reconciliation",
    },
    {
      check: "Data",
      shows: "Synthetic test objects.",
      production:
        "Production data governance, retention, privacy, residency, legal requirements",
    },
    {
      check: "Performance",
      shows: (
        <>
          <strong>Nothing</strong>, unless benchmark claims are canonical.
        </>
      ),
      production: "Production load, latency, quotas, scaling, backpressure",
    },
    {
      check: "Operations",
      shows: "Logging and evidence pattern.",
      production:
        "On-call ownership, support escalation, incident and reconciliation procedures",
    },
    {
      check: "Commercial",
      shows: "Basic public documentation.",
      production:
        "Plan availability, limits, contractual support, enterprise requirements",
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
                Production readiness gate
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
              What the example shows, and what it never validates.
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
              Eight checks, each stated as a pair — because the second column
              is what teams forget.
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
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[192px_384px_minmax(0,1fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Check
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    The example shows
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Production still requires
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.check}
                  className={`
                    grid
                    grid-cols-[192px_384px_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.check}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <div className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.shows}
                    </div>
                  </div>

                  <div className="px-4 py-3.5">
                    <div className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.production}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.check}
                  className={`
                    p-5
                    sm:p-6
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* CHECK */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Check
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {row.check}
                    </p>
                  </div>

                  {/* EXAMPLE SHOWS */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      The example shows
                    </p>

                    <div className="mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.shows}
                    </div>
                  </div>

                  {/* PRODUCTION */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Production still requires
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.production}
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