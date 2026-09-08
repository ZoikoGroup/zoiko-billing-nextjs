export default function CategoryNavigator() {
  const categories = [
    {
      title: "Payment providers",
      description: (
        <>
          Providers that handle payment acceptance and settlement.{" "}
          <strong>Coverage varies by market</strong> and is the provider&apos;s
          to establish.
        </>
      ),
      href: "/payment-providers",
    },
    {
      title: "Accounting & ERP",
      description:
        "Systems that consume billing and receivable records.",
      href: "/accounting-and-erp",
    },
    {
      title: "CRM platforms",
      description:
        "Customer systems that share account and contact context.",
      href: "/crm-platforms",
    },
    {
      title: "Banking & reconciliation",
      description:
        "Bank data used to match payments against obligations.",
      href: "/banking-and-reconciliation",
    },
    {
      title: "Zoiko ecosystem",
      description:
        "Connections within the wider Zoiko estate.",
      href: "/ecosystem",
    },
    {
      title: "Integration availability",
      description: (
        <>
          <strong>The authority for where an integration applies.</strong>{" "}
          An integration existing does not mean it applies in every
          jurisdiction.
        </>
      ),
      href: "integration-availability",
    },
  ];

  return (
    <section
    id ="category"
     className="w-full bg-[#f7f8fa]">
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
                Category navigator
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
              Seven category destinations.
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
              Each is a current canonical route with its own governed records.
              Categories organize discovery; they do not assert what is inside
              them.
            </p>
          </div>

          {/* CATEGORY CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              pt-2

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {categories.map((category) => (
              <div
                key={category.title}
                className="
                  flex
                  min-h-[190px]
                  flex-col
                  items-start
                  gap-1.5
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* TITLE */}
                <div className="flex w-full flex-col items-start">
                  <h3
                    className="
                      !m-0
                      w-full
                      text-sm
                      font-bold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {category.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="flex w-full flex-col items-start">
                  <p
                    className="
                      !m-0
                      w-full
                      text-xs
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {category.description}
                  </p>
                </div>

                {/* LINK */}
                <div className="mt-auto w-full pt-2">
                  <a
                    href={category.href}
                    className="
                      inline-flex
                      items-center
                      text-sm
                      font-semibold
                      leading-6
                      text-blue-600
                      transition-opacity
                      hover:opacity-80
                    "
                  >
                    {category.title} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}