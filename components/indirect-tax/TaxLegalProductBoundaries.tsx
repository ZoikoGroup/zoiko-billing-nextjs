export default function TaxLegalProductBoundaries() {
  const rows = [
    {
      topic: "Rates",
      allowed:
        "Explain that rate information would require a source and currentness.",
      prohibited: "Any specific rate or rate table.",
    },
    {
      topic: "Taxability",
      allowed: "Explain taxability as a decision area.",
      prohibited: "A taxable or exempt conclusion.",
    },
    {
      topic: "Nexus / registration",
      allowed: "Explain that registration context may matter.",
      prohibited: "Threshold, nexus or registration conclusion.",
    },
    {
      topic: "Exemptions",
      allowed: "Explain that exemption evidence may be relevant.",
      prohibited: "Specific exemption eligibility.",
    },
    {
      topic: "Filing / remittance",
      allowed: "Route to approved compliance and tax destinations.",
      prohibited: "Filing or remittance support, or deadlines.",
    },
    {
      topic: "Countries",
      allowed: (
        <>
          Route availability to{" "}
          <span className="font-semibold text-blue-600">
            Supported Countries
          </span>
          .
        </>
      ),
      prohibited: "Country support or compliance claims from this page.",
    },
    {
      topic: "Calculation",
      allowed:
        "Explain that tax calculation requires governed rules and capability.",
      prohibited:
        "Implying calculator or determination functionality without a product source.",
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
            gap-5

            sm:gap-8

            md:gap-10
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
              pb-px
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
                Tax, legal &amp; product boundaries
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
              Seven topics the page may frame — and what is prohibited without
              a source.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-1
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Each right-hand entry is the answer a reader wants and the page
              cannot give.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div
            className="
              hidden
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]

              md:block
            "
          >
            {/* HEADER */}
            <div className="grid grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)] bg-[#18345f]">
              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Topic
                </span>
              </div>

              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Allowed
                </span>
              </div>

              <div className="px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Prohibited without source
                </span>
              </div>
            </div>

            {/* ROWS */}
            {rows.map((row, index) => (
              <div
                key={row.topic}
                className={`
                  grid
                  grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]

                  ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* TOPIC */}
                <div className="border-r border-[#edf0f4] bg-[#fafafa] px-3.5 py-3">
                  <span className="text-xs font-bold leading-5 text-[#091127]">
                    {row.topic}
                  </span>
                </div>

                {/* ALLOWED */}
                <div className="border-r border-[#edf0f4] px-3.5 py-3">
                  <span className="text-xs font-normal leading-5 text-[#091127]">
                    {row.allowed}
                  </span>
                </div>

                {/* PROHIBITED */}
                <div className="bg-[#fdf8f8] px-3.5 py-3">
                  <span className="text-xs font-bold leading-5 text-red-900">
                    {row.prohibited}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
          <div className="flex w-full flex-col gap-4 md:hidden">
            {rows.map((row) => (
              <div
                key={row.topic}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* TOPIC */}
                <div className="border-b border-[#edf0f4] bg-[#fafafa] px-4 py-3">
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Topic
                  </p>

                  <p className="!m-0 mt-1 text-sm font-bold leading-5 text-[#091127]">
                    {row.topic}
                  </p>
                </div>

                {/* ALLOWED */}
                <div className="border-b border-[#edf0f4] px-4 py-4">
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Allowed
                  </p>

                  <p className="!m-0 mt-1.5 text-sm leading-6 text-[#091127]">
                    {row.allowed}
                  </p>
                </div>

                {/* PROHIBITED */}
                <div className="bg-[#fdf8f8] px-4 py-4">
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-red-700">
                    Prohibited without source
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-bold leading-6 text-red-900">
                    {row.prohibited}
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