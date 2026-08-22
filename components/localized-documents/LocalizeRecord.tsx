import Image from "next/image";

export default function LocalizeRecord() {
  return (
    <section className="w-full bg-white px-5 py-10 sm:px-8 lg:px-10">
      <div
        className="
          relative
          mx-auto
          flex
          h-auto
          min-h-[324px]
          w-full
          max-w-[1184px]
          overflow-hidden
          rounded-[24px]
          bg-[#0B2147]
          px-7
          py-7
          sm:px-9
          sm:py-7
          lg:h-[324px]
          lg:min-h-0
          lg:px-[46px]
          lg:py-[28px]
        "
      >
        {/* Background glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-[100px]
            -top-[120px]
            h-[380px]
            w-[380px]
            rounded-full
            bg-[radial-gradient(circle,rgba(40,120,255,0.55)_0%,rgba(40,120,255,0)_68%)]
          "
        />

        {/* Main layout */}
        <div
          className="
            relative
            z-10
            flex
            w-full
            flex-col
            lg:h-full
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:gap-8
          "
        >
          {/* ================= LEFT ================= */}
          <div
            className="
              flex
              w-full
              min-w-0
              flex-col
              lg:max-w-[610px]
            "
          >
            {/* Heading */}
            <h2
              className="
                !m-0
                !max-w-[570px]
                !text-[30px]
                !font-extrabold
                !leading-[34px]
                !tracking-[-0.5px]
                !text-white
                sm:!text-[32px]
                sm:!leading-[36px]
              "
            >
              Localize the presentation,
              <br />
              preserve the record.
            </h2>

            {/* Description */}
            <p
              className="
                !m-0
                mt-3
                !max-w-[510px]
                !text-[14px]
                !font-normal
                !leading-[21px]
                !text-white/70
                sm:!text-[15px]
                sm:!leading-[22px]
              "
            >
              Approved language, locale, template and formatting controls for
              billing documents — with financial values, issuer identity and
              issued evidence left intact.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-5
                flex
                w-full
                max-w-[510px]
                flex-wrap
                items-center
                gap-x-2
                gap-y-2
              "
            >
              {/* Primary button */}
              <a
                href="#supported-languages"
                className="
                  inline-flex
                  h-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-5
                  !text-[12px]
                  !font-semibold
                  !leading-none
                  !text-[#0B2147]
                  no-underline
                  transition-opacity
                  hover:opacity-90
                  sm:h-10
                "
              >
                Review Supported Languages
              </a>

              {/* Secondary button */}
              <a
                href="#jurisdiction-availability"
                className="
                  inline-flex
                  h-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/35
                  px-5
                  !text-[12px]
                  !font-semibold
                  !leading-none
                  !text-white
                  no-underline
                  transition-colors
                  hover:bg-white/10
                  sm:h-10
                "
              >
                Check jurisdiction availability
              </a>

              {/* Third button */}
              <a
                href="#pricing"
                className="
                  inline-flex
                  h-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/35
                  px-5
                  !text-[12px]
                  !font-semibold
                  !leading-none
                  !text-white
                  no-underline
                  transition-colors
                  hover:bg-white/10
                  sm:h-10
                "
              >
                View pricing
              </a>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div
            className="
              relative
              z-10
              mt-7
              w-full
              shrink-0
              sm:mt-8
              lg:mt-0
              lg:w-[370px]
              xl:w-[370px]
            "
          >
            <div
              className="
                relative
                aspect-[478/345]
                w-full
                overflow-hidden
                rounded-[14px]
                border
                border-white/20
              "
            >
              <Image
                src="/images/localized-documents/localize-record.png"
                alt="Localized billing document"
                fill
                priority
                className="object-cover"
                sizes="
                  (max-width: 1023px) 100vw,
                  370px
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}