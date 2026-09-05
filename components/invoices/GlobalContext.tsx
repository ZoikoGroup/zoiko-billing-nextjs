import Link from "next/link";

export default function GlobalContext() {
  const contextItems = [
    {
      title: "Issuer entity",
      description:
        "The legal entity and establishment context that issues the document.",
    },
    {
      title: "Numbering series",
      description:
        "Separate series by entity, document type or jurisdiction where supported.",
    },
    {
      title: "Currency and rates",
      description:
        "Billing currency, with exchange-rate source context where relevant.",
    },
    {
      title: "Language and template",
      description:
        "Document language and the localized template applied to it.",
    },
    {
      title: "Tax identifiers",
      description:
        "Configured identifiers, rates and exemption evidence where supported.",
    },
    {
      title: "Jurisdiction availability",
      description:
        "Published per market from the approved availability registry.",
    },
    {
      title: "Electronic invoicing",
      description:
        "Supported only where the availability registry confirms it for that market.",
    },
    {
      title: "Clearance networks",
      description:
        "Named only with current evidence. No country or mandate is claimed otherwise.",
    },
  ];

  return (
    <section className="w-full bg-[#07162d]">
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
            items-start
            gap-8

            sm:gap-10

            md:gap-11
          "
        >
          {/* HEADER */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-8

              lg:flex-row
              lg:items-end
              lg:gap-16
            "
          >
            {/* LEFT */}
            <div
              className="
                flex
                w-full
                flex-1
                flex-col
                items-start
                gap-5
                pt-2
                pb-2

                lg:pb-5
              "
            >
              {/* EYEBROW */}
              <div className="flex items-center gap-3">
                <span
                  className="
                    h-[2px]
                    w-5
                    shrink-0
                    rounded-full
                    bg-gradient-to-r
                    from-[#27c7d9]
                    to-[#4f8bd9]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.16em]
                    text-[#70d7e3]

                    sm:text-xs
                    sm:tracking-[0.18em]
                  "
                >
                  Global context
                </span>
              </div>

              {/* TITLE */}
              <h2
                className="
                  !m-0
                  max-w-[638px]
                  !text-[30px]
                  !font-extrabold
                  !leading-[1.2]
                  !tracking-[-0.035em]
                  !text-white

                  sm:!text-[34px]

                  md:!text-[36px]

                  lg:!text-[40px]
                "
              >
                One document model, configured per issuer and market.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="w-full max-w-[529px] flex-1">
              <p
                className="
                  !m-0
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#9bb0c9]

                  sm:text-base
                "
              >
                Issuer entity, numbering series, currency, language and tax
                context are all configurable — within verified availability.
              </p>
            </div>
          </div>

          {/* CONTEXT CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.06]

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {contextItems.map((item, index) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[190px]
                  flex-col
                  items-start
                  border-b
                  border-white/10
                  bg-[#09203d]
                  px-5
                  py-5
                  transition-colors
                  hover:bg-[#0d294a]

                  sm:min-h-[200px]
                  sm:[&:nth-child(odd)]:border-r

                  lg:min-h-[220px]
                  lg:border-r
                  lg:[&:nth-child(4n)]:border-r-0
                  lg:[&:nth-child(n+5)]:border-b-0
                "
              >
                {/* NUMBER */}
                <span
                  className="
                    mb-5
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-md
                    bg-gradient-to-br
                    from-[#27c7d9]
                    to-[#4f8bd9]
                    text-[10px]
                    font-semibold
                    leading-4
                    text-white
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    text-sm
                    font-semibold
                    leading-5
                    text-white
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-2
                    max-w-[250px]
                    text-sm
                    font-normal
                    leading-5
                    text-[#9bb0c9]
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* JURISDICTION BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#27c7d9]
              bg-white/[0.06]
              px-5
              py-6

              sm:px-6
              sm:py-7

              md:px-7
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-[#70d7e3]

                sm:text-xs
              "
            >
              Jurisdiction boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[900px]
                text-sm
                font-normal
                leading-6
                text-[#c1cedd]

                sm:text-base
                sm:leading-7
              "
            >
              Language does not determine jurisdiction, tax treatment or
              contractual terms. Support for a country, mandate or clearance
              network is claimed only where current evidence exists in the
              availability registry.
            </p>
          </div>

          {/* BUTTONS */}
          <div
            className="
              flex
              w-full
              flex-col
              items-stretch
              justify-center
              gap-3
              pt-1

              sm:flex-row
              sm:items-center
            "
          >
            {/* EXPLORE GLOBAL BILLING */}
            <Link
              href="/global-billing"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                bg-white
                px-5
                py-2
                text-center
                text-base
                font-normal
                leading-6
                text-[#07162d]
                outline
                outline-1
                outline-offset-[-1px]
                outline-white
                transition-opacity
                hover:opacity-90
              "
            >
              Explore global billing
            </Link>

            {/* CHECK JURISDICTION AVAILABILITY */}
            <Link
              href="/jurisdiction-availability"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                border
                border-white/35
                px-5
                py-2
                text-center
                text-base
                font-normal
                leading-6
                !text-white
                transition-colors
                hover:bg-white/10
              "
            >
              Check jurisdiction availability
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}