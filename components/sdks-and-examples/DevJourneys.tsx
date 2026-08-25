export default function DevJourneys() {
  const journeys = [
    {
      title: "API Overview",
      description:
        "Capability orientation and the product-domain versus API-exposure distinction.",
    },
    {
      title: "API Documentation",
      description:
        "Authoritative request, response, permission, lifecycle and error behavior.",
    },
    {
      title: "Authentication",
      description:
        "Methods, credential lifecycle, scopes and environment binding.",
    },
    {
      title: "Webhooks",
      description:
        "Event identity, delivery, verification and replay governance.",
    },
    {
      title: "Developer Sandbox",
      description:
        "Non-production fidelity, test data and safe validation evidence.",
    },
    {
      title: "Build an Integration",
      description:
        "Architecture, readiness sequencing and operational ownership.",
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
          xl:px-24
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
          {/* Intro */}
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
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 bg-[#7890b2] opacity-40" />

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

              <span className="h-px w-4 bg-[#7890b2] opacity-40" />
            </div>

            {/* Heading */}
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
              Six destinations, each authoritative in its own domain.
            </h2>

            {/* Description */}
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
              This page accelerates implementation against those contracts
              without restating them.
            </p>
          </div>

          {/* Cards */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
              lg:gap-5
            "
          >
            {journeys.map((journey) => (
              <div
                key={journey.title}
                className="
                  flex
                  min-h-[192px]
                  flex-col
                  items-start
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  transition-shadow
                  duration-200
                  hover:shadow-[0_10px_28px_rgba(15,23,42,0.08),0_2px_4px_rgba(15,23,42,0.05)]
                  sm:min-h-[192px]
                  sm:p-5
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
                    mt-1.5
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