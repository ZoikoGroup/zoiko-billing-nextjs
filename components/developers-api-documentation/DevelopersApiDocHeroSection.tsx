import Image from "next/image";
import Link from "next/link";

export default function DevelopersApiDocHeroSection() {
  return (
    <section
      className="w-full overflow-hidden bg-white"
      id="hero"
    >
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
          {/* EYEBROW */}
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
              Developers · API Documentation
            </span>
          </div>

          {/* HEADING */}
          <h1
            className="
              !m-0
              !max-w-[700px]
              !text-[40px]
              !font-extrabold
              !leading-[1.08]
              !tracking-[-0.035em]
              !text-slate-900

              sm:!text-[46px]

              md:!text-[50px]

              lg:!text-[44px]

              xl:!text-[50px]
            "
          >
            Build against a billing model{" "}
            <span className="text-[#1D70F5]">
              you can inspect.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              !mt-8
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
            Find source-governed API reference, resource contracts, field
            semantics, errors, lifecycle rules and implementation guidance
            for Zoiko Billing.
          </p>

          {/* CTA BUTTONS */}
          <div
            className="
              mt-7
              flex
              w-full
              flex-col
              gap-3

              sm:mt-8
              sm:w-auto
              sm:flex-row
              sm:flex-wrap
            "
          >
            <Link
              href="#search-documentation"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-full
                bg-[#1D70F5]
                px-7
                text-center
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_20px_rgba(29,112,245,0.25)]
                transition
                hover:bg-blue-600

                sm:w-auto
              "
            >
              Search documentation
            </Link>

            <Link
              href="#browse-resources"
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
                px-7
                text-center
                text-sm
                font-semibold
                text-[#091127]
                transition
                hover:bg-[#f8faff]

                sm:w-auto
              "
            >
              Browse API resources
            </Link>
          </div>

          {/* NOTICE BOX */}
          <div
            className="
              relative
              mt-7
              w-full
              max-w-[687px]
              overflow-hidden
              rounded-xl
              border
              border-slate-200/90
              bg-slate-50/70
              p-4

              sm:mt-8
              sm:p-5
            "
          >
            <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#1D70F5]" />

            <p
              className="
                pl-2
                text-xs
                font-normal
                leading-6
                text-[#5d7192]

                sm:text-sm
              "
            >
              Documentation reflects approved API exposure. Product
              capability and API availability are governed separately.
            </p>
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
              w-full
              max-w-[580px]
              overflow-hidden
              rounded-2xl
            "
          >
            <Image
              src="/images/devoloper-api-documentation/dad1.png"
              alt="Build against a billing model you can inspect"
              width={580}
              height={580}
              priority
              className="
                block
                h-auto
                w-full
                object-cover
              "
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 767px) 90vw,
                (max-width: 1023px) 85vw,
                (max-width: 1279px) 44vw,
                580px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}