export default function FrameworkMappingSemantics() {
  const rows = [
    {
      term: "Referenced",
      meaning:
        "An artifact mentions or relates to a framework or requirement.",
      implication: (
        <>
          <strong>Conformance, assessment or certification.</strong> A document
          naming a framework has not been measured against it.
        </>
      ),
    },
    {
      term: "Mapped",
      meaning:
        "A mapping links controls or evidence to framework requirements.",
      implication: (
        <>
          <strong>Independent validation or certification.</strong> A mapping
          is our own analysis, not someone else's verdict.
        </>
      ),
    },
    {
      term: "Assessed",
      meaning:
        "A defined assessment occurred under a stated method and scope.",
      implication: (
        <>
          <strong>Certification</strong>, unless one was explicitly issued.
        </>
      ),
    },
    {
      term: "Attested / audited",
      meaning:
        "Authorized assurance exists, with an exact report scope and period.",
      implication: (
        <>
          <strong>Universal compliance outside that scope and period.</strong> A
          report covers what it covers, when it covered it.
        </>
      ),
    },
    {
      term: "Certified",
      meaning:
        "Used only where a current approved certificate explicitly establishes it.",
      implication: (
        <>
          <strong>
            That all products, entities and regions are covered.
          </strong>{" "}
          A certificate has a defined boundary.
        </>
      ),
    },
    {
      term: "Not established",
      meaning:
        "No approved public source supports the requested status.",
      implication: (
        <>
          <strong>Failure or noncompliance.</strong> Absence of evidence is not
          evidence of absence — in either direction.
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
                Framework mapping semantics
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
              Six terms on a ladder, and only one means certified.
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
              These words get used interchangeably in procurement
              conversations. They are not interchangeable, and the difference
              between adjacent rungs is substantial.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div className="hidden w-full overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] md:block">
            {/* HEADER */}
            <div className="grid grid-cols-[144px_minmax(0,1fr)_minmax(0,1fr)] bg-[#233b5d]">
              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Term
                </span>
              </div>

              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  What it means here
                </span>
              </div>

              <div className="px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  What it must not imply
                </span>
              </div>
            </div>

            {/* ROWS */}
            {rows.map((row, index) => (
              <div
                key={row.term}
                className={`
                  grid
                  grid-cols-[144px_minmax(0,1fr)_minmax(0,1fr)]
                  ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* TERM */}
                <div className="bg-[#fafbfc] px-3.5 py-3">
                  <span className="text-xs font-bold leading-5 text-[#091127]">
                    {row.term}
                  </span>
                </div>

                {/* MEANING */}
                <div className="border-l border-[#edf0f4] px-3.5 py-3">
                  <span className="text-xs font-normal leading-5 text-[#091127]">
                    {row.meaning}
                  </span>
                </div>

                {/* IMPLICATION */}
                <div className="border-l border-[#edf0f4] bg-[#fffafa] px-3.5 py-3">
                  <span className="text-xs font-normal leading-5 text-[#b42318]">
                    {row.implication}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE CARDS */}
          <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] md:hidden">
            {rows.map((row, index) => (
              <div
                key={row.term}
                className={`
                  p-5
                  ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* TERM */}
                <div className="mb-4">
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Term
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-bold leading-5 text-[#091127]">
                    {row.term}
                  </p>
                </div>

                {/* WHAT IT MEANS */}
                <div className="mb-4">
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    What it means here
                  </p>

                  <p className="!m-0 mt-1.5 text-sm leading-6 text-[#091127]">
                    {row.meaning}
                  </p>
                </div>

                {/* WHAT IT MUST NOT IMPLY */}
                <div className="rounded-xl bg-[#fffafa] p-4">
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#b42318]">
                    What it must not imply
                  </p>

                  <p className="!m-0 mt-1.5 text-sm leading-6 text-[#b42318]">
                    {row.implication}
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