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

const exceptionDetails = [
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
              max-w-[720px]
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
                Missed runs
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[720px]
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
              Decide what happens when a scheduled run cannot proceed.
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
              Recovery is a decision you make in advance, not something the
              system improvises. Catch-up and backfill carry real financial
              weight.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-8

              lg:flex-row
              lg:items-start
              lg:gap-10
            "
          >
            {/* LEFT COLUMN */}
            <div
              className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                lg:w-1/2
              "
            >
              {/* WHY A RUN CANNOT START */}
              <div>
                <div
                  className="
                    border-b
                    border-[#dfe5ee]
                    bg-[#fafbfc]
                    px-5
                    py-4
                  "
                >
                  <h3
                    className="
                      !m-0
                      !text-lg
                      !font-semibold
                      !leading-6
                      !text-[#091127]
                    "
                  >
                    Why a run cannot start
                  </h3>
                </div>

                <div className="flex flex-col px-5">
                  {causes.map((item, index) => (
                    <div
                      key={item.title}
                      className={`
                        flex
                        flex-col
                        gap-2
                        py-4

                        sm:flex-row
                        sm:items-start
                        sm:gap-5

                        ${
                          index !== causes.length - 1
                            ? "border-b border-[#edf0f4]"
                            : ""
                        }
                      `}
                    >
                      <div className="w-full sm:w-[150px] sm:shrink-0">
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

                      <p
                        className="
                          !m-0
                          flex-1
                          text-sm
                          font-normal
                          leading-6
                          text-[#5d7192]
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* RECOVERY POLICIES */}
              <div className="border-t border-[#dfe5ee]">
                <div
                  className="
                    border-b
                    border-[#dfe5ee]
                    bg-[#fafbfc]
                    px-5
                    py-4
                  "
                >
                  <h3
                    className="
                      !m-0
                      !text-lg
                      !font-semibold
                      !leading-6
                      !text-[#091127]
                    "
                  >
                    Recovery policies
                  </h3>
                </div>

                <div className="flex flex-col px-5">
                  {recoveryPolicies.map((item, index) => (
                    <div
                      key={item.title}
                      className={`
                        flex
                        flex-col
                        gap-2
                        py-4

                        sm:flex-row
                        sm:items-start
                        sm:gap-5

                        ${
                          index !== recoveryPolicies.length - 1
                            ? "border-b border-[#edf0f4]"
                            : ""
                        }
                      `}
                    >
                      <div className="w-full sm:w-[150px] sm:shrink-0">
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

                      <p
                        className="
                          !m-0
                          flex-1
                          text-sm
                          font-normal
                          leading-6
                          text-[#5d7192]
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full lg:w-1/2">
              {/* EXCEPTION CARD */}
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
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
                    bg-[#fafbfc]
                    px-5
                    py-4
                  "
                >
                  <span className="h-2 w-2 rounded-sm bg-[#7890b2]" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.1em]
                      text-[#7890b2]

                      sm:text-xs
                    "
                  >
                    Exception EX-8812
                  </span>

                  <span
                    className="
                      ml-auto
                      rounded-full
                      border
                      border-[#dfe5ee]
                      bg-white
                      px-3
                      py-1.5
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#7890b2]
                    "
                  >
                    Unresolved
                  </span>
                </div>

                {/* DETAILS */}
                <div className="flex flex-col">
                  {exceptionDetails.map((item, index) => (
                    <div
                      key={item.label}
                      className={`
                        flex
                        flex-col
                        gap-1.5
                        px-5
                        py-3.5

                        sm:flex-row
                        sm:items-start
                        sm:gap-5

                        ${
                          index !== exceptionDetails.length - 1
                            ? "border-b border-[#edf0f4]"
                            : ""
                        }
                      `}
                    >
                      <div className="w-full sm:w-[90px] sm:shrink-0">
                        <span
                          className="
                            text-[10px]
                            font-bold
                            uppercase
                            leading-4
                            tracking-[0.08em]
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
                          break-words
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
                  <div
                    className="
                      flex
                      flex-col
                      gap-2
                      px-5
                      py-4

                      sm:flex-row
                      sm:items-center
                      sm:gap-5
                    "
                  >
                    <div className="w-full sm:w-[90px] sm:shrink-0">
                      <span
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          leading-4
                          tracking-[0.08em]
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
                        border-[#dfe5ee]
                        bg-[#fafbfc]
                        px-3
                        py-1.5
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.08em]
                        text-[#7890b2]
                      "
                    >
                      Requires approval
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
                    bg-[#fafbfc]
                    px-5
                    py-4
                  "
                >
                  <button
                    type="button"
                    className="
                      rounded-lg
                      border
                      border-blue-600
                      bg-blue-600
                      px-3
                      py-2.5
                      text-xs
                      font-semibold
                      leading-4
                      text-white
                      transition
                      hover:border-blue-700
                      hover:bg-blue-700
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
                      text-xs
                      font-normal
                      leading-4
                      text-[#5d7192]
                      transition
                      hover:bg-[#fafbfc]
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
                      text-xs
                      font-normal
                      leading-4
                      text-[#5d7192]
                      transition
                      hover:bg-[#fafbfc]
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
                      text-xs
                      font-normal
                      leading-4
                      text-[#5d7192]
                      transition
                      hover:bg-[#fafbfc]
                    "
                  >
                    Escalate
                  </button>
                </div>
              </div>

              {/* RECOVERY BOUNDARY */}
              <div
                className="
                  mt-6
                  rounded-r-2xl
                  border-l-[3px]
                  border-[#7890b2]
                  bg-white
                  px-5
                  py-6
                  shadow-[0_1px_2px_rgba(15,23,42,0.02)]

                  sm:px-6
                  sm:py-7

                  lg:px-7
                  lg:py-7
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.12em]
                    text-[#7890b2]
                  "
                >
                  Recovery boundary
                </span>

                <p
                  className="
                    !m-0
                    mt-2
                    w-full
                    text-[15px]
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

          {/* TIMING AND EXCEPTION TABLE */}
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
            {/* TABLE TITLE */}
            <div
              className="
                border-b
                border-[#dfe5ee]
                bg-[#fafbfc]
                px-5
                py-4

                sm:px-6
              "
            >
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.1em]
                  text-[#7890b2]

                  sm:text-xs
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
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
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
                    Situation
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
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
                    Permitted direction
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
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
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.situation}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.direction}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
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
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* SITUATION */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.1em]
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
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.1em]
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
                        text-[#5d7192]
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
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.1em]
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
                        text-[#5d7192]
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