export default function ApplicabilityDefinitionsInterpretation() {
  const rows = [
    {
      element: "Who it applies to",
      establishes:
        "Which parties are bound — account holders, authorised users, end customers, integrators.",
      status: "Legal to author",
    },
    {
      element: "What it applies to",
      establishes:
        "Which services, interfaces and content fall inside scope.",
      status: "Legal to author",
    },
    {
      element: "Defined terms",
      establishes:
        "Terms carrying a specific meaning, deep-linkable from every use.",
      status: "Legal to author",
    },
    {
      element: (
        <>
          Interpretation &amp;
          <br />
          precedence
        </>
      ),
      mobileElement: "Interpretation & precedence",
      establishes:
        "How this policy interacts with the agreement and other policies when they differ.",
      status: "Legal to author",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">

          {/* Intro */}
          <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2">

            {/* Eyebrow */}
            <div className="relative flex h-4 w-full max-w-[384px] items-center justify-center">
              <span className="absolute left-0 h-px w-4 bg-[#7890b2] opacity-40" />

              <span className="px-3 text-center text-xs font-bold uppercase leading-4 tracking-widest text-[#7890b2]">
                Applicability, definitions &amp; interpretation
              </span>

              <span className="absolute right-0 h-px w-4 bg-[#7890b2] opacity-40" />
            </div>

            {/* Heading */}
            <div className="w-full text-center">
              <h2 className="text-[#091127] !text-[30px] font-extrabold leading-tight sm:!text-[34px] md:!text-[36px] lg:!text-[40px] lg:leading-10">
                Four questions any policy must
              
                answer first.
              </h2>
            </div>

            {/* Description */}
            <div className="w-full max-w-[687px] pt-1 text-center">
              <p className="text-base leading-7 text-[#5d7192]">
                All four are Legal&apos;s to answer. The architecture reserves
                the space.
              </p>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden w-full overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] md:block">

            {/* Header */}
            <div className="grid grid-cols-[192px_1fr_1fr] bg-[#1c3152]">
              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Element
                </span>
              </div>

              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  What it must establish
                </span>
              </div>

              <div className="px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Status
                </span>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, index) => (
              <div
                key={typeof row.element === "string" ? row.element : index}
                className={`grid grid-cols-[192px_1fr_1fr] ${
                  index !== 0 ? "border-t border-[#edf0f4]" : ""
                }`}
              >
                <div className="border-r border-[#edf0f4] bg-[#fafbfc] px-3.5 py-3">
                  <span className="text-xs font-bold leading-5 text-[#091127]">
                    {row.element}
                  </span>
                </div>

                <div className="border-r border-[#edf0f4] px-3.5 py-3">
                  <span className="text-xs leading-5 text-[#091127]">
                    {row.establishes}
                  </span>
                </div>

                <div className="bg-[#fcfbfb] px-3.5 py-3">
                  <span className="text-xs font-bold leading-5 text-red-900">
                    {row.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile cards */}
          <div className="flex w-full flex-col gap-3 md:hidden">
            {rows.map((row, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-xl border border-[#dfe5ee] bg-white shadow-[0px_4px_12px_0px_rgba(15,23,42,0.04)]"
              >
                {/* Element */}
                <div className="bg-[#fafbfc] px-4 py-3">
                  <p className="text-xs font-bold leading-5 text-[#091127]">
                    {row.mobileElement ?? row.element}
                  </p>
                </div>

                {/* What it must establish */}
                <div className="border-t border-[#edf0f4] px-4 py-3">
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-[#7890b2]">
                    What it must establish
                  </p>

                  <p className="text-sm leading-6 text-[#091127]">
                    {row.establishes}
                  </p>
                </div>

                {/* Status */}
                <div className="border-t border-[#edf0f4] bg-[#fcfbfb] px-4 py-3">
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-[#7890b2]">
                    Status
                  </p>

                  <p className="text-sm font-bold leading-6 text-red-900">
                    {row.status}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}