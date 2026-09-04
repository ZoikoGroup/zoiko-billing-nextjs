import Link from "next/link";

export default function GlobalBillingModel() {
  const capabilities = [
    {
      title: "Multi-Currency Billing",
      description:
        "Issuing, recording and reporting billing documents in more than one currency, with the currency preserved on the record.",
      link: "Multi-currency billing →",
      href: "/multi-currency",
    },
    {
      title: "Multi-Entity Billing",
      description:
        "Separate billing entities maintained as distinct records, each with its own documents and balances.",
      link: "Multi-entity billing →",
      href: "/multi-entity-billing",
    },
    {
      title: "Entity-Level Controls",
      description:
        "Configuration, permissions and operating boundaries applied per entity rather than globally.",
      link: "Entity-level controls →",
      href: "/entity-level-controls",
    },
    {
      title: "Localized Documents",
      description:
        "Billing documents produced with locale-appropriate language, formatting and content where supported.",
      link: "Localized documents →",
      href: "/localized-documents",
    },
  ];

  const authorities = [
    {
      title: "Jurisdiction Availability",
      description: (
        <>
          <strong>
            The authority for where Zoiko Billing currently applies
          </strong>
          , with scope and limits attached per market. Not a capability page —
          an availability register.
        </>
      ),
      link: "Jurisdiction availability →",
      href: "/jurisdiction-availability",
    },
    {
      title: "Supported Languages",
      description: (
        <>
          <strong>Current language support only.</strong> A language appearing
          here establishes document language, and nothing about market
          availability or legal acceptability.
        </>
      ),
      link: "Supported languages →",
      href: "/supported-languages",
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
                The Global Billing model
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
              Four capabilities, two authorities.
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
              The distinction matters because capability and availability
              change independently. A feature existing does not mean it
              reaches your market.
            </p>
          </div>

          {/* CONTENT */}
          <div className="w-full">
            {/* CAPABILITIES */}
            <div
              className="
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
                sm:gap-5
                lg:grid-cols-4
              "
            >
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="
                    flex
                    min-h-[180px]
                    flex-col
                    rounded-2xl
                    border
                    border-[#dfe5ee]
                    bg-white
                    p-5
                    shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  "
                >
                  {/* TITLE */}
                  <h3
                    className="
                      !m-0
                      text-base
                      font-bold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <div className="mt-2">
                    <p
                      className="
                        !m-0
                        text-xs
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-3">
                    <Link
                      href={item.href}
                      className="
                        text-xs
                        font-semibold
                        leading-5
                        transition-colors
                        hover:underline
                      "
                      style={{ color: "#2563eb" }}
                    >
                      {item.link}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* AUTHORITIES */}
            <div
              className="
                mt-5
                grid
                grid-cols-1
                gap-5
                md:grid-cols-2
              "
            >
              {authorities.map((item) => (
                <div
                  key={item.title}
                  className="
                    flex
                    min-h-[180px]
                    flex-col
                    rounded-2xl
                    border
                    border-[#dfe5ee]
                    bg-[#f0f2f5]
                    px-6
                    py-6
                  "
                >
                  {/* TITLE */}
                  <h3
                    className="
                      !m-0
                      text-lg
                      font-bold
                      leading-7
                      text-[#091127]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      !m-0
                      mt-2
                      text-sm
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {item.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-auto pt-4">
                    <Link
                      href={item.href}
                      className="
                        text-sm
                        font-semibold
                        leading-6
                        transition-colors
                        hover:underline
                      "
                      style={{ color: "#2563eb" }}
                    >
                      {item.link}
                    </Link>
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