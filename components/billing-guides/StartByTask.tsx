const taskCards = [
  {
    title: "Set up billing foundations",
    description:
      "Customer records, billing identity, terms, owners, roles, approvals and governance. Product specifics route to Documentation.",
  },
  {
    title: "Create and manage billing documents",
    description:
      "Invoices, credit notes, charges, adjustments, schedules, documents, delivery, and correction and evidence concepts.",
  },
  {
    title: "Manage receivables",
    description:
      "Open receivables, reminders, disputes, ownership, aging, collections and exception visibility.",
  },
  {
    title: "Record, allocate and reconcile payments",
    description:
      "Payment record concepts, allocation, reconciliation, unknown outcomes, exceptions and evidence.",
  },
  {
    title: "Understand balances and reporting",
    description:
      "Outstanding balances, aging, metrics, reporting definitions, drill-through, exports and management questions.",
  },
  {
    title: "Integrate and implement",
    description:
      "Integration context for payment, accounting, ERP, CRM and banking systems, Developers pathways, implementation readiness and change management.",
  },
];

export default function StartByTask() {
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
              Six jobs, each routing product specifics elsewhere.
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
              A task card explains the shape of the work; the authoritative
              destination owns how the product actually behaves.
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
            {taskCards.map((card) => (
              <div
                key={card.title}
                className="
                  flex
                  min-h-[150px]
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

                  sm:min-h-[140px]
                "
              >
                <h3
                  className="
                    !m-0
                    text-base
                    font-bold
                    leading-6
                    tracking-[-0.01em]
                    text-[#091127]
                  "
                >
                  {card.title}
                </h3>

                <p
                  className="
                    !m-0
                    mt-1.5
                    text-sm
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}