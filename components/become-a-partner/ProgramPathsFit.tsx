export default function ProgramPathsFit() {
  const rows = [
    {
      question: "Which partner paths exist?",
      source: "Partner Program",
      sourceLinked: true,
      behavior: (
        <>
          Selection renders from the registry —{" "}
          <strong>no path is invented</strong>
        </>
      ),
    },
    {
      question: "Am I eligible?",
      source: "Program registry · review process",
      behavior: (
        <>
          <strong>
            No threshold, revenue criterion or eligibility rule is published
          </strong>
        </>
      ),
    },
    {
      question: "Is my country included?",
      source: "Program applicability source",
      behavior: (
        <>
          <strong>No territory or country list stated</strong>
        </>
      ),
    },
    {
      question: "What do partners receive?",
      source: "Partner Program",
      behavior: (
        <>
          Referenced,{" "}
          <strong>never restated as an unsupported benefit</strong>
        </>
      ),
    },
    {
      question: "What are the commercial terms?",
      source: "Program · Legal · contract",
      behavior: (
        <>
          <strong>No fee, commission, margin or co-sell right stated</strong>
        </>
      ),
    },
    {
      question: "Will I be listed publicly?",
      source: "Technology Partners",
      sourceLinked: true,
      behavior: (
        <>
          <strong>
            Listing requires an approved relationship and publication rights
          </strong>{" "}
          — applying does not produce one
        </>
      ),
    },
  ];

  return (
    <section
    id = "program-paths-fit"
     className="w-full bg-[#f7f8fa]">
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
                Program paths &amp; fit
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
              Paths come from the registry, not
             
              from this page.
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
              Partner types, tiers and eligibility criteria are owned by
              Partner Program. What this page can tell you is how the fit
              question is structured.
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
                  grid-cols-[256px_256px_minmax(0,1fr)]
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
                    Fit question
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
                    Source
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
                    Behavior here
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.question}
                  className={`
                    grid
                    grid-cols-[256px_256px_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* FIT QUESTION */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.question}
                    </span>
                  </div>

                  {/* SOURCE */}
                  <div className="px-4 py-3.5">
                    {row.sourceLinked ? (
                      <span className="text-sm font-semibold leading-6 text-[#526fa0]">
                        {row.source}
                      </span>
                    ) : (
                      <span className="text-sm font-normal leading-5 text-[#5d7192]">
                        {row.source}
                      </span>
                    )}
                  </div>

                  {/* BEHAVIOR */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.behavior}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.question}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* FIT QUESTION */}
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
                      Fit question
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
                      {row.question}
                    </p>
                  </div>

                  {/* SOURCE */}
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
                      Source
                    </p>

                    <p
                      className={`
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        ${
                          row.sourceLinked
                            ? "font-semibold text-[#526fa0]"
                            : "font-normal text-[#5d7192]"
                        }
                      `}
                    >
                      {row.source}
                    </p>
                  </div>

                  {/* BEHAVIOR */}
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
                      Behavior here
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
                      {row.behavior}
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