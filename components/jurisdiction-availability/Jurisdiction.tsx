import Image from "next/image";

export default function Jurisdiction() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-5
          py-12

          sm:px-8
          sm:py-14

          md:px-10
          md:py-16

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
              flex-col
              items-start
            "
          >
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
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
                Jurisdiction Availability
              </span>
            </div>

            {/* MOBILE + TABLET HEADING */}
            <h2
              className="
                !m-0
                !block
                !max-w-[680px]
                !text-[40px]
                !font-extrabold
                !leading-[1.08]
                !tracking-[-0.035em]
                !text-slate-900

                sm:!text-[46px]

                md:!text-[50px]

                lg:!hidden
              "
            >
              Check where Zoiko Billing capabilities are{" "}
              <span className="text-blue-600">
                currently available.
              </span>
            </h2>

            {/* DESKTOP HEADING */}
            <h2
              className="
                !m-0
                !hidden
                !max-w-none
                !font-extrabold
                !leading-[1.08]
                !tracking-[-0.035em]
                !text-slate-900

                lg:!block
                lg:!text-[46px]

                xl:!text-[52px]
              "
            >
              <span className="block">
                Check where Zoiko
              </span>

              <span className="block">
                Billing capabilities are
              </span>

              <span className="block text-blue-600">
                currently available.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:mt-9
                sm:text-base

                md:mt-9

                lg:mt-8

                xl:mt-9
              "
            >
              Select a country, territory or other supported jurisdiction
              scope to see the current public status, capability limitations,
              provider or plan dependencies, and the next action the approved
              record supports.
            </p>

            {/* INFORMATION BOX */}
            <div
              className="
                mt-7
                w-full
                max-w-[562px]
                rounded-r-[10px]
                border
                border-[#dfe5ee]
                border-l-[3px]
                border-l-blue-600
                bg-white
                px-4
                py-5

                sm:mt-8
                sm:px-5
                sm:py-6
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
                Availability can vary by capability, plan, provider, currency,
                entity and operation. Country alone does not answer every
                question — and your location is never detected or used to
                decide what you are shown.
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
          <div className="relative mx-auto aspect-[526/500] w-full max-w-[526px] overflow-hidden rounded-2xl">
            <Image
              src="/images/jurisdiction-availability/jurisdiction.png"
              alt="Jurisdiction availability"
              fill
              priority
              className="object-cover"
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 767px) 90vw,
                (max-width: 1023px) 85vw,
                (max-width: 1279px) 44vw,
                526px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}