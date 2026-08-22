import Image from "next/image";

export default function IssuerIdentity() {
  const items = [
    {
      title: "Issuer profile",
      description:
        "entity-specific fields sourced from approved configuration.",
    },
    {
      title: "Document series & numbering",
      description:
        "scoped and versioned where supported; uniqueness and sequence rules belong to the authoritative document configuration.",
    },
    {
      title: "Template",
      description:
        "entity plus document type plus locale plus version applicability.",
    },
    {
      title: "Currency",
      description: "resolved through Multi-Currency authority.",
      link: "/multi-currency",
      linkText: "Multi-Currency",
    },
    {
      title: "Language & locale",
      description:
        "resolved through Localized Documents, with no legal-compliance inference.",
      link: "/localized-documents",
      linkText: "Localized Documents",
    },
    {
      title: "Tax & legal fields",
      description:
        "displayed only from authoritative tax, legal and document configuration.",
    },
    {
      title: "Issue event",
      description:
        "freezes the issuer, currency, template, series and effective context used.",
    },
    {
      title: "Correction or reissue",
      description:
        "creates governed evidence rather than rewriting historical issuer context.",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          px-5
          py-12

          sm:px-8
          sm:py-14

          md:px-10
          md:py-16

          lg:px-14
          lg:py-20

          xl:px-24
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1184px]
            flex-col
            gap-10

            md:gap-12

            lg:flex-row
            lg:items-center
            lg:gap-14
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              flex
              w-full
              min-w-0
              flex-1
              flex-col
              items-start
              gap-3.5
              pt-2
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
              <span
                className="
                  h-px
                  w-6
                  shrink-0
                  bg-blue-600
                  opacity-75
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-blue-600

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Issuer identity, documents, numbering &amp; locale
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
                text-[30px]
                font-extrabold
                leading-[1.12]
                tracking-[-0.035em]
                text-slate-900

                sm:text-[34px]

                md:text-[38px]

                lg:text-3xl
                lg:leading-9

                xl:text-[36px]
              "
            >
              Renaming an entity cannot rewrite a
              <br className="hidden sm:block" />
              document it already issued.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-sm
                font-normal
                leading-6
                text-[#5d7192]

                sm:text-[15px]
                sm:leading-7

                md:text-base
              "
            >
              Changing an entity name, address, template, series, currency
              default or branding later must never silently alter an issued
              document or its audit evidence.
            </p>

            {/* DETAILS */}
            <div className="mt-2 flex w-full flex-col">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="
                    flex
                    items-start
                    gap-3
                    py-2

                    sm:py-2.5
                  "
                >
                  {/* BULLET */}
                  <span
                    className="
                      mt-2.5
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-[2px]
                      bg-blue-600
                    "
                  />

                  {/* TEXT */}
                  <p
                    className="
                      !m-0
                      min-w-0
                      text-sm
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    <span className="font-bold">{item.title}</span>{" "}
                    —{" "}
                    {item.link ? (
                      <>
                        {item.description.split(item.linkText!)[0]}
                        <a
                          href={item.link}
                          className="font-semibold text-blue-600 hover:underline"
                        >
                          {item.linkText}
                        </a>
                        {item.description.split(item.linkText!)[1]}
                      </>
                    ) : (
                      item.description
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              relative
              w-full
              flex-1
              overflow-hidden
              rounded-2xl
              border
              border-[#e1e5eb]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              lg:max-w-[565px]
            "
          >
            <div className="relative aspect-[565/561] w-full">
              <Image
                src="/images/multi-entity-billing/issuer.png"
                alt="Issuer identity, documents, numbering and locale"
                fill
                priority
                sizes="
                  (max-width: 1023px) 100vw,
                  565px
                "
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}