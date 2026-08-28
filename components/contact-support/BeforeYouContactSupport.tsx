export default function BeforeYouContactSupport() {
  const options = [
    {
      title: "Help Center",
      description:
        "Searchable guidance for common questions, often faster than waiting for a case.",
    },
    {
      title: "Documentation",
      description:
        "Authoritative product behavior, configuration and reference material.",
    },
    {
      title: "System Status",
      description:
        "Current service state — worth checking before reporting something that may already be known.",
    },
    {
      title: "Billing Guides",
      description:
        "Practical operational guidance for receivables, reconciliation and reporting workflows.",
    },
    {
      title: "Product Updates",
      description:
        "Whether a behavior you noticed was a shipped change rather than a fault.",
    },
    {
      title: "Still need help?",
      description: (
        <>
          <span className="font-bold">
            Assisted support is always available.
          </span>{" "}
          Self-service never blocks the path to a case.
        </>
      ),
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
                Before you contact support
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
              Self-service is offered first, not instead.
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
              Alternatives are presented as genuinely faster routes — never as
              an obstacle placed in front of assisted support.
            </p>
          </div>

          {/* CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2
              sm:gap-5

              lg:grid-cols-3
            "
          >
            {options.map((option) => (
              <div
                key={option.title}
                className="
                  flex
                  min-h-[180px]
                  w-full
                  flex-col
                  items-start
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    w-full
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {option.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-1.5
                    w-full
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}