export default function IntegrationAvailabilityMeaning() {
  const rows = [
    {
      dimension: "Integration availability",
      question:
        "Is this connector or capability offered for the stated public context?",
      separate: "Live health, customer connection status",
    },
    {
      dimension: "Region / jurisdiction",
      question: "Where is the capability offered?",
      separate: "User location, browser locale, data residency",
    },
    {
      dimension: "Plan / commercial",
      question: "Which public plan context can include it?",
      separate: "A specific customer's signed entitlement",
    },
    {
      dimension: "Capability",
      question: "Which object, action and direction works?",
      separate: "Whole-provider or category support",
    },
    {
      dimension: "Environment",
      question: "Is test, sandbox or production supported?",
      separate: "Provider account readiness",
    },
    {
      dimension: "Certification / review",
      question:
        "What named current evidence exists for a defined subject and scope?",
      separate: "A compliance guarantee",
    },
    {
      dimension: "Operational status",
      question: "Is the integration currently healthy?",
      separate: "Long-term availability",
    },
    {
      dimension: "Lifecycle",
      question:
        "Is the connector current, deprecated, sunset or withdrawn?",
      separate: "An operational incident",
    },
    {
      dimension: "Compatibility",
      question:
        "Which provider, product, API or schema versions work?",
      separate: "Availability at another version",
    },
    {
      dimension: "Connection readiness",
      question:
        "Is a specific tenant or account configured and healthy?",
      separate: "This public page — authenticated only",
      emphasized: true,
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
          items-center
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
        {/* SECTION INTRO */}
        <div
          className="
            flex
            w-full
            max-w-[662px]
            flex-col
            items-center
            gap-3
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
              What integration availability means
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          {/* TITLE */}
          <h2
            className="
              !m-0
              !text-center
              !text-[30px]
              !font-extrabold
              !leading-[1.2]
              !tracking-[-0.03em]
              !text-[#091127]

              sm:!text-[34px]

              md:!text-[36px]
            "
          >
            Ten questions, ten separate answers.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              !m-0
              mt-1
              w-full
              max-w-[687px]
              text-center
              text-[15px]
              font-normal
              leading-7
              text-[#5d7192]

              sm:text-base
            "
          >
            This page answers public product applicability. It never reveals
            or infers a specific customer&apos;s connection configuration,
            secrets, provider account or contract.
          </p>
        </div>

        {/* TABLE */}
        <div
          className="
            mt-10
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-[#dfe5ee]
            bg-white
            shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

            sm:mt-11
          "
        >
          {/* MOBILE HORIZONTAL SCROLL */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[1040px]">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[208px_minmax(0,578px)_384px]
                  border-b
                  border-[#dfe5ee]
                  bg-[#fbfcfd]
                "
              >
                <div className="px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#7890b2]
                    "
                  >
                    Truth dimension
                  </span>
                </div>

                <div className="px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#7890b2]
                    "
                  >
                    Question answered
                  </span>
                </div>

                <div className="px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#7890b2]
                    "
                  >
                    Separate from
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.dimension}
                  className={`
                    grid
                    grid-cols-[208px_minmax(0,578px)_384px]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#e9edf3]"
                        : ""
                    }
                  `}
                >
                  {/* DIMENSION */}
                  <div className="px-4 py-3.5">
                    <p
                      className="
                        m-0
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.dimension}
                    </p>
                  </div>

                  {/* QUESTION */}
                  <div className="px-4 py-3.5">
                    <p
                      className="
                        m-0
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.question}
                    </p>
                  </div>

                  {/* SEPARATE FROM */}
                  <div className="px-4 py-3.5">
                    <p
                      className={`
                        m-0
                        text-sm
                        leading-5
                        ${
                          row.emphasized
                            ? "font-bold text-[#091127]"
                            : "font-normal text-[#5d7192]"
                        }
                      `}
                    >
                      {row.separate}
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