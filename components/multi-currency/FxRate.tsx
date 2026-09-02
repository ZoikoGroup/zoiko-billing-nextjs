"use client";

export default function FxRate() {
  return (
    <section
      id="fx-management"
      className="w-full bg-slate-950"
    >
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
              max-w-[900px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-white/45" />

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
                FX rate source, timestamp, basis &amp; finality
              </span>

              <span className="h-px w-4 shrink-0 bg-white/45" />
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
                !text-white

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              A visible rate does not prove an executed conversion.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[720px]
                text-[15px]
                font-normal
                leading-7
                text-white/70

                sm:text-base
              "
            >
              Rate lookup, display conversion, actual conversion, payment
              processing and settlement are five distinct capabilities. A
              published rate carries ten fields so it can be audited later.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full overflow-hidden rounded-2xl">
            <img
              src="/images/multi-currency/fx-rate-audit.png"
              alt="FX rate source, timestamp, basis and finality"
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}