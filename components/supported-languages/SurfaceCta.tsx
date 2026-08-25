import Image from "next/image";
import Link from "next/link";

export default function SurfaceCta() {
  return (
    <section className="w-full px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1184px] overflow-hidden rounded-2xl bg-[#172B4D] px-5 py-8 sm:rounded-3xl sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-14 lg:py-14">
        {/* Background glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-28
            -top-24
            h-64
            w-64
            rounded-full
            bg-[radial-gradient(circle,rgba(82,152,255,0.55)_0%,rgba(82,152,255,0)_70%)]
            sm:-right-32
            sm:-top-28
            sm:h-80
            sm:w-80
            lg:h-96
            lg:w-96
          "
        />

        {/* Content */}
        <div
          className="
            relative
            z-10
            grid
            w-full
            grid-cols-1
            items-center
            gap-8
            sm:gap-10
            lg:grid-cols-[minmax(0,1fr)_478px]
            lg:gap-12
          "
        >
          {/* Left Content */}
          <div className="flex min-w-0 w-full flex-col items-start">
            {/* Heading */}
            <h2
              className="
                m-0
                w-full
                max-w-[560px]
                text-[30px]
                font-extrabold
                leading-[1.08]
                tracking-[-0.02em]
                !text-white
                sm:text-4xl
                sm:leading-[1.08]
                lg:text-[40px]
                lg:leading-[1.08]
              "
            >
              Check the surface,
              <br />
              not just the language.
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                m-0
                w-full
                max-w-[510px]
                text-sm
                font-normal
                leading-6
                !text-white/70
                sm:mt-5
                sm:text-base
                sm:leading-7
              "
            >
              See where a language is currently supported, what limits apply,
              how it falls back, and when the record was last reviewed.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-6
                flex
                w-full
                flex-col
                gap-3
                sm:mt-7
                sm:flex-row
                sm:flex-wrap
                sm:items-center
              "
            >
              {/* Primary */}
              <Link
                href="#language-lookup"
                className="
                  inline-flex
                  min-h-11
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-6
                  py-2.5
                  text-sm
                  font-semibold
                  leading-6
                  !text-[#172B4D]
                  no-underline
                  transition
                  hover:bg-white/90
                  sm:w-auto
                "
              >
                Search languages
              </Link>

              {/* Secondary */}
              <Link
                href="#jurisdiction"
                className="
                  inline-flex
                  min-h-11
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/35
                  bg-transparent
                  px-6
                  py-2.5
                  text-center
                  text-sm
                  font-semibold
                  leading-6
                  !text-white
                  no-underline
                  transition
                  hover:bg-white/10
                  sm:w-auto
                "
              >
                Check jurisdiction availability
              </Link>

              {/* Tertiary */}
              <Link
                href="#pricing"
                className="
                  inline-flex
                  min-h-11
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/35
                  bg-transparent
                  px-6
                  py-2.5
                  text-sm
                  font-semibold
                  leading-6
                  !text-white
                  no-underline
                  transition
                  hover:bg-white/10
                  sm:w-auto
                "
              >
                View pricing
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full min-w-0">
            <div
              className="
                relative
                aspect-[478/373]
                w-full
                overflow-hidden
                rounded-xl
                border
                border-white/15
                sm:rounded-2xl
              "
            >
              <Image
                src="/images/supported-languages/surface-check.png"
                alt="Language support surface check"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 478px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}