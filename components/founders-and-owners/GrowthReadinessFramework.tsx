import Image from "next/image";

export default function GrowthReadinessFramework() {
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
              max-w-[662px]
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
                Growth-readiness framework
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
            <div className="w-full">
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
                Five dimensions, assessed
              
                qualitatively.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div
              className="
                w-full
                max-w-[687px]
                pt-[3px]
              "
            >
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
                No score, no percentage, no overall rating — four dimensions
                resolve to Clear, Needs review or Unknown, and the fifth
                deliberately does not resolve here at all.
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white
              pt-4
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            <Image
              src="/images/founders-and-owners/image2.png"
              alt="Growth-readiness framework"
              width={1184}
              height={592}
              className="
                block
                h-auto
                w-full
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}