export default function IndirectTaxContextModel() {
  const dimensions = [
    {
      number: "01",
      title: "Jurisdiction",
      description: (
        <>
          Which geography or
          <br className="hidden lg:block" />
          authority context is
          <br className="hidden lg:block" />
          relevant.
        </>
      ),
      active: true,
    },
    {
      number: "02",
      title: "Transaction context",
      description: (
        <>
          Which billing situation is
          <br className="hidden lg:block" />
          being considered.
        </>
      ),
    },
    {
      number: "03",
      title: "Tax category",
      description: (
        <>
          Which indirect-tax
          <br className="hidden lg:block" />
          domain.{" "}
          <span className="font-bold">Orientation only.</span>
        </>
      ),
    },
    {
      number: "04",
      title: "Source",
      description: (
        <>
          Which approved source
          <br className="hidden lg:block" />
          supports the statement.
        </>
      ),
    },
    {
      number: "05",
      title: "Authority",
      description: (
        <>
          Who owns or approves the
          <br className="hidden lg:block" />
          context.
        </>
      ),
    },
    {
      number: "06",
      title: "Effective time",
      description: (
        <>
          When the information
          <br className="hidden lg:block" />
          applies.
        </>
      ),
    },
    {
      number: "07",
      title: "Evidence",
      description: (
        <>
          What supports the record
          <br className="hidden lg:block" />
          and how it is inspected.
        </>
      ),
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

            sm:gap-8

            md:gap-10
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
                Seven-part indirect tax context model
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
              Seven dimensions on every context
              <br className="hidden sm:block" />
              record.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-1
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Select a dimension to focus the registry.{" "}
              <span className="font-bold">
                Jurisdictions display only if approved — specimen labels
                otherwise, and none is approved here.
              </span>
            </p>
          </div>

          {/* DIMENSION CARDS */}
          <div
            className="
              flex
              w-full
              flex-wrap
              justify-center
              gap-3

              pt-2

              sm:gap-4
              sm:pt-4

              md:gap-2
              md:pt-5
            "
          >
            {dimensions.map((dimension) => (
              <div
                key={dimension.number}
                className={`
                  flex
                  w-full
                  flex-col
                  items-start
                  gap-[3px]
                  rounded-2xl
                  px-3
                  pb-6
                  pt-4
                  shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]

                  sm:w-[calc(50%-8px)]
                  sm:pt-5
                  sm:pb-8

                  md:w-[calc(33.333%-6px)]

                  lg:w-40

                  ${
                    dimension.active
                      ? "bg-[#f5f7fa] outline outline-1 outline-offset-[-1px] outline-blue-600"
                      : "bg-white outline outline-1 outline-offset-[-1px] outline-[#dfe5ee]"
                  }
                `}
              >
                {/* NUMBER */}
                <div className="flex w-full flex-col items-start">
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
                <div className="flex w-full flex-col items-start pb-[0.63px]">
                  <span
                    className="
                      w-full
                      text-xs
                      font-bold
                      leading-4
                      text-[#091127]
                    "
                  >
                    {dimension.title}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <div className="flex w-full flex-col items-start pt-0.5">
                  <span
                    className="
                      w-full
                      text-xs
                      font-normal
                      leading-4
                      text-[#5d7192]
                    "
                  >
                    {dimension.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}