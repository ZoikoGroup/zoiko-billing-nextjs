import React from "react";

export default function AccessibilityDelivery() {
  const rows = [
    {
      surface: "PDF",
      contract:
        "Only where supported — renderer version, fonts and resources, tags and accessibility, page size, embedded metadata and visual checks all controlled",
    },
    {
      surface: "HTML & portal",
      contract:
        "Semantic headings and tables, language and locale metadata, responsive reflow, accessible interactive controls",
    },
    {
      surface: "Email",
      contract:
        "Localized subject and body may be separate from the attached document; fallback and encoding controlled",
    },
    {
      surface: "Print",
      contract:
        "A print stylesheet or template where supported — no postal-delivery assumption",
    },
    {
      surface: "Download & export",
      contract:
        "The original localized artifact plus evidence metadata; machine-readable formats governed separately",
    },
    {
      surface: "Screen reader",
      contract:
        "Document language set, mixed-language spans tagged where possible, reading order and table headers correct",
    },
    {
      surface: "Right-to-left",
      contract:
        "Bidirectional layout, numerals, tables, icons, alignment and truncation tested per supported surface",
    },
    {
      surface: "Fonts & glyphs",
      contract:
        "Approved production resources cover the supported script — a fallback cannot invent a missing glyph",
    },
  ];

  return (
    <section className="w-full bg-color-grey-97-4 px-6 py-12 sm:px-8 md:px-12 lg:px-20 xl:px-32 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
        {/* Header */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-3">
            <div className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />

            <span className="text-center text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Delivery channels, rendering &amp; accessibility
            </span>

            <div className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl font-[1000] leading-9 text-color-azure-11-2 sm:text-4xl sm:leading-10">
            Accessibility has to survive the
            translation.
          </h2>

          {/* Description */}
          <p className="max-w-[687px] text-center text-sm font-normal leading-6 text-color-azure-44-3 sm:text-base sm:leading-7">
            A language change must not break reading order, semantics,
            contrast, tags, or keyboard and screen-reader use.
          </p>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-2xl border border-color-grey-92-4 bg-color-white-solid shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr>
                  <th className="w-44 border-b border-color-grey-92-4 bg-color-grey-99-2 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                    Channel or surface
                  </th>

                  <th className="border-b border-color-grey-92-4 bg-color-grey-99-2 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                    Required contract
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row, index) => (
                  <tr key={row.surface}>
                    <td
                      className={`w-44 px-4 py-3.5 text-sm font-semibold leading-5 text-color-azure-11-2 ${
                        index !== rows.length - 1
                          ? "border-b border-color-grey-95-10"
                          : ""
                      }`}
                    >
                      {row.surface}
                    </td>

                    <td
                      className={`px-4 py-3.5 text-sm font-normal leading-5 text-color-azure-44-3 ${
                        index !== rows.length - 1
                          ? "border-b border-color-grey-95-10"
                          : ""
                      }`}
                    >
                      {row.contract}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}