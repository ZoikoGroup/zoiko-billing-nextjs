export default function StartByGoal() {
  const goals = [
    {
      title: "Evaluate Zoiko Billing",
      description:
        "Understand product fit, invoice-to-payment scope, global and integration options, pricing, customer evidence, and trust.",
      action: "Explore evaluation resources",
    },
    {
      title: "Improve billing operations",
      description:
        "Find guidance for invoicing, receivables, payment and reconciliation, outstanding balances, and reporting.",
      action: "Browse operational topics",
    },
    {
      title: "Implement or integrate",
      description:
        "Route to implementation guidance, the Integrations Directory, Developers, API documentation, sandbox, SDKs and examples, and Build an Integration.",
      action: "Go to Integrations",
    },
    {
      title: "Get help or stay current",
      description:
        "Route to Help Center, Documentation, Product Updates, System Status, and Contact Support.",
      action: "See authoritative handoffs",
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
                Start by goal
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
              Four starting points, chosen by you.
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
              Goal cards filter and anchor the index. They never infer your
              role or account state, and every selection is explicit and
              reversible.
            </p>
          </div>

          {/* GOAL CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-5
              pt-1

              md:grid-cols-2
            "
          >
            {goals.map((goal) => (
              <div
                key={goal.title}
                className="
                  flex
                  min-h-[190px]
                  w-full
                  flex-col
                  items-start
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* TITLE */}
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
                  {goal.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-1.5
                    w-full
                    pb-2
                    text-sm
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {goal.description}
                </p>

                {/* ACTION */}
                <button
                  type="button"
                  className="
                    mt-auto
                    min-h-9
                    rounded-full
                    border
                    border-[#dfe5ee]
                    bg-white
                    px-4
                    py-1.5
                    text-center
                    text-sm
                    font-semibold
                    leading-5
                    text-[#091127]
                    transition-colors
                    hover:bg-[#f7f8fa]
                  "
                >
                  {goal.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}