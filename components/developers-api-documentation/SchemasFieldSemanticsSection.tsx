interface SchemaRuleRow {
  requirement: string;
  rule: React.ReactNode;
}

const schemaRows: SchemaRuleRow[] = [
  {
    requirement: "Field table",
    rule: "Name, type, required or optional, nullable, read-only or write-only, description, constraints, and an example only if source-approved",
  },
  {
    requirement: "Nested objects",
    rule: "Expandable but keyboard-accessible; deep nesting must not force horizontal page overflow",
  },
  {
    requirement: "Enums",
    rule: (
      <>
        Expose allowed values and exact meaning —{" "}
        <span className="font-bold text-slate-900">no unexplained color chips</span>
      </>
    ),
  },
  {
    requirement: "Money fields",
    rule: (
      <>
        Amount representation and currency semantics from the canonical schema;{" "}
        <span className="font-bold text-slate-900">
          never assume decimal versus minor units
        </span>
      </>
    ),
  },
  {
    requirement: "Date & time fields",
    rule: "Format, timezone behavior, precision and ordering semantics when verified",
  },
  {
    requirement: "Identifiers",
    rule: "Stability, uniqueness domain, case sensitivity and external-ID semantics where verified",
  },
  {
    requirement: "Read-only / Immutable",
    rule: "Marked visibly and programmatically, explaining why edits are not accepted",
  },
  {
    requirement: "Deprecated fields",
    rule: "Kept visible with deprecation status, replacement field and timeline when published",
  },
  {
    requirement: "PII / sensitive fields",
    rule: "No real sample data — synthetic values and privacy-safe descriptions only",
  },
];

export default function SchemasFieldSemanticsSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="schemas">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          SCHEMAS &amp; FIELD SEMANTICS
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Nine schema rules, and none of them guesses.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Money units, nullability and identifier behavior are documented from the canonical
          schema rather than inferred from field names.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    REQUIREMENT
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    RULE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {schemaRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.requirement}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.rule}
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
