const enforcementRows = [
  {
    component: "Review / investigation",
    treatment: "A dedicated section if Legal approves one.",
    doNotInvent:
      "Who investigates, the evidence standard, or any timeline.",
  },
  {
    component: "Protective restrictions",
    treatment: "Described only from approved text.",
    doNotInvent:
      "Automatic suspension, rate limiting or blocking rights.",
  },
  {
    component: "Suspension / termination",
    treatment:
      "Operative clause plus summary, only after approval.",
    doNotInvent:
      "Triggers, duration, notice or restoration.",
  },
  {
    component: "Content or data action",
    treatment:
      "Only where the policy authorises it and the product supports it.",
    doNotInvent:
      "Removal, deletion, preservation or quarantine behavior.",
  },
  {
    component: "Cooperation / legal process",
    treatment: "Only if Legal text includes it.",
    doNotInvent:
      "Law-enforcement disclosure rules.",
  },
  {
    component: "Remediation",
    treatment: "Optional approved steps a user may take.",
    doNotInvent: "Guaranteed reinstatement.",
  },
];

export default function InvestigationEnforcementRemediation() {
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
                Investigation, enforcement & remediation
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
              Six components, and the UI must not create any of them.
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
              <strong className="font-bold text-[#5d7192]">
                All substantive enforcement rights and user remedies require
                Legal-approved policy language.
              </strong>{" "}
              The interface must not create rights, timelines or limitations
              the policy does not contain.
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
                  Potential component
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
                  Wireframe treatment
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
                  Do not invent
                </span>
              </div>
            </div>

            {/* ROWS */}
            {enforcementRows.map((row, index) => (
              <div
                key={row.component}
                className={`
                  grid
                  grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                  ${
                    index !== enforcementRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* COMPONENT */}
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
                    {row.component}
                  </span>
                </div>

                {/* TREATMENT */}
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
                    {row.treatment}
                  </span>
                </div>

                {/* DO NOT INVENT */}
                <div className="bg-[#fffafa] px-3.5 py-3">
                  <span
                    className="
                      text-xs
                      font-bold
                      leading-5
                      text-red-900
                    "
                  >
                    {row.doNotInvent}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
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
            {enforcementRows.map((row, index) => (
              <article
                key={row.component}
                className={`
                  p-5

                  sm:p-6

                  ${
                    index !== enforcementRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* COMPONENT */}
                <div>
                  <p
                    className="
                      !m-0
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.16em]
                      text-[#7890b2]

                      sm:text-xs
                    "
                  >
                    Potential component
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
                    {row.component}
                  </p>
                </div>

                {/* TREATMENT */}
                <div className="mt-5">
                  <p
                    className="
                      !m-0
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.16em]
                      text-[#7890b2]

                      sm:text-xs
                    "
                  >
                    Wireframe treatment
                  </p>

                  <p
                    className="
                      !m-0
                      mt-1.5
                      text-sm
                      font-normal
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    {row.treatment}
                  </p>
                </div>

                {/* DO NOT INVENT */}
                <div
                  className="
                    mt-5
                    rounded-xl
                    border
                    border-[#f0dede]
                    bg-[#fffafa]
                    p-4
                  "
                >
                  <p
                    className="
                      !m-0
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.16em]
                      text-red-900

                      sm:text-xs
                    "
                  >
                    Do not invent
                  </p>

                  <p
                    className="
                      !m-0
                      mt-1.5
                      text-sm
                      font-bold
                      leading-6
                      text-red-900
                    "
                  >
                    {row.doNotInvent}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}