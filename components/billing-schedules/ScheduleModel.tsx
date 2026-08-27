const scheduleDimensions = [
  {
    number: "01",
    title: "Stable ID and version",
    description:
      "The definition and the exact accountable configuration in force.",
  },
  {
    number: "02",
    title: "Start date, time and timezone",
    description:
      "The governing local time, recorded explicitly rather than assumed.",
  },
  {
    number: "03",
    title: "Pattern",
    description:
      "One-time, or a supported recurrence with its interval and anchor rules.",
  },
  {
    number: "04",
    title: "End condition",
    description:
      "End date, occurrence count or open-ended status where supported.",
  },
  {
    number: "05",
    title: "Window, grace and cutoff",
    description:
      "How long an occurrence stays eligible, and when it stops being eligible.",
  },
  {
    number: "06",
    title: "Scope",
    description:
      "The customers, entity, amounts, documents or workflows it applies to.",
  },
  {
    number: "07",
    title: "Owner and policies",
    description:
      "Named owner, plus the approval and exception policies that govern it.",
  },
];

const scheduleDefinition = [
  {
    number: "1",
    label: "Identity and version",
    value: "SCH-2044 · v4 · supersedes v3",
  },
  {
    number: "2",
    label: "Start and timezone",
    value: "01 Feb 2026 · 06:00 · Europe/London",
  },
  {
    number: "3",
    label: "Pattern",
    value: "Monthly on day 1 · anchor rule: last day in short months",
  },
  {
    number: "4",
    label: "End condition",
    value: "Open-ended · no occurrence limit set",
  },
  {
    number: "5",
    label: "Window and cutoff",
    value: "eligibility 4h · grace 2h · cutoff 10:00 local",
  },
  {
    number: "6",
    label: "Scope",
    value: "12 customers · Zoiko Ltd (UK) · retainer definition · GBP",
  },
  {
    number: "7",
    label: "Owner and policies",
    value:
      "r.iqbal · approval THRESH-10K v3 · exception CATCHUP-REVIEW v2",
  },
];

export default function ScheduleModel() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14
          lg:py-24

          xl:px-20
        "
      >
        <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-10 lg:gap-11">
          {/* HEADER */}
          <div
            className="
              flex
              flex-col
              gap-7

              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:gap-16
            "
          >
            {/* TITLE */}
            <div className="w-full lg:flex-1">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-0.5 w-5 shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    leading-4
                    tracking-[0.16em]
                    text-[#5272a0]

                    sm:text-xs
                  "
                >
                  Schedule model
                </span>
              </div>

              <h2
                className="
                  !m-0
                  !max-w-[640px]
                  !text-[38px]
                  !font-medium
                  !leading-[1.12]
                  !tracking-[-0.035em]
                  !text-slate-900

                  sm:!text-[44px]

                  md:!text-[48px]

                  lg:!text-[50px]
                  lg:!leading-[1.08]
                "
              >
                Make timing, context
                <br className="hidden sm:block" />
                and ownership explicit.
              </h2>
            </div>

            {/* INTRO */}
            <div className="w-full lg:max-w-[529px] lg:flex-1">
              <p
                className="
                  m-0
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#5d7192]

                  sm:text-base
                  sm:leading-8
                "
              >
                Seven dimensions define a governed schedule. Internal cron
                expressions and queue behaviour are deliberately not part of
                this.
              </p>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div
            className="
              flex
              flex-col
              gap-10
              pt-2

              lg:flex-row
              lg:items-start
              lg:gap-16
            "
          >
            {/* LEFT — SCHEDULE DEFINITION */}
            <div className="w-full lg:w-1/2">
              {/* BADGE */}
              <div className="mb-3 flex items-center">
                <div
                  className="
                    inline-flex
                    min-h-7
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-emerald-100
                    bg-white
                    px-3
                  "
                >
                  <span className="h-[5px] w-[5px] rounded-full bg-blue-600" />

                  <span
                    className="
                      text-[10px]
                      font-normal
                      uppercase
                      leading-4
                      tracking-[0.12em]
                      text-blue-600
                    "
                  >
                    Illustrative product view
                  </span>
                </div>
              </div>

              {/* PRODUCT CARD */}
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-zinc-200
                  bg-white
                  shadow-[0px_4px_14px_0px_rgba(14,33,27,0.04),0px_1px_2px_0px_rgba(14,33,27,0.05)]
                "
              >
                {/* CARD HEADER */}
                <div
                  className="
                    flex
                    flex-col
                    gap-3
                    border-b
                    border-zinc-200
                    bg-[#f7f8fa]
                    px-4
                    py-3.5

                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 shrink-0 rounded-sm bg-blue-600" />

                    <span
                      className="
                        text-[10px]
                        font-normal
                        uppercase
                        leading-4
                        tracking-[0.1em]
                        text-[#5d7192]

                        sm:text-xs
                      "
                    >
                      Schedule definition SCH-2044
                    </span>
                  </div>

                  <div
                    className="
                      inline-flex
                      min-h-7
                      items-center
                      gap-2
                      self-start
                      rounded-full
                      border
                      border-blue-100
                      bg-[#f7f8fa]
                      px-3

                      sm:self-auto
                    "
                  >
                    <span className="text-xs font-medium text-blue-600">
                      ✓
                    </span>

                    <span
                      className="
                        text-[10px]
                        font-medium
                        uppercase
                        leading-4
                        tracking-[0.08em]
                        text-blue-600
                      "
                    >
                      Version 4 active
                    </span>
                  </div>
                </div>

                {/* DEFINITION ROWS */}
                {scheduleDefinition.map((item, index) => (
                  <div
                    key={item.number}
                    className={`
                      flex
                      items-start
                      gap-3.5
                      px-4
                      py-3.5
                      ${index !== scheduleDefinition.length - 1 ? "border-b border-zinc-200" : ""}
                    `}
                  >
                    <div
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        border
                        border-blue-100
                        bg-[#f7f8fa]
                        text-[10px]
                        font-semibold
                        leading-4
                        text-blue-600
                      "
                    >
                      {item.number}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className="
                          m-0
                          text-[10px]
                          font-medium
                          uppercase
                          leading-4
                          tracking-[0.08em]
                          text-[#5272a0]
                        "
                      >
                        {item.label}
                      </p>

                      <p
                        className="
                          mt-1.5
                          m-0
                          break-words
                          text-sm
                          font-normal
                          leading-6
                          text-slate-900
                        "
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — DIMENSIONS */}
            <div className="w-full lg:w-1/2">
              <h3
                className="
                  !m-0
                  !text-lg
                  !font-semibold
                  !leading-6
                  !text-slate-900
                "
              >
                What each dimension controls
              </h3>

              <p
                className="
                  mt-2
                  max-w-[480px]
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#5d7192]

                  sm:text-base
                "
              >
                Together these decide when an occurrence becomes due, who
                owns it and what happens if it cannot proceed.
              </p>

              {/* DIMENSION LIST */}
              <div className="mt-5">
                {scheduleDimensions.map((item, index) => (
                  <div
                    key={item.number}
                    className={`
                      flex
                      gap-4
                      py-4

                      ${index !== scheduleDimensions.length - 1 ? "border-b border-zinc-200" : ""}
                    `}
                  >
                    <span
                      className="
                        w-5
                        shrink-0
                        pt-0.5
                        text-[10px]
                        font-semibold
                        leading-4
                        text-blue-600
                      "
                    >
                      {item.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h4
                        className="
                          !m-0
                          !text-sm
                          !font-semibold
                          !leading-6
                          !text-slate-900
                        "
                      >
                        {item.title}
                      </h4>

                      <p
                        className="
                          mt-1
                          m-0
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MODEL BOUNDARY */}
          <div
            className="
              flex
              flex-col
              items-start
              gap-2
              rounded-r-2xl
              border-l-[3px]
              border-blue-600
              bg-[#f7f8fa]
              px-5
              py-6

              sm:px-6
              sm:py-7

              lg:px-7
              lg:py-7
            "
          >
            <span
              className="
                text-[10px]
                font-medium
                uppercase
                leading-4
                tracking-[0.12em]
                text-blue-600
              "
            >
              Model boundary
            </span>

            <p
              className="
                m-0
                w-full
                max-w-[780px]
                text-[15px]
                font-normal
                leading-7
                text-slate-900

                sm:text-base
              "
            >
              Internal cron expressions and queue implementation are never
              exposed. A displayed next run is a projection from the current
              schedule version, not a commitment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}