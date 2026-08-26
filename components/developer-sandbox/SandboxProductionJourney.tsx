export default function SandboxProductionJourney() {
  const rows = [
    {
      stage: "Discovery",
      need: "Is there a safe place to test?",
      response: "Mental model and access status",
    },
    {
      stage: "Access",
      need: "How do I get in?",
      response: "Access states and first-run checklist",
    },
    {
      stage: "First request",
      need: "Can I make something work?",
      response: "Workspace modules and safe fixtures",
    },
    {
      stage: "Depth",
      need: "Can I test the hard cases?",
      response: "Scenario and failure controls",
    },
    {
      stage: "Honesty",
      need: "What is not real here?",
      response: "Fidelity matrix and side-effect statuses",
    },
    {
      stage: "Readiness",
      need: "Are we ready for production?",
      response: "Evidence review across ten domains",
    },
    {
      stage: "Transition",
      need: "What changes at go-live?",
      response: "Transition rules and the no-promotion default",
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
                From testing to production
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
              Successful validation is the conversion.
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
              Seven stages, with documentation never gated behind a commercial
              conversation.
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
            <div className="grid grid-cols-[208px_384px_minmax(0,1fr)] bg-[#fafbfc]">
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
                  Stage
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
                  User need
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
                  Page response
                </span>
              </div>
            </div>

            {/* TABLE ROWS */}
            {rows.map((row, index) => (
              <div
                key={row.stage}
                className={`
                  grid
                  grid-cols-[208px_384px_minmax(0,1fr)]
                  ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* STAGE */}
                <div className="px-4 py-3.5">
                  <span className="text-sm font-semibold leading-5 text-[#091127]">
                    {row.stage}
                  </span>
                </div>

                {/* USER NEED */}
                <div className="px-4 py-3.5">
                  <span className="text-sm font-normal leading-5 text-[#5d7192]">
                    {row.need}
                  </span>
                </div>

                {/* PAGE RESPONSE */}
                <div className="px-4 py-3.5">
                  <span className="text-sm font-normal leading-5 text-[#5d7192]">
                    {row.response}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
          <div className="flex w-full flex-col gap-4 md:hidden">
            {rows.map((row) => (
              <div
                key={row.stage}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_4px_16px_rgba(15,23,42,0.04)]
                "
              >
                {/* STAGE */}
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
                    {row.stage}
                  </span>
                </div>

                <div className="space-y-4 px-5 py-4">
                  {/* USER NEED */}
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                      User need
                    </p>

                    <p className="text-sm font-normal leading-6 text-[#5d7192]">
                      {row.need}
                    </p>
                  </div>

                  {/* PAGE RESPONSE */}
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                      Page response
                    </p>

                    <p className="text-sm font-normal leading-6 text-[#5d7192]">
                      {row.response}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}