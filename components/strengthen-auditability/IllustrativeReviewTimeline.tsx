export default function IllustrativeReviewTimeline() {
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
            gap-5

            sm:gap-6

            md:gap-7
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
              gap-2.5
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
                Illustrative review timeline
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
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
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              What a reviewable change history
              <br className="hidden sm:block" />
              looks like.
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
                A wireframe proof pattern only.
              </strong>{" "}
              All items, dates, identifiers, values and statuses are specimen
              content and{" "}
              <strong className="font-bold">
                must not be presented as current Zoiko Billing functionality
              </strong>
              .
            </p>
          </div>

          {/* REVIEW TIMELINE IMAGE */}
          <div className="w-full pt-2">
            <img
              src="/images/strengthen-auditability/image1.png"
              alt="Illustrative review timeline showing a reviewable change history"
              className="
                block
                h-auto
                w-full
                rounded-xl
                border
                border-[#dfe5ee]
                bg-white
                object-contain
                shadow-[0_4px_22px_rgba(11,27,60,0.07)]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}