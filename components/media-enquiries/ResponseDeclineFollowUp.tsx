export default function ResponseDeclineFollowUp() {
  const rows = [
    {
      state: "Received",
      happens:
        "Receipt is confirmed with a summary of what was submitted.",
      boundary: "Receipt is not a promise of response.",
      warning: true,
    },
    {
      state: "Needs clarification",
      happens:
        "Missing topic, questions or deadline context is requested.",
      boundary: "Only what is necessary is asked for.",
      warning: false,
    },
    {
      state: "Misrouted",
      happens:
        "Redirected to sales, support, partners, legal or privacy.",
      boundary: "The correct route is named, not just refused.",
      warning: false,
    },
    {
      state: "Duplicate",
      happens:
        "A neutral message with a reference where supported.",
      boundary: "No inference about the sender.",
      warning: false,
    },
    {
      state: "Deadline passed",
      happens:
        "Submission is still accepted if the request remains relevant.",
      boundary: "No retroactive response guarantee.",
      warning: true,
    },
    {
      state: "Unable to support",
      happens: "Respectful closure.",
      boundary: "No internal detail is disclosed in declining.",
      warning: true,
    },
    {
      state: "Source unavailable",
      happens:
        "Specialist review continues, or the request is declined.",
      boundary: "Facts are never improvised to fill a gap.",
      warning: true,
    },
    {
      state: "System error",
      happens:
        "Data preserved where safe; retry or an approved alternate path offered.",
      boundary: "No silent loss of a submitted request.",
      warning: false,
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
                Response, decline &amp; follow-up
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
              Eight outcomes, and none of them is a guaranteed reply.
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
              Stating the possible outcomes plainly is more useful to a
              journalist on deadline than an implied promise.
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
                bg-[#253b5f]
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
                  State
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
                  What happens
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
                key={row.state}
                className={`
                  grid
                  grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                  ${index !== rows.length - 1 ? "border-b border-[#edf0f4]" : ""}
                `}
              >
                {/* STATE */}
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
                    {row.state}
                  </span>
                </div>

                {/* WHAT HAPPENS */}
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
                    {row.happens}
                  </span>
                </div>

                {/* BOUNDARY */}
                <div
                  className={`
                    px-3.5
                    py-3
                    ${row.warning ? "bg-[#fafafa]" : "bg-white"}
                  `}
                >
                  <span
                    className={`
                      text-xs
                      leading-5
                      ${
                        row.warning
                          ? "font-bold text-[#7f1d1d]"
                          : "font-normal text-[#091127]"
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
          <div className="flex w-full flex-col gap-4 md:hidden">
            {rows.map((row) => (
              <div
                key={row.state}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* STATE */}
                <div className="border-b border-[#edf0f4] bg-[#fafbfc] px-5 py-4">
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
                    State
                  </p>

                  <p
                    className="
                      !m-0
                      mt-1.5
                      text-sm
                      font-bold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {row.state}
                  </p>
                </div>

                {/* WHAT HAPPENS */}
                <div className="border-b border-[#edf0f4] px-5 py-4">
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
                    What happens
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
                    {row.happens}
                  </p>
                </div>

                {/* BOUNDARY */}
                <div
                  className={`
                    px-5
                    py-4
                    ${row.warning ? "bg-[#fafafa]" : "bg-white"}
                  `}
                >
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
                      ${
                        row.warning
                          ? "font-bold text-[#7f1d1d]"
                          : "font-normal text-[#5d7192]"
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