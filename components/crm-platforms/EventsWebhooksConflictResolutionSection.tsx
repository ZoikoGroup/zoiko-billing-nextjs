interface ConflictControlRow {
  control: string;
  requiredBehavior: React.ReactNode;
}

const conflictControlRows: ConflictControlRow[] = [
  {
    control: "CRM events",
    requiredBehavior: "Verify authenticity; map provider, object, action, version, account and tenant",
  },
  {
    control: "Duplicate events",
    requiredBehavior: "Deduplicate by provider event, version or reference",
  },
  {
    control: "Out-of-order events",
    requiredBehavior: "Use version where reliable; otherwise fetch and reconcile current source state",
  },
  {
    control: "Batch import / export",
    requiredBehavior: "Manifest, object counts, per-record status, partial failure and replay-safety",
  },
  {
    control: "Idempotent create / link",
    requiredBehavior: "Stable keys prevent duplicate customer, contact or mapping creation",
  },
  {
    control: "Optimistic concurrency",
    requiredBehavior: "Version check on material shared fields; conflict if the source changed since load",
  },
  {
    control: "Unknown outcome",
    requiredBehavior: "Reconcile the mapping or object before repeating a create, update or link action",
  },
  {
    control: "Conflict queue",
    requiredBehavior: "Object, field, source, versions, current values, authority and recommended resolution",
  },
  {
    control: "Replay",
    requiredBehavior: "Safe replay must not duplicate records or overwrite newer authority",
  },
  {
    control: "Dead-letter",
    requiredBehavior: "A recoverable exception with owner, safe payload reference and review path",
  },
];

export default function EventsWebhooksConflictResolutionSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="conflict-resolution">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          EVENTS, WEBHOOKS, BATCHES, IDEMPOTENCY &amp; CONFLICT RESOLUTION
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Conflict first, arrival order never.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          If CRM and Billing both changed the same mapped field, the system evaluates current
          authority, versions, effective dates and workflow state — not whichever event landed last.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/crm-platforms/crm5.png"
            alt="Conflict first, arrival order never"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787711347845.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Controls and required behavior.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80">
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-2/5">
                      CONTROL
                    </th>
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-3/5">
                      REQUIRED BEHAVIOR
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {conflictControlRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.control}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.requiredBehavior}
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
