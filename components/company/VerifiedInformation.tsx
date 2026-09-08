'use client';

import Image from 'next/image';

export default function VerifiedInformation() {
  return (
    <section className="w-full bg-[#091127]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-6
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[1000px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-white
                  opacity-40
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-white/55

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Verified information
              </span>

              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-white
                  opacity-40
                "
              />
            </div>

            {/* HEADING */}
            <div className="w-full pb-[0.69px]">
              <h2
                className="
                  !m-0
                  w-full
                  text-center
                  !text-[30px]
                  !font-extrabold
                  !leading-[1.2]
                  !tracking-[-0.035em]
                  !text-white

                  sm:!text-[34px]

                  md:!text-[36px]

                  lg:!text-[40px]
                "
              >
                Where each company fact actually
                
                lives.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="w-full max-w-[687px] pt-[3.1px]">
              <p
                className="
                  !m-0
                  text-center
                  text-[15px]
                  font-normal
                  leading-7
                  text-white/72

                  sm:text-base
                "
              >
                A reader verifying a claim about Zoiko Billing needs the
                authority, not a restatement.
              </p>
            </div>
          </div>

          {/* VERIFIED INFORMATION IMAGE */}
          <div
            className="
              relative
              h-auto
              min-h-[240px]
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              sm:min-h-[360px]

              md:min-h-[480px]

              lg:min-h-[592px]
            "
          >
            <Image
              src="/images/company/verified-information.png"
              alt="Verified information sources for Zoiko Billing"
              fill
              className="object-cover"
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 767px) 100vw,
                (max-width: 1023px) 100vw,
                (max-width: 1439px) 100vw,
                1184px
              "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}