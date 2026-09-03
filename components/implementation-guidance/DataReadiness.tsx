export default function DataReadiness() {
  const rows = [
    {
      area: "Inventory",
      question:
        "Which source systems hold billing-relevant data, and who owns each?",
      authority: "Your data owners",
    },
    {
      area: "Source of truth",
      question:
        "For each object and field, which system is authoritative once live?",
      authority: "Your architecture decision",
    },
    {
      area: "Identifiers",
      question:
        "How are customers and documents identified across systems, and do those identifiers reconcile?",
      authority: "Documentation for product concepts",
      linked: true,
    },
    {
      area: "Quality",
      question:
        "What duplicates, gaps and inconsistencies exist, and who resolves them?",
      authority: "Your data owners",
    },
    {
      area: "History",
      question:
        "How much historical data is genuinely needed operationally, and why?",
      authority: "Your finance and audit requirements",
    },
    {
      area: "Open items",
      question:
        "How will in-flight documents, balances and partial payments be handled at cutover?",
      authority: "Your process decision",
    },
    {
      area: "Reconciliation",
      question:
        "What counts, totals and balances must agree before launch is accepted?",
      authority: "Your acceptance criteria",
    },
    {
      area: "Test data",
      question:
        "What data may be used in non-production environments, under what controls?",
      authority: "Trust · Privacy · your policy",
    },
  ];

  return (
    <section
    id = "implementation-readiness"
     className="w-full bg-[#f7f8fa]">
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
                Data readiness
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
              Eight data questions to answer before
             
              configuring anything.
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
              Data preparation is guidance on principles.{" "}
              <strong className="font-bold">
                No supported import format, migration tool or conversion
                capability is implied.
              </strong>
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
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              md:block
            "
          >
            {/* HEADER */}
            <div
              className="
                grid
                grid-cols-[144px_minmax(0,1fr)_320px]
                bg-[#fafbfc]
              "
            >
              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Area
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Question to resolve
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Authority
                </span>
              </div>
            </div>

            {/* ROWS */}
            {rows.map((row, index) => (
              <div
                key={row.area}
                className={`
                  grid
                  grid-cols-[144px_minmax(0,1fr)_320px]
                  ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* AREA */}
                <div className="px-4 py-3.5">
                  <span className="text-sm font-semibold leading-5 text-[#091127]">
                    {row.area}
                  </span>
                </div>

                {/* QUESTION */}
                <div className="px-4 py-3.5">
                  <span className="text-sm font-normal leading-5 text-[#5d7192]">
                    {row.question}
                  </span>
                </div>

                {/* AUTHORITY */}
                <div className="px-4 py-3.5">
                  {row.linked ? (
                    <span className="text-sm leading-5 text-[#5d7192]">
                      <span className="font-semibold text-[#526f99]">
                        Documentation
                      </span>{" "}
                      for product concepts
                    </span>
                  ) : (
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.authority}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
          <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] md:hidden">
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
                <div className="mb-4">
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Area
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                    {row.area}
                  </p>
                </div>

                {/* QUESTION */}
                <div className="mb-4">
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Question to resolve
                  </p>

                  <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                    {row.question}
                  </p>
                </div>

                {/* AUTHORITY */}
                <div>
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Authority
                  </p>

                  {row.linked ? (
                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      <span className="font-semibold text-[#526f99]">
                        Documentation
                      </span>{" "}
                      for product concepts
                    </p>
                  ) : (
                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.authority}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}