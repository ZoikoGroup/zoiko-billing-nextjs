export default function IntegrationLifecycleGateModel() {
  const gates = [
    {
      gate: "Gate 01",
      title: "Proposed",
    },
    {
      gate: "Gate 02",
      title: "Review needed",
    },
    {
      gate: "Gate 03",
      title: "Approved standard",
    },
    {
      gate: "Gate 04",
      title: "Implementation review",
    },
    {
      gate: "Gate 05",
      title: "Verified / ready",
    },
    {
      gate: "Gate 06",
      title: "Deprecated",
    },
    {
      gate: "Gate 07",
      title: "Retired",
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
                Integration lifecycle &amp; gate model
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
              Seven states, and each carries the rule it is most likely to
              break.
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
              Select a state.
            </p>
          </div>

          {/* GATES */}
          <div className="w-full pt-1">
            <div
              className="
                grid
                w-full
                grid-cols-1
                gap-3

                sm:grid-cols-2

                lg:grid-cols-4

                xl:grid-cols-7
              "
            >
              {gates.map((gate, index) => (
                <button
                  key={gate.gate}
                  type="button"
                  className={`
                    flex
                    min-h-[116px]
                    w-full
                    flex-col
                    items-start
                    rounded-lg
                    px-2.5
                    pb-8
                    text-left
                    transition-all
                    duration-200
                    ${
                      index === 0
                        ? `
                          border-2
                          border-blue-600
                          bg-[#f2f4f7]
                          pt-2.5
                        `
                        : `
                          border
                          border-[#dfe5ee]
                          bg-white
                          pt-3
                          hover:-translate-y-0.5
                          hover:border-blue-300
                        `
                    }
                  `}
                >
                  {/* GATE NUMBER */}
                  <span
                    className="
                      w-full
                      text-[9px]
                      font-normal
                      leading-4
                      text-[#7890b2]
                    "
                  >
                    {gate.gate}
                  </span>

                  {/* STATE */}
                  <span
                    className="
                      mt-[3px]
                      w-full
                      text-xs
                      font-bold
                      leading-4
                      text-[#091127]
                    "
                  >
                    {gate.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}