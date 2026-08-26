interface LifecycleRow {
  requirement: string;
  behavior: React.ReactNode;
}

const mobileLifecycleRows: LifecycleRow[] = [
  {
    requirement: "State definition",
    behavior:
      "Every state carries a plain-language meaning, system consequences and permission rules",
  },
  {
    requirement: "Transition authority",
    behavior:
      "Show which operation or workflow changes the state — and say so when human intervention is required",
  },
  {
    requirement: "Immutability boundary",
    behavior: (
      <>
        Once a record is issued or evidence-bearing,{" "}
        <span className="font-bold text-slate-900">
          correction mechanisms are documented rather than direct historical mutation
        </span>
      </>
    ),
  },
  {
    requirement: "Neutral states",
    behavior:
      "Pending, needs review, unknown, partial, failed, reversed and unavailable remain distinct outcomes where applicable",
  },
  {
    requirement: "Derived versus source state",
    behavior:
      "Explain when a balance, status or metric is derived from underlying records rather than directly editable",
  },
  {
    requirement: "History",
    behavior:
      "Document the event and history relationship where auditable, without implying universal logging",
  },
];

export default function StatesLifecycleBehaviorSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="lifecycle">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          STATES &amp; LIFECYCLE BEHAVIOR
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Billing resources are not flat CRUD objects.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Their meaning depends on lifecycle state, so state tables appear only when the
          underlying transition model is approved.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-12 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-800/80 bg-[#060D20]">
          <img
            src="/images/devoloper-api-documentation/dad3.png"
            alt="Billing resources are not flat CRUD objects"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787661509277.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          
          {/* Sub-header inside card */}
          <div className="p-3.5 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
            Six lifecycle requirements and the documentation behavior each demands.
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-1/3">
                    REQUIREMENT
                  </th>
                  <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-2/3">
                    DOCUMENTATION BEHAVIOR
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mobileLifecycleRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                      {row.requirement}
                    </td>
                    <td className="py-3 px-4 text-[11px] sm:text-xs font-normal text-slate-600 leading-relaxed align-top">
                      {row.behavior}
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
