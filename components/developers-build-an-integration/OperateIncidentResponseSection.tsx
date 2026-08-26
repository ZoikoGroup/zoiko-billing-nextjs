interface OperationalConcernRow {
  concern: string;
  ownerAndAction: React.ReactNode;
}

const operationalConcernRows: OperationalConcernRow[] = [
  {
    concern: "API failures",
    ownerAndAction: "Technical owner triages against canonical error sources, preserving safe correlation evidence",
  },
  {
    concern: "Authentication failures",
    ownerAndAction: "Credential owner checks expiry, revocation, permission and configuration through the Authentication process",
  },
  {
    concern: "Webhook delivery failures",
    ownerAndAction: "Receiver owner and platform evidence reviewed separately",
  },
  {
    concern: "Business-processing failures",
    ownerAndAction: (
      <>
        Integration owner resolves internal logic —{" "}
        <span className="font-bold text-slate-900">
          do not misclassify as a delivery failure
        </span>
      </>
    ),
  },
  {
    concern: "Reconciliation exceptions",
    ownerAndAction: "Finance or operations owner determines authoritative business state and the corrective path",
  },
  {
    concern: "Security or privacy incident",
    ownerAndAction: "Routed through the approved incident process — no playbooks or service levels embedded here",
  },
  {
    concern: "Deprecation warning",
    ownerAndAction: "Change owner assesses impact, schedules migration testing and updates evidence",
  },
  {
    concern: "Support escalation",
    ownerAndAction: (
      <>
        Canonical support path with safe metadata —{" "}
        <span className="font-bold text-slate-900">
          never secrets or raw payloads as default material
        </span>
      </>
    ),
  },
];

export default function OperateIncidentResponseSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="operate-incident">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          OPERATE &amp; INCIDENT RESPONSE
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Misclassifying a failure sends the wrong team.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Eight operational concerns, each with the owner who can actually resolve it.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    CONCERN
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    OWNER AND ACTION
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {operationalConcernRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.concern}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.ownerAndAction}
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
