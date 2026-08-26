interface ClosureItemRow {
  item: string;
  completion: React.ReactNode;
}

const closureItemRows: ClosureItemRow[] = [
  {
    item: "Ownership transfer",
    completion: "New owners receive architecture, sources, runbooks, evidence and access responsibility",
  },
  {
    item: "Stop new activity",
    completion: "Application-side processing disabled through an architecture-appropriate control",
  },
  {
    item: "Webhook endpoints",
    completion: "Subscriptions and verification material handled through the canonical Webhooks process",
  },
  {
    item: "Credentials",
    completion: "Revoked or rotated, with obsolete permissions removed through Authentication",
  },
  {
    item: "Scheduled jobs",
    completion: "Verified jobs stopped, with no orphan retry queues left running",
  },
  {
    item: "Data & evidence",
    completion: "Retained or deleted according to policy and legal obligation",
  },
  {
    item: "Final reconciliation",
    completion: (
      <span className="font-bold text-slate-900">
        Confirm no unresolved divergence, duplicate or late event processing, or pending financial action
      </span>
    ),
  },
  {
    item: "Documentation",
    completion: "Pattern marked retired, owners updated, required history preserved",
  },
];

export default function HandoverDecommissionSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="handover-decommission">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          HANDOVER &amp; DECOMMISSION
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          An integration ends with reconciliation, not deletion.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Eight closure items, ending with confirmation that no business state divergence
          remains unresolved.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-800/80 bg-[#060D20]">
          <img
            src="/images/developers-build-an-integration/dban7.png"
            alt="An integration ends with reconciliation, not deletion"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787669414590.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Table Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3 px-4 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Closure item and required completion.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80">
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-2/5">
                      ITEM
                    </th>
                    <th scope="col" className="py-2.5 px-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-3/5">
                      COMPLETION
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {closureItemRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-4 text-xs font-bold text-slate-900 align-top">
                        {row.item}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-600 leading-relaxed align-top">
                        {row.completion}
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
