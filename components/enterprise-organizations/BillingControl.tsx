const entities = [
  {
    name: "ENT-UK",
    location: "United Kingdom · GBP",
    accent: "bg-green-500",
    market: {
      text: "Available",
      className: "bg-green-50 border-green-200 text-green-700",
    },
    policy: "v7 active",
    integrations: {
      text: "Healthy",
      className: "bg-green-50 border-green-200 text-green-700",
    },
    openItems: "2",
  },
  {
    name: "ENT-DE",
    location: "Germany · EUR",
    accent: "bg-orange-500",
    market: {
      text: "Needs review",
      className: "bg-orange-50 border-orange-200 text-orange-700",
    },
    policy: "v7 active",
    integrations: {
      text: "Stale",
      className: "bg-slate-100 border-slate-200 text-slate-700",
    },
    openItems: "4",
  },
  {
    name: "ENT-AE",
    location: "United Arab Emirates",
    accent: "bg-red-500",
    market: {
      text: "Unsupported",
      className: "bg-red-50 border-red-200 text-red-700",
    },
    policy: "Not applicable",
    integrations: {
      text: "Not configured",
      className: "bg-slate-100 border-slate-200 text-slate-600",
    },
    openItems: "0",
  },
  {
    name: "ENT-SG",
    location: "Singapore · SGD",
    accent: "bg-blue-500",
    market: {
      text: "Unknown",
      className: "bg-blue-50 border-blue-200 text-blue-700",
    },
    policy: "Cannot resolve",
    integrations: {
      text: "Unknown",
      className: "bg-blue-50 border-blue-200 text-blue-700",
    },
    openItems: "2",
  },
];

function StatusBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <span
      className={`inline-flex min-h-6 items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold leading-4 ${className}`}
    >
      {children}
    </span>
  );
}

function EntityCard({
  entity,
}: {
  entity: (typeof entities)[number];
}) {
  return (
    <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
      {/* Accent */}
      <div
        className={`absolute left-0 top-0 h-full w-[3px] ${entity.accent}`}
      />

      {/* Entity Header */}
      <div className="flex flex-col gap-0.5">
        <div className="text-base font-extrabold leading-6 text-[#091127]">
          {entity.name}
        </div>

        <div className="text-xs font-normal leading-5 text-[#5d7192]">
          {entity.location}
        </div>
      </div>

      {/* Entity Details */}
      <div className="mt-2.5 flex flex-col">
        {/* Market */}
        <div className="flex items-center justify-between gap-4 py-1.5">
          <span className="text-xs font-normal leading-5 text-[#5d7192]">
            Market
          </span>

          <StatusBadge className={entity.market.className}>
            {entity.market.text}
          </StatusBadge>
        </div>

        {/* Policy */}
        <div className="flex items-center justify-between gap-4 border-t border-[#edf0f4] py-1.5">
          <span className="text-xs font-normal leading-5 text-[#5d7192]">
            Policy
          </span>

          <span className="text-right text-xs font-normal leading-5 text-[#091127]">
            {entity.policy}
          </span>
        </div>

        {/* Integrations */}
        <div className="flex items-center justify-between gap-4 border-t border-[#edf0f4] py-1.5">
          <span className="text-xs font-normal leading-5 text-[#5d7192]">
            Integrations
          </span>

          <StatusBadge className={entity.integrations.className}>
            {entity.integrations.text}
          </StatusBadge>
        </div>

        {/* Open Items */}
        <div className="flex items-center justify-between gap-4 border-t border-[#edf0f4] py-1.5">
          <span className="text-xs font-normal leading-5 text-[#5d7192]">
            Open items
          </span>

          <span className="text-xs font-normal leading-5 text-[#091127]">
            {entity.openItems}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function BillingControl() {
  return (
    <section className="w-full border-t border-[#dfe5ee] bg-[#f7f8fa]">
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
                Billing control
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
              The enterprise billing control plane.
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
              Centralized oversight across four synthetic entities. Deliberately
              not all green — a control view that shows only healthy states is
              not evidence of control.
            </p>
          </div>

          {/* ENTITY CARDS */}
          <div className="w-full">
            <div
              className="
                grid
                w-full
                grid-cols-1
                gap-4

                sm:grid-cols-2

                lg:grid-cols-4
              "
            >
              {entities.map((entity) => (
                <EntityCard key={entity.name} entity={entity} />
              ))}
            </div>
          </div>

          {/* DASHBOARD IMAGE */}
          <div className="w-full">
            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <img
                src="/images/enterprise-organizations/billing-control.png"
                alt="Enterprise billing control plane dashboard"
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}