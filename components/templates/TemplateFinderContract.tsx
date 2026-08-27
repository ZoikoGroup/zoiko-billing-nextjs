export default function TemplateFinderContract() {
  const rows = [
    {
      label: "Scope",
      value: "Published current public template registry only",
    },
    {
      label: "Primary filters",
      value: "Task, billing topic, audience",
    },
    {
      label: "Secondary filters",
      value: (
        <>
          Template type and format{" "}
          <strong>only when inventory supports meaningful facets</strong>
        </>
      ),
    },
    {
      label: "Access state",
      value:
        "Public, account-required or sales-assisted — only from approved registry state",
    },
    {
      label: "Result count",
      value: "Visible with a polite live-region announcement",
    },
    {
      label: "URL state",
      value:
        "Search and filter query states default to noindex unless curated",
    },
    {
      label: "Analytics privacy",
      value: (
        <>
          Controlled filter values only —{" "}
          <strong>no raw free text by default</strong>
        </>
      ),
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
                Template finder contract
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
              No surprise downloads.
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
              Clicking a card opens detail or preview. Auto-download is
              prohibited, and format, size, version and access requirement are
              disclosed before any activation.
            </p>
          </div>

          {/* CONTENT */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-5

              md:flex-row
              md:items-start
            "
          >
            {/* TABLE / CARD */}
            <div
              className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                md:flex-1
              "
            >
              {/* TABLE HEADER */}
              <div
                className="
                  border-b
                  border-[#dfe5ee]
                  bg-[#fafbfc]
                  px-5
                  py-4
                "
              >
                <span className="text-sm font-normal leading-5 text-[#5d7192]">
                  Finder behavior.
                </span>
              </div>

              {/* DESKTOP TABLE */}
              <div className="hidden md:block">
                {rows.map((row, index) => (
                  <div
                    key={row.label}
                    className={`
                      grid
                      grid-cols-[144px_minmax(0,1fr)]
                      ${
                        index !== rows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    <div className="px-4 py-3.5">
                      <span className="text-sm font-semibold leading-5 text-[#091127]">
                        {row.label}
                      </span>
                    </div>

                    <div className="px-4 py-3.5">
                      <span className="text-sm font-normal leading-5 text-[#5d7192]">
                        {row.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* MOBILE */}
              <div className="flex flex-col md:hidden">
                {rows.map((row, index) => (
                  <div
                    key={row.label}
                    className={`
                      p-5
                      ${
                        index !== rows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      {row.label}
                    </p>

                    <div className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <div
              className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                md:flex-1
              "
            >
              <img
                src="/images/templates/template-finder.png"
                alt="Template finder interface preview"
                className="
                  block
                  h-auto
                  w-full
                  object-cover
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}