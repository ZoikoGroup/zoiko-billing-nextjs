import Image from "next/image";

export default function RiskExceptionLens() {
  return (
    <section className="w-full">
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
            gap-11
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
                  bg-[#7890b2]
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
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Risk &amp; exception lens
              </span>

              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-[#7890b2]
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
                  !text-[#091127]

                  sm:!text-[34px]

                  md:!text-[36px]

                  lg:!text-[40px]
                "
              >
                Six states, and &quot;resolved&quot; claims
              
                nothing final.
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
                  text-[#5d7192]

                  sm:text-base
                "
              >
                Select a state to see its required treatment.
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
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            <Image
              src="/images/founders-and-owners/image1.png"
              alt="Risk and exception lens"
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