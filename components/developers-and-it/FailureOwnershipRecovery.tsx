export default function FailureOwnershipRecovery() {
  const rows = [
    {
      failureClass: "Input / data quality",
      guidance:
        "Identify validation ownership and how malformed or incomplete input is surfaced.",
      doNotClaim: "Exact validation codes or field names.",
    },
    {
      failureClass: "Transport / connectivity",
      guidance: "Identify detection and escalation responsibility.",
      doNotClaim: "Retry cadence, timeout, network architecture or uptime.",
    },
    {
      failureClass: "Authorization / access",
      guidance: "Identify the controlled access owner and the evidence path.",
      doNotClaim: "Auth protocol, token format or credential lifecycle.",
    },
    {
      failureClass: "Business-rule conflict",
      guidance: "Identify decision authority and the review path.",
      doNotClaim: "Specific billing rule engine behavior.",
    },
    {
      failureClass: "Downstream reconciliation",
      guidance:
        "Identify who confirms downstream acceptance and consistency.",
      doNotClaim: "A guaranteed reconciliation outcome.",
    },
    {
      failureClass: "Change regression",
      guidance:
        "Require release and change review, and rollback planning conceptually.",
      doNotClaim: "Deployment tooling or rollback SLA.",
    },
  ];

  return (
    <section className="w-full bg-white">
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
              max-w-[1000px]
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
                Failure ownership &amp; recovery
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[700px]
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
              Six failure classes, and what must not be claimed about each.
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
              The right-hand column is the substance — each entry is a detail
              an evaluator would want and this page cannot supply.
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
            <div className="grid grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)] bg-[#091127]">
              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Failure class
                </span>
              </div>

              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Page guidance
                </span>
              </div>

              <div className="px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Do not claim
                </span>
              </div>
            </div>

            {/* ROWS */}
            {rows.map((row, index) => (
              <div
                key={row.failureClass}
                className={`
                  grid
                  grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
                  ${index !== rows.length - 1 ? "border-b border-[#edf0f4]" : ""}
                `}
              >
                {/* FAILURE CLASS */}
                <div className="border-r border-[#edf0f4] bg-[#fafbfc] px-3.5 py-3">
                  <span className="text-xs font-bold leading-5 text-[#091127]">
                    {row.failureClass}
                  </span>
                </div>

                {/* GUIDANCE */}
                <div className="border-r border-[#edf0f4] px-3.5 py-3">
                  <span className="text-xs font-normal leading-5 text-[#091127]">
                    {row.guidance}
                  </span>
                </div>

                {/* DO NOT CLAIM */}
                <div className="bg-[#fdf7f7] px-3.5 py-3">
                  <span className="text-xs font-bold leading-5 text-red-900">
                    {row.doNotClaim}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE / SMALL TABLET CARDS */}
          <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] md:hidden">
            {rows.map((row, index) => (
              <div
                key={row.failureClass}
                className={`
                  p-5
                  ${index !== rows.length - 1 ? "border-b border-[#edf0f4]" : ""}
                `}
              >
                {/* FAILURE CLASS */}
                <div className="mb-4">
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Failure class
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                    {row.failureClass}
                  </p>
                </div>

                {/* PAGE GUIDANCE */}
                <div className="mb-4">
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Page guidance
                  </p>

                  <p className="!m-0 mt-1.5 text-sm leading-6 text-[#091127]">
                    {row.guidance}
                  </p>
                </div>

                {/* DO NOT CLAIM */}
                <div className="rounded-lg bg-[#fdf7f7] p-3">
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-red-900">
                    Do not claim
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-bold leading-6 text-red-900">
                    {row.doNotClaim}
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