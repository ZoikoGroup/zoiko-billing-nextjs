export default function SandboxProductionTransition() {
  const rows = [
    {
      doText:
        "Obtain production credentials through the approved Authentication path.",
      doNot:
        "That sandbox credentials can be promoted or reused",
    },
    {
      doText:
        "Reconfigure production endpoints, subscriptions, identifiers and environment settings.",
      doNot:
        "That sandbox IDs, objects or URLs exist in production",
    },
    {
      doText:
        "Revalidate every behavior marked Representative, Simulated, Unavailable or Unverified.",
      doNot:
        "That a sandbox success proves production parity",
      doNotStrong: true,
    },
    {
      doText:
        "Confirm real-world side effects, limits, security, compliance, support and monitoring.",
      doNot:
        "That test behavior covers settlement, communications, regulatory effects or third parties",
    },
    {
      doText:
        "Use a production launch checklist with a named owner and approver.",
      doNot:
        'That a "Go live" button is sufficient governance',
    },
    {
      doText: "Preserve safe evidence from testing.",
      doNot:
        "That sandbox data should be migrated into production",
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
                Transition to production
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
              No promotion mechanism exists by default.
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
              Sandbox and production are separate environments with separate
              credentials, identifiers, data and configuration.
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
            <div className="grid grid-cols-2 bg-[#fafbfc]">
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
                  Do
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
                  Do not imply
                </span>
              </div>
            </div>

            {/* TABLE ROWS */}
            {rows.map((row, index) => (
              <div
                key={index}
                className={`
                  grid
                  grid-cols-2
                  ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                <div className="border-r border-[#edf0f4] px-4 py-3.5">
                  <span className="text-sm font-semibold leading-5 text-[#091127]">
                    {row.doText}
                  </span>
                </div>

                <div className="px-4 py-3.5">
                  <span
                    className={`text-sm leading-5 text-[#5d7192] ${
                      row.doNotStrong ? "font-bold" : "font-normal"
                    }`}
                  >
                    {row.doNot}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
          <div className="flex w-full flex-col gap-4 md:hidden">
            {rows.map((row, index) => (
              <div
                key={index}
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
                {/* DO */}
                <div className="border-b border-[#e8ecf2] px-5 py-4">
                  <p className="mb-1 text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Do
                  </p>

                  <p className="text-sm font-semibold leading-6 text-[#091127]">
                    {row.doText}
                  </p>
                </div>

                {/* DO NOT IMPLY */}
                <div className="bg-[#fafbfc] px-5 py-4">
                  <p className="mb-1 text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Do not imply
                  </p>

                  <p
                    className={`text-sm leading-6 text-[#5d7192] ${
                      row.doNotStrong ? "font-bold" : "font-normal"
                    }`}
                  >
                    {row.doNot}
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