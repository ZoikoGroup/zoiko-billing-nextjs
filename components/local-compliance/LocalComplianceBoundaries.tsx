export default function LocalComplianceBoundaries() {
  return (
    <section className="w-full bg-[#091d42]">
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

            sm:gap-8

            md:gap-10
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
            <div
              className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                overflow-hidden
              "
            >
              <span className="h-px w-4 shrink-0 bg-white opacity-40" />

              <span
                className="
                  whitespace-nowrap
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-white
                  opacity-55

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Legal, tax, regulatory &amp; product boundaries
              </span>

              <span className="h-px w-4 shrink-0 bg-white opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
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
              Six topics the page may frame — and what is prohibited without
              a source.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-center
                text-[15px]
                font-normal
                leading-7
                text-white
                opacity-72

                sm:text-base
              "
            >
              Each right-hand entry is a determination belonging to a
              qualified advisor or an approved source.
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
              shadow-[0px_4px_22px_0px_rgba(11,27,60,0.07)]
            "
          >
            <img
              src="/images/local-compliance/image3.png"
              alt="Local compliance and regulatory boundaries"
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