export default function CustomerServiceContext() {
  const contextItems = [
    {
      title: "Customer & billing account",
      description: "Customer Records remains the billing authority.",
    },
    {
      title: "Workspace or tenant reference",
      description:
        "optional source context where approved; Zoiko Billing does not manage product tenants.",
    },
    {
      title: "Service or package reference",
      description:
        "a stable approved descriptor, not a plan-catalog object.",
    },
    {
      title: "Service period",
      description:
        "start, end and effective period from an authoritative source or schedule.",
    },
    {
      title: "Entity, currency & jurisdiction",
      description: "approved availability only.",
    },
    {
      title: "Unknown or incomplete",
      description: "Needs input stays visible instead of being guessed.",
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
            grid
            w-full
            max-w-[1240px]
            items-center
            gap-10

            lg:grid-cols-2
            lg:gap-14
          "
        >
          {/* VISUAL */}
          <div
            className="
              w-full
              rounded-3xl
              bg-[#eeeeee]
              p-3

              sm:p-4
            "
          >
            <div
              className="
                relative
                aspect-[548/466]
                w-full
                overflow-hidden
                rounded-2xl
                bg-black
              "
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.12),transparent_60%)]" />

              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />

              <img
                src="/images/saas-and-digital-services/customer-service-context.png"
                alt="Customer service context"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-3
            "
          >
            {/* EYEBROW */}
            <div className="mb-1 flex items-center gap-3">
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
                Customer, account &amp; service context
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[680px]
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
              <span className="block">
                Billing can reference your service.
              </span>

              <span className="block">It does not run it.</span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                mt-2
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:mt-3
                sm:text-base
              "
            >
              A workspace, tenant, plan or entitlement reference gives billing
              the context it needs. It never gives Billing control over access
              rights, provisioning, activation, cancellation or user
              permissions for that service.
            </p>

            {/* CONTEXT LIST */}
            <div
              className="
                mt-4
                flex
                w-full
                flex-col
                pt-1

                sm:mt-5
              "
            >
              {contextItems.map((item) => (
                <div
                  key={item.title}
                  className="
                    flex
                    items-start
                    gap-3
                    py-2

                    sm:gap-4
                  "
                >
                  {/* BULLET */}
                  <span
                    className="
                      mt-2
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-[2px]
                      bg-[#7890b2]
                    "
                  />

                  {/* TEXT */}
                  <div
                    className="
                      flex
                      min-w-0
                      flex-1
                      flex-col

                      sm:flex-row
                      sm:items-start
                      sm:gap-2
                    "
                  >
                    <span
                      className="
                        shrink-0
                        text-sm
                        font-bold
                        leading-6
                        text-[#091127]
                      "
                    >
                      {item.title}
                    </span>

                    <span
                      className="
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      <span className="hidden sm:inline">— </span>
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}