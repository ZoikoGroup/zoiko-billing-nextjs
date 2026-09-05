"use client";

const amountComponents = [
  {
    symbol: "+",
    label: "Increases amount owed",
    title: "Base charge",
    description:
      "The primary amount for a product, service, usage or other supported billable component.",
    metadata: "Source · quantity · rate · effective period",
    type: "positive",
  },
  {
    symbol: "+",
    label: "Increases amount owed",
    title: "Fee or surcharge",
    description:
      "A distinct additional amount that carries its own source and stated reason.",
    metadata: "Source · reason · basis · entity",
    type: "positive",
  },
  {
    symbol: "−",
    label: "Reduces amount owed",
    title: "Discount",
    description:
      "A configured reduction with eligibility, scope, effective dates, limits and stacking behaviour where supported.",
    metadata: "Eligibility · scope · dates · limits",
    type: "negative",
  },
  {
    symbol: "%",
    label: "Tax component",
    title: "Tax component",
    description:
      "A configured amount derived from an approved tax source or rule context, with its taxable basis.",
    metadata: "Jurisdiction · rate source · basis · evidence",
    type: "tax",
  },
  {
    symbol: "±",
    label: "Increases or reduces",
    title: "Credit or adjustment",
    description:
      "A controlled increase or decrease linked to a source and a stated reason, with approval where required.",
    metadata: "Original reference · reason · direction · approval",
    type: "adjustment",
  },
  {
    symbol: "!",
    label: "Not amount components",
    title: "Downstream concepts",
    description:
      "Write-off, refund, reversal and payment correction are separate concepts — not synonyms for an adjustment.",
    metadata: "See the strip below",
    type: "info",
  },
];

const downstreamConcepts = [
  {
    title: "Adjustment",
    description:
      "Changes an amount component within the billing record, with a source and reason.",
  },
  {
    title: "Write-off",
    description:
      "An operational decision to stop pursuing a balance, where supported. Not a document correction.",
  },
  {
    title: "Refund",
    description:
      "Actual money returned to the customer. Handled as a payment event, not as an adjustment.",
  },
  {
    title: "Reversal",
    description:
      "A correction relationship that undoes the operational effect of a prior amount.",
  },
  {
    title: "Payment correction",
    description:
      "Fixing how a payment was allocated. Resolved in Payments & Reconciliation.",
  },
];

export default function AmountModel() {
  return (
    <section id="amount-model" className="w-full bg-white">
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
                Amount model
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
              Keep the source, rule and purpose behind every amount.
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
              Five component types, each with an explicit direction and its
              own governance. Not every type is available in every plan or
              market.
            </p>
          </div>

          {/* AMOUNT COMPONENTS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3

              sm:gap-4

              md:grid-cols-2

              lg:grid-cols-3
            "
          >
            {amountComponents.map((item) => (
              <div
                key={item.title}
                className={`
                  flex
                  min-h-[240px]
                  flex-col
                  rounded-2xl
                  border
                  px-5
                  py-5

                  sm:px-6
                  sm:py-6

                  ${
                    item.type === "info"
                      ? "border-[#dfe5ee] bg-[#f7f8fa]"
                      : "border-[#dfe5ee] bg-white"
                  }
                `}
              >
                {/* LABEL */}
                <div className="flex items-center gap-2.5">
                  <div
                    className={`
                      flex
                      size-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      text-sm
                      font-semibold

                      ${
                        item.type === "negative" ||
                        item.type === "adjustment"
                          ? "border-[#cfe5e8] bg-[#f2f8f9] text-[#4f91a0]"
                          : "border-[#d8e0e9] bg-[#f5f7f9] text-[#456b9c]"
                      }
                    `}
                  >
                    {item.symbol}
                  </div>

                  <span
                    className="
                      pt-0.5
                      text-[9px]
                      font-normal
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      text-[#55718f]
                    "
                  >
                    {item.label}
                  </span>
                </div>

                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    mt-4
                    text-base
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
                    mt-3
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  {item.description}
                </p>

                {/* METADATA */}
                <div className="mt-auto pt-6">
                  <div className="border-t border-[#edf0f4] pt-3">
                    <p
                      className="
                        !m-0
                        text-[10px]
                        font-normal
                        leading-4
                        tracking-tight
                        text-[#5d7192]
                      "
                    >
                      {item.metadata}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DOWNSTREAM CONCEPT STRIP */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-px
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-[#dfe5ee]

              sm:grid-cols-2

              lg:grid-cols-5
            "
          >
            {downstreamConcepts.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[175px]
                  flex-col
                  items-start
                  bg-white
                  px-5
                  py-5
                "
              >
                <h3
                  className="
                    !m-0
                    pb-1
                    text-sm
                    font-semibold
                    leading-6
                    text-[#091127]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    !m-0
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

          {/* MODEL BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-[#f7f8fa]
              px-5
              py-5

              sm:px-7
              sm:py-6
            "
          >
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
              Model boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[761px]
                text-sm
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              Tax, credit, refund and write-off are never collapsed into one
              generic negative amount. Each has its own direction, governance
              and downstream effect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}