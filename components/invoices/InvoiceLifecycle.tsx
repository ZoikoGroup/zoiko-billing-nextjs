const stages = [
  {
    number: "01",
    title: "Draft before issue",
    description:
      "Preparation is a separate state with no issued number or delivery implication.",
  },
  {
    number: "02",
    title: "Meaningful review",
    description:
      "Configured documents and exceptions route for a real approval decision.",
  },
  {
    number: "03",
    title: "Issued version and numbering",
    description:
      "The issued document keeps its version, number, issuer and issue time.",
  },
  {
    number: "04",
    title: "Delivery is separate",
    description:
      "Issue state and delivery state are tracked independently of each other.",
  },
  {
    number: "05",
    title: "Correction by relationship",
    description:
      "Issued documents are corrected through governed related documents, not edits.",
  },
  {
    number: "06",
    title: "Availability varies",
    description:
      "Plan, entity, provider, currency and jurisdiction all affect what is available.",
  },
];

export default function InvoiceLifecycle() {
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
            max-w-[1220px]
            flex-col
            items-start
            gap-8

            sm:gap-10

            md:gap-11
          "
        >
          {/* LIFECYCLE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-[#e5e7eb]
              shadow-[0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* DESKTOP / TABLET */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6">
              {stages.map((stage, index) => (
                <div
                  key={stage.number}
                  className={`
                    flex
                    min-h-[225px]
                    flex-col
                    items-start
                    bg-white
                    px-5
                    pb-8
                    pt-5
                    ${index !== stages.length - 1 ? "border-r border-[#e5e7eb]" : ""}
                  `}
                >
                  {/* NUMBER */}
                  <div className="flex w-full flex-col items-start">
                    <span
                      className="
                        text-[10px]
                        font-normal
                        leading-4
                        tracking-wide
                        text-[#5c83aa]
                      "
                    >
                      {stage.number}
                    </span>
                  </div>

                  {/* TITLE */}
                  <div className="flex w-full flex-col items-start pb-1 pt-2">
                    <h3
                      className="
                        !m-0
                        text-base
                        font-semibold
                        leading-5
                        tracking-[-0.01em]
                        text-[#091127]
                      "
                    >
                      {stage.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      !m-0
                      mt-1
                      text-sm
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {stages.map((stage, index) => (
                <div
                  key={stage.number}
                  className={`
                    flex
                    flex-col
                    items-start
                    bg-white
                    px-5
                    py-5
                    ${index !== stages.length - 1 ? "border-b border-[#e5e7eb]" : ""}
                  `}
                >
                  {/* NUMBER */}
                  <span
                    className="
                      text-[10px]
                      font-normal
                      leading-4
                      tracking-wide
                      text-[#5c83aa]
                    "
                  >
                    {stage.number}
                  </span>

                  {/* TITLE */}
                  <h3
                    className="
                      !m-0
                      mt-2
                      text-base
                      font-semibold
                      leading-5
                      tracking-[-0.01em]
                      text-[#091127]
                    "
                  >
                    {stage.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      !m-0
                      mt-2
                      text-sm
                      font-normal
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* OPERATING BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#5c83aa]
              bg-[#f7f8fa]
              px-5
              py-6

              sm:px-6
              sm:py-7

              md:px-7
            "
          >
            {/* LABEL */}
            <div className="flex w-full flex-col items-start">
              <span
                className="
                  text-[10px]
                  font-normal
                  uppercase
                  leading-4
                  tracking-wide
                  text-[#5c83aa]
                "
              >
                Operating boundary
              </span>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                mt-2
                max-w-[900px]
                text-sm
                font-normal
                leading-6
                text-[#091127]

                sm:text-base
                sm:leading-7
              "
            >
              Zoiko Billing does not claim universal legal validity,
              electronic-invoicing clearance, tax correctness or guaranteed
              delivery. Document controls support your finance process; they
              are not a substitute for legal, tax or accounting review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}