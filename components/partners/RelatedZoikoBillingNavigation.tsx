import Link from "next/link";

export default function RelatedZoikoBillingNavigation() {
  const destinations = [
    {
      title: "Partner programme",
      linkLabel: "Programme",
      description: " — structure and expectations where governed.",
      href: "/partner-programme",
    },
    {
      title: "Technology partners",
      linkLabel: "Technology",
      description: " — the interoperability-focused route.",
      href: "/technology-partners",
    },
    {
      title: "Apply",
      linkLabel: "Apply",
      description: " — the governed application intake.",
      href: "/become-a-partner",
    },
    {
      title: "Integration standards",
      linkLabel: "Integration Standards",
      description: " — what a governed interface must satisfy.",
      note: "Route pending.",
      href: "#",
    },
    {
      title: "Integrations directory",
      linkLabel: "Integrations",
      description: " — what actually connects today, as a separate fact.",
      href: "/integrations",
    },
    {
      title: "Company",
      linkLabel: "Company",
      description: " — entity separation and the wider routing hub.",
      href: "/company",
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
              Where a proposal goes next.
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
              Six destinations, three of which already hold governed routes.
            </p>
          </div>

          {/* DESTINATIONS */}
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
                  min-h-[156px]
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
                  {destination.title}
                </h3>

                {/* ROUTE */}
                <div className="mt-1.5 w-full">
                  {destination.href === "#" ? (
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-6
                        text-[#7890b2]
                      "
                    >
                      {destination.linkLabel}
                    </span>
                  ) : (
                    <Link
                      href={destination.href}
                      className="
                        text-sm
                        font-semibold
                        leading-6
                        !text-blue-600
                        transition-colors
                        hover:text-blue-700
                        hover:underline
                      "
                    >
                      {destination.linkLabel}
                    </Link>
                  )}

                  <span
                    className="
                      text-xs
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {destination.description}
                  </span>

                  {destination.note && (
                    <>
                      {" "}
                      <span
                        className="
                          text-xs
                          font-bold
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {destination.note}
                      </span>
                    </>
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