interface ShellRegionRow {
  region: string;
  requiredContent: string;
}

const shellRows: ShellRegionRow[] = [
  {
    region: "Left navigation",
    requiredContent:
      "Searchable hierarchical groups, active item, expandable resource family, concept pages, error and version sections",
  },
  {
    region: "Content header",
    requiredContent:
      "Resource or operation title, one-sentence purpose, availability, version, maturity, permission summary and last-reviewed marker when supported",
  },
  {
    region: "Request block",
    requiredContent:
      "Method and path from verified source only, parameter groups, request body, content type, idempotency note when applicable",
  },
  {
    region: "Response block",
    requiredContent:
      "Success statuses, response schema, field descriptions, reliability behavior if verified, example response",
  },
  {
    region: "Right table of contents",
    requiredContent:
      "Overview, permissions, parameters, request, response, errors, examples, related events, related resources",
  },
  {
    region: "Bottom next steps",
    requiredContent:
      "Previous and next reference, plus Authentication, Webhooks, Sandbox or Build an Integration as context requires",
  },
];

export default function DocumentationShellSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="shell">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          DOCUMENTATION SHELL
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          One reference pattern, never relearned.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          The shell above is the working surface: persistent navigation, content header with
          availability, structured request and response blocks, and an in-page table of
          contents. Six UI regions carry fixed responsibilities.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    UI REGION
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIRED CONTENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {shellRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.region}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.requiredContent}
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
