export default function GlobalOperatingControls() {
  const properties = [
    {
      title: "Currency on the record",
      description: (
        <>
          The currency a document was issued in stays with it.{" "}
          <strong>
            Reporting in another currency does not rewrite the original.
          </strong>
        </>
      ),
    },
    {
      title: "Entity separation",
      description: (
        <>
          Entities remain distinct records with their own documents, balances
          and controls — not a filter over one pooled ledger.
        </>
      ),
    },
    {
      title: "Correction trail per entity",
      description: (
        <>
          A correction is appended within its entity&apos;s own history.{" "}
          <strong>Cross-entity edits are not implied.</strong>
        </>
      ),
    },
    {
      title: "Scope stated at point of use",
      description: (
        <>
          Where a capability is limited by market or configuration,{" "}
          <strong>the qualifier renders next to it</strong> rather than in a
          global footnote.
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-white">
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
                Global operating controls
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
              Four properties that hold across
              <br className="hidden sm:block" />
              entities and currencies.
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
              These describe how the record behaves when the operation spans
              more than one context.
            </p>
          </div>

          {/* PROPERTIES */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            <div
              className="
                grid
                grid-cols-1

                sm:grid-cols-2

                lg:grid-cols-4
              "
            >
              {properties.map((property, index) => (
                <div
                  key={property.title}
                  className={`
                    flex
                    min-h-[170px]
                    flex-col
                    items-start
                    px-4
                    pt-4
                    pb-7

                    ${
                      index !== properties.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }

                    sm:nth-[2]:border-b-0

                    lg:border-b-0
                    lg:border-r
                    lg:border-[#edf0f4]
                    lg:last:border-r-0
                  `}
                >
                  {/* TITLE */}
                  <h3
                    className="
                      !m-0
                      text-xs
                      font-bold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {property.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      !m-0
                      mt-1
                      text-xs
                      font-normal
                      leading-5
                      text-[#7890b2]
                    "
                  >
                    {property.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}