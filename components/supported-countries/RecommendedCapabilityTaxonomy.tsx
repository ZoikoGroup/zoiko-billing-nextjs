export default function RecommendedCapabilityTaxonomy() {
  const families = [
    {
      number: "Family 01",
      name: "FX Management",
      future: false,
    },
    {
      number: "Family 02",
      name: "Currency Control",
      future: false,
    },
    {
      number: "Family 03",
      name: "Inter-Entity Billing",
      future: false,
    },
    {
      number: "Family 04",
      name: "Local Payment Methods",
      future: false,
    },
    {
      number: "Family 05",
      name: "Local Compliance",
      future: false,
    },
    {
      number: "Family 06",
      name: "Tax Configuration",
      future: false,
    },
    {
      number: "Family 07",
      name: "Indirect Tax",
      future: false,
    },
    {
      number: "Future",
      name: "Other capabilities",
      future: true,
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
                Recommended capability taxonomy
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
              Seven families, seven independent
              <br className="hidden sm:block" />
              states.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-0.5
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Each is an independent capability state with its own guardrail.{" "}
              <strong className="font-bold">
                Rows are never auto-created from navigation labels alone
              </strong>{" "}
              — a page existing in the menu does not create a coverage record.
            </p>
          </div>

          {/* CAPABILITY GRID */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3
              pt-2

              sm:grid-cols-2

              md:gap-4

              lg:grid-cols-4
          "
          >
            {families.map((family) => (
              <div
                key={family.number}
                className={`
                  flex
                  min-h-[96px]
                  w-full
                  flex-col
                  items-start
                  justify-start
                  gap-1
                  rounded-[10px]
                  border
                  border-[#dfe5ee]
                  px-3.5
                  py-3.5
                  ${
                    family.future
                      ? "bg-[#fafbfc]"
                      : "bg-white"
                  }
                `}
              >
                {/* FAMILY LABEL */}
                <div className="w-full">
                  <span
                    className="
                      text-[9.5px]
                      font-normal
                      leading-4
                      text-[#7890b2]
                    "
                  >
                    {family.number}
                  </span>
                </div>

                {/* FAMILY NAME */}
                <div className="w-full pb-4">
                  <span
                    className="
                      text-xs
                      font-bold
                      leading-4
                      text-[#091127]
                    "
                  >
                    {family.name}
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