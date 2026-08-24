const rows = [
  {
    stage: "1 · Select connection",
    behavior: "Only a current approved product connection",
  },
  {
    stage: "2 · Check prerequisites",
    behavior:
      "Products, plan, region, identity, permissions, APIs and target capabilities",
  },
  {
    stage: "3 · Map contexts",
    behavior:
      "Tenant, organization, entity, workspace, team, customer, user and environment as required",
  },
  {
    stage: "4 · Configure scope",
    behavior:
      "Objects, actions, fields, purpose, direction and authority",
  },
  {
    stage: "5 · Test",
    behavior: "A synthetic or test context where supported",
  },
  {
    stage: "6 · Validate permissions",
    behavior: "Both source and target permissions",
  },
  {
    stage: "7 · Activate",
    behavior: "Record versions, mappings, owner and evidence",
  },
  {
    stage: "8 · Monitor",
    behavior:
      "Connection, mapping, event and compatibility health",
  },
  {
    stage: "9 · Change / upgrade",
    behavior:
      "A versioned change with impact preview and recovery",
  },
  {
    stage: "10 · Disconnect",
    behavior: (
      <>
        Stop traffic, revoke trust, reconcile pending outcomes and{" "}
        <span className="font-bold">preserve evidence</span>
      </>
    ),
  },
];

export default function ConnectionLifecycle() {
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
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-10

            sm:gap-11
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
                Setup, mapping, test, activate, change & disconnect
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                !max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]
              "
            >
              Disconnect is defined before activation.
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
              Ten stages, with no instant setup, automatic mapping, guaranteed
              compatibility or zero-downtime upgrade published without exact
              evidence.
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
            <div className="w-full overflow-x-auto">
              <div className="min-w-[900px]">
                {/* TABLE HEADER */}
                <div
                  className="
                    grid
                    grid-cols-[288px_minmax(0,1fr)]
                    border-b
                    border-[#dfe5ee]
                    bg-[#fafbfc]
                  "
                >
                  <div className="px-4 py-3">
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
                      Stage
                    </span>
                  </div>

                  <div className="px-4 py-3">
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
                      Required behavior
                    </span>
                  </div>
                </div>

                {/* TABLE BODY */}
                <div>
                  {rows.map((row, index) => (
                    <div
                      key={row.stage}
                      className={`
                        grid
                        grid-cols-[288px_minmax(0,1fr)]
                        ${
                          index !== rows.length - 1
                            ? "border-b border-[#edf0f5]"
                            : ""
                        }
                      `}
                    >
                      {/* STAGE */}
                      <div className="px-4 py-3.5">
                        <span
                          className="
                            text-sm
                            font-semibold
                            leading-5
                            text-[#091127]
                          "
                        >
                          {row.stage}
                        </span>
                      </div>

                      {/* REQUIRED BEHAVIOR */}
                      <div className="px-4 py-3.5">
                        <span
                          className="
                            text-sm
                            font-normal
                            leading-5
                            text-[#5d7192]
                          "
                        >
                          {row.behavior}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}