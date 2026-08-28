export default function Channel() {
  const rows = [
    {
      field: "Channel type",
      rule: (
        <>
          Rendered only if actually supported —{" "}
          <strong>this design assumes no particular channel</strong>
        </>
      ),
    },
    {
      field: "Eligibility",
      rule:
        "May depend on authenticated account, plan, region, language, issue type, time or support policy",
    },
    {
      field: "Availability",
      rule: (
        <>
          A runtime value from the authoritative support system —{" "}
          <strong>never a static promise in the CMS</strong>
        </>
      ),
    },
    {
      field: "Expected response",
      rule: (
        <>
          Displayed only if source-authoritative and scoped, and{" "}
          <strong>
            acknowledgement is distinguished from resolution
          </strong>
        </>
      ),
    },
    {
      field: "Fallback",
      rule: (
        <>
          An unavailable channel shows another eligible route{" "}
          <strong>without implying service failure</strong>
        </>
      ),
    },
    {
      field: "Accessibility",
      rule:
        "Every offered channel has an accessible alternative or accommodation path where required",
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 xl:px-24">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 px-7">
          {/* SECTION INTRO */}
          <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-2 text-center">
            {/* EYEBROW */}
            <div className="flex h-4 items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span className="text-xs font-bold uppercase leading-4 tracking-widest text-[#7890b2]">
                Support channel contract
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                text-center
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
              Six rules, and no channel is assumed to
              exist.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-[3px]
                text-center
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              Email, chat, phone and callback appear only where the registry
              says they are supported and the person is eligible.
            </p>
          </div>

          {/* TABLE */}
          <div className="w-full overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
            {/* DESKTOP TABLE */}
            <div className="hidden overflow-x-auto md:block">
              <div className="min-w-[900px]">
                {/* HEADER */}
                <div className="grid grid-cols-[208px_minmax(0,1fr)] bg-[#fafbfc]">
                  <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                    <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                      Field
                    </span>
                  </div>

                  <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                    <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                      Rule
                    </span>
                  </div>
                </div>

                {/* ROWS */}
                {rows.map((row, index) => (
                  <div
                    key={row.field}
                    className={`grid grid-cols-[208px_minmax(0,1fr)] ${
                      index !== rows.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }`}
                  >
                    <div className="px-4 py-3.5">
                      <span className="text-sm font-semibold leading-5 text-[#091127]">
                        {row.field}
                      </span>
                    </div>

                    <div className="px-4 py-3.5">
                      <span className="text-sm font-normal leading-5 text-[#5d7192]">
                        {row.rule}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MOBILE CARDS */}
            <div className="flex flex-col md:hidden">
              {rows.map((row, index) => (
                <div
                  key={row.field}
                  className={`p-5 ${
                    index !== rows.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }`}
                >
                  <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Field
                  </p>

                  <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                    {row.field}
                  </p>

                  <p className="!m-0 mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                    Rule
                  </p>

                  <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                    {row.rule}
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