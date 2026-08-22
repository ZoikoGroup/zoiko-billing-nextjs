"use client";

export default function StatusStates() {
  return (
    <section className="w-full bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-6 sm:gap-7">
        {/* Heading */}
        <div className="flex w-full max-w-[1240px] flex-col items-center gap-3 text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-4 shrink-0 bg-sky-600/40" />

            <span className="text-center text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-slate-500 sm:text-xs sm:tracking-[0.18em]">
              Canonical status vocabulary
            </span>

            <span className="h-px w-4 shrink-0 bg-sky-600/40" />
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[1250px] text-center text-[30px] font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-[38px] sm:leading-[1.08] lg:text-[40px]">
            <span className="block">
              Five public states, and one that never
            </span>

            <span className="block">reaches you.</span>
          </h2>

          {/* Description */}
          <p className="w-full max-w-[720px] text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Status words are controlled. They are not replaced with marketing
            labels like Global, Full coverage, Coming soon everywhere, Beta
            market or Strategic market.
          </p>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] sm:rounded-2xl">
          <img
            src="/images/jurisdiction-availability/status-states.png"
            alt="Canonical jurisdiction availability status states"
            className="block h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}