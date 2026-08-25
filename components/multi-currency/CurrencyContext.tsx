"use client";

const contexts = [
  {
    name: "Contract / commercial",
    value: "GBP",
    description:
      "Currency agreed in authoritative commercial terms, where applicable",
    authority:
      "Quote, order or contract system — never inferred from page locale",
  },
  {
    name: "Billing / profile",
    value: "GBP",
    description: "Configured for the customer, account or billing profile",
    authority: "Billing profile plus entity and commercial rules",
  },
  {
    name: "Document / invoice",
    value: "GBP 12,480.00",
    description: "The currency and amount as issued",
    authority: "Issued document record — immutable",
    badge: "Authoritative",
    badgeType: "authoritative",
  },
  {
    name: "Display",
    value: "USD 16,023.41",
    description: "Optional presentation conversion for convenience",
    authority: "Reference-only unless explicitly authorized otherwise",
    badge: "Reference only",
    badgeType: "reference",
  },
  {
    name: "Payment-presented",
    value: "GBP",
    description: "The currency the payer is asked or allowed to pay in",
    authority: "Payment configuration and provider capability",
  },
  {
    name: "Payment-received",
    value: "GBP 12,480.00",
    description: "What the provider or bank reports as received",
    authority: "Payment provider or bank source",
  },
  {
    name: "Settlement",
    value: "USD 15,984.02",
    description: "The currency in which the provider settles funds",
    authority: "Provider, merchant account or bank agreement",
  },
  {
    name: "Accounting / reporting",
    value: "Not configured",
    description: "Reporting or ledger context where integrated",
    authority: "Accounting or ERP authority — not Billing by assumption",
  },
  {
    name: "FX reference",
    value: "GBP/USD",
    description: "Base and quote pair used for rate observation",
    authority: "Rate provider and conversion policy",
  },
];

export default function CurrencyContext() {
  return (
    <section className="w-full bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 sm:gap-11">
        {/* Heading */}
        <div className="flex w-full max-w-[900px] flex-col items-center gap-3 text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-sky-600/40" />

            <span className="text-xs font-bold uppercase leading-4 tracking-[0.18em] text-sky-600">
              Currency context model
            </span>

            <span className="h-px w-4 bg-sky-600/40" />
          </div>

          {/* Title */}
          <h2 className="text-center text-[42px] font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-[48px]">
            <span className="block whitespace-nowrap">
              One event can legitimately carry
            </span>

            <span className="block whitespace-nowrap">
              several currencies.
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-[687px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
            The same invoice may have a GBP document currency, a USD reference
            display, payment accepted only in GBP, and settlement in a provider
            currency. Collapsing that into &quot;Currency: GBP&quot; is how
            financial meaning gets lost.
          </p>
        </div>

        {/* Context Card */}
        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
          {/* Card Header */}
          <div className="border-b border-gray-200 bg-gray-50 px-5 py-4 sm:px-6">
            <h3 className="text-base font-bold leading-7 text-slate-900 sm:text-lg">
              Nine contexts on one synthetic transaction
            </h3>

            <p className="mt-1 text-xs font-normal leading-5 text-slate-500 sm:text-sm">
              Each context names what it governs and who is authoritative for
              it. A bare currency code is never shown without that.
            </p>
          </div>

          {/* Desktop Header */}
          <div className="hidden border-b border-gray-200 bg-white px-5 py-3.5 lg:grid lg:grid-cols-[208px_minmax(0,1fr)_220px] lg:gap-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Context
            </div>

            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Value
            </div>

            <div className="text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
              Authority
            </div>
          </div>

          {/* Rows */}
          <div>
            {contexts.map((context, index) => (
              <div
                key={context.name}
                className={`px-5 py-4 sm:px-6 sm:py-5 ${
                  index !== 0 ? "border-t border-gray-200" : ""
                }`}
              >
                {/* Desktop */}
                <div className="hidden lg:grid lg:grid-cols-[208px_minmax(0,1fr)_220px] lg:items-start lg:gap-4">
                  {/* Context */}
                  <div className="pt-1">
                    <p className="text-sm font-semibold leading-5 text-slate-900">
                      {context.name}
                    </p>
                  </div>

                  {/* Value */}
                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-6 text-slate-900 sm:text-base">
                      {context.value}
                    </p>

                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <p className="text-xs leading-5 text-slate-500">
                        {context.description}
                      </p>

                      {context.badge && (
                        <span
                          className={`inline-flex shrink-0 items-center rounded-md border px-2.5 py-1 text-xs font-semibold leading-4 ${
                            context.badgeType === "authoritative"
                              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                              : "border-orange-200 bg-orange-50 text-orange-700"
                          }`}
                        >
                          {context.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Authority */}
                  <div className="text-right">
                    <p className="text-xs leading-5 text-slate-500">
                      {context.authority}
                    </p>
                  </div>
                </div>

                {/* Mobile / Tablet */}
                <div className="flex flex-col gap-3 lg:hidden">
                  {/* Context */}
                  <p className="text-sm font-semibold leading-5 text-slate-900">
                    {context.name}
                  </p>

                  {/* Value */}
                  <div>
                    <p className="text-sm font-bold leading-6 text-slate-900 sm:text-base">
                      {context.value}
                    </p>

                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <p className="text-xs leading-5 text-slate-500">
                        {context.description}
                      </p>

                      {context.badge && (
                        <span
                          className={`inline-flex shrink-0 items-center rounded-md border px-2.5 py-1 text-xs font-semibold leading-4 ${
                            context.badgeType === "authoritative"
                              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                              : "border-orange-200 bg-orange-50 text-orange-700"
                          }`}
                        >
                          {context.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Authority */}
                  <div className="border-t border-gray-100 pt-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      Authority
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {context.authority}
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