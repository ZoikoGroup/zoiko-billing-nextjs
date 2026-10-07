export default function SixPartLocalComplianceModel() {
  const dimensions = [
    {
      number: "01",
      title: "Jurisdiction",
      description: "Where the requirement applies.",
      emphasis: "Specimen unless source-approved.",
      highlighted: true,
    },
    {
      number: "02",
      title: "Requirement",
      description: "What obligation is described.",
      emphasis: "Controlled category; exact wording stays source-owned.",
    },
    {
      number: "03",
      title: "Authority",
      description: "What source establishes it.",
      emphasis: "No invented regulator names.",
    },
    {
      number: "04",
      title: "Effective period",
      description: "When it applies or was reviewed.",
      emphasis: "Unknown is explicit.",
    },
    {
      number: "05",
      title: "Evidence",
      description: "What material supports the record.",
    },
    {
      number: "06",
      title: "Currentness",
      description: "Current, under review or superseded.",
    },
  ];

  return (
    <section
    id ="six-part-model"
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
                Six-part local compliance context model
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
              Six dimensions on every requirement record.
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
              Select a dimension to focus the registry.{" "}
              <span className="font-bold">
                Jurisdictions are named only when an approved source supports
                it — otherwise specimen geography is used, and none appears
                here.
              </span>
            </p>
          </div>

          {/* DIMENSION CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3
              pt-1

              sm:grid-cols-2

              lg:grid-cols-3

              xl:grid-cols-6
            "
          >
            {dimensions.map((dimension) => (
              <div
                key={dimension.number}
                className={`
                  flex
                  min-h-[190px]
                  w-full
                  flex-col
                  items-start
                  gap-1
                  rounded-2xl
                  px-3.5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                  ${
                    dimension.highlighted
                      ? "border border-blue-600 bg-[#f2f3f5]"
                      : "border border-[#e1e5ea] bg-white"
                  }

                  sm:min-h-[190px]
                  lg:min-h-[190px]
                `}
              >
                {/* NUMBER */}
                <div className="w-full">
                  <span
                    className="
                      text-[9.5px]
                      font-normal
                      leading-4
                      text-[#7890b2]
                    "
                  >
                    {dimension.number}
                  </span>
                </div>

                {/* TITLE */}
                <div className="w-full">
                  <h3
                    className="
                      !m-0
                      w-full
                      text-xs
                      font-bold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {dimension.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="w-full pt-1">
                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-4
                      text-[#5d7192]
                    "
                  >
                    {dimension.description}{" "}
                    {dimension.emphasis && (
                      <span className="font-bold">
                        {dimension.emphasis}
                      </span>
                    )}
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