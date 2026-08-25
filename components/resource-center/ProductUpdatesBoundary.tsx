const includedRows = [
  {
    label: "Shipped changes",
    description:
      "With applicability, availability, date, scope, known limitations and documentation links",
  },
  {
    label: "Release summary",
    description: "User impact in plain language",
  },
  {
    label: "Migration notice",
    description: "Deprecation guidance when approved and actionable",
  },
];

const excludedRows = [
  {
    label: "Roadmap promises",
    description:
      "Unapproved coming-soon claims and contractual commitments",
  },
  {
    label: "Operational incidents",
    description: (
      <>
        Detailed chronology belongs to <strong>System Status</strong>
      </>
    ),
  },
  {
    label: "Security advisories",
    description: (
      <>
        Vulnerability disclosure belongs to{" "}
        <strong>Security Advisories</strong>
      </>
    ),
  },
  {
    label: "Marketing posts",
    description: "Generic blog content is not a product update",
  },
  {
    label: "Hidden availability",
    description: "Unsupported plan or region availability claims",
  },
];

export default function ProductUpdatesBoundary() {
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
                Product updates boundary
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
              Shipped changes here. Incidents and
              <br className="hidden sm:block" /> advisories elsewhere.
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
              The boundary exists because a reader scanning for what changed
              should not have to distinguish a release note from an outage
              report.
            </p>
          </div>

          {/* CONTENT */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-5
              pt-1

              lg:grid-cols-2
            "
          >
            {/* BELONGS */}
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
              <div
                className="
                  border-b
                  border-[#dfe5ee]
                  bg-[#fafbfc]
                  px-5
                  py-4
                "
              >
                <span className="text-sm font-normal leading-5 text-[#5d7192]">
                  Belongs in Product Updates.
                </span>
              </div>

              <div>
                {includedRows.map((row, index) => (
                  <div
                    key={row.label}
                    className={`
                      grid
                      grid-cols-1
                      sm:grid-cols-[128px_minmax(0,1fr)]
                      ${
                        index !== includedRows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    <div className="px-4 py-3.5">
                      <span className="text-sm font-semibold leading-5 text-[#091127]">
                        {row.label}
                      </span>
                    </div>

                    <div className="px-4 py-3.5">
                      <span className="text-sm font-normal leading-5 text-[#5d7192]">
                        {row.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DOES NOT BELONG */}
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
              <div
                className="
                  border-b
                  border-[#dfe5ee]
                  bg-[#fafbfc]
                  px-5
                  py-4
                "
              >
                <span className="text-sm font-normal leading-5 text-[#5d7192]">
                  Does not belong.
                </span>
              </div>

              <div>
                {excludedRows.map((row, index) => (
                  <div
                    key={row.label}
                    className={`
                      grid
                      grid-cols-1
                      sm:grid-cols-[176px_minmax(0,1fr)]
                      ${
                        index !== excludedRows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    <div className="px-4 py-3.5">
                      <span className="text-sm font-semibold leading-5 text-[#091127]">
                        {row.label}
                      </span>
                    </div>

                    <div className="px-4 py-3.5">
                      <span className="text-sm font-normal leading-5 text-[#5d7192]">
                        {row.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}