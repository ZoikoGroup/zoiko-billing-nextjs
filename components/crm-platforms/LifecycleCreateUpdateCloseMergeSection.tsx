interface CrmLifecycleRow {
  crmEvent: string;
  billingTreatment: React.ReactNode;
}

const crmLifecycleRows: CrmLifecycleRow[] = [
  {
    crmEvent: "Account created",
    billingTreatment: "May create or link a Billing draft or reference only if configured and validated",
  },
  {
    crmEvent: "Account updated",
    billingTreatment: "Apply only mapped fields according to field authority and version",
  },
  {
    crmEvent: "Account closed or lost",
    billingTreatment: (
      <>
        <span className="font-bold text-slate-900">
          Does not automatically close the Billing account
        </span>{" "}
        — creates context or review per mapping
      </>
    ),
  },
  {
    crmEvent: "Account reactivated",
    billingTreatment: "Does not automatically reactivate the Billing account",
  },
  {
    crmEvent: "Account merged",
    billingTreatment: "Review and remap external IDs; Billing customer records are not silently merged",
  },
  {
    crmEvent: "Account deleted",
    billingTreatment: (
      <>
        Unlink, restrict or reference per Billing retention —{" "}
        <span className="font-bold text-slate-900">
          no automatic financial-record deletion
        </span>
      </>
    ),
  },
  {
    crmEvent: "Parent changed",
    billingTreatment: "Relationship mapping review; no automatic permission, balance or tax inheritance",
  },
  {
    crmEvent: "Contact removed",
    billingTreatment: "Update the mapped relation only if purpose and retention allow; issued-document evidence remains",
  },
  {
    crmEvent: "Opportunity closed",
    billingTreatment: "A sales context update only; no automatic financial finality",
  },
  {
    crmEvent: "Billing customer archived",
    billingTreatment: "Outbound CRM status may update if configured; the CRM record can remain for sales purposes",
  },
];

export default function LifecycleCreateUpdateCloseMergeSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="lifecycle-events">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          LIFECYCLE: CREATE, UPDATE, CLOSE, MERGE, DELETE &amp; REPARENT
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          One system&apos;s close state is not authoritative everywhere.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Sales lifecycle, CRM data lifecycle and financial-record lifecycle are different things.
          Integration coordinates them without pretending otherwise.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/3">
                    CRM EVENT
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-2/3">
                    BILLING TREATMENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {crmLifecycleRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.crmEvent}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.billingTreatment}
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
