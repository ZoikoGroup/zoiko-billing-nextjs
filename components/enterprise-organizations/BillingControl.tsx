const entities = [
  {
    name: "ENT-UK",
    location: "United Kingdom · GBP",
    accent: "bg-green-500",
    market: {
      text: "Available",
      className:
        "bg-green-50 border-green-200 text-green-700",
    },
    policy: "v7 active",
    integrations: {
      text: "Healthy",
      className:
        "bg-green-50 border-green-200 text-green-700",
    },
    openItems: "2",
  },
  {
    name: "ENT-DE",
    location: "Germany · EUR",
    accent: "bg-orange-500",
    market: {
      text: "Needs review",
      className:
        "bg-orange-50 border-orange-200 text-orange-700",
    },
    policy: "v7 active",
    integrations: {
      text: "Stale",
      className:
        "bg-slate-100 border-slate-200 text-slate-700",
    },
    openItems: "4",
  },
  {
    name: "ENT-AE",
    location: "United Arab Emirates",
    accent: "bg-red-500",
    market: {
      text: "Unsupported",
      className:
        "bg-red-50 border-red-200 text-red-700",
    },
    policy: "Not applicable",
    integrations: {
      text: "Not configured",
      className:
        "bg-slate-100 border-slate-200 text-slate-600",
    },
    openItems: "0",
  },
  {
    name: "ENT-SG",
    location: "Singapore · SGD",
    accent: "bg-blue-500",
    market: {
      text: "Unknown",
      className:
        "bg-blue-50 border-blue-200 text-blue-700",
    },
    policy: "Cannot resolve",
    integrations: {
      text: "Unknown",
      className:
        "bg-blue-50 border-blue-200 text-blue-700",
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
    <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
      <div
        className={`absolute left-0 top-0 h-full w-[3px] ${entity.accent}`}
      />

      <div className="flex flex-col gap-0.5">
        <div className="text-base font-extrabold leading-6 text-slate-900">
          {entity.name}
        </div>

        <div className="text-xs font-normal leading-5 text-slate-500">
          {entity.location}
        </div>
      </div>

      <div className="mt-2.5 flex flex-col">
        <div className="flex items-center justify-between gap-4 py-1.5">
          <span className="text-xs font-normal leading-5 text-slate-500">
            Market
          </span>

          <StatusBadge className={entity.market.className}>
            {entity.market.text}
          </StatusBadge>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-slate-100 py-1.5">
          <span className="text-xs font-normal leading-5 text-slate-500">
            Policy
          </span>

          <span className="text-right text-xs font-normal leading-5 text-slate-900">
            {entity.policy}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-slate-100 py-1.5">
          <span className="text-xs font-normal leading-5 text-slate-500">
            Integrations
          </span>

          <StatusBadge className={entity.integrations.className}>
            {entity.integrations.text}
          </StatusBadge>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-slate-100 py-1.5">
          <span className="text-xs font-normal leading-5 text-slate-500">
            Open items
          </span>

          <span className="text-xs font-normal leading-5 text-slate-900">
            {entity.openItems}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function BillingControl() {
  return (
    <section className="w-full border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-4">
          <div className="w-full text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl sm:leading-10">
              The enterprise billing control plane.
            </h2>
          </div>

          <div className="w-full max-w-[687px] text-center">
            <p className="text-base font-normal leading-7 text-slate-600">
              Centralized oversight across four synthetic entities. Deliberately
              not all green — a control view that shows only healthy states is
              not evidence of control.
            </p>
          </div>
        </div>

        {/* Entity Cards */}
        <div className="w-full pt-5">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {entities.map((entity) => (
              <EntityCard key={entity.name} entity={entity} />
            ))}
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="w-full pt-1">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
            <img
              src="/images/enterprise-organizations/billing-control.png"
              alt="Enterprise billing control plane dashboard"
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}