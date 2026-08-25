export default function RegionRules() {
  const rows = [
    {
      dimension: "Region",
      rule: "A named commercial or operational region only when the registry defines it",
    },
    {
      dimension: "Jurisdiction",
      rule: "Country, territory or subnational unit only when the capability record uses it",
    },
    {
      dimension: "Provider geography",
      rule: "Provider operational coverage can differ from Billing market availability",
    },
    {
      dimension: "Integration geography",
      rule: "The connector capability record owns its own geography scope",
    },
    {
      dimension: "Entity geography",
      rule: "Customer and billing-entity readiness remains authenticated configuration context",
    },
    {
      dimension: "Data location / residency",
      rule: "A separate Trust and Privacy authority — never inferred from integration availability",
    },
    {
      dimension: "Language / locale",
      rule: "A separate localization authority, not an availability shortcut",
    },
    {
      dimension: "Currency",
      rule: "A separate qualifier where the integration actually depends on it — not inferred from country",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1240px]
          flex-col
          items-center
          gap-5
          px-5
          py-12

          sm:px-8
          sm:py-14

          md:px-10
          md:py-16

          lg:px-7
          lg:py-20
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
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span
              className="
                whitespace-nowrap
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.14em]
                text-[#7890b2]

                sm:text-xs
                sm:tracking-[0.16em]
              "
            >
              Region &amp; jurisdiction qualifiers
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
            No hidden geolocation decision.
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
            IP address, browser locale, time zone, email domain, organization
            address, device language and inferred country must not silently
            determine or personalize authoritative availability.
          </p>
        </div>

        {/* TABLE */}
        <div
          className="
            mt-2
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-[#dfe5ee]
            bg-white
            shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
          "
        >
          {/* HORIZONTAL SCROLL ON SMALL SCREENS */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[900px]">
              {/* TABLE HEADER */}
              <div
                className="
                  grid
                  grid-cols-[288px_minmax(0,1fr)]
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
                    Dimension
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

              {/* TABLE ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.dimension}
                  className={`
                    grid
                    grid-cols-[288px_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#e9edf3]"
                        : ""
                    }
                  `}
                >
                  {/* DIMENSION */}
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
                      {row.dimension}
                    </p>
                  </div>

                  {/* RULE */}
                  <div className="px-4 py-3.5">
                    <p
                      className="
                        m-0
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
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
    </section>
  );
}