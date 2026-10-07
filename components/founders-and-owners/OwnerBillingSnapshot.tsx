import Image from "next/image";

export default function OwnerBillingSnapshot() {
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
                Illustrative owner billing snapshot
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
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
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              What an owner-level view would
              <br className="hidden sm:block" />
              surface.
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
                A wireframe proof pattern, not a representation of verified
                live Zoiko Billing analytics.
              </strong>{" "}
              Qualitative states and specimen labels only —{" "}
              <strong className="font-bold">
                no metric, count or financial figure is asserted
              </strong>
              .
            </p>
          </div>

          {/* SNAPSHOT IMAGE */}
          <div className="w-full">
            <div
              className="
                relative
                w-full
                overflow-hidden
                rounded-xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_4px_22px_rgba(11,27,60,0.07)]
                aspect-[1184/572]
              "
            >
              <Image
                src="/images/founders-and-owners/image.png"
                alt="Illustrative owner billing snapshot"
                fill
                className="object-cover"
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 767px) 90vw,
                  (max-width: 1023px) 85vw,
                  1240px
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}