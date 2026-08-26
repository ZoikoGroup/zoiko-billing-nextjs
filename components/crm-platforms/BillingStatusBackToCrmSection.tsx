interface OutboundSummaryRow {
  summaryItem: string;
  permittedScope: React.ReactNode;
}

const outboundSummaryRows: OutboundSummaryRow[] = [
  {
    summaryItem: "Billing account link",
    permittedScope: (
      <>
        A deep link or reference for the authorized team.{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● no full financial history
        </span>
      </>
    ),
  },
  {
    summaryItem: "Invoice status summary",
    permittedScope: (
      <>
        Draft, issued, delivered, overdue or paid summary where approved.{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● allowlisted fields only
        </span>
      </>
    ),
  },
  {
    summaryItem: "Outstanding indicator",
    permittedScope: (
      <>
        A high-level open or overdue state if explicitly approved.{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● no line-item ledger sync
        </span>
      </>
    ),
  },
  {
    summaryItem: "Payment status summary",
    permittedScope: (
      <>
        Paid, partial or unpaid only when needed.{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● card/bank details omitted
        </span>
      </>
    ),
  },
  {
    summaryItem: "Billing exception",
    permittedScope: (
      <>
        Needs input, approval or delivery issue if a routing purpose exists.{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● routing purpose required
        </span>
      </>
    ),
  },
  {
    summaryItem: "Next billing action",
    permittedScope: (
      <>
        An approved operational callout where useful.{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● no automatic sales trigger
        </span>
      </>
    ),
  },
  {
    summaryItem: "Last billing activity",
    permittedScope: (
      <>
        A timestamp or event summary.{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● event-level only
        </span>
      </>
    ),
  },
  {
    summaryItem: "Renewal / expansion flag",
    permittedScope: (
      <>
        Only if a separately governed source and purpose exists.{" "}
        <span className="bg-purple-100/70 text-purple-700 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded border border-purple-200/60 inline-block">
          ● no automatic scoring
        </span>
      </>
    ),
  },
];

export default function BillingStatusBackToCrmSection() {
  return (
    <section className="w-full bg-[#0B132B] py-12 lg:py-24 text-white border-t border-slate-800" id="outbound-status">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          <span className="h-px w-5 bg-slate-600" />
          BILLING STATUS &amp; OPERATIONAL CONTEXT BACK TO CRM
          <span className="h-px w-5 bg-slate-600" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-white tracking-tight max-w-3xl">
          Minimum necessary outbound.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-300">
          CRM receives the least billing context needed for the declared workflow. It does not
          become a shadow finance database.
        </p>

        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:block)                            */}
        {/* ========================================================================= */}
        <div className="hidden lg:block mt-14 w-full max-w-[1240px] overflow-hidden rounded-3xl shadow-xl border border-slate-700/80 bg-[#060D20]">
          <img
            src="/images/crm-platforms/crm4.png"
            alt="Minimum necessary outbound"
            className="w-full h-auto object-cover rounded-3xl block"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787711284254.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-8 w-full max-w-[640px] text-left">
          
          {/* Mobile Dark Table Card */}
          <div className="rounded-2xl border border-slate-800 bg-[#0E1A3C]/90 shadow-lg overflow-hidden w-full">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <thead>
                  <tr className="bg-slate-900/60 border-b border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <th scope="col" className="py-2.5 px-4 w-2/5">OUTBOUND SUMMARY</th>
                    <th scope="col" className="py-2.5 px-4 w-3/5">PERMITTED SCOPE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {outboundSummaryRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition">
                      <td className="py-3 px-4 text-xs font-bold text-white align-top">
                        {row.summaryItem}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-slate-300 leading-relaxed align-top">
                        {row.permittedScope}
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
