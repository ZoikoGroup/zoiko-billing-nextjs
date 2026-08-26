export default function AmountControlPrinciples() {
  const principles = [
    {
      number: "01",
      title: "Every amount has a source",
      description:
        "Manual entry, product, contract, order, usage, schedule, import, API or integration.",
    },
    {
      number: "02",
      title: "Type and direction are explicit",
      description:
        "Whether an amount increases or reduces what is owed is stated, never inferred.",
    },
    {
      number: "03",
      title: "Calculation is reviewable",
      description:
        "Inputs, rule version, effective dates and rounding are all visible on the record.",
    },
    {
      number: "04",
      title: "Sensitive changes need review",
      description:
        "Price, discount, override and correction actions can require approval.",
    },
    {
      number: "05",
      title: "Corrections preserve relationships",
      description:
        "Issued amounts are corrected through related records, never overwritten.",
    },
    {
      number: "06",
      title: "Availability varies",
      description:
        "Plan, integration, entity, currency and jurisdiction all affect what is available.",
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
            max-w-[1220px]
            flex-col
            items-start
            gap-8

            sm:gap-10

            md:gap-11
          "
        >
          {/* PRINCIPLES */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
            "
          >
            {/* DESKTOP */}
            <div className="hidden md:grid md:grid-cols-6">
              {principles.map((principle, index) => (
                <div
                  key={principle.number}
                  className={`
                    flex
                    min-h-[270px]
                    flex-col
                    items-start
                    bg-white
                    px-5
                    pt-5
                    pb-10
                    ${index !== principles.length - 1
                      ? "border-r border-[#e5e7eb]"
                      : ""}
                  `}
                >
                  {/* NUMBER */}
                  <div className="w-full">
                    <span
                      className="
                        text-[9.6px]
                        font-normal
                        leading-4
                        tracking-wide
                        text-[#5b8fc4]
                      "
                    >
                      {principle.number}
                    </span>
                  </div>

                  {/* TITLE */}
                  <div className="w-full pt-1 pb-1">
                    <h3
                      className="
                        m-0
                        text-base
                        font-semibold
                        leading-5
                        text-[#08233f]
                      "
                    >
                      {principle.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      m-0
                      mt-1
                      text-sm
                      font-normal
                      leading-5
                      text-[#4f6687]
                    "
                  >
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>

            {/* MOBILE / TABLET */}
            <div className="flex flex-col md:hidden">
              {principles.map((principle, index) => (
                <div
                  key={principle.number}
                  className={`
                    flex
                    flex-col
                    items-start
                    bg-white
                    p-5

                    sm:p-6

                    ${index !== principles.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""}
                  `}
                >
                  {/* NUMBER */}
                  <span
                    className="
                      text-[9.6px]
                      font-normal
                      leading-4
                      tracking-wide
                      text-[#5b8fc4]
                    "
                  >
                    {principle.number}
                  </span>

                  {/* TITLE */}
                  <h3
                    className="
                      m-0
                      mt-2
                      text-base
                      font-semibold
                      leading-5
                      text-[#08233f]
                    "
                  >
                    {principle.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      m-0
                      mt-2
                      max-w-[600px]
                      text-sm
                      font-normal
                      leading-6
                      text-[#4f6687]
                    "
                  >
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* OPERATING BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#5b8fc4]
              bg-[#f7f8fa]
              px-5
              py-6

              sm:px-6
              sm:py-7

              md:px-7
              md:py-7
            "
          >
            {/* LABEL */}
            <div className="w-full">
              <span
                className="
                  text-[9.9px]
                  font-normal
                  uppercase
                  leading-4
                  tracking-wide
                  text-[#5b8fc4]
                "
              >
                Operating boundary
              </span>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                m-0
                mt-2
                w-full
                max-w-[761px]
                text-base
                font-normal
                leading-7
                text-[#08233f]
              "
            >
              This is governed amount control, not a universal pricing, usage-rating,
              tax or accounting engine. A calculated amount is configured and
              reviewable — it is not automatically contractually or legally correct.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}