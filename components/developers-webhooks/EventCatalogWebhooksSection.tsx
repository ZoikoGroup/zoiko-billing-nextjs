interface CatalogBehaviorRow {
  field: string;
  detail: React.ReactNode;
}

interface EventTemplateRow {
  field: string;
  detail: React.ReactNode;
}

const catalogBehaviorRows: CatalogBehaviorRow[] = [
  {
    field: "Search",
    detail: "Display name, canonical identifier, domain and description where the registry supports it",
  },
  {
    field: "Filters",
    detail: "Domain, lifecycle state, environment availability, version and status",
  },
  {
    field: "Grouping",
    detail: "By billing domain or object family",
  },
  {
    field: "Trigger definition",
    detail: (
      <>
        <span className="font-bold text-slate-900">
          Precisely when the event occurs
        </span>{" "}
        — vague &quot;when changed&quot; language is not acceptable
      </>
    ),
  },
  {
    field: "Payload semantics",
    detail: "Snapshot, reference, delta or envelope — only from approved schema authority",
  },
  {
    field: "Deprecated event",
    detail: "Persistent status, replacement link and effective dates when approved",
  },
];

const eventTemplateRows: EventTemplateRow[] = [
  {
    field: "Event name",
    detail: "Display name plus canonical identifier, from registry only",
  },
  {
    field: "Trigger",
    detail: "The exact business or system condition",
  },
  {
    field: "Availability",
    detail: "Environment, plan or region only if canonical",
  },
  {
    field: "Delivery timing",
    detail: (
      <span className="font-bold text-slate-900">
        No latency claim unless approved
      </span>
    ),
  },
  {
    field: "Payload",
    detail: "Schema link plus a sensitive-data note",
  },
  {
    field: "Verification",
    detail: "Deep link to the canonical method",
  },
  {
    field: "Acknowledgment",
    detail: "Accepted response semantics from engineering source",
  },
  {
    field: "Retries",
    detail: 'Retry behavior, or an explicit "no published guarantee" state',
  },
  {
    field: "Duplicates",
    detail: "The actual guarantee, or consumer guidance",
  },
  {
    field: "Ordering",
    detail: "Guarantee scope, or an explicit no-guarantee statement",
  },
  {
    field: "Testing / replay",
    detail: "Eligibility and safe-use behavior if supported",
  },
  {
    field: "Version history",
    detail: "Current state plus deprecation or change notes",
  },
];

export default function EventCatalogWebhooksSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="event-catalog">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          EVENT CATALOG
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Grouped by billing domain, never an alphabetical wall.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Twelve fields define every event. Where a field has no approved source, it does not
          render as a guessed placeholder — the field is simply absent.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:grid)                             */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid mt-14 w-full max-w-[1240px] grid-cols-2 gap-8 items-center text-left">
          
          {/* Left Column: Graphic Image dw2.png */}
          <div className="w-full overflow-hidden rounded-3xl shadow-xl border border-slate-800/80 bg-[#060D20]">
            <img
              src="/images/devolpers-webhooks/dw2.png"
              alt="Grouped by billing domain, never an alphabetical wall"
              className="w-full h-auto object-cover rounded-3xl block"
            />
          </div>

          {/* Right Column: Table Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden w-full">
            <div className="p-3.5 px-6 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Event definition template — twelve required fields.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <tbody className="divide-y divide-slate-100">
                  {eventTemplateRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-2.5 px-6 text-xs sm:text-sm font-bold text-slate-900 align-top w-2/5">
                        {row.field}
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

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787665579925.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Card 1: Catalog behavior */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden w-full mb-4">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Catalog behavior.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <tbody className="divide-y divide-slate-100">
                  {catalogBehaviorRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-2.5 px-4 text-xs font-bold text-slate-900 align-top w-2/5">
                        {row.field}
                      </td>
                      <td className="py-2.5 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top w-3/5">
                        {row.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card 2: Event definition template */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden w-full">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Event definition template — twelve required fields.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <tbody className="divide-y divide-slate-100">
                  {eventTemplateRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-2.5 px-4 text-xs font-bold text-slate-900 align-top w-2/5">
                        {row.field}
                      </td>
                      <td className="py-2.5 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top w-3/5">
                        {row.detail}
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
