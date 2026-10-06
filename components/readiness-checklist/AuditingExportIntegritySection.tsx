interface RequirementRow {
  element: string;
  content: string;
  rule: string;
  highlight?: boolean;
}

const requirements: RequirementRow[] = [
  {
    element: "Format",
    content: "A non-editable format: PDF, or an approved/immutable document.",
    rule: "Disables editing in the downstream workflow.",
  },
  {
    element: "Generated date",
    content:
      "Timestamp of generation. Does not imply a source-system expiration date.",
    rule: "An export date makes no certification claim unless so guarded.",
    highlight: true,
  },
  {
    element: "Scope",
    content: "Audited domain scope summary.",
    rule: "A checklist without scope is unusable later.",
  },
  {
    element: "Statuses",
    content: "Preserves all status labels and the legend.",
    rule: "Prevents distortion of review postures.",
  },
  {
    element: "Source links",
    content:
      "Primary evidence reference names with accessible URLs/codes where governed.",
    rule: "A checklist without sources is an opinion.",
  },
  {
    element: "Disclaimers",
    content:
      "Non-certification and non-legal advice declarations on the first and final page.",
    rule: "No export may be circulated without this page appended.",
    highlight: true,
  },
  {
    element: "Satisfaction date",
    content:
      "Accredited or reviewed date against each requirement where applicable.",
    rule: "Preventing an outdated posture being interpreted as current.",
    highlight: true,
  },
  {
    element: "Accountability",
    content:
      "Support owner names/roles recorded against reviews and next-step actions.",
    rule: "An item without an owner remains unresolved.",
  },
  {
    element: "Versioning",
    content:
      "Checklist template version and source document version.",
    rule: "A current template does not make the contents current.",
    highlight: true,
  },
];

export default function AuditingExportIntegritySection() {
  return (
    <section className="w-full bg-[#f8faff] py-16 font-[family-name:var(--font-inter)] text-slate-900 sm:py-20 md:py-24">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* EYEBROW */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7890b2] sm:text-xs">
            Auditing, Print &amp; Export Integrity
          </span>
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
        </div>

        {/* HEADING */}
        <h2 className="!font-[family-name:var(--font-jakarta)] !m-0 max-w-[850px] text-center !text-[30px] font-extrabold !leading-[1.18] !tracking-[-0.035em] text-[#091127] sm:!text-[38px] md:!text-[44px]">
          Nine requirements, and two protect <br className="hidden sm:inline" />
          the reader from their own export.
        </h2>

        {/* SUBTITLE */}
        <p className="!m-0 mt-3.5 max-w-[640px] text-center text-xs leading-relaxed text-[#5d7192] sm:text-sm md:text-base">
          An exported checklist circulates further than the page it came from.
        </p>

        {/* DESKTOP 3-COLUMN TABLE CONTAINER (hidden lg:block) */}
        <div className="mt-10 hidden w-full max-w-[1240px] overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_4px_25px_rgba(15,23,42,0.04)] sm:mt-12 sm:rounded-[20px] lg:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-xs sm:text-[13px]">
              {/* TABLE HEAD */}
              <thead>
                <tr className="bg-[#091127] text-[11px] font-bold uppercase tracking-wider text-white sm:text-xs">
                  <th className="py-4 px-6 w-[22%]">Export Element</th>
                  <th className="py-4 px-6 w-[43%]">Minimum Content</th>
                  <th className="py-4 px-6 w-[35%]">Rule</th>
                </tr>
              </thead>

              {/* TABLE BODY */}
              <tbody className="divide-y divide-[#edf0f4]">
                {requirements.map((row) => (
                  <tr
                    key={row.element}
                    className={`transition-colors ${
                      row.highlight
                        ? "bg-[#fff7f8] hover:bg-[#ffeff1]"
                        : "bg-white hover:bg-[#fafcff]"
                    }`}
                  >
                    {/* ELEMENT */}
                    <td className="py-3.5 px-6 font-bold text-[#091127] align-top">
                      {row.element}
                    </td>

                    {/* MINIMUM CONTENT */}
                    <td className="py-3.5 px-6 leading-relaxed text-[#4b5563] align-top">
                      {row.content}
                    </td>

                    {/* RULE */}
                    <td
                      className={`py-3.5 px-6 leading-relaxed align-top font-medium ${
                        row.highlight
                          ? "text-[#be123c] font-semibold"
                          : "text-[#4b5563]"
                      }`}
                    >
                      {row.rule}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* MOBILE STACKED CARDS FORMAT (block lg:hidden) */}
        <div className="mt-8 block w-full max-w-[1240px] divide-y divide-slate-100 rounded-2xl border border-slate-200/90 bg-white shadow-[0_4px_25px_rgba(15,23,42,0.04)] lg:hidden">
          {requirements.map((row) => (
            <div
              key={row.element}
              className={`p-4 text-left transition sm:p-5 ${
                row.highlight ? "bg-[#fff9fa]" : "bg-white"
              }`}
            >
              <h3 className="!font-[family-name:var(--font-jakarta)] !m-0 text-xs font-bold text-[#091127] sm:text-sm">
                {row.element}
              </h3>

              <div className="mt-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Content
                </span>
                <p className="!m-0 mt-0.5 text-xs leading-relaxed text-slate-700">
                  {row.content}
                </p>
              </div>

              <div className="mt-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Why
                </span>
                <p
                  className={`!m-0 mt-0.5 text-xs leading-relaxed ${
                    row.highlight
                      ? "font-semibold text-[#be123c]"
                      : "text-slate-600"
                  }`}
                >
                  {row.rule}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE DISCLAIMER ALERT BOX (lg:hidden) */}
        <div className="mt-5 w-full max-w-[1240px] rounded-xl border border-rose-200/90 bg-[#fff1f2] p-4 text-left text-xs leading-relaxed text-[#9f1239] shadow-sm lg:hidden">
          <strong className="font-bold text-[#881337]">
            The disclaimer requirement appears on both the first and final page for a reason that has nothing to do with legal habit.
          </strong>{" "}
          A completed checklist is usually the artifact that gets circulated to an auditor, a prospect, or a stakeholder as proof of a &ldquo;clean bill&rdquo; &mdash; detached from every qualification the page around it provided. The disclaimers must travel with the document.
        </div>
      </div>
    </section>
  );
}
