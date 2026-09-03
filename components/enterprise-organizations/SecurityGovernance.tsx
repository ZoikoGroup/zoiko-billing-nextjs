const securityRows = [
  {
    area: "Security architecture",
    statement:
      'Approved controls and evidence only. "Enterprise-grade" is not used as shorthand for a control set.',
  },
  {
    area: "Privacy",
    statement:
      "Purpose limitation, access, minimization, retention and rights routes.",
  },
  {
    area: "Data governance",
    statement:
      "Source and authority, mapping, permissions, export and disposition, and currentness.",
  },
  {
    area: "Encryption",
    statement:
      "Only evidence-backed methods and scope. No blanket marketing wording.",
  },
  {
    area: "Audit logs",
    statement:
      "Only the actual product and audit coverage that exists.",
  },
  {
    area: "Availability & resilience",
    statement:
      "System Status and approved reliability evidence. No invented service level, disaster-recovery target, recovery-time or recovery-point objective.",
  },
  {
    area: "Business continuity",
    statement: "Only current public continuity evidence.",
  },
  {
    area: "Data residency & localization",
    statement: "Only approved options and markets.",
  },
  {
    area: "Responsible disclosure",
    statement: "A dedicated route, not Sales.",
  },
];

export default function SecurityGovernance() {
  return (
    <section className="w-full bg-white">
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
                Security, privacy, data governance &amp; resilience
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
              Diligence before sales, and no shorthand.
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
              Trust, Security, Privacy, Accessibility, System Status,
              responsible disclosure and public legal evidence stay accessible
              without an enterprise lead form.
            </p>
          </div>

          {/* DESKTOP / TABLET TABLE */}
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
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse">
                <thead>
                  <tr className="bg-[#fafbfc]">
                    <th
                      className="
                        w-[22%]
                        border-b
                        border-[#dfe5ee]
                        px-4
                        py-3.5
                        text-left
                        text-xs
                        font-bold
                        uppercase
                        leading-4
                        tracking-wide
                        text-[#7890b2]
                      "
                    >
                      Area
                    </th>

                    <th
                      className="
                        w-[78%]
                        border-b
                        border-[#dfe5ee]
                        px-4
                        py-3.5
                        text-left
                        text-xs
                        font-bold
                        uppercase
                        leading-4
                        tracking-wide
                        text-[#7890b2]
                      "
                    >
                      How it is stated publicly
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {securityRows.map((row, index) => {
                    const isLast = index === securityRows.length - 1;

                    return (
                      <tr key={row.area}>
                        <td
                          className={`
                            px-4
                            py-3.5
                            align-top
                            text-sm
                            font-semibold
                            leading-5
                            text-[#091127]
                            ${!isLast ? "border-b border-[#edf0f4]" : ""}
                          `}
                        >
                          {row.area}
                        </td>

                        <td
                          className={`
                            px-4
                            py-3.5
                            align-top
                            text-sm
                            font-normal
                            leading-5
                            text-[#5d7192]
                            ${!isLast ? "border-b border-[#edf0f4]" : ""}
                          `}
                        >
                          {row.statement}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* MOBILE CARDS */}
          <div
            className="
              flex
              w-full
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              md:hidden
            "
          >
            {securityRows.map((row, index) => {
              const isLast = index === securityRows.length - 1;

              return (
                <div
                  key={row.area}
                  className={`
                    flex
                    flex-col
                    gap-2.5
                    p-5
                    ${!isLast ? "border-b border-[#edf0f4]" : ""}
                  `}
                >
                  {/* AREA LABEL */}
                  <span
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    Area
                  </span>

                  {/* AREA */}
                  <h3
                    className="
                      !m-0
                      text-sm
                      font-semibold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {row.area}
                  </h3>

                  {/* STATEMENT LABEL */}
                  <span
                    className="
                      pt-1
                      text-[11px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    How it is stated publicly
                  </span>

                  {/* STATEMENT */}
                  <p
                    className="
                      !m-0
                      text-sm
                      font-normal
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    {row.statement}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}