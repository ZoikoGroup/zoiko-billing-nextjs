export default function LocalPaymentMethodModel() {
  const dimensions = [
    {
      number: "01",
      title: "Method",
      description: "Which family or governed named method.",
      active: true,
    },
    {
      number: "02",
      title: "Market context",
      description: "Where the statement applies.",
    },
    {
      number: "03",
      title: "Billing context",
      description: "The commercial and operating scope.",
    },
    {
      number: "04",
      title: "Currency context",
      description: "Related, never a substitute.",
    },
    {
      number: "05",
      title: "Authority",
      description: "Who owns, reviews and approves.",
    },
    {
      number: "06",
      title: "Evidence",
      description: "What supports it, and over what period.",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#f7f7f7]">
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
              <span className="h-px w-4 shrink-0 bg-blue-600 opacity-40" />

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
                Six-part local payment method model
              </span>

              <span className="h-px w-4 shrink-0 bg-blue-600 opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[680px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#111827]

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              Six dimensions behind one support statement.
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
              Select a dimension to focus the registry below.
            </p>
          </div>

          {/* DIMENSION CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3

              sm:grid-cols-2

              md:grid-cols-3

              lg:grid-cols-6
              lg:gap-2
            "
          >
            {dimensions.map((dimension) => (
              <div
                key={dimension.number}
                className={`
                  flex
                  min-h-[174px]
                  w-full
                  flex-col
                  rounded-[10px]
                  px-3
                  pb-6
                  pt-3
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                  ${
                    dimension.active
                      ? "bg-[#f2f2f2] outline outline-2 outline-offset-[-2px] outline-blue-600"
                      : "bg-white outline outline-1 outline-offset-[-1px] outline-[#e1e5eb]"
                  }
                `}
              >
                {/* NUMBER */}
                <span className="text-[9px] leading-4 text-blue-600">
                  {dimension.number}
                </span>

                {/* TITLE */}
                <span className="mt-[3px] text-xs font-bold leading-4 text-[#111827]">
                  {dimension.title}
                </span>

                {/* DESCRIPTION */}
                <span className="mt-4 text-xs font-normal leading-4 text-[#5d7192]">
                  {dimension.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}