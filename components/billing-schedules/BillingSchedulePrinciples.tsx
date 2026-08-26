const schedulePrinciples = [
  {
    number: "01",
    title: "Schedule is not outcome",
    description:
      "Timing decides when work becomes eligible, never whether it succeeded.",
  },
  {
    number: "02",
    title: "Timezone is explicit",
    description:
      "The governing timezone and effective date are recorded, not inferred from a browser.",
  },
  {
    number: "03",
    title: "Eligibility checked when due",
    description:
      "Customer, source, amount and policy context are validated at the occurrence.",
  },
  {
    number: "04",
    title: "Recovery is configured",
    description:
      "Missed-run, retry and catch-up behaviour is a decision you make in advance.",
  },
  {
    number: "05",
    title: "Changes are versioned",
    description:
      "Every revision is attributable, with its own effective date and reason.",
  },
  {
    number: "06",
    title: "Availability varies",
    description:
      "Plan, workflow, entity, integration and market all affect what is available.",
  },
];

export default function BillingSchedulePrinciples() {
  return (
    <section className="w-full bg-[#f7f8fa] overflow-hidden">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          py-12

          sm:px-8
          sm:py-14

          md:px-10
          md:py-16

          lg:px-14
          lg:py-20

          xl:px-20
        "
      >
        <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-8">
          {/* PRINCIPLES */}
          <div
            className="
              grid
              grid-cols-1
              overflow-hidden
              rounded-2xl
              border
              border-zinc-200
              bg-white

              sm:grid-cols-2

              lg:grid-cols-3

              xl:grid-cols-6
            "
          >
            {schedulePrinciples.map((item, index) => (
              <div
                key={item.number}
                className={`
                  flex
                  min-h-[235px]
                  flex-col
                  items-start
                  bg-white
                  px-5
                  py-5

                  ${index !== 0 ? "border-t border-zinc-200 sm:border-t-0" : ""}
                  ${index % 2 !== 0 ? "sm:border-l" : ""}
                  ${index >= 2 ? "lg:border-l" : ""}
                  ${index >= 3 ? "lg:border-t" : ""}
                  ${index > 0 ? "xl:border-t-0" : ""}
                  ${index > 0 ? "xl:border-l" : ""}
                `}
              >
                {/* NUMBER */}
                <span
                  className="
                    text-[10px]
                    font-normal
                    leading-4
                    tracking-[0.12em]
                    text-blue-600
                  "
                >
                  {item.number}
                </span>

                {/* TITLE */}
                <h3
                  className="
                    mt-2
                    max-w-[170px]
                    text-base
                    font-semibold
                    leading-5
                    text-slate-900
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-3
                    max-w-[180px]
                    text-sm
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* OPERATING BOUNDARY */}
          <div
            className="
              flex
              flex-col
              items-start
              gap-2
              rounded-r-2xl
              border-l-[3px]
              border-blue-600
              bg-[#f7f8fa]
              px-5
              py-6

              sm:px-6
              sm:py-7

              lg:px-7
              lg:py-7
            "
          >
            <span
              className="
                text-[10px]
                font-medium
                uppercase
                leading-4
                tracking-[0.14em]
                text-blue-600
              "
            >
              Operating boundary
            </span>

            <p
              className="
                w-full
                max-w-[780px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              A schedule governs eligibility to begin. It does not guarantee
              execution time, charge creation, invoice issue, delivery,
              payment or revenue, and universal subscription, proration, usage
              or calendar support is not claimed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}