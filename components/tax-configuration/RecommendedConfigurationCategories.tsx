export default function RecommendedConfigurationCategories() {
  const categories = [
    {
      number: "Category 01",
      title: "Tax category / classification mapping",
      description: (
        <>
          How a billing object maps to a tax classification concept.
        </>
      ),
    },
    {
      number: "Category 02",
      title: "Tax treatment / policy selection",
      description: (
        <>
          Which treatment concept is selected for a scope.
        </>
      ),
    },
    {
      number: "Category 03",
      title: "Jurisdiction / market applicability reference",
      description: (
        <>
          A reference to where configuration is intended to apply.
        </>
      ),
    },
    {
      number: "Category 04",
      title: "Exemption / exception reference",
      description: (
        <>
          A reference to an exception concept.{" "}
          <strong>No exemption rule is stated.</strong>
        </>
      ),
    },
    {
      number: "Category 05",
      title: "Invoice / tax-document configuration context",
      description: <>Configuration affecting document output.</>,
    },
    {
      number: "Category 06",
      title: "Effective-date / version control",
      description: <>The scheduling and versioning of a change.</>,
    },
    {
      number: "Category 07",
      title: "Evidence / source linkage",
      description: (
        <>
          The connection between a record and its supporting source.
        </>
      ),
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
              max-w-[1000px]
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
                Recommended configuration categories
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
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
              Seven categories, and none asserts
              <br className="hidden sm:block" />
              that the object exists.
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
              These organize a registry. They are not a product inventory.
            </p>
          </div>

          {/* CATEGORY LIST */}
          <div
            className="
              flex
              w-full
              flex-col
              pt-2

              sm:pt-4

              md:pt-8
            "
          >
            {categories.map((category, index) => (
              <div
                key={category.number}
                className="
                  flex
                  w-full
                  flex-col
                  gap-1
                  rounded-[10px]
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-3.5
                  py-5

                  sm:px-4
                  sm:py-6

                  md:py-7

                  xl:px-3.5
                  xl:py-3.5
                "
              >
                {/* CATEGORY NUMBER */}
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

                {/* CATEGORY TITLE */}
                <h3
                  className="
                    !m-0
                    text-xs
                    font-bold
                    leading-4
                    text-[#091127]
                  "
                >
                  {category.title}
                </h3>

                {/* CATEGORY DESCRIPTION */}
                <p
                  className="
                    !m-0
                    pt-3
                    text-xs
                    font-normal
                    leading-4
                    text-[#5d7192]

                    sm:pt-4
                  "
                >
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}