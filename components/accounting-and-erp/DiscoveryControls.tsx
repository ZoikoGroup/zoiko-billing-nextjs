import Image from "next/image";

export default function DiscoveryControls() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1240px]
          flex-col
          items-center
          gap-5
          px-5
          py-12

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-7
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
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-[#7890b2] opacity-40" />

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
              Find connections &amp; check availability
            </span>

            <span className="h-px w-4 bg-[#7890b2] opacity-40" />
          </div>

          {/* HEADING */}
          <h2
  className="
    !m-0
    max-w-[760px]
    text-[30px]
    font-extrabold
    leading-[1.15]
    tracking-[-0.03em]
    text-[#091127]

    sm:text-[34px]

    md:text-[36px]
    md:leading-10
  "
>
  Twelve discovery controls, all
 
  registry-backed.
</h2>

          {/* DESCRIPTION */}
          <p
            className="
              !m-0
              w-full
              max-w-[687px]
              text-sm
              font-normal
              leading-6
              text-[#5d7192]

              sm:text-base
              sm:leading-7
            "
          >
            Browsing connection options requires no account and no upload.
          </p>
        </div>

        {/* IMAGE */}
        <div
          className="
            relative
            mt-1
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-[#dfe5ee]
            bg-white
            shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
          "
        >
          <div className="relative aspect-[1184/583] w-full">
            <Image
              src="/images/accounting-and-erp/discovery.png"
              alt="Connection discovery and availability controls"
              fill
              className="object-cover"
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 767px) 90vw,
                (max-width: 1023px) 85vw,
                1184px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}