"use client";

export default function FxRate() {
  return (
    <section className="w-full bg-slate-950 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8">
        {/* Heading */}
        <div className="flex w-full max-w-[900px] flex-col items-center gap-3 text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-white/45" />

            <span className="whitespace-nowrap text-xs font-bold uppercase leading-4 tracking-[0.18em] text-white/55">
              FX rate source, timestamp, basis &amp; finality
            </span>

            <span className="h-px w-4 bg-white/45" />
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl sm:leading-[1.08]">
            <span className="block whitespace-nowrap">
              A visible rate does not prove an
            </span>

            <span className="block whitespace-nowrap">
              executed conversion.
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-[720px] text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
            Rate lookup, display conversion, actual conversion, payment
            processing and settlement are five distinct capabilities. A
            published rate carries ten fields so it can be audited later.
          </p>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-2xl">
          <img
            src="/images/multi-currency/fx-rate-audit.png"
            alt="FX rate source, timestamp, basis and finality"
            className="block h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}