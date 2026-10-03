export default function RecommendedOperatingJourney() {
  const steps = [
    {
      title: "1 · Name the rule",
      content: (
        <>
          Write down the policy that is currently applied by convention.{" "}
          <strong>Most control problems become visible at this step</strong>,
          because two people write down different rules.
        </>
      ),
    },
    {
      title: "2 · Assign the owner",
      content: (
        <>
          A named accountable responsibility.{" "}
          <strong>Without this the rule cannot be changed deliberately</strong>{" "}
          — only drifted.
        </>
      ),
    },
    {
      title: "3 · Define material change",
      content: (
        <>
          What level of change requires review before it takes effect, and who
          performs it.
        </>
      ),
    },
    {
      title: "4 · Give exceptions a path",
      content: (
        <>
          Reason, owner, scope and a resolution target.{" "}
          <strong>
            An exception with no resolution path is a permanent change nobody
            approved.
          </strong>
        </>
      ),
    },
    {
      title: "5 · Attach the evidence",
      content: (
        <>
          The context that explains the decision later. Routes to{" "}
          <strong>Strengthen Auditability</strong> for the deeper model.
        </>
      ),
    },
    {
      title: "6 · Review on a cadence",
      content: (
        <>
          Periodically confirm the rule still fits.{" "}
          <strong>No frequency is prescribed here</strong> — that depends on
          your operation.
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-white">
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
                Recommended operating journey
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
              From an informal rule to a governed
             
              one.
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
              A sequence, not a maturity ladder — there is no grade attached
              to where you currently are.
            </p>
          </div>

          {/* JOURNEY */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-3
              pt-5
            "
          >
            {steps.map((step) => (
              <div
                key={step.title}
                className="
                  flex
                  w-full
                  flex-col
                  items-start
                  gap-1.5
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* STEP TITLE */}
                <h3
                  className="
                    !m-0
                    w-full
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {step.title}
                </h3>

                {/* STEP DESCRIPTION */}
                <p
                  className="
                    !m-0
                    w-full
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {step.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}