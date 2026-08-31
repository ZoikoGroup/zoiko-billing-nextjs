const areas = [
  {
    title: "Exceptions",
    description:
      "Review frequency, owner, impact assessment, trend, and unresolved root-cause work.",
  },
  {
    title: "Reconciliation",
    description:
      "Confirm expected financial and operational consistency, and investigate discrepancies rather than absorbing them.",
  },
  {
    title: "Adoption",
    description:
      "Whether people are using the intended process, or quietly working around it.",
  },
  {
    title: "Defect disposition",
    description:
      "What is fixed, deferred, or accepted as residual risk — with a named owner for each.",
  },
  {
    title: "Change control",
    description:
      "How configuration changes are proposed, reviewed and evidenced once live.",
  },
  {
    title: "BAU transition",
    description:
      "An explicit handover point, so the project ending does not leave ownership ambiguous.",
  },
];

export default function Stabilization() {
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
            mx-auto flex w-full max-w-[1240px]
            flex-col items-center gap-5 px-0
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex w-full max-w-[662px]
              flex-col items-center gap-3 pt-2 text-center
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
                Stabilization &amp; change control
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0 w-full max-w-[662px] !pb-[0.8px]
                !text-[30px] !font-extrabold !leading-[1.2]
                !tracking-[-0.035em] !text-[#091127]
                sm:!text-[34px]
                md:!text-[36px]
                lg:!text-[40px]
              "
            >
              Early life is a distinct operating mode.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0 w-full max-w-[687px] pt-[3px]
                text-[15px] font-normal leading-7 text-[#5d7192]
                sm:text-base
              "
            >
              Six areas that need explicit ownership immediately after launch —
              and no fixed hypercare period, because that depends on your
              scope.
            </p>
          </div>

          {/* CARDS */}
          <div
            className="
              grid w-full grid-cols-1 gap-4 pt-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {areas.map((area) => (
              <div
                key={area.title}
                className="
                  flex min-h-[176px] flex-col items-start
                  rounded-2xl border border-[#dfe5ee]
                  bg-white px-5 py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                <h3
                  className="
                    !m-0 text-sm font-bold leading-6
                    text-[#091127]
                  "
                >
                  {area.title}
                </h3>

                <p
                  className="
                    !m-0 mt-1.5 text-xs font-normal
                    leading-5 text-[#5d7192]
                  "
                >
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}