"use client";

const evidenceRows = [
  {
    label: "Record ID",
    value: "A stable language-surface capability reference",
  },
  {
    label: "Source & owner",
    value:
      "Product, localization, document, support or partner authority",
  },
  {
    label: "Status",
    value: "The current state from the approved vocabulary",
  },
  {
    label: "Limitations",
    value: "Visible, structured and adjacent to the state",
  },
  {
    label: "Effective from and to",
    value: "Current, future and expired kept separate",
  },
  {
    label: "Last reviewed",
    value: "The evidence review timestamp",
  },
  {
    label: "Stale threshold",
    value:
      "When exceeded, the positive claim suppresses or enters Needs review",
  },
  {
    label: "Dependencies",
    value:
      "Template, resource, entity, jurisdiction, commercial, provider, render and accessibility references",
  },
  {
    label: "Change event",
    value:
      "Old and new state, actor or source, reason, effective date and supersession",
  },
];

const historyItems = [
  {
    number: "1",
    title: "01 Aug 2026 — Limited became Available",
    description:
      "Reason: accessibility profile passed · owner: Product Localization",
  },
  {
    number: "2",
    title: "18 Jul 2026 — Resource v8 approved",
    description:
      "Source text v12 · legal controlled text unchanged",
  },
  {
    number: "3",
    title: "Current dependencies",
    description:
      "Template INV-X v4 · resource bundle v8 reviewed · accessibility profile passed",
  },
];

export default function EvidenceHistory() {
  return (
    <section className="w-full bg-[#F7F7F6] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 sm:gap-10 lg:gap-11">
        {/* ================= HEADING ================= */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-1 text-center">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-4 shrink-0 bg-[#5B6577]/40" />

            <span className="text-center text-[9px] font-bold uppercase leading-4 tracking-[0.1em] text-[#5B6577] sm:text-xs sm:tracking-[0.16em]">
              Currentness, change history &amp; evidence
            </span>

            <span className="h-px w-4 shrink-0 bg-[#5B6577]/40" />
          </div>

          {/* Heading */}
          <h2 className="m-0 w-full max-w-[1000px] text-center text-[28px] font-extrabold leading-[1.12] tracking-[-0.02em] text-[#172033] sm:text-[36px] sm:leading-[1.08] lg:text-[40px]">
            <span className="block sm:whitespace-nowrap">
              When evidence goes stale, the claim
            </span>

            <span className="block sm:whitespace-nowrap">
              comes down.
            </span>
          </h2>

          {/* Description */}
          <p className="m-0 w-full max-w-[687px] pt-0.5 text-center text-sm font-normal leading-6 text-[#5B6577] sm:text-base sm:leading-7">
            If the authoritative record is stale, conflicted or withdrawn, or
            a required dependency fails, the page stops presenting that
            language-surface combination as current support.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex w-full flex-col items-stretch gap-5 lg:flex-row lg:items-start">
          {/* ================= LEFT CARD ================= */}
          <div className="w-full min-w-0 overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)] sm:rounded-2xl lg:flex-1">
            {/* Card Header */}
            <div className="border-b border-[#E5E7EB] bg-[#FCFCFC] px-4 py-4 sm:px-5">
              <p className="m-0 text-sm font-normal leading-5 text-[#5B6577]">
                Required evidence fields.
              </p>
            </div>

            {/* Desktop */}
            <div className="hidden md:block">
              {evidenceRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[140px_minmax(0,1fr)] lg:grid-cols-[160px_minmax(0,1fr)] ${
                    index !== evidenceRows.length - 1
                      ? "border-b border-[#E8EAEE]"
                      : ""
                  }`}
                >
                  <div className="px-4 py-3.5 text-sm font-semibold leading-5 text-[#172033]">
                    {row.label}
                  </div>

                  <div className="px-4 py-3.5 text-sm font-normal leading-6 text-[#5B6577]">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile */}
            <div className="flex flex-col md:hidden">
              {evidenceRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`px-4 py-4 ${
                    index !== evidenceRows.length - 1
                      ? "border-b border-[#E8EAEE]"
                      : ""
                  }`}
                >
                  <div className="text-sm font-semibold leading-5 text-[#172033]">
                    {row.label}
                  </div>

                  <div className="mt-1 text-sm font-normal leading-6 text-[#5B6577]">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT CARD ================= */}
          <div className="w-full min-w-0 rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)] sm:rounded-2xl sm:p-6 lg:flex-1">
            {/* Title */}
            <h3 className="m-0 text-lg font-bold leading-7 text-[#172033]">
              Language detail history
            </h3>

            {/* Subtitle */}
            <p className="m-0 pt-1 text-xs font-normal leading-5 text-[#5B6577]">
              Synthetic Example Language A · invoice document surface
            </p>

            {/* History */}
            <div className="mt-2">
              {historyItems.map((item) => (
                <div
                  key={item.number}
                  className="flex items-start gap-3.5 border-t border-[#E8EAEE] py-3.5"
                >
                  {/* Number */}
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white">
                    <span className="text-xs font-bold leading-5 text-[#34415A]">
                      {item.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <p className="m-0 text-sm font-semibold leading-6 text-[#172033]">
                      {item.title}
                    </p>

                    <p className="m-0 pt-0.5 text-xs font-normal leading-5 text-[#5B6577]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* History Note */}
            <div className="border-t border-[#E8EAEE] pt-3.5">
              <p className="m-0 text-sm font-normal leading-5 text-[#5B6577]">
                Effective since 01 Aug 2026 · last reviewed 12 Aug 2026.
                History explains what was published and authorized at a point
                in time — it is not a promise of continued support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}