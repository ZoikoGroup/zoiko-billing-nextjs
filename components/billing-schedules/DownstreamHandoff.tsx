"use client";

import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Prepare the context",
    description:
      "Charge or document context is prepared from the approved data current at that moment.",
  },
  {
    number: "02",
    title: "Create a draft",
    description:
      "A draft invoice or credit note is created where that is supported.",
  },
  {
    number: "03",
    title: "Route validation",
    description:
      "Document validation and any required approval run on the draft.",
  },
  {
    number: "04",
    title: "Issue only if controls pass",
    description:
      "Issue happens only after the document controls succeed, never because a schedule fired.",
  },
  {
    number: "05",
    title: "Render and deliver",
    description:
      "Delivery is handled by Documents & Delivery, with its own separate states.",
  },
  {
    number: "06",
    title: "Record failure and next action",
    description:
      "Any failure is recorded with the next operational action and an owner.",
  },
];

const followUpItems = [
  {
    title: "Due-date and grace reminders",
    description:
      "Reminder timing relative to a due date or grace period, where supported.",
  },
  {
    title: "Owner assignment and review",
    description:
      "Follow-up work is assigned with review timing attached.",
  },
  {
    title: "Escalation preparation",
    description:
      "Escalation or customer-contact material is prepared for a decision.",
  },
  {
    title: "Pause for dispute or hold",
    description:
      "Timing pauses when a dispute, hold or payment update is recorded.",
  },
  {
    title: "Re-evaluate before acting",
    description:
      "The current balance is re-checked before any follow-up proceeds.",
  },
];

export default function DownstreamHandoff() {
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
                Downstream handoff
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
              Where the schedule stops and the document begins.
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
              Becoming eligible starts a document process. Schedule state,
              invoice state and delivery state stay three separate facts.
            </p>
          </div>

          {/* STEPS */}
          <div
            className="
              mt-10
              grid
              w-full
              grid-cols-1
              gap-3

              sm:mt-12
              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className="
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-6
                  py-6
                  shadow-[0_4px_14px_rgba(15,23,42,0.035)]
                "
              >
                {/* NUMBER */}
                <div
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#091127]
                  "
                >
                  <span className="text-[10px] font-semibold leading-4 text-white">
                    {step.number}
                  </span>
                </div>

                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    pt-3
                    text-base
                    font-semibold
                    leading-5
                    text-[#091127]
                  "
                >
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-2
                    text-sm
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* HANDOFF BOUNDARY */}
          <div
            className="
              mt-10
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              px-6
              py-7
              shadow-[0_4px_14px_rgba(15,23,42,0.035)]

              sm:mt-12
              sm:px-7
              sm:py-8
            "
          >
            <div
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-[#7890b2]
              "
            >
              Handoff boundary
            </div>

            <p
              className="
                !m-0
                mt-2
                max-w-[900px]
                text-[15px]
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              The schedule does not guarantee document issue or delivery.
              Schedule, invoice and delivery states are never merged into a
              single status.
            </p>
          </div>

          {/* REMINDER SECTION */}
          <div
            className="
              mt-14
              w-full
              border-t
              border-[#dfe5ee]
              pt-10

              sm:mt-16
              sm:pt-12
            "
          >
            <div
              className="
                mx-auto
                flex
                w-full
                max-w-[700px]
                flex-col
                items-center
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
                  Reminder and follow-up timing
                </span>

                <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
              </div>

              <h2
                className="
                  !m-0
                  mt-3
                  w-full
                  max-w-[700px]
                  !text-[28px]
                  !font-extrabold
                  !leading-[1.2]
                  !tracking-[-0.03em]
                  !text-[#091127]

                  sm:!text-[32px]

                  md:!text-[34px]
                "
              >
                Reminder and follow-up timing
              </h2>

              <p
                className="
                  !m-0
                  mt-3
                  w-full
                  max-w-[687px]
                  text-[15px]
                  leading-7
                  text-[#5d7192]

                  sm:text-base
                "
              >
                Schedules also govern when receivables follow-up becomes
                eligible — not whether a debt is valid or what a customer has
                done.
              </p>
            </div>
          </div>

          {/* FOLLOW-UP CONTENT */}
          <div
            className="
              mt-10
              grid
              w-full
              grid-cols-1
              gap-8

              lg:grid-cols-2
              lg:gap-12
            "
          >
            {/* LEFT — FOLLOW-UP ITEMS */}
            <div
              className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <div
                className="
                  border-b
                  border-[#dfe5ee]
                  bg-[#fafbfc]
                  px-5
                  py-4
                "
              >
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
                  Follow-up actions
                </span>
              </div>

              <div className="flex flex-col">
                {followUpItems.map((item, index) => (
                  <div
                    key={item.title}
                    className={`
                      p-5
                      sm:px-6
                      sm:py-5
                      ${
                        index !== followUpItems.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    <h3
                      className="
                        !m-0
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex w-full flex-col gap-8">
              {/* FOLLOW-UP BOUNDARY */}
              <div
                className="
                  rounded-r-2xl
                  border-l-[3px]
                  border-[#7890b2]
                  bg-white
                  px-6
                  py-7
                  shadow-[0_4px_14px_rgba(15,23,42,0.035)]

                  sm:px-7
                  sm:py-8
                "
              >
                <div
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.12em]
                    text-[#7890b2]
                  "
                >
                  Follow-up boundary
                </div>

                <p
                  className="
                    !m-0
                    mt-2
                    text-[15px]
                    leading-7
                    text-[#091127]

                    sm:text-base
                  "
                >
                  A reminder schedule does not prove debt validity or customer
                  misconduct. External communication requires a configured
                  recipient, content, permission and delivery controls before
                  anything is sent.
                </p>
              </div>

              {/* CTA */}
              <div
                className="
                  flex
                  flex-col
                  items-start
                  gap-3

                  sm:flex-row
                  sm:flex-wrap
                  sm:items-center
                "
              >
                <Link
                  href="/documents-and-delivery"
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    rounded-lg
                    !bg-[#091127]
                    px-5
                    py-2.5
                    text-base
                    font-normal
                    leading-6
                    !text-white
                    no-underline
                    transition-opacity
                    duration-200
                    hover:opacity-90
                    focus:outline-none
                  "
                >
                  Explore Documents &amp; Delivery
                </Link>

                <Link
                  href="/accounts-receivable"
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    gap-2
                    px-0
                    py-2.5
                    text-base
                    font-normal
                    leading-6
                    !text-[#5d7192]
                    no-underline
                    transition-colors
                    hover:!text-[#091127]
                  "
                >
                  Accounts Receivable

                  <span
                    aria-hidden="true"
                    className="text-base font-bold"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}