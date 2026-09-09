export default function EnterprisePricing() {
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
                Enterprise
              </span>

              <span className="h-px w-4 shrink-0 bg-white/45" />
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
                !text-white
                sm:!text-[34px]
                md:!text-[36px]
                lg:!text-[40px]
              "
            >
              Complex billing deserves a contract built for your operating
              model.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-0.5
                text-[15px]
                font-normal
                leading-7
                text-white/72
                sm:text-base
              "
            >
              Enterprise stays custom because identity, provisioning,
              retention, security review, SLA, integration and volume
              commitments have to be priced against actual cost-to-serve.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full max-w-[1184px]">
            <img
              src="/images/pricing/enterprise.png"
              alt="Enterprise pricing and operating model"
              className="
                block
                h-auto
                w-full
                rounded-2xl
                border
                border-white/15
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