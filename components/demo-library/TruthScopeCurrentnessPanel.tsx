export default function TruthScopeCurrentnessPanel() {
  const rows = [
    {
      field: "Truth status",
      purpose:
        "Clarifies whether content is illustrative or source-verified.",
      rule: "Always visible on detail — and on the card.",
      important: true,
    },
    {
      field: "Demonstrates",
      purpose: "Explains the operating idea shown.",
      rule: "One concise source-safe statement.",
    },
    {
      field: "Does not claim",
      purpose: "Prevents overinterpretation.",
      rule: "Must include the relevant capability and availability boundaries.",
      important: true,
    },
    {
      field: "Scope",
      purpose: "What the demo is about.",
      rule: "No inferred market or product entitlement.",
      important: true,
    },
    {
      field: "Source owner",
      purpose: "Who approved or owns the demonstrated claim.",
      rule: "Role or team where public policy permits.",
    },
    {
      field: "Reviewed / currentness",
      purpose: "When the asset was last governed.",
      rule: "Only a source-backed date or state. Never inferred from publication.",
      important: true,
    },
    {
      field: "Verify next",
      purpose: "The authoritative specialist route.",
      rule: "Must be a registered route.",
      important: true,
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
          
          {/* Intro */}
          <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2">
            
            {/* Eyebrow */}
            <div className="relative flex h-4 w-full max-w-[320px] items-center justify-center">
              <span className="absolute left-0 h-px w-4 bg-[#7890b2] opacity-40" />

              <span className="px-3 text-center text-xs font-bold uppercase leading-4 tracking-widest text-[#7890b2]">
                Truth, scope &amp; currentness panel
              </span>

              <span className="absolute right-0 h-px w-4 bg-[#7890b2] opacity-40" />
            </div>

            {/* Heading */}
            <div className="w-full text-center">
              <h2 className="text-[#091127] !text-[30px] font-extrabold leading-tight sm:!text-[34px] md:!text-[36px] lg:!text-[40px] lg:leading-10">
                Seven fields on every demo detail
               
                page.
              </h2>
            </div>

            {/* Description */}
            <div className="w-full max-w-[687px] pt-1 text-center">
              <p className="text-base leading-7 text-[#5d7192]">
                Three of them exist to stop the video from meaning more than it
                shows.
              </p>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden w-full overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] md:block">
            <div className="grid grid-cols-[192px_1fr_1fr] bg-[#1c3152]">
              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Field
                </span>
              </div>

              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Purpose
                </span>
              </div>

              <div className="px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Required rule
                </span>
              </div>
            </div>

            {rows.map((row, index) => (
              <div
                key={row.field}
                className={`grid grid-cols-[192px_1fr_1fr] ${
                  index !== 0 ? "border-t border-[#edf0f4]" : ""
                }`}
              >
                <div className="border-r border-[#edf0f4] bg-[#fafbfc] px-3.5 py-3">
                  <span className="text-xs font-bold leading-5 text-[#091127]">
                    {row.field}
                  </span>
                </div>

                <div className="border-r border-[#edf0f4] px-3.5 py-3">
                  <span className="text-xs font-normal leading-5 text-[#091127]">
                    {row.purpose}
                  </span>
                </div>

                <div
                  className={`px-3.5 py-3 ${
                    row.important ? "bg-[#fcfbfb]" : "bg-white"
                  }`}
                >
                  <span
                    className={`text-xs leading-5 ${
                      row.important
                        ? "font-bold text-red-900"
                        : "font-normal text-[#091127]"
                    }`}
                  >
                    {row.rule}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile cards */}
          <div className="flex w-full flex-col gap-3 md:hidden">
            {rows.map((row) => (
              <article
                key={row.field}
                className="overflow-hidden rounded-xl border border-[#dfe5ee] bg-white shadow-[0px_4px_12px_0px_rgba(15,23,42,0.04)]"
              >
                {/* Field */}
                <div className="bg-[#fafbfc] px-4 py-3">
                  <p className="text-xs font-bold leading-5 text-[#091127]">
                    {row.field}
                  </p>
                </div>

                {/* Purpose */}
                <div className="border-t border-[#edf0f4] px-4 py-3">
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-[#7890b2]">
                    Purpose
                  </p>

                  <p className="text-sm leading-6 text-[#091127]">
                    {row.purpose}
                  </p>
                </div>

                {/* Required rule */}
                <div
                  className={`border-t border-[#edf0f4] px-4 py-3 ${
                    row.important ? "bg-[#fcfbfb]" : "bg-white"
                  }`}
                >
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-[#7890b2]">
                    Required rule
                  </p>

                  <p
                    className={`text-sm leading-6 ${
                      row.important
                        ? "font-bold text-red-900"
                        : "font-normal text-[#091127]"
                    }`}
                  >
                    {row.rule}
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