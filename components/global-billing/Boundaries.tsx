import Image from "next/image";

export default function Boundaries() {
  return (
    <section className="w-full bg-[#000000]">
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
          {/* ================= SECTION INTRO ================= */}
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
                Payment, tax &amp; provider boundaries
              </span>

              <span className="h-px w-4 shrink-0 bg-white opacity-40" />
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
              What may be said about adjacent domains.
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
                text-white
                opacity-72

                sm:text-base
              "
            >
              These are the domains most likely to be over-read on a global
              page. Each row states the allowed statement and the inference it
              must not create.
            </p>
          </div>

          {/* ================= IMAGE ================= */}
          <div
            className="
              w-full
              pt-0

              sm:pt-1

              md:pt-2

              lg:pt-3
            "
          >
            <div className="relative w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/global-billing/boundaries.png"
                alt="Payment, tax and provider boundaries"
                width={1184}
                height={592}
                className="h-auto w-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1184px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}