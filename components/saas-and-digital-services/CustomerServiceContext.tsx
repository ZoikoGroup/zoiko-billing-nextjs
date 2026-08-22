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
    <section className="w-full bg-gray-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Visual */}
          <div className="w-full rounded-3xl bg-gray-100 p-3 sm:p-4">
            <div className="relative aspect-[548/466] w-full overflow-hidden rounded-2xl bg-black">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.12),transparent_60%)]" />

              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />

              <img
                src="/images/saas-and-digital-services/customer-service-context.png"
                alt="Customer service context"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex w-full flex-col items-start gap-5">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-blue-600/75" />

              <span className="text-xs font-bold uppercase leading-4 tracking-widest text-slate-500">
                Customer, account &amp; service context
              </span>
            </div>

            {/* Heading */}
            <h2 className="w-full text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl sm:leading-[1.15] lg:text-5xl lg:leading-[1.14]">
              <span className="block">
                Billing can reference your service.
              </span>
              <span className="block">It does not run it.</span>
            </h2>

            {/* Description */}
            <p className="w-full max-w-[687px] text-sm font-normal leading-6 text-slate-500 sm:text-base sm:leading-7">
              A workspace, tenant, plan or entitlement reference gives billing
              the context it needs. It never gives Billing control over access
              rights, provisioning, activation, cancellation or user
              permissions for that service.
            </p>

            {/* Context list */}
            <div className="flex w-full flex-col pt-1">
              {contextItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 py-2 sm:gap-4"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[2px] bg-blue-600" />

                  <div className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-start sm:gap-2">
                    <span className="shrink-0 text-sm font-bold leading-6 text-slate-600">
                      {item.title}
                    </span>

                    <span className="text-sm font-normal leading-6 text-slate-500">
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