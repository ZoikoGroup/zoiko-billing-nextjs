export default function DiscoveryPaths() {
  const paths = [
    {
      title: "Payment providers",
      path: "/integrations/payment-providers",
      description: "No universal payment-processing claim.",
    },
    {
      title: "Accounting & ERP",
      path: "/integrations/accounting-and-erp",
      description:
        "No built-in general-ledger or accounting-suite claim.",
    },
    {
      title: "CRM platforms",
      path: "/integrations/crm",
      description: "No universal CRM sync or ownership claim.",
    },
    {
      title: "Banking & reconciliation",
      path: "/integrations/banking-and-reconciliation",
      description: "No open-banking assumption.",
    },
    {
      title: "Zoiko ecosystem",
      path: "/integrations/zoiko",
      description:
        "No automatic Zoiko One inclusion or shared-data authority.",
    },
    {
      title: "Integration availability",
      path: "/integrations/availability",
      description:
        "Region, plan, certification and operational qualifiers.",
    },
    {
      title: "Build an integration",
      path: "/developers/build",
      description:
        "Only where public developer surfaces are available.",
    },
    {
      title: "Submit an integration",
      path: "/integrations/submit",
      description:
        "Submission does not publish or approve a listing.",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#f8f9fb]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-5
          py-12

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        {/* HEADING */}
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
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-[#7890b2] opacity-40" />

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

            <span className="h-px w-4 bg-[#7890b2] opacity-40" />
          </div>

          {/* TITLE */}
          <h2
            className="
              !m-0
              text-[30px]
              font-extrabold
              leading-[1.15]
              tracking-[-0.025em]
              text-[#091127]

              sm:text-[34px]

              md:text-[36px]
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
              pt-1
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
            mt-8
            grid
            w-full
            grid-cols-1
            gap-4

            sm:mt-10
            sm:grid-cols-2

            md:gap-5

            lg:mt-12
            lg:grid-cols-4
          "
        >
          {paths.map((item) => (
            <div
              key={item.title}
              className="
                min-h-[190px]
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                p-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}