export default function RelatedDeveloperJourneys() {
  const journeys = [
    {
      title: "API Overview",
      description:
        "Capability orientation and the exposure distinction.",
    },
    {
      title: "API Documentation",
      description:
        "Exact operations, schemas, states and errors.",
    },
    {
      title: "Authentication",
      description:
        "Credential lifecycle and permission boundaries.",
    },
    {
      title: "Webhooks",
      description:
        "Delivery, verification and replay governance.",
    },
    {
      title: "SDKs & Examples",
      description:
        "Verified SDK availability and compatibility.",
    },
    {
      title: "Build an Integration",
      description:
        "Architecture, readiness and operational ownership.",
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
                Related developer journeys
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
              Six destinations, each owning its own contract.
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
              The sandbox exercises these contracts; it does not redefine any
              of them.
            </p>
          </div>

          {/* JOURNEY CARDS */}
          <div className="flex w-full flex-col gap-0">
            {journeys.map((journey) => (
              <div
                key={journey.title}
                className="
                  flex
                  w-full
                  flex-col
                  gap-1.5
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                  [&+&]:mt-3
                "
              >
                <h3
                  className="
                    !m-0
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {journey.title}
                </h3>

                <p
                  className="
                    !m-0
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {journey.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}