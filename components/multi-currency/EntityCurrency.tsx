"use client";

export default function EntityCurrency() {
  return (
    <section className="w-full bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
        {/* Heading */}
        <div className="flex w-full max-w-[900px] flex-col items-center gap-3 text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-sky-600/40" />

            <span className="whitespace-nowrap text-xs font-bold uppercase leading-4 tracking-[0.18em] text-sky-600">
              Multi-entity currency ownership
            </span>

            <span className="h-px w-4 bg-sky-600/40" />
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl sm:leading-[1.08]">
            <span className="block whitespace-nowrap">
              Entity-scoped currency ownership,
            </span>

            <span className="block whitespace-nowrap">
              not group treasury.
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-[720px] text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Currency configuration can be scoped per billing entity. That is a
            long way from managing group finances.
          </p>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
          <img
            src="/images/multi-currency/entity-currency.png"
            alt="Multi-entity currency ownership"
            className="block h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}