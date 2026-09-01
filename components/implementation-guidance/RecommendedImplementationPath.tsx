export default function RecommendedImplementationPath() {
  const phases = [
    {
      number: "1",
      title: "Plan",
      description:
        "Define scope, goals, ownership, authority sources and decision rights.",
      outputs: [
        "Scope statement",
        "Owner map",
        "Decision register",
        "Dependency and risk register",
      ],
    },
    {
      number: "2",
      title: "Prepare",
      description:
        "Resolve prerequisite process, data, access, environment and policy decisions.",
      outputs: [
        "Data inventory",
        "Source-of-truth map",
        "Readiness matrix",
        "Target-process decisions",
      ],
    },
    {
      number: "3",
      title: "Configure",
      description:
        "Apply approved product setup using current Documentation.",
      outputs: [
        "Configuration evidence",
        "Role and approval review",
        "Process walk-through",
      ],
    },
    {
      number: "4",
      title: "Integrate",
      description:
        "Implement and validate connected systems using Developers and integration authorities.",
      outputs: [
        "Interface test evidence",
        "Source-of-truth validation",
        "Exception ownership",
      ],
    },
    {
      number: "5",
      title: "Validate",
      description:
        "Prove end-to-end behavior across roles, states, exceptions, reconciliation and reports.",
      outputs: [
        "Test matrix",
        "Defect disposition",
        "Reconciliation and acceptance evidence",
      ],
    },
    {
      number: "6",
      title: "Launch",
      description:
        "Execute cutover and operational handover under an explicit go-live decision.",
      outputs: [
        "Launch gate",
        "Communications",
        "Support ownership",
        "Fallback decision",
      ],
    },
    {
      number: "7",
      title: "Stabilize",
      description:
        "Operate, monitor, resolve defects, confirm adoption and transition to business as usual.",
      outputs: [
        "Stabilization review",
        "Residual-risk acceptance",
        "BAU ownership",
      ],
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
                Recommended implementation path
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
              Seven phases, each with the evidence
              
              it should produce.
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
              The sequence is a recommendation, not a schedule. No phase
              carries a duration, because duration depends on scope, data,
              integrations and decisions this page cannot see.
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
            {phases.map((phase, index) => (
              <div
                key={phase.number}
                className={`
                  grid
                  grid-cols-[48px_minmax(0,1fr)_minmax(0,1fr)]
                  ${index !== phases.length - 1 ? "border-b border-[#edf0f4]" : ""}
                `}
              >
                {/* NUMBER */}
                <div
                  className="
                    flex
                    min-h-[128px]
                    items-center
                    justify-center
                    border-r
                    border-[#edf0f4]
                    bg-[#fafbfc]
                    px-2
                  "
                >
                  <span
                    className="
                      text-center
                      text-base
                      font-extrabold
                      leading-7
                      text-[#526f99]
                    "
                  >
                    {phase.number}
                  </span>
                </div>

                {/* PHASE */}
                <div
                  className="
                    flex
                    min-h-[128px]
                    flex-col
                    items-start
                    gap-[5px]
                    border-r
                    border-[#edf0f4]
                    px-4
                    py-3.5
                  "
                >
                  <h3
                    className="
                      !m-0
                      text-sm
                      font-bold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {phase.title}
                  </h3>

                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {phase.description}
                  </p>
                </div>

                {/* OUTPUTS */}
                <div
                  className="
                    flex
                    min-h-[128px]
                    flex-col
                    items-start
                    gap-1.5
                    bg-[#fbfcfd]
                    px-4
                    py-3.5
                  "
                >
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
                    Outputs &amp; evidence
                  </span>

                  <div className="flex w-full flex-col pl-4">
                    {phase.outputs.map((output) => (
                      <div
                        key={output}
                        className="
                          py-0.5
                          text-xs
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {output}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE CARDS */}
          <div className="flex w-full flex-col gap-4 md:hidden">
            {phases.map((phase, index) => (
              <div
                key={phase.number}
                className={`
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  ${index === phases.length - 1 ? "" : ""}
                `}
              >
                {/* PHASE HEADER */}
                <div className="flex items-start gap-4 border-b border-[#edf0f4] bg-[#fafbfc] px-5 py-4">
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#f0f3f7]
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-extrabold
                        leading-5
                        text-[#526f99]
                      "
                    >
                      {phase.number}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <h3
                      className="
                        !m-0
                        text-base
                        font-bold
                        leading-6
                        text-[#091127]
                      "
                    >
                      {phase.title}
                    </h3>

                    <p
                      className="
                        !m-0
                        mt-1
                        text-sm
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* OUTPUTS */}
                <div className="bg-[#fbfcfd] px-5 py-4">
                  <p
                    className="
                      !m-0
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#7890b2]
                    "
                  >
                    Outputs &amp; evidence
                  </p>

                  <div className="mt-2 flex flex-col pl-4">
                    {phase.outputs.map((output) => (
                      <p
                        key={output}
                        className="
                          !m-0
                          py-0.5
                          text-sm
                          leading-6
                          text-[#5d7192]
                        "
                      >
                        {output}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}