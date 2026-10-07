export default function DemoLifecycleContentGovernance() {
  const states = [
    {
      state: "Draft",
      meaning: "Asset under production.",
      behavior: "Never publicly listed.",
      restricted: true,
    },
    {
      state: "Review needed",
      meaning: "Product, content or specialist review is incomplete.",
      behavior: "Hidden from public results.",
      restricted: true,
    },
    {
      state: "Published",
      meaning:
        "Approved for public listing with its truth status attached.",
      behavior:
        "Listed, with truth status persistent on card and detail.",
      restricted: false,
    },
    {
      state: "Superseded",
      meaning: "A newer asset replaces it.",
      behavior:
        "Replacement linked; lineage preserved rather than deleted.",
      restricted: false,
    },
    {
      state: "Retired",
      meaning: "No longer an accurate demonstration.",
      behavior: "Normally excluded from default results.",
      restricted: true,
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
          
          {/* Intro */}
          <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2">
            
            {/* Eyebrow */}
            <div className="relative flex h-4 w-full max-w-[384px] items-center justify-center">
              <span className="absolute left-0 h-px w-4 bg-[#7890b2] opacity-40" />

              <span className="px-3 text-center text-xs font-bold uppercase leading-4 tracking-widest text-[#7890b2]">
                Demo lifecycle &amp; content governance
              </span>

              <span className="absolute right-0 h-px w-4 bg-[#7890b2] opacity-40" />
            </div>

            {/* Heading */}
            <div className="w-full text-center">
              <h2 className="text-[#091127] !text-[30px] font-extrabold leading-tight sm:!text-[34px] md:!text-[36px] lg:!text-[40px] lg:leading-10">
                Five states, and two never appear in
              
                public results.
              </h2>
            </div>

            {/* Description */}
            <div className="w-full max-w-[687px] pt-1 text-center">
              <p className="text-base leading-7 text-[#5d7192]">
                A recording ages against a product that moves, which makes
                withdrawal a routine event rather than an exception.
              </p>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden w-full overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] md:block">
            
            {/* Header */}
            <div className="grid grid-cols-[192px_1fr_1fr] bg-[#1c3152]">
              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  State
                </span>
              </div>

              <div className="border-r border-white/15 px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Meaning
                </span>
              </div>

              <div className="px-3.5 py-3">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-white">
                  Public behavior
                </span>
              </div>
            </div>

            {/* Rows */}
            {states.map((item, index) => (
              <div
                key={item.state}
                className={`grid grid-cols-[192px_1fr_1fr] ${
                  index !== 0 ? "border-t border-[#edf0f4]" : ""
                }`}
              >
                <div className="border-r border-[#edf0f4] bg-[#fafbfc] px-3.5 py-3">
                  <span className="text-xs font-bold leading-5 text-[#091127]">
                    {item.state}
                  </span>
                </div>

                <div className="border-r border-[#edf0f4] px-3.5 py-3">
                  <span className="text-xs leading-5 text-[#091127]">
                    {item.meaning}
                  </span>
                </div>

                <div
                  className={`px-3.5 py-3 ${
                    item.restricted ? "bg-[#fcfbfb]" : "bg-white"
                  }`}
                >
                  <span
                    className={`text-xs leading-5 ${
                      item.restricted
                        ? "font-bold text-red-900"
                        : "font-normal text-[#091127]"
                    }`}
                  >
                    {item.behavior}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile cards */}
          <div className="flex w-full flex-col gap-3 md:hidden">
            {states.map((item) => (
              <article
                key={item.state}
                className="overflow-hidden rounded-xl border border-[#dfe5ee] bg-white shadow-[0px_4px_12px_0px_rgba(15,23,42,0.04)]"
              >
                {/* State */}
                <div className="bg-[#fafbfc] px-4 py-3">
                  <p className="text-xs font-bold leading-5 text-[#091127]">
                    {item.state}
                  </p>
                </div>

                {/* Meaning */}
                <div className="border-t border-[#edf0f4] px-4 py-3">
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-[#7890b2]">
                    Meaning
                  </p>

                  <p className="text-sm leading-6 text-[#091127]">
                    {item.meaning}
                  </p>
                </div>

                {/* Public behavior */}
                <div
                  className={`border-t border-[#edf0f4] px-4 py-3 ${
                    item.restricted ? "bg-[#fcfbfb]" : "bg-white"
                  }`}
                >
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-[#7890b2]">
                    Public behavior
                  </p>

                  <p
                    className={`text-sm leading-6 ${
                      item.restricted
                        ? "font-bold text-red-900"
                        : "font-normal text-[#091127]"
                    }`}
                  >
                    {item.behavior}
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