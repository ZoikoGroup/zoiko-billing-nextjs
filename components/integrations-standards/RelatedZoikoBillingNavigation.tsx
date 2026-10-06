import Link from "next/link";

export default function RelatedZoikoBillingNavigation() {
  const destinations = [
    {
      title: "Interface specifics",
      link: "Documentation",
      href: "/documentation",
      description:
        "owns names, fields, protocols, error codes and limits — with its own release cycle.",
    },
    {
      title: "What connects today",
      link: "Integrations",
      href: "/integrations",
      description: (
        <>
          holds the verified registry.{" "}
          <strong>A standard is not an integration.</strong>
        </>
      ),
    },
    {
      title: "Whether it applies in your market",
      link: "Integration availability",
      href: "/integration-availability",
      description: (
        <>
          . <strong>Conformance is not availability.</strong>
        </>
      ),
    },
    {
      title: "Evaluation framework",
      description: (
        <>
          <strong>Developers and IT</strong> covers boundary and write-authority
          decisions. <strong>Route pending.</strong>
        </>
      ),
    },
    {
      title: "Submitting an integration",
      link: "Submit an Integration",
      href: "/integrations",
      description:
        "— technical review intake with its own governance.",
    },
    {
      title: "Security evidence",
      links: [
        {
          label: "Security",
          href: "/security-overview",
        },
        {
          label: "Trust Center",
          href: "/trust-center",
        },
      ],
      description:
        "hold assurance evidence with scope attached.",
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
                Related Zoiko Billing navigation
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
              Where the answers this page withholds live.
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
              Six destinations, each owning a class of technical or commercial
              truth.
            </p>
          </div>

          {/* DESTINATION CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {destinations.map((destination) => (
              <div
                key={destination.title}
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
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {destination.title}
                </h3>

                {/* CONTENT */}
                <div
                  className="
                    mt-2
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {destination.link && destination.href && (
                    <Link
                      href={destination.href}
                      className="
                        font-semibold
                        !text-blue-600
                        hover:underline
                      "
                    >
                      {destination.link}
                    </Link>
                  )}

                  {destination.links && (
                    <>
                      <Link
                        href={destination.links[0].href}
                        className="
                          font-semibold
                          !text-blue-600
                          hover:underline
                        "
                      >
                        {destination.links[0].label}
                      </Link>

                      <span> and </span>

                      <Link
                        href={destination.links[1].href}
                        className="
                          font-semibold
                          !text-blue-600
                          hover:underline
                        "
                      >
                        {destination.links[1].label}
                      </Link>
                    </>
                  )}

                  {destination.description && (
                    <span>
                      {destination.link || destination.links ? " " : ""}
                      {destination.description}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}