export default function CorrectionSupersessionHistory() {
  const rows = [
    {
      scenario: "Incorrect prior record",
      behavior:
        "Show a later correction relationship with reason and review context.",
      implication: "Do not claim the prior record is technically immutable.",
    },
    {
      scenario: "Policy or decision revised",
      behavior:
        "Show a superseded-by relationship and the new effective context.",
      implication: (
        <>
          Do not silently overwrite history{" "}
          <span className="font-normal">
            in the illustrative design.
          </span>
        </>
      ),
    },
    {
      scenario: "Evidence later added",
      behavior:
        "Show an evidence-added event or the current evidence status.",
      implication:
        "Do not imply legal sufficiency from attachment presence.",
    },
    {
      scenario: "Disputed explanation",
      behavior:
        "Use a questioned or needs-review concept with reviewer ownership.",
      implication: "Do not auto-resolve ambiguity.",
    },
    {
      scenario: "Duplicate event",
      behavior:
        "Explain a potential duplicate or linked-event concept if the product source later supports it.",
      implication: "Do not invent deduplication guarantees.",
    },
    {
      scenario: "Historical source unavailable",
      behavior:
        "Show an unavailable or archived reference status and a safe escalation.",
      implication: "Do not fabricate missing evidence.",
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
            gap-5

            sm:gap-6

            md:gap-7
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
                Correction, supersession &amp; historical integrity
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
              Six scenarios, and each names the
              <br className="hidden sm:block" />
              implication it must not create.
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
              The right-hand column is the substance — every entry is a
              conclusion a reviewer would draw unless the design prevents it.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div
            className="
              hidden
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              md:block
            "
          >
            {/* HEADER */}
            <div className="grid grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)] bg-[#173a68]">
              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Scenario
                </span>
              </div>

              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Recommended behavior
                </span>
              </div>

              <div className="px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Prohibited implication
                </span>
              </div>
            </div>

            {/* ROWS */}
            {rows.map((row, index) => (
              <div
                key={row.scenario}
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
                {/* SCENARIO */}
                <div className="border-r border-[#edf0f4] bg-[#fafbfc] px-3.5 py-3">
                  <span className="text-xs font-bold leading-5 text-[#091127]">
                    {row.scenario}
                  </span>
                </div>

                {/* RECOMMENDED BEHAVIOR */}
                <div className="border-r border-[#edf0f4] px-3.5 py-3">
                  <span className="text-xs font-normal leading-5 text-[#091127]">
                    {row.behavior}
                  </span>
                </div>

                {/* PROHIBITED IMPLICATION */}
                <div className="bg-[#fffafa] px-3.5 py-3">
                  <span className="text-xs font-bold leading-5 text-[#7f1d1d]">
                    {row.implication}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
          <div className="flex w-full flex-col gap-3 md:hidden">
            {rows.map((row) => (
              <div
                key={row.scenario}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* SCENARIO */}
                <div className="bg-[#fafbfc] px-4 py-3">
                  <p className="!m-0 text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                    Scenario
                  </p>

                  <p className="!m-0 mt-1 text-sm font-bold leading-5 text-[#091127]">
                    {row.scenario}
                  </p>
                </div>

                {/* RECOMMENDED BEHAVIOR */}
                <div className="border-t border-[#edf0f4] px-4 py-3">
                  <p className="!m-0 text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                    Recommended behavior
                  </p>

                  <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                    {row.behavior}
                  </p>
                </div>

                {/* PROHIBITED IMPLICATION */}
                <div className="border-t border-[#edf0f4] bg-[#fffafa] px-4 py-3">
                  <p className="!m-0 text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-[#991b1b]">
                    Prohibited implication
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-bold leading-6 text-[#7f1d1d]">
                    {row.implication}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}