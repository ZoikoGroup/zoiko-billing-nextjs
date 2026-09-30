const rows = [
  {
    need: "Learn why and how to do the task",
    destination: "Billing Guides",
    highlight: true,
    behavior: "Link to the educational guide before or after the template",
  },
  {
    need: "Current product behavior",
    destination: "Product · Documentation",
    behavior: "A template never replaces mutable product truth",
    bold: true,
  },
  {
    need: "Account-specific issue",
    destination: "Help Center · Contact Support",
    behavior: "Do not embed support diagnosis in a static template",
  },
  {
    need: "Pricing or plan",
    destination: "Pricing",
    highlight: true,
    behavior: "No commercial values inside a template",
    bold: true,
  },
  {
    need: "Security or privacy",
    destination: "Trust Center · Security",
    behavior: "No duplicate assurance claims",
  },
  {
    need: "Technical implementation",
    destination: "Developers",
    behavior:
      "No API, authentication, webhook or SDK facts in a general template",
  },
];

export default function AuthorityHandoffs() {
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
          {/* Intro */}
          <div
            className="
              flex
              w-full
              max-w-[800px]
              flex-col
              items-center
              gap-3
              text-center
            "
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-4 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.14em]
                  text-[#7890b2]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Related guides &amp; authority handoffs
              </span>

              <span className="h-px w-4 bg-[#7890b2] opacity-40" />
            </div>

            <h2
              className="
                !m-0
                w-full
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
              A template structures work. It does
              <br className="hidden sm:block" /> not settle questions.
            </h2>

            <p
              className="
                !m-0
                w-full
                max-w-[720px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              Six needs, each owned by a system that can answer authoritatively.
            </p>
          </div>

          {/* Desktop Table */}
          <div
            className="
              hidden
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_6px_20px_rgba(15,23,42,0.04)]
              md:block
            "
          >
            <div className="grid grid-cols-[320px_288px_minmax(0,1fr)] bg-[#f7f8fa]">
              {["Need", "Destination", "Template behavior"].map((title) => (
                <div
                  key={title}
                  className="
                    border-b
                    border-[#dfe5ee]
                    px-5
                    py-4
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.14em]
                      text-[#7890b2]
                    "
                  >
                    {title}
                  </span>
                </div>
              ))}
            </div>

            {rows.map((row, index) => (
              <div
                key={row.need}
                className={`
                  grid
                  grid-cols-[320px_288px_minmax(0,1fr)]
                  transition-colors
                  hover:bg-[#f7f8fa]/70
                  ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                <div className="px-5 py-4">
                  <p className="!m-0 text-sm font-semibold leading-6 text-[#091127]">
                    {row.need}
                  </p>
                </div>

                <div className="px-5 py-4">
                  <p
                    className={`
                      !m-0
                      text-sm
                      leading-6
                      ${
                        row.highlight
                          ? "font-semibold text-blue-600"
                          : "font-normal text-[#5d7192]"
                      }
                    `}
                  >
                    {row.destination}
                  </p>
                </div>

                <div className="px-5 py-4">
                  <p
                    className={`
                      !m-0
                      text-sm
                      leading-6
                      ${
                        row.bold
                          ? "font-bold text-[#5d7192]"
                          : "font-normal text-[#5d7192]"
                      }
                    `}
                  >
                    {row.behavior}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="flex w-full flex-col gap-3 md:hidden">
            {rows.map((row) => (
              <div
                key={row.need}
                className="
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_6px_20px_rgba(15,23,42,0.04)]
                "
              >
                <div className="flex flex-col">
                  {/* Need */}
                  <div className="border-b border-[#edf0f4] px-5 py-4">
                    <p
                      className="
                        !m-0
                        mb-1.5
                        text-[11px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Need
                    </p>

                    <p className="!m-0 text-sm font-semibold leading-6 text-[#091127]">
                      {row.need}
                    </p>
                  </div>

                  {/* Destination */}
                  <div className="border-b border-[#edf0f4] px-5 py-4">
                    <p
                      className="
                        !m-0
                        mb-1.5
                        text-[11px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Destination
                    </p>

                    <p
                      className={`
                        !m-0
                        text-sm
                        leading-6
                        ${
                          row.highlight
                            ? "font-semibold text-blue-600"
                            : "font-normal text-[#5d7192]"
                        }
                      `}
                    >
                      {row.destination}
                    </p>
                  </div>

                  {/* Template Behavior */}
                  <div className="px-5 py-4">
                    <p
                      className="
                        !m-0
                        mb-1.5
                        text-[11px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Template behavior
                    </p>

                    <p
                      className={`
                        !m-0
                        text-sm
                        leading-6
                        ${
                          row.bold
                            ? "font-bold text-[#5d7192]"
                            : "font-normal text-[#5d7192]"
                        }
                      `}
                    >
                      {row.behavior}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}