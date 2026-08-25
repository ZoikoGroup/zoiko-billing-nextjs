"use client";

const dependencies = [
  {
    dependency: "Document surface exists",
    requirement:
      "The invoice, credit note or statement is an approved product surface",
  },
  {
    dependency: "Language-surface capability",
    requirement: "The exact language-and-surface state is current",
  },
  {
    dependency: "Template variant",
    requirement:
      "A current released template applicable to the entity, surface, language, locale and jurisdiction",
  },
  {
    dependency: "Translation resource bundle",
    requirement:
      "Required strings complete, current and reviewed according to content class",
  },
  {
    dependency: "Controlled text",
    requirement:
      "Legal, tax, payment and privacy text has current authority and applicability",
  },
  {
    dependency: "Entity & issuer context",
    requirement: "Issuer profile and document rules are current",
  },
  {
    dependency: "Currency context",
    requirement:
      "The authoritative document currency is compatible — localization formats value rather than changing it",
  },
  {
    dependency: "Render profile",
    requirement:
      "Output renderer, fonts, directionality and format are supported",
  },
  {
    dependency: "Accessibility profile",
    requirement:
      "Language metadata, reading order, semantics and script behavior have passed",
  },
  {
    dependency: "Fallback policy",
    requirement:
      "Missing or stale content has an explicit safe fallback or block behavior",
  },
];

export default function DocumentReadiness() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-7 sm:gap-10 lg:gap-11">
        {/* Heading */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-1 text-center">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-4 shrink-0 bg-[#3B82F6]/40" />

            <span className="text-center text-[9px] font-bold uppercase leading-4 tracking-[0.1em] text-[#3B82F6] sm:text-xs sm:tracking-[0.16em]">
              Localized documents &amp; template readiness
            </span>

            <span className="h-px w-4 shrink-0 bg-[#3B82F6]/40" />
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[1000px] text-center text-[28px] font-extrabold leading-[1.12] tracking-tight text-[#172033] sm:text-[36px] sm:leading-[1.08] lg:text-[40px]">
            <span className="block sm:whitespace-nowrap">
              Ten dependencies before a document
            </span>

            <span className="block sm:whitespace-nowrap">
              language is current.
            </span>
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-center text-sm font-normal leading-6 text-[#5B6577] sm:text-base sm:leading-7">
            A translated string bundle is one of ten. Any single failure keeps
            the language-surface combination out of current support.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden w-full overflow-hidden rounded-xl bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-[#E5E7EB] sm:rounded-2xl md:block">
          <div className="grid grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[288px_minmax(0,1fr)]">
            {/* Header */}
            <div className="border-b border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3">
              <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#3B82F6]">
                Dependency
              </span>
            </div>

            <div className="border-b border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3">
              <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#3B82F6]">
                Requirement
              </span>
            </div>

            {/* Rows */}
            {dependencies.map((item, index) => {
              const isLast = index === dependencies.length - 1;

              return (
                <div key={item.dependency} className="contents">
                  {/* Dependency */}
                  <div
                    className={`px-4 py-4 ${
                      !isLast ? "border-b border-[#F0F1F3]" : ""
                    }`}
                  >
                    <span className="text-sm font-semibold leading-5 text-[#172033]">
                      {item.dependency}
                    </span>
                  </div>

                  {/* Requirement */}
                  <div
                    className={`px-4 py-4 ${
                      !isLast ? "border-b border-[#F0F1F3]" : ""
                    }`}
                  >
                    <span className="text-sm font-normal leading-6 text-[#5B6577]">
                      {item.requirement}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="flex w-full flex-col gap-4 md:hidden">
          {dependencies.map((item) => (
            <div
              key={item.dependency}
              className="w-full rounded-xl bg-white p-4 shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-[#E5E7EB] sm:rounded-2xl sm:p-5"
            >
              {/* Dependency */}
              <div>
                <p className="text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-[#3B82F6]">
                  Dependency
                </p>

                <h3 className="mt-1 text-sm font-semibold leading-6 text-[#172033]">
                  {item.dependency}
                </h3>
              </div>

              {/* Requirement */}
              <div className="mt-4 border-t border-[#F0F1F3] pt-4">
                <p className="text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-[#3B82F6]">
                  Requirement
                </p>

                <p className="mt-1.5 text-sm font-normal leading-6 text-[#5B6577]">
                  {item.requirement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}