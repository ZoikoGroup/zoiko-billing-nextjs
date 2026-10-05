export default function PricingContextRegistry() {
  return (
    <section
    id = "price-context-registry"
     className="w-full bg-[#f7f8fa]">
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
            px-0

            sm:px-0
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
                Pricing context registry
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
                pb-[0.69px]
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
              Price provenance, inspectable per
              <br className="hidden sm:block" /> row.
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
              <strong className="font-bold">
                Every price value renders as withheld.
              </strong>{" "}
              No amount, currency code, rate, spread, fee, discount or margin
              appears anywhere in this workspace.
            </p>
          </div>

          {/* REGISTRY IMAGE */}
          <div className="w-full pt-5">
            <img
              src="/images/multi-currency-pricing/image.png"
              alt="Pricing context registry"
              className="
                block
                h-auto
                w-full
                rounded-xl
                border
                border-[#dfe5ee]
                shadow-[0_4px_22px_rgba(11,27,60,0.07)]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}