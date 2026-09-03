import Image from "next/image";

const billingBases = [
  {
    title: "Fixed client fee",
    description: "An approved client or service scope establishes the fee.",
    status: "Supported",
    type: "supported",
  },
  {
    title: "Retainer",
    description:
      "An approved recurring or pre-billed client service arrangement.",
    status: "Where configured",
    type: "configured",
  },
  {
    title: "Project or milestone fee",
    description: "An approved phase or milestone drives billing.",
    status: "Supported",
    type: "supported",
  },
  {
    title: "Recurring service schedule",
    description: "Repeat service billing on an approved schedule.",
    status: "Supported",
    type: "supported",
  },
  {
    title: "Pass-through or reimbursable cost",
    description:
      "An approved external cost that is billable to the client.",
    status: "Where configured",
    type: "configured",
  },
  {
    title: "Manual or one-off fee",
    description: "An authorized one-off client fee or service charge.",
    status: "Supported",
    type: "supported",
  },
  {
    title: "Time-derived",
    description:
      "Billable input arrives from an approved upstream time source.",
    status: "Requires upstream source",
    type: "upstream",
  },
  {
    title: "Something else",
    description: "A fee arrangement not listed here.",
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
              max-w-[700px]
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
                Choose the client billing basis
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[620px]
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
              Most agencies run several of these at once.
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
              Seven bases, shown with equal weight. Nothing here recommends a
              model using client value, spend, margin or account tier — the
              selector helps you recognize what you already run and check
              whether the configured Billing model supports it.
            </p>
          </div>

          {/* BILLING BASIS CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {billingBases.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[144px]
                  flex-col
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-4
                  py-5
                  shadow-[0_1px_2px_rgba(15,23,42,0.02)]
                "
              >
                {/* TITLE */}
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

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-2
                    min-h-[40px]
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {item.description}
                </p>

                {/* STATUS */}
                <div className="mt-auto pt-4">
                  <span
                    className={`
                      inline-flex
                      min-h-6
                      items-center
                      rounded-md
                      border
                      px-2.5
                      py-0.5
                      text-xs
                      font-semibold
                      leading-4

                      ${
                        item.type === "supported"
                          ? "border-[#cfe8d5] bg-[#f1faf3] text-[#3b7a4a]"
                          : item.type === "configured"
                            ? "border-[#f1dfc7] bg-[#fff8ed] text-[#9a681f]"
                            : item.type === "upstream"
                              ? "border-[#dfe5ee] bg-[#f7f8fa] text-[#5d7192]"
                              : "border-[#dce6f5] bg-[#f4f8fd] text-[#58759d]"
                      }
                    `}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* SECTION IMAGE */}
          <div
            className="
              mt-1
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
              src="/images/agencies/basis.png"
              alt="Client billing basis overview"
              width={1264}
              height={632}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}