const rows = [
  {
    input: "Authenticated user",
    rule: "Established by the approved identity mechanism.",
    doesNotGrant: (
      <>
        <strong>Signing in is not authorization.</strong> An authenticated user
        with no relationship sees no partner modules
      </>
    ),
  },
  {
    input: "Partner relationship",
    rule: "A current approved relationship is required, unless an explicit historical read-only exception exists.",
    doesNotGrant: "A past relationship, a pending one, or an application",
  },
  {
    input: "Organization context",
    rule: "The exact current partner organization must be selected.",
    doesNotGrant: (
      <>
        <strong>Access to one organization's workspace</strong> where a user
        belongs to several
      </>
    ),
  },
  {
    input: "Relationship path or type",
    rule: "Only the current source-defined path influences entitlements.",
    doesNotGrant: "Entitlements from a different path, or a previous one",
  },
  {
    input: "Role or permission",
    rule: "Action availability resolves from the approved role and permission registry.",
    doesNotGrant: (
      <>
        <strong>Every action inside a capability</strong> — visibility and
        action are separate
      </>
    ),
  },
  {
    input: "Capability state",
    rule: "The capability itself must be enabled and current.",
    doesNotGrant: "Access to a capability that exists for other partners",
  },
  {
    input: "Security or privacy condition",
    rule: "Additional gating applies only where an approved source defines it.",
    doesNotGrant: (
      <>
        — (<strong>no gating is invented</strong> where no source requires it)
      </>
    ),
  },
  {
    input: "Source unavailable",
    rule: (
      <>
        <strong>Fail closed for sensitive capabilities</strong>, with safe
        recovery shown.
      </>
    ),
    doesNotGrant: (
      <>
        <strong>Never fail open.</strong> An unresolvable entitlement is not a
        granted one
      </>
    ),
  },
];

export default function EntitlementResolution() {
  return (
    <section className="w-full bg-white">
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
                Entitlement resolution
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
              Eight inputs, and all of them must
              agree.
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
              Being signed in is the first condition, not the only one. Each
              input below can independently remove a capability.
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
                  grid-cols-[208px_minmax(0,1fr)_minmax(0,1fr)]
                  bg-[#17243b]
                "
              >
                <div className="border-r border-white/15 px-3.5 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                    Input
                  </span>
                </div>

                <div className="border-r border-white/15 px-3.5 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                    Decision rule
                  </span>
                </div>

                <div className="px-3.5 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                    What it alone does not grant
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.input}
                  className={`
                    grid
                    grid-cols-[208px_minmax(0,1fr)_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* INPUT */}
                  <div
                    className="
                      bg-[#fafbfc]
                      px-3.5
                      py-3
                      border-r
                      border-[#edf0f4]
                    "
                  >
                    <span className="text-xs font-bold leading-5 text-[#091127]">
                      {row.input}
                    </span>
                  </div>

                  {/* DECISION RULE */}
                  <div
                    className="
                      px-3.5
                      py-3
                      border-r
                      border-[#edf0f4]
                    "
                  >
                    <span className="text-xs font-normal leading-5 text-[#091127]">
                      {row.rule}
                    </span>
                  </div>

                  {/* DOES NOT GRANT */}
                  <div className="bg-[#fafbfc] px-3.5 py-3">
                    <span className="text-xs font-normal leading-5 text-[#d33a3a]">
                      {row.doesNotGrant}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.input}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* INPUT */}
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
                      Input
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
                      {row.input}
                    </p>
                  </div>

                  {/* DECISION RULE */}
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
                      Decision rule
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
                      {row.rule}
                    </p>
                  </div>

                  {/* WHAT IT DOES NOT GRANT */}
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
                      What it alone does not grant
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        text-[#d33a3a]
                      "
                    >
                      {row.doesNotGrant}
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