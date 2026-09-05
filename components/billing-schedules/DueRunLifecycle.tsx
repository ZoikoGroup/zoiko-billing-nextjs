export default function DueRunLifecycle() {
  const lifecycleSteps = [
    {
      number: "01",
      title: "Evaluate time",
      description:
        "The scheduler compares current time against the active schedule version.",
    },
    {
      number: "02",
      title: "Create identity",
      description:
        "An idempotent occurrence identity prevents the same due instance running twice.",
    },
    {
      number: "03",
      title: "Check eligibility",
      description:
        "Customer, entity, source, amount and policy context are all validated.",
    },
    {
      number: "04",
      title: "Start review",
      description:
        "Any required approval or workflow begins before a downstream action.",
    },
    {
      number: "05",
      title: "Attempt action",
      description:
        "The permitted downstream action is attempted within its scope.",
    },
    {
      number: "06",
      title: "Record result",
      description:
        "Result, exception, timestamps and the next occurrence are all recorded.",
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
              max-w-[700px]
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
                Due-run lifecycle
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[700px]
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
              Treat every due occurrence as a governed trigger.
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
              Reaching the due time starts an evaluation, not an outcome. A
              due occurrence can legitimately end as skipped, blocked, failed
              or review-required.
            </p>
          </div>

          {/* LIFECYCLE STEPS */}
          <div className="w-full">
            <div
              className="
                grid
                w-full
                grid-cols-1
                gap-4

                sm:grid-cols-2

                lg:grid-cols-3
              "
            >
              {lifecycleSteps.map((step) => (
                <div
                  key={step.number}
                  className="
                    flex
                    min-h-[220px]
                    w-full
                    flex-col
                    items-start
                    rounded-2xl
                    border
                    border-[#dfe5ee]
                    bg-white
                    p-5
                    shadow-[0_1px_2px_rgba(15,23,42,0.02)]
                  "
                >
                  {/* NUMBER */}
                  <div
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-md
                      border
                      border-[#dfe5ee]
                      bg-[#fafbfc]
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-bold
                        leading-4
                        text-[#7890b2]
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="mt-5 flex w-full flex-col items-start">
                    <h3
                      className="
                        !m-0
                        !text-base
                        !font-semibold
                        !leading-6
                        !text-[#091127]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        !m-0
                        mt-2
                        text-sm
                        font-normal
                        leading-6
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

          {/* LIFECYCLE IMAGE */}
          <div className="w-full">
            <img
              src="/images/billing-schedules/due-run-lifecycle.png"
              alt="Due-run lifecycle showing the governed schedule trigger flow"
              className="
                h-auto
                w-full
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                object-cover
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            />
          </div>

          {/* OUTCOME BOUNDARY */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-2
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              px-5
              py-6
              shadow-[0_1px_2px_rgba(15,23,42,0.02)]

              sm:px-6
              sm:py-7

              lg:px-7
              lg:py-7
            "
          >
            {/* LABEL */}
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-[#7890b2]
              "
            >
              Outcome boundary
            </span>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[780px]
                text-[15px]
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              A succeeded run means the configured schedule-triggered process
              completed. It is not proof that revenue was booked, an invoice
              was issued or a payment was collected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}