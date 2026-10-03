export default function GrowthComplexitySignals() {
  const rows = [
    {
      signal: "More products or pricing models",
      description:
        "Decision ownership and change coordination can become harder.",
      path: "Standardise Billing Control",
    },
    {
      signal: "More markets or entities",
      description:
        "Local operational and governance questions may multiply.",
      path: "Global Billing",
      secondaryPath: "Find Your Solution",
    },
    {
      signal: "More manual exceptions",
      description:
        "Unresolved work can become harder to explain and prioritize.",
      path: "Strengthen Auditability",
    },
    {
      signal: "More technical integrations",
      description:
        "Release and change responsibility may become fragmented.",
      path: "Developers and IT",
    },
    {
      signal: "More teams touching billing",
      description:
        "Decision rights and escalation need explicit ownership.",
      path: "Standardise Billing Control",
    },
    {
      signal: "More scrutiny from finance, audit or procurement",
      description:
        "Evidence and reviewability become more important.",
      path: "Strengthen Auditability",
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
            gap-5
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
                Growth complexity signals
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
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
              Six signals, and the path each one
              <br className="hidden sm:block" />
              points to.
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
              <strong className="font-bold">
                Educational signals — not claims that Zoiko Billing
                automatically detects them.
              </strong>
              <br />
              These are things to notice in your own operation.
            </p>
          </div>

          {/* CARDS */}
          <div className="w-full pt-5">
            <div
              className="
                grid
                w-full
                grid-cols-1
                gap-5

                md:grid-cols-2

                lg:grid-cols-3
              "
            >
              {rows.map((row) => (
                <div
                  key={row.signal}
                  className="
                    flex
                    w-full
                    flex-col
                    rounded-[10px]
                    border
                    border-[#dfe5ee]
                    bg-white
                    px-4
                    pt-9
                    pb-4
                  "
                >
                  {/* SIGNAL */}
                  <div className="flex w-full flex-col items-start">
                    <p
                      className="
                        !m-0
                        w-full
                        text-xs
                        font-bold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.signal}
                    </p>
                  </div>

                  {/* DESCRIPTION */}
                  <div
                    className="
                      flex
                      w-full
                      flex-col
                      items-start
                      pt-2.5
                    "
                  >
                    <p
                      className="
                        !m-0
                        w-full
                        text-xs
                        font-normal
                        leading-4
                        text-[#5d7192]
                      "
                    >
                      {row.description}
                    </p>
                  </div>

                  {/* NEXT PATH */}
                  <div
                    className="
                      mt-3
                      flex
                      w-full
                      flex-wrap
                      items-center
                      border-t
                      border-[#edf0f4]
                      pt-2
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-normal
                        leading-5
                        text-[#7890b2]
                      "
                    >
                      Next path ·{" "}
                    </span>

                    <span
                      className="
                        text-xs
                        font-bold
                        leading-5
                        text-[#7890b2]
                      "
                    >
                      {row.path}
                    </span>

                    {row.secondaryPath && (
                      <>
                        <span
                          className="
                            text-xs
                            font-normal
                            leading-5
                            text-[#7890b2]
                          "
                        >
                          {" "}
                          or{" "}
                        </span>

                        <span
                          className="
                            text-xs
                            font-normal
                            leading-5
                            text-[#7890b2]
                          "
                        >
                          {row.secondaryPath}
                        </span>
                      </>
                    )}
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