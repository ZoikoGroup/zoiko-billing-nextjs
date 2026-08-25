import React from "react";

export default function LocalizationGovernance() {
  const rows = [
    {
      action: "Create or edit a draft template",
      authority:
        "Content or design role, scoped to entity, surface and language",
    },
    {
      action: "Edit controlled legal or tax text",
      authority:
        "Restricted authority, with source, reviewer and effective period required",
    },
    {
      action: "Add a language resource",
      authority:
        "Localization or content role, with source and review state",
    },
    {
      action: "Publish a template or resource",
      authority:
        "Release permission with all required approvals complete",
    },
    {
      action: "Change entity applicability",
      authority:
        "Entity or control permission, with an impact preview",
    },
    {
      action: "Change jurisdiction applicability",
      authority:
        "Jurisdiction, legal or product authority — no editor-only override",
    },
    {
      action: "Change fallback policy",
      authority:
        "Localization or product owner, with testing required",
    },
    {
      action: "Override a missing-string block",
      authority:
        "Restricted exception permission, plus reason and expiry or effective scope",
    },
    {
      action: "Retire a language or template",
      authority:
        "A versioned future-state action; issued history is retained",
    },
    {
      action: "Export localization resources",
      authority:
        "Permissioned, with sensitive controlled text handled per policy",
    },
  ];

  return (
    <section className="w-full bg-color-grey-97-4 px-6 py-12 sm:px-8 md:px-12 lg:px-24 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
        {/* Header */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-2">
          <div className="flex w-full items-center justify-center gap-3">
            <div className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />

            <span className="text-center text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Permissions, approvals &amp; localization governance
            </span>

            <div className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl font-[1000] leading-9 text-color-azure-11-2 sm:text-4xl sm:leading-10">
            A design editor cannot self-authorize
            legal text.
          </h2>

          {/* Description */}
          <p className="max-w-[687px] text-center text-sm font-normal leading-6 text-color-azure-44-3 sm:text-base sm:leading-7">
            Nor can they silently expand a template to new entities or markets
            without the required approval path.
          </p>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-2xl border border-color-grey-92-4 bg-color-white-solid shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr>
                  <th className="w-96 border-b border-color-grey-92-4 bg-color-grey-99-2 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                    Action
                  </th>

                  <th className="border-b border-color-grey-92-4 bg-color-grey-99-2 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-color-azure-60">
                    Required authority
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row, index) => (
                  <tr key={row.action}>
                    <td
                      className={`w-96 px-4 py-3.5 text-sm font-semibold leading-5 text-color-azure-11-2 ${
                        index !== rows.length - 1
                          ? "border-b border-color-grey-95-10"
                          : ""
                      }`}
                    >
                      {row.action}
                    </td>

                    <td
                      className={`px-4 py-3.5 text-sm font-normal leading-5 text-color-azure-44-3 ${
                        index !== rows.length - 1
                          ? "border-b border-color-grey-95-10"
                          : ""
                      }`}
                    >
                      {row.authority}
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