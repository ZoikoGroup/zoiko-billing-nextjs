"use client";

const concepts = [
  {
    number: "01",
    title: "Payment evidence",
    description:
      "Source, provider or bank reference, amount, currency, method and timestamps.",
  },
  {
    number: "02",
    title: "Normalized state",
    description:
      "Initiated, received, settled, failed, returned, reversed or unknown.",
  },
  {
    number: "03",
    title: "Matching context",
    description:
      "Customer, invoice, reference, amount, currency, date and source ownership.",
  },
  {
    number: "04",
    title: "Allocation",
    description:
      "Document-level or supported customer-level application, with remaining context.",
  },
  {
    number: "05",
    title: "Exception",
    description:
      "Unmatched, duplicate, overpayment, short payment, conflict or unavailable source.",
  },
  {
    number: "06",
    title: "Evidence",
    description:
      "Mapping version, rule, reviewer, decision, allocation, reversal and audit history.",
  },
];

const states = [
  {
    title: "Payment state",
    description: "What the source says happened to the funds.",
  },
  {
    title: "Allocation state",
    description: "How much of that value has been applied to billing records.",
  },
  {
    title: "Cash position",
    description: "What you actually hold, which is a treasury question.",
  },
  {
    title: "Bank reconciliation",
    description:
      "Agreement with a bank statement, done against the bank.",
  },
  {
    title: "Accounting posting",
    description:
      "Journal treatment and close, done in your accounting system.",
  },
];

export default function ControlModel() {
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
                Control model
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
              Six concepts behind every payment operation.
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
              No single provider state is treated as universal truth, and
              payment, allocation, cash, bank and accounting states are all
              kept distinct.
            </p>
          </div>

          {/* SIX CONCEPTS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {concepts.map((concept) => (
              <div
                key={concept.number}
                className="
                  flex
                  min-h-[245px]
                  flex-col
                  items-start
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-6
                  py-6
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
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
                    border
                    border-[#dfe5ee]
                    bg-[#f7f8fa]
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      leading-4
                      text-[#7890b2]
                    "
                  >
                    {concept.number}
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
                  {concept.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-2
                    max-w-[400px]
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  {concept.description}
                </p>
              </div>
            ))}
          </div>

          {/* STATE DIFFERENCES */}
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
                grid
                grid-cols-1

                sm:grid-cols-2

                lg:grid-cols-3

                xl:grid-cols-5
              "
            >
              {states.map((state, index) => (
                <div
                  key={state.title}
                  className={`
                    flex
                    min-h-[180px]
                    flex-col
                    items-start
                    bg-white
                    px-5
                    py-5

                    ${
                      index !== states.length - 1
                        ? "border-b border-[#edf0f4] xl:border-b-0 xl:border-r"
                        : ""
                    }
                  `}
                >
                  {/* TITLE */}
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
                    {state.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      !m-0
                      text-sm
                      font-normal
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    {state.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* MODEL BOUNDARY */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-2
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              px-6
              py-7
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.14em]
                text-[#7890b2]
              "
            >
              Model boundary
            </span>

            <p
              className="
                !m-0
                max-w-[820px]
                text-[15px]
                font-normal
                leading-7
                text-[#091127]
              "
            >
              These five are never collapsed into a single “reconciled” flag.
              Zoiko Billing reconciles payments to billing records; it does not
              perform bank reconciliation or an accounting close.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}