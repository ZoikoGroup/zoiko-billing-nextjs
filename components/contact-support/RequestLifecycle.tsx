export default function RequestLifecycle() {
  const rows = [
    {
      state: "Not started",
      stateType: "notStarted",
      experience: "Route selection and self-service alternatives.",
      guard: "No case exists yet",
    },
    {
      state: "Draft",
      stateType: "draft",
      experience:
        "Step progress, with session persistence only where approved.",
      guard: (
        <>
          <span className="font-bold">No secrets persisted</span>
          <span>; clear expiry behavior</span>
        </>
      ),
    },
    {
      state: "Routing recommended",
      stateType: "routing",
      experience:
        "The recommended specialized or general route is shown.",
      guard: (
        <>
          <span className="font-bold">
            The user confirms the destination
          </span>
          <span> — no silent redirect</span>
        </>
      ),
    },
    {
      state: "Ready for review",
      stateType: "ready",
      experience:
        "All required fields valid; review and redact before submitting.",
      guard: "No hidden fields and no automatic marketing consent",
    },
    {
      state: "Submitting",
      stateType: "submitting",
      experience:
        "Controls disabled against duplicate submit; progress announced.",
      guard: "Idempotency where the backend supports it",
    },
    {
      state: "Submitted",
      stateType: "submitted",
      experience: "Case reference and receipt state shown.",
      guard: (
        <>
          <span className="font-bold">
            No response-time promise unless source-driven
          </span>
        </>
      ),
    },
    {
      state: "Submission failed",
      stateType: "failed",
      experience:
        "Clear error with safe data preserved, plus retry or an alternate route.",
      guard: (
        <>
          <span className="font-bold">No duplicate created on retry</span>
        </>
      ),
    },
    {
      state: "Duplicate suspected",
      stateType: "duplicate",
      experience:
        "An existing case path is offered where the backend identifies it safely.",
      guard: (
        <>
          <span className="font-bold">
            Case existence is never disclosed to an unauthorized user
          </span>
        </>
      ),
    },
    {
      state: "Withdrawn",
      stateType: "withdrawn",
      experience:
        "Offered only if the support platform supports withdrawal.",
      guard: (
        <>
          <span className="font-bold">
            Do not invent case cancellation
          </span>
        </>
      ),
    },
  ];

  const badgeStyles: Record<string, string> = {
    notStarted:
      "bg-[#f0f2f5] text-[#7890b2] border-[#dfe5ee]",
    draft:
      "bg-[#f0f2f5] text-[#5d7192] border-[#d9e0e8]",
    routing:
      "bg-[#f0f2f5] text-[#5d7192] border-[#d9e0e8]",
    ready:
      "bg-[#e8f5ef] text-[#238653] border-[#b8ddca]",
    submitting:
      "bg-[#f0f2f5] text-[#5d7192] border-[#d9e0e8]",
    submitted:
      "bg-[#e8f5ef] text-[#238653] border-[#b8ddca]",
    failed:
      "bg-[#f7eeee] text-[#b64a4a] border-[#edcccc]",
    duplicate:
      "bg-[#f7f1e8] text-[#a9682b] border-[#e8d5bd]",
    withdrawn:
      "bg-[#f0f1f3] text-[#4d6888] border-[#d8dee6]",
  };

  const dotStyles: Record<string, string> = {
    notStarted: "bg-[#7890b2]",
    draft: "border-2 border-[#5d7192]",
    routing: "bg-[#5d7192]",
    ready: "bg-[#238653]",
    submitting: "border-2 border-[#5d7192]",
    submitted: "bg-[#238653]",
    failed: "bg-[#b64a4a]",
    duplicate: "bg-[#a9682b]",
    withdrawn: "bg-[#4d6888]",
  };

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
                Request lifecycle
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
              Nine states, each with a guard.
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
              The guard column is what prevents a support form from creating
              problems of its own
              <br className="hidden sm:block" />
              — duplicate cases, leaked case existence, or invented
              cancellations.
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
                  grid-cols-[176px_minmax(0,1.05fr)_minmax(0,1fr)]
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
                    State
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
                    User experience
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
                    Guard
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.state}
                  className={`
                    grid
                    grid-cols-[176px_minmax(0,1.05fr)_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* STATE */}
                  <div className="px-4 py-3.5">
                    <span
                      className={`
                        inline-flex
                        min-h-6
                        items-center
                        gap-2
                        rounded-md
                        border
                        px-2.5
                        py-0.5
                        text-xs
                        font-semibold
                        leading-4
                        ${badgeStyles[row.stateType]}
                      `}
                    >
                      <span
                        className={`
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-sm
                          opacity-80
                          ${dotStyles[row.stateType]}
                        `}
                      />

                      {row.state}
                    </span>
                  </div>

                  {/* USER EXPERIENCE */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.experience}
                    </span>
                  </div>

                  {/* GUARD */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm leading-5 text-[#5d7192]">
                      {row.guard}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.state}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* STATE */}
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
                      State
                    </p>

                    <div className="mt-1.5">
                      <span
                        className={`
                          inline-flex
                          min-h-6
                          items-center
                          gap-2
                          rounded-md
                          border
                          px-2.5
                          py-0.5
                          text-xs
                          font-semibold
                          leading-4
                          ${badgeStyles[row.stateType]}
                        `}
                      >
                        <span
                          className={`
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-sm
                            opacity-80
                            ${dotStyles[row.stateType]}
                          `}
                        />

                        {row.state}
                      </span>
                    </div>
                  </div>

                  {/* USER EXPERIENCE */}
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
                      User experience
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
                      {row.experience}
                    </p>
                  </div>

                  {/* GUARD */}
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
                      Guard
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
                      {row.guard}
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