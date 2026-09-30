export default function OwnershipEscalationMap() {
  const rows = [
    {
      responsibility: "Executive owner",
      scope: "Sets outcome, risk tolerance and escalation expectations.",
      boundary: "Not a verified Zoiko Billing role.",
      boldBoundary: true,
    },
    {
      responsibility: "Billing / finance owner",
      scope: "Owns operating decisions, policy and review cadence.",
      boundary: "Generic responsibility category.",
      boldBoundary: false,
    },
    {
      responsibility: "Operations owner",
      scope: "Owns process execution and exception follow-up.",
      boundary: "Generic responsibility category.",
      boldBoundary: false,
    },
    {
      responsibility: "Technical owner",
      scope:
        "Owns integration and change coordination and technical dependencies.",
      boundary: (
        <>
          Routes deeper detail to{" "}
          <strong className="font-bold">Developers and IT</strong>.
        </>
      ),
      boldBoundary: false,
    },
    {
      responsibility: "Reviewer / assurance",
      scope:
        "Provides independent review where the organization requires it.",
      boundary: "Does not imply certification or regulated assurance.",
      boldBoundary: true,
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
                Ownership &amp; escalation map
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
              Five responsibilities — and none of
              <br className="hidden sm:block" />
              them is a Zoiko Billing role.
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
              These are generic responsibility categories for your
              organization to assign, not product roles or permissions.
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
                grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                bg-[#091127]
              "
            >
              <div
                className="
                  border-b
                  border-r
                  border-white/15
                  px-3.5
                  py-3
                "
              >
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
                  Responsibility
                </span>
              </div>

              <div
                className="
                  border-b
                  border-r
                  border-white/15
                  px-3.5
                  py-3
                "
              >
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
                  Recommended scope
                </span>
              </div>

              <div className="border-b border-white/15 px-3.5 py-3">
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
                <div
                  className="
                    border-r
                    border-[#edf0f4]
                    bg-[#fbfbfc]
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
                    {row.responsibility}
                  </span>
                </div>

                {/* RECOMMENDED SCOPE */}
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
                    {row.scope}
                  </span>
                </div>

                {/* BOUNDARY */}
                <div className="bg-[#fdfdfd] px-3.5 py-3">
                  <span
                    className={`
                      text-xs
                      leading-5
                      text-red-900
                      ${
                        row.boldBoundary
                          ? "font-bold"
                          : "font-normal"
                      }
                    `}
                  >
                    {row.boundary}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
          <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] md:hidden">
            {rows.map((row, index) => (
              <div
                key={row.responsibility}
                className={`
                  p-5
                  ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* RESPONSIBILITY */}
                <div className="mb-4">
                  <p
                    className="
                      !m-0
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    Responsibility
                  </p>

                  <p
                    className="
                      !m-0
                      mt-1.5
                      text-sm
                      font-semibold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {row.responsibility}
                  </p>
                </div>

                {/* RECOMMENDED SCOPE */}
                <div className="mb-4">
                  <p
                    className="
                      !m-0
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    Recommended scope
                  </p>

                  <p
                    className="
                      !m-0
                      mt-1.5
                      text-sm
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    {row.scope}
                  </p>
                </div>

                {/* BOUNDARY */}
                <div>
                  <p
                    className="
                      !m-0
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    Boundary
                  </p>

                  <p
                    className={`
                      !m-0
                      mt-1.5
                      text-sm
                      leading-6
                      text-red-900
                      ${
                        row.boldBoundary
                          ? "font-bold"
                          : "font-normal"
                      }
                    `}
                  >
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