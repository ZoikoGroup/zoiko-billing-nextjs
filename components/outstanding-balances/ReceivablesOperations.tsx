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
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          py-10

          sm:px-8
          sm:py-12

          md:px-10
          md:py-16

          lg:px-14
          lg:py-20

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
              border-slate-200
              bg-[#f4f5f7]
              px-5
              py-7
              shadow-[0_8px_24px_rgba(15,23,42,0.05)]

              sm:px-6
              sm:py-8
            "
          >
            {/* Label */}
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-5 shrink-0 bg-[#6b7d91] opacity-60" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  leading-4
                  tracking-[0.18em]
                  text-[#62758b]

                  sm:text-xs
                "
              >
                Reminder queue
              </span>
            </div>

            {/* Heading */}
            <h3
              className="
                !m-0
                text-lg
                font-bold
                leading-7
                text-[#111827]
              "
            >
              Scheduled to go out today
            </h3>

            {/* Description */}
            <p
              className="
                mt-2
                max-w-[560px]
                text-sm
                font-normal
                leading-5
                text-[#61738a]
              "
            >
              Nothing sends without an owner&apos;s approval. Each reminder
              cites the invoice it refers to.
            </p>

            {/* Queue */}
            <div className="mt-4">
              {reminderQueue.map((item) => (
                <div
                  key={item.name}
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    border-t
                    border-slate-200
                    py-3
                  "
                >
                  {/* Name + Detail */}
                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        truncate
                        text-sm
                        font-semibold
                        leading-6
                        text-[#111827]
                      "
                    >
                      {item.name}
                    </p>

                    <p
                      className="
                        text-xs
                        font-normal
                        leading-5
                        text-[#6f8095]
                      "
                    >
                      {item.detail}
                    </p>
                  </div>

                  {/* Amount */}
                  <p
                    className="
                      shrink-0
                      text-sm
                      font-bold
                      leading-6
                      text-[#111827]

                      sm:text-base
                    "
                  >
                    {item.amount}
                  </p>
                </div>
              ))}
            </div>

            {/* Link */}
            <Link
              href="/receivables"
              className="
                mt-1
                inline-flex
                text-sm
                font-semibold
                leading-6
                text-blue-600
                transition
                hover:text-blue-700
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
              border-slate-200
              bg-[#f4f5f7]
              px-5
              py-7
              shadow-[0_8px_24px_rgba(15,23,42,0.05)]

              sm:px-6
              sm:py-8
            "
          >
            {/* Label */}
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-5 shrink-0 bg-[#6b7d91] opacity-60" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  leading-4
                  tracking-[0.18em]
                  text-[#526f91]

                  sm:text-xs
                "
              >
                Disputes &amp; collections
              </span>
            </div>

            {/* Heading */}
            <h3
              className="
                !m-0
                text-lg
                font-bold
                leading-7
                text-[#111827]
              "
            >
              How a balance moves out of dispute
            </h3>

            {/* Description */}
            <p
              className="
                mt-2
                max-w-[570px]
                text-sm
                font-normal
                leading-5
                text-[#61738a]
              "
            >
              A disputed amount stays on the balance and out of the reminder
              queue until it is resolved on the record.
            </p>

            {/* Steps */}
            <div className="mt-4">
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
                        ? "border-t border-slate-200"
                        : ""
                    }
                  `}
                >
                  {/* Number */}
                  <div
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-white
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-bold
                        leading-5
                        text-[#25334c]
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        text-sm
                        font-semibold
                        leading-6
                        text-[#111827]
                      "
                    >
                      {step.title}
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-xs
                        font-normal
                        leading-5
                        text-[#61738a]
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