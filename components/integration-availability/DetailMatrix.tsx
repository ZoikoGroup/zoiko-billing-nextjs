import Image from "next/image";

export default function DetailMatrix() {
  return (
    <section className="w-full overflow-hidden bg-[#091127]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1240px]
          flex-col
          items-center
          gap-6
          px-5
          py-12

          sm:px-8
          sm:py-14

          md:px-10
          md:py-16

          lg:px-7
          lg:py-20
        "
      >
        {/* HEADER */}
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
          <div className="flex w-full items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-white opacity-40" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-white/55

                sm:text-xs
                sm:tracking-[0.16em]
              "
            >
              Integration availability detail matrix
            </span>

            <span className="h-px w-4 shrink-0 bg-white opacity-40" />
          </div>

          {/* TITLE */}
          <h2
            className="
              !m-0
              !text-center
              !text-[30px]
              !font-extrabold
              !leading-[1.2]
              !tracking-[-0.03em]
              !text-white

              sm:!text-[34px]

              md:!text-[36px]
            "
          >
            Conversion cannot visually outrank a
            material blocker.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              !m-0
              w-full
              max-w-[687px]
              pt-1
              text-center
              text-[15px]
              font-normal
              leading-7
              text-white/72

              sm:text-base
            "
          >
            Limitations, live incident state and incompatible or deprecated
            conditions are shown before the primary action — never after it.
          </p>
        </div>

        {/* IMAGE */}
        <div
          className="
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-[#dfe5ee]
            bg-white
            shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
          "
        >
          <div className="relative aspect-[1184/633] w-full">
            <Image
              src="/images/integration-availability/detail-matrix.png"
              alt="Integration availability detail matrix"
              fill
              className="object-cover"
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 1023px) 90vw,
                1184px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}