export default function DataHandling() {
  const rows = [
    {
      rule: "Purpose limitation",
      meaning: "Application data is used to assess the application.",
      prevents: (
        <>
          <strong>Silent reuse as a sales lead</strong> — which is what an
          unbundled marketing consent is for
        </>
      ),
    },
    {
      rule: "Minimization",
      meaning: (
        <>
          Four required fields, four conditional ones, and nothing collected
          speculatively.
        </>
      ),
      prevents:
        "Data held with no defined use and no clear retention basis",
    },
    {
      rule: "No secret intake",
      meaning: (
        <>
          Sensitive-pattern detection warns before a submission containing a
          credential completes.
        </>
      ),
      prevents: (
        <>
          <strong>
            A key entering a system that was never designed to hold one
          </strong>
        </>
      ),
    },
    {
      rule: "Privacy authority",
      meaning: (
        <>
          Retention, rights and handling follow{" "}
          <span className="font-semibold text-[#526fa0]">
            Privacy &amp; Data Governance
          </span>
          .
        </>
      ),
      prevents: "A second, divergent privacy story on a partner surface",
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
                Data handling
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
              Four rules for applicant data.
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
              An application collects business contact information about a
              real person, so the same discipline applies here as anywhere
              else on this site.
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
              <div className="grid grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)] bg-[#172a4d]">
                <div className="border-r border-white/15 px-3.5 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                    Rule
                  </span>
                </div>

                <div className="border-r border-white/15 px-3.5 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                    What it means
                  </span>
                </div>

                <div className="px-3.5 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                    What it prevents
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.rule}
                  className={`
                    grid
                    grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* RULE */}
                  <div className="bg-[#fafbfc] px-3.5 py-3">
                    <span className="text-xs font-bold leading-5 text-[#091127]">
                      {row.rule}
                    </span>
                  </div>

                  {/* MEANING */}
                  <div className="border-l border-[#edf0f4] px-3.5 py-3">
                    <span className="text-xs font-normal leading-5 text-[#091127]">
                      {row.meaning}
                    </span>
                  </div>

                  {/* PREVENTS */}
                  <div className="border-l border-[#edf0f4] bg-[#fdf8f8] px-3.5 py-3">
                    <span className="text-xs font-normal leading-5 text-[#c23b3b]">
                      {row.prevents}
                    </span>
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
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Rule
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {row.rule}
                    </p>
                  </div>

                  {/* MEANING */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      What it means
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.meaning}
                    </p>
                  </div>

                  {/* PREVENTS */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#c23b3b]">
                      What it prevents
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#c23b3b]">
                      {row.prevents}
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