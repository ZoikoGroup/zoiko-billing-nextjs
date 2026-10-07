export default function ReviewWorkflow() {
  const steps = [
    {
      number: "1",
      title: "Identify",
      description: (
        <>
          Select a change, exception or
          <br className="hidden lg:block" />
          decision requiring explanation.
        </>
      ),
    },
    {
      number: "2",
      title: "Inspect",
      description: (
        <>
          Review attribution, context,
          <br className="hidden lg:block" />
          reason and evidence references.
        </>
      ),
    },
    {
      number: "3",
      title: "Compare",
      description: (
        <>
          Examine related prior or later
          <br className="hidden lg:block" />
          state and connected events.
        </>
      ),
    },
    {
      number: "4",
      title: "Explain",
      description: (
        <>
          Build a human-readable
          <br className="hidden lg:block" />
          narrative of what happened
          <br className="hidden lg:block" />
          and why.
        </>
      ),
    },
    {
      number: "5",
      title: "Resolve",
      description: (
        <>
          If information is incomplete,{" "}
          <strong>
            route to correction or evidence request rather than infer
            certainty
          </strong>
          .
        </>
      ),
    },
    {
      number: "6",
      title: "Export / request",
      description: (
        <>
          Where a governed source supports export, expose it.{" "}
          <strong>Otherwise a handoff only.</strong>
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
                Review workflow
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
              Six steps, and step five is where
              <br className="hidden sm:block" />
              reviewers usually go wrong.
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
              Context is preserved throughout —{" "}
              <strong className="font-bold">
                filters do not reset when a detail drawer opens or closes
              </strong>
              .
            </p>
          </div>

          {/* STEPS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3
              pt-2

              sm:grid-cols-2

              lg:grid-cols-3

              xl:grid-cols-6
            "
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className="
                  flex
                  min-h-[235px]
                  w-full
                  flex-col
                  items-start
                  rounded-[10px]
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-3.5
                  pt-3.5
                  pb-6
                "
              >
                {/* NUMBER */}
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
                    bg-[#f1f4f8]
                  "
                >
                  <span
                    className="
                      text-center
                      text-xs
                      font-bold
                      leading-4
                      text-[#315f9e]
                    "
                  >
                    {step.number}
                  </span>
                </div>

                {/* TITLE */}
                <div className="mt-5 w-full">
                  <h3
                    className="
                      !m-0
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
                <div className="mt-1 w-full">
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