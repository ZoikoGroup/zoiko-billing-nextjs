export default function EnterpriseTrust() {
  const rows = [
    {
      dimension: "Data safety",
      proof:
        "Prohibited-data guidance, synthetic fixtures and governed retention",
    },
    {
      dimension: "Environment isolation",
      proof:
        "Environment-bound credentials and identifiers, with no promotion path",
    },
    {
      dimension: "Side-effect control",
      proof:
        "Explicit per-capability status, including the Real warning case",
    },
    {
      dimension: "Fidelity honesty",
      proof: "Per-dimension statuses including Unverified",
    },
    {
      dimension: "Governance",
      proof: "Roles, audit evidence and destructive-action pattern",
    },
    {
      dimension: "Readiness discipline",
      proof: "Evidence review rather than a passing badge",
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
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            sm:gap-10

            lg:gap-11
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
                Enterprise trust
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                !max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]
              "
            >
              Six dimensions a reviewer can assess without a call.
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
              Security and governance information is public; assistance
              appears where scope genuinely requires it.
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
            {/* TABLE HEADER */}
            <div className="grid grid-cols-[320px_minmax(0,1fr)] bg-[#fafbfc]">
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
                  Dimension
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
                  Proof pattern
                </span>
              </div>
            </div>

            {/* TABLE ROWS */}
            {rows.map((row, index) => (
              <div
                key={row.dimension}
                className={`
                  grid
                  grid-cols-[320px_minmax(0,1fr)]
                  ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* DIMENSION */}
                <div className="px-4 py-3.5">
                  <span className="text-sm font-semibold leading-5 text-[#091127]">
                    {row.dimension}
                  </span>
                </div>

                {/* PROOF */}
                <div className="px-4 py-3.5">
                  <span className="text-sm font-normal leading-5 text-[#5d7192]">
                    {row.proof}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
          <div className="flex w-full flex-col gap-4 md:hidden">
            {rows.map((row) => (
              <div
                key={row.dimension}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_4px_16px_rgba(15,23,42,0.04)]
                "
              >
                {/* DIMENSION */}
                <div
                  className="
                    border-b
                    border-[#e8ecf2]
                    bg-[#fafbfc]
                    px-5
                    py-4
                  "
                >
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    {row.dimension}
                  </span>
                </div>

                {/* PROOF */}
                <div className="px-5 py-4">
                  <p className="mb-1 text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Proof pattern
                  </p>

                  <p className="text-sm font-normal leading-6 text-[#5d7192]">
                    {row.proof}
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