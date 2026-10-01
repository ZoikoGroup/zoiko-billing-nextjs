import Image from "next/image";

export default function IllustrativeFXDecisionWorkspace() {
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
                Illustrative FX decision workspace
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
              What governed FX decisions look like
             
              in an interface.
            </h2>

            {/* DESCRIPTION */}
            <div
              className="
                w-full
                max-w-[687px]
                text-center
                text-[15px]
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              <p className="!m-0 font-bold">
                No numeric rate, spread, fee, benchmark, precision or refresh
                interval appears in
              </p>

              <p className="!m-0">
                <span className="font-bold">this mockup</span>
                <span className="font-normal">
                  , and none is required for the pattern to be legible.
                  Currency pairs are
                  <br className="hidden sm:block" /> generic placeholders.
                </span>
              </p>
            </div>
          </div>

          {/* WORKSPACE IMAGE */}
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-xl
              border
              border-[#dfe5ee]
              bg-white
              pt-2.5
              shadow-[0_4px_22px_rgba(11,27,60,0.07)]
            "
          >
            <Image
              src="/images/fx-management/image.png"
              alt="Illustrative FX decision workspace"
              width={1184}
              height={592}
              className="
                block
                h-auto
                w-full
                rounded-xl
                object-cover
              "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}