"use client";

const accessibilityRows = [
  {
    area: "Map",
    requirement:
      "Optional. Every colored jurisdiction must come from current registry state — no decorative filled-world proof",
  },
  {
    area: "Text equivalent",
    requirement:
      "A complete filterable list or table holds the same jurisdictions, statuses and limitations, and is the primary accessible truth",
  },
  {
    area: "Keyboard",
    requirement:
      "Search, filters, status detail, map-to-list linkage and every action are keyboard operable",
  },
  {
    area: "Screen reader",
    requirement:
      "Jurisdiction, status, limitation and currentness announced in logical order; map pins are never the sole content",
  },
  {
    area: "Color",
    requirement:
      "Status text plus a shape or label — never color alone",
  },
  {
    area: "Privacy",
    requirement:
      "No IP-derived commercial availability, sensitive geolocation tracking or nationality inference",
  },
  {
    area: "Security",
    requirement:
      "A public API returns public availability facts only — no internal partner contracts, customer-specific eligibility, unpublished roadmap, credentials or internal evidence",
  },
  {
    area: "Stale or outage",
    requirement:
      "If the availability service fails, positive dynamic claims are suppressed and a safe unable-to-confirm state is shown",
  },
  {
    area: "Analytics",
    requirement:
      "A search term may be logged only in privacy-safe canonicalized form, with no sensitive personal or profile linkage",
  },
];

export default function AccessibilityTable() {
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
                Accessibility, privacy, security &amp; resilience
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
              The table is the authority; a map is optional.
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
              No one should need color vision, pointer precision, zoom, or
              geography knowledge to discover a status.
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
              <div
                className="
                  grid
                  grid-cols-[176px_minmax(0,1fr)]
                  bg-[#fafbfc]
                "
              >
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
                    Area
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
                    Requirement
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {accessibilityRows.map((row, index) => (
                <div
                  key={row.area}
                  className={`
                    grid
                    grid-cols-[176px_minmax(0,1fr)]
                    ${
                      index !== accessibilityRows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* AREA */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.area}
                    </span>
                  </div>

                  {/* REQUIREMENT */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.requirement}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {accessibilityRows.map((row, index) => (
                <div
                  key={row.area}
                  className={`
                    p-5
                    ${
                      index !== accessibilityRows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* AREA */}
                  <div className="mb-4">
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
                      Area
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
                      {row.area}
                    </p>
                  </div>

                  {/* REQUIREMENT */}
                  <div>
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
                      Requirement
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
                      {row.requirement}
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