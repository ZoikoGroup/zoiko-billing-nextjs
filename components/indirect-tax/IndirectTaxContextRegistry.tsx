export default function IndirectTaxContextRegistry() {
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
            gap-5

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
              gap-2.5
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
                Indirect tax context registry
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
                pt-0.5
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
              Organized context with its evidence
              <br className="hidden sm:block" />
              attached.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                font-bold
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              No rate, rate table, threshold, exemption, jurisdiction,
              regulator or taxability conclusion appears in any row.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full pt-2 sm:pt-4 md:pt-5">
            <img
              src="/images/indirect-tax/image1.png"
              alt="Indirect tax context registry"
              className="
                block
                h-auto
                w-full
                rounded-xl
                border
                border-[#dfe5ee]
                shadow-[0px_4px_22px_0px_rgba(11,27,60,0.07)]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}