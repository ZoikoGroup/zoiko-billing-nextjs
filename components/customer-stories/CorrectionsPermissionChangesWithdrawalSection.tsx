interface TriggerActionRow {
  trigger: string;
  requiredAction: React.ReactNode;
}

const triggerActionRows: TriggerActionRow[] = [
  {
    trigger: "Metric correction",
    requiredAction: "Update the claim, methodology and modified data, add a correction note where material, and notify dependent context owners",
  },
  {
    trigger: "Product changed",
    requiredAction: (
      <>
        Re-review the affected product description, link to current sources, and{" "}
        <span className="font-bold text-slate-900">
          remove any stale capability claim
        </span>
      </>
    ),
  },
  {
    trigger: "Consent narrowed",
    requiredAction: (
      <span className="font-bold text-slate-900">
        Remove the affected asset, channel, language or region immediately
      </span>
    ),
  },
  {
    trigger: "Consent withdrawn",
    requiredAction: (
      <>
        <span className="font-bold text-slate-900">
          Withdraw or anonymize as agreed
        </span>
        , remove from browse and index, revoke assets, apply a safe redirect, retain the audit internally
      </>
    ),
  },
  {
    trigger: "Evidence expired",
    requiredAction: "Move to review due, stop featuring, then reverify or archive",
  },
  {
    trigger: "Customer identity change",
    requiredAction: "Review name, logo and attribution, and apply redirects where appropriate",
  },
];

export default function CorrectionsPermissionChangesWithdrawalSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="permission-withdrawal">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          CORRECTIONS, PERMISSION CHANGES &amp; WITHDRAWAL
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Consent can be narrowed or withdrawn at any time.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Six triggers, and two of them act immediately rather than at the next review cycle.
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
                    REQUIRED ACTION
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {triggerActionRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.trigger}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.requiredAction}
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
