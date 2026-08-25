const audiences = [
  {
    title: "Finance & accounts receivable",
    description:
      "Operational guidance, receivables control, reconciliation, outstanding balances, reporting, templates, glossary.",
  },
  {
    title: "Revenue operations",
    description:
      "Billing process consistency, workflows, records, integrations, reporting, exceptions, lifecycle guidance.",
  },
  {
    title: "Administrators & implementers",
    description:
      "Roles, approvals, setup, documentation, integrations, governance, implementation guidance.",
  },
  {
    title: "Developers & technical teams",
    description:
      "API overview, documentation, authentication, webhooks, sandbox, SDKs and examples, integration build lifecycle.",
  },
  {
    title: "Business leaders & evaluators",
    description:
      "Platform overview, pricing, reports and insights, customer evidence, trust and security, demo.",
  },
  {
    title: "Existing customers",
    description:
      "Help Center, Documentation, Product Updates, support, system status, and current resource discovery.",
  },
];

export default function BrowseByAudience() {
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
                Browse by audience
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
              Six audiences, and existing customers
               are not routed to sales.
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
              A customer looking for help reaches Help Center and
              Documentation, not a demo form.
            </p>
          </div>

          {/* AUDIENCE CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-5

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="
                  flex
                  min-h-[184px]
                  w-full
                  flex-col
                  items-start
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
                    w-full
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]

                    sm:text-[15px]
                  "
                >
                  {audience.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-1.5
                    w-full
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]

                    sm:text-sm
                  "
                >
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}