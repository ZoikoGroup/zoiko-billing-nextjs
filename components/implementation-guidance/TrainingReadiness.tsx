export default function TrainingReadiness() {
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
            px-0
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
              <span className="h-px w-4 shrink-0 bg-white opacity-40" />

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
                Training &amp; operating readiness
              </span>

              <span className="h-px w-4 shrink-0 bg-white opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
                !pb-[0.69px]
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
              Six audiences, each with a different
             
              failure mode.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-[3.1px]
                text-[15px]
                font-normal
                leading-7
                text-white/72
                sm:text-base
              "
            >
              Training references current Documentation rather than restating
              it, so material does not drift from the product.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full overflow-hidden rounded-2xl">
            <img
              src="/images/implementation-guidance/training-readiness.png"
              alt="Training and operating readiness"
              className="
                block
                h-auto
                w-full
                rounded-2xl
                border
                border-[#dfe5ee]
                object-cover
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}