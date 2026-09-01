export default function FeaturedCurrentTemplates() {
  const rows = [
    {
      rule: "Eligibility",
      requirement: (
        <>
          Published current asset; accessible or an approved alternative; owner
          assigned; review current;{" "}
          <strong>no unresolved advice, security or accuracy issue</strong>
        </>
      ),
    },
    {
      rule: "Count",
      requirement: "One featured plus up to three supporting templates",
    },
    {
      rule: "Selection",
      requirement:
        "Editorial and user value, operational relevance and freshness — no opaque personalization",
    },
    {
      rule: "Metadata",
      requirement:
        "Task, audience, type, format, version, last reviewed, and the key scope note",
    },
    {
      rule: "Fallback",
      requirement: (
        <strong>Omit the section if no asset passes the gate</strong>
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
                Featured current templates
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
              Omitted when nothing passes the gate.
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
              A weak template in the most prominent position costs more than an
              empty section.
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
                  grid-cols-[112px_minmax(0,1fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Rule
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Requirement
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.rule}
                  className={`
                    grid
                    grid-cols-[112px_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.rule}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <div className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.requirement}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.rule}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* RULE */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Rule
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {row.rule}
                    </p>
                  </div>

                  {/* REQUIREMENT */}
                  <div className="mt-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Requirement
                    </p>

                    <div className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.requirement}
                    </div>
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