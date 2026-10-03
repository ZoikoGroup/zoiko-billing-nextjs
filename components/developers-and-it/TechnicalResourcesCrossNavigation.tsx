export default function TechnicalResourcesCrossNavigation() {
  const rows = [
    {
      need: "Interface specifics and technical contracts",
      authority: (
        <>
          <a href="#" className="font-semibold text-blue-600">
            Documentation
          </a>{" "}
          · Developers
        </>
      ),
      whyNotHere: "Versioned technical truth with its own release cycle",
    },
    {
      need: "What Zoiko Billing connects to today",
      authority: (
        <a href="#" className="font-semibold text-blue-600">
          Integrations
        </a>
      ),
      whyNotHere:
        "Verified registry with availability, region and health as separate fields",
    },
    {
      need: "Whether an integration applies in your market",
      authority: (
        <a href="#" className="font-semibold text-blue-600">
          Integration availability
        </a>
      ),
      whyNotHere:
        "An integration existing is not the same as it applying everywhere",
    },
    {
      need: "The record model the platform maintains",
      authority: "Product",
      whyNotHere:
        "Owns the connected-record model and state semantics",
    },
    {
      need: "An account-specific integration failure",
      authority: (
        <a href="#" className="font-semibold text-blue-600">
          Integration Support
        </a>
      ),
      whyNotHere: (
        <>
          <strong>Never a public page</strong> — account context is required
        </>
      ),
    },
    {
      need: "Submitting an integration you built",
      authority: (
        <a href="#" className="font-semibold text-blue-600">
          Submit an Integration
        </a>
      ),
      whyNotHere:
        "Technical review intake, with its own governance",
    },
    {
      need: "Commercial terms and entitlement",
      authority: (
        <a href="#" className="font-semibold text-blue-600">
          Pricing
        </a>
      ),
      whyNotHere:
        "API and sandbox limits are commercial facts, not architectural ones",
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

            sm:gap-6
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
                Technical resources &amp; cross-navigation
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
              Where the answers this page
              <br className="hidden sm:block" />
              withholds actually live.
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
              Each destination owns a class of technical truth with its own
              release cycle.
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
              {/* TABLE TITLE */}
              <div
                className="
                  border-b
                  border-[#dfe5ee]
                  bg-[#fafbfc]
                  px-5
                  py-4
                "
              >
                <span className="text-sm leading-5 text-[#5d7192]">
                  Question, authority and why it is not answered here.
                </span>
              </div>

              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[minmax(0,0.85fr)_minmax(0,0.58fr)_minmax(0,1.25fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3">
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
                    What you need
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3">
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
                    Authority
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3">
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
                    Why not here
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={row.need}
                  className={`
                    grid
                    grid-cols-[minmax(0,0.85fr)_minmax(0,0.58fr)_minmax(0,1.25fr)]
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* WHAT YOU NEED */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {row.need}
                    </span>
                  </div>

                  {/* AUTHORITY */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm leading-5 text-[#5d7192]">
                      {row.authority}
                    </span>
                  </div>

                  {/* WHY NOT HERE */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm leading-5 text-[#5d7192]">
                      {row.whyNotHere}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.need}
                  className={`
                    p-5
                    ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* WHAT YOU NEED */}
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
                      What you need
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
                      {row.need}
                    </p>
                  </div>

                  {/* AUTHORITY */}
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
                      Authority
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
                      {row.authority}
                    </p>
                  </div>

                  {/* WHY NOT HERE */}
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
                      Why not here
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
                      {row.whyNotHere}
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