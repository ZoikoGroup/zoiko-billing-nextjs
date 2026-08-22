"use client";

const rules = [
  {
    concept: "Conversion equation",
    rule: "Store the base amount, source currency, target currency, rate, direction and result — not just the result",
  },
  {
    concept: "Calculation precision",
    rule: "Approved internal precision is used before any display rounding",
  },
  {
    concept: "Minor unit",
    rule: "From currency metadata, with non-decimal and exceptional minor-unit behavior explicitly supported",
  },
  {
    concept: "Line vs total rounding",
    rule: "The policy defines whether rounding occurs per line, per tax component, at subtotal, total, payment or settlement",
  },
  {
    concept: "Residual & variance",
    rule: "Never hidden — classified and reconciled according to policy",
  },
  {
    concept: "Markup or spread",
    rule: "Only where commercially approved, distinguishing the source rate from the applied rate",
  },
  {
    concept: "Fees",
    rule: "A separate amount or line with its own currency and source; not buried inside a rate unless policy explicitly does so",
  },
  {
    concept: "Rate override",
    rule: "Permission, reason, source, effective period and audit",
  },
  {
    concept: "Display rounding",
    rule: "May differ from stored precision, and is labeled where material",
  },
];

export default function ConversionRules() {
  return (
    <section className="w-full bg-gray-50 px-4 py-14 dark:bg-slate-950 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
        {/* Heading */}
        <div className="flex w-full max-w-[900px] flex-col items-center gap-3 text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-sky-600/40 dark:bg-sky-400/40" />

            <span className="whitespace-nowrap text-xs font-bold uppercase leading-4 tracking-[0.18em] text-sky-600 dark:text-sky-400">
              Conversion, rounding, spread &amp; precision
            </span>

            <span className="h-px w-4 bg-sky-600/40 dark:bg-sky-400/40" />
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-4xl sm:leading-[1.08]">
            Variance is reconciled, not hidden.
          </h2>

          {/* Description */}
          <p className="max-w-[720px] text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
            Rounding at the line, tax component, subtotal, total, payment and
            settlement layers can each produce a residual. The policy names
            where rounding happens, and any difference is classified rather
            than absorbed.
          </p>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
          {/* Desktop header */}
          <div className="hidden grid-cols-[224px_minmax(0,1fr)] border-b border-gray-200 bg-gray-50 dark:border-slate-800 dark:bg-slate-900/80 md:grid">
            <div className="px-4 py-3.5">
              <span className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500 dark:text-slate-400">
                Concept
              </span>
            </div>

            <div className="px-4 py-3.5">
              <span className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500 dark:text-slate-400">
                Required rule
              </span>
            </div>
          </div>

          {/* Rows */}
          <div>
            {rules.map((item, index) => (
              <div
                key={item.concept}
                className={`${
                  index !== 0
                    ? "border-t border-gray-200 dark:border-slate-800"
                    : ""
                }`}
              >
                {/* Desktop */}
                <div className="hidden md:grid md:grid-cols-[224px_minmax(0,1fr)]">
                  <div className="px-4 py-3.5">
                    <p className="text-sm font-semibold leading-5 text-slate-900 dark:text-white">
                      {item.concept}
                    </p>
                  </div>

                  <div className="px-4 py-3.5">
                    <p className="text-sm leading-5 text-slate-600 dark:text-slate-400">
                      {item.rule}
                    </p>
                  </div>
                </div>

                {/* Mobile */}
                <div className="flex flex-col gap-2 px-4 py-4 md:hidden">
                  <p className="text-sm font-semibold leading-5 text-slate-900 dark:text-white">
                    {item.concept}
                  </p>

                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.rule}
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