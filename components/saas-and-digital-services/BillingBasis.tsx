import Image from "next/image";

const billingBases = [
  {
    title: "Recurring service schedule",
    description: "A repeat service fee approved for defined service periods.",
    status: "Supported",
    type: "supported",
  },
  {
    title: "Fixed service period",
    description: "A defined period with an approved fixed billing amount.",
    status: "Supported",
    type: "supported",
  },
  {
    title: "One-time setup or onboarding fee",
    description: "An approved one-time service charge.",
    status: "Supported",
    type: "supported",
  },
  {
    title: "Add-on or service change",
    description: "An approved service modification creates a billing change.",
    status: "Supported",
    type: "supported",
  },
  {
    title: "Manual or one-off charge",
    description: "An authorized digital-service fee entered and approved.",
    status: "Supported",
    type: "supported",
  },
  {
    title: "Usage-derived input",
    description:
      "A billable quantity arrives from an approved upstream source.",
    status: "Requires upstream source",
    type: "source",
  },
  {
    title: "Seat or user-count derived",
    description:
      "A current count arrives from an approved external source.",
    status: "Requires upstream source",
    type: "source",
  },
  {
    title: "Something else",
    description: "A model not listed here.",
    status: "Fit review",
    type: "review",
  },
];

export default function BillingBasis() {
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
              max-w-[950px]
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
                Choose the billing basis
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
              Start from what you already bill.
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
              Seven bases with equal weight. Two of them depend entirely on
              an approved upstream source — and the page says so on the card
              rather than in a footnote.
            </p>
          </div>

          {/* BILLING CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {billingBases.map((item, index) => (
              <div
                key={item.title}
                className={`
                  flex
                  min-h-[190px]
                  flex-col
                  rounded-2xl
                  bg-white
                  p-5

                  ${
                    index === 0
                      ? "border border-[#1f6feb] shadow-[0_0_0_3px_rgba(31,111,235,0.12)]"
                      : "border border-[#dfe5ee] shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]"
                  }
                `}
              >
                {/* CARD TITLE */}
                <h3
                  className="
                    !m-0
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]

                    sm:text-base
                  "
                >
                  {item.title}
                </h3>

                {/* CARD DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-2
                    flex-1
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {item.description}
                </p>

                {/* STATUS */}
                <div
                  className={`
                    mt-4
                    w-fit
                    rounded-md
                    border
                    px-2.5
                    py-1
                    text-[11px]
                    font-semibold
                    leading-4

                    ${
                      item.type === "supported"
                        ? "border-[#bbebd0] bg-[#f0fdf4] text-[#15803d]"
                        : item.type === "source"
                          ? "border-[#dfe5ee] bg-[#f7f8fa] text-[#5d7192]"
                          : "border-[#bfdbfe] bg-[#eff6ff] text-[#2563eb]"
                    }
                  `}
                >
                  {item.status}
                </div>
              </div>
            ))}
          </div>

          {/* SECTION IMAGE */}
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
            <Image
              src="/images/saas-and-digital-services/billing-basis.png"
              alt="Billing basis"
              width={1184}
              height={592}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}