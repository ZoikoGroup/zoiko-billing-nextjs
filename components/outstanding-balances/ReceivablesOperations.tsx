import Link from "next/link";

const reminderQueue = [
  {
    name: "Northgate Communications",
    detail: "Second notice · 14:00",
    amount: "£64,120",
  },
  {
    name: "Larkspur Media Group",
    detail: "First notice · 14:00",
    amount: "£21,450",
  },
  {
    name: "Halden Freight",
    detail: "Final notice · 16:30",
    amount: "£88,900",
  },
  {
    name: "Verity Health Trust",
    detail: "Statement · 17:00",
    amount: "£12,380",
  },
];

const disputeSteps = [
  {
    number: "1",
    title: "Raised against a line",
    description:
      "The customer contests a charge; the invoice stays open, the line is flagged.",
  },
  {
    number: "2",
    title: "Held from reminders",
    description:
      "Automated notices pause for the disputed amount only. The rest still ages.",
  },
  {
    number: "3",
    title: "Resolved or credited",
    description:
      "Either the charge stands and ages from the original due date, or a credit note closes it.",
  },
];

export default function ReceivablesOperations() {
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
            grid
            w-full
            max-w-[1240px]
            grid-cols-1
            gap-5

            lg:grid-cols-2
            lg:gap-6
          "
        >
          {/* REMINDER QUEUE */}
          <div
            className="
              w-full
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              p-5
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              sm:p-6

              md:p-7
            "
          >
            {/* EYEBROW */}
            <div className="mb-3 flex items-center gap-3">
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
                Reminder queue
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h3
              className="
                !m-0
                text-[20px]
                font-extrabold
                leading-[1.25]
                tracking-[-0.025em]
                text-[#091127]

                sm:text-[22px]

                md:text-[24px]
              "
            >
              Scheduled to go out today
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                mt-2
                w-full
                max-w-[560px]
                text-[14px]
                font-normal
                leading-6
                text-[#5d7192]

                sm:text-[15px]
                sm:leading-7
              "
            >
              Nothing sends without an owner&apos;s approval. Each reminder
              cites the invoice it refers to.
            </p>

            {/* QUEUE */}
            <div className="mt-5">
              {reminderQueue.map((item, index) => (
                <div
                  key={item.name}
                  className={`
                    flex
                    items-center
                    justify-between
                    gap-4
                    py-3.5

                    ${
                      index !== 0
                        ? "border-t border-[#edf0f4]"
                        : "border-t border-[#edf0f4]"
                    }
                  `}
                >
                  {/* NAME + DETAIL */}
                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        !m-0
                        truncate
                        text-sm
                        font-semibold
                        leading-6
                        text-[#091127]
                      "
                    >
                      {item.name}
                    </p>

                    <p
                      className="
                        !m-0
                        text-xs
                        font-normal
                        leading-5
                        text-[#5d7192]
                      "
                    >
                      {item.detail}
                    </p>
                  </div>

                  {/* AMOUNT */}
                  <p
                    className="
                      !m-0
                      shrink-0
                      text-right
                      text-sm
                      font-semibold
                      leading-6
                      text-[#091127]

                      sm:text-base
                    "
                  >
                    {item.amount}
                  </p>
                </div>
              ))}
            </div>

            {/* LINK */}
            <Link
              href="/receivables"
              className="
                mt-2
                inline-flex
                text-sm
                font-semibold
                leading-6
                !text-[#2563eb]
                no-underline
                transition
                hover:!text-[#1d4ed8]
              "
            >
              Review the queue →
            </Link>
          </div>

          {/* DISPUTES & COLLECTIONS */}
          <div
            className="
              w-full
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              p-5
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              sm:p-6

              md:p-7
            "
          >
            {/* EYEBROW */}
            <div className="mb-3 flex items-center gap-3">
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
                Disputes &amp; collections
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h3
              className="
                !m-0
                text-[20px]
                font-extrabold
                leading-[1.25]
                tracking-[-0.025em]
                text-[#091127]

                sm:text-[22px]

                md:text-[24px]
              "
            >
              How a balance moves out of dispute
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                mt-2
                w-full
                max-w-[570px]
                text-[14px]
                font-normal
                leading-6
                text-[#5d7192]

                sm:text-[15px]
                sm:leading-7
              "
            >
              A disputed amount stays on the balance and out of the reminder
              queue until it is resolved on the record.
            </p>

            {/* STEPS */}
            <div className="mt-5">
              {disputeSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`
                    flex
                    items-start
                    gap-3.5
                    py-3.5

                    ${
                      index !== 0
                        ? "border-t border-[#edf0f4]"
                        : "border-t border-[#edf0f4]"
                    }
                  `}
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
                      rounded-lg
                      border
                      border-[#dfe5ee]
                      bg-[#f7f8fa]
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-bold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-semibold
                        leading-6
                        text-[#091127]
                      "
                    >
                      {step.title}
                    </p>

                    <p
                      className="
                        !m-0
                        mt-0.5
                        text-xs
                        font-normal
                        leading-5
                        text-[#5d7192]

                        sm:text-sm
                        sm:leading-6
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
      </div>
    </section>
  );
}