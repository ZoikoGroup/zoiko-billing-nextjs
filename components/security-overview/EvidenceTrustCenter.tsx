export default function EvidenceTrustCenter() {
  const rows = [
    {
      need: "A certification or audit report",
      route: "Trust Center",
      behavior: (
        <>
          Linked where it exists —{" "}
          <span className="font-bold">this page asserts none</span>
        </>
      ),
    },
    {
      need: "A completed security questionnaire",
      route: "Trust Center · Sales",
      behavior:
        "Routed; answers come from approved evidence, not from this page",
    },
    {
      need: "Penetration-test results",
      route: "Trust Center, per access policy",
      behavior: (
        <span className="font-bold">
          No result, finding or cadence stated here
        </span>
      ),
    },
    {
      need: "A data processing addendum",
      route: "Legal · contract",
      behavior: "Referenced only where approved",
    },
    {
      need: "Privacy or data-handling detail",
      route: "Privacy & Data Governance",
      behavior: "Routed; no retention or residency claim here",
    },
    {
      need: "Recovery objectives",
      route: "Business Continuity",
      behavior: (
        <span className="font-bold">No RTO or RPO value on this page</span>
      ),
    },
    {
      need: "Nothing exists yet",
      route: "—",
      behavior:
        "Stated as not established, with the governance explanation preserved",
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto flex w-full max-w-[1440px] flex-col items-start
          px-5 py-14
          sm:px-8 sm:py-16
          md:px-10 md:py-20
          lg:px-14
          xl:px-20
        "
      >
        <div
          className="
            mx-auto flex w-full max-w-[1240px] flex-col items-center
            gap-5 px-0
            sm:px-4
            md:px-7
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex w-full max-w-[662px] flex-col items-center
              gap-3 pt-2 pb-px text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px] font-bold uppercase leading-4
                  tracking-[0.16em] text-[#7890b2]
                  sm:text-xs sm:tracking-[0.18em]
                "
              >
                Evidence &amp; Trust Center
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0 w-full max-w-[662px]
                !text-[30px] !font-extrabold !leading-[1.2]
                !tracking-[-0.035em] !text-[#091127]
                sm:!text-[34px]
                md:!text-[36px]
                lg:!text-[40px]
              "
            >
              What a reviewer can obtain, and how.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0 w-full max-w-[687px]
                text-[15px] font-normal leading-7 text-[#5d7192]
                sm:text-base
              "
            >
              Trust Center owns artifacts and access states. This page states
              what class of evidence exists and routes to it.
            </p>
          </div>

          {/* TABLE */}
          <div
            className="
              w-full overflow-hidden rounded-2xl border border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* DESKTOP TABLE */}
            <div className="hidden md:block overflow-x-auto">
              <div className="min-w-[1040px]">
                {/* HEADER */}
                <div className="grid grid-cols-[320px_288px_minmax(0,1fr)]">
                  <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-4 py-3.5">
                    <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                      Need
                    </span>
                  </div>

                  <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-4 py-3.5">
                    <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                      Route
                    </span>
                  </div>

                  <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-4 py-3.5">
                    <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                      Behavior here
                    </span>
                  </div>
                </div>

                {/* ROWS */}
                {rows.map((row, index) => (
                  <div
                    key={row.need}
                    className={`grid grid-cols-[320px_288px_minmax(0,1fr)] ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }`}
                  >
                    <div className="px-4 py-3.5">
                      <span className="text-sm font-semibold leading-5 text-[#091127]">
                        {row.need}
                      </span>
                    </div>

                    <div className="px-4 py-3.5">
                      <span
                        className={
                          row.route !== "Trust Center" &&
                          row.route !== "Trust Center · Sales" &&
                          row.route !== "Legal · contract" &&
                          row.route !== "—"
                            ? "text-sm font-semibold leading-6 text-[#52749f]"
                            : "text-sm font-normal leading-5 text-[#5d7192]"
                        }
                      >
                        {row.route}
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
            </div>

            {/* MOBILE / SMALL TABLET */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.need}
                  className={`p-5 ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  {/* NEED */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Need
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {row.need}
                    </p>
                  </div>

                  {/* ROUTE */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Route
                    </p>

                    <p
                      className={`!m-0 mt-1.5 text-sm leading-6 ${
                        row.route !== "Trust Center" &&
                        row.route !== "Trust Center · Sales" &&
                        row.route !== "Legal · contract" &&
                        row.route !== "—"
                          ? "font-semibold text-[#52749f]"
                          : "font-normal text-[#5d7192]"
                      }`}
                    >
                      {row.route}
                    </p>
                  </div>

                  {/* BEHAVIOR */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Behavior here
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {row.behavior}
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