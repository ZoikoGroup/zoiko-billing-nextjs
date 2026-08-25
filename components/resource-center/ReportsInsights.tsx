const metadataRows = [
  {
    label: "Title / direct finding",
    value: (
      <>
        Specific and supportable —{" "}
        <strong>no sensational headline</strong>
      </>
    ),
  },
  {
    label: "Methodology",
    value:
      "Data source, method, time period, sample and scope, exclusions, limitations",
  },
  {
    label: "Evidence type",
    value:
      "Product telemetry aggregate, survey, customer research, desk research or internal analysis",
  },
  {
    label: "Freshness",
    value:
      "Published date plus review policy; stale analysis removed from featured and default results",
  },
  {
    label: "Claims",
    value: (
      <>
        Quantitative statements must match the evidence and{" "}
        <strong>preserve denominator and context</strong>
      </>
    ),
  },
  {
    label: "Privacy",
    value:
      "No customer-identifiable, account-level, payment or personal data unless explicitly authorized and lawful",
  },
  {
    label: "CTA",
    value:
      "Related capability, demo or next resource only when contextually relevant",
  },
];

export default function ReportsInsights() {
  return (
    <section className="w-full bg-white">
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
                Reports &amp; insights integrity contract
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
              A quantitative claim keeps its
              <br className="hidden sm:block" /> denominator.
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
              Seven metadata requirements, none of which a headline number can
              skip.
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
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div className="grid grid-cols-[224px_minmax(0,1fr)] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
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
                    Required metadata
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
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
                    Standard
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {metadataRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`
                    grid
                    grid-cols-[224px_minmax(0,1fr)]
                    ${
                      index !== metadataRows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.label}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE CARDS */}
            <div className="flex flex-col md:hidden">
              {metadataRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`
                    p-5
                    ${
                      index !== metadataRows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* METADATA */}
                  <p
                    className="
                      !m-0
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    Required metadata
                  </p>

                  <p
                    className="
                      !m-0
                      mt-1.5
                      text-sm
                      font-semibold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {row.label}
                  </p>

                  {/* STANDARD */}
                  <p
                    className="
                      !m-0
                      mt-4
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    Standard
                  </p>

                  <p
                    className="
                      !m-0
                      mt-1.5
                      text-sm
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    {row.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}