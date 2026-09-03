import Image from "next/image";
import Link from "next/link";

export default function EntityControlCta() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-12 sm:px-8 md:px-10 lg:px-12">
        <div
          className="
            relative
            mx-auto
            flex
            min-h-[384px]
            w-full
            max-w-[1184px]
            flex-col
            overflow-hidden
            rounded-3xl
            bg-[#0B1B3C]
            px-7
            py-8

            sm:px-10
            sm:py-10

            lg:flex-row
            lg:items-center
            lg:px-8
            lg:py-10
          "
        >
          {/* Background glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-[110px]
              -top-[110px]
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
              flex-col
              items-start
              justify-center

              lg:w-[53%]
              lg:pr-6
            "
          >
            {/* Heading */}
            <div
              className="
                !m-0
                !p-0
                text-[32px]
                font-extrabold
                leading-[38px]
                tracking-[-0.8px]
                !text-white

                sm:text-[36px]
                sm:leading-[42px]

                lg:text-[40px]
                lg:leading-[46px]
              "
            >
              Separate the entities.
              <br />
              Share the control.
            </div>

            {/* Description */}
            <p
              className="
                !m-0
                mt-4
                max-w-[510px]
                !p-0
                text-[14px]
                font-normal
                leading-[21px]
                !text-white/70

                sm:text-[15px]
                sm:leading-[22px]
              "
            >
              Keep issuer context, customer ownership, currency scope,
              permissions, payment evidence and integration authority visible
              for every entity you operate.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-6
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              {/* Primary */}
              <Link
                href="/entity-level-controls"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-6
                  text-sm
                  font-semibold
                  leading-6
                  !text-[#0B1B3C]
                  no-underline
                  transition-opacity
                  hover:opacity-90
                "
              >
                Review Entity-Level Controls
              </Link>

              {/* Secondary */}
              <Link
                href="#"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/35
                  bg-transparent
                  px-6
                  text-sm
                  font-semibold
                  leading-6
                  !text-white
                  no-underline
                  transition-colors
                  hover:bg-white/10
                "
              >
                Check availability
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              relative
              z-10
              mt-8
              flex
              w-full
              items-center
              justify-center

              lg:mt-0
              lg:w-[47%]
              lg:justify-end
            "
          >
            <div className="relative w-full max-w-[478px] overflow-hidden rounded-2xl">
              <Image
                src="/images/multi-entity-billing/entity-control.png"
                alt="Entity-level controls"
                width={478}
                height={340}
                sizes="
                  (max-width: 1023px) 100vw,
                  478px
                "
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}