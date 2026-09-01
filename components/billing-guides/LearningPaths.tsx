export default function LearningPaths() {
  const paths = [
    {
      path: "Billing foundations",
      outcome:
        "Customer records → roles and approvals → invoices → schedules → delivery.",
      rule: (
        <>
          Every step independently accessible; the path is optional
        </>
      ),
    },
    {
      path: "Invoice-to-payment operations",
      outcome:
        "Invoices → AR → payments → reconciliation → outstanding balances → reporting.",
      rule: (
        <>
          <strong>No implied one-size-fits-all workflow</strong>; source scope
          visible
        </>
      ),
    },
    {
      path: "Implementation readiness",
      outcome:
        "Operating model → data and readiness → roles and governance → integrations → testing → rollout → support.",
      rule: (
        <>
          <strong>No invented migration tooling or service commitments</strong>
        </>
      ),
    },
    {
      path: "Developer context",
      outcome:
        "Billing lifecycle → API Overview → Authentication → Webhooks → Sandbox → SDKs & Examples → Build an Integration.",
      rule: <>Technical details remain in Developers</>,
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
                Learning paths
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
              Four ordered paths, every step independently accessible.
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
              A path shows sequence and your location during the session. It
              invents no persistent progress, badges, certifications or
              saved-learning state.
            </p>
          </div>

          {/* TABLE CONTAINER */}
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
            {/* ================= DESKTOP TABLE ================= */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[minmax(160px,0.8fr)_minmax(0,2.4fr)_minmax(220px,1.2fr)]
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
                    Path
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
                    Ordered outcome
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
                    Rule
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {paths.map((item, index) => (
                <div
                  key={item.path}
                  className={`
                    grid
                    grid-cols-[minmax(160px,0.8fr)_minmax(0,2.4fr)_minmax(220px,1.2fr)]
                    ${
                      index !== paths.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* PATH */}
                  <div className="px-4 py-4">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.path}
                    </span>
                  </div>

                  {/* OUTCOME */}
                  <div className="px-4 py-4">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.outcome}
                    </span>
                  </div>

                  {/* RULE */}
                  <div className="px-4 py-4">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.rule}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= MOBILE TABLE ================= */}
            <div className="flex flex-col md:hidden">
              {paths.map((item, index) => (
                <div
                  key={item.path}
                  className={`
                    p-5
                    sm:p-6
                    ${
                      index !== paths.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* PATH */}
                  <div className="mb-5">
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
                      Path
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
                      {item.path}
                    </p>
                  </div>

                  {/* ORDERED OUTCOME */}
                  <div className="mb-5">
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
                      Ordered outcome
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
                      {item.outcome}
                    </p>
                  </div>

                  {/* RULE */}
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
                      Rule
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
                      {item.rule}
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