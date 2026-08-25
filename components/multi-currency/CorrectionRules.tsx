"use client";

const corrections = [
  {
    operation: "Credit note",
    treatment:
      "Tied to the original document and correction model; currency behavior follows approved document rules",
  },
  {
    operation: "Refund",
    treatment:
      "Under payment-provider or refund authority; refund currency and rate may differ and must be stated explicitly",
  },
  {
    operation: "Charge or adjustment",
    treatment:
      "A new financial event with its own currency and effective context — never an edit in place of issued evidence",
  },
  {
    operation: "Payment reversal",
    treatment:
      "Preserves the original payment and the reversal event, with provider status and source",
  },
  {
    operation: "FX correction",
    treatment:
      "Corrects rate, source or result through a governed adjustment or reissue where supported, keeping prior evidence",
  },
  {
    operation: "Rounding correction",
    treatment:
      "Records the adjustment reason and calculation basis",
  },
  {
    operation: "Cross-period correction",
    treatment:
      "Does not silently apply a current rate to a historical event; uses the defined correction policy",
  },
  {
    operation: "Dispute",
    treatment:
      "Shows amounts in their authoritative currencies; any reference conversion stays secondary",
  },
];

export default function CorrectionRules() {
  return (
    <section className="w-full bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
        {/* Heading */}
        <div className="flex w-full max-w-[900px] flex-col items-center gap-3 text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-sky-600/40" />

            <span className="whitespace-nowrap text-xs font-bold uppercase leading-4 tracking-[0.18em] text-sky-600">
              Credits, refunds, adjustments &amp; corrections
            </span>

            <span className="h-px w-4 bg-sky-600/40" />
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl sm:leading-[1.08]">
            <span className="block whitespace-nowrap">
              A correction explains what changed —
            </span>

            <span className="block whitespace-nowrap">
              it does not rewrite the past.
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-[720px] text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Applying today&apos;s rate to a historical event would distort the
            evidence. Corrections use defined rules and preserve the prior
            record.
          </p>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
          {/* Desktop Header */}
          <div className="hidden grid-cols-[240px_minmax(0,1fr)] border-b border-gray-200 bg-gray-50 md:grid">
            <div className="px-4 py-3.5">
              <span className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                Operation
              </span>
            </div>

            <div className="px-4 py-3.5">
              <span className="text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
                Required currency treatment
              </span>
            </div>
          </div>

          {/* Rows */}
          <div>
            {corrections.map((item, index) => (
              <div
                key={item.operation}
                className={
                  index !== 0 ? "border-t border-gray-200" : ""
                }
              >
                {/* Desktop */}
                <div className="hidden md:grid md:grid-cols-[240px_minmax(0,1fr)]">
                  <div className="px-4 py-3.5">
                    <p className="text-sm font-semibold leading-5 text-slate-900">
                      {item.operation}
                    </p>
                  </div>

                  <div className="px-4 py-3.5">
                    <p className="text-sm leading-5 text-slate-600">
                      {item.treatment}
                    </p>
                  </div>
                </div>

                {/* Mobile */}
                <div className="flex flex-col gap-2 px-4 py-4 md:hidden">
                  <p className="text-sm font-semibold leading-5 text-slate-900">
                    {item.operation}
                  </p>

                  <p className="text-sm leading-6 text-slate-600">
                    {item.treatment}
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