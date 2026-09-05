import Image from "next/image";

export default function GuidedFindYourSolution() {
  return (
    <section className="w-full bg-[#f7f8fa]">
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
            gap-8

            sm:gap-10

            md:gap-11
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
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

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
                Guided &quot;find your solution&quot;
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
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
              An optional module, and it is not rendered.
            </h2>

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
              The featured journey exists in the source taxonomy, but its
              route and qualification behavior remain source-controlled.
            </p>
          </div>

          {/* GUIDED SOLUTION MODULE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              p-4

              sm:p-5

              md:p-6
            "
          >
            <div
              className="
                relative
                w-full
                aspect-[1184/592]
                overflow-hidden
                rounded-xl
                bg-[#f3f5f8]
              "
            >
              <Image
                src="/images/solutions/guided-find-your-solution.png"
                alt="Guided find your solution"
                fill
                className="object-cover"
                sizes="
                  (max-width: 639px) calc(100vw - 40px),
                  (max-width: 1023px) calc(100vw - 64px),
                  1184px
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}