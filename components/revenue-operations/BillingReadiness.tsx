"use client";

export default function BillingReadiness() {
  const rows = [
    {
      requirement: "Customer record",
      state: "Ready",
      stateType: "ready",
      source: "Customer Records",
      owner: "Billing Ops",
    },
    {
      requirement: "Billing profile fields",
      state: "Needs input",
      stateType: "input",
      detail: "Billing contact absent",
      source: "CRM-REF-2201",
      owner: "Sales/CRM Ops",
    },
    {
      requirement: "Currency, entity & jurisdiction",
      state: "Ready",
      stateType: "ready",
      source: "Global Billing availability",
      owner: "Billing Ops",
    },
    {
      requirement: "Schedule & timing",
      state: "Changed since review",
      stateType: "changed",
      detail: "Effective date moved after readiness was assessed",
      source: "SCH-0117",
      owner: "Billing Ops",
    },
    {
      requirement: "Charges & line inputs",
      state: "Ready",
      stateType: "ready",
      source: "Charges & Adjustments",
      owner: "Billing Ops",
    },
    {
      requirement: "Approval policy",
      state: "Needs approval",
      stateType: "approval",
      detail: "Approver assigned, 3 days open",
      source: "Workflow policy v9",
      owner: "Finance Approver",
    },
    {
      requirement: "Document & delivery configuration",
      state: "Ready",
      stateType: "ready",
      source: "Documents & Delivery",
      owner: "Billing Ops",
    },
    {
      requirement: "Integration dependencies",
      state: "Needs verification",
      stateType: "verification",
      detail: "CRM route last verified 13 Aug",
      source: "Integration registry",
      owner: "Integration Admin",
    },
  ];

  const states = [
    ["Not assessed", "neutral"],
    ["Needs input", "input"],
    ["Needs approval", "approval"],
    ["Ready", "ready"],
    ["Changed since review", "changed"],
    ["Blocked", "blocked"],
    ["Unsupported", "unsupported"],
    ["Unknown", "unknown"],
  ];

  const stateStyles: Record<string, string> = {
    neutral:
      "bg-slate-100 text-slate-600 border-slate-200 before:bg-slate-500",
    input:
      "bg-orange-50 text-orange-700 border-orange-200 before:bg-orange-500",
    approval:
      "bg-slate-100 text-slate-700 border-slate-300 before:border-2 before:border-slate-600 before:bg-transparent",
    ready:
      "bg-emerald-50 text-emerald-700 border-emerald-200 before:bg-emerald-600",
    changed:
      "bg-orange-50 text-orange-700 border-orange-200 before:bg-orange-500",
    blocked:
      "bg-red-50 text-red-700 border-red-200 before:bg-red-500",
    unsupported:
      "bg-slate-100 text-slate-700 border-slate-200 before:bg-slate-500",
    unknown:
      "bg-blue-50 text-blue-700 border-blue-200 before:bg-blue-500",
    verification:
      "bg-slate-100 text-slate-700 border-slate-200 before:bg-slate-500",
  };

  return (
    <section className="w-full border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="text-xs font-bold uppercase leading-4 tracking-[0.16em] text-blue-600">
            Billing readiness &amp; setup
          </span>
        </div>

        {/* Heading */}
        <h2 className="m-0 w-full text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
          Readiness is a list of specific blockers, not a percentage.
        </h2>

        {/* Description */}
        <div className="w-full max-w-[686px]">
          <p className="m-0 text-sm leading-6 text-slate-600 sm:text-base">
            Compressing readiness into one number hides the single dependency
            that will stop the run. Each requirement carries its own state,
            source and owner.
          </p>
        </div>

        {/* Readiness Table */}
        <div className="mt-5 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
            <p className="m-0 text-sm leading-5 text-slate-600">
              Readiness checklist for a synthetic billing object. One blocked
              dependency keeps the object out of Ready.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <div className="min-w-[1000px]">
              <div className="grid grid-cols-[1.15fr_1.35fr_0.8fr_0.65fr] border-b border-slate-200 bg-slate-50">
                {["Requirement", "State", "Source", "Owner"].map((item) => (
                  <div
                    key={item}
                    className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-500"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {rows.map((row) => (
                <div
                  key={row.requirement}
                  className="grid grid-cols-[1.15fr_1.35fr_0.8fr_0.65fr] border-b border-slate-200 last:border-b-0"
                >
                  <div className="px-4 py-3.5">
                    <p className="m-0 text-sm font-semibold leading-5 text-slate-900">
                      {row.requirement}
                    </p>
                  </div>

                  <div className="px-4 py-3.5">
                    <Status
                      label={row.state}
                      type={row.stateType}
                      styles={stateStyles}
                    />

                    {row.detail && (
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {row.detail}
                      </p>
                    )}
                  </div>

                  <div className="px-4 py-3.5 text-sm leading-5 text-slate-600">
                    {row.source}
                  </div>

                  <div className="px-4 py-3.5 text-sm leading-5 text-slate-600">
                    {row.owner}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile cards */}
          <div className="divide-y divide-slate-200 md:hidden">
            {rows.map((row) => (
              <div key={row.requirement} className="p-4">
                <p className="m-0 text-sm font-semibold leading-5 text-slate-900">
                  {row.requirement}
                </p>

                <div className="mt-3">
                  <Status
                    label={row.state}
                    type={row.stateType}
                    styles={stateStyles}
                  />

                  {row.detail && (
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {row.detail}
                    </p>
                  )}
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
                  <div>
                    <p className="m-0 text-[11px] font-bold uppercase tracking-wide text-slate-400">
                      Source
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      {row.source}
                    </p>
                  </div>

                  <div>
                    <p className="m-0 text-[11px] font-bold uppercase tracking-wide text-slate-400">
                      Owner
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      {row.owner}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid w-full grid-cols-1 gap-5 pt-2 lg:grid-cols-2">
          {/* State Model */}
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-6 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] sm:px-6">
            <h3 className="m-0 text-base font-bold leading-7 text-slate-900">
              Readiness state model
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {states.map(([label, type]) => (
                <Status
                  key={label}
                  label={label}
                  type={type}
                  styles={stateStyles}
                />
              ))}
            </div>

            <p className="mt-5 mb-0 text-sm leading-5 text-slate-600">
              Each state names its action: resolve input with the source owner,
              route the approval, revalidate the affected scope, show the
              blocking owner and reason, route a fit review, or reconcile
              rather than guess.
            </p>
          </div>

          {/* Changed */}
          <div className="rounded-2xl border border-slate-200 bg-slate-100 px-5 py-6 sm:px-6">
            <h3 className="m-0 text-base font-bold leading-7 text-slate-900">
              Changed means changed
            </h3>

            <p className="mt-3 mb-0 text-sm leading-5 text-slate-600">
              A previously Ready state cannot stay Ready after a material
              input, mapping, role or policy change until the affected scope
              has been reviewed again. Revalidation is targeted to what
              actually changed, not the whole object.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Status({
  label,
  type,
  styles,
}: {
  label: string;
  type: string;
  styles: Record<string, string>;
}) {
  return (
    <span
      className={`relative inline-flex min-h-6 items-center rounded-md border px-2.5 py-0.5 pl-6 text-xs font-semibold leading-4 ${styles[type] || styles.neutral} before:absolute before:left-2 before:top-1/2 before:size-1.5 before:-translate-y-1/2 before:rounded-sm`}
    >
      {label}
    </span>
  );
}