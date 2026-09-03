import Image from "next/image";

export default function BoundaryModel() {
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
              max-w-[680px]
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
                Usage, seat &amp; entitlement references
              </span>

              <span className="h-px w-4 shrink-0 bg-white/40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[680px]
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
              The boundary model, stated plainly.
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
              External quantities can become billable input. That is an input
              boundary — not proof that Zoiko Billing collects raw product
              events, meters them, applies rating tiers or enforces usage
              limits.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/saas-and-digital-services/boundary-model.png"
              alt="Usage, seat and entitlement boundary model"
              width={1184}
              height={592}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1240px) 100vw, 1184px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}