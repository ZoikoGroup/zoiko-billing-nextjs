export default function RolesResponsibilityArchitecture() {
  const rows = [
    {
      category: "Policy owner",
      responsibility:
        "Maintains the rule and decides when it changes.",
      boundary: "Not a Zoiko Billing permission or product role.",
      boundaryBold: true,
    },
    {
      category: "Requester",
      responsibility:
        "Proposes a change or an exception with a reason.",
      boundary: "Generic category.",
      boundaryBold: false,
    },
    {
      category: "Approver",
      responsibility:
        "Reviews a material change before it becomes effective.",
      boundary:
        "Separation from the requester is an organizational choice, not a product guarantee.",
      boundaryBold: true,
    },
    {
      category: "Exception owner",
      responsibility:
        "Owns a controlled deviation and its resolution path.",
      boundary: "Distinct from the policy owner by design.",
      boundaryBold: false,
    },
    {
      category: "Reviewer",
      responsibility:
        "Periodically confirms the rule still fits the operation.",
      boundary:
        "Does not imply audit, certification or assurance.",
      boundaryBold: true,
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
                Roles &amp; responsibility architecture
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
              Five responsibilities — none of them a
             
              product role name.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-[3px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Exact product role names are forbidden in this mockup, so these
              are organizational categories for you to map.
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
                  grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                  bg-[#17294d]
                "
              >
                <div className="border-r border-white/15 px-3.5 py-3">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Category
                  </span>
                </div>

                <div className="border-r border-white/15 px-3.5 py-3">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Typical responsibility
                  </span>
                </div>

                <div className="px-3.5 py-3">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white
                    "
                  >
                    Boundary
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.category}
                  className="
                    grid
                    grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                    border-t
                    border-[#edf0f4]
                  "
                >
                  {/* CATEGORY */}
                  <div
                    className="
                      border-r
                      border-[#edf0f4]
                      bg-[#fafbfc]
                      px-3.5
                      py-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-bold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.category}
                    </span>
                  </div>

                  {/* RESPONSIBILITY */}
                  <div
                    className="
                      border-r
                      border-[#edf0f4]
                      px-3.5
                      py-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-normal
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.responsibility}
                    </span>
                  </div>

                  {/* BOUNDARY */}
                  <div
                    className="
                      bg-[#f8f8f9]
                      px-3.5
                      py-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        leading-5
                        text-red-900
                      "
                    >
                      {row.boundaryBold ? (
                        <strong>{row.boundary}</strong>
                      ) : (
                        row.boundary
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.category}
                  className={`
                    flex
                    flex-col
                    gap-4
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* CATEGORY */}
                  <div>
                    <p
                      className="
                        !m-0
                        mb-1.5
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Category
                    </p>

                    <p
                      className="
                        !m-0
                        text-xs
                        font-bold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.category}
                    </p>
                  </div>

                  {/* RESPONSIBILITY */}
                  <div>
                    <p
                      className="
                        !m-0
                        mb-1.5
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Typical responsibility
                    </p>

                    <p
                      className="
                        !m-0
                        text-xs
                        font-normal
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.responsibility}
                    </p>
                  </div>

                  {/* BOUNDARY */}
                  <div
                    className="
                      rounded-lg
                      bg-[#f8f8f9]
                      p-3
                    "
                  >
                    <p
                      className="
                        !m-0
                        mb-1.5
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Boundary
                    </p>

                    <p
                      className="
                        !m-0
                        text-xs
                        leading-5
                        text-red-900
                      "
                    >
                      {row.boundaryBold ? (
                        <strong>{row.boundary}</strong>
                      ) : (
                        row.boundary
                      )}
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