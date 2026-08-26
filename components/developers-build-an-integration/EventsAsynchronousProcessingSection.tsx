interface EventDecisionRow {
  decision: string;
  requirement: React.ReactNode;
}

const eventDecisionRows: EventDecisionRow[] = [
  {
    decision: "Which events are depended on?",
    requirement: "Only events from the approved catalog, with availability confirmed per environment",
  },
  {
    decision: "How is authenticity verified?",
    requirement: "The canonical verification method, before the payload is trusted or acted upon",
  },
  {
    decision: "How are duplicates handled?",
    requirement: (
      <>
        De-duplicate on the approved stable identifier —{" "}
        <span className="font-bold text-slate-900">
          never assume exactly-once delivery
        </span>
      </>
    ),
  },
  {
    decision: "Is ordering relied upon?",
    requirement: "Only where guarantees explicitly permit it; otherwise reconcile against authoritative state",
  },
  {
    decision: "Who owns receiver failure?",
    requirement: "A named owner, distinct from platform delivery evidence",
  },
  {
    decision: "What if an event is missed?",
    requirement: "A defined gap-detection and recovery path, not an assumption of completeness",
  },
];

export default function EventsAsynchronousProcessingSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="async-events">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          EVENTS &amp; ASYNCHRONOUS PROCESSING
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Platform delivery and business processing are separate outcomes.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A delivered event is not a completed workflow, and a failed delivery is not a failed
          business event.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    DECISION
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIREMENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {eventDecisionRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.decision}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.requirement}
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
