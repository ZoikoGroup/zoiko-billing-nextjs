import React from "react";

export default function SecurityQuality() {
  const rows = [
    {
      risk: "Sensitive document data",
      behavior:
        "Marketing previews use synthetic data; production logs and analytics minimize actual document and customer values",
    },
    {
      risk: "Translation provider exposure",
      behavior:
        "Only approved content and data classes are sent — secrets, payment data and tax identifiers excluded unless explicitly authorized",
    },
    {
      risk: "Template injection",
      behavior:
        "Controlled markup, variables and user content are sanitized and escaped",
    },
    {
      risk: "Broken placeholders",
      behavior:
        "Schema validation confirms required variables exist and types match",
    },
    {
      risk: "Missing glyph or font",
      behavior:
        "Pre-release script coverage tests fail or route to review rather than shipping boxes or missing text",
    },
    {
      risk: "Stale controlled text",
      behavior:
        "Freshness and effective-date checks run before issue",
    },
    {
      risk: "Renderer failure",
      behavior:
        "No document is marked issued until the required artifact and evidence succeed, or an explicit unknown-outcome reconciliation exists",
    },
    {
      risk: "Partial translation",
      behavior:
        "The block or fallback policy applies — incomplete high-risk content is never silently published",
    },
    {
      risk: "Audit",
      behavior:
        "Template, resource, text, applicability and fallback changes logged with actor, source, version and effective date",
    },
    {
      risk: "Privacy",
      behavior:
        "No hidden profiling from a language or locale choice; preference is purpose-bound",
    },
  ];

  return (
    <section className="w-full bg-color-grey-97-4 px-6 py-12 sm:px-8 md:px-12 lg:px-24 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
        {/* Header */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-2">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-3">
            <div className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />

            <span className="text-center text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Security, privacy, evidence, resilience &amp; QA
            </span>

            <div className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl font-[1000] leading-9 text-color-azure-11-2 sm:text-4xl sm:leading-10">
            Fail closed rather than ship missing
            glyphs.
          </h2>

          {/* Description */}
          <p className="max-w-[687px] text-center text-sm font-normal leading-6 text-color-azure-44-3 sm:text-base sm:leading-7">
            Pre-release testing uses synthetic edge cases: long and short
            strings, right-to-left, diacritics, complex scripts where
            supported, narrow columns, large amounts, long addresses, mixed
            languages and missing-resource states.
          </p>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-2xl border border-color-grey-92-4 bg-color-white-solid shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr>
                  <th className="w-60 border-b border-color-grey-92-4 bg-color-grey-99-2 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                    Risk or control
                  </th>

                  <th className="border-b border-color-grey-92-4 bg-color-grey-99-2 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                    Required behavior
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row, index) => (
                  <tr key={row.risk}>
                    <td
                      className={`w-60 px-4 py-3.5 text-sm font-semibold leading-5 text-color-azure-11-2 ${
                        index !== rows.length - 1
                          ? "border-b border-color-grey-95-10"
                          : ""
                      }`}
                    >
                      {row.risk}
                    </td>

                    <td
                      className={`px-4 py-3.5 text-sm font-normal leading-5 text-color-azure-44-3 ${
                        index !== rows.length - 1
                          ? "border-b border-color-grey-95-10"
                          : ""
                      }`}
                    >
                      {row.behavior}
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