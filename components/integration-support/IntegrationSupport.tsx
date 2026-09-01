import Image from "next/image";
import Link from "next/link";

export default function IntegrationSupport() {
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
        <div
          className="
            w-full
            min-w-0

            lg:w-[52%]
            lg:pt-1
          "
        >
          <div
            className="
              flex
              w-full
              max-w-[606px]
              flex-col
              items-start
              gap-5

              sm:gap-6
            "
          >
            {/* EYEBROW */}
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
                Integration Support
              </span>
            </div>

            {/* HEADING */}
            <h1
              className="
                !m-0
                w-full
                max-w-[606px]
                text-[36px]
                font-bold
                leading-[1.12]
                tracking-[-0.02em]
                text-slate-900

                sm:text-[42px]
                md:text-[46px]

                lg:text-[44px]
                xl:text-[48px]
              "
            >
              When your integration
              <br className="hidden sm:block" /> behaves{" "}
              <span className="text-blue-600">
                differently than
                <br className="hidden sm:block" /> documented.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-1
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Secure intake for account-specific integration behavior — API
              requests, authentication context, webhook delivery, sync and
              provider connections. Public technical contracts stay in
              Developers; this is for the case where your account does
              something the documentation does not describe.
            </p>

            {/* CTA BUTTONS */}
            <div
              className="
                flex
                w-full
                flex-col
                gap-3
                pt-1

                sm:flex-row
                sm:flex-wrap
              "
            >
              <Link
                href="/contact-support"
                className="
                  inline-flex
                  min-h-11
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-600
                  px-6
                  py-2.5
                  text-center
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
                Start integration support request
              </Link>

              <Link
                href="/developers"
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
                  py-2.5
                  text-center
                  text-sm
                  font-semibold
                  leading-6
                  text-[#091127]
                  transition
                  hover:bg-[#f8faff]

                  sm:w-auto
                "
              >
                Review Developers documentation
              </Link>
            </div>

            {/* SUPPORT NOTE */}
            <div
              className="
                w-full
                max-w-[562px]
                rounded-r-[10px]
                border
                border-l-[3px]
                border-[#1f6feb]
                bg-white
                px-4
                py-3.5

                sm:py-4
              "
            >
              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-5
                  text-[#5d7192]
                "
              >
                Support cannot override identity, permission or security
                controls, and never needs a credential to diagnose an
                integration.
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
              h-[420px]
              w-full
              max-w-[557px]
              overflow-hidden
              rounded-2xl

              sm:h-[470px]

              md:h-[500px]

              lg:h-[519px]
            "
          >
            <Image
              src="/images/integration-support/integration.png"
              alt="Integration support"
              fill
              priority
              className="object-cover"
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 767px) 90vw,
                (max-width: 1023px) 85vw,
                (max-width: 1279px) 44vw,
                557px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}