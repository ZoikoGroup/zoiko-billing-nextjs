import Image from "next/image";

export default function ImplementationStages() {
  return (
    <section className="w-full bg-[#F7F8FA] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 xl:px-16 xl:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 lg:gap-11">
        {/* Header */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-1 sm:pt-2">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-4 shrink-0 bg-blue-600 opacity-40 sm:w-5" />

            <span className="text-center text-[10px] font-bold uppercase leading-4 tracking-[0.14em] text-blue-600 sm:text-xs sm:tracking-[0.18em]">
              Implementation, migration, adoption &amp; support
            </span>

            <span className="h-px w-4 shrink-0 bg-blue-600 opacity-40 sm:w-5" />
          </div>

          {/* Heading */}
          <h2 className="w-full px-2 text-center text-2xl font-extrabold leading-8 tracking-tight text-slate-900 sm:px-0 sm:text-3xl sm:leading-9 lg:text-4xl lg:leading-10">
            Nine stages, and what each will not promise.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] px-2 text-center text-sm font-normal leading-6 text-slate-600 sm:px-0 sm:text-base sm:leading-7">
            Implementation, migration, training, support, success management
            and service levels are commercial and service entitlements. The
            delivery model is explained; the inclusions are not invented.
          </p>
        </div>

        {/* Saved Image */}
        <div className="w-full">
          <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
            <Image
              src="/images/enterprise-organizations/implementation-stages.png"
              alt="Implementation, migration, adoption and support"
              width={1184}
              height={559}
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1184px"
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}