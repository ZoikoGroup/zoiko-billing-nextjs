"use client";

const dimensions = [
  {
    name: "Language",
    meaning:
      "Canonical language definition, names, tag or code, and script metadata",
  },
  {
    name: "Surface",
    meaning:
      "The exact UI, document, communication or support surface the support applies to",
  },
  {
    name: "Capability state",
    meaning:
      "The current public state for that language-and-surface combination",
  },
  {
    name: "Entity scope",
    meaning: "Specific entity applicability where relevant",
  },
  {
    name: "Jurisdiction scope",
    meaning:
      "Market applicability where relevant — separate from the language itself",
  },
  {
    name: "Commercial state",
    meaning: "Plan or contract entitlement if the surface is gated",
  },
  {
    name: "Locale",
    meaning:
      "The formatting variant used by the surface — not the support decision itself",
  },
  {
    name: "Template & resource readiness",
    meaning:
      "Document or UI resource version and approval where relevant",
  },
  {
    name: "Accessibility & render readiness",
    meaning:
      "Required script, directionality, semantics and output tests",
  },
  {
    name: "Effective period & evidence",
    meaning:
      "When the record is valid, plus owner, source, review date and limitations",
  },
];

export default function SupportMatrix() {
  return (
    <section className="w-full bg-[#F7F7F6] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 sm:gap-10 lg:gap-11">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 text-center">
          {/* Eyebrow */}
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 bg-[#3B82F6]/40" />

            <span className="whitespace-nowrap text-[11px] font-bold uppercase leading-4 tracking-[0.16em] text-[#3B82F6] sm:text-xs">
              Support is surface-specific
            </span>

            <span className="h-px w-4 bg-[#3B82F6]/40" />
          </div>

          {/* Heading */}
          <h2 className="w-full text-center text-[28px] font-extrabold leading-9 text-[#172033] sm:text-[32px] sm:leading-10 lg:text-4xl">
            There is no universal &quot;supported&quot; flag.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-center text-sm font-normal leading-6 text-[#5B6577] sm:text-base sm:leading-7">
            A language cannot carry one boolean. Support resolves for a defined
            surface and context across ten dimensions.
          </p>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-2xl bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-[#E5E7EB]">
          <div className="w-full overflow-x-auto">
            <div className="min-w-[900px]">
              {/* Header */}
              <div className="grid grid-cols-[320px_minmax(0,1fr)] border-b border-[#E5E7EB] bg-[#FAFAFA] sm:grid-cols-[360px_minmax(0,1fr)]">
                <div className="px-4 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#3B82F6]">
                    Dimension
                  </span>
                </div>

                <div className="px-4 py-3">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#3B82F6]">
                    Required meaning
                  </span>
                </div>
              </div>

              {/* Rows */}
              <div>
                {dimensions.map((item, index) => (
                  <div
                    key={item.name}
                    className={`grid grid-cols-[320px_minmax(0,1fr)] sm:grid-cols-[360px_minmax(0,1fr)] ${
                      index !== dimensions.length - 1
                        ? "border-b border-[#F0F1F3]"
                        : ""
                    }`}
                  >
                    <div className="px-4 py-3.5">
                      <span className="text-sm font-semibold leading-5 text-[#172033]">
                        {item.name}
                      </span>
                    </div>

                    <div className="px-4 py-3.5">
                      <span className="text-sm font-normal leading-5 text-[#5B6577]">
                        {item.meaning}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}