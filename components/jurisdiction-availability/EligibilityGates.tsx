"use client";

const layers = [
  {
    layer: "Jurisdiction availability",
    detail:
      "Whether a capability is currently offered for a defined market scope",
  },
  {
    layer: "Entity readiness",
    detail:
      "A configured entity may still need issuer, profile, provider, currency or mapping setup",
  },
  {
    layer: "Customer context",
    detail:
      "Specific customer or account eligibility can differ by relationship and profile — not public-market truth",
  },
  {
    layer: "Commercial entitlement",
    detail:
      "A plan or contract may limit a capability despite jurisdiction availability",
  },
  {
    layer: "User authorization",
    detail:
      "Entity-Level Controls may block a user even when the entity and capability are available",
  },
  {
    layer: "Implementation state",
    detail:
      "Migration, testing or configuration may not be complete",
  },
  {
    layer: "Provider onboarding",
    detail:
      "Provider, merchant, bank or tax setup may be separate and customer-specific",
  },
];

export default function EligibilityGates() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-7 sm:gap-11">
        {/* Heading */}
        <div className="flex w-full max-w-[900px] flex-col items-center gap-3 text-center">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-4 shrink-0 bg-sky-600/40" />

            <span className="text-center text-[9px] font-bold uppercase leading-4 tracking-[0.12em] text-slate-500 sm:text-xs sm:tracking-[0.18em]">
              Entity, customer &amp; commercial eligibility
            </span>

            <span className="h-px w-4 shrink-0 bg-sky-600/40" />
          </div>

          {/* Heading */}
          <h2 className="w-full text-center text-[28px] font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl sm:leading-[1.08] lg:text-[40px]">
            <span className="block">Availability is necessary, not</span>
            <span className="block">sufficient.</span>
          </h2>

          {/* Description */}
          <p className="w-full max-w-[720px] text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            An Available jurisdiction does not mean every organization can
            immediately issue, collect, settle, integrate or use every
            feature. Six further gates remain.
          </p>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] sm:rounded-2xl">
          {/* Desktop */}
          <div className="hidden md:block">
            {/* Header */}
            <div className="grid grid-cols-[256px_minmax(0,1fr)] border-b border-gray-200 bg-gray-50">
              <div className="px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                  Layer
                </span>
              </div>

              <div className="px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                  Availability vs eligibility
                </span>
              </div>
            </div>

            {/* Rows */}
            {layers.map((item, index) => (
              <div
                key={item.layer}
                className={`grid grid-cols-[256px_minmax(0,1fr)] ${
                  index !== layers.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                <div className="px-4 py-4">
                  <p className="text-sm font-semibold leading-5 text-slate-900">
                    {item.layer}
                  </p>
                </div>

                <div className="px-4 py-4">
                  <p className="text-sm leading-6 text-slate-600">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            {layers.map((item, index) => (
              <div
                key={item.layer}
                className={`px-4 py-5 sm:px-5 ${
                  index !== layers.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                {/* Layer */}
                <p className="text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-slate-400">
                  Layer
                </p>

                <p className="mt-1 text-sm font-semibold leading-6 text-slate-900">
                  {item.layer}
                </p>

                {/* Detail */}
                <p className="mt-3 text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-slate-400">
                  Availability vs eligibility
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}