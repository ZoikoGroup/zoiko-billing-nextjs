export default function StartByTask() {
  const taskCategories = [
    {
      title: "Plan billing operations",
      description:
        "Planning aids for roles, process ownership, billing data readiness, implementation, rollout and governance — only when actual templates are published.",
    },
    {
      title: "Prepare billing-document workflows",
      description: (
        <>
          Checklists and worksheets for invoice and credit-note preparation,
          review, delivery and correction concepts —{" "}
          <strong>
            without implying the template generates legal invoices
          </strong>
          .
        </>
      ),
    },
    {
      title: "Review receivables",
      description:
        "Reusable review structures for AR queues, aging, follow-up, disputes, exceptions and ownership.",
    },
    {
      title: "Reconcile payments",
      description: (
        <>
          Worksheets that help structure payment matching, allocation review,
          exceptions and unknown outcomes —{" "}
          <strong>without replacing authoritative system records</strong>.
        </>
      ),
    },
    {
      title: "Review balances and reporting",
      description:
        "Operational review aids for outstanding balances, metrics, reporting definitions, close preparation and management discussion.",
    },
    {
      title: "Implement and integrate",
      description:
        "Planning aids for readiness, integration scope, test and launch review, change management and handover. Technical implementation remains in Developers.",
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
                Start by task
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
              Six task categories, not an inventory promise.
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
              These cards define the permitted categories. The production
              interface renders only registry-backed templates that have
              passed every publication gate.
            </p>
          </div>

          {/* TASK CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              md:grid-cols-2
              md:gap-5
            "
          >
            {taskCategories.map((task) => (
              <div
                key={task.title}
                className="
                  flex
                  min-h-[170px]
                  w-full
                  flex-col
                  items-start
                  justify-start
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                <h3
                  className="
                    !m-0
                    w-full
                    text-base
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {task.title}
                </h3>

                <div
                  className="
                    mt-2
                    w-full
                    text-sm
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {task.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}