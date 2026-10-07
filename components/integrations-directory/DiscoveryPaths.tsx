import Link from "next/link";

export default function DiscoveryPaths() {
  const paths = [
    {
      title: "Payment providers",
      path: "/payment-providers",
      description: "No universal payment-processing claim.",
    },
    {
      title: "Accounting & ERP",
      path: "/accounting-and-erp",
      description:
        "No built-in general-ledger or accounting-suite claim.",
    },
    {
      title: "CRM platforms",
      path: "/crm-platforms",
      description: "No universal CRM sync or ownership claim.",
    },
    {
      title: "Banking & reconciliation",
      path: "/banking-and-reconciliation",
      description: "No open-banking assumption.",
    },
    {
      title: "Zoiko ecosystem",
      path: "/ecosystem",
      description:
        "No automatic Zoiko One inclusion or shared-data authority.",
    },
    {
      title: "Integration availability",
      path: "/integration-availability",
      description:
        "Region, plan, certification and operational qualifiers.",
    },
    {
      title: "Build an integration",
      path: "/developers-build-an-integration",
      description:
        "Only where public developer surfaces are available.",
    },
    {
      title: "Submit an integration",
      path: "/integrations",
      description:
        "Submission does not publish or approve a listing.",
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
                Categories &amp; discovery paths
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
              Eight routes, each with its own boundary.
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
              The directory aggregates. Each category page remains the
              authority for its own domain.
            </p>
          </div>

          {/* DISCOVERY CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              sm:grid-cols-2
              md:gap-5
              lg:grid-cols-4
            "
          >
            {paths.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className="
                  group
                  flex
                  min-h-[190px]
                  flex-col
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-[#c8d4e4]
                  hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#5279b4]
                  focus:ring-offset-2
                "
              >
                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    text-base
                    font-bold
                    leading-6
                    text-[#091127]
                    transition-colors
                    group-hover:text-[#5279b4]
                  "
                >
                  {item.title}
                </h3>

                {/* PATH */}
                <p
                  className="
                    !m-0
                    mt-1
                    break-words
                    text-xs
                    font-normal
                    leading-5
                    text-[#7890b2]
                    group-hover:text-[#5279b4]
                  "
                >
                  {item.path}
                </p>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-2
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}