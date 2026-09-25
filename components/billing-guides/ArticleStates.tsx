const states = [
  {
    name: "Current",
    style:
      "bg-[#f7f8fa] text-[#5d7192] border-[#dfe5ee]",
    dot: "bg-[#7890b2]",
    treatment: "Normal guide, visible in finder and index",
  },
  {
    name: "Recently updated",
    style:
      "bg-[#f7f8fa] text-[#5d7192] border-[#dfe5ee]",
    dot: "bg-[#7890b2]",
    treatment: (
      <>
        Optional &quot;Updated&quot; text with date —{" "}
        <strong>only for substantive changes</strong>
      </>
    ),
  },
  {
    name: "Review due",
    style:
      "bg-[#f7f8fa] text-[#5d7192] border-[#dfe5ee]",
    dot: "bg-[#7890b2]",
    treatment:
      "Still readable, but not newly featured; internal warning raised",
  },
  {
    name: "Review overdue",
    style:
      "bg-[#f7f8fa] text-[#5d7192] border-[#dfe5ee]",
    dot: "bg-[#7890b2]",
    treatment:
      "De-prioritized, with owner escalation; a public review notice only if it aids clarity",
  },
  {
    name: "Replaced",
    style:
      "bg-[#f7f8fa] text-[#5d7192] border-[#dfe5ee]",
    dot: "bg-[#7890b2]",
    treatment:
      "Banner stating the guide has been replaced, with a primary link to the current guide",
  },
  {
    name: "Archived",
    style:
      "bg-[#f7f8fa] text-[#5d7192] border-[#dfe5ee]",
    dot: "bg-[#7890b2]",
    treatment: (
      <>
        Historical banner, excluded from default browse,{" "}
        <strong>no conversion implying current operation</strong>
      </>
    ),
  },
  {
    name: "Withdrawn",
    style:
      "bg-[#f7f8fa] text-[#5d7192] border-[#dfe5ee]",
    dot: "bg-[#7890b2]",
    treatment: "Removed from finder and index, with safe route explanation",
  },
  {
    name: "Error",
    style:
      "bg-[#f7f8fa] text-[#5d7192] border-[#dfe5ee]",
    dot: "bg-[#7890b2]",
    treatment:
      "Persistent error with retry plus Resource Center, Help and Documentation alternatives",
  },
];

export default function ArticleStates() {
  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
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
              max-w-[800px]
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
                  tracking-[0.14em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Article states
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
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
              Eight states, and a replaced guide says so.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[720px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              An archived guide carries no conversion action that implies
              current operation.
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
              shadow-[0_6px_20px_rgba(15,23,42,0.04)]
            "
          >
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[256px_minmax(0,1fr)]
                  bg-[#f7f8fa]
                "
              >
                <div
                  className="
                    border-b
                    border-[#dfe5ee]
                    px-4
                    py-3.5
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.14em]
                      text-[#7890b2]
                    "
                  >
                    State
                  </span>
                </div>

                <div
                  className="
                    border-b
                    border-[#dfe5ee]
                    px-4
                    py-3.5
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.14em]
                      text-[#7890b2]
                    "
                  >
                    Treatment
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {states.map((state, index) => (
                <div
                  key={state.name}
                  className={`
                    grid
                    grid-cols-[256px_minmax(0,1fr)]
                    transition-colors
                    duration-150
                    hover:bg-[#f7f8fa]/70
                    ${
                      index !== states.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* STATE */}
                  <div className="flex items-center px-4 py-4">
                    <div
                      className={`
                        relative
                        inline-flex
                        min-h-7
                        items-center
                        rounded-md
                        border
                        px-2.5
                        pl-6
                        ${state.style}
                      `}
                    >
                      <span
                        className={`
                          absolute
                          left-2.5
                          h-1.5
                          w-1.5
                          rounded-sm
                          ${state.dot}
                        `}
                      />

                      <span
                        className="
                          text-xs
                          font-semibold
                          leading-5
                          whitespace-nowrap
                        "
                      >
                        {state.name}
                      </span>
                    </div>
                  </div>

                  {/* TREATMENT */}
                  <div className="flex items-center px-4 py-4">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {state.treatment}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {states.map((state, index) => (
                <div
                  key={state.name}
                  className={`
                    p-5
                    transition-colors
                    duration-150
                    hover:bg-[#f7f8fa]/70
                    ${
                      index !== states.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* STATE LABEL */}
                  <p
                    className="
                      !m-0
                      text-[11px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    State
                  </p>

                  {/* STATE BADGE */}
                  <div
                    className={`
                      relative
                      mt-2
                      inline-flex
                      min-h-7
                      items-center
                      rounded-md
                      border
                      px-2.5
                      pl-6
                      ${state.style}
                    `}
                  >
                    <span
                      className={`
                        absolute
                        left-2.5
                        h-1.5
                        w-1.5
                        rounded-sm
                        ${state.dot}
                      `}
                    />

                    <span
                      className="
                        text-xs
                        font-semibold
                        leading-5
                      "
                    >
                      {state.name}
                    </span>
                  </div>

                  {/* TREATMENT LABEL */}
                  <p
                    className="
                      !m-0
                      mt-5
                      text-[11px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    Treatment
                  </p>

                  {/* TREATMENT */}
                  <p
                    className="
                      !m-0
                      mt-1.5
                      text-sm
                      font-normal
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    {state.treatment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}