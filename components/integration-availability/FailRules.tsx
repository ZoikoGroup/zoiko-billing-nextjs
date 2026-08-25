export default function FailRules() {
  const rows = [
    {
      area: "Accessibility",
      rule:
        "Search, filters, states and matrix are keyboard and screen-reader usable; no color-only meaning; mobile cards keep their labels",
    },
    {
      area: "Public privacy",
      rule:
        "No login and no precise geolocation required; search telemetry minimized",
    },
    {
      area: "Customer privacy",
      rule:
        "Authenticated readiness, tenant IDs, credentials, mappings, private entitlements and incidents never leak publicly",
    },
    {
      area: "Security",
      rule:
        "A public client cannot forge availability, certification, operational or plan state through query parameters",
    },
    {
      area: "Roadmap confidentiality",
      rule:
        "Internal Planned and Needs review notes, private partner contracts and unreleased connectors are not exposed",
    },
    {
      area: "Status resilience",
      rule: "If the live status source fails, render Unknown or Unable to confirm — never a stale green",
      emphasized: true,
    },
    {
      area: "Registry resilience",
      rule:
        "If the availability registry fails, do not fall back to marketing copy or cached positives outside governed freshness",
    },
    {
      area: "Partner dependency",
      rule:
        "A third-party outage or withdrawal cannot silently continue a positive state",
    },
    {
      area: "No profiling",
      rule:
        "Customer value, budget, risk and sales priority are never inferred from integration, region or plan searches",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#f7f8fa]">
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
            gap-10

            sm:gap-11
          "
        >
          {/* HEADER */}
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
            <div className="flex w-full items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.11em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.15em]
                "
              >
                Accessibility, privacy, security &amp; resilience
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* TITLE */}
            <h2
              className="
                !m-0
                !text-center
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]
              "
            >
              Fail conservative.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-1
                text-center
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              When the system cannot confirm a material qualifier, the page
              says it cannot confirm rather than guessing Available.
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
                {/* HEADER */}
                <div
                  className="
                    grid
                    grid-cols-[224px_minmax(0,1fr)]
                    border-b
                    border-[#dfe5ee]
                    bg-[#fbfcfd]
                  "
                >
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
                      Area
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
                      Required rule
                    </span>
                  </div>
                </div>

                {/* ROWS */}
                {rows.map((row, index) => (
                  <div
                    key={row.area}
                    className={`
                      grid
                      grid-cols-[224px_minmax(0,1fr)]
                      ${
                        index !== rows.length - 1
                          ? "border-b border-[#e9edf3]"
                          : ""
                      }
                    `}
                  >
                    {/* AREA */}
                    <div className="px-4 py-3.5">
                      <p
                        className="
                          m-0
                          text-sm
                          font-semibold
                          leading-5
                          text-[#091127]
                        "
                      >
                        {row.area}
                      </p>
                    </div>

                    {/* RULE */}
                    <div className="px-4 py-3.5">
                      <p
                        className={`
                          m-0
                          text-sm
                          leading-5
                          ${
                            row.emphasized
                              ? "font-bold text-[#091127]"
                              : "font-normal text-[#5d7192]"
                          }
                        `}
                      >
                        {row.rule}
                      </p>
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