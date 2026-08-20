const comparisons = [
  {
    dimension: "Customer record authority",
    standalone: "Billing-native for defined billing domains.",
    connected:
      "Billing stays authoritative for defined billing domains; approved context and handoffs connect",
  },
  {
    dimension: "Organization context",
    standalone: "Billing tenant and account context.",
    connected: "Explicit tenant, organization and customer mapping",
  },
  {
    dimension: "Identity",
    standalone: "The Billing-approved identity model.",
    connected: "Separate, federated, linked or shared only when authoritative",
  },
  {
    dimension: "Data sharing",
    standalone: "Approved external integrations only.",
    connected: "Configured object and field categories only",
  },
  {
    dimension: "Workflow",
    standalone: "Billing-native plus approved external integrations.",
    connected: "Approved cross-product events and handoffs only",
  },
  {
    dimension: "Permissions",
    standalone: "Billing roles.",
    connected: "Mapped roles and permissions — no permission union by default",
  },
  {
    dimension: "Conflict",
    standalone: "Integration-specific.",
    connected: "Per-field mapping and reconciliation state",
  },
  {
    dimension: "Disconnect",
    standalone: "Native standalone.",
    connected: "Governed pause, disconnect and disposition",
  },
  {
    dimension: "Commercial",
    standalone: "Billing commercial state.",
    connected: "Zoiko One packaging or term only where approved",
  },
];

export default function Connected() {
  return (
    <section className="w-full bg-gray-50 px-4 py-12 sm:px-6 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 px-0 sm:px-4 lg:gap-5 lg:px-7">
        {/* Header */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-4 bg-blue-600 opacity-40" />

            <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
              Standalone vs Zoiko One connected
            </span>

            <div className="h-px w-4 bg-blue-600 opacity-40" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl sm:leading-10">
            Connection adds governed context. It
            <br className="hidden sm:block" />
            does not erase boundaries.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
            Use Customer Records independently, or as part of an approved
            connected deployment. Either way, source authority, permissions and
            recovery responsibilities remain explicit.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          {/* Desktop */}
          <div className="hidden md:block">
            <div className="grid grid-cols-[20%_27%_53%] border-b border-gray-200 bg-gray-50">
              <div className="px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                  Dimension
                </span>
              </div>

              <div className="px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                  Standalone Zoiko Billing
                </span>
              </div>

              <div className="px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                  Zoiko One connected
                </span>
              </div>
            </div>

            {comparisons.map((item, index) => (
              <div
                key={item.dimension}
                className={`grid grid-cols-[20%_27%_53%] ${
                  index !== comparisons.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                <div className="px-4 py-3.5">
                  <p className="text-sm font-semibold leading-5 text-slate-900">
                    {item.dimension}
                  </p>
                </div>

                <div className="px-4 py-3.5">
                  <p className="text-sm leading-5 text-slate-600">
                    {item.standalone}
                  </p>
                </div>

                <div className="px-4 py-3.5">
                  <p className="text-sm leading-5 text-slate-600">
                    {item.connected}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="flex flex-col md:hidden">
            {comparisons.map((item, index) => (
              <div
                key={item.dimension}
                className={`p-5 ${
                  index !== comparisons.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                <h3 className="text-sm font-bold leading-5 text-slate-900">
                  {item.dimension}
                </h3>

                <div className="mt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-blue-600">
                    Standalone Zoiko Billing
                  </p>
                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    {item.standalone}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-blue-600">
                    Zoiko One connected
                  </p>
                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    {item.connected}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}