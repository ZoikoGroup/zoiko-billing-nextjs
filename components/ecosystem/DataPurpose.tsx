const rows = [
  {
    area: "Purpose",
    rule: "Each field and event carries a declared operational purpose",
  },
  {
    area: "Minimum necessary",
    rule: "Only approved fields and events cross the boundary",
  },
  {
    area: "Sensitive data",
    rule: "No sharing merely because both products are Zoiko",
    emphasis: true,
  },
  {
    area: "Marketing",
    rule:
      "Operational ecosystem data cannot silently become marketing audiences",
  },
  {
    area: "Profiling",
    rule:
      "No hidden employee or customer performance, credit, fraud, churn, value or willingness-to-pay scoring",
  },
  {
    area: "Retention",
    rule:
      "Each product follows its own obligations; the integration stores minimum evidence",
  },
  {
    area: "Deletion",
    rule: (
      <>
        <span className="font-bold">No default cascade delete</span> —{" "}
        disposition is per domain
      </>
    ),
  },
  {
    area: "Disconnect",
    rule:
      "Defines the disposition of replicated and reference data plus pending events",
  },
];

export default function DataPurpose() {
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
                Data purpose, privacy, retention & deletion
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
              Same company is not same purpose.
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
              Corporate ownership does not remove privacy purpose,
              minimization, access, retention or transparency requirements.
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
                    grid-cols-[224px_minmax(0,1fr)]
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
                      Area
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
                      Required rule
                    </span>
                  </div>
                </div>

                {/* TABLE BODY */}
                <div>
                  {rows.map((row, index) => (
                    <div
                      key={row.area}
                      className={`
                        grid
                        grid-cols-[224px_minmax(0,1fr)]
                        ${
                          index !== rows.length - 1
                            ? "border-b border-[#edf0f5]"
                            : ""
                        }
                      `}
                    >
                      {/* AREA */}
                      <div className="px-4 py-3.5">
                        <span
                          className="
                            text-sm
                            font-semibold
                            leading-5
                            text-[#091127]
                          "
                        >
                          {row.area}
                        </span>
                      </div>

                      {/* REQUIRED RULE */}
                      <div className="px-4 py-3.5">
                        <span
                          className={`
                            text-sm
                            leading-5
                            text-[#5d7192]
                            ${
                              row.emphasis
                                ? "font-bold"
                                : "font-normal"
                            }
                          `}
                        >
                          {row.rule}
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