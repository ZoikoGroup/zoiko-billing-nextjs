import Image from "next/image";
import Link from "next/link";

export default function IntegrationAvailability() {
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
          lg:items-center
          lg:justify-between
          lg:gap-10
          lg:px-14
          lg:py-20

          xl:gap-14
          xl:px-20
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full min-w-0 lg:w-[52%]">
          <div
            className="
              flex
              w-full
              max-w-[606px]
              flex-col
              items-start
              gap-3
            "
          >
            {/* EYEBROW */}
            <div className="mb-2 flex items-center gap-3 sm:mb-3">
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
                Integration Availability
              </span>
            </div>

            {/* HEADING */}
            <h1
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
              "
            >
              Check whether an
              <br className="hidden sm:block" />
              integration is available
              <br className="hidden sm:block" />
              <span className="text-blue-600">
                for the exact context
                <br className="hidden sm:block" />
                you need.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:mt-6
                sm:text-base

                lg:mt-5
              "
            >
              Select an approved integration and inspect current capability,
              region or jurisdiction, plan, environment, version compatibility,
              certification or review evidence, and operational-status
              qualifiers. See limitations and last verification before setup or
              conversion.
            </p>

            {/* CTA BUTTONS */}
            <div
              className="
                mt-5
                flex
                w-full
                flex-col
                gap-3

                sm:mt-6
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
                Browse Integrations Directory
              </Link>
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
              aspect-[534/483]
              w-full
              max-w-[534px]
              overflow-hidden
              rounded-2xl
            "
          >
            <Image
              src="/images/integration-availability/integration-availability.png"
              alt="Integration availability"
              fill
              priority
              className="object-cover"
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 767px) 90vw,
                (max-width: 1023px) 85vw,
                (max-width: 1279px) 44vw,
                534px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}