export default function VersionGuide() {
  const rows = [
    {
      dimension: "SDK release",
      model: "Version and lifecycle state from the SDK registry",
    },
    {
      dimension: "Runtime",
      model: "Supported range from engineering validation",
    },
    {
      dimension: "API surface",
      model: "Relationship to the API Documentation source",
    },
    {
      dimension: "Example validation",
      model: "The last validated SDK, runtime and API combination",
    },
    {
      dimension: "Breaking change",
      model:
        "Explicit migration guidance and affected examples, if published",
    },
    {
      dimension: "Deprecation",
      model: (
        <>
          State, replacement and approved timeline —{" "}
          <strong>no invented dates</strong>
        </>
      ),
    },
    {
      dimension: "End of support",
      model:
        "Rendered only when the owner approves the exact date and meaning",
    },
    {
      dimension: "Compatibility filter",
      model: "Hide nothing critical; mismatch states remain explainable",
    },
    {
      dimension: "Stale content",
      model:
        "Mark needs review and suppress unsafe copy or install actions",
        emphasis: true,
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
                Versioning, compatibility &amp; release governance
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
              Stale content suppresses its own copy action.
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
              If validation is overdue or the source changed, the example is
              marked needs review and unsafe actions are withdrawn.
            </p>
          </div>

          {/* TABLE */}
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
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div className="grid grid-cols-[288px_minmax(0,1fr)] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Dimension
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Model
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.dimension}
                  className={`
                    grid
                    grid-cols-[288px_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.dimension}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <div
                      className={`text-sm leading-5 ${
                        row.emphasis
                          ? "font-bold text-[#5d7192]"
                          : "font-normal text-[#5d7192]"
                      }`}
                    >
                      {row.model}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.dimension}
                  className={`
                    p-5
                    sm:p-6
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* DIMENSION */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Dimension
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {row.dimension}
                    </p>
                  </div>

                  {/* MODEL */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Model
                    </p>

                    <div
                      className={`mt-1.5 text-sm leading-6 ${
                        row.emphasis
                          ? "font-bold text-[#5d7192]"
                          : "font-normal text-[#5d7192]"
                      }`}
                    >
                      {row.model}
                    </div>
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