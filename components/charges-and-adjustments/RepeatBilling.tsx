import Image from "next/image";
import Link from "next/link";

const billingItems = [
  {
    title: "Reusable definition",
    description:
      "A charge definition, or a schedule-specific amount context where supported, can be reused across events.",
  },
  {
    title: "Effective window",
    description:
      "Start, end and recurrence context determine when the definition participates.",
  },
  {
    title: "Proration and escalation",
    description:
      "Proration, usage, escalation and indexation apply only where verified for your configuration.",
  },
  {
    title: "Event-time calculation",
    description:
      "The schedule event creates or prepares the amount from the configuration current at that time.",
  },
  {
    title: "Exception handling",
    description:
      "When source data, a rate or eligibility is unavailable, the event raises an exception rather than guessing.",
  },
  {
    title: "No assumed outcome",
    description:
      "A prepared amount still passes through validation, approval and application like any other.",
  },
];

export default function RepeatBilling() {
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
              max-w-[760px]
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
                Repeat billing
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[760px]
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
              Use approved amounts in repeat billing without assuming the
              result.
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
              A schedule event prepares an amount from current configuration.
              It does not guarantee the amount, the invoice, the issue, the
              delivery or the payment.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-8
              pt-2

              lg:grid-cols-2
              lg:gap-12

              xl:gap-16
            "
          >
            {/* BILLING DETAILS */}
            <div
              className="
                flex
                w-full
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              {billingItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    grid
                    w-full
                    grid-cols-1
                    gap-2
                    px-5
                    py-5

                    sm:grid-cols-[150px_minmax(0,1fr)]
                    sm:gap-5
                    sm:px-6

                    ${
                      index !== billingItems.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* TITLE */}
                  <div>
                    <h3
                      className="
                        !m-0
                        text-sm
                        font-semibold
                        leading-6
                        text-[#091127]
                      "
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <div>
                    <p
                      className="
                        !m-0
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* IMAGE */}
            <div className="w-full">
              <div
                className="
                  relative
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                <Image
                  src="/images/charges-and-adjustments/repeat-billing.png"
                  alt="Repeat billing schedule illustration"
                  width={526}
                  height={355}
                  className="block h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* SCHEDULE BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              px-5
              py-5

              sm:px-7
              sm:py-6
            "
          >
            {/* LABEL */}
            <span
              className="
                block
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-[#7890b2]
              "
            >
              Schedule boundary
            </span>

            {/* TEXT */}
            <p
              className="
                !m-0
                mt-2
                max-w-[900px]
                text-sm
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              A schedule does not guarantee the amount, invoice, issue,
              delivery or payment. Advanced subscription and usage-billing
              capabilities are claimed only where approved for your plan and
              configuration.
            </p>
          </div>

          {/* CTA */}
          <div className="flex w-full items-center justify-start">
            <Link
              href="/billing-schedules"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                bg-[#091127]
                px-5
                py-2.5
                text-center
                text-base
                font-normal
                leading-6
                !text-white
                transition-opacity
                duration-200
                hover:opacity-90
              "
            >
              Explore Billing Schedules
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}