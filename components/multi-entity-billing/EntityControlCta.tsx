import Image from "next/image";
import Link from "next/link";

export default function EntityControlCta() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1240px]
          px-5
          py-10

          sm:px-8
          sm:py-12

          md:px-10
          md:py-14

          lg:px-14
          lg:py-16

          xl:px-7
        "
      >
        <div
          className="
            relative
            flex
            w-full
            flex-col
            overflow-hidden
            rounded-3xl
            bg-[#111f38]
            p-7

            sm:p-9

            md:p-10

            lg:p-12

            xl:p-14
          "
        >
          {/* RADIAL GLOW */}
          <div
            className="
              pointer-events-none
              absolute
              -right-[100px]
              -top-[110px]
              h-96
              w-96
              rounded-[190px]
              bg-[radial-gradient(circle,rgba(31,111,235,0.55)_0%,rgba(31,111,235,0)_70%)]
            "
          />

          {/* CONTENT */}
          <div
            className="
              relative
              z-10
              flex
              w-full
              flex-col
              items-start
              gap-3.5
            "
          >
            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                text-3xl
                font-extrabold
                leading-[1.12]
                tracking-[-0.035em]
                !text-white

                sm:text-[34px]

                md:text-4xl
                md:leading-10
              "
            >
              Separate the entities.
              <br />
              Share the control.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[511px]
                text-sm
                font-normal
                leading-6
                !text-white/70

                sm:text-base
              "
            >
              Keep issuer context, customer ownership, currency scope,
              permissions, payment evidence and integration authority visible
              for every entity you operate.
            </p>

            {/* BUTTONS */}
            <div
              className="
                flex
                w-full
                flex-col
                gap-3
                pt-2

                sm:w-auto
                sm:flex-row
                sm:flex-wrap
              "
            >
              {/* PRIMARY CTA */}
              <Link
                href="/entity-level-controls"
                className="
                  inline-flex
                  min-h-11
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-transparent
                  bg-white
                  px-6
                  text-sm
                  font-semibold
                  leading-6
                  !text-[#111f38]
                  no-underline
                  transition
                  hover:bg-slate-100

                  sm:w-auto
                "
              >
                Review Entity-Level Controls
              </Link>

              {/* SECONDARY CTA */}
              <Link
                href="/supported-languages"
                className="
                  inline-flex
                  min-h-11
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-transparent
                  px-6
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
                Check availability
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="
              relative
              z-10
              mt-7
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-white/15
              bg-white/5
              p-5

              sm:mt-8

              md:mt-9

              lg:absolute
              lg:bottom-14
              lg:right-14
              lg:mt-0
              lg:w-[40%]
              lg:max-w-[478px]
            "
          >
            <div className="relative aspect-[478/340] w-full">
              <Image
                src="/images/multi-entity-billing/entity-control.png"
                alt="Entity-level controls"
                fill
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 1023px) 90vw,
                  478px
                "
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}