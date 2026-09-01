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
          xl:py-24
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1220px]
            flex-col
            items-start
            gap-9
            px-0

            xl:px-12
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-8

              lg:flex-row
              lg:items-end
              lg:gap-16
            "
          >
            {/* LEFT */}
            <div
              className="
                flex
                w-full
                flex-1
                flex-col
                items-start
                gap-5
                pt-2.5
                pb-3

                lg:pb-6
              "
            >
              {/* EYEBROW */}
              <div className="flex h-4 items-center">
                <span
                  className="
                    mr-2.5
                    h-0.5
                    w-5
                    shrink-0
                    rounded-sm
                    bg-gradient-to-r
                    from-color-cyan-42
                    to-color-azure-51
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    leading-4
                    tracking-[0.12em]
                    text-color-azure-44

                    sm:text-xs
                    sm:tracking-wider
                  "
                >
                  Due-run lifecycle
                </span>
              </div>

              {/* HEADING */}
              <h2
                className="
                  !m-0
                  w-full
                  max-w-[638px]
                  !text-[32px]
                  !font-medium
                  !leading-[1.15]
                  !tracking-[-0.025em]
                  !text-sky-950

                  sm:!text-[40px]

                  md:!text-[44px]

                  lg:!text-[48px]
                  lg:!leading-[53.82px]
                "
              >
                Treat every due
                <br className="hidden sm:block" />
                occurrence as a
                <br className="hidden sm:block" />
                governed trigger.
              </h2>
            </div>

            {/* RIGHT */}
            <div
              className="
                w-full
                flex-1

                lg:max-w-[528px]
              "
            >
              <p
                className="
                  !m-0
                  w-full
                  text-sm
                  font-normal
                  leading-7
                  text-color-azure-35

                  sm:text-base
                  sm:leading-8
                "
              >
                Reaching the due time starts an evaluation, not an outcome. A
                due occurrence can legitimately end as skipped, blocked,
                failed or review-required.
              </p>
            </div>
          </div>

          {/* LIFECYCLE STEPS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-3

              xl:grid-cols-6
            "
          >
            {lifecycleSteps.map((step) => (
              <div
                key={step.number}
                className="
                  relative
                  flex
                  min-h-[240px]
                  w-full
                  flex-col
                  items-start
                  overflow-hidden
                  rounded-2xl
                  border
                  border-black/10
                  bg-white
                  p-[18px]
                "
              >
                {/* NUMBER */}
                <div
                  className="
                    flex
                    w-7
                    items-center
                    justify-center
                    rounded-lg
                    bg-gradient-to-br
                    from-color-cyan-42
                    to-color-azure-51
                    px-0
                    py-1.5
                  "
                >
                  <span
                    className="
                      text-center
                      font-['IBM_Plex_Mono']
                      text-[9.9px]
                      font-semibold
                      leading-4
                      text-color-white-solid
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
                      text-sm
                      font-semibold
                      leading-5
                      text-sky-950
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      !m-0
                      mt-4
                      text-xs
                      font-normal
                      leading-5
                      text-color-azure-35

                      sm:text-sm
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
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
                border-zinc-200
                object-cover
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
              border-color-azure-51
              bg-color-grey-97-2
              px-6
              py-6

              sm:px-7
              sm:py-7
            "
          >
            {/* LABEL */}
            <div className="flex w-full flex-col items-start">
              <span
                className="
                  font-['IBM_Plex_Mono']
                  text-[9.9px]
                  font-normal
                  uppercase
                  leading-4
                  tracking-wider
                  text-color-azure-44
                "
              >
                Outcome boundary
              </span>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[761px]
                text-sm
                font-normal
                leading-7
                text-sky-950

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