interface EventStateRow {
  badge: React.ReactNode;
  publicTreatment: React.ReactNode;
}

const eventStateRows: EventStateRow[] = [
  {
    badge: (
      <span className="bg-slate-100 text-slate-600 text-[10px] px-2.5 py-1 rounded-full font-semibold inline-flex items-center gap-1.5">
        ● Draft / in review
      </span>
    ),
    publicTreatment: "Not public.",
  },
  {
    badge: (
      <span className="bg-blue-50 text-blue-700 text-[10px] px-2.5 py-1 rounded-full font-semibold border border-blue-200/80 inline-flex items-center gap-1.5">
        o Scheduled — registration not open
      </span>
    ),
    publicTreatment: "Published only if approved; shows date, time and time zone.",
  },
  {
    badge: (
      <span className="bg-emerald-50 text-emerald-700 text-[10px] px-2.5 py-1 rounded-full font-semibold border border-emerald-200/80 inline-flex items-center gap-1.5">
        ● Registration open
      </span>
    ),
    publicTreatment: "Current schedule and accessibility, with the approved registration route.",
  },
  {
    badge: (
      <span className="bg-amber-50 text-amber-800 text-[10px] px-2.5 py-1 rounded-full font-semibold border border-amber-200/80 inline-flex items-center gap-1.5">
        ● Registration closed
      </span>
    ),
    publicTreatment: "Event detail preserved; register removed; closed state and alternatives offered.",
  },
  {
    badge: (
      <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2.5 py-1 rounded-full font-bold border border-emerald-300 inline-flex items-center gap-1.5">
        ● Live
      </span>
    ),
    publicTreatment: (
      <>
        Join shown{" "}
        <span className="font-bold text-slate-900">
          only from approved live-access state
        </span>
        ; schedule and context preserved.
      </>
    ),
  },
  {
    badge: (
      <span className="bg-amber-100/80 text-amber-900 text-[10px] px-2.5 py-1 rounded-full font-semibold border border-amber-300/80 inline-flex items-center gap-1.5">
        ● Completed — recording under review
      </span>
    ),
    publicTreatment: (
      <>
        <span className="font-bold text-slate-900">No watch promise.</span>{" "}
        Follow-up availability described only in approved terms.
      </>
    ),
  },
  {
    badge: (
      <span className="bg-emerald-50 text-emerald-700 text-[10px] px-2.5 py-1 rounded-full font-semibold border border-emerald-200/80 inline-flex items-center gap-1.5">
        ● Completed — on demand
      </span>
    ),
    publicTreatment: "Recording, transcript and materials states each truthful and independent.",
  },
  {
    badge: (
      <span className="bg-slate-100 text-slate-600 text-[10px] px-2.5 py-1 rounded-full font-semibold inline-flex items-center gap-1.5">
        ● Completed — no recording
      </span>
    ),
    publicTreatment: (
      <>
        Recap or related resources;{" "}
        <span className="font-bold text-slate-900">
          explicitly no recording, only when approved
        </span>
        .
      </>
    ),
  },
  {
    badge: (
      <span className="bg-blue-50 text-blue-700 text-[10px] px-2.5 py-1 rounded-full font-semibold border border-blue-200/80 inline-flex items-center gap-1.5">
        ● Rescheduled
      </span>
    ),
    publicTreatment: "Prominent old and new schedule; registration re-derived from time change.",
  },
  {
    badge: (
      <span className="bg-red-50 text-red-700 text-[10px] px-2.5 py-1 rounded-full font-semibold border border-red-200/80 inline-flex items-center gap-1.5">
        ● Canceled
      </span>
    ),
    publicTreatment: "Prominent cancellation; register and join removed; alternatives offered.",
  },
  {
    badge: (
      <span className="bg-slate-100 text-slate-600 text-[10px] px-2.5 py-1 rounded-full font-semibold inline-flex items-center gap-1.5">
        ● Archived
      </span>
    ),
    publicTreatment: "Historical; excluded from the default finder.",
  },
  {
    badge: (
      <span className="bg-red-100 text-red-800 text-[10px] px-2.5 py-1 rounded-full font-semibold border border-red-200/80 inline-flex items-center gap-1.5">
        ● Withdrawn
      </span>
    ),
    publicTreatment: "Removed from finder and index, with a safe route.",
  },
];

export default function EventStateMachineSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="event-state-machine">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          EVENT STATE MACHINE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Twelve states, and none of them promises a recording.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          The primary action is derived from current state — never written into marketing copy
          that then survives a schedule change.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-200/80 bg-slate-50">
          <img
            src="/images/webinar-and-events/wae2.png"
            alt="Twelve states, and none of them promises a recording"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787834480076.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              State, public treatment and the action it permits.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <th scope="col" className="py-2.5 px-4 w-1/3">STATE</th>
                    <th scope="col" className="py-2.5 px-4 w-2/3">PUBLIC TREATMENT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {eventStateRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.badge}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.publicTreatment}
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
