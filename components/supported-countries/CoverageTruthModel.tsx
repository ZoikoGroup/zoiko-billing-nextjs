export default function CoverageTruthModel() {
  const rows = [
    {
      dimension: "Market",
      question:
        "Which country, territory or market is this record about?",
      behavior: "Governed market identifiers and public names only.",
    },
    {
      dimension: "Capability",
      question:
        "Which exact capability family is being described?",
      behavior:
        "FX, currency, payment, compliance and tax are separate records.",
    },
    {
      dimension: "Status",
      question:
        "What is the approved public availability state?",
      behavior:
        "Registry-defined values only; no invented status interpretation.",
    },
    {
      dimension: "Scope",
      question:
        "What conditions or limits qualify this status?",
      behavior:
        "Show approved scope; never infer missing dimensions.",
    },
    {
      dimension: "Currentness / evidence",
      question:
        "How current and verifiable is the statement?",
      behavior:
        "Expose reviewed and source metadata; unknown is explicit.",
    },
  ];

  return (
    <section
    id = "coverage-directory"
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
              max-w-[1000px]
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
                Coverage truth model
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
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
              Five dimensions, and a status means
              <br className="hidden sm:block" />
              nothing without the other four.
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
              A coverage statement is only interpretable when market,
              capability, status, scope and currentness travel together.
            </p>
          </div>

          {/* TABLE CONTAINER */}
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
                  grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                  bg-[#26344d]
                "
              >
                {/* DIMENSION */}
                <div
                  className="
                    border-b
                    border-r
                    border-white/15
                    px-3.5
                    py-3
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Dimension
                  </span>
                </div>

                {/* QUESTION */}
                <div
                  className="
                    border-b
                    border-r
                    border-white/15
                    px-3.5
                    py-3
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Question answered
                  </span>
                </div>

                {/* BEHAVIOR */}
                <div
                  className="
                    border-b
                    border-white/15
                    px-3.5
                    py-3
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Required behavior
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.dimension}
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
                  {/* DIMENSION */}
                  <div
                    className="
                      border-r
                      border-[#edf0f4]
                      bg-[#fafbfc]
                      px-3.5
                      py-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-bold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.dimension}
                    </span>
                  </div>

                  {/* QUESTION */}
                  <div
                    className="
                      border-r
                      border-[#edf0f4]
                      px-3.5
                      py-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-normal
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.question}
                    </span>
                  </div>

                  {/* BEHAVIOR */}
                  <div
                    className="
                      bg-[#fdfdfd]
                      px-3.5
                      py-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-bold
                        leading-5
                        text-[#7f1d1d]
                      "
                    >
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
                  key={row.dimension}
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
                  {/* DIMENSION */}
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
                      Dimension
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-bold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.dimension}
                    </p>
                  </div>

                  {/* QUESTION */}
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
                      Question answered
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
                      {row.question}
                    </p>
                  </div>

                  {/* REQUIRED BEHAVIOR */}
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
                      Required behavior
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-bold
                        leading-6
                        text-[#7f1d1d]
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