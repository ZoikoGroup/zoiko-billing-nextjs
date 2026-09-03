const items = [
  {
    title: "Organization",
    description:
      "— the top-level operating relationship according to the product model, not an unlimited hierarchy.",
  },
  {
    title: "Entity",
    description:
      "— entity-separated billing context only where Multi-Entity capability is available.",
  },
  {
    title: "Business unit or team",
    description:
      "— operational scope where configuration supports it, not arbitrary organizational trees on every plan.",
  },
  {
    title: "Customer ownership",
    description:
      "— Customer Record authority stays explicit by scope; nothing is shared across entities automatically.",
  },
  {
    title: "Document identity",
    description:
      "— issuer and entity context where supported, without a universal statutory-compliance claim.",
  },
  {
    title: "Data visibility",
    description:
      "— scoped by permission and entity boundary; cross-entity access is never the default.",
  },
];

export default function EntityBoundaries() {
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

            lg:flex-row
            lg:items-center
            lg:gap-12

            xl:gap-14
          "
        >
          {/* IMAGE */}
          <div
            className="
              w-full
              flex-1
              rounded-3xl
              bg-[#eef0f3]
              p-3

              sm:p-4
            "
          >
            <img
              src="/images/enterprise-organizations/entity-boundaries.png"
              alt="Organization, entity and control boundaries"
              className="
                h-auto
                min-h-[280px]
                w-full
                rounded-2xl
                object-cover

                sm:min-h-[380px]

                lg:min-h-[420px]

                xl:min-h-[519px]
              "
            />
          </div>

          {/* CONTENT */}
          <div
            className="
              flex
              w-full
              flex-1
              flex-col
              items-start
              gap-3
              pt-2

              lg:pt-2
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
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
                Organization, entity &amp; control boundaries
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
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
              Entity separation is not consolidated accounting.
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
              Multi-entity billing can coordinate entity-separated billing
              where the capability is available. On its own it provides no
              general-ledger consolidation, intercompany accounting, statutory
              consolidation, revenue recognition or tax filing.
            </p>

            {/* LIST */}
            <div className="flex w-full flex-col pt-1">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="
                    flex
                    w-full
                    items-start
                    gap-3
                    py-2

                    sm:py-2.5
                  "
                >
                  {/* BULLET */}
                  <span
                    className="
                      mt-2
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-[2px]
                      bg-[#7890b2]
                    "
                  />

                  {/* ITEM CONTENT */}
                  <div
                    className="
                      flex
                      w-full
                      flex-col
                      gap-0.5

                      sm:flex-row
                      sm:items-start
                    "
                  >
                    <span
                      className="
                        shrink-0
                        text-sm
                        font-bold
                        leading-6
                        text-[#5d7192]

                        sm:mr-2
                      "
                    >
                      {item.title}
                    </span>

                    <span
                      className="
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.description}
                    </span>
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