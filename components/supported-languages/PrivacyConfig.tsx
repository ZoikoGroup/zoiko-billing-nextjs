import Image from "next/image";

export default function PrivacyConfig() {
  return (
    <section className="w-full bg-[#F7F7F6] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 lg:gap-11">
        {/* Heading */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-1 text-center">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-4 shrink-0 bg-[#5B6577]/40" />

            <span className="text-center text-[9px] font-bold uppercase leading-4 tracking-[0.1em] text-[#5B6577] sm:text-xs sm:tracking-[0.16em]">
              Privacy, security, integrations &amp; resilience
            </span>

            <span className="h-px w-4 shrink-0 bg-[#5B6577]/40" />
          </div>

          {/* Heading */}
          <h2 className="m-0 w-full max-w-[1000px] text-center text-[28px] font-extrabold leading-[1.12] tracking-[-0.02em] text-[#172033] sm:text-[36px] sm:leading-[1.08] lg:text-[40px]">
            <span className="block sm:whitespace-nowrap">
              Language preference is configuration,
            </span>

            <span className="block sm:whitespace-nowrap">
              not identity.
            </span>
          </h2>

          {/* Description */}
          <p className="m-0 w-full max-w-[687px] pt-0.5 text-center text-sm font-normal leading-6 text-[#5B6577] sm:text-base sm:leading-7">
            It is purpose-bound, and it never becomes a demographic signal, a
            pricing input or a sales priority.
          </p>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)] sm:rounded-2xl">
          <div className="relative aspect-[1184/609] w-full">
            <Image
              src="/images/supported-languages/privacy-config.png"
              alt="Language preference privacy and configuration"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1184px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}