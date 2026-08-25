export default function SandboxApiAuthentication() {
  const rows = [
    {
      concern: "Credential binding",
      behavior: (
        <>
          Sandbox credentials are bound to the sandbox environment —{" "}
          <strong className="font-bold">
            never presented as promotable to production
          </strong>
        </>
      ),
    },
    {
      concern: "Method parity",
      behavior:
        "Whether the sandbox uses the same authentication method is a fidelity question, answered by the matrix",
    },
    {
      concern: "Permissions",
      behavior:
        "Role and scope behavior may differ; differences are stated rather than assumed absent",
    },
    {
      concern: "Secret handling",
      behavior:
        "Locked Authentication lifecycle applies in full — no secret in logs, URLs or diagnostics",
    },
    {
      concern: "Rotation",
      behavior:
        "Test credential rotation uses the same governed lifecycle",
    },
    {
      concern: "Identifiers",
      behavior:
        "Sandbox object identifiers do not exist in production",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#f7f8fa]">
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
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            sm:gap-10

            lg:gap-11
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
                API &amp; authentication in sandbox
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                !max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]
              "
            >
              Environment-bound credentials, never promoted.
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
              Authentication owns every mechanism. What this page adds is the
              environment boundary around it.
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
            <div className="grid grid-cols-[208px_minmax(0,1fr)] bg-[#fafbfc]">
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
                  Concern
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
                  Required behavior
                </span>
              </div>
            </div>

            {/* ROWS */}
            {rows.map((row, index) => (
              <div
                key={row.concern}
                className={`
                  grid
                  grid-cols-[208px_minmax(0,1fr)]
                  ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                <div className="px-4 py-3.5">
                  <span className="text-sm font-semibold leading-5 text-[#091127]">
                    {row.concern}
                  </span>
                </div>

                <div className="px-4 py-3.5">
                  <span className="text-sm font-normal leading-5 text-[#5d7192]">
                    {row.behavior}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
          <div className="flex w-full flex-col gap-4 md:hidden">
            {rows.map((row) => (
              <div
                key={row.concern}
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
                {/* CONCERN */}
                <div
                  className="
                    border-b
                    border-[#e8ecf2]
                    bg-[#fafbfc]
                    px-5
                    py-4
                  "
                >
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    {row.concern}
                  </span>
                </div>

                {/* REQUIRED BEHAVIOR */}
                <div className="px-5 py-4">
                  <p className="mb-1 text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Required behavior
                  </p>

                  <p className="text-sm font-normal leading-6 text-[#5d7192]">
                    {row.behavior}
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