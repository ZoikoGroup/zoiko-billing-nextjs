const layers = [
  {
    number: "01",
    title: "Jurisdiction",
    description: (
      <>
        Where a capability may be offered, and
        <br className="hidden sm:block" /> under what current status.
      </>
    ),
    authority: "Jurisdiction Availability registry",
    note: "— never inferred from visitor IP",
  },
  {
    number: "02",
    title: "Billing entity",
    description: (
      <>
        Which organization or entity issues or
        <br className="hidden sm:block" /> owns defined billing activity.
      </>
    ),
    authority: "Multi-Entity configuration",
    note: "— not corporate-law proof",
  },
  {
    number: "03",
    title: "Customer & account context",
    description: (
      <>
        Which customer record and billing profile
        <br className="hidden sm:block" /> applies.
      </>
    ),
    authority: "Customer Records",
    note: "— no CRM master-data overclaim",
  },
  {
    number: "04",
    title: "Currency context",
    description: (
      <>
        What currency applies to configured
        <br className="hidden sm:block" /> billing, document and payment contexts.
      </>
    ),
    authority: "Multi-Currency",
    note: "— not automatic FX or settlement",
  },
  {
    number: "05",
    title: "Document locale",
    description: (
      <>
        Which approved language, format and
        <br className="hidden sm:block" /> template applies.
      </>
    ),
    authority: "Localized Documents + language registry",
    note: "",
  },
  {
    number: "06",
    title: "Entity control",
    description: (
      <>
        Who can view, change or approve within
        <br className="hidden sm:block" /> entity and action scope.
      </>
    ),
    authority: "Entity-Level Controls + Roles & Approvals",
    note: "",
  },
  {
    number: "07",
    title: "Provider & integration",
    description: (
      <>
        Which external provider or system
        <br className="hidden sm:block" /> participates in the workflow.
      </>
    ),
    authority: "Integration and provider registry",
    note: "— status-dependent",
  },
  {
    number: "08",
    title: "Evidence",
    description: (
      <>
        What configuration, version and source
        <br className="hidden sm:block" /> was effective when an action occurred.
      </>
    ),
    authority: "Audit and change records",
    note: "",
  },
];

export default function BillingLayers() {
  return (
    <section className="w-full bg-color-grey-97-4 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-24">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
        {/* Heading */}
        <div className="w-full max-w-[662px] pt-2 flex flex-col items-center gap-3">
          <div className="flex w-full max-w-[320px] items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />

            <span className="text-center text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Global billing operating model
            </span>

            <span className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />
          </div>

          <h2 className="text-center text-3xl font-extrabold leading-9 text-color-azure-11-2 sm:text-4xl sm:leading-10">
            Eight layers, resolved in order.
          </h2>

          <p className="max-w-[687px] text-center text-sm font-normal leading-6 text-color-azure-44-3 sm:text-base sm:leading-7">
            Jurisdiction, then entity, then customer, then currency, then
            document locale, then provider, then evidence. Country never
            silently infers currency, tax, language, provider, hosting, support
            or commercial terms.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-4 pt-5 sm:grid-cols-2 lg:grid-cols-4">
          {layers.map((layer) => (
            <div
              key={layer.number}
              className="flex min-h-[250px] flex-col rounded-2xl border border-color-grey-92-4 bg-color-white-solid p-4 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)]"
            >
              {/* Layer */}
              <div className="text-xs font-extrabold leading-4 tracking-wide text-blue-600">
                LAYER {layer.number}
              </div>

              {/* Title */}
              <div className="pt-1 text-sm font-bold leading-6 text-color-azure-11-2">
                {layer.title}
              </div>

              {/* Description */}
              <div className="pb-5 pt-1 text-xs font-normal leading-5 text-color-azure-44-3">
                {layer.description}
              </div>

              {/* Authority */}
              <div className="mt-auto border-t border-color-grey-95-10 pt-2.5 text-xs leading-5">
                <span className="font-normal text-color-azure-60">
                  Authority:{" "}
                </span>

                <span className="font-semibold text-color-azure-11-2">
                  {layer.authority}
                </span>

                {layer.note && (
                  <span className="font-normal text-color-azure-60">
                    {" "}
                    {layer.note}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}