const reportStates = [
  "Loading",
  "Current",
  "Stale",
  "Definition unavailable",
  "Permission denied",
];

const exportStates = ["Pending", "Ready", "Failed"];

export default function OpReporting() {
  return (
    <section className="w-full border-t border-gray-200 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-blue-600 opacity-70" />
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Operational reporting &amp; evidence
          </span>
        </div>

        {/* Heading */}
        <h2 className="w-full text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
          Operational metrics, with the definition attached.
        </h2>

        {/* Description */}
        <p className="w-full max-w-[686px] text-sm leading-6 text-slate-600 sm:text-base">
          Each figure names its source, definition, time basis and exclusions
          — the same disclosure carried by the stage summary at the top of
          this page.
        </p>

        {/* Image */}
        <div className="mt-2 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <img
            src="/images/revenue-operations/op-reporting.png"
            alt="Operational reporting and evidence"
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Supporting cards */}
        <div className="grid w-full grid-cols-1 gap-5 pt-2 md:grid-cols-2 lg:grid-cols-3">
          {/* Report states */}
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
            <h3 className="text-sm font-bold leading-6 text-slate-900">
              Report states
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {reportStates.map((state) => (
                <span
                  key={state}
                  className={`rounded-md border px-3 py-1 text-xs font-semibold leading-4 ${
                    state === "Current"
                      ? "border-green-200 bg-green-50 text-green-700"
                      : state === "Permission denied"
                        ? "border-red-200 bg-red-50 text-red-600"
                        : state === "Definition unavailable"
                          ? "border-blue-200 bg-blue-50 text-blue-600"
                          : state === "Stale"
                            ? "border-gray-200 bg-gray-100 text-slate-600"
                            : "border-gray-200 bg-gray-100 text-slate-600"
                  }`}
                >
                  {state}
                </span>
              ))}
            </div>
          </div>

          {/* Export states */}
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
            <h3 className="text-sm font-bold leading-6 text-slate-900">
              Export states
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {exportStates.map((state) => (
                <span
                  key={state}
                  className={`rounded-md border px-3 py-1 text-xs font-semibold leading-4 ${
                    state === "Ready"
                      ? "border-green-200 bg-green-50 text-green-700"
                      : state === "Failed"
                        ? "border-red-200 bg-red-50 text-red-600"
                        : "border-gray-200 bg-gray-100 text-slate-600"
                  }`}
                >
                  {state}
                </span>
              ))}
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Purpose and currentness recorded where supported.
            </p>
          </div>

          {/* Degraded network */}
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-sm md:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-bold leading-6 text-slate-900">
              Degraded network
            </h3>

            <p className="mt-3 text-xs leading-5 text-slate-500">
              A currentness-sensitive figure shows a stale or unavailable
              state. No cached value is presented as current.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}