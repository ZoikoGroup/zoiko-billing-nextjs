export default function RateProvenanceTable() {
  const rows = [
    {
      concept: "Source provenance",
      behavior: (
        <>
          Every rate-related decision can point to its source class or record
          where the product supports it.
        </>
      ),
      boundary: "No provider is named on this page.",
      boundaryBold: false,
    },
    {
      concept: "Observed time",
      behavior: "Show when the source observation was recorded.",
      boundary: "Do not imply a refresh SLA.",
      boundaryBold: true,
    },
    {
      concept: "Effective period",
      behavior:
        "Distinguish observation time from when a decision applies.",
      boundary: "Two facts, never one field.",
      boundaryBold: false,
    },
    {
      concept: "Currentness",
      behavior: (
        <>
          Recommended labels:{" "}
          <strong>
            Current · Review needed · Source unavailable · Superseded · Not
            assessed
          </strong>
          .
        </>
      ),
      boundary: "No staleness threshold is defined without a source.",
      boundaryBold: true,
    },
    {
      concept: "Supersession",
      behavior: (
        <>
          A new decision references the prior one;{" "}
          <strong>
            old context remains reviewable rather than silently overwritten
          </strong>
          .
        </>
      ),
      boundary: "No immutability technology is implied.",
      boundaryBold: true,
    },
    {
      concept: "Unknown",
      behavior: (
        <>
          Show{" "}
          <strong>Unknown or Source unavailable explicitly</strong>.
        </>
      ),
      boundary: "Never substitute a guessed rate.",
      boundaryBold: true,
    },
  ];

  return (
    <section 
    id = "rate-provenance"
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
                Rate provenance, currentness &amp; supersession
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
              Six concepts, and the last one forbids
             
              the obvious shortcut.
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
              Provenance is what lets a decision be explained. Currentness is
              what stops a stale one being trusted.
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
            <div
              className="
                grid
                grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                bg-[#14233f]
              "
            >
              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Concept
                </span>
              </div>

              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Required behavior
                </span>
              </div>

              <div className="px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Boundary
                </span>
              </div>
            </div>

            {/* ROWS */}
            {rows.map((row, index) => (
              <div
                key={row.concept}
                className={`
                  grid
                  grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                  border-t
                  border-[#e8ebf0]
                `}
              >
                {/* CONCEPT */}
                <div
                  className="
                    border-r
                    border-[#e8ebf0]
                    bg-[#fbfcfd]
                    px-3.5
                    py-3
                  "
                >
                  <span className="text-xs font-bold leading-5 text-[#091127]">
                    {row.concept}
                  </span>
                </div>

                {/* REQUIRED BEHAVIOR */}
                <div
                  className="
                    border-r
                    border-[#e8ebf0]
                    px-3.5
                    py-3
                  "
                >
                  <span className="text-xs font-normal leading-5 text-[#091127]">
                    {row.behavior}
                  </span>
                </div>

                {/* BOUNDARY */}
                <div className="bg-[#f8f9fb] px-3.5 py-3">
                  <span
                    className={`
                      text-xs
                      leading-5
                      text-red-900
                      ${
                        row.boundaryBold
                          ? "font-bold"
                          : "font-normal"
                      }
                    `}
                  >
                    {row.boundary}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
          <div className="flex w-full flex-col gap-3 md:hidden">
            {rows.map((row) => (
              <div
                key={row.concept}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* CONCEPT */}
                <div className="border-b border-[#e8ebf0] bg-[#fbfcfd] px-4 py-3">
                  <p className="!m-0 text-xs font-bold leading-5 text-[#091127]">
                    {row.concept}
                  </p>
                </div>

                {/* REQUIRED BEHAVIOR */}
                <div className="border-b border-[#e8ebf0] px-4 py-3">
                  <p className="!m-0 mb-1.5 text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                    Required behavior
                  </p>

                  <p className="!m-0 text-xs font-normal leading-5 text-[#091127]">
                    {row.behavior}
                  </p>
                </div>

                {/* BOUNDARY */}
                <div className="bg-[#f8f9fb] px-4 py-3">
                  <p className="!m-0 mb-1.5 text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-[#7890b2]">
                    Boundary
                  </p>

                  <p
                    className={`
                      !m-0
                      text-xs
                      leading-5
                      text-red-900
                      ${
                        row.boundaryBold
                          ? "font-bold"
                          : "font-normal"
                      }
                    `}
                  >
                    {row.boundary}
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