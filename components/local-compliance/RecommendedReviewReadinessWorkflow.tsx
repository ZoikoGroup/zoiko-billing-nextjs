export default function RecommendedReviewReadinessWorkflow() {
  const steps = [
    {
      number: "1",
      title: "Identify",
      description: "A requirement context is proposed for the registry.",
    },
    {
      number: "2",
      title: "Source",
      description: "An authority is identified.",
      emphasis:
        " Unknown stays unknown rather than being filled in.",
    },
    {
      number: "3",
      title: "Specialist review",
      description: "Qualified interpretation where required.",
      emphasis: " Not performed by the page.",
    },
    {
      number: "4",
      title: "Publication review",
      description: "A separate gate confirming the public wording is supportable.",
    },
    {
      number: "5",
      title: "Monitor",
      description: "Re-verify currentness and supersede when replaced.",
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
                Recommended review &amp; readiness workflow
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
              Five steps, and the publication gate is a separate role.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              A recommended governance pattern.{" "}
              <span className="font-bold">
                No frequency, deadline or service level is specified.
              </span>
            </p>
          </div>

          {/* WORKFLOW STEPS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3
              pt-1

              sm:grid-cols-2

              md:grid-cols-3

              lg:grid-cols-5
            "
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className="
                  flex
                  min-h-[190px]
                  w-full
                  flex-col
                  items-start
                  gap-5
                  rounded-[10px]
                  border
                  border-[#e1e5ea]
                  bg-white
                  px-3.5
                  py-3.5
                "
              >
                {/* STEP NUMBER */}
                <div
                  className="
                    flex
                    size-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-blue-600
                    bg-[#f2f3f5]
                  "
                >
                  <span
                    className="
                      text-center
                      text-xs
                      font-bold
                      leading-4
                      text-[#526b95]
                    "
                  >
                    {step.number}
                  </span>
                </div>

                {/* TITLE */}
                <div className="w-full pt-px">
                  <h3
                    className="
                      !m-0
                      w-full
                      text-xs
                      font-bold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {step.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="w-full">
                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-4
                      text-[#5d7192]
                    "
                  >
                    {step.description}
                    {step.emphasis && (
                      <span className="font-bold">{step.emphasis}</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}