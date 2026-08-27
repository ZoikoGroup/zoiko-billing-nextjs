interface FieldPropertyRow {
  property: string;
  detail: React.ReactNode;
}

interface ConflictStrategyRow {
  strategy: string;
  description: React.ReactNode;
}

const fieldPropertyRows: FieldPropertyRow[] = [
  { property: "Field identity", detail: "Stable Billing field, CRM field or API path, and object" },
  { property: "Direction", detail: "Inbound, outbound, or explicit controlled bidirectional behavior" },
  { property: "Authority", detail: "CRM, Billing, external, reference-only, manual override, or no sync" },
  { property: "Transform", detail: "Format, enumeration, unit or normalization rule — versioned" },
  { property: "Requiredness", detail: "Which workflow or context requires it" },
  { property: "Editability", detail: "Which side may edit, under what permission and state" },
  { property: "Effective date", detail: "When the mapped value applies; future, current and history distinguished" },
  { property: "Freshness", detail: "Last synchronized or verified, plus stale threshold" },
  { property: "Conflict", detail: "What happens if both sides change, or the authoritative source is unavailable" },
  { property: "Sensitivity & purpose", detail: "Data classification and permitted destination" },
  { property: "Retention", detail: "What happens when the source closes or deletes the field" },
];

const conflictStrategyRows: ConflictStrategyRow[] = [
  { strategy: "Authority wins", description: "Only if authority is explicit and current, and the other value is non-authoritative" },
  { strategy: "Review required", description: "For material ambiguous field conflicts" },
  { strategy: "Reject change", description: "When target or source state makes the change unsafe" },
  { strategy: "Reference-only display", description: "Show the other system's value without changing Billing behavior" },
  { strategy: "Manual exception", description: "A time-scoped override with reason, approval and history" },
];

export default function FieldLevelSourceAuthorityMappingSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="field-authority">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          FIELD-LEVEL SOURCE AUTHORITY &amp; MAPPING
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Timestamps alone do not determine truth.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A newer CRM value must not overwrite an authoritative Billing term, address, contact
          role or lifecycle state unless the mapping contract explicitly permits it.
        </p>

        {/* 2-Column Grid Layout */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-8 text-left items-start">
          
          {/* Left Column Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden w-full">
            <div className="p-3.5 px-6 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Every material shared field carries eleven contract properties.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <tbody className="divide-y divide-slate-100">
                  {fieldPropertyRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-2.5 px-6 text-xs sm:text-sm font-bold text-slate-900 align-top w-2/5">
                        {row.property}
                      </td>
                      <td className="py-2.5 px-6 text-xs font-normal text-slate-600 leading-relaxed align-top w-3/5">
                        {row.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden w-full">
            <div className="p-3.5 px-6 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Five governed conflict strategies. None of them is last-write-wins.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <tbody className="divide-y divide-slate-100">
                  {conflictStrategyRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-6 text-xs sm:text-sm font-bold text-slate-900 align-top w-2/5">
                        {row.strategy}
                      </td>
                      <td className="py-3 px-6 text-xs font-normal text-slate-600 leading-relaxed align-top w-3/5">
                        {row.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
