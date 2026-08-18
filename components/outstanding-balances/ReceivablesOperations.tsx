"use client";

import React from "react";

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
    <section
      className="
        w-full
        bg-white
        px-4
        py-8
        dark:bg-[#0B1728]
        sm:px-6
        lg:px-10
        xl:px-14
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
        "
      >
        {/* =========================================================
            REMINDER QUEUE
        ========================================================= */}
        <div
          className="
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-[#f3f4f6]
            px-5
            py-7
            shadow-[0px_8px_24px_rgba(15,23,42,0.05)]

            dark:border-white/10
            dark:bg-[#111F30]
            dark:shadow-[0px_8px_24px_rgba(0,0,0,0.18)]

            sm:px-6
            sm:py-8
          "
        >
          {/* Label */}
          <div className="mb-3 flex items-center gap-3">
            <div
              className="
                h-px
                w-5
                bg-[#6b7d91]
                opacity-60
                dark:bg-slate-400
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                leading-4
                tracking-[0.18em]
                text-[#62758b]
                dark:text-[#8FA4BA]
                sm:text-xs
              "
            >
              Reminder queue
            </span>
          </div>

          {/* Heading */}
          <h3
            className="
              text-lg
              font-bold
              leading-7
              text-[#111827]
              dark:text-white
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
              leading-5
              text-[#61738a]
              dark:text-white/60
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
                  dark:border-white/10
                "
              >
                {/* Name */}
                <div className="min-w-0 flex-1">
                  <p
                    className="
                      truncate
                      text-sm
                      font-semibold
                      leading-6
                      text-[#111827]
                      dark:text-white
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
                      dark:text-white/45
                    "
                  >
                    {item.detail}
                  </p>
                </div>

                {/* Amount */}
                <div className="shrink-0">
                  <p
                    className="
                      text-sm
                      font-bold
                      leading-6
                      text-[#111827]
                      dark:text-white
                      sm:text-base
                    "
                  >
                    {item.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Link */}
          <button
            type="button"
            className="
              mt-1
              text-sm
              font-semibold
              leading-6
              text-blue-600
              transition
              hover:text-blue-700
              dark:text-[#5AA9FF]
              dark:hover:text-[#7BBCFF]
            "
          >
            Review the queue →
          </button>
        </div>

        {/* =========================================================
            DISPUTES & COLLECTIONS
        ========================================================= */}
        <div
          className="
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-[#f4f5f7]
            px-5
            py-7
            shadow-[0px_8px_24px_rgba(15,23,42,0.05)]

            dark:border-white/10
            dark:bg-[#111F30]
            dark:shadow-[0px_8px_24px_rgba(0,0,0,0.18)]

            sm:px-6
            sm:py-8
          "
        >
          {/* Label */}
          <div className="mb-3 flex items-center gap-3">
            <div
              className="
                h-px
                w-5
                bg-[#6b7d91]
                opacity-60
                dark:bg-slate-400
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                leading-4
                tracking-[0.18em]
                text-[#526f91]
                dark:text-[#7FA8D0]
                sm:text-xs
              "
            >
              Disputes &amp; collections
            </span>
          </div>

          {/* Heading */}
          <h3
            className="
              text-lg
              font-bold
              leading-7
              text-[#111827]
              dark:text-white
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
              leading-5
              text-[#61738a]
              dark:text-white/60
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
                      ? "border-t border-slate-200 dark:border-white/10"
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
                    dark:bg-white/10
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      leading-5
                      text-[#25334c]
                      dark:text-white
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
                      dark:text-white
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
                      dark:text-white/55
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