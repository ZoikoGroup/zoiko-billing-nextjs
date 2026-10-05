export default function SevenPartTaxConfiguration() {
  const dimensions = [
    {
      number: "01",
      title: "Scope",
      description: (
        <>
          Which entity, product,
          <br />
          transaction context or
          <br />
          market it concerns.
        </>
      ),
    },
    {
      number: "02",
      title: "Tax context",
      description: (
        <>
          Which tax-related concept
          <br />
          is configured.{" "}
          <strong>No taxability inferred.</strong>
        </>
      ),
    },
    {
      number: "03",
      title: "Value / policy",
      description: (
        <>
          What setting or mapping is
          <br />
          proposed.{" "}
          <strong>No real rate or code.</strong>
        </>
      ),
    },
    {
      number: "04",
      title: "Source",
      description: (
        <>
          Which approved source
          <br />
          supports it.{" "}
          <strong>Required for publication.</strong>
        </>
      ),
    },
    {
      number: "05",
      title: "Authority",
      description: (
        <>
          Who may draft, review,
          <br />
          approve and publish.
        </>
      ),
    },
    {
      number: "06",
      title: "Effective time",
      description: (
        <>
          When it becomes active.
          <br />
          <strong>Unknown stays explicit.</strong>
        </>
      ),
      active: true,
    },
    {
      number: "07",
      title: "Evidence",
      description: (
        <>
          What proof and change
          <br />
          rationale is attached.
        </>
      ),
    },
  ];

  return (
    <section 
    id = "seven-part-model"
    className="w-full bg-[#f7f8fa]">
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
                Seven-part tax configuration model
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
              Seven dimensions on every
              <br className="hidden sm:block" />
              configuration record.
            </h2>

            {/* DESCRIPTION */}
            <div
              className="
                w-full
                max-w-[687px]
                text-center
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              <p className="!m-0">
                Select a dimension to focus the registry.{" "}
                <strong className="font-bold">
                  Scope taxonomy is generic or specimen
                </strong>{" "}
                until a governed taxonomy exists
                <strong className="font-bold">, and no real rate, code or threshold appears</strong>{" "}
                unless approved — none is.
              </p>
            </div>
          </div>

          {/* DIMENSIONS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-2

              sm:grid-cols-2

              md:grid-cols-3

              lg:grid-cols-4

              xl:flex
              xl:items-stretch
              xl:justify-center
            "
          >
            {dimensions.map((dimension) => (
              <div
                key={dimension.number}
                className={`
                  flex
                  min-h-[176px]
                  w-full
                  flex-col
                  items-start
                  rounded-2xl
                  px-3
                  pb-6
                  pt-3
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  outline
                  outline-1
                  outline-offset-[-1px]

                  xl:w-40
                  xl:shrink-0

                  ${
                    dimension.active
                      ? "bg-[#f3f8ff] outline-blue-600"
                      : "bg-white outline-[#dfe5ee]"
                  }
                `}
              >
                {/* NUMBER */}
                <div className="w-full">
                  <span
                    className="
                      text-[9px]
                      font-normal
                      leading-4
                      text-[#7890b2]
                    "
                  >
                    {dimension.number}
                  </span>
                </div>

                {/* TITLE */}
                <div className="w-full pt-1">
                  <h3
                    className="
                      !m-0
                      text-xs
                      font-bold
                      leading-4
                      text-[#091127]
                    "
                  >
                    {dimension.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="w-full pt-2">
                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-4
                      text-[#5d7192]
                    "
                  >
                    {dimension.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}