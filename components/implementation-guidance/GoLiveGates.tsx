const gates = [
  {
    title: "Scope complete",
    description: (
      <>
        In-scope configuration, integration and data decisions are completed —
        or <strong>explicitly deferred with an owner</strong>, which is
        different from unfinished.
      </>
    ),
  },
  {
    title: "Critical tests passed",
    description:
      "No unresolved issue prevents safe operation, judged against the project's own acceptance criteria rather than a generic threshold.",
  },
  {
    title: "Reconciliation accepted",
    description:
      "Relevant counts, totals, statuses, balances, payments and reports have been validated and the result accepted.",
  },
  {
    title: "Roles and access ready",
    description: (
      <>
        Required users, administrators and approvers can reach the functions
        they need, and <strong>the access recovery path is known before it is needed</strong>.
      </>
    ),
  },
  {
    title: "Support ready",
    description:
      "Help Center, Contact Support and specialized routes are understood, and internal ownership is clear.",
  },
  {
    title: "Training and procedures ready",
    description:
      "Role-based instructions and operating procedures exist and are available to the people who need them.",
  },
  {
    title: "Communications ready",
    description:
      "Affected users know the timing, the changed process, the support route and any temporary constraints.",
  },
  {
    title: "Fallback decision",
    description: (
      <>
        An approved fallback, rollback or manual-continuity decision appropriate
        to <strong>this</strong> implementation.{" "}
        <strong>No generic destructive rollback is prescribed</strong> — a
        universal rollback procedure would be wrong for most projects and
        dangerous in some.
      </>
    ),
  },
  {
    title: "Go-live approval",
    description: (
      <>
        A named business or project decision owner approves launch{" "}
        <strong>based on the evidence above</strong>. This gate is not
        satisfied by the previous eight being marked — someone accountable has
        to look at them and say yes.
      </>
    ),
  },
];

export default function GoLiveGates() {
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
            gap-5
            px-0
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
                Cutover &amp; go-live
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
                !pb-[0.69px]
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
              Nine launch gates, and the last one is a person.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-[2.5px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              Eight gates produce evidence. The ninth is a named decision owner
              accepting that evidence — because a launch that happens because
              the date arrived is not a decision.
            </p>
          </div>

          {/* LAUNCH GATES */}
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
            {gates.map((gate, index) => {
              const isFinal = index === gates.length - 1;

              return (
                <div
                  key={gate.title}
                  className={`
                    flex
                    items-start
                    gap-3
                    px-4
                    py-3.5
                    ${isFinal ? "bg-[#fbfcfc]" : "bg-white"}
                    ${index !== 0 ? "border-t border-[#edf0f4]" : ""}
                  `}
                >
                  {/* NUMBER */}
                  <div className="w-5 shrink-0 pt-px">
                    <div
                      className={`
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-md
                        border
                        text-xs
                        font-extrabold
                        leading-4
                        ${
                          isFinal
                            ? "border-[#b9e5c9] bg-[#f1f8f3] text-[#23834a]"
                            : "border-[#d6e0ec] bg-[#f3f5f8] text-[#49698f]"
                        }
                      `}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="min-w-0 flex-1 pb-3">
                    <h3
                      className="
                        !m-0
                        text-sm
                        font-bold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {gate.title}
                    </h3>

                    <p
                      className="
                        !m-0
                        mt-1
                        text-xs
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {gate.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}