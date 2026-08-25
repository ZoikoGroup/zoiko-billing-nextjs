import Image from "next/image";
import Link from "next/link";

export default function DeveloperSDKs() {
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
          md:pt-14

          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-10
          lg:px-14
          lg:py-10

          xl:gap-14
          xl:px-20
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full min-w-0 lg:w-[53%]">
          <div className="flex w-full max-w-[606px] flex-col gap-7">
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
                Developers · SDKs &amp; Examples
              </span>
            </div>

            {/* HEADING */}
            <div>
              {/* MOBILE + TABLET HEADING */}
              <h2
                className="
                  !m-0
                  !block
                  !max-w-[700px]
                  !text-[40px]
                  !font-extrabold
                  !leading-[1.1]
                  !tracking-[-0.035em]
                  !text-slate-900

                  sm:!text-[46px]

                  md:!text-[50px]

                  lg:!hidden
                "
              >
                Start with verified code,{" "}
                <span className="text-blue-600">
                  not guesswork.
                </span>
              </h2>

              {/* DESKTOP HEADING */}
              <h2
                className="
                  !m-0
                  !hidden
                  !font-extrabold
                  !leading-[1.1]
                  !tracking-[-0.035em]
                  !text-slate-900

                  lg:!block
                  lg:!text-[44px]

                  xl:!text-[50px]
                "
              >
                <span className="block">
                  Start with verified code,
                </span>

                <span className="block text-blue-600">
                  not guesswork.
                </span>
              </h2>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Browse supported SDKs and source-governed examples that connect
              Zoiko Billing API concepts to real implementation tasks, with
              version, prerequisite, security and production-readiness context
              built in.
            </p>

            {/* CTA BUTTONS */}
            <div
              className="
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
                href="/sdks"
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
                Browse SDKs
              </Link>

              <Link
                href="/examples"
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
                  text-sm
                  font-semibold
                  leading-6
                  text-[#091127]
                  transition
                  hover:bg-[#f8faff]

                  sm:w-auto
                "
              >
                Browse examples
              </Link>
            </div>

            {/* INFORMATION CALLOUT */}
            <div
              className="
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
                pb-4
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
                Examples accelerate implementation; the API documentation
                remains authoritative for request, response, permission,
                lifecycle and error behavior.
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
            lg:w-[43%]

            xl:w-[42%]
          "
        >
          <div
            className="
              relative
              mx-auto
              aspect-[537/484]
              w-full
              max-w-[537px]
              overflow-hidden
              rounded-2xl
            "
          >
            <Image
              src="/images/sdks-and-examples/sdks.png"
              alt="Zoiko Billing SDKs and examples"
              fill
              priority
              className="object-cover"
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 767px) 90vw,
                (max-width: 1023px) 85vw,
                (max-width: 1279px) 43vw,
                537px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}