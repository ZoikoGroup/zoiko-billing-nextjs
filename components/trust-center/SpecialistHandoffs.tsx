export default function SpecialistHandoffs() {
  const handoffs = [
    {
      question: "How is security governed?",
      destination: "Security Overview",
      description: "owns the program explanation.",
      note: "Trust Center does not duplicate its narrative.",
    },
    {
      question: "How is my data handled?",
      destination: "Privacy & Data Governance",
      description: "owns lifecycle, retention",
      note: "and rights. Trust Center may catalog related evidence.",
    },
    {
      question: "What are your recovery objectives?",
      destination: "Business Continuity",
      description: "owns recovery doctrine.",
      note: "Trust Center catalogs evidence, not operational commitments.",
    },
    {
      question: "Is there an active issue?",
      destination: "System Status.",
      description: "",
      note: "Trust Center is never treated as live status and publishes no availability figure.",
      inline: true,
    },
    {
      question: "Is there a published advisory?",
      destination: "Security Advisories",
      description: ".",
      note: "No copied stale feed appears here.",
    },
    {
      question: "How accessible is the product?",
      destination: "Accessibility",
      description: "owns conformance semantics.",
      note: "Trust Center catalogs approved conformance evidence if present.",
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
            px-7
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
                Specialist handoffs
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
              Trust Center catalogs. It does not explain.
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
              Six questions where the substantive answer belongs to a
              specialist destination.
            </p>
          </div>

          {/* HANDOFF CARDS */}
          <div className="w-full pt-5">
            <div className="flex w-full flex-col gap-3">
              {handoffs.map((handoff) => (
                <div
                  key={handoff.question}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-[#dfe5ee]
                    bg-white
                    px-5
                    py-5
                    shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  "
                >
                  {/* QUESTION */}
                  <div className="mb-1.5 w-full">
                    <h3
                      className="
                        !m-0
                        text-sm
                        font-bold
                        leading-6
                        text-[#091127]
                      "
                    >
                      {handoff.question}
                    </h3>
                  </div>

                  {/* DESTINATION + DESCRIPTION */}
                  {handoff.inline ? (
                    <p
                      className="
                        !m-0
                        text-xs
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      <span className="font-semibold text-[#5276a0]">
                        {handoff.destination}
                      </span>{" "}
                      <strong className="font-bold">
                        Trust Center is never treated as live status
                      </strong>{" "}
                      and publishes no availability figure.
                    </p>
                  ) : (
                    <div className="flex w-full flex-col">
                      <p
                        className="
                          !m-0
                          text-xs
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        <span className="font-semibold text-[#5276a0]">
                          {handoff.destination}
                        </span>{" "}
                        {handoff.description}
                      </p>

                      <p
                        className={`
                          !m-0
                          text-xs
                          leading-5
                          ${
                            handoff.question ===
                              "How is security governed?" ||
                            handoff.question ===
                              "What are your recovery objectives?" ||
                            handoff.question ===
                              "Is there a published advisory?"
                              ? "font-bold"
                              : "font-normal"
                          }
                          text-[#5d7192]
                        `}
                      >
                        {handoff.note}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}