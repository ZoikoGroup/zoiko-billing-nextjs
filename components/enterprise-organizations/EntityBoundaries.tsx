const items = [
  {
    title: "Organization",
    description:
      "— the top-level operating relationship according to the product model, not an unlimited hierarchy.",
  },
  {
    title: "Entity",
    description:
      "— entity-separated billing context only where Multi-Entity capability is available.",
  },
  {
    title: "Business unit or team",
    description:
      "— operational scope where configuration supports it, not arbitrary organizational trees on every plan.",
  },
  {
    title: "Customer ownership",
    description:
      "— Customer Record authority stays explicit by scope; nothing is shared across entities automatically.",
  },
  {
    title: "Document identity",
    description:
      "— issuer and entity context where supported, without a universal statutory-compliance claim.",
  },
  {
    title: "Data visibility",
    description:
      "— scoped by permission and entity boundary; cross-entity access is never the default.",
  },
];

export default function EntityBoundaries() {
  return (
    <section className="w-full bg-[#F7F8FA] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20 xl:px-24 2xl:px-32">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-14">
        {/* Image */}
        <div className="w-full flex-1 rounded-3xl bg-[#EEF0F3] p-3 sm:p-4">
          <img
            src="/images/enterprise-organizations/entity-boundaries.png"
            alt="Organization, entity and control boundaries"
            className="h-auto min-h-[280px] w-full rounded-2xl object-cover sm:min-h-[380px] lg:min-h-[420px] xl:min-h-[519px]"
          />
        </div>

        {/* Content */}
        <div className="flex w-full flex-1 flex-col items-start gap-4 pt-1 lg:pt-2">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="h-px w-6 bg-blue-600 opacity-75" />
            <span className="text-xs font-bold uppercase leading-4 tracking-[0.18em] text-blue-600">
              Organization, entity &amp; control boundaries
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-2xl font-extrabold leading-8 tracking-tight text-slate-900 sm:text-3xl sm:leading-9">
            Entity separation is not consolidated accounting.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
            Multi-entity billing can coordinate entity-separated billing where
            the capability is available. On its own it provides no
            general-ledger consolidation, intercompany accounting, statutory
            consolidation, revenue recognition or tax filing.
          </p>

          {/* List */}
          <div className="flex w-full flex-col pt-1">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex w-full items-start gap-3 py-2 sm:py-2.5"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[2px] bg-blue-600" />

                <div className="flex w-full flex-col gap-0.5 sm:flex-row sm:items-start">
                  <span className="shrink-0 text-sm font-bold leading-6 text-slate-600 sm:mr-2">
                    {item.title}
                  </span>

                  <span className="text-sm font-normal leading-6 text-slate-600">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}