export default function FeaturedCurrentGuides() {
  const rows = [
    {
      rule: "Eligibility",
      requirement:
        "Published and current, substantive, accessible, review date current, authoritative sources current, no unresolved claims issue",
    },
    {
      rule: "Count",
      requirement: "One featured plus up to three supporting guides",
    },
    {
      rule: "Selection",
      requirement: (
        <>
          Editorial and user value with current priority —{" "}
          <strong>not opaque personalization</strong>
        </>
      ),
    },
    {
      rule: "Metadata",
      requirement:
        "Task, topic, audience, last reviewed, and a scope note where needed",
    },
    {
      rule: "Fallback",
      requirement: (
        <strong>Omit the section if nothing meets the gate</strong>
      ),
    },
    {
      rule: "Truth-impact block",
      requirement: (
        <>
          A guide with unresolved truth impact from a changed source{" "}
          <strong>cannot be newly featured</strong>
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
                Featured current guides
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
              One featured guide, up to three supporting.
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
              Selection is editorial and value-based, never opaque
              personalization — and the section is omitted when nothing meets
              the gate.
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
            {/* ================= DESKTOP ================= */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[minmax(160px,0.45fr)_minmax(0,2.55fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Rule
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Requirement
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.rule}
                  className={`
                    grid
                    grid-cols-[minmax(160px,0.45fr)_minmax(0,2.55fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* RULE */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {row.rule}
                    </span>
                  </div>

                  {/* REQUIREMENT */}
                  <div className="px-4 py-3.5">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {row.requirement}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= MOBILE ================= */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.rule}
                  className={`
                    p-5
                    sm:p-6
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* RULE */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.14em]
                        text-[#7890b2]
                      "
                    >
                      Rule
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-semibold
                        leading-6
                        text-[#091127]
                      "
                    >
                      {row.rule}
                    </p>
                  </div>

                  {/* REQUIREMENT */}
                  <div>
                    <p
                      className="
                        !m-0
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.14em]
                        text-[#7890b2]
                      "
                    >
                      Requirement
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
                      {row.requirement}
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