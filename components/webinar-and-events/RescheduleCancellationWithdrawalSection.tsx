interface EventTriggerRow {
  trigger: string;
  requiredBehavior: React.ReactNode;
}

const eventTriggerRows: EventTriggerRow[] = [
  {
    trigger: "Rescheduled",
    requiredBehavior: "Prominent banner; the new schedule is primary; the old date shown as changed context; registration re-derived",
  },
  {
    trigger: "Canceled",
    requiredBehavior: (
      <>
        Prominent cancellation; register and join removed; alternatives offered —{" "}
        <span className="font-bold text-slate-900">
          no ambiguous crossed-out-only date
        </span>
      </>
    ),
  },
  {
    trigger: "Speaker change",
    requiredBehavior: "Speaker section and last-updated date revised; no notification claim unless a system handles it",
  },
  {
    trigger: "Format or location change",
    requiredBehavior: "Prominent update wherever in-person action changes",
  },
  {
    trigger: "Withdrawn",
    requiredBehavior: (
      <>
        Removed from finder and index with a safe route —{" "}
        <span className="font-bold text-slate-900">
          no sensitive internal reasons exposed
        </span>
      </>
    ),
  },
  {
    trigger: "Emergency change",
    requiredBehavior: "A publisher may change state without the full editorial cycle, with audit and later review",
  },
];

export default function RescheduleCancellationWithdrawalSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="reschedule-withdrawal">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          RESCHEDULE, CANCELLATION &amp; WITHDRAWAL
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 !font-[family-name:var(--font-jakarta)] !text-2xl sm:!text-3xl lg:!text-[36px] xl:!text-[38px] !font-bold !leading-[1.2] !tracking-[-0.02em] text-slate-900 max-w-3xl">
          A crossed-out date is not a cancellation notice.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-sm sm:text-[15px] font-normal leading-relaxed text-slate-500">
          Six triggers, each with a required public behavior that leaves no ambiguity about whether to show up.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    TRIGGER
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIRED BEHAVIOR
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {eventTriggerRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.trigger}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.requiredBehavior}
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
