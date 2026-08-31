export default function SharedResponsibility() {
  const areas = [
    {
      title: "Access administration",
      description: (
        <>
          Platform controls exist;{" "}
          <strong>who holds an account, which role they have, and when access is removed are yours</strong>.
          <br />
          A departed employee&apos;s active account is not a platform failure.
        </>
      ),
    },
    {
      title: "Identity configuration",
      description: (
        <>
          Available authentication options are product truth in{" "}
          <span className="font-semibold text-[#52749f]">Documentation</span>.
          Which you enable, and for whom, is your decision.
        </>
      ),
    },
    {
      title: "Credential hygiene",
      description: (
        <>
          API credentials you generate are yours to scope, store and rotate.{" "}
          <strong>
            Support never asks for one and cannot rotate it for you.
          </strong>
        </>
      ),
    },
    {
      title: "Integration security",
      description: (
        <>
          The Zoiko boundary is ours; endpoints, credentials and the receiving
          system are yours.
        </>
      ),
    },
    {
      title: "Exported data",
      description: (
        <>
          Once data leaves through an export you configured, its protection is
          yours — the same boundary{" "}
          <span className="font-semibold text-[#52749f]">
            Privacy &amp; Data Governance
          </span>{" "}
          draws for downstream copies.
        </>
      ),
    },
    {
      title: "Local response",
      description: (
        <>
          Monitoring status, maintaining internal escalation paths, and acting
          on advisories that apply to you.
        </>
      ),
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
              flex w-full max-w-[662px] flex-col items-center gap-3
              pt-2 text-center
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
                Shared responsibility
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
              Six areas where security depends on
             
              both sides.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0 w-full max-w-[687px]
                text-[15px] font-normal leading-7 text-[#5d7192]
                sm:text-base
              "
            >
              Platform controls cannot compensate for configuration only you
              can set.
            </p>
          </div>

          {/* CARDS */}
          <div className="w-full pt-5">
            <div className="grid w-full grid-cols-1 gap-4">
              {areas.map((area) => (
                <div
                  key={area.title}
                  className="
                    w-full rounded-2xl border border-[#dfe5ee]
                    bg-white px-5 py-5
                    shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  "
                >
                  <h3
                    className="
                      !m-0
                      text-sm
                      font-bold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {area.title}
                  </h3>

                  <div
                    className="
                      mt-1.5
                      text-xs
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {area.description}
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