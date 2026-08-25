"use client";

const rows = [
  {
    source: "Product & document labels",
    treatment:
      "An approved translation resource with source, version and review currentness",
  },
  {
    source: "Human translation",
    treatment:
      "Reviewer and source may be recorded — no generic certification claim",
  },
  {
    source: "Translation provider or system",
    treatment:
      "An approved integration boundary with data minimization, version currentness and responsibility",
  },
  {
    source: "Machine or AI-assisted translation",
    treatment:
      "Only where separately approved, with source and review state visible; high-risk content remains under human authority",
  },
  {
    source: "Financial values, identifiers & codes",
    treatment: "Never translated — formatting only",
  },
  {
    source: "Legal, tax, payment & privacy text",
    treatment:
      "Controlled-text authority with jurisdiction, entity, surface, language and effective version",
  },
  {
    source: "Customer free text",
    treatment:
      "Translated only where an explicit supported feature exists; never silently sent to a third party",
  },
  {
    source: "Support conversation",
    treatment:
      "Human or assisted support language is separate from document translation and needs its own service authority",
  },
];

export default function TranslationRules() {
  return (
    <section className="w-full bg-[#F7F7F6] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 lg:gap-11">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          {/* Eyebrow */}
          <div className="flex w-full max-w-[471px] items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#5B6577]/40" />

            <span className="text-center text-[10px] font-bold uppercase leading-4 tracking-[0.14em] text-[#5B6577] sm:text-xs sm:tracking-[0.16em]">
              Translation source, review &amp; provider boundaries
            </span>

            <span className="h-px w-4 shrink-0 bg-[#5B6577]/40" />
          </div>

          {/* Title */}
          <h2 className="w-full text-3xl font-extrabold leading-10 text-[#172033] sm:text-4xl">
            No quality theatre.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-sm font-normal leading-6 text-[#5B6577] sm:text-base sm:leading-7">
            Source, reviewer and currentness are shown. A star rating,
            accuracy percentage or confidence meter is not evidence and does
            not appear.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden w-full overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)] md:block">
          <div className="grid grid-cols-[288px_minmax(0,1fr)] bg-[#FCFCFC]">
            <div className="border-b border-[#E5E7EB] px-4 py-3.5 text-xs font-bold uppercase leading-4 tracking-wide text-[#5B6577]">
              Content or source
            </div>

            <div className="border-b border-[#E5E7EB] px-4 py-3.5 text-xs font-bold uppercase leading-4 tracking-wide text-[#5B6577]">
              Required treatment
            </div>
          </div>

          {rows.map((row, index) => (
            <div
              key={row.source}
              className={`grid grid-cols-[288px_minmax(0,1fr)] ${
                index !== rows.length - 1 ? "border-b border-[#E8EAEE]" : ""
              }`}
            >
              <div className="px-4 py-3.5 text-sm font-semibold leading-5 text-[#172033]">
                {row.source}
              </div>

              <div className="px-4 py-3.5 text-sm font-normal leading-5 text-[#5B6577]">
                {row.treatment}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="flex w-full flex-col gap-3 md:hidden">
          {rows.map((row) => (
            <div
              key={row.source}
              className="w-full rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-[0px_2px_8px_rgba(15,23,42,0.04)]"
            >
              <div className="mb-2 text-[11px] font-bold uppercase leading-4 tracking-wide text-[#5B6577]">
                Content or source
              </div>

              <div className="text-sm font-semibold leading-5 text-[#172033]">
                {row.source}
              </div>

              <div className="my-3 h-px w-full bg-[#E8EAEE]" />

              <div className="mb-2 text-[11px] font-bold uppercase leading-4 tracking-wide text-[#5B6577]">
                Required treatment
              </div>

              <div className="text-sm font-normal leading-6 text-[#5B6577]">
                {row.treatment}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}