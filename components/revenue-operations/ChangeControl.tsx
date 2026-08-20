const scenarios = [
  {
    scenario: "Commercial input changed before issue",
    control: "Update the draft or setup through the approved workflow.",
    evidence: "Source and version preserved",
  },
  {
    scenario: "Change after issue",
    control: "Use the approved correction, credit note or adjustment path.",
    evidence: "Issued history preserved intact",
  },
  {
    scenario: "Customer detail changed",
    control: "Restricted edit with downstream impact review.",
    evidence: "Actor, time, affected objects",
  },
  {
    scenario: "Schedule changed",
    control: "Version future behavior and show the affected next event.",
    evidence: "Version history and effect date",
  },
  {
    scenario: "Charge or adjustment requested",
    control: "Reason, source, permission and approval as configured.",
    evidence: "Reason, approver, before and after",
  },
  {
    scenario: "Dispute or hold",
    control:
      "Route the exception and preserve state — never silently edit billing evidence.",
    evidence: "Dispute reason and status",
  },
  {
    scenario: "Unknown downstream result",
    control: "Reconcile before retrying any financial action.",
    evidence: "Correlation reference and reconciliation outcome",
  },
];

export default function ChangeControl() {
  return (
    <section className="w-full border-t border-gray-200 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-blue-600 opacity-70" />
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Changes, credits &amp; approval control
          </span>
        </div>

        {/* Heading */}
        <h2 className="w-full text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
          Something always changes after the input is approved.
        </h2>

        {/* Description */}
        <p className="w-full max-w-[686px] text-sm leading-6 text-slate-600 sm:text-base">
          Each scenario has a governed path. None of them overwrites an issued
          record.
        </p>

        {/* Table */}
        <div className="mt-2 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
            <p className="text-sm leading-5 text-slate-600">
              Change control by scenario.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-[25%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-600">
                    Scenario
                  </th>
                  <th className="w-[45%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-600">
                    Control
                  </th>
                  <th className="w-[30%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-600">
                    Evidence retained
                  </th>
                </tr>
              </thead>

              <tbody>
                {scenarios.map((item) => (
                  <tr key={item.scenario}>
                    <td className="border-b border-gray-200 px-4 py-3.5 text-sm font-semibold leading-5 text-slate-900">
                      {item.scenario}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3.5 text-sm leading-5 text-slate-600">
                      {item.control}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3.5 text-sm leading-5 text-slate-600">
                      {item.evidence}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="divide-y divide-gray-200 md:hidden">
            {scenarios.map((item) => (
              <div key={item.scenario} className="p-4 sm:p-5">
                <h3 className="text-sm font-semibold leading-5 text-slate-900">
                  {item.scenario}
                </h3>

                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                    Control
                  </p>
                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    {item.control}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                    Evidence retained
                  </p>
                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    {item.evidence}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom cards */}
        <div className="grid w-full grid-cols-1 gap-5 pt-2 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-6">
            <h3 className="text-base font-bold leading-7 text-slate-900">
              Human authority is retained
            </h3>

            <p className="mt-3 text-sm leading-5 text-slate-600">
              Automation may route or execute configured steps where production
              capability exists.
              <br className="hidden sm:block" />
              Sensitive corrections, approvals and overrides keep explicit
              permission and evidence.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
            <h3 className="text-base font-bold leading-7 text-slate-900">
              Duplicate financial actions are prevented
            </h3>

            <p className="mt-3 text-sm leading-5 text-slate-600">
              Where the architecture supports it, an existing-object check and
              idempotency key stop a second billing action. After a timeout, the
              outcome is Unknown — and reconciliation happens before any retry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}