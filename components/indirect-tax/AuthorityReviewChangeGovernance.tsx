export default function AuthorityReviewChangeGovernance() {
  const rows = [
    {
      responsibility: "Context owner",
      scope: "Owns a context record and its currentness.",
      boundary: "Ownership is not interpretation.",
    },
    {
      responsibility: "Tax specialist",
      scope: "Provides qualified indirect-tax interpretation.",
      boundary:
        "The only role that can interpret; cannot be substituted by a page or a product.",
    },
    {
      responsibility: "Publication reviewer",
      scope:
        "Confirms public wording is supportable by the evidence.",
      boundary: "Separate from specialist review.",
    },
    {
      responsibility: "Operations consumer",
      scope:
        "Uses context downstream in configuration or process.",
      boundary:
        "Consuming context is not confirming it applies.",
    },
    {
      responsibility: "Evidence custodian",
      scope:
        "Maintains supporting material and access boundaries.",
      boundary:
        "Controlled evidence shows an indicator only.",
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

            md:gap-11
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[1000px]
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
                Authority, review &amp; change governance
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
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
              Five responsibilities, and only one can
              <br className="hidden sm:block" />
              interpret.
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
              Generic governance categories.{" "}
              <span className="font-bold">
                None is a Zoiko Billing product role or permission.
              </span>
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
                  Responsibility
                </span>
              </div>

              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Recommended scope
                </span>
              </div>

              <div className="px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Boundary
                </span>
              </div>
            </div>

            {/* ROWS */}
            {rows.map((row, index) => (
              <div
                key={row.responsibility}
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
                {/* RESPONSIBILITY */}
                <div className="border-r border-[#edf0f4] bg-[#fafafa] px-3.5 py-3">
                  <span className="text-xs font-bold leading-5 text-[#091127]">
                    {row.responsibility}
                  </span>
                </div>

                {/* SCOPE */}
                <div className="border-r border-[#edf0f4] px-3.5 py-3">
                  <span className="text-xs font-normal leading-5 text-[#091127]">
                    {row.scope}
                  </span>
                </div>

                {/* BOUNDARY */}
                <div className="bg-[#fdf8f8] px-3.5 py-3">
                  <span className="text-xs font-bold leading-5 text-red-900">
                    {row.boundary}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
          <div className="flex w-full flex-col gap-4 md:hidden">
            {rows.map((row) => (
              <div
                key={row.responsibility}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* RESPONSIBILITY */}
                <div className="border-b border-[#edf0f4] bg-[#fafafa] px-4 py-3">
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Responsibility
                  </p>

                  <p className="!m-0 mt-1 text-sm font-bold leading-5 text-[#091127]">
                    {row.responsibility}
                  </p>
                </div>

                {/* RECOMMENDED SCOPE */}
                <div className="border-b border-[#edf0f4] px-4 py-4">
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Recommended scope
                  </p>

                  <p className="!m-0 mt-1.5 text-sm leading-6 text-[#091127]">
                    {row.scope}
                  </p>
                </div>

                {/* BOUNDARY */}
                <div className="bg-[#fdf8f8] px-4 py-4">
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-red-700">
                    Boundary
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-bold leading-6 text-red-900">
                    {row.boundary}
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