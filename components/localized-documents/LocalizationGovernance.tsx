const rows = [
  {
    action: "Create or edit a draft template",
    authority:
      "Content or design role, scoped to entity, surface and language",
  },
  {
    action: "Edit controlled legal or tax text",
    authority:
      "Restricted authority, with source, reviewer and effective period required",
  },
  {
    action: "Add a language resource",
    authority:
      "Localization or content role, with source and review state",
  },
  {
    action: "Publish a template or resource",
    authority:
      "Release permission with all required approvals complete",
  },
  {
    action: "Change entity applicability",
    authority:
      "Entity or control permission, with an impact preview",
  },
  {
    action: "Change jurisdiction applicability",
    authority:
      "Jurisdiction, legal or product authority — no editor-only override",
  },
  {
    action: "Change fallback policy",
    authority:
      "Localization or product owner, with testing required",
  },
  {
    action: "Override a missing-string block",
    authority:
      "Restricted exception permission, plus reason and expiry or effective scope",
  },
  {
    action: "Retire a language or template",
    authority:
      "A versioned future-state action; issued history is retained",
  },
  {
    action: "Export localization resources",
    authority:
      "Permissioned, with sensitive controlled text handled per policy",
  },
];

export default function LocalizationGovernance() {
  return (
    <section className="w-full overflow-hidden bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
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
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-9

            sm:gap-10

            lg:gap-11
          "
        >
          {/* HEADER */}
          <div
            className="
              flex
              w-full
              max-w-[1000px]
              flex-col
              items-center
              gap-3
              pt-2
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-center
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
                Permissions, approvals &amp; localization governance
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
                text-center
                !text-[30px]
                !font-extrabold
                !leading-[1.12]
                !tracking-[-0.035em]
                !text-[#091127]

                sm:!text-[36px]

                md:!text-[40px]

                lg:!text-4xl
                lg:!leading-10
              "
            >
              A design editor cannot self-authorize
              <br className="hidden sm:block" />
              legal text.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-center
                text-sm
                font-normal
                leading-6
                text-[#5d7192]

                sm:text-[15px]
                sm:leading-7

                md:text-base
              "
            >
              Nor can they silently expand a template to new entities or
              markets without the required approval path.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#e1e5eb]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* TABLE INTRO */}
            <div
              className="
                border-b
                border-[#e1e5eb]
                bg-[#fbfbfc]
                px-5
                py-4
              "
            >
              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-5
                  text-[#5d7192]
                "
              >
                Actions and the authority required to perform them.
              </p>
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[300px_minmax(0,1fr)]
                  border-b
                  border-[#e1e5eb]
                  bg-[#fbfbfc]
                "
              >
                <div className="border-r border-[#e1e5eb] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#7890b2]
                    "
                  >
                    Action
                  </span>
                </div>

                <div className="px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#7890b2]
                    "
                  >
                    Required authority
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.action}
                  className={`
                    grid
                    grid-cols-[300px_minmax(0,1fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f3]"
                        : ""
                    }
                  `}
                >
                  {/* ACTION */}
                  <div
                    className="
                      border-r
                      border-[#edf0f3]
                      px-4
                      py-3.5
                    "
                  >
                    <p
                      className="
                        !m-0
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.action}
                    </p>
                  </div>

                  {/* AUTHORITY */}
                  <div className="px-4 py-3.5">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {row.authority}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="md:hidden">
              <div
                className="
                  border-b
                  border-[#e1e5eb]
                  bg-[#fbfbfc]
                  px-4
                  py-3

                  sm:px-5
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.1em]
                    text-[#7890b2]

                    sm:text-xs
                  "
                >
                  Governance actions
                </span>
              </div>

              {rows.map((row, index) => (
                <div
                  key={row.action}
                  className={`
                    flex
                    flex-col
                    gap-4
                    px-4
                    py-5

                    sm:px-5
                    sm:py-6

                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f3]"
                        : ""
                    }
                  `}
                >
                  {/* ACTION */}
                  <p
                    className="
                      !m-0
                      text-sm
                      font-semibold
                      leading-5
                      text-[#091127]

                      sm:text-base
                    "
                  >
                    {row.action}
                  </p>

                  {/* AUTHORITY */}
                  <div className="flex flex-col gap-1">
                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.08em]
                        text-[#7890b2]
                      "
                    >
                      Required authority
                    </span>

                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.authority}
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