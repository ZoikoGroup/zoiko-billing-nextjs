export default function ControlledEvidenceAccess() {
  const rows = [
    {
      rule: "Minimal request",
      requirement: (
        <>
          Reason and context{" "}
          <strong className="font-bold">
            only where genuinely needed
          </strong>{" "}
          for the access decision
        </>
      ),
    },
    {
      rule: "No forced sales consent",
      requirement: (
        <>
          <strong className="font-bold">
            Marketing consent is never bundled with an evidence request
          </strong>
          , and access is not conditioned on a sales conversation
        </>
      ),
    },
    {
      rule: "Policy-driven decision",
      requirement:
        "The access decision follows policy rather than commercial interest in the requester",
    },
    {
      rule: "No account enumeration",
      requirement:
        "The flow discloses nothing about whether an account exists beyond the approved path",
    },
    {
      rule: "Expiring access",
      requirement: (
        <>
          Signed URLs and tokens{" "}
          <strong className="font-bold">
            never remain reusable
          </strong>
          , and never appear in analytics
        </>
      ),
    },
    {
      rule: "Re-request",
      requirement:
        "Expired access can be safely re-requested where policy permits, without starting over",
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
                Controlled evidence access
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
              A request asks for context, not commitment.
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
              Six rules governing the request path, including the one that
              keeps it from becoming a sales gate.
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
                grid-cols-[176px_minmax(0,1fr)]
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
                  grid-cols-[176px_minmax(0,1fr)]
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
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {row.requirement}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
          <div className="flex w-full flex-col md:hidden">
            {rows.map((row, index) => (
              <div
                key={row.rule}
                className={`
                  w-full
                  bg-white
                  p-5
                  ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                  ${
                    index === 0
                      ? "rounded-t-2xl"
                      : ""
                  }
                  ${
                    index === rows.length - 1
                      ? "rounded-b-2xl"
                      : ""
                  }
                `}
              >
                {/* RULE */}
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
                    Rule
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
                    {row.rule}
                  </p>
                </div>

                {/* REQUIREMENT */}
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
                    Requirement
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
                    {row.requirement}
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