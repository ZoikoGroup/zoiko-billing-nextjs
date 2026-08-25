import Image from "next/image";
import Link from "next/link";

export default function EvaluateCta() {
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

            lg:grid
            lg:min-h-[418px]
            lg:grid-cols-[1fr_42%]
            lg:items-center
            lg:gap-8
            lg:p-10

            xl:grid-cols-[1fr_43%]
            xl:gap-10
            xl:p-12
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
              rounded-full
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

              lg:max-w-[610px]
            "
          >
            {/* HEADING */}
            <h2
              className="
                !m-0
                max-w-full
                text-3xl
                font-extrabold
                leading-[1.12]
                tracking-[-0.035em]
                !text-white

                sm:text-[32px]

                md:text-[34px]
                md:leading-[1.1]

                lg:max-w-[600px]

                xl:text-[40px]
                xl:leading-[1.08]
              "
            >
              Evaluate the connection.
              <br />
              Not the logo.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                mt-2
                w-full
                max-w-[520px]
                text-sm
                font-normal
                leading-6
                !text-white/70

                sm:text-base

                lg:max-w-[510px]
              "
            >
              Check what each integration actually supports — objects, actions,
              direction, authentication, availability, setup owner, current
              status and last verification.
            </p>

            {/* BUTTONS */}
            <div
              className="
                flex
                w-full
                flex-col
                gap-3
                pt-3

                sm:w-auto
                sm:flex-row
                sm:flex-wrap
              "
            >
              {/* PRIMARY CTA */}
              <Link
                href="#"
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
                Search integrations
              </Link>

              {/* SECONDARY CTA */}
              <Link
                href="#"
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
                Integration availability
              </Link>

              {/* SECONDARY CTA */}
              <Link
                href="#"
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
                View pricing
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
              p-3

              sm:mt-8
              sm:p-4

              md:mt-9

              lg:mt-0
              lg:w-full
              lg:self-center
              lg:p-4
            "
          >
            <div className="relative aspect-[478/295] w-full">
              <Image
                src="/images/integrations-directory/evaluate.png"
                alt="Integration evaluation"
                fill
                priority
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