export default function BrowseByAudience() {
  const audiences = [
    {
      title: "Finance & billing operations",
      description:
        "Practical invoice-to-payment process, reporting, controls, exceptions and operational improvement.",
    },
    {
      title: "Accounts receivable teams",
      description:
        "Receivables, reminders, disputes, payment application, reconciliation, aging, outstanding balances.",
    },
    {
      title: "Administrators & implementers",
      description:
        "Records, roles and approvals, configuration concepts, integrations, rollout, governance, documentation handoffs.",
    },
    {
      title: "Developers & technical teams",
      description:
        "Business context around integration, then direct handoff to approved Developers documentation.",
    },
    {
      title: "Business leaders & evaluators",
      description:
        "Operating model, controls, reporting, maturity, product fit, and pricing, trust or demo next steps.",
    },
    {
      title: "Existing customers",
      description:
        "Learning resources plus Help Center, Documentation and Product Updates for current product and account-specific needs.",
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
          items-center
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
              Six audiences, and customers are not pushed toward sales.
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
              An existing customer reaches Help Center, Documentation and
              Product Updates rather than a demo form.
            </p>
          </div>

          {/* AUDIENCE CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              md:grid-cols-2
              md:gap-5
            "
          >
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="
                  flex
                  min-h-[150px]
                  w-full
                  flex-col
                  items-start
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                  sm:min-h-[145px]
                  sm:px-6
                  sm:py-5
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

                    sm:text-base
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