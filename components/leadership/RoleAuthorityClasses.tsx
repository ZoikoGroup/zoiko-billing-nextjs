export default function RoleAuthorityClasses() {
  const rows = [
    {
      className: "Zoiko Billing leader",
      meaning:
        "An approved person accountable for a Zoiko Billing leadership domain.",
      implication: (
        <>
          <strong>Group executive, company director or contracting authority.</strong>{" "}
          Product accountability is not corporate office.
        </>
      ),
    },
    {
      className: "Zoiko Group leader",
      meaning:
        "A group-level leadership record owned by Zoiko Group authority.",
      implication: (
        <>
          Not duplicated locally <strong>unless an approved cross-listing exists</strong>{" "}
          — group leadership truth belongs to the group destination.
        </>
      ),
    },
    {
      className: "Legal director or officer",
      meaning:
        "A legal-company role taken from the legal or corporate record.",
      implication: (
        <>
          Shown <strong>only with explicit legal approval</strong>.{" "}
          <strong>Never inferred from a leadership title.</strong>
        </>
      ),
    },
    {
      className: "Acting or interim leader",
      meaning: "A temporary public leadership state.",
      implication: (
        <>
          Must carry <strong>explicit acting or interim wording and a review date</strong>{" "}
          — a temporary role presented as permanent misleads on both duration and
          authority.
        </>
      ),
    },
    {
      className: "Advisor, board or council",
      meaning: "A separate governance or advisory class.",
      implication: (
        <>
          <strong>Not operating leadership</strong> unless the source says so.
          Advisory involvement is not day-to-day accountability.
        </>
      ),
    },
    {
      className: "Former leader",
      meaning: "Historical only.",
      implication: (
        <>
          <strong>Absent from the default current roster.</strong> Archived only
          where approved historical value exists, and never in present-tense
          language.
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
                Role and authority classes
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
              Six classes, and the guardrail column prevents the common
              inference.
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
              Readers routinely assume a leadership listing implies corporate
              authority. Each class states what it does not establish.
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
              <div
                className="
                  grid
                  grid-cols-[176px_minmax(0,1.05fr)_minmax(0,1fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Class
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    What it means
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    What it does not imply
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.className}
                  className={`
                    grid
                    grid-cols-[176px_minmax(0,1.05fr)_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* CLASS */}
                  <div className="bg-[#fafbfc] px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.className}
                    </span>
                  </div>

                  {/* MEANING */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.meaning}
                    </span>
                  </div>

                  {/* IMPLICATION */}
                  <div className="bg-[#fafbfc] px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#c13b3b]">
                      {row.implication}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.className}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* CLASS */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Class
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {row.className}
                    </p>
                  </div>

                  {/* WHAT IT MEANS */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      What it means
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.meaning}
                    </p>
                  </div>

                  {/* WHAT IT DOES NOT IMPLY */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      What it does not imply
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#c13b3b]">
                      {row.implication}
                    </p>
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