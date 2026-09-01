const rows = [
  {
    layer: (
      <>
        Public Careers
        <br className="hidden sm:block" />
        page
      </>
    ),
    owns: (
      <>
        Role discovery, approved role metadata, candidate trust guidance, and
        the handoff to Apply.
      </>
    ),
    mustNot: (
      <>
        Collect resume, work history, identity documents, compensation
        expectations, demographic or sensitive data
      </>
    ),
  },
  {
    layer: (
      <>
        Application
        <br className="hidden sm:block" />
        system
      </>
    ),
    owns: (
      <>
        Application intake, its own privacy notice, required candidate data,
        submission acknowledgement and candidate workflow.
      </>
    ),
    mustNot: (
      <>
        <strong>Inherit unsupported promises</strong> made on the Careers page
      </>
    ),
  },
  {
    layer: (
      <>
        Recruiting
        <br className="hidden sm:block" />
        operations
      </>
    ),
    owns: "Role truth, process, candidate communication and lawful data handling.",
    mustNot: "Expose internal notes or candidate status publicly",
  },
  {
    layer: "Analytics",
    owns: "Aggregate role discovery and apply-click behavior.",
    mustNot: (
      <>
        Capture resume contents, applicant identity, protected traits or hiring
        decisions
      </>
    ),
    last: true,
  },
];

export default function CandidateDataBoundary() {
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
                Candidate data boundary
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
              Four layers, and this page is the
              thinnest one.
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
              Separating discovery from intake is what keeps a Careers page
              from quietly becoming a data-collection surface.
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
                  grid-cols-[144px_minmax(0,1fr)_minmax(0,0.92fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Layer
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Owns
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Must not
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`
                    grid
                    grid-cols-[144px_minmax(0,1fr)_minmax(0,0.92fr)]
                    ${
                      !row.last
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* LAYER */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.layer}
                    </span>
                  </div>

                  {/* OWNS */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.owns}
                    </span>
                  </div>

                  {/* MUST NOT */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-bold leading-5 text-[#5d7192]">
                      {row.mustNot}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`
                    p-5
                    ${
                      !row.last
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* LAYER */}
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
                      Layer
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
                      {row.layer}
                    </p>
                  </div>

                  {/* OWNS */}
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
                      Owns
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.owns}
                    </p>
                  </div>

                  {/* MUST NOT */}
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
                      Must not
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-bold
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.mustNot}
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