"use client";

const dimensions = [
  {
    dimension: "Jurisdiction",
    why: "Where the status applies.",
    authority: "Jurisdiction registry",
  },
  {
    dimension: "Capability / operation",
    why: "Invoice creation, document localization, provider integration, payment operation and more.",
    authority: "Owning product or integration registry",
  },
  {
    dimension: "Entity context",
    why: "Which configured billing entity may use the capability.",
    authority: "Multi-Entity Billing",
  },
  {
    dimension: "Currency context",
    why: "Which currency and operation is supported.",
    authority: "Multi-Currency Billing",
  },
  {
    dimension: "Provider dependency",
    why: "Which payment, tax, banking or integration provider is required.",
    authority: "Provider and integration registry",
  },
  {
    dimension: "Plan / commercial state",
    why: "Whether the current commercial package can use it.",
    authority: "Pricing and commercial configuration",
  },
  {
    dimension: "Environment",
    why: "Production, test or sandbox where relevant.",
    authority: "Owning capability registry",
  },
  {
    dimension: "Language / document surface",
    why: "Localized document or language support.",
    authority: "Localized Documents · Supported Languages",
  },
  {
    dimension: "Effective period",
    why: "When the status is current.",
    authority: "Availability record",
  },
];

export default function AvailabilityScope() {
  return (
    <section className="w-full bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-7 sm:gap-8">
        {/* Heading */}
        <div className="flex w-full max-w-[900px] flex-col items-center gap-3 text-center">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-4 shrink-0 bg-sky-600/40" />

            <span className="text-center text-[9px] font-bold uppercase leading-4 tracking-[0.12em] text-sky-600 sm:text-xs sm:tracking-[0.18em]">
              Availability means scope
            </span>

            <span className="h-px w-4 shrink-0 bg-sky-600/40" />
          </div>

          {/* Heading */}
          <h2 className="w-full text-center text-[28px] font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl sm:leading-[1.08] lg:text-[40px]">
            A country is not a checkbox.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[720px] text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            A market can be Available for one capability and Limited or Not
            available for another. Nine dimensions define what a status
            actually covers.
          </p>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] sm:rounded-2xl">
          {/* Desktop Header */}
          <div className="hidden grid-cols-[220px_minmax(0,1fr)_280px] border-b border-gray-200 bg-gray-50 md:grid lg:grid-cols-[240px_minmax(0,1fr)_320px]">
            <div className="px-4 py-3.5">
              <span className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                Dimension
              </span>
            </div>

            <div className="px-4 py-3.5">
              <span className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                Why it matters
              </span>
            </div>

            <div className="px-4 py-3.5">
              <span className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                Authoritative relationship
              </span>
            </div>
          </div>

          {/* Rows */}
          <div>
            {dimensions.map((item, index) => (
              <div
                key={item.dimension}
                className={
                  index !== dimensions.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }
              >
                {/* Desktop */}
                <div className="hidden md:grid md:grid-cols-[220px_minmax(0,1fr)_280px] lg:grid-cols-[240px_minmax(0,1fr)_320px]">
                  {/* Dimension */}
                  <div className="px-4 py-4">
                    <p className="text-sm font-semibold leading-5 text-slate-900">
                      {item.dimension}
                    </p>
                  </div>

                  {/* Why it matters */}
                  <div className="px-4 py-4">
                    <p className="text-sm leading-6 text-slate-600">
                      {item.why}
                    </p>
                  </div>

                  {/* Authority */}
                  <div className="px-4 py-4">
                    <p className="text-sm leading-6 text-slate-600">
                      {item.authority}
                    </p>
                  </div>
                </div>

                {/* Mobile */}
                <div className="flex flex-col gap-4 px-4 py-5 sm:px-5 md:hidden">
                  {/* Dimension */}
                  <div>
                    <p className="text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-slate-400">
                      Dimension
                    </p>

                    <p className="mt-1 text-sm font-semibold leading-6 text-slate-900">
                      {item.dimension}
                    </p>
                  </div>

                  {/* Why it matters */}
                  <div>
                    <p className="text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-slate-400">
                      Why it matters
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.why}
                    </p>
                  </div>

                  {/* Authority */}
                  <div>
                    <p className="text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-slate-400">
                      Authoritative relationship
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.authority}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}