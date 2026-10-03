export default function SixPartFXDecisionModel() {
  const dimensions = [
    {
      number: "01",
      title: "Pair",
      description: <>The currencies involved in<br />the decision.</>,
      meta: "base / quote",
      active: true,
    },
    {
      number: "02",
      title: "Source",
      description: <>The governed source or<br />source class behind the<br />observation.</>,
      meta: "label · status · owner",
    },
    {
      number: "03",
      title: "Time",
      description: <>When the observation was<br />made and when the decision<br />becomes relevant.</>,
      meta: <>observed · effective ·<br />reviewed</>,
    },
    {
      number: "04",
      title: "Basis",
      description: (
        <>
          The contextual basis,{" "}
          <strong>
            without<br />exposing unsupported<br />pricing logic
          </strong>
          .
        </>
      ),
      meta: "context · type · note",
    },
    {
      number: "05",
      title: "Authority",
      description: <>Who can propose, review and<br />approve.</>,
      meta: "owner · review · approval",
    },
    {
      number: "06",
      title: "Evidence",
      description: <>What preserves reviewability<br />afterwards.</>,
      meta: <>reference · reason ·<br />supersession</>,
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
                Six-part FX decision model
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
              Six dimensions around every
              <br className="hidden sm:block" />
              conversion decision.
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
              Select a dimension to focus the illustrative workspace below.{" "}
              <strong className="font-bold">
                All field names are
                <br className="hidden sm:block" /> recommended, not verified
                product fields.
              </strong>
            </p>
          </div>

          {/* DIMENSION CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-2.5
              pt-2.5

              sm:grid-cols-2

              lg:grid-cols-3

              xl:grid-cols-6
            "
          >
            {dimensions.map((dimension) => (
              <div
                key={dimension.number}
                className={`
                  flex
                  min-h-[192px]
                  w-full
                  flex-col
                  items-start
                  gap-1
                  rounded-2xl
                  px-3.5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  outline
                  outline-1
                  outline-offset-[-1px]

                  ${
                    dimension.active
                      ? "bg-[#f3f5f8] outline-blue-600"
                      : "bg-white outline-[#dfe5ee]"
                  }
                `}
              >
                {/* NUMBER */}
                <div className="w-full pt-5">
                  <span className="text-[9.5px] font-normal leading-4 text-[#7890b2]">
                    {dimension.number}
                  </span>
                </div>

                {/* TITLE */}
                <div className="w-full">
                  <h3 className="!m-0 text-sm font-bold leading-5 text-[#091127]">
                    {dimension.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="w-full pt-px pb-2">
                  <p className="!m-0 text-xs font-normal leading-4 text-[#5d7192]">
                    {dimension.description}
                  </p>
                </div>

                {/* META */}
                <div className="mt-auto w-full border-t border-[#e6e9ee] pt-1.5">
                  <p className="!m-0 text-[10px] font-normal leading-4 text-[#7890b2]">
                    {dimension.meta}
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