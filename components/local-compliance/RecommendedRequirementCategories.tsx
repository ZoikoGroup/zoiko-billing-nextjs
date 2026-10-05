export default function RecommendedRequirementCategories() {
  const categories = [
    {
      number: "Category 01",
      title: "Billing / invoicing context",
      description:
        "Requirements touching how billing documents are produced or presented.",
    },
    {
      number: "Category 02",
      title: "Registration / authorization context",
      description:
        "Conditions relating to being permitted to operate or transact.",
    },
    {
      number: "Category 03",
      title: "Tax / indirect-tax context",
      description: "Obligations in the tax domain.",
      emphasis: "No rate, threshold or nexus conclusion.",
    },
    {
      number: "Category 04",
      title: "Payment / remittance context",
      description: "Conditions touching how value moves.",
      emphasis: "No collection or settlement claim.",
    },
    {
      number: "Category 05",
      title: "Record / evidence / retention context",
      description:
        "What must be kept and for how long, where established.",
    },
    {
      number: "Category 06",
      title: "Reporting / filing context",
      description: "Submission obligations.",
      emphasis: "Zoiko Billing does not file or represent you.",
    },
    {
      number: "Category 07",
      title: "Customer / document disclosure context",
      description:
        "What must be disclosed to a counterparty on a document.",
    },
  ];

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
              max-w-[662px]
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
                Recommended requirement categories
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
              Seven categories, and every one carries the same caveat.
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
              These organize a registry. They do not assert that any category
              applies to you or that the product supports it.
            </p>
          </div>

          {/* CATEGORY CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3
              pt-1

              sm:grid-cols-2

              md:grid-cols-3

              lg:grid-cols-4

              xl:grid-cols-7
            "
          >
            {categories.map((category) => (
              <div
                key={category.number}
                className="
                  flex
                  min-h-[180px]
                  w-full
                  flex-col
                  items-start
                  gap-1
                  rounded-[10px]
                  border
                  border-[#e1e5ea]
                  bg-white
                  px-3.5
                  py-3.5
                "
              >
                {/* CATEGORY NUMBER */}
                <div className="w-full">
                  <span
                    className="
                      text-[9.5px]
                      font-normal
                      leading-4
                      text-[#7890b2]
                    "
                  >
                    {category.number}
                  </span>
                </div>

                {/* TITLE */}
                <div className="w-full">
                  <h3
                    className="
                      !m-0
                      w-full
                      text-xs
                      font-bold
                      leading-4
                      text-[#091127]
                    "
                  >
                    {category.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="w-full pt-3">
                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-4
                      text-[#5d7192]
                    "
                  >
                    {category.description}{" "}
                    {category.emphasis && (
                      <span className="font-bold">
                        {category.emphasis}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}