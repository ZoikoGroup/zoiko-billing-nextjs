interface SetupFieldRow {
  field: string;
  detail: React.ReactNode;
}

interface EndpointLifecycleRow {
  stage: string;
  detail: React.ReactNode;
}

const setupFieldRows: SetupFieldRow[] = [
  {
    field: "Name",
    detail: "Human-readable subscription name",
  },
  {
    field: "Endpoint URL",
    detail: (
      <>
        Treated as potentially sensitive configuration, validated safely;{" "}
        <span className="font-bold text-slate-900">
          never carries secret query parameters
        </span>
      </>
    ),
  },
  {
    field: "Environment",
    detail: "Always explicit — cross-environment portability is never inferred",
  },
  {
    field: "Event selection",
    detail: "Searchable approved list; select-all only if canonical and safe",
  },
  {
    field: "Verification",
    detail: "Method status and setup path from approved security source",
  },
  {
    field: "Owner",
    detail: "Person, team or service owner per the product model",
  },
  {
    field: "Status",
    detail: "Draft, verification required, active, paused, disabled or needs review — only canonical states",
  },
  {
    field: "Purpose",
    detail: "Optional, and strongly recommended for operations and handover",
  },
  {
    field: "Advanced controls",
    detail: "Source-supported settings only",
  },
];

const endpointLifecycleRows: EndpointLifecycleRow[] = [
  {
    stage: "Create",
    detail: "Owner, purpose, environment, endpoint, event selection and verification prerequisites",
  },
  {
    stage: "Verify",
    detail: (
      <>
        Canonical setup and verification state —{" "}
        <span className="font-bold text-slate-900">
          never expose secret material unnecessarily
        </span>
      </>
    ),
  },
  {
    stage: "Activate",
    detail: "Only after prerequisites pass; confirm environment and event scope",
  },
  {
    stage: "Observe",
    detail: "Recent delivery health, failures, endpoint status and change notices",
  },
  {
    stage: "Update",
    detail: "Event selection, URL, ownership or verification changes get impact treatment",
  },
  {
    stage: "Rotate material",
    detail: "Method-specific workflow from security authority only; changes audited",
  },
  {
    stage: "Pause / disable",
    detail: "Explain delivery impact and pending-event behavior only if canonical",
  },
  {
    stage: "Retire / delete",
    detail: "Confirmation, retention behavior and irreversible impact, all source-governed",
  },
];

export default function EndpointSubscriptionSetupSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="endpoint-setup">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          ENDPOINT &amp; SUBSCRIPTION SETUP
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Nine fields, and eight lifecycle stages behind them.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Advanced delivery controls render only where the platform genuinely supports them
          — batch, timeout, retry and concurrency settings are not invented to fill a panel.
        </p>

        {/* 2-Cards Grid */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-6 text-left items-start">
          
          {/* Card 1: Setup fields */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden w-full">
            <div className="p-3.5 px-6 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Setup fields.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <tbody className="divide-y divide-slate-100">
                  {setupFieldRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-6 text-xs sm:text-sm font-bold text-slate-900 align-top w-2/5">
                        {row.field}
                      </td>
                      <td className="py-3 px-6 text-xs font-normal text-slate-600 leading-relaxed align-top w-3/5">
                        {row.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Card 2: Endpoint lifecycle */}
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden w-full">
            <div className="p-3.5 px-6 bg-slate-50/50 border-b border-slate-100 text-xs font-normal text-slate-500">
              Endpoint lifecycle.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[480px]">
                <tbody className="divide-y divide-slate-100">
                  {endpointLifecycleRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition">
                      <td className="py-3 px-6 text-xs sm:text-sm font-bold text-slate-900 align-top w-2/5">
                        {row.stage}
                      </td>
                      <td className="py-3 px-6 text-xs font-normal text-slate-600 leading-relaxed align-top w-3/5">
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
