import Image from "next/image";

export default function FallbackRules() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-6 sm:gap-8">
        {/* Heading */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-1 text-center">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-4 shrink-0 bg-[#3B82F6]/40" />

            <span className="text-center text-[9px] font-bold uppercase leading-4 tracking-[0.1em] text-[#3B82F6] sm:text-xs sm:tracking-[0.16em]">
              Fallback, partial support &amp; missing content
            </span>

            <span className="h-px w-4 shrink-0 bg-[#3B82F6]/40" />
          </div>

          {/* Heading */}
          <h2 className="w-full max-w-[1000px] text-center text-[28px] font-extrabold leading-[1.12] tracking-tight text-[#172033] sm:text-[36px] sm:leading-[1.08] lg:text-[40px]">
            <span className="block sm:whitespace-nowrap">
              Mixed-language output is a decision,
            </span>

            <span className="block sm:whitespace-nowrap">
              never an accident.
            </span>
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-center text-sm font-normal leading-6 text-[#5B6577] sm:text-base sm:leading-7">
            It must be intentional, disclosed and tested. It must not emerge
            from missing keys, and high-risk text does not quietly fall back.
          </p>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)] sm:rounded-2xl">
          <div className="relative aspect-[1184/640] w-full">
            <Image
              src="/images/supported-languages/fallback-rules.png"
              alt="Fallback, partial support and missing content rules"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1184px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}