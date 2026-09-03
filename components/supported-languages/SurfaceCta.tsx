import Image from "next/image";
import Link from "next/link";

export default function SurfaceCta() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-12 sm:px-6 lg:px-12">
      <div
        className="
          relative
          mx-auto
          flex
          min-h-[324px]
          w-full
          max-w-[1184px]
          overflow-hidden
          rounded-3xl
          bg-[#0B1B3C]
          px-7
          py-8

          sm:px-10
          sm:py-9

          lg:h-[324px]
          lg:min-h-0
          lg:flex-row
          lg:items-center
          lg:px-10
          lg:py-8
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
            bg-[radial-gradient(circle,#1F5FBF_0%,rgba(31,95,191,0.35)_40%,transparent_70%)]
          "
        />

        {/* LEFT CONTENT */}
        <div
          className="
            relative
            z-10
            flex
            w-full
            min-w-0
            flex-col
            items-start

            lg:w-[57%]
            lg:pr-5
          "
        >
          {/* Heading */}
          <div
            className="
              !m-0
              !p-0
              text-[30px]
              font-extrabold
              leading-[35px]
              tracking-[-0.6px]
              !text-white

              sm:text-[34px]
              sm:leading-[39px]

              lg:text-[36px]
              lg:leading-[42px]
            "
          >
            Check the surface,
            <br />
            not just the language.
          </div>

          {/* Description */}
          <p
            className="
              !m-0
              !mt-4
              max-w-[510px]
              !p-0
              text-[13px]
              font-normal
              leading-[20px]
              !text-white/70

              sm:text-[14px]
              sm:leading-[21px]
            "
          >
            See where a language is currently supported, what limits apply,
            how it falls back, and when the record was last reviewed.
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            {/* Primary */}
            <Link
              href="#languages"
              className="
                inline-flex
                min-h-10
                items-center
                justify-center
                rounded-full
                bg-white
                px-5
                text-xs
                font-semibold
                leading-none
                !text-[#0B1B3C]
                no-underline
                transition-opacity
                hover:opacity-90
              "
            >
              Search languages
            </Link>

            {/* Secondary */}
            <Link
              href="/jurisdiction-availability"
              className="
                inline-flex
                min-h-10
                items-center
                justify-center
                rounded-full
                border
                border-white/35
                bg-transparent
                px-5
                text-xs
                font-semibold
                leading-none
                !text-white
                no-underline
                transition-colors
                hover:bg-white/10
              "
            >
              Check jurisdiction availability
            </Link>

            {/* Secondary */}
            <Link
              href="/pricing-and-plans"
              className="
                inline-flex
                min-h-10
                items-center
                justify-center
                rounded-full
                border
                border-white/35
                bg-transparent
                px-5
                text-xs
                font-semibold
                leading-none
                !text-white
                no-underline
                transition-colors
                hover:bg-white/10
              "
            >
              View pricing
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            relative
            z-10
            mt-7
            flex
            w-full
            items-center
            justify-center

            lg:mt-0
            lg:w-[43%]
            lg:justify-end
          "
        >
          <div className="relative w-full max-w-[430px] overflow-hidden rounded-2xl">
            <Image
              src="/images/supported-languages/surface-check.png"
              alt="Language support surface check"
              width={478}
              height={373}
              priority
              className="block h-auto w-full object-cover"
              sizes="
                (max-width: 1023px) 100vw,
                430px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}