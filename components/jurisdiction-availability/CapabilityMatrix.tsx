"use client";

const capabilities = [
  {
    capability: "Core billing & customer records",
    scopedBy: "Entity, plan, jurisdiction, configuration",
    authority: "Customer Records",
  },
  {
    capability: "Invoices & credit notes",
    scopedBy: "Entity, document configuration, currency, jurisdiction",
    authority: "Invoices & Credit Notes",
  },
  {
    capability: "Multi-currency billing",
    scopedBy: "Currency, operation, entity, provider, jurisdiction",
    authority: "Multi-Currency Billing",
  },
  {
    capability: "Multi-entity billing",
    scopedBy: "Entity capability, jurisdiction, commercial state",
    authority: "Multi-Entity Billing",
  },
  {
    capability: "Localized documents",
    scopedBy:
      "Language, locale, surface, template, entity and jurisdiction",
    authority: "Localized Documents",
  },
  {
    capability: "Entity-level controls",
    scopedBy: "Entity capability plus role and action policy",
    authority: "Entity-Level Controls",
  },
  {
    capability: "Payment provider operations",
    scopedBy: "Provider, operation, currency, entity, market",
    authority: "Payments & Reconciliation",
  },
  {
    capability: "Accounting, ERP & CRM integrations",
    scopedBy: "Connector, plan, region and operational state",
    authority: "Integration Availability",
  },
  {
    capability: "Supported languages",
    scopedBy: "Language, surface, current state",
    authority: "Supported Languages",
  },
];

const highlightedAuthorities = new Set([
  "Customer Records",
  "Multi-Currency Billing",
  "Localized Documents",
  "Entity-Level Controls",
]);

export default function CapabilityMatrix() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-7 sm:gap-8">
        {/* Heading */}
        <div className="flex w-full max-w-[1100px] flex-col items-center gap-3 text-center">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-4 shrink-0 bg-sky-600/40" />

            <span className="text-center text-[9px] font-bold uppercase leading-4 tracking-[0.12em] text-slate-500 sm:text-xs sm:tracking-[0.18em]">
              Capability availability matrix
            </span>

            <span className="h-px w-4 shrink-0 bg-sky-600/40" />
          </div>

          {/* Heading */}
          <h2 className="w-full text-center text-[28px] font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-[36px] sm:leading-[1.08] lg:text-[40px]">
            <span className="block">
              Nine capability rows, each with its
            </span>
            <span className="block">own authority.</span>
          </h2>

          {/* Description */}
          <p className="w-full max-w-[720px] text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Each cell carries a text status and its limitations. No checkmark
            or color alone conveys meaning, and a selected jurisdiction is
            fully understandable without a map.
          </p>
        </div>

        {/* Matrix */}
        <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] sm:rounded-2xl">
          {/* Desktop / Tablet */}
          <div className="hidden md:block">
            {/* Header */}
            <div className="grid grid-cols-[minmax(190px,1.15fr)_minmax(240px,1.6fr)_minmax(190px,1fr)] border-b border-gray-200 bg-gray-50 lg:grid-cols-[minmax(220px,1.2fr)_minmax(280px,1.7fr)_minmax(220px,1fr)]">
              <div className="px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                  Capability
                </span>
              </div>

              <div className="px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                  Scoped by
                </span>
              </div>

              <div className="px-4 py-3.5">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                  Detail authority
                </span>
              </div>
            </div>

            {/* Rows */}
            {capabilities.map((item, index) => {
              const isHighlighted = highlightedAuthorities.has(
                item.authority
              );

              return (
                <div
                  key={item.capability}
                  className={`grid grid-cols-[minmax(190px,1.15fr)_minmax(240px,1.6fr)_minmax(190px,1fr)] lg:grid-cols-[minmax(220px,1.2fr)_minmax(280px,1.7fr)_minmax(220px,1fr)] ${
                    index !== capabilities.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  {/* Capability */}
                  <div className="px-4 py-4">
                    <p className="text-sm font-semibold leading-5 text-slate-900">
                      {item.capability}
                    </p>
                  </div>

                  {/* Scoped by */}
                  <div className="px-4 py-4">
                    <p className="text-sm leading-6 text-slate-600">
                      {item.scopedBy}
                    </p>
                  </div>

                  {/* Authority */}
                  <div className="px-4 py-4">
                    <p
                      className={`text-sm leading-6 ${
                        isHighlighted
                          ? "font-semibold text-sky-600"
                          : "text-slate-600"
                      }`}
                    >
                      {item.authority}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            {capabilities.map((item, index) => {
              const isHighlighted = highlightedAuthorities.has(
                item.authority
              );

              return (
                <div
                  key={item.capability}
                  className={`px-4 py-5 sm:px-5 ${
                    index !== capabilities.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  {/* Capability */}
                  <div>
                    <p className="text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-slate-400">
                      Capability
                    </p>

                    <p className="mt-1 text-sm font-semibold leading-6 text-slate-900">
                      {item.capability}
                    </p>
                  </div>

                  {/* Scoped by */}
                  <div className="mt-4">
                    <p className="text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-slate-400">
                      Scoped by
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.scopedBy}
                    </p>
                  </div>

                  {/* Authority */}
                  <div className="mt-4">
                    <p className="text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-slate-400">
                      Detail authority
                    </p>

                    <p
                      className={`mt-1 text-sm leading-6 ${
                        isHighlighted
                          ? "font-semibold text-sky-600"
                          : "text-slate-600"
                      }`}
                    >
                      {item.authority}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}