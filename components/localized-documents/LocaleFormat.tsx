const localeDimensions = [
  {
    dimension: "Date format",
    control: "Locale formatting rules.",
    boundary: "Does not change authoritative issue or due dates",
  },
  {
    dimension: "Number separators",
    control: "Decimal and grouping conventions.",
    boundary: "Does not change the numeric value or calculation precision",
  },
  {
    dimension: "Currency display",
    control: "Symbol or code placement and formatting.",
    boundary:
      "Currency choice and amount authority stays with Multi-Currency Billing",
  },
  {
    dimension: "Address formatting",
    control: "Line and order conventions where supported.",
    boundary: "Does not verify an address or a legal entity",
  },
  {
    dimension: "Name & order conventions",
    control: "Presentation only where applicable.",
    boundary: "No identity attribute is inferred",
  },
  {
    dimension: "Timezone display",
    control: "Display context where relevant.",
    boundary: "Underlying event timestamps remain authoritative",
  },
  {
    dimension: "Paper & page size",
    control: "Template or render profile where supported.",
    boundary: "No postal or legal acceptance is claimed",
  },
  {
    dimension: "Text direction",
    control: "Left-to-right or right-to-left where supported.",
    boundary: "Requires component, layout and accessibility testing",
  },
  {
    dimension: "Locale fallback",
    control: "An explicit fallback chain or block policy.",
    boundary: "Never a silent switch to an unrelated locale",
  },
];

export default function LocaleFormat() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
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
            gap-9

            sm:gap-10

            lg:gap-11
          "
        >
          {/* HEADER */}
          <div
            className="
              flex
              w-full
              max-w-[1000px]
              flex-col
              items-center
              gap-3
              pt-2
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-center
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
                Locale &amp; regional formatting
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
                text-center
                !text-[30px]
                !font-extrabold
                !leading-[1.12]
                !tracking-[-0.035em]
                !text-[#091127]

                sm:!text-[36px]

                md:!text-[40px]

                lg:!text-4xl
                lg:!leading-10
              "
            >
              Formatting changes the display, never
              <br className="hidden sm:block" />
              the value.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-center
                text-sm
                font-normal
                leading-6
                text-[#5d7192]

                sm:text-[15px]
                sm:leading-7

                md:text-base
              "
            >
              Nine locale dimensions, each with a boundary that keeps the
              underlying record intact.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#e1e5eb]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* TABLE INTRO */}
            <div
              className="
                border-b
                border-[#e1e5eb]
                bg-[#fbfbfc]
                px-5
                py-4
              "
            >
              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-5
                  text-[#5d7192]
                "
              >
                Locale dimensions, required controls, and their boundaries.
              </p>
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[220px_minmax(0,1fr)_minmax(0,1.05fr)]
                  border-b
                  border-[#e1e5eb]
                  bg-[#fbfbfc]
                "
              >
                <div className="border-r border-[#e1e5eb] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#7890b2]
                    "
                  >
                    Dimension
                  </span>
                </div>

                <div className="border-r border-[#e1e5eb] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#7890b2]
                    "
                  >
                    Required control
                  </span>
                </div>

                <div className="px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#7890b2]
                    "
                  >
                    Boundary
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {localeDimensions.map((item, index) => (
                <div
                  key={item.dimension}
                  className={`
                    grid
                    grid-cols-[220px_minmax(0,1fr)_minmax(0,1.05fr)]
                    ${
                      index !== localeDimensions.length - 1
                        ? "border-b border-[#edf0f3]"
                        : ""
                    }
                  `}
                >
                  {/* DIMENSION */}
                  <div
                    className="
                      border-r
                      border-[#edf0f3]
                      px-4
                      py-3.5
                    "
                  >
                    <p
                      className="
                        !m-0
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.dimension}
                    </p>
                  </div>

                  {/* CONTROL */}
                  <div
                    className="
                      border-r
                      border-[#edf0f3]
                      px-4
                      py-3.5
                    "
                  >
                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {item.control}
                    </p>
                  </div>

                  {/* BOUNDARY */}
                  <div className="px-4 py-3.5">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {item.boundary}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="md:hidden">
              <div
                className="
                  border-b
                  border-[#e1e5eb]
                  bg-[#fbfbfc]
                  px-4
                  py-3

                  sm:px-5
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.1em]
                    text-[#7890b2]

                    sm:text-xs
                  "
                >
                  Locale dimensions
                </span>
              </div>

              {localeDimensions.map((item, index) => (
                <div
                  key={item.dimension}
                  className={`
                    flex
                    flex-col
                    gap-4
                    px-4
                    py-5

                    sm:px-5
                    sm:py-6

                    ${
                      index !== localeDimensions.length - 1
                        ? "border-b border-[#edf0f3]"
                        : ""
                    }
                  `}
                >
                  {/* DIMENSION */}
                  <p
                    className="
                      !m-0
                      text-sm
                      font-semibold
                      leading-5
                      text-[#091127]

                      sm:text-base
                    "
                  >
                    {item.dimension}
                  </p>

                  {/* REQUIRED CONTROL */}
                  <div className="flex flex-col gap-1">
                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.08em]
                        text-[#7890b2]
                      "
                    >
                      Required control
                    </span>

                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.control}
                    </p>
                  </div>

                  {/* BOUNDARY */}
                  <div className="flex flex-col gap-1">
                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.08em]
                        text-[#7890b2]
                      "
                    >
                      Boundary
                    </span>

                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.boundary}
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