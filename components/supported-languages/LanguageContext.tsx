import Image from "next/image";

export default function LanguageContext() {
  return (
    <section className="w-full bg-[#172b4d]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            sm:gap-10

            md:gap-11
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[1000px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-white/40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-white/60

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Language vs locale, jurisdiction &amp; currency
              </span>

              <span className="h-px w-4 shrink-0 bg-white/40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-white

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              No inference chain, in either direction.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-white/70

                sm:text-base
              "
            >
              A language is never inferred from a country, a currency, an IP
              address, a time zone, an organization name or a browser locale for
              authoritative billing output.
            </p>
          </div>

          {/* IMAGE */}
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
      </div>
    </section>
  );
}