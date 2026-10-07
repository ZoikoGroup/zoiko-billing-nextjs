export default function CompleteRequestIncludes() {
  const items = [
    {
      title: "A specific topic",
      description: (
        <>
          What the piece is about, in a sentence.{" "}
          <strong>
            &quot;A story about billing&quot; cannot be routed to anyone.
          </strong>
        </>
      ),
    },
    {
      title: "The actual questions",
      description: (
        <>
          Written out. A request for &quot;comment&quot; without questions
          cannot be reviewed by the person who would answer them.
        </>
      ),
    },
    {
      title: "A deadline with a timezone",
      description: (
        <>
          A date alone is ambiguous across regions.{" "}
          <strong>If you give a time, give the zone.</strong>
        </>
      ),
    },
    {
      title: "Outlet and format",
      description: (
        <>
          Article, broadcast, podcast, event or report — each has different
          practical constraints.
        </>
      ),
    },
    {
      title: "Public sources you have read",
      description: (
        <>
          Links, so the reply does not repeat what you already have.
        </>
      ),
    },
    {
      title: "What you need, specifically",
      description: (
        <>
          A statement, a correction, an interview or an asset.{" "}
          <strong>These route to different people.</strong>
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
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
        <div className="w-full max-w-[1240px]">
          {/* SECTION INTRO */}
          <div
            className="
              mx-auto
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
                What a complete request includes
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
              Six things that make an enquiry actionable.
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
              An incomplete request is not refused — it is slower, because the
              first reply has to ask for these.
            </p>
          </div>

          {/* CARDS */}
          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              md:mt-10
              lg:grid-cols-3
            "
          >
            {items.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[190px]
                  flex-col
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                <h3
                  className="
                    !m-0
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    !m-0
                    mt-1.5
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}