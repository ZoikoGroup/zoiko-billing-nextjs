"use client";

export default function DocumentBoundaries() {
  return (
    <section className="w-full bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-24 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-6 px-0 sm:gap-7 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-1 text-center">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-4 shrink-0 bg-sky-600/40" />

            <span className="text-center text-[9px] font-bold uppercase leading-4 tracking-[0.12em] text-slate-500 sm:text-xs sm:tracking-[0.18em]">
              Documents, localization &amp; language boundaries
            </span>

            <span className="h-px w-4 shrink-0 bg-sky-600/40" />
          </div>

          {/* Heading */}
          <h2 className="w-full text-center text-[28px] font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl sm:leading-10">
            What this page will not answer for you.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
            Six adjacent questions get routed to their own authority rather
            than inferred from a market status.
          </p>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] sm:rounded-2xl">
          <img
            src="/images/jurisdiction-availability/doc-boundaries.png"
            alt="Documents, localization and language boundaries"
            className="block h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}