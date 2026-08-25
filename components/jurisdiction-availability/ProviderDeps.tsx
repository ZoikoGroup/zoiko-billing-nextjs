"use client";

export default function ProviderDeps() {
  return (
    <section className="w-full bg-slate-950 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-6 sm:gap-8 lg:gap-11">
        {/* Heading */}
        <div className="flex w-full max-w-[1100px] flex-col items-center gap-3 text-center">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-4 shrink-0 bg-white/40" />

            <span className="text-center text-[9px] font-bold uppercase leading-4 tracking-[0.1em] text-white/55 sm:text-xs sm:tracking-[0.18em]">
              Currency, payment provider &amp; settlement dependencies
            </span>

            <span className="h-px w-4 shrink-0 bg-white/40" />
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[1100px] text-center text-[28px] font-extrabold leading-[1.12] tracking-tight text-white sm:text-[36px] sm:leading-[1.08] lg:text-[40px]">
            <span className="block sm:whitespace-nowrap">
              There is no country-equals-currency
            </span>

            <span className="block sm:whitespace-nowrap">
              shortcut.
            </span>
          </h2>

          {/* Description */}
          <p className="w-full max-w-[720px] text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
            A currency, FX route, local payment method, provider or settlement
            model is never selected or promised because of the selected
            country alone.
          </p>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-xl sm:rounded-2xl">
          <img
            src="/images/jurisdiction-availability/provider-settlement.png"
            alt="Currency, payment provider and settlement dependencies"
            className="block h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}