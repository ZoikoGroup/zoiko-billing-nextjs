interface PresentationRuleRow {
  area: string;
  specification: React.ReactNode;
}

const presentationRuleRows: PresentationRuleRow[] = [
  {
    area: "Operation docs",
    specification:
      "Display authentication required or not required only when source-verified",
  },
  {
    area: "Header & example",
    specification:
      "A placeholder or structured snippet with the secret redacted",
  },
  {
    area: "Code tabs",
    specification:
      "Do not insert a real secret into copied code; any environment-variable pattern must be approved and explicit",
  },
  {
    area: "Interactive explorer",
    specification: (
      <>
        <span className="inline-flex items-center gap-1 rounded bg-amber-100/90 border border-amber-300 text-amber-800 font-semibold px-2 py-0.5 text-[11px] mr-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
          Conditional
        </span>{" "}
        — must not ship until credential handling, environment separation, request logging, redaction, destructive-operation controls and permission enforcement pass separate security review
      </>
    ),
  },
  {
    area: "Error display",
    specification: (
      <span className="font-bold text-slate-900">
        Never echo a full authorization header, secret, signature, key or sensitive request body
      </span>
    ),
  },
  {
    area: "Support evidence",
    specification:
      "Safe request or correlation evidence only where canonically available and safe to disclose",
  },
];

export default function RequestAuthPresentationSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="presentation">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          REQUEST AUTHENTICATION PRESENTATION
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          A copied code sample must never contain a real secret.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Six presentation rules, including one capability that cannot ship without separate
          security review.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/5">
                    AREA
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-4/5">
                    SPECIFICATION
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {presentationRuleRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.area}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.specification}
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
