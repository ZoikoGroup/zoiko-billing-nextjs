import Image from "next/image";

export default function SupportedLanguages() {
  return (
    <section
    id = "languages"
     className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto flex w-full max-w-[1440px] flex-col
          px-5 pb-14 pt-10
          sm:px-8 sm:pb-16 sm:pt-12
          md:px-10 md:pb-20
          lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-14 lg:py-20
          xl:gap-14 xl:px-20
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full min-w-0 lg:w-[52%]">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="h-px w-6 shrink-0 bg-blue-600 opacity-75" />

            <span
              className="
                text-[10px] font-bold uppercase leading-4
                tracking-[0.14em] text-[#7890b2]
                sm:text-xs sm:tracking-[0.18em]
              "
            >
              Supported Languages 
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              m-0 w-full max-w-[680px]
              text-[32px] font-extrabold leading-[1.08]
              tracking-[-0.035em] text-slate-900

              sm:text-[40px]
              md:text-[46px]
              lg:max-w-[650px] lg:text-[46px]
              xl:max-w-[700px] xl:text-[52px]
            "
          >
            See which languages are currently supported —{" "}
            <span className="text-blue-600">
              and exactly where they work.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-7 w-full max-w-[687px]
              text-[15px] font-normal leading-7 text-[#5d7192]
              sm:mt-8 sm:text-base
              md:mt-9
              lg:mt-8
              xl:mt-9
            "
          >
            Search the current language registry to understand support by
            approved billing surface, locale and script readiness, entity or
            jurisdiction applicability, fallback behavior, limitations and
            review status. Planned languages are not counted as current
            support.
          </p>

          {/* Information Box */}
          <div
            className="
              mt-7 w-full max-w-[562px]
              rounded-r-[10px]
              border border-[#dfe5ee]
              border-l-[3px] border-l-blue-600
              bg-white px-4 py-4
              sm:mt-8 sm:px-5
            "
          >
            <p className="m-0 text-sm font-normal leading-5 text-[#5d7192]">
              A translated website, one localized document, or a customer
              preference does not mean the same language is supported across
              every Zoiko Billing surface.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            mt-10 w-full
            sm:mt-12
            md:mt-14
            lg:mt-0 lg:w-[44%]
            xl:w-[43%]
          "
        >
          <div
            className="
              relative mx-auto
              aspect-[538/473]
              w-full max-w-[538px]
              overflow-hidden rounded-2xl
            "
          >
            <Image
              src="/images/supported-languages/languages.png"
              alt="Supported languages"
              fill
              priority
              className="object-cover"
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 767px) 90vw,
                (max-width: 1023px) 85vw,
                (max-width: 1279px) 44vw,
                538px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}