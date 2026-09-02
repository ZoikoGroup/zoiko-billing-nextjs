export default function EvidenceLifecycle() {
  const rows = [
    {
      state: "Draft",
      stateStyle: "bg-[#f3f4f6] text-[#7890b2] border-[#dfe5ee]",
      behavior: "Not public.",
      action: "Complete metadata, source and approval",
    },
    {
      state: "Review",
      stateStyle: "bg-[#f3f4f6] text-[#7890b2] border-[#dfe5ee]",
      behavior: "Not public.",
      action: "Specialist review",
    },
    {
      state: "Scheduled",
      stateStyle: "bg-[#f1f5f3] text-[#3f638f] border-[#dfe5ee]",
      behavior: "Not public until its effective or publication time.",
      action: "Validate successor and claim dependencies",
    },
    {
      state: "Current",
      stateStyle:
        "bg-[#eef7f1] text-[#28734a] border-[#cfe4d7]",
      behavior: "Discoverable by default, per access policy.",
      action: "View, download or request",
    },
    {
      state: "Review due",
      stateStyle:
        "bg-[#fff7ed] text-[#b45309] border-[#fed7aa]",
      behavior: (
        <>
          Visible{" "}
          <strong>only if still approved as current</strong>.
        </>
      ),
      action: "Owner revalidates",
    },
    {
      state: "Expired",
      stateStyle:
        "bg-[#f3f4f6] text-[#47617f] border-[#dfe5ee]",
      behavior:
        "Removed from default browse and from current claim support.",
      action: "Historical only where policy allows",
    },
    {
      state: "Superseded",
      stateStyle:
        "bg-[#fff7ed] text-[#b45309] border-[#fed7aa]",
      behavior: "The old record points to its current successor.",
      action: "Removed from current claim support",
    },
    {
      state: "Withdrawn",
      stateStyle:
        "bg-[#fff5f5] text-[#b42318] border-[#f1b8b8]",
      behavior: "Removed from normal discovery and index.",
      action: "Explained only where governance requires",
    },
    {
      state: "Restricted / unavailable",
      stateStyle:
        "bg-[#f3f6fa] text-[#315b8a] border-[#d9e2ed]",
      behavior: "Metadata visibility limited by policy.",
      action: "No client-side discovery leakage",
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
                Evidence lifecycle
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
              Nine states, and three of them are not public at all.
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
              A catalog is only trustworthy if entries leave it when they stop
              supporting a current claim.
            </p>
          </div>

          {/* DESKTOP TABLE */}
          <div className="hidden w-full overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] md:block">
            {/* HEADER */}
            <div className="grid grid-cols-[256px_minmax(0,1.4fr)_minmax(0,1fr)] bg-[#fafbfc]">
              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  State
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Catalog behavior
                </span>
              </div>

              <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                  Action
                </span>
              </div>
            </div>

            {/* ROWS */}
            {rows.map((row, index) => (
              <div
                key={row.state}
                className={`
                  grid
                  grid-cols-[256px_minmax(0,1.4fr)_minmax(0,1fr)]
                  ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* STATE */}
                <div className="flex items-center px-4 py-3.5">
                  <span
                    className={`
                      inline-flex
                      min-h-6
                      items-center
                      rounded-md
                      border
                      px-2.5
                      py-0.5
                      text-xs
                      font-semibold
                      leading-4
                      ${row.stateStyle}
                    `}
                  >
                    <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-current opacity-80" />
                    {row.state}
                  </span>
                </div>

                {/* CATALOG BEHAVIOR */}
                <div className="border-l border-[#edf0f4] px-4 py-3.5">
                  <span className="text-sm font-normal leading-5 text-[#5d7192]">
                    {row.behavior}
                  </span>
                </div>

                {/* ACTION */}
                <div className="border-l border-[#edf0f4] px-4 py-3.5">
                  <span
                    className={`
                      text-sm
                      leading-5
                      ${
                        row.state === "Scheduled" ||
                        row.state === "Expired" ||
                        row.state === "Withdrawn" ||
                        row.state === "Restricted / unavailable"
                          ? "font-bold text-[#5d7192]"
                          : "font-normal text-[#5d7192]"
                      }
                    `}
                  >
                    {row.action}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE CARDS */}
          <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] md:hidden">
            {rows.map((row, index) => (
              <div
                key={row.state}
                className={`
                  p-5
                  ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }
                `}
              >
                {/* STATE */}
                <div className="mb-4">
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    State
                  </p>

                  <div className="mt-2">
                    <span
                      className={`
                        inline-flex
                        min-h-6
                        items-center
                        rounded-md
                        border
                        px-2.5
                        py-0.5
                        text-xs
                        font-semibold
                        leading-4
                        ${row.stateStyle}
                      `}
                    >
                      <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-current opacity-80" />
                      {row.state}
                    </span>
                  </div>
                </div>

                {/* CATALOG BEHAVIOR */}
                <div className="mb-4">
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Catalog behavior
                  </p>

                  <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                    {row.behavior}
                  </p>
                </div>

                {/* ACTION */}
                <div>
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Action
                  </p>

                  <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                    {row.action}
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