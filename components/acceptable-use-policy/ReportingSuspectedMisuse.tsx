const reportingRows = [
  {
    element: "Route",
    required:
      "A single governed reporting destination, approved by Legal and Operations.",
    mustNot: "Invent an address, form or intake channel.",
  },
  {
    element: "Required information",
    required:
      "Minimal structured fields sufficient to identify the concern.",
    mustNot: "Request unnecessary sensitive or personal data.",
  },
  {
    element: "Acknowledgement",
    required:
      "Confirm receipt only if the process actually sends one.",
    mustNot: "Promise a response time with no SLA behind it.",
  },
  {
    element: "Outcome expectation",
    required:
      "State plainly what a reporter will and will not be told.",
    mustNot: "Imply the reporter learns the outcome.",
  },
  {
    element: "Contextual link",
    required:
      "A report link may appear beside a category.",
    mustNot: "Imply that a violation has occurred.",
  },
  {
    element: "Urgent safety concerns",
    required:
      "Direct to emergency services where relevant.",
    mustNot:
      "Position this route as an emergency channel.",
  },
];

export default function ReportingSuspectedMisuse() {
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
                Reporting suspected misuse
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
              A governed route, and six things the form must not do.
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
              Reporting is the one interactive element on a legal page, which
              makes it the one that can do harm.
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
            {/* TABLE HEADER */}
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
                  Element
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
                  Required behavior
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
                  Must not
                </span>
              </div>
            </div>

            {/* TABLE ROWS */}
            {reportingRows.map((row, index) => (
              <div
                key={row.element}
                className={`
                  grid
                  grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                  ${
                    index !== reportingRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* ELEMENT */}
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
                    {row.element}
                  </span>
                </div>

                {/* REQUIRED BEHAVIOR */}
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
                    {row.required}
                  </span>
                </div>

                {/* MUST NOT */}
                <div
                  className="
                    bg-[#fffafa]
                    px-3.5
                    py-3
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      leading-5
                      text-red-900
                    "
                  >
                    {row.mustNot}
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
            {reportingRows.map((row, index) => (
              <article
                key={row.element}
                className={`
                  p-5
                  sm:p-6
                  ${
                    index !== reportingRows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* ELEMENT */}
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
                    Element
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
                    {row.element}
                  </p>
                </div>

                {/* REQUIRED BEHAVIOR */}
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
                    Required behavior
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
                    {row.required}
                  </p>
                </div>

                {/* MUST NOT */}
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
                    Must not
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
                    {row.mustNot}
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