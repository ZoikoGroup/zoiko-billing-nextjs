import Image from "next/image";
import Link from "next/link";

export default function EcosystemCta() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          py-10
          sm:px-8
          sm:py-12
          md:px-10
          md:py-16
          lg:px-14
          lg:py-20
          xl:px-20
        "
      >
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
            bg-[#162B4A]
            p-7
            sm:p-9
            md:p-10
            lg:min-h-[384px]
            lg:p-14
          "
        >
          {/* Background Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-28
              -top-28
              h-80
              w-80
              rounded-full
              bg-[radial-gradient(circle,_rgba(31,111,235,0.55)_0%,_rgba(31,111,235,0)_70%)]
              lg:-right-24
              lg:-top-28
              lg:h-96
              lg:w-96
            "
          />

          {/* Content */}
          <div
            className="
              relative
              z-10
              flex
              w-full
              flex-col
              items-start
            "
          >
            {/* Heading */}
            <h2
              className="
                !m-0
                w-full
                max-w-[600px]
                !text-white
                text-[30px]
                font-extrabold
                leading-[1.2]
                tracking-[-0.03em]
                sm:text-[34px]
                md:text-[36px]
                md:leading-10
              "
            >
              Connected products,
              <br />
              separate authority.
            </h2>

            {/* Description */}
            <p
              className="
                !m-0
                mt-4
                w-full
                max-w-[511px]
                !text-white/70
                text-[15px]
                font-normal
                leading-6
                sm:mt-5
                sm:text-base
                sm:leading-7
              "
            >
              Check the product pair, direction, context mapping, permissions
              and compatibility before assuming two Zoiko products share
              anything at all.
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
              {/* Primary */}
              <Link
                href="/resources/ecosystem"
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
                  !text-[#162B4A]
                  no-underline
                  transition
                  hover:bg-[#F1F5F9]
                  sm:w-auto
                "
              >
                Browse connections
              </Link>

              {/* Secondary */}
              <Link
                href="/zoiko-one"
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
                Compare Zoiko One
              </Link>
            </div>
          </div>

          {/* Image */}
          <div
            className="
              relative
              z-10
              mt-8
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-white/15
              bg-white/5
              p-3
              sm:mt-9
              sm:p-4
              md:p-5
              lg:absolute
              lg:right-10
              lg:top-6
              lg:mt-0
              lg:w-[478px]
              lg:max-w-[478px]
            "
          >
            <div className="relative aspect-[478/335] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/ecosystem/cta.png"
                alt="Zoiko ecosystem connections"
                fill
                className="object-cover"
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 1023px) 80vw,
                  478px
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}