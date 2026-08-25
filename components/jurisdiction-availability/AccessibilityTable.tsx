"use client";

const accessibilityRows = [
  {
    area: "Map",
    requirement:
      "Optional. Every colored jurisdiction must come from current registry state — no decorative filled-world proof",
  },
  {
    area: "Text equivalent",
    requirement:
      "A complete filterable list or table holds the same jurisdictions, statuses and limitations, and is the primary accessible truth",
  },
  {
    area: "Keyboard",
    requirement:
      "Search, filters, status detail, map-to-list linkage and every action are keyboard operable",
  },
  {
    area: "Screen reader",
    requirement:
      "Jurisdiction, status, limitation and currentness announced in logical order; map pins are never the sole content",
  },
  {
    area: "Color",
    requirement:
      "Status text plus a shape or label — never color alone",
  },
  {
    area: "Privacy",
    requirement:
      "No IP-derived commercial availability, sensitive geolocation tracking or nationality inference",
  },
  {
    area: "Security",
    requirement:
      "A public API returns public availability facts only — no internal partner contracts, customer-specific eligibility, unpublished roadmap, credentials or internal evidence",
  },
  {
    area: "Stale or outage",
    requirement:
      "If the availability service fails, positive dynamic claims are suppressed and a safe unable-to-confirm state is shown",
  },
  {
    area: "Analytics",
    requirement:
      "A search term may be logged only in privacy-safe canonicalized form, with no sensitive personal or profile linkage",
  },
];

export default function AccessibilityTable() {
  return (
    <section className="w-full bg-[#F7F8FA] px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-7 sm:gap-10">
        {/* Heading */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-1 text-center">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-4 shrink-0 bg-[#4387A8]/40" />

            <span className="text-center text-[9px] font-bold uppercase leading-4 tracking-[0.1em] text-[#4387A8] sm:text-xs sm:tracking-[0.16em]">
              Accessibility, privacy, security &amp; resilience
            </span>

            <span className="h-px w-4 shrink-0 bg-[#4387A8]/40" />
          </div>

          {/* Heading */}
          <h2 className="w-full text-center text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#102A43] sm:text-[36px] lg:text-[42px]">
            <span className="block">The table is the authority; a map is</span>
            <span className="block">optional.</span>
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-center text-sm font-normal leading-6 text-[#60758A] sm:text-base sm:leading-7">
            No one should need color vision, pointer precision, zoom, or
            geography knowledge to discover a status.
          </p>
        </div>

        {/* Table Card */}
        <div className="w-full overflow-hidden rounded-xl border border-[#E1E5E9] bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)] sm:rounded-2xl">
          {/* Intro */}
          <div className="border-b border-[#E1E5E9] bg-[#FAFBFC] px-4 py-4 sm:px-5">
            <p className="text-sm font-normal leading-5 text-[#60758A]">
              Requirements across presentation, privacy and failure.
            </p>
          </div>

          {/* Desktop Header */}
          <div className="hidden grid-cols-[140px_minmax(0,1fr)] border-b border-[#E1E5E9] bg-[#FAFBFC] md:grid">
            <div className="px-4 py-3.5">
              <span className="text-xs font-bold uppercase tracking-wide text-[#4387A8]">
                Area
              </span>
            </div>

            <div className="px-4 py-3.5">
              <span className="text-xs font-bold uppercase tracking-wide text-[#4387A8]">
                Requirement
              </span>
            </div>
          </div>

          {/* Rows */}
          <div>
            {accessibilityRows.map((row, index) => (
              <div
                key={row.area}
                className={`grid grid-cols-1 md:grid-cols-[140px_minmax(0,1fr)] ${
                  index !== accessibilityRows.length - 1
                    ? "border-b border-[#EEF0F2]"
                    : ""
                }`}
              >
                {/* Area */}
                <div className="px-4 pb-2 pt-4 sm:px-5 md:py-4">
                  <div className="mb-1.5 text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-[#8A98A8] md:hidden">
                    Area
                  </div>

                  <p className="text-sm font-semibold leading-5 text-[#102A43]">
                    {row.area}
                  </p>
                </div>

                {/* Requirement */}
                <div className="px-4 pb-5 pt-0 sm:px-5 md:py-4">
                  <div className="mb-1.5 text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-[#8A98A8] md:hidden">
                    Requirement
                  </div>

                  <p className="text-sm font-normal leading-6 text-[#60758A]">
                    {row.requirement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}