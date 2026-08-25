"use client";

const surfaces = [
  {
    surface: "Billing document surfaces",
    shown: "Invoice, credit note, statement or other approved document states.",
    boundary: "One document surface does not imply another",
  },
  {
    surface: "Transactional communication",
    shown: "Email subject and body, or another approved communication state.",
    boundary: "Attachment language can differ from email language",
  },
  {
    surface: "Customer portal",
    shown: "Customer-facing billing portal interface and content state.",
    boundary: "Portal support does not prove document support",
  },
  {
    surface: "Authenticated product & admin UI",
    shown: "Internal billing administration interface state.",
    boundary:
      "Admin UI support does not imply customer-facing support",
  },
  {
    surface: "Help & documentation",
    shown: "Published product documentation or help language state.",
    boundary:
      "Documentation translation is not product UI or human support",
  },
  {
    surface: "Human support service",
    shown:
      "Operational support language, only where explicitly offered.",
    boundary:
      "A separate service, hours, plan and region authority — never inferred from documents",
  },
  {
    surface: "Legal & privacy content",
    shown:
      "Only where a separate legal-document registry supports the language and version.",
    boundary:
      "Never counted as general product-language support unless the scope is explicit",
  },
  {
    surface: "Public marketing website",
    shown: "Website locale where relevant.",
    boundary:
      "Not evidence that the product itself supports the language",
  },
];

export default function CapabilityMatrix() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 sm:gap-10 lg:gap-11">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#3B82F6]/40" />

            <span className="text-center text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-[#3B82F6] sm:text-xs sm:tracking-[0.16em]">
              Language-by-surface capability matrix
            </span>

            <span className="h-px w-4 shrink-0 bg-[#3B82F6]/40" />
          </div>

          {/* Heading */}
          <h2 className="w-full text-center text-3xl font-extrabold leading-9 text-[#172033] sm:text-4xl sm:leading-10">
            <span className="block">
              Eight surface classes, each with its
            </span>
            <span className="block">own boundary.</span>
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-center text-sm font-normal leading-6 text-[#5B6577] sm:text-base sm:leading-7">
            Only surfaces with an approved registry definition appear. Empty
            cells are never filled with checkmarks, dashes or inferred parity
            to make the matrix look complete.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden w-full overflow-hidden rounded-2xl bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-[#E5E7EB] md:block">
          <div className="grid grid-cols-[224px_minmax(0,1fr)_minmax(0,1fr)]">
            {/* Header */}
            <div className="border-b border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3">
              <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#3B82F6]">
                Surface class
              </span>
            </div>

            <div className="border-b border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3">
              <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#3B82F6]">
                What can be shown when authoritative
              </span>
            </div>

            <div className="border-b border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3">
              <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#3B82F6]">
                Critical boundary
              </span>
            </div>

            {/* Rows */}
            {surfaces.map((item, index) => {
              const isLast = index === surfaces.length - 1;

              return (
                <div key={item.surface} className="contents">
                  <div
                    className={`px-4 py-3.5 ${
                      !isLast ? "border-b border-[#F0F1F3]" : ""
                    }`}
                  >
                    <span className="text-sm font-semibold leading-5 text-[#172033]">
                      {item.surface}
                    </span>
                  </div>

                  <div
                    className={`px-4 py-3.5 ${
                      !isLast ? "border-b border-[#F0F1F3]" : ""
                    }`}
                  >
                    <span className="text-sm font-normal leading-5 text-[#5B6577]">
                      {item.shown}
                    </span>
                  </div>

                  <div
                    className={`px-4 py-3.5 ${
                      !isLast ? "border-b border-[#F0F1F3]" : ""
                    }`}
                  >
                    <span className="text-sm font-normal leading-5 text-[#5B6577]">
                      {item.boundary}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="flex w-full flex-col gap-4 md:hidden">
          {surfaces.map((item) => (
            <div
              key={item.surface}
              className="w-full rounded-2xl bg-white p-5 shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-[#E5E7EB]"
            >
              {/* Surface */}
              <div>
                <p className="text-[10px] font-bold uppercase leading-4 tracking-wide text-[#3B82F6]">
                  Surface class
                </p>

                <h3 className="mt-1 text-sm font-semibold leading-5 text-[#172033]">
                  {item.surface}
                </h3>
              </div>

              {/* What can be shown */}
              <div className="mt-5 border-t border-[#F0F1F3] pt-4">
                <p className="text-[10px] font-bold uppercase leading-4 tracking-wide text-[#3B82F6]">
                  What can be shown when authoritative
                </p>

                <p className="mt-1.5 text-sm font-normal leading-5 text-[#5B6577]">
                  {item.shown}
                </p>
              </div>

              {/* Critical boundary */}
              <div className="mt-5 border-t border-[#F0F1F3] pt-4">
                <p className="text-[10px] font-bold uppercase leading-4 tracking-wide text-[#3B82F6]">
                  Critical boundary
                </p>

                <p className="mt-1.5 text-sm font-normal leading-5 text-[#5B6577]">
                  {item.boundary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}