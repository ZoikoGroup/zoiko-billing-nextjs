const causes = [
  {
    title: "Missing or invalid context",
    description:
      "Customer, amount, document or integration context is absent or fails validation.",
  },
  {
    title: "No eligible approver",
    description:
      "Required permission or an eligible reviewer is unavailable for the decision.",
  },
  {
    title: "Timing conflict",
    description:
      "Timezone, cutoff or effective-date conflict makes the occurrence ineligible.",
  },
  {
    title: "Dependency unavailable",
    description:
      "A downstream outage, timeout or rate limit prevents the action.",
  },
];

const recoveryPolicies = [
  {
    title: "Skip",
    description:
      "Intentionally do not execute, recording the reason and moving to the next occurrence.",
  },
  {
    title: "Retry or delay",
    description:
      "Attempt again under an approved policy with a limit and a target time.",
  },
  {
    title: "Catch up or backfill",
    description:
      "Run missed occurrences, where explicitly permitted for that schedule.",
  },
  {
    title: "Aggregate",
    description:
      "Combine missed occurrences into one, where that is supported and approved.",
  },
  {
    title: "Manual review",
    description:
      "Route to a named owner with severity and a defined next action.",
  },
];

const timingRows = [
  {
    situation: "Short or missing calendar date",
    direction: "Use the supported anchor rule, or block.",
    control: "The rule is explicit. A date is never silently invented.",
  },
  {
    situation: "Daylight-saving gap or overlap",
    direction: "Apply the documented local-time policy.",
    control:
      "Record the timezone, the resolved instant and the policy used.",
  },
  {
    situation: "Occurrence missed during an outage",
    direction:
      "Skip, catch up, backfill or route to review per configuration.",
    control: "Avoid duplicate or uncontrolled historical execution.",
  },
  {
    situation: "Schedule changed before the next run",
    direction: "Apply the new version from its effective time.",
    control: "Preserve projected and superseded occurrence context.",
  },
  {
    situation: "Schedule changed after a run started",
    direction:
      "In-flight treatment follows the approved version and policy.",
    control: "Executing work is never silently mutated.",
  },
  {
    situation: "Customer or source becomes ineligible",
    direction: "Skip, pause, expire or route to review.",
    control: "Record the reason and re-evaluate future occurrences.",
  },
  {
    situation: "Timezone or entity changes",
    direction: "Create an accountable schedule revision.",
    control:
      "Show the effect on the next occurrence and any approval requirement.",
  },
];

export default function MissedRuns() {
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
          lg:py-24

          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1220px]
            flex-col
            gap-10

            sm:gap-12
          "
        >
          {/* =========================
              SECTION INTRO
          ========================== */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-8

              lg:flex-row
              lg:items-end
              lg:gap-16
            "
          >
            {/* LEFT */}
            <div
              className="
                flex
                w-full
                flex-1
                flex-col
                items-start
                gap-5
                pt-2.5
                pb-2

                lg:pb-6
              "
            >
              {/* EYEBROW */}
              <div className="flex items-center gap-2.5">
                <span
                  className="
                    h-0.5
                    w-5
                    shrink-0
                    rounded-sm
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-500
                  "
                />

                <span
                  className="
                    font-mono
                    text-[10px]
                    font-medium
                    uppercase
                    leading-4
                    tracking-[0.14em]
                    text-[#54709a]

                    sm:text-xs
                  "
                >
                  Missed runs
                </span>
              </div>

              {/* HEADING */}
              <h2
                className="
                  !m-0
                  max-w-[638px]
                  text-[30px]
                  font-medium
                  leading-[1.15]
                  tracking-[-0.035em]
                  text-[#091127]

                  sm:text-[36px]

                  md:text-[42px]

                  lg:text-[48px]
                  lg:leading-[1.12]
                "
              >
                Decide what happens
                <br className="hidden sm:block" /> when a scheduled run
                <br className="hidden sm:block" /> cannot proceed.
              </h2>
            </div>

            {/* RIGHT DESCRIPTION */}
            <div
              className="
                w-full
                max-w-[529px]
                flex-1
                lg:pb-2
              "
            >
              <p
                className="
                  !m-0
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#5d7192]

                  sm:text-base
                  sm:leading-8
                "
              >
                Recovery is a decision you make in advance, not something
                the system improvises. Catch-up and backfill carry real
                financial weight.
              </p>
            </div>
          </div>

          {/* =========================
              MAIN CONTENT
          ========================== */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-10

              lg:flex-row
              lg:items-start
              lg:gap-16
            "
          >
            {/* =========================
                LEFT COLUMN
            ========================== */}
            <div className="w-full lg:max-w-[526px]">
              {/* WHY A RUN CANNOT START */}
              <div className="flex flex-col">
                <h3
                  className="
                    !m-0
                    mb-1.5
                    text-lg
                    font-semibold
                    leading-6
                    text-[#091127]
                  "
                >
                  Why a run cannot start
                </h3>

                <div className="flex flex-col">
                  {causes.map((item, index) => (
                    <div
                      key={item.title}
                      className={`
                        flex
                        flex-col
                        gap-3
                        py-3.5

                        sm:flex-row
                        sm:items-start
                        sm:gap-4

                        ${
                          index !== causes.length - 1
                            ? "border-b border-[#dfe5ee]"
                            : ""
                        }
                      `}
                    >
                      <div className="w-full sm:w-36 sm:shrink-0">
                        <span
                          className="
                            text-sm
                            font-semibold
                            leading-6
                            text-[#091127]
                          "
                        >
                          {item.title}
                        </span>
                      </div>

                      <div className="flex-1">
                        <p
                          className="
                            !m-0
                            text-sm
                            font-normal
                            leading-6
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

              {/* RECOVERY POLICIES */}
              <div className="mt-6 flex flex-col">
                <h3
                  className="
                    !m-0
                    mb-1.5
                    text-lg
                    font-semibold
                    leading-6
                    text-[#091127]
                  "
                >
                  Recovery policies
                </h3>

                <div className="flex flex-col">
                  {recoveryPolicies.map((item, index) => (
                    <div
                      key={item.title}
                      className={`
                        flex
                        flex-col
                        gap-3
                        py-3.5

                        sm:flex-row
                        sm:items-start
                        sm:gap-4

                        ${
                          index !== recoveryPolicies.length - 1
                            ? "border-b border-[#dfe5ee]"
                            : ""
                        }
                      `}
                    >
                      <div className="w-full sm:w-36 sm:shrink-0">
                        <span
                          className="
                            text-sm
                            font-semibold
                            leading-6
                            text-[#091127]
                          "
                        >
                          {item.title}
                        </span>
                      </div>

                      <div className="flex-1">
                        <p
                          className="
                            !m-0
                            text-sm
                            font-normal
                            leading-6
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

            {/* =========================
                RIGHT COLUMN
            ========================== */}
            <div className="w-full lg:max-w-[526px]">
              {/* EXCEPTION CARD */}
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_4px_14px_rgba(14,33,27,0.04),0_1px_2px_rgba(14,33,27,0.05)]
                "
              >
                {/* CARD HEADER */}
                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-2.5
                    border-b
                    border-[#dfe5ee]
                    bg-[#f7f8fa]
                    px-4
                    py-3.5
                  "
                >
                  <span className="h-2 w-2 rounded-sm bg-[#3b82f6]" />

                  <span
                    className="
                      font-mono
                      text-[10px]
                      font-normal
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#5d7192]
                    "
                  >
                    Exception EX-8812
                  </span>

                  <span
                    className="
                      ml-auto
                      rounded-full
                      border
                      border-red-200
                      bg-red-50
                      px-3
                      py-1.5
                      font-mono
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-wide
                      text-red-500
                    "
                  >
                    ! &nbsp; Unresolved
                  </span>
                </div>

                {/* DETAILS */}
                <div className="flex flex-col">
                  {[
                    {
                      label: "Occurrence",
                      value: "SCH-2044 · 01 Aug 06:00 Europe/London",
                    },
                    {
                      label: "Class",
                      value: "Dependency unavailable · usage source",
                    },
                    {
                      label: "Severity",
                      value: "Material · affects 3 customers",
                    },
                    {
                      label: "Attempts",
                      value: "3 of 5 · next 08:30 UTC",
                    },
                    {
                      label: "Policy",
                      value: "CATCHUP-REVIEW · v2",
                    },
                    {
                      label: "Owner",
                      value: "r.iqbal",
                    },
                  ].map((item, index, items) => (
                    <div
                      key={item.label}
                      className={`
                        flex
                        flex-col
                        gap-1.5
                        px-4
                        py-3

                        sm:flex-row
                        sm:items-start
                        sm:gap-3.5

                        ${
                          index !== items.length - 1
                            ? "border-b border-[#e5e9ef]"
                            : ""
                        }
                      `}
                    >
                      <div className="w-full sm:w-24 sm:shrink-0">
                        <span
                          className="
                            font-mono
                            text-[10px]
                            font-normal
                            uppercase
                            leading-4
                            tracking-wide
                            text-[#7890b2]
                          "
                        >
                          {item.label}
                        </span>
                      </div>

                      <p
                        className="
                          !m-0
                          flex-1
                          text-sm
                          font-normal
                          leading-6
                          text-[#091127]
                        "
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}

                  {/* CATCH-UP */}
                  <div className="flex flex-col gap-1.5 px-4 py-3 sm:flex-row sm:items-center sm:gap-3.5">
                    <div className="w-full sm:w-24 sm:shrink-0">
                      <span
                        className="
                          font-mono
                          text-[10px]
                          font-normal
                          uppercase
                          leading-4
                          tracking-wide
                          text-[#7890b2]
                        "
                      >
                        Catch-up
                      </span>
                    </div>

                    <span
                      className="
                        inline-flex
                        w-fit
                        items-center
                        rounded-full
                        border
                        border-orange-200
                        bg-orange-50
                        px-3
                        py-1.5
                        font-mono
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-wide
                        text-orange-500
                      "
                    >
                      • &nbsp; Requires approval
                    </span>
                  </div>
                </div>

                {/* ACTIONS */}
                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    border-t
                    border-[#dfe5ee]
                    bg-[#fbfcfd]
                    px-4
                    py-4
                  "
                >
                  <button
                    type="button"
                    className="
                      rounded-lg
                      border
                      border-[#3d79d8]
                      bg-[#3d79d8]
                      px-3
                      py-2.5
                      font-mono
                      text-xs
                      font-semibold
                      leading-4
                      text-white
                    "
                  >
                    Approve catch-up
                  </button>

                  <button
                    type="button"
                    className="
                      rounded-lg
                      border
                      border-[#dfe5ee]
                      bg-white
                      px-3
                      py-2.5
                      font-mono
                      text-xs
                      font-normal
                      leading-4
                      text-[#5d7192]
                    "
                  >
                    Skip
                  </button>

                  <button
                    type="button"
                    className="
                      rounded-lg
                      border
                      border-[#dfe5ee]
                      bg-white
                      px-3
                      py-2.5
                      font-mono
                      text-xs
                      font-normal
                      leading-4
                      text-[#5d7192]
                    "
                  >
                    Reassign
                  </button>

                  <button
                    type="button"
                    className="
                      rounded-lg
                      border
                      border-[#dfe5ee]
                      bg-white
                      px-3
                      py-2.5
                      font-mono
                      text-xs
                      font-normal
                      leading-4
                      text-[#5d7192]
                    "
                  >
                    Escalate
                  </button>
                </div>
              </div>

              {/* RECOVERY BOUNDARY */}
              <div
                className="
                  mt-10
                  rounded-r-2xl
                  border-l-[3px]
                  border-[#3d79d8]
                  bg-[#f7f8fa]
                  px-6
                  py-6
                  sm:px-7
                  sm:py-7
                "
              >
                <div
                  className="
                    font-mono
                    text-[10px]
                    font-normal
                    uppercase
                    leading-4
                    tracking-wide
                    text-[#54709a]
                  "
                >
                  Recovery boundary
                </div>

                <p
                  className="
                    !m-0
                    mt-2
                    text-sm
                    font-normal
                    leading-7
                    text-[#091127]

                    sm:text-base
                  "
                >
                  Catch-up and backfill can have material financial effects
                  and require explicit permission. Zoiko Billing does not
                  silently create multiple historical charges or invoices.
                </p>
              </div>
            </div>
          </div>

          {/* =========================
              TIMING / EXCEPTION TABLE
          ========================== */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
            "
          >
            {/* TABLE TITLE */}
            <div
              className="
                border-b
                border-[#dfe5ee]
                bg-[#f7f8fa]
                px-5
                py-3.5

                sm:px-6
              "
            >
              <span
                className="
                  font-mono
                  text-[10px]
                  font-normal
                  uppercase
                  leading-4
                  tracking-wide
                  text-[#5d7192]
                "
              >
                Timing and exception model · how each situation is resolved
              </span>
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[256px_minmax(0,1fr)_minmax(0,1.2fr)]
                  bg-[#fbfcfd]
                "
              >
                <div className="border-b border-[#dfe5ee] px-3.5 py-2.5">
                  <span
                    className="
                      font-mono
                      text-[10px]
                      font-medium
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Situation
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-3.5 py-2.5">
                  <span
                    className="
                      font-mono
                      text-[10px]
                      font-medium
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Permitted direction
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-3.5 py-2.5">
                  <span
                    className="
                      font-mono
                      text-[10px]
                      font-medium
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Control
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {timingRows.map((row, index) => (
                <div
                  key={row.situation}
                  className={`
                    grid
                    grid-cols-[256px_minmax(0,1fr)_minmax(0,1.2fr)]

                    ${
                      index !== timingRows.length - 1
                        ? "border-b border-[#e5e9ef]"
                        : ""
                    }
                  `}
                >
                  <div className="px-3.5 py-3">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.situation}
                    </span>
                  </div>

                  <div className="px-3.5 py-3">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.direction}
                    </span>
                  </div>

                  <div className="px-3.5 py-3">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.control}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE TABLE CARDS */}
            <div className="flex flex-col md:hidden">
              {timingRows.map((row, index) => (
                <div
                  key={row.situation}
                  className={`
                    p-5

                    ${
                      index !== timingRows.length - 1
                        ? "border-b border-[#e5e9ef]"
                        : ""
                    }
                  `}
                >
                  {/* SITUATION */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        font-mono
                        text-[10px]
                        font-medium
                        uppercase
                        leading-4
                        tracking-wide
                        text-[#7890b2]
                      "
                    >
                      Situation
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        text-[#091127]
                      "
                    >
                      {row.situation}
                    </p>
                  </div>

                  {/* DIRECTION */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        font-mono
                        text-[10px]
                        font-medium
                        uppercase
                        leading-4
                        tracking-wide
                        text-[#7890b2]
                      "
                    >
                      Permitted direction
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        text-[#091127]
                      "
                    >
                      {row.direction}
                    </p>
                  </div>

                  {/* CONTROL */}
                  <div>
                    <p
                      className="
                        !m-0
                        font-mono
                        text-[10px]
                        font-medium
                        uppercase
                        leading-4
                        tracking-wide
                        text-[#7890b2]
                      "
                    >
                      Control
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        text-[#091127]
                      "
                    >
                      {row.control}
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