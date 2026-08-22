import Image from "next/image";

export default function HealthExceptionsRecovery() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-3.5">
        {/* Eyebrow */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Health, exceptions &amp; recovery
          </span>

          <span className="h-px w-6 bg-blue-600/50" />
        </div>

        {/* Heading */}
        <h2 className="max-w-[1150px] text-2xl font-bold leading-9 tracking-tight text-slate-900 sm:text-3xl sm:leading-10">
          Health is per route, and it is never a single score.
        </h2>

        {/* Description */}
        <p className="max-w-[700px] text-sm font-normal leading-6 text-slate-500 sm:text-base">
          One percentage would hide a failed critical route or a permission
          block. Every route reports its own state, its last success, and what
          to do next.
        </p>

        {/* Health / Exceptions Image */}
        <div className="mt-4 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
          <Image
            src="/images/zoiko-billing-plus-zoiko-one/health-exceptions-recovery.png"
            alt="Health, exceptions and recovery route overview"
            width={1264}
            height={660}
            className="h-auto w-full object-cover"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}