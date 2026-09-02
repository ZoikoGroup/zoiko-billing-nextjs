import Image from "next/image";
import Link from "next/link";

export default function PartnerPortal() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          px-5
          pb-14
          pt-10

          sm:px-8
          sm:pb-16
          sm:pt-12

          md:px-10
          md:pb-20

          lg:flex-row
          lg:items-start
          lg:justify-between
          lg:gap-10
          lg:px-14
          lg:py-16

          xl:gap-14
          xl:px-20
          xl:py-20
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full min-w-0 lg:w-[52%] xl:w-[53%]">
          <div className="flex w-full flex-col items-start gap-5">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-6 shrink-0 bg-blue-600 opacity-75" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Partner Portal
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                !m-0
                max-w-[650px]
                text-[38px]
                font-extrabold
                leading-[1.1]
                tracking-[-0.035em]
                text-slate-900

                sm:text-[44px]

                md:text-[48px]

                lg:text-[44px]

                xl:text-[50px]
              "
            >
              The partner workspace,
              <br className="hidden sm:block" />
              <span className="text-blue-600">
                and what it takes to reach it.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-1
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              The Partner Portal is an authenticated workspace for authorized
              users of approved current partner relationships. This public
              page explains how access is resolved, what each relationship
              state permits, and where to go if you are not a partner yet.
            </p>

            {/* CTA BUTTONS */}
            <div
              className="
                mt-2
                flex
                w-full
                flex-col
                gap-3

                sm:w-auto
                sm:flex-row
                sm:flex-wrap
              "
            >
              <Link
                href="/partner-portal"
                className="
                  inline-flex
                  min-h-11
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-600
                  px-6
                  text-sm
                  font-semibold
                  leading-6
                  text-white
                  shadow-[0_8px_20px_rgba(31,111,235,0.26)]
                  transition
                  hover:bg-blue-700

                  sm:w-auto
                "
              >
                Continue to Partner Portal
              </Link>

              <Link
                href="/partner-program"
                className="
                  inline-flex
                  min-h-11
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-6
                  text-sm
                  font-semibold
                  leading-6
                  text-[#091127]
                  transition
                  hover:bg-[#f8faff]

                  sm:w-auto
                "
              >
                Review Partner Program
              </Link>
            </div>

            {/* Access Notice */}
            <div
              className="
                mt-1
                w-full
                max-w-[562px]
                rounded-r-[10px]
                border
                border-[#dfe5ee]
                border-l-[3px]
                border-l-blue-600
                bg-white
                px-4
                py-3.5
              "
            >
              <p
                className="
                  m-0
                  text-sm
                  font-normal
                  leading-5
                  text-[#5d7192]
                "
              >
                Access depends on a current approved relationship, your
                organization context, and your role — resolved at sign-in,
                not assumed from any of them alone.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            mt-10
            w-full

            sm:mt-12

            md:mt-14

            lg:mt-0
            lg:w-[44%]

            xl:w-[43%]
          "
        >
          <div
            className="
              relative
              mx-auto
              aspect-square
              w-full
              max-w-[511px]
              overflow-hidden
              rounded-2xl
            "
          >
            <Image
              src="/images/partner-portal/portal.png"
              alt="Partner Portal workspace"
              fill
              priority
              className="object-cover"
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 767px) 90vw,
                (max-width: 1023px) 85vw,
                (max-width: 1279px) 44vw,
                511px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}