import Image from "next/image";
import Link from "next/link";

export default function QualifierCta() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-[1184px]
          flex-col
          overflow-hidden
          rounded-3xl
          bg-[#102A4C]
          px-6
          py-8

          sm:px-8
          sm:py-10

          md:px-10
          md:py-12

          lg:min-h-[384px]
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-12
          lg:px-14
          lg:py-14
        "
      >
        {/* Radial Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-28
            h-72
            w-72
            rounded-full
            bg-[radial-gradient(circle,_rgba(31,111,235,0.55)_0%,_rgba(31,111,235,0)_70%)]

            sm:h-80
            sm:w-80

            lg:h-96
            lg:w-96
          "
        />

        {/* Left Content */}
        <div
          className="
            relative
            z-10
            flex
            min-w-0
            w-full
            flex-1
            flex-col
            items-start
          "
        >
          {/* Title */}
          <h2
            className="
              !m-0
              w-full
              max-w-[600px]
              !text-white
              !text-[30px]
              !font-extrabold
              !leading-[1.2]
              !tracking-[-0.03em]

              sm:!text-[34px]

              md:!text-[36px]
              md:!leading-10
            "
          >
            Check the qualifiers
            <br />
            before you configure.
          </h2>

          {/* Description */}
          <p
            className="
              !m-0
              mt-4
              w-full
              max-w-[511px]
              !text-white/70
              !text-[15px]
              !font-normal
              !leading-6

              sm:mt-5
              sm:!text-base
              sm:!leading-7
            "
          >
            Capability, region, plan, environment, version, certification and
            live status resolve separately — so a single green badge never
            hides the one condition that blocks you.
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
              sm:w-auto
              sm:flex-row
              sm:flex-wrap
            "
          >
            <Link
              href="#integration-availability"
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
                !text-[#102A4C]
                no-underline
                transition
                hover:bg-slate-100

                sm:w-auto
              "
            >
              Check an integration
            </Link>

            <Link
              href="/integrations-directory"
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
              Integrations directory
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="
            relative
            z-10
            mt-8
            w-full
            shrink-0
            overflow-hidden
            rounded-2xl
            border
            border-white/15
            bg-white/5

            sm:mt-10

            md:mt-12

            lg:mt-0
            lg:w-[478px]
            lg:max-w-[478px]
          "
        >
          <div className="relative aspect-[478/295] w-full">
            <Image
              src="/images/integration-availability/qualifier.png"
              alt="Integration availability qualifiers"
              fill
              priority
              className="rounded-2xl object-cover"
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 1023px) 80vw,
                478px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}