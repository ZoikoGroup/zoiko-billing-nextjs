interface ResponsibilityRow {
  field: string;
  detail: React.ReactNode;
}

const customerResponsibilityRows: ResponsibilityRow[] = [
  {
    field: "Accurate information",
    detail: (
      <>
        Enough non-sensitive context to understand impact —{" "}
        <span className="font-bold text-slate-900">secrets are not required</span>
      </>
    ),
  },
  {
    field: "Authorized requester",
    detail: (
      <>
        Identity requirements as approved;{" "}
        <span className="font-bold text-slate-900">verification internals are not exposed publicly</span>
      </>
    ),
  },
  {
    field: "Timely cooperation",
    detail: "Described only where tied to support progress and legally approved",
  },
  {
    field: "Safe-data handling",
    detail: (
      <>
        <span className="font-bold text-slate-900">
          Do not send passwords, reauthentication secrets, full card or bank data
        </span>
        , or unstated sensitive data
      </>
    ),
  },
  {
    field: "Reproduction",
    detail: (
      <>
        Reasonable, safe steps only —{" "}
        <span className="font-bold text-slate-900">no destructive action or production risk</span>
      </>
    ),
  },
  {
    field: "Third-party access",
    detail: (
      <>
        Coordinated by you where necessary;{" "}
        <span className="font-bold text-slate-900">Zoiko does not ask for third-party passwords</span>
      </>
    ),
  },
  {
    field: "Supported configuration",
    detail: "Only where policy formally conditions coverage on it, with the current source linked",
  },
];

const zoikoResponsibilityRows: ResponsibilityRow[] = [
  {
    field: "Case handling",
    detail: "Handle requests according to approved policy and stated commitments",
  },
  {
    field: "Communication",
    detail: "Keep the case state and next step clear to the requester",
  },
  {
    field: "Routing",
    detail: "Direct a request to the correct authority rather than holding it in the wrong queue",
  },
  {
    field: "Data handling",
    detail: (
      <>
        Treat submitted evidence per privacy and security policy;{" "}
        <span className="font-bold text-slate-900">never request unnecessary secrets</span>
      </>
    ),
  },
  {
    field: "Boundaries",
    detail: (
      <>
        Decline what falls outside scope{" "}
        <span className="font-bold text-slate-900">with an alternative route</span>, not a dead end
      </>
    ),
  },
  {
    field: "Authorization",
    detail: "Verify authority before disclosing account information",
  },
  {
    field: "Accuracy",
    detail: "Point to authoritative sources rather than restating mutable truth",
  },
];

export default function ResponsibilitiesSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="responsibilities">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          RESPONSIBILITIES
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Both directions, stated together.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A policy that lists only customer obligations reads as a disclaimer. Support&apos;s own
          responsibilities appear alongside them.
        </p>

        {/* 2-Table Container Grid */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-8 text-left items-start">
          
          {/* Left Table: Customer responsibilities */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3.5 px-6 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Customer responsibilities.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[320px]">
                <tbody className="divide-y divide-slate-100">
                  {customerResponsibilityRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3.5 px-6 text-xs font-bold text-slate-900 align-top w-1/3">
                        {row.field}
                      </td>
                      <td className="py-3.5 px-6 text-xs font-normal text-slate-600 leading-relaxed align-top w-2/3">
                        {row.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Table: Zoiko support responsibilities */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="p-3.5 px-6 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Zoiko support responsibilities.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[320px]">
                <tbody className="divide-y divide-slate-100">
                  {zoikoResponsibilityRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3.5 px-6 text-xs font-bold text-slate-900 align-top w-1/3">
                        {row.field}
                      </td>
                      <td className="py-3.5 px-6 text-xs font-normal text-slate-600 leading-relaxed align-top w-2/3">
                        {row.detail}
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
