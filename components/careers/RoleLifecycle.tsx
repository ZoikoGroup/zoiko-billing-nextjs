const rows = [
  {
    commitment: "Roles listed here are real",
    practice: (
      <>
        Every listing comes from the job-posting registry.{" "}
        <strong>A role not on this page is not one we are hiring for</strong>,
        regardless of where you saw it.
      </>
    ),
  },
  {
    commitment: "This page collects nothing",
    practice: (
      <>
        No resume, identity document, compensation expectation or demographic
        data is collected on this route —{" "}
        <strong>application intake belongs to the approved system</strong>.
      </>
    ),
  },
  {
    commitment: "No payment is ever required",
    practice: (
      <>
        Not to apply, not to interview, not for equipment.{" "}
        <strong>Any payment request is fraudulent</strong>.
      </>
    ),
  },
  {
    commitment: "No credentials are ever requested",
    practice: (
      <>
        Not passwords, not bank details, not login secrets of any kind, at any
        stage.
      </>
    ),
  },
  {
    commitment: (
      <>
        Accommodations do not require
        <br className="hidden sm:block" /> disclosure
      </>
    ),
    practice: (
      <>
        A request asks what adjustment would help —{" "}
        <strong>not for a diagnosis, category or documentation</strong>.
      </>
    ),
  },
  {
    commitment: "Verify the channel",
    practice:
      "Recruitment channels not listed with a role are not channels we use. Check the role here before responding to any approach.",
    last: true,
  },
];

export default function RoleLifecycle() {
  return (
    <section className="w-full bg-[#091127]">
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
            gap-6

            sm:gap-8

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
              <span className="h-px w-4 shrink-0 bg-white opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-white/55

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Role lifecycle
              </span>

              <span className="h-px w-4 shrink-0 bg-white opacity-40" />
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
                !text-white

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              Six states, and closing a role removes
              more than the button.
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
                text-white/72

                sm:text-base
              "
            >
              A closed role that keeps its structured data continues appearing
              in job-search results — which is how candidates end up applying
              to something that no longer exists.
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
              {/* HEADER */}
              <div className="grid grid-cols-[288px_minmax(0,1fr)] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Commitment
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    In practice
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`
                    grid
                    grid-cols-[288px_minmax(0,1fr)]
                    ${
                      !row.last
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* COMMITMENT */}
                  <div className="px-4 py-3.5">
                    <span
                      className={`
                        text-sm
                        leading-5
                        text-[#091127]
                        ${
                          index === rows.length - 1
                            ? "font-black"
                            : "font-semibold"
                        }
                      `}
                    >
                      {row.commitment}
                    </span>
                  </div>

                  {/* IN PRACTICE */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {row.practice}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`
                    p-5
                    ${
                      !row.last
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* COMMITMENT */}
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
                      Commitment
                    </p>

                    <p
                      className={`
                        !m-0
                        mt-1.5
                        text-sm
                        leading-5
                        text-[#091127]
                        ${
                          index === rows.length - 1
                            ? "font-black"
                            : "font-semibold"
                        }
                      `}
                    >
                      {row.commitment}
                    </p>
                  </div>

                  {/* IN PRACTICE */}
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
                      In practice
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
                      {row.practice}
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