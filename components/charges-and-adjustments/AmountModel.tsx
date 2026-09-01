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
    description: "Changes an amount component within the billing record, with a source and reason.",
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
          lg:py-24

          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1220px]
            flex-col
            items-start
            gap-10

            sm:gap-11
          "
        >
          {/* INTRO */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-8

              md:flex-row
              md:items-end
              md:gap-12

              lg:gap-16
            "
          >
            <div
              className="
                flex
                min-w-0
                flex-1
                flex-col
                items-start
                gap-5
                pt-2.5
                pb-2

                md:pb-6
              "
            >
              {/* EYEBROW */}
              <div className="flex h-4 items-center">
                <span
                  className="
                    mr-2.5
                    h-0.5
                    w-5
                    rounded-sm
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                  "
                />

                <span
                  className="
                    text-xs
                    font-medium
                    uppercase
                    leading-4
                    tracking-wider
                    text-[#456b9c]
                  "
                >
                  Amount model
                </span>
              </div>

              {/* HEADING */}
              <h2
                className="
                  !m-0
                  max-w-[638px]
                  text-[30px]
                  font-medium
                  leading-[1.15]
                  tracking-[-0.035em]
                  text-[#08254a]

                  sm:text-[36px]
                  sm:leading-[1.18]

                  md:text-[42px]

                  lg:text-5xl
                  lg:leading-[53.82px]
                "
              >
                Keep the source, rule
                <br className="hidden sm:block" />
                and purpose behind
                <br className="hidden sm:block" />
                every amount.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div
              className="
                w-full
                max-w-[529px]
                shrink-0
                md:pb-2
              "
            >
              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-7
                  text-[#45617f]

                  sm:text-base
                  sm:leading-8
                "
              >
                Five component types, each with an explicit direction and its
                own governance. Not every type is available in every plan or
                market.
              </p>
            </div>
          </div>

          {/* AMOUNT COMPONENTS */}
          <div className="grid w-full grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {amountComponents.map((item) => (
              <div
                key={item.title}
                className={`
                  flex
                  min-h-[240px]
                  flex-col
                  rounded-2xl
                  border
                  px-6
                  py-6
                  ${item.type === "info"
                    ? "border-[#aebed0] bg-[#f5f7f9]"
                    : "border-[#dfe3e8] bg-white"}
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
                      ${item.type === "negative" ||
                      item.type === "adjustment"
                        ? "border-cyan-200 bg-[#f2f8f9] text-cyan-600"
                        : "border-[#d8e0e9] bg-[#f5f7f9] text-[#456b9c]"}
                    `}
                  >
                    {item.symbol}
                  </div>

                  <span className="pt-0.5 text-[9px] font-normal uppercase leading-4 tracking-wide text-[#55718f]">
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
                    text-[#08254a]
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
                    text-[#45617f]
                  "
                >
                  {item.description}
                </p>

                {/* METADATA */}
                <div className="mt-auto pt-6">
                  <div className="border-t border-[#e0e4e9] pt-3">
                    <p className="!m-0 text-[10px] font-normal leading-4 tracking-tight text-[#45617f]">
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
              overflow-hidden
              rounded-2xl
              border
              border-[#d9dde2]
              bg-[#d9dde2]
              gap-px

              sm:grid-cols-2

              lg:grid-cols-5
            "
          >
            {downstreamConcepts.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[185px]
                  flex-col
                  items-start
                  gap-1.5
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
                    text-[#08254a]
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
                    text-[#45617f]
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
              border-[#456b9c]
              bg-[#f5f7f9]
              px-6
              py-6

              sm:px-7
              sm:py-7
            "
          >
            <span
              className="
                block
                text-[10px]
                font-normal
                uppercase
                leading-4
                tracking-wide
                text-[#456b9c]
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
                text-[#08254a]

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