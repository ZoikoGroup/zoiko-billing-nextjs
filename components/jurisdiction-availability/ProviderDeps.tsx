"use client";

export default function ProviderDeps() {
  return (
    <section className="w-full bg-slate-950">
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
              <span className="h-px w-4 shrink-0 bg-white/40" />

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
                Currency, payment provider &amp; settlement dependencies
              </span>

              <span className="h-px w-4 shrink-0 bg-white/40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1100px]
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
              <span className="block">
                There is no country-equals-currency
              </span>
              <span className="block">shortcut.</span>
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
                text-white/70

                sm:text-base
              "
            >
              A currency, FX route, local payment method, provider or
              settlement model is never selected or promised because of the
              selected country alone.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full overflow-hidden rounded-2xl">
            <img
              src="/images/jurisdiction-availability/provider-settlement.png"
              alt="Currency, payment provider and settlement dependencies"
              className="block h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}