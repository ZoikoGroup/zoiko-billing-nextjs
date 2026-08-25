import Image from "next/image";

export default function LanguageContext() {
  return (
    <section className="w-full bg-[#172033] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-6">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-white/45" />

            <span className="text-center text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-white/55 sm:text-xs sm:tracking-[0.16em]">
              Language vs locale, jurisdiction &amp; currency
            </span>

            <span className="h-px w-4 shrink-0 bg-white/45" />
          </div>

          {/* Heading */}
          <h2 className="w-full text-center text-3xl font-extrabold leading-9 text-white sm:text-4xl sm:leading-10">
            No inference chain, in either direction.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-center text-sm font-normal leading-6 text-white/72 sm:text-base sm:leading-7">
            A language is never inferred from a country, a currency, an IP
            address, a time zone, an organization name or a browser locale for
            authoritative billing output.
          </p>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-2xl">
          <div className="relative aspect-[1184/540] w-full">
            <Image
              src="/images/supported-languages/language-context.png"
              alt="Language versus locale, jurisdiction and currency"
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