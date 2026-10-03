import Image from "next/image";

export default function ImplementationReadiness() {
  return (
    <section className="w-full bg-white">
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
                Implementation readiness
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
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
              Seven areas, each with an owner and required evidence.
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
              This is not a live workspace and does not imply this exact UI or
              workflow exists.{" "}
              <span className="font-bold">
                All statuses render as Unknown because no controlled source
                backs them.
              </span>
            </p>
          </div>

          {/* IMAGE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_4px_22px_rgba(11,27,60,0.07)]
            "
          >
            <div
              className="
                relative
                aspect-[1184/592]
                w-full
                min-h-[280px]
              "
            >
              <Image
                src="/images/developers-and-it/image2.png"
                alt="Implementation readiness model"
                fill
                className="object-contain"
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 768px) 100vw,
                  (max-width: 1280px) 100vw,
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