"use client";

export default function Boundaries() {
  return (
    <section className="w-full bg-[#091127]">
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
          py-14

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
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
            <span className="h-px w-4 shrink-0 bg-white opacity-40" />

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
              Boundaries
            </span>

            <span className="h-px w-4 shrink-0 bg-white opacity-40" />
          </div>

          {/* HEADING */}
          <h2
            className="
              !m-0
              w-full
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
            Four intents that do not belong here.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              !m-0
              w-full
              max-w-[687px]
              pt-1
              text-[15px]
              font-normal
              leading-7
              text-white/72

              sm:text-base
            "
          >
            A resource center attracts every kind of question. Three of these
            have better authorities and one is a hard stop.
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
            shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
          "
        >
          <img
            src="/images/resources/boundaries.png"
            alt="Resource center boundaries"
            className="
              block
              h-auto
              w-full
              object-cover
            "
          />
        </div>
      </div>
    </section>
  );
}