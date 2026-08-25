export default function SDKRegistry() {
  const rows = [
    {
      field: "SDK identity",
      requirement:
        "Official display name and language or runtime, from canonical source only",
    },
    {
      field: "Availability state",
      requirement:
        "Supported, Preview, Maintenance, Deprecated, Unavailable or Needs verification — exact values controlled by the platform owner",
    },
    {
      field: "Package identity",
      requirement: "Rendered only when official and publishable",
    },
    {
      field: "Current version",
      requirement:
        "Source-driven; never hard-coded into marketing copy",
        highlight: true,
    },
    {
      field: "Runtime compatibility",
      requirement:
        "Verified range only when engineering approves",
    },
    {
      field: "API compatibility",
      requirement:
        "Applicable API surface, only when canonical",
    },
    {
      field: "Framework compatibility",
      requirement:
        "Only where officially tested",
    },
    {
      field: "Support channel",
      requirement:
        "Official scope and path where published",
    },
    {
      field: "Lifecycle",
      requirement:
        "Active, maintenance, deprecation or end-of-support, from the approved lifecycle source",
    },
    {
      field: "Provenance & license",
      requirement:
        "Only if canonical facts exist",
    },
    {
      field: "Owner / review date",
      requirement:
        "Governance fields; a public last-reviewed marker may render where useful",
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
                SDK availability registry
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
              Eleven fields, and version numbers never live in marketing copy.
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
              The registry drives every card. Nothing renders from a
              hard-coded value.
            </p>
          </div>

          {/* REGISTRY TABLE */}
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
                  grid-cols-[224px_minmax(0,1fr)]
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
                    Field
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
              {rows.map((row, index) => (
                <div
                  key={row.field}
                  className={`
                    grid
                    grid-cols-[224px_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* FIELD */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.field}
                    </span>
                  </div>

                  {/* REQUIREMENT */}
                  <div className="px-4 py-3.5">
                    <span
                      className={`
                        text-sm
                        leading-5
                        ${
                          row.highlight
                            ? "font-bold text-[#5d7192]"
                            : "font-normal text-[#5d7192]"
                        }
                      `}
                    >
                      {row.requirement}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.field}
                  className={`
                    p-5
                    sm:p-6
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* FIELD */}
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
                      Field
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
                      {row.field}
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
                      className={`
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        ${
                          row.highlight
                            ? "font-bold text-[#5d7192]"
                            : "font-normal text-[#5d7192]"
                        }
                      `}
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