"use client";

const dimensions = [
  {
    number: "01",
    title: "Offer",
    description: (
      <>
        Which product, plan or charge is priced.{" "}
        <strong>No invented live catalog.</strong>
      </>
    ),
  },
  {
    number: "02",
    title: "Price basis",
    description: (
      <>
        The authoritative commercial basis. <strong>Source-owned.</strong>
      </>
    ),
  },
  {
    number: "03",
    title: "Presentation currency",
    description: (
      <>
        What the buyer sees.{" "}
        <strong>Implies no currency or payment support.</strong>
      </>
    ),
    active: true,
  },
  {
    number: "04",
    title: "Conversion context",
    description: (
      <>
        What governed reference explains a derived amount.{" "}
        <strong>No FX execution.</strong>
      </>
    ),
  },
  {
    number: "05",
    title: "Authority",
    description: <>Who owns and reviews the price.</>,
  },
  {
    number: "06",
    title: "Effective time",
    description: <>Current, scheduled or superseded.</>,
  },
  {
    number: "07",
    title: "Evidence",
    description: <>What source and change record supports it.</>,
  },
];

export default function SevenPartMultiCurrencyPricing() {
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
            gap-5
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
                Seven-part multi-currency pricing model
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
              Seven dimensions behind every
              <br className="hidden sm:block" /> displayed amount.
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
              Select a dimension to focus the registry below.{" "}
              <strong className="font-bold">
                Exact price values stay hidden
              </strong>{" "}
              unless approved, and none is approved here.
            </p>
          </div>

          {/* DIMENSION CARDS */}
          <div
            className="
              w-full
              pt-5
            "
          >
            <div
              className="
                grid
                w-full
                grid-cols-1
                gap-3

                sm:grid-cols-2

                lg:grid-cols-4

                xl:grid-cols-7
              "
            >
              {dimensions.map((dimension) => (
                <div
                  key={dimension.number}
                  className={`
                    flex
                    min-h-[190px]
                    w-full
                    flex-col
                    items-start
                    gap-[3px]
                    rounded-2xl
                    px-3
                    py-5
                    shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                    outline
                    outline-1
                    outline-offset-[-1px]

                    ${
                      dimension.active
                        ? "bg-[#f5f7fa] outline-blue-600"
                        : "bg-white outline-[#dfe5ee]"
                    }
                  `}
                >
                  {/* NUMBER */}
                  <div className="w-full">
                    <span
                      className="
                        text-[9px]
                        font-normal
                        leading-4
                        text-[#7890b2]
                      "
                    >
                      {dimension.number}
                    </span>
                  </div>

                  {/* TITLE */}
                  <div className="w-full pb-[0.63px]">
                    <h3
                      className="
                        !m-0
                        text-xs
                        font-bold
                        leading-4
                        text-[#091127]
                      "
                    >
                      {dimension.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="w-full pt-0.5">
                    <p
                      className="
                        !m-0
                        text-xs
                        font-normal
                        leading-4
                        text-[#5d7192]
                      "
                    >
                      {dimension.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE NOTE */}
          <p
            className="
              !m-0
              block
              w-full
              pt-1
              text-center
              text-xs
              leading-5
              text-[#7890b2]

              sm:text-sm

              xl:hidden
            "
          >
            Scroll or resize to explore all seven pricing dimensions.
          </p>
        </div>
      </div>
    </section>
  );
}