import Image from "next/image";

export default function NewsroomPublications() {
  return (
    <section 
    id ="newsroom"
    className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto flex w-full max-w-[1440px] flex-col items-start
          px-5 py-14
          sm:px-8 sm:py-16
          md:px-10 md:py-20
          lg:px-14
          xl:px-20
        "
      >
        <div
          className="
            mx-auto flex w-full max-w-[1240px] flex-col
            items-center gap-8
            sm:gap-10
            md:gap-11
          "
        >
          <div
            className="
              flex w-full max-w-[662px] flex-col items-center
              gap-3 pt-2 text-center
            "
          >
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px] font-bold uppercase leading-4
                  tracking-[0.16em] text-[#7890b2]
                  sm:text-xs sm:tracking-[0.18em]
                "
              >
                Newsroom
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            <h2
              className="
                !m-0 w-full max-w-[662px]
                !text-[30px] !font-extrabold
                !leading-[1.2] !tracking-[-0.035em]
                !text-[#091127]
                sm:!text-[34px]
                md:!text-[36px]
                lg:!text-[40px]
              "
            >
              Publications come from the registry,
              
              or the feed stays empty.
            </h2>

            <p
              className="
                !m-0 w-full max-w-[687px]
                text-[15px] font-normal leading-7 text-[#5d7192]
                sm:text-base
              "
            >
              Select a registry state to see how each renders. No announcement
              is fabricated in any state.
            </p>
          </div>

          <div
            className="
              relative aspect-[2/1] w-full overflow-hidden
              rounded-2xl border border-[#dfe5ee] bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            <Image
              src="/images/newsroom/newsroom-publications.png"
              alt="Newsroom publications"
              fill
              className="object-cover"
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 90vw,
                1184px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}