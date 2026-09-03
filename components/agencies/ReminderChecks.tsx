const checks = [
  {
    title: "Invoice issued",
    description:
      "Authoritative and current — issued 01 Aug with approval evidence",
    status: "Pass",
    passed: true,
  },
  {
    title: "Delivery confirmed",
    description: "Delivered 01 Aug on the approved route",
    status: "Pass",
    passed: true,
  },
  {
    title: "Outstanding balance current",
    description:
      "Balance derived from the authoritative record, not a cached figure",
    status: "Pass",
    passed: true,
  },
  {
    title: "Payment status clear",
    description:
      "No posted or processing payment that would make the message inaccurate",
    status: "Pass",
    passed: true,
  },
  {
    title: "Dispute or hold",
    description:
      "Client dispute open on two lines since 09 Aug — configured policy blocks follow-up",
    status: "Blocked",
    passed: false,
  },
  {
    title: "Pending correction",
    description:
      "A credit note is under review that would change the amount owed",
    status: "Blocked",
    passed: false,
  },
  {
    title: "Client communication policy",
    description:
      "Approved cadence and channel; last contact 12 Aug",
    status: "Pass",
    passed: true,
  },
  {
    title: "Ownership",
    description:
      "Current AR owner assigned; account lead notified",
    status: "Pass",
    passed: true,
  },
  {
    title: "Audit",
    description:
      "Reason, policy version and outcome recorded where the product supports it",
    status: "Pass",
    passed: true,
  },
];

export default function ReminderChecks() {
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
            items-start
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
              max-w-[900px]
              flex-col
              items-start
              gap-3
            "
          >
            {/* EYEBROW */}
            <div className="flex h-4 items-center gap-3">
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
                Balances, reminders, disputes &amp; payments
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[900px]
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
              Nine checks run before a client reminder goes out.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[686px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Chasing a client for an invoice that was never delivered, is
              under dispute, or has already been paid damages the relationship
              your account team maintains. Eligibility is evaluated against
              current state at send time.
            </p>
          </div>

          {/* REMINDER SAFETY CONTRACT */}
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
            {/* HEADER */}
            <div
              className="
                border-b
                border-[#dfe5ee]
                bg-[#fafbfc]
                px-5
                py-4

                sm:px-6
              "
            >
              <h3
                className="
                  !m-0
                  text-base
                  font-bold
                  leading-7
                  text-[#091127]
                "
              >
                Reminder safety contract — synthetic invoice INV-6455, client
                CLI-266
              </h3>

              <p
                className="
                  !m-0
                  mt-1
                  text-xs
                  font-normal
                  leading-5
                  text-[#7890b2]
                "
              >
                Every check must pass. A single block prevents the reminder
                and names the owner who can clear it.
              </p>
            </div>

            {/* CHECKS */}
            <div className="px-5 py-1.5 sm:px-6">
              {checks.map((check, index) => (
                <div
                  key={check.title}
                  className={`
                    flex
                    items-start
                    gap-3
                    py-3

                    ${
                      index !== 0
                        ? "border-t border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* CHECK ICON */}
                  <div className="flex w-5 shrink-0 justify-center pt-0.5">
                    <span
                      className={`
                        text-sm
                        font-extrabold
                        leading-5
                        ${
                          check.passed
                            ? "text-[#4d9960]"
                            : "text-[#c85b5b]"
                        }
                      `}
                    >
                      {check.passed ? "✓" : "✕"}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        !m-0
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {check.title}
                    </p>

                    <p
                      className="
                        !m-0
                        mt-0.5
                        text-xs
                        font-normal
                        leading-5
                        text-[#7890b2]
                      "
                    >
                      {check.description}
                    </p>
                  </div>

                  {/* STATUS */}
                  <span
                    className={`
                      shrink-0
                      rounded-md
                      border
                      px-2.5
                      py-0.5
                      text-xs
                      font-semibold
                      leading-4

                      ${
                        check.passed
                          ? "border-[#cfe8d5] bg-[#f1faf3] text-[#3b7a4a]"
                          : "border-[#f0d1d1] bg-[#fff4f4] text-[#b44d4d]"
                      }
                    `}
                  >
                    {check.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}