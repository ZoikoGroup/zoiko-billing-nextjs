import Image from "next/image";

export default function SystemsDataAccountingBoundary() {
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
                Systems, data &amp; accounting boundary
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
              Five layers, and Zoiko Billing occupies
           
              exactly one.
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
                text-white/72

                sm:text-base
              "
            >
              A conceptual boundary map —{" "}
              <strong className="font-bold">
                not an implementation diagram with fake
                <br className="hidden sm:block" /> endpoints
              </strong>
              .
            </p>
          </div>

          {/* WORKSPACE IMAGE */}
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-xl
              border
              border-[#dfe5ee]
              bg-white
              pt-2.5
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            <Image
              src="/images/fx-management/image2.png"
              alt="Systems, data and accounting boundary"
              width={1184}
              height={592}
              className="
                block
                h-auto
                w-full
                rounded-xl
                object-cover
              "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}