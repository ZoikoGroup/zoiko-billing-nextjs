export default function PreviewDownloadContract() {
  const rows = [
    {
      area: "Preview fidelity",
      requirement:
        'Generated from the current asset version. If partial, label it "Preview — partial" and state what is omitted',
    },
    {
      area: "No surprise download",
      requirement:
        "A card opens detail or preview unless the published content is itself an HTML template. Auto-download is prohibited",
      boldPart: "Auto-download is prohibited",
    },
    {
      area: "Download disclosure",
      requirement:
        "Exact format, size, version and access requirement shown before activation",
      boldPart: "before",
    },
    {
      area: "Filename",
      requirement:
        "Human-readable and safe, with version semantics approved by content operations",
    },
    {
      area: "MIME & headers",
      requirement:
        "Correct content type and disposition — no browser-sniffing ambiguity",
    },
    {
      area: "Security",
      requirement:
        "The current asset must pass malware and unsafe-content review; macros and external links follow policy",
    },
    {
      area: "Accessibility",
      requirement:
        "The file passes asset audit, or an accessible alternative is clearly provided",
    },
    {
      area: "Analytics",
      requirement:
        "Track opens and downloads by template ID and version — never user-entered content",
      boldPart: "never user-entered content",
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
                Preview &amp; download contract
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
              Eight rules between a click and a file.
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
              A download is a security and accessibility event, not just a
              link.
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
            <div className="hidden overflow-x-auto md:block">
              <div className="min-w-[900px]">
                {/* HEADER */}
                <div className="grid grid-cols-[224px_minmax(0,1fr)] bg-[#fafbfc]">
                  <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                    <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                      Area
                    </span>
                  </div>

                  <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                    <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                      Requirement
                    </span>
                  </div>
                </div>

                {/* ROWS */}
                {rows.map((row, index) => (
                  <div
                    key={row.area}
                    className={`
                      grid
                      grid-cols-[224px_minmax(0,1fr)]
                      ${
                        index !== rows.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    <div className="px-4 py-3.5">
                      <span className="text-sm font-semibold leading-5 text-[#091127]">
                        {row.area}
                      </span>
                    </div>

                    <div className="px-4 py-3.5">
                      {row.boldPart ? (
                        <span className="text-sm leading-5 text-[#5d7192]">
                          {row.requirement.split(row.boldPart)[0]}
                          <strong className="font-bold text-[#5d7192]">
                            {row.boldPart}
                          </strong>
                          {row.requirement.split(row.boldPart)[1]}
                        </span>
                      ) : (
                        <span className="text-sm font-normal leading-5 text-[#5d7192]">
                          {row.requirement}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MOBILE TABLE */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.area}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* AREA */}
                  <div className="mb-3">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Area
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {row.area}
                    </p>
                  </div>

                  {/* REQUIREMENT */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Requirement
                    </p>

                    {row.boldPart ? (
                      <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                        {row.requirement.split(row.boldPart)[0]}
                        <strong className="font-bold text-[#5d7192]">
                          {row.boldPart}
                        </strong>
                        {row.requirement.split(row.boldPart)[1]}
                      </p>
                    ) : (
                      <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                        {row.requirement}
                      </p>
                    )}
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