import Image from "next/image";
import Link from "next/link";

export default function SecurityOverview() {
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
          {/* EYEBROW */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="h-px w-6 shrink-0 bg-[#3478d8] opacity-75" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#3478d8]

                sm:text-xs
                sm:tracking-[0.18em]
              "
            >
              Security Overview
            </span>
          </div>

          {/* MOBILE + TABLET HEADING */}
          <h1
            className="
              !m-0
              !block
              !max-w-[700px]
              !text-[40px]
              !font-extrabold
              !leading-[1.08]
              !tracking-[-0.035em]
              !text-[#091127]

              sm:!text-[46px]

              md:!text-[50px]

              lg:!hidden
            "
          >
            How security is governed,{" "}
            <span className="text-[#2563eb]">
              and where each answer lives.
            </span>
          </h1>

          {/* DESKTOP HEADING */}
          <h1
            className="
              !m-0
              !hidden
              !font-extrabold
              !leading-[1.08]
              !tracking-[-0.035em]
              !text-[#091127]

              lg:!block
              lg:!text-[44px]

              xl:!text-[50px]
            "
          >
            <span className="block">How security is</span>
            <span className="block">governed,</span>
            <span className="block text-[#2563eb]">and where</span>
            <span className="block text-[#2563eb]">each answer lives.</span>
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
            Security orientation for reviewers, administrators and prospective
            customers: what each control domain covers at a public-safe level,
            what is deliberately not published here, and which destination
            holds the authoritative answer.
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
              href="/security-controls"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-full
                bg-[#3478d8]
                px-6
                text-center
                text-sm
                font-semibold
                leading-6
                text-white
                shadow-[0_8px_20px_rgba(31,111,235,0.26)]
                transition
                hover:bg-[#2869c4]

                sm:w-auto
              "
            >
              Explore security controls
            </Link>

            <Link
              href="/trust"
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
                text-center
                text-sm
                font-semibold
                leading-6
                text-[#163f73]
                transition
                hover:bg-[#f7f8fa]

                sm:w-auto
              "
            >
              Visit Trust Center
            </Link>
          </div>

          {/* NOTICE */}
          <div
            className="
              mt-6
              w-full
              max-w-[562px]
              rounded-r-[10px]
              border
              border-[#dfe5ee]
              border-l-[3px]
              border-l-[#3478d8]
              bg-white
              px-4
              py-3.5

              sm:mt-7
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
              This page carries no certification badges. Assurance evidence
              lives in Trust Center with its scope, status and date attached.
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
              aspect-[557/519]
              w-full
              max-w-[557px]
              overflow-hidden
              rounded-2xl
            "
          >
            <Image
              src="/images/security-overview/security-overview.png"
              alt="Security overview"
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