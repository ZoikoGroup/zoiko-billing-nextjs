const risks = [
  {
    risk: "Undecided decision rights",
    looksLike: "Two owners give different answers, or nobody will decide.",
    escalation: "Executive sponsor",
  },
  {
    risk: "Unresolved source of truth",
    looksLike:
      "A field is authoritative in two systems and reconciles in neither.",
    escalation: "Architecture owner · Developers",
  },
  {
    risk: "Data quality discovered late",
    looksLike:
      "Validation fails on duplicates or gaps that existed before the project.",
    escalation: "Data owners",
  },
  {
    risk: "Untested exceptions",
    looksLike: "Only happy paths appear in the test matrix.",
    escalation: "Acceptance owner",
  },
  {
    risk: "Access not ready",
    looksLike:
      "People cannot reach functions on day one, or recovery is unknown.",
    escalation: (
      <>
        <span className="font-semibold text-[#3f6fa8]">Account Access</span>
        <span> · administrators</span>
      </>
    ),
  },
  {
    risk: "Ambiguous go-live authority",
    looksLike:
      "Launch approaches without a named person accountable for approving it.",
    escalation: "Executive sponsor",
  },
];

export default function RiskEscalation() {
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
            gap-11
            px-0
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
                Risks, blockers &amp; escalation
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
                !pb-[0.8px]
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
              Six recurring implementation risks.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-[3px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              Each is stated as a condition to check for rather than a
              prediction about your project.
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
              <div className="grid grid-cols-[256px_minmax(0,1fr)_288px] bg-[#fafbfc]">
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Risk
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    What it looks like
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Escalation route
                  </span>
                </div>
              </div>

              {risks.map((item, index) => (
                <div
                  key={item.risk}
                  className={`
                    grid
                    grid-cols-[256px_minmax(0,1fr)_288px]
                    ${index !== risks.length - 1 ? "border-b border-[#edf0f4]" : ""}
                  `}
                >
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {item.risk}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {item.looksLike}
                    </span>
                  </div>

                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {item.escalation}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE CARDS */}
            <div className="flex flex-col md:hidden">
              {risks.map((item, index) => (
                <div
                  key={item.risk}
                  className={`
                    p-5
                    ${index !== risks.length - 1 ? "border-b border-[#edf0f4]" : ""}
                  `}
                >
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Risk
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                    {item.risk}
                  </p>

                  <p className="!mb-0 !mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    What it looks like
                  </p>

                  <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                    {item.looksLike}
                  </p>

                  <p className="!mb-0 !mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Escalation route
                  </p>

                  <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                    {item.escalation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}