export default function TrustSecurityDestinations() {
  const destinations = [
    {
      number: "01",
      title: "Security Overview",
      description:
        "Control domains, public-safe governance and evidence routing.",
    },
    {
      number: "02",
      title: "Trust Center",
      description:
        "Evidence catalog, access states, scope and lifecycle. You are here.",
      active: true,
    },
    {
      number: "03",
      title: "Privacy & Data Governance",
      description:
        "Data lifecycle, retention boundaries and privacy rights.",
    },
    {
      number: "04",
      title: "Business Continuity",
      description:
        "Preparedness governance and recovery objective semantics.",
    },
    {
      number: "05",
      title: "Responsible Disclosure",
      description:
        "Testing rules, evidence limits and reporting route.",
    },
    {
      number: "06",
      title: "Security Advisories",
      description:
        "Published advisories, affected scope and action guidance.",
    },
    {
      number: "07",
      title: "Accessibility",
      description:
        "Conformance semantics, known limitations and reporting.",
    },
    {
      number: "08",
      title: "System Status",
      description:
        "Current service state, incidents and maintenance.",
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
                Trust &amp; Security
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
              Eight destinations, and this one holds the evidence.
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
              Each specialist page owns its own substantive explanation.
              Trust Center catalogs the artifacts those explanations point to.
            </p>
          </div>

          {/* DESTINATIONS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3
              sm:grid-cols-2
              sm:gap-4
              lg:grid-cols-4
            "
          >
            {destinations.map((destination) => (
              <div
                key={destination.number}
                className={`
                  flex
                  min-h-[164px]
                  flex-col
                  items-start
                  rounded-2xl
                  px-4
                  pt-4
                  pb-7
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  outline
                  outline-1
                  outline-offset-[-1px]
                  ${
                    destination.active
                      ? "bg-[#f1f5f9] outline-[#7890b2]"
                      : "bg-white outline-[#dfe5ee]"
                  }
                `}
              >
                {/* NUMBER */}
                <div className="mb-1 w-full">
                  <span className="text-[10px] font-normal leading-4 text-[#7890b2]">
                    {destination.number}
                  </span>
                </div>

                {/* TITLE */}
                <div className="mb-1 w-full">
                  <h3
                    className={`
                      !m-0
                      text-sm
                      font-bold
                      leading-6
                      ${
                        destination.active
                          ? "text-[#3f638f]"
                          : "text-[#091127]"
                      }
                    `}
                  >
                    {destination.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="w-full pt-px">
                  <p className="!m-0 text-xs font-normal leading-4 text-[#5d7192]">
                    {destination.description}
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