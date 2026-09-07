"use client";

export default function FinderStateModel() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1240px]
          flex-col
          items-center
          gap-8
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:gap-11
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
              Finder state model
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
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
              !text-[#091127]

              sm:!text-[34px]

              md:!text-[36px]

              lg:!text-[40px]
            "
          >
            Seven states, and this page is in the
          
            sparse one.
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
              text-[#5d7192]

              sm:text-base
            "
          >
            Select a state to see its behavior.
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
          <img
            src="/images/resources/finder-state-model.png"
            alt="Finder state model showing seven finder states"
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