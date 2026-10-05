export default function NoRecordUnknownDegradedBehavior() {
  const rows = [
    {
      condition: "Market not found",
      response:
        "Offer a search reset and a sales verification route.",
      prohibited: "Do not say unsupported.",
    },
    {
      condition: "Market exists, capability absent",
      response:
        "State that no public capability record is available.",
      prohibited: "Do not infer unavailable.",
    },
    {
      condition: "Coverage service unavailable",
      response:
        "Preserve the static explanation; mark live coverage temporarily unavailable.",
      prohibited:
        "Do not present cached coverage as current.",
    },
    {
      condition: "Evidence unavailable",
      response:
        "Keep the status only if policy permits.",
      prohibited:
        "Otherwise downgrade or withhold the exact claim.",
    },
    {
      condition: "Conflicting source records",
      response:
        "Show review needed internally and a safe public state.",
      prohibited: "Do not choose automatically.",
    },
    {
      condition: "Private / controlled coverage",
      response:
        "Say additional scope may require sales or authorized review.",
      prohibited:
        "Without implying hidden support exists.",
    },
    {
      condition: "Stale record",
      response:
        "Mark the currentness issue.",
      prohibited:
        "Do not present as current.",
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
                No-record, unknown &amp; degraded behavior
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
              Seven conditions, and none of them
              <br className="hidden sm:block" />
              says &quot;unsupported&quot;.
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
              Absence of a record is the most misread signal in any coverage
              directory.
            </p>
          </div>

          {/* DESKTOP TABLE + MOBILE CARDS */}
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
                  grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                  bg-[#26344d]
                "
              >
                <div
                  className="
                    border-b
                    border-r
                    border-white/15
                    px-3.5
                    py-3
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Condition
                  </span>
                </div>

                <div
                  className="
                    border-b
                    border-r
                    border-white/15
                    px-3.5
                    py-3
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Required response
                  </span>
                </div>

                <div
                  className="
                    border-b
                    border-white/15
                    px-3.5
                    py-3
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Prohibited
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.condition}
                  className={`
                    grid
                    grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* CONDITION */}
                  <div
                    className="
                      border-r
                      border-[#edf0f4]
                      bg-[#fafbfc]
                      px-3.5
                      py-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-bold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.condition}
                    </span>
                  </div>

                  {/* REQUIRED RESPONSE */}
                  <div
                    className="
                      border-r
                      border-[#edf0f4]
                      px-3.5
                      py-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-normal
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.response}
                    </span>
                  </div>

                  {/* PROHIBITED */}
                  <div
                    className="
                      bg-[#fdfdfd]
                      px-3.5
                      py-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-bold
                        leading-5
                        text-[#7f1d1d]
                      "
                    >
                      {row.prohibited}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.condition}
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
                  {/* CONDITION */}
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
                      Condition
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
                      {row.condition}
                    </p>
                  </div>

                  {/* REQUIRED RESPONSE */}
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
                      Required response
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.response}
                    </p>
                  </div>

                  {/* PROHIBITED */}
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
                      Prohibited
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-bold
                        leading-6
                        text-[#7f1d1d]
                      "
                    >
                      {row.prohibited}
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